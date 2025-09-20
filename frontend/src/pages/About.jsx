import React, { useEffect, useState, useRef } from "react";

const About = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
            setScreenWidth(window.innerWidth);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!aboutRef.current || isSticky) return; // Stop checking once sticky

            const rect = aboutRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if About section is showing in full screen
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                setIsSticky(true); // Make it sticky permanently
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isSticky]);

    return (
        <section
            ref={aboutRef}
            className={`w-full min-h-screen bg-transparent px-4 py-4 ${isSticky ? 'sticky top-0' : 'relative'}`}
            style={{
                overflow: 'hidden',
                maxWidth: '100vw',
                zIndex: isSticky ? 100 : 'auto'
            }}
        >
            {/* Mobile / Tablet (column layout) */}
            <div className="flex flex-col gap-4 sm:gap-6 md:hidden" style={{ overflow: 'hidden', maxWidth: '100vw' }}>
                {/* Section 1 Box */}
                <div
                    className="w-full flex items-center justify-center px-4 sm:px-6"
                    style={{
                        backgroundColor: "#9A3F3F",
                        padding: "20px 16px", // Base mobile
                    }}
                >
                    <p
                        className="font-insomatte text-center"
                        style={{
                            color: "#FBF9D1",
                            fontSize: screenWidth >= 428 ? "22px" : screenWidth >= 390 ? "20px" : "19px", // iPhone 14 Pro Max, iPhone 12 Pro, smaller phones
                            lineHeight: "1.4",
                            margin: "0",
                            padding: screenWidth >= 428 ? "25px 20px" : screenWidth >= 390 ? "20px 15px" : "15px 10px" // Responsive padding
                        }}
                    >
                        Pixel Junkie Creative Studio is a high-tech creative and
                        digital solutions company that empowers entrepreneurs and
                        organizations to build, launch, and grow their businesses.
                        From branding and identity to web development, UI/UX design,
                        digital marketing, and motion graphics, we provide end-to-end
                        solutions that transform ideas into impactful companies. Our
                        focus is on combining creativity with cutting-edge technology
                        to deliver innovative, scalable, and future-ready businesses.
                    </p>
                </div>

                {/* Section 2 Box */}
                <div
                    className="w-full"
                    style={{
                        backgroundColor: "#C1856D",
                        minHeight: screenWidth >= 428 ? "320px" : screenWidth >= 390 ? "300px" : "280px" // Responsive height for different screen sizes
                    }}
                ></div>
            </div>

            {/* Desktop (exact Figma positioning) */}
            <div className="hidden md:block relative w-full h-screen">
                {/* Section 1 Box */}
                <div
                    className="absolute"
                    style={{
                        width: "1290px",
                        height: "980px",
                        backgroundColor: "#9A3F3F",
                        left: "197px",
                        top: "150px",
                    }}
                >
                    <p
                        className="font-insomatte leading-relaxed text-center relative"
                        style={{
                            width: "900px",
                            left: "60px",
                            top: "150px",
                            color: "#FBF9D1",
                            fontSize: "39px",
                            lineHeight: "1.8",
                        }}
                    >
                        Pixel Junkie Creative Studio is a high-tech creative and
                        digital solutions company that empowers entrepreneurs and
                        organizations to build, launch, and grow their businesses.
                        From branding and identity to web development, UI/UX design,
                        digital marketing, and motion graphics, we provide end-to-end
                        solutions that transform ideas into impactful companies. Our
                        focus is on combining creativity with cutting-edge technology
                        to deliver innovative, scalable, and future-ready businesses.
                    </p>
                </div>

                {/* Section 2 Box */}
                <div
                    className="absolute"
                    style={{
                        width: "530px",
                        height: "760px",
                        backgroundColor: "#C1856D",
                        left: "1213px",
                        top: "370px",
                    }}
                ></div>
            </div>
        </section>
    );
};

export default About;