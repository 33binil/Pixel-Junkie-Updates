import React, { useEffect, useRef, useState } from "react";

const Services = ({ showServices = true }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [isLastService, setIsLastService] = useState(false);
    const servicesRef = useRef(null);
    const lastServiceRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            if (scrollPosition > windowHeight) {
                setIsScrolled(true);
                
                // Check if we've reached the last service
                if (lastServiceRef.current) {
                    const lastServiceRect = lastServiceRef.current.getBoundingClientRect();
                    if (lastServiceRect.top <= windowHeight * 0.2) {
                        setIsLastService(true);
                    } else {
                        setIsLastService(false);
                    }
                }
                
                // Update active service
                if (servicesRef.current) {
                    const services = servicesRef.current.querySelectorAll(".service-item");
                    services.forEach((service, index) => {
                        const rect = service.getBoundingClientRect();
                        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
                            setActiveService(index);
                        }
                    });
                }
            } else {
                setIsScrolled(false);
                setIsLastService(false);
            }
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="services" className="relative w-full bg-black text-white">
            {/* ------------------ TOP IMAGE ROW ------------------ */}
            <div
                className={`top-0 left-0 w-full z-10 transition-all duration-500 ${
                    isScrolled ? "opacity-0 -translate-y-full" : "opacity-100"
                }`}
            >
                <div className="flex w-full justify-center relative">
                    <div
                        className={`flex flex-wrap justify-center items-end gap-[0.4rem]
              bg-black/50 backdrop-blur-sm py-3
              md:flex-nowrap md:bg-transparent md:backdrop-blur-none md:py-0
              transition-all duration-700`}
                    >
                        {[
                            { img: "/B&I.webp", title: "Branding & Identity" },
                            { img: "/uiux.webp", title: "UI UX Designing" },
                            { img: "/wd.webp", title: "Web Development" },
                            { img: "/dm.webp", title: "Digital Marketing" },
                            { img: "/mg.webp", title: "Motion Graphics", hideMobile: true },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`${
                                    item.hideMobile ? "hidden sm:flex" : "flex"
                                } flex-col items-center transition-all duration-500 delay-${
                                    300 + i * 100
                                } ${showServices ? "translate-y-0 opacity-100" : "translate-y-[100vh] opacity-0"}`}
                                style={{ marginTop: `clamp(${1 + i}rem, ${3 + i * 2}vw, ${8 + i * 4}rem)` }}
                            >
                                <div
                                    className="rounded-md border border-gray-200 shadow-lg"
                                    style={{
                                        width: "clamp(90px, 20vw, 300px)",
                                        height: "clamp(100px, 30vh, 340px)",
                                        backgroundImage: `url(${item.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                ></div>
                                <p className="text-white font-alata mt-2 text-[clamp(0.6rem,1.2vw,1rem)]">
                                    {item.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ------------------ STICKY HEADER ------------------ */}
            <div 
                className={`sticky left-0 right-0 z-50 bg-black/95 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-8 border-b border-gray-700 shadow-lg transition-all duration-300 ${
                    isLastService ? 'top-0' : 'top-24'
                }`}
            >
                <div className="max-w-7xl mx-auto flex items-center">
                    <div className="h-10 w-1.5 bg-gradient-to-b from-orange-500 to-amber-400 rounded-full mr-3 sm:mr-4 shadow-lg"></div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {isLastService ? '08. Motion Graphics' : 'Our Services'}
                    </h2>
                    <div className="ml-auto hidden md:flex items-center space-x-1">
                        <span className="text-amber-400 font-mono text-sm">
                            {isLastService ? 'End of Services' : 'Scroll'}
                        </span>
                        {!isLastService && (
                            <svg className="w-5 h-5 text-amber-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        )}
                    </div>
                </div>
            </div>

            {/* ------------------ MAIN CONTENT ------------------ */}
            <div className="relative z-20 pt-[clamp(2rem,6vh,5rem)] pb-[clamp(1rem,3vh,3rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={servicesRef}>
                

                {/* ------------------ SERVICE STACK ------------------ */}
                <div className="relative mt-[clamp(2rem,6vh,4rem)] w-full">
                    {[
                        "Branding & Identity",
                        "Business Consulting & Scaling Solutions",
                        "UI UX Designing",
                        "Web Development",
                        "App Development",
                        "Digital Marketing & Strategy",
                        "Video Production",
                        "Motion Graphics",
                    ].map((service, i) => (
                        <div
                            key={i}
                            ref={i === 7 ? lastServiceRef : null}
                            className={`sticky top-[clamp(200px,35vh,500px)] service-item z-${i + 10} flex items-center justify-center gap-8 transition-all duration-700 delay-${700 + i * 100
                                } ${showServices ? "translate-y-0 opacity-100" : "translate-y-[60px] opacity-0"}`}
                            style={{ zIndex: 10 + i }}
                        >
                            <div className="hidden md:block">
                                <div className="bg-black px-[clamp(1rem,2vw,2.5rem)] py-[clamp(1rem,2vw,2.5rem)] rounded-lg">
                                    <div className="flex items-center justify-center gap-[clamp(1rem,3vw,2rem)]">
                                        <div className="w-[clamp(50px,6vw,90px)] h-px bg-white"></div>

                                        <div
                                            className="font-alumni-sans text-white leading-none"
                                            style={{ fontSize: "clamp(100px,20vw,400px)" }}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </div>

                                        <div className="w-[clamp(50px,6vw,90px)] h-px bg-white"></div>

                                        <div className="max-w-[clamp(300px,40vw,500px)] ml-[clamp(1rem,2vw,2rem)]">
                                            <h3
                                                className="font-alumni-sans text-white leading-tight mb-4"
                                                style={{ fontSize: "clamp(28px,5vw,72px)" }}
                                            >
                                                {service}
                                            </h3>
                                            <p
                                                className="text-white leading-tight"
                                                style={{ fontSize: "clamp(14px,1.8vw,24px)" }}
                                            >
                                                {getServiceDescription(service)}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Mobile Version --- */}
                            <div className="block md:hidden">
                                <div className="bg-black px-10 py-8 rounded-lg text-center">
                                    <div className="flex items-center justify-center gap-4">
                                        <div className="w-[30px] h-px bg-white"></div>
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>
                                    <h3 className="font-alumni-sans text-[36px] leading-tight mb-4 mt-6">{service}</h3>
                                    <p className="text-[12px] leading-tight px-2">{getServiceDescription(service)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper function for descriptions
function getServiceDescription(service) {
    const desc = {
        "Branding & Identity":
            "We create powerful brand identities that go beyond logos, shaping visuals, voice, and strategy to help your business stand out and connect with your audience.",
        "Business Consulting & Scaling Solutions":
            "We guide businesses from idea to growth, offering strategic insights, process optimization, and scalable solutions that help companies launch, adapt, and expand successfully.",
        "UI UX Designing":
            "We design intuitive, user-friendly, and visually engaging digital experiences that enhance usability, boost engagement, and turn visitors into loyal customers.",
        "Web Development":
            "We build fast, secure, and scalable websites tailored to your business needs, combining modern technology with seamless functionality to deliver powerful online experiences.",
        "App Development":
            "We create high-performance, user-centric mobile and web applications that combine sleek design with powerful functionality to drive engagement and business growth.",
        "Digital Marketing & Strategy":
            "We craft data-driven marketing strategies that boost your online presence and drive measurable growth through SEO, social media, and targeted campaigns.",
        "Video Production":
            "We produce high-quality videos and motion graphics that tell your brand's story, engage audiences, and create lasting impact across digital platforms.",
        "Motion Graphics":
            "We design dynamic animations that bring ideas to life, simplify complex concepts, and captivate audiences with visually striking storytelling.",
    };
    return desc[service];
}

export default Services;
