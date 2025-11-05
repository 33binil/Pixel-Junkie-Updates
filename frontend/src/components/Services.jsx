import React, { useEffect, useRef, useState } from 'react';

const Services = ({ showServices = true }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const servicesRef = useRef(null);
    const lastServiceRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            // Check if we've scrolled past the initial viewport
            if (window.scrollY > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Update active service based on scroll position
            if (servicesRef.current) {
                const services = servicesRef.current.querySelectorAll('.service-item');
                services.forEach((service, index) => {
                    const rect = service.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveService(index);
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div id="services" className="relative w-full bg-black text-white">
            {/* Top 5 Images */}
            <div
                className={`top-0 left-0 w-full z-10 transition-all duration-500 ${
                    isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100'
                }`}
            >
                <div className="flex relative w-full md:inset-0 justify-center">
                    <div
                        className={`
                flex gap-[5px]
                md:static
                top-0 left-0 w-full justify-center bg-black/50 backdrop-blur-sm py-2
                md:bg-transparent md:backdrop-blur-none md:py-0
                transition-all duration-700
            `}
                    >
                        {/* Box 1 - Branding & Identity */}
                        <div
                            className={`flex flex-col items-center mt-[37px] md:mt-[80px] transition-all duration-500 delay-300 ${
                                showServices
                                    ? 'transform translate-y-0 opacity-100'
                                    : 'transform translate-y-[100vh] opacity-0'
                            }`}
                        >
                            <div
                                className="w-[90px] h-[100px] md:w-[300px] md:h-[340px] border border-gray-200 shadow-lg"
                                style={{
                                    backgroundImage: 'url("/B&I.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">
                                Branding & Identity
                            </p>
                        </div>

                        {/* Box 2 - UI UX Designing */}
                        <div
                            className={`flex flex-col items-center mt-[100px] md:mt-[286px] transition-all duration-500 delay-400 ${
                                showServices
                                    ? 'transform translate-y-0 opacity-100'
                                    : 'transform translate-y-[100vh] opacity-0'
                            }`}
                        >
                            <div
                                className="w-[87px] h-[65px] md:w-[290px] md:h-[215px] border border-gray-200 shadow-lg"
                                style={{
                                    backgroundImage: 'url("/uiux.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">
                                UI UX Designing
                            </p>
                        </div>

                        {/* Box 3 - Web Development */}
                        <div
                            className={`flex flex-col items-center mt-[70px] md:mt-[192px] transition-all duration-500 delay-500 ${
                                showServices
                                    ? 'transform translate-y-0 opacity-100'
                                    : 'transform translate-y-[100vh] opacity-0'
                            }`}
                        >
                            <div
                                className="w-[87px] h-[120px] md:w-[290px] md:h-[395px] border border-gray-200 shadow-lg"
                                style={{
                                    backgroundImage: 'url("/wd.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">
                                Web Development
                            </p>
                        </div>

                        {/* Box 4 - Digital Marketing */}
                        <div
                            className={`flex flex-col items-center mt-[43px] md:mt-[101px] transition-all duration-500 delay-600 ${
                                showServices
                                    ? 'transform translate-y-0 opacity-100'
                                    : 'transform translate-y-[100vh] opacity-0'
                            }`}
                        >
                            <div
                                className="w-[87px] h-[100px] md:w-[290px] md:h-[330px] border border-gray-200 shadow-lg"
                                style={{
                                    backgroundImage: 'url("/dm.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <p className="text-white text-[10px] md:text-[14px] font-alata mt-2">
                                Digital Marketing
                            </p>
                        </div>

                        {/* Box 5 - Motion Graphics (hidden on mobile) */}
                        <div
                            className={`hidden md:flex flex-col items-center mt-[308px] transition-all duration-500 delay-700 ${
                                showServices
                                    ? 'transform translate-y-0 opacity-100'
                                    : 'transform translate-y-[100vh] opacity-0'
                            }`}
                        >
                            <div
                                className="w-[280px] h-[260px] border border-gray-200 shadow-lg"
                                style={{
                                    backgroundImage: 'url("/mg.webp")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <p className="text-white text-[14px] font-alata mt-2">
                                Motion Graphics
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Services Content */}
            <div className="relative z-20 pt-48 mx-2 pb-20" ref={servicesRef}>
                {/* Services Header */}
                <div className="sticky top-[170px] md:top-[100px] z-5 flex flex-col items-center w-full">
                    {/* OUR */}
                    <div className="w-full flex md:justify-center">
                        <h2 className={`text-white relative font-dela text-5xl md:text-9xl lg:text-[180px] xl:text-[220px] leading-[0.8] tracking-tight transition-all duration-700 delay-700 ${
                            showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[50px] opacity-0'
                        }`}>
                            OUR
                        </h2>
                    </div>

                    {/* SERVICES + small text */}
                    <div className="w-full flex justify-center relative mt-2 md:mt-4">
                        <h2 className={`text-white font-dela text-5xl md:text-9xl lg:text-[180px] xl:text-[220px] leading-[0.8] tracking-tight transition-all duration-700 delay-700 ${
                            showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[50px] opacity-0'
                        }`}>
                            SERVICES
                        </h2>

                        {/* Small text aligned to end of SERVICES */}
                        <span className={`absolute right-4 md:right-20 text-white -top-14 md:-top-8 font-alata text-xs md:text-sm leading-snug max-w-[200px] text-right transition-all duration-500 delay-400 ${
                            showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[30px] opacity-0'
                        }`}>
                            A Comprehensive<br />approach yields great<br />results
                        </span>
                    </div>
                </div>

                {/* Services List - Directly below OUR SERVICES */}
                <div className="relative mt-7 md:mt-16 w-full">
                    {/* 01 - Branding & Identity */}
                    <div className={`sticky top-[300px] md:top-[500px] z-10 flex items-center justify-center gap-8 transition-all duration-700 delay-700 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 01 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">01</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Branding & Identity</h3>
                                        <p className="text-[24px] leading-tight">
                                            We create powerful brand identities that go beyond logos, shaping visuals, voice, and strategy to help your business stand out and connect with your audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number + side lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">01</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                            Branding & Identity
                                        </h3>
                                        <p className="text-[12px] leading-tight">
                                            We create powerful brand identities that go beyond logos, shaping
                                            visuals, voice, and strategy to help your business stand out and
                                            connect with your audience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 02 - Business Consulting & Scaling Solutions */}
                    <div className={`sticky top-[300px] md:top-[500px] z-20 flex items-center justify-center gap-8 transition-all duration-700 delay-800 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 02 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">02</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">
                                            Business Consulting & Scaling Solutions
                                        </h3>
                                        <p className="text-[24px] leading-tight">
                                            We guide businesses from idea to growth, offering strategic insights, process optimization, and scalable solutions that help companies launch, adapt, and expand successfully.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number + side lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">02</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                            Business Consulting & Scaling Solutions
                                        </h3>
                                        <p className="text-[12px] leading-tight">
                                            We guide businesses from idea to growth, offering strategic insights,
                                            process optimization, and scalable solutions that help companies launch,
                                            adapt, and expand successfully.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 03 - UI UX Designing */}
                    <div className={`sticky top-[300px] md:top-[500px] z-30 flex items-center justify-center gap-8 transition-all duration-700 delay-900 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 03 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">03</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">UI UX Designing</h3>
                                        <p className="text-[24px] leading-tight">
                                            We design intuitive, user-friendly, and visually engaging digital experiences that enhance usability, boost engagement, and turn visitors into loyal customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">03</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">UI UX Designing</h3>
                                        <p className="text-[12px] leading-tight">
                                            We design intuitive, user-friendly, and visually engaging digital experiences
                                            that enhance usability, boost engagement, and turn visitors into loyal customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 04 - Web Development */}
                    <div className={`sticky top-[300px] md:top-[500px] z-40 flex items-center justify-center gap-8 transition-all duration-700 delay-1000 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 04 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">04</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Web Development</h3>
                                        <p className="text-[24px] leading-tight">
                                            We build fast, secure, and scalable websites tailored to your business needs, combining modern technology with seamless functionality to deliver powerful online experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">04</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Web Development</h3>
                                        <p className="text-[12px] leading-tight">
                                            We build fast, secure, and scalable websites tailored to your business needs,
                                            combining modern technology with seamless functionality to deliver powerful
                                            online experiences.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 05 - App Development */}
                    <div className={`sticky top-[300px] md:top-[500px] z-50 flex items-center justify-center gap-8 transition-all duration-700 delay-1100 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 05 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">05</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">App Development</h3>
                                        <p className="text-[24px] leading-tight">
                                            We create high-performance, user-centric mobile and web applications that combine sleek design with powerful functionality to drive engagement and business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">05</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">App Development</h3>
                                        <p className="text-[12px] leading-tight">
                                            We create high-performance, user-centric mobile and web applications
                                            that combine sleek design with powerful functionality to drive
                                            engagement and business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    {/* 06 - Digital Marketing & Strategy */}
                    <div className={`sticky top-[300px] md:top-[500px] z-[110] flex items-center justify-center gap-8 transition-all duration-700 delay-1200 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 06 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">06</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Digital Marketing & Strategy</h3>
                                        <p className="text-[24px] leading-tight">
                                            We craft data-driven marketing strategies that boost your online presence and drive measurable growth through SEO, social media, and targeted campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">06</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">
                                            Digital Marketing & Strategy
                                        </h3>
                                        <p className="text-[12px] leading-tight">
                                            We craft data-driven marketing strategies that boost your online presence
                                            and drive measurable growth through SEO, social media, and targeted campaigns.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 07 - Video Production */}
                    <div className={`sticky top-[300px] md:top-[500px] z-[110] flex items-center justify-center gap-8 transition-all duration-700 delay-1300 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[60px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 07 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">07</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Video Production</h3>
                                        <p className="text-[24px] leading-tight">
                                            We produce high-quality videos and motion graphics that tell your brand's story, engage audiences, and create lasting impact across digital platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">07</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Video Production</h3>
                                        <p className="text-[12px] leading-tight">
                                            We produce high-quality videos and motion graphics that tell your brand's story,
                                            engage audiences, and create lasting impact across digital platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 08 - Motion Graphics */}
                    <div ref={lastServiceRef} className={`sticky top-[400px] md:top-[500px] -mb-2 md:-mb-14 z-[120] flex items-center justify-center gap-8 transition-all duration-700 delay-1400 ${
                        showServices ? 'transform translate-y-0 opacity-100' : 'transform translate-y-[70px] opacity-0'
                    }`}>
                        <div className="hidden md:block">
                            <div className="bg-black w-screen h-screen px-10 py-8 rounded-lg">
                                <div className="flex items-center justify-center gap-8">
                                    {/* Left line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* 08 Number */}
                                    <div className="font-alumni-sans text-[400px] leading-none text-white">08</div>

                                    {/* Right line */}
                                    <div className="w-[90px] h-px bg-white"></div>

                                    {/* Description */}
                                    <div className="max-w-[500px] ml-8">
                                        <h3 className="font-alumni-sans text-[72px] leading-tight mb-4">Motion Graphics</h3>
                                        <p className="text-[24px] leading-tight">
                                            We design dynamic animations that bring ideas to life, simplify complex concepts, and captivate audiences with visually striking storytelling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block md:hidden">
                            <div className="bg-black px-10 py-8 rounded-lg">
                                <div className="flex flex-col items-center">
                                    {/* Number with lines */}
                                    <div className="flex items-center justify-center gap-4">
                                        {/* Left line */}
                                        <div className="w-[30px] h-px bg-white"></div>

                                        {/* Number */}
                                        <div className="font-alumni-sans text-[200px] leading-none text-white">08</div>

                                        {/* Right line */}
                                        <div className="w-[30px] h-px bg-white"></div>
                                    </div>

                                    {/* Description */}
                                    <div className="max-w-[500px] mt-8 text-center">
                                        <h3 className="font-alumni-sans text-[36px] leading-tight mb-4">Motion Graphics</h3>
                                        <p className="text-[12px] leading-tight">
                                            We design dynamic animations that bring ideas to life, simplify complex concepts,
                                            and captivate audiences with visually striking storytelling.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> {/* Close the services list container */}
            </div>
        </div>

    );
};

export default Services;
