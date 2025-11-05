import React, { useRef, useEffect, useState } from "react";

export default function AboutUs() {
    const pathRef = useRef(null);
    const sectionRef = useRef(null);
    const [dashOffset, setDashOffset] = useState(0);
    const [pathLength, setPathLength] = useState(0);
    const [imageIndices, setImageIndices] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            setPathLength(length);
            setDashOffset(length); // hide initially
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!pathRef.current || !sectionRef.current) return;

            const sectionRect = sectionRef.current.getBoundingClientRect();
            const pathRect = pathRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const triggerPoint = windowHeight * 0.75;

            if (pathRect.top < triggerPoint && pathRect.bottom > 0) {
                const totalScrollable = pathRect.height;
                const scrolledPastTrigger = Math.max(0, triggerPoint - pathRect.top);
                let progress = scrolledPastTrigger / totalScrollable;
                progress = Math.min(Math.max(progress, 0), 1);
                setDashOffset(pathLength * (1 - progress));
            } else if (pathRect.top >= triggerPoint) {
                setDashOffset(pathLength);
            } else if (pathRect.bottom <= 0) {
                setDashOffset(0);
            }
        };

        const sectionElement = sectionRef.current;
        if (sectionElement) {
            sectionElement.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (sectionElement) {
                sectionElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [pathLength]);

    useEffect(() => {
        const intervals = [];
        for (let i = 0; i < 5; i++) {
            const update = () => {
                setImageIndices(prev => {
                    const newIndices = [...prev];
                    newIndices[i] = (newIndices[i] + 1) % 3;
                    return newIndices;
                });
                const delay = 1000 + Math.random() * 1000; // 1-2 seconds random
                intervals[i] = setTimeout(update, delay);
            };
            update();
        }
        return () => {
            intervals.forEach(clearTimeout);
        };
    }, []);

    const timelineItems = [
        { num: "01", title: "Idea & Vision", text: "Define your services, target audience, and niche. Research competitors and draft a clear mission.", pos: "left-[500px] top-[0px]", mobilePos: "top-[0px] left-[160px]" },
        { num: "02", title: "Business Planning", text: "Decide business model, pricing, and set financial goals.", pos: "right-[520px] top-[200px]", mobilePos: "top-[150px] right-[160px]" },
        { num: "03", title: "Budgeting", text: "Plan startup costs (registration, domain, branding, software, hardware, marketing) and monthly expenses (salaries, subscriptions, marketing, utilities). Track revenue and profits.", pos: "left-[580px] top-[300px]", mobilePos: "top-[270px] left-[170px]" },
        { num: "04", title: "Branding & Identity", text: "Create brand name, logo, colors, and style guide. Set up domain, professional email, and social profiles.", pos: "right-[530px] top-[500px]", mobilePos: "top-[460px] right-[130px]" },
        { num: "05", title: "Legal & Administration", text: "Register company, open business account, obtain tax IDs, and draft contracts.", pos: "left-[500px] top-[700px]", mobilePos: "top-[650px] left-[120px]" },
        { num: "06", title: "Website & Digital Presence", text: "Design website (home, services, portfolio, contact). Optionally add client login, CMS/backend, payment gateway, and analytics.", pos: "right-[500px] top-[900px]", mobilePos: "top-[830px] left-[0px]" },
        { num: "07", title: "Tools & Tech", text: "Use project management, communication, design, and dev tools. Automate marketing where possible.", pos: "left-[560px] top-[1100px]", mobilePos: "top-[1030px] left-[130px]" },
        { num: "08", title: "Marketing & Outreach", text: "Build portfolio, run campaigns, leverage influencer partnerships, and email marketing.", pos: "right-[550px] top-[1250px]", mobilePos: "top-[1200px] right-[180px]" },
        { num: "09", title: "Client Acquisition & Sales", text: "Use proposals, contracts, free demos, and CRM to track and convert leads.", pos: "left-[550px] top-[1400px]", mobilePos: "top-[1340px] left-[160px]" },
        { num: "10", title: "Team & Operations", text: "Hire or outsource designers, developers, and marketers. Define roles, workflows, and communication.", pos: "right-[450px] top-[1550px]", mobilePos: "top-[1500px] right-[160px]" },
        { num: "11", title: "Growth & Scaling", text: "Expand services/products, retain clients, explore partnerships, and optimize operations.", pos: "left-[500px] top-[1700px]", mobilePos: "top-[1700px] left-[100px]" },
    ];

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-start"
        >
            <div
                className="relative w-full flex justify-center items-center gap-[40px] sm:gap-[120px] mt-[100px]
             flex-wrap sm:flex-nowrap"
            >
                {/* Show 5 boxes on desktop, 3 on mobile */}
                {[...Array(5)].map((_, i) => {
                    // Desktop positions
                    const desktopTops = [-63, 320, 120, -40, 160];
                    // Mobile positions (adjusted for good vertical alignment)
                    const mobileTops = [0, 40, -20, 0, 0];

                    return (
                        <div
                            key={i}
                            className={`rounded-xl shadow-lg relative
                    ${i < 3 ? "block" : "hidden"} sm:block
                    w-[100px] h-[100px] sm:w-[200px] sm:h-[200px]`}
                            style={{
                                top: window.innerWidth < 640 ? `${mobileTops[i]}px` : `${desktopTops[i]}px`,
                                backgroundImage: `url("/au${i+1}-${imageIndices[i] + 1}.webp")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        ></div>
                    );
                })}
            </div>


            {/* About Us Title */}
            <h1 className="text-white font-['Dela_Gothic_One'] text-[100px] sm:text-[300px] leading-none text-center mt-[300px] sm:mt-[400px] select-none">
                About Us
            </h1>

            {/* Subtext */}
            <p className="text-white text-[16px] sm:text-[24px] text-center max-w-[90%] sm:max-w-[900px] mt-4 sm:mt-8 leading-relaxed font-sans">
                we are a creative collective of event producers, marketing specialists,
                art directors, designers, and strategic analysts.
            </p>

            {/* Timeline */}
            <div className="relative w-full flex justify-center mt-[100px] sm:mt-[200px] min-h-[2000px] sm:min-h-[2200px]">
                <svg
                    className="absolute left-1/2 -translate-x-1/2 h-[1681px]"
                    width="130"
                    height="1681"
                    viewBox="0 0 127 1681"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        height: "1681px",
                    }}
                >
                    <path
                        d="M0.5 0.0078125L1.5 63.5078C1.5 63.5078 1.97182 84.4491 7 96.5078C12.1106 108.764 17.7706 114.46 27 124.008C38.1167 135.508 59.5 152.008 76.5 163.508C97.4154 177.656 109.867 189.008 120 208.008C126.54 220.269 127.5 226.111 127.5 240.008C127.5 263.508 118.5 276.523 107 291.508C101.5 298.674 98.5 301.508 75.5 323.008C54.0239 343.083 59 334.508 37 360.508C15 386.508 13 398.008 14.5 411.508C16.1781 426.61 18 432.508 27 449.508C33.9686 462.671 35.2361 463.832 43 474.508C55 491.008 61.1256 497.555 68.5 512.008C74.8755 524.503 76.6888 532.598 78.5 546.508C80.0379 558.319 78.1248 561.89 75.5 573.508C71.9132 589.384 66.8168 598.017 58.5 612.008C50.218 625.94 48 628.008 36 649.508C28.189 663.503 22.1276 673.708 16.5 687.508C10.5 702.22 8.38674 706.935 7 721.008C4.98327 741.474 8.09013 754.524 16 773.508C21 785.508 29.7941 800.949 40.5 817.008C46.5 826.008 64.2775 847.191 76.0001 873.008C84.0731 890.787 88.4993 897.846 92.5001 915.008C96.0641 930.297 97.6554 942.761 96.5 955.008C94.4893 976.321 90.3023 986.493 81.5 1006.01C75.5242 1019.26 70 1030.01 63.5 1040.01C50.4491 1060.09 39.8001 1077.91 33.5 1094.01C27.1999 1110.1 24.6845 1118.8 23 1136.01C21.8393 1147.86 23.0862 1160.51 24 1167.51C25.697 1180.51 30.5862 1193.82 36.5 1207.01C43 1221.51 50 1229.51 62.5 1255.01C67.7607 1265.74 73.9418 1277.14 76 1288.01C78.2163 1299.71 78.5902 1306.88 76 1318.51C73.8311 1328.24 68.1851 1339.51 65.5 1345.51C59.6823 1358.51 49 1370.01 40.5 1395.01C34.7929 1411.79 32.9431 1422.29 33.5 1440.01C34.2857 1465.01 37.5563 1471.39 46 1489.51C52.2901 1503.01 59.6856 1508.76 70 1519.51C77.2 1527.01 86.5 1535.82 98.5 1550.51C111.508 1566.43 114.445 1575.08 119.5 1595.01C124.012 1612.8 123 1624.65 123 1643.01C123 1657.85 123 1681.01 123 1681.01"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>

                {/* 🖥 Desktop Timeline Points (unchanged) */}
                <div className="relative w-full max-w-[1000px] hidden sm:block">
                    {timelineItems.map((item, i) => (
                        <div key={i} className={`absolute ${item.pos} max-w-[350px]`}>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                <h3 className="text-yellow-400 text-[12px] md:text-[20px] font-semibold font-architects-daughter">
                                    {item.num}. {item.title}
                                </h3>
                            </div>
                            <p className="text-[8px] md:text-[16px] text-gray-300 leading-relaxed font-architects-daughter">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* 📱 Mobile Timeline (centered, adjustable) */}
                <div className="relative sm:hidden mt-10 px-44 z-10">
                    {timelineItems.map((item, i) => (
                        <div
                            key={i}
                            className={`
                    max-w-[60%] text-center absolute ${item.mobilePos}
                `}
                        >
                            <div className="flex flex-col items-center gap-1 mb-2">
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                <h3 className="text-yellow-400 text-[12px] md:text-[14px] font-semibold font-architects-daughter">
                                    {item.num}. {item.title}
                                </h3>
                            </div>
                            <p className="text-gray-300 text-[12px] leading-relaxed font-architects-daughter">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
