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
        { num: "01", title: "Idea & Vision", text: "Define your services, target audience, and niche. Research competitors and draft a clear mission.", pos: "left-[500px] top-[0px]", mobilePos: "top-[0px] left-[120px]" },
        { num: "02", title: "Business Planning", text: "Decide business model, pricing, and set financial goals.", pos: "right-[520px] top-[200px]", mobilePos: "top-[200px] right-[160px]" },
        { num: "03", title: "Budgeting", text: "Plan startup costs (registration, domain, branding, software, hardware, marketing) and monthly expenses (salaries, subscriptions, marketing, utilities). Track revenue and profits.", pos: "left-[580px] top-[450px]", mobilePos: "top-[370px] right-[170px]" },
        { num: "04", title: "Branding & Identity", text: "Create brand name, logo, colors, and style guide. Set up domain, professional email, and social profiles.", pos: "right-[530px] top-[600px]", mobilePos: "top-[600px] -right-[10px]" },
        { num: "05", title: "Legal & Administration", text: "Register company, open business account, obtain tax IDs, and draft contracts.", pos: "left-[500px] top-[850px]", mobilePos: "top-[800px] -left-[20px]" },
        { num: "06", title: "Website & Digital Presence", text: "Design website (home, services, portfolio, contact). Optionally add client login, CMS/backend, payment gateway, and analytics.", pos: "right-[500px] top-[1000px]", mobilePos: "top-[1000px] left-[0px]" },
        { num: "07", title: "Tools & Tech", text: "Use project management, communication, design, and dev tools. Automate marketing where possible.", pos: "left-[560px] top-[1250px]", mobilePos: "top-[1200px] left-[130px]" },
        { num: "08", title: "Marketing & Outreach", text: "Build portfolio, run campaigns, leverage influencer partnerships, and email marketing.", pos: "right-[550px] top-[1450px]", mobilePos: "top-[1400px] right-[180px]" },
        { num: "09", title: "Client Acquisition & Sales", text: "Use proposals, contracts, free demos, and CRM to track and convert leads.", pos: "left-[550px] top-[1700px]", mobilePos: "top-[1650px] left-[0px]" },
        { num: "10", title: "Team & Operations", text: "Hire or outsource designers, developers, and marketers. Define roles, workflows, and communication.", pos: "right-[450px] top-[1950px]", mobilePos: "top-[1800px] left-[220px]" },
        { num: "11", title: "Growth & Scaling", text: "Expand services/products, retain clients, explore partnerships, and optimize operations.", pos: "left-[500px] top-[2200px]", mobilePos: "top-[2060px] left-[50px]" },
    ];

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden"
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
            <div className="relative w-full flex justify-center mt-[100px] sm:mt-[200px]">
                <svg
                    className="absolute left-1/2 -translate-x-1/2 h-[1800px] sm:h-[2700px]"
                    width="800"
                    viewBox="0 0 800 2800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        height: window.innerWidth < 640 ? "2400px" : "2700px", // ✅ fallback
                    }}
                >
                    <path
                        ref={pathRef}
                        d="M400 50
               C150 250, 650 350, 400 700
               C250 950, 600 1150, 400 1400
               C200 1650, 650 1850, 400 2240
               C250 2550, 850 2350, 400 2400"
                        stroke="#FFD93D"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                        style={{
                            strokeDasharray: pathLength,
                            strokeDashoffset: dashOffset,
                            transition: "stroke-dashoffset 0.2s linear",
                        }}
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
                            <div className="flex flex-col items-center gap-2 mb-2">
                                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                <h3 className="text-yellow-400 text-[14px] font-semibold font-architects-daughter">
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
