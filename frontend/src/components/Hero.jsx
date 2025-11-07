import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/Loading.json';

// Hamburger Icon
const HamburgerIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const DESKTOP_IMAGES = [
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home1.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home2.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home3.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home4.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home5.webp',
];

const MOBILE_IMAGES = [
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home11.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home22.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home33.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home44.webp',
    'https://github.com/33binil/Pixel-Junkie-Updates/raw/main/frontend/public/home55.webp',
];

const Hero = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [showElements, setShowElements] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const images = isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES;
    const timerRef = useRef(null);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        setShowElements(true);
    }, []);

    useEffect(() => {
        const loadImage = (src) =>
            new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = resolve;
            });

        const initSlideshow = async () => {
            await Promise.all([...DESKTOP_IMAGES, ...MOBILE_IMAGES].map(loadImage));
            setImagesLoaded(true);
            timerRef.current = setInterval(() => {
                setPreviousIndex((prev) => currentIndex);
                setCurrentIndex((prev) => (prev + 1) % images.length);
            }, 3000);
        };

        initSlideshow();
        return () => clearInterval(timerRef.current);
    }, [images.length, currentIndex]);

    if (!imagesLoaded) {
        return (
            <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black z-50">
                <div className="w-64 h-64">
                    <Lottie animationData={loadingAnimation} loop={true} autoplay={true} />
                </div>
            </div>
        );
    }

    const nextIndex = (currentIndex + 1) % images.length;

    return (
        <div className="relative w-full h-screen overflow-hidden transition-all duration-500 ease-in-out">
            {/* Background Slideshow */}
            <div className="absolute inset-0 w-full h-full">
                {previousIndex !== null && (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${images[previousIndex]})`,
                            zIndex: 1,
                        }}
                    />
                )}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        zIndex: 2,
                    }}
                />
            </div>

            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="max-w-full mx-auto relative h-[10vh] px-[4vw] flex justify-between items-center">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={`w-[70px] md:w-[90px] transition-all duration-1000 ${
                            showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                        }`}
                    />

                    {/* Desktop Nav */}
                    <nav className="hidden sm:flex items-center gap-[3vw]">
                        {['Services', 'Projects', 'About Us'].map((item, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    const section = document.getElementById(item.toLowerCase().replace(' ', ''));
                                    section?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-alata text-white hover:scale-110 transition-transform duration-300"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => navigate('/client-application')}
                            className="text-[clamp(0.9rem,1.2vw,1.2rem)] font-alata text-white hover:scale-110 transition-transform duration-300"
                        >
                            Application Form
                        </button>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="sm:hidden text-white bg-transparent border-none"
                        onClick={() => setMobileOpen((s) => !s)}
                    >
                        <HamburgerIcon />
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileOpen && (
                    <div className="fixed inset-0 z-[95] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 md:space-y-8 text-white transition-all duration-300">
                        {['Services', 'Projects', 'About Us', 'Application Form'].map((item, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setMobileOpen(false);
                                    setTimeout(() => {
                                        if (item === 'Application Form') navigate('/client-application');
                                        else {
                                            const section = document.getElementById(item.toLowerCase().replace(' ', ''));
                                            section?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 300);
                                }}
                                className="w-full text-center py-4 text-[clamp(1.2rem,4vw,1.8rem)] font-alata text-white hover:text-[#2ab4bc] border-b border-white/10 transition-all duration-300"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="mt-8 px-8 py-3 bg-white/20 hover:bg-white hover:text-black rounded-full text-[clamp(1rem,2vw,1.3rem)] font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            Close Menu
                        </button>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-full w-full pt-[12vh] px-[4vw] flex flex-col justify-center">
                <div className="flex justify-between items-start w-full mb-[5vh] flex-wrap">
                    <div className={`flex items-center gap-3 transition-all duration-1000 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                        <img src="/company%20icon.png" alt="Company" className="w-5 md:w-8 h-auto" />
                        <h3 className="text-white font-bold text-[clamp(0.9rem,1.5vw,1.3rem)]">2024 - 2025</h3>
                    </div>

                    <div className="text-right font-alata space-y-1">
                        {[
                            'Brand Identity Design',
                            'UI/UX',
                            'Web',
                            'App Developments',
                            'Ads Production',
                            'Ongoing Support',
                        ].map((text, index) => (
                            <span key={index} className="glass text-white text-[clamp(0.8rem,1.3vw,1.1rem)] px-3 py-1 inline-block">
                {text}
              </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h1
                        className="font-dela font-bold text-white leading-none mb-4 text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]"
                    >
                        Pixel Junkie
                    </h1>
                    <div className="w-full flex justify-end">
                        <h2
                            className="font-dela font-bold text-white transition-all duration-1000 delay-300"
                            style={{ fontSize: 'clamp(1.8rem, 4vw, 6rem)' }}
                        >
                            Creative Studio
                        </h2>
                    </div>
                    <p
                        className="glass font-alata text-left mt-[2vh]"
                        style={{
                            fontSize: 'clamp(1rem, 1.5vw, 1.4rem)',
                            padding: 'clamp(1rem, 2vw, 2rem)',
                            maxWidth: '800px',
                        }}
                    >
                        We create digital designs that help brands move faster and convert better.
                        Your business deserves more than just a website. It needs results.
                    </p>
                </div>
            </div>

            <style jsx>{`
                .glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    border-radius: 4px;
                    display: inline-block;
                }
            `}</style>
        </div>
    );
};

export default Hero;
