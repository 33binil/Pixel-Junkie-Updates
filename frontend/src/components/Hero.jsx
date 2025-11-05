import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../../public/Loading.json';

// Hamburger icon component
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
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [previousIndex, setPreviousIndex] = useState(null);
    const [showNext, setShowNext] = useState(false);
    const [showElements, setShowElements] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const images = isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES;
    const timerRef = useRef(null);
    const transitionTimeoutRef = useRef(null);

    // Check screen size on component mount and window resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkScreenSize);
            if (timerRef.current) clearTimeout(timerRef.current);
            if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current);
        };
    }, []);

    // Show elements with animation
    useEffect(() => {
        setShowElements(true);
    }, []);

    // Initialize slideshow
    useEffect(() => {
        const loadImage = (src) => new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            if (img.complete) {
                resolve();
            } else {
                img.onload = resolve;
                img.onerror = resolve; // Continue even if some images fail
            }
        });

        const initSlideshow = async () => {
            // Preload all images first
            await Promise.all([...DESKTOP_IMAGES, ...MOBILE_IMAGES].map(loadImage));
            
            setImagesLoaded(true);
            
            // Start the slideshow
            const slide = () => {
                setCurrentIndex(prev => (prev + 1) % images.length);
                timerRef.current = setTimeout(slide, 2000); // 2 seconds per slide
            };
            
            // Initial delay before starting slideshow
            timerRef.current = setTimeout(slide, 2000);
        };

        initSlideshow();
        
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [images.length]);

    // Simplified slideshow logic
    useEffect(() => {
        if (!imagesLoaded) return;
        
        const nextIndex = (currentIndex + 1) % images.length;
        
        // Show next image after 2 seconds
        const timer = setTimeout(() => {
            setPreviousIndex(currentIndex);
            setCurrentIndex(nextIndex);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, [currentIndex, imagesLoaded, images]);

    const nextIndex = (currentIndex + 1) % images.length;

    // Loading overlay with Lottie animation
    if (!imagesLoaded) {
        return (
            <div className="fixed inset-0 w-full h-screen flex flex-col items-center justify-center bg-black z-50">
                <div className="w-64 h-64">
                    <Lottie 
                        animationData={loadingAnimation} 
                        loop={true} 
                        autoplay={true}
                    />
                </div>
            
            </div>
        );
    }

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background images with slideshow */}
            <div className="absolute inset-0 w-full h-full">
                {/* Previous image (static) */}
                {previousIndex !== null && (
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${images[previousIndex]})`,
                            zIndex: 1,
                        }}
                        alt="Previous slide"
                    />
                )}

                {/* Current image */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${images[currentIndex]})`,
                        zIndex: 2,
                    }}
                    alt="Current slide"
                />

                {/* Next image - simple fade transition */}
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${images[nextIndex]})`,
                        zIndex: 2,
                        opacity: isTransitioning ? 1 : 0,
                    }}
                    alt="Next slide"
                />
            </div>
            
            {/* Navbar */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <div className="max-w-full mx-auto relative h-20">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={`absolute w-[74px] md:w-[97px] left-5 transition-all duration-1000 ${
                            showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                        }`}
                    />

                    <nav className="flex relative items-center justify-center h-20">
                        {/* centered nav hidden on small screens */}
                        <div className="hidden sm:flex items-center justify-center w-full">
                            <div className="flex gap-6 md:gap-12 lg:gap-24 xl:gap-32 2xl:gap-40">
                                <button 
                                    onClick={() => {
                                        const servicesSection = document.getElementById('services');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }} 
                                    className={`text-[16px] md:text-[18px] font-alata text-white transition-all duration-700 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                        showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                    }`}
                                >
                                    Services
                                </button>
                                <button 
                                    onClick={() => {
                                        const projectsSection = document.getElementById('projects');
                                        projectsSection?.scrollIntoView({ behavior: 'smooth' });
                                    }} 
                                    className={`text-[16px] md:text-[18px] font-alata text-white transition-all duration-700 delay-100 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                        showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                    }`}
                                >
                                    Projects
                                </button>
                                <button 
                                    onClick={() => {
                                        const aboutSection = document.getElementById('about');
                                        aboutSection?.scrollIntoView({ behavior: 'smooth' });
                                    }} 
                                    className={`text-[16px] md:text-[18px] font-alata text-white transition-all duration-700 delay-200 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                        showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                    }`}
                                >
                                    About Us
                                </button>
                            </div>
                            <button 
                                onClick={() => navigate('/client-application')} 
                                className={`md:ml-[40px] lg:ml-[120px] text-[18px] md:text-[18px] font-alata text-white transition-all duration-700 delay-300 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
                                }`}
                            >
                                Application Form
                            </button>
                        </div>

                        {/* mobile menu icon visible only on small screens */}
                        <button
                            aria-label="Open menu"
                            className={`sm:hidden absolute right-4 top-4 text-white bg-transparent border-none p-2 transition-all duration-700 ${
                                showElements ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                            onClick={() => setMobileOpen((s) => !s)}
                        >
                            <HamburgerIcon />
                        </button>
                    </nav>
                </div>

                {/* Mobile & Tablet overlay menu */}
                {mobileOpen && (
                    <div className={`fixed inset-0 z-[95] bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 md:space-y-8 text-white transition-all duration-300 ${
                        showElements ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}>
                        <div className="flex flex-col items-center justify-center w-full px-4 max-w-md mx-auto">
                            <button 
                                onClick={() => { 
                                    setMobileOpen(false);
                                    setTimeout(() => {
                                        const servicesSection = document.getElementById('services');
                                        servicesSection?.scrollIntoView({ behavior: 'smooth' });
                                    }, 300);
                                }} 
                                className="w-full py-4 text-xl md:text-2xl font-alata text-white hover:text-[#2ab4bc] transition-colors duration-300 border-b border-white/10"
                            >
                                Services
                            </button>
                            <button 
                                onClick={() => { 
                                    setMobileOpen(false);
                                    setTimeout(() => {
                                        const projectsSection = document.getElementById('projects');
                                        projectsSection?.scrollIntoView({ behavior: 'smooth' });
                                    }, 300);
                                }} 
                                className="w-full py-4 text-xl md:text-2xl font-alata text-white hover:text-[#2ab4bc] transition-colors duration-300 border-b border-white/10"
                            >
                                Projects
                            </button>
                            <button 
                                onClick={() => { 
                                    setMobileOpen(false);
                                    setTimeout(() => {
                                        const aboutSection = document.getElementById('about');
                                        aboutSection?.scrollIntoView({ behavior: 'smooth' });
                                    }, 300);
                                }} 
                                className="w-full py-4 text-xl md:text-2xl font-alata text-white hover:text-[#2ab4bc] transition-colors duration-300 border-b border-white/10"
                            >
                                About Us
                            </button>
                            <button 
                                onClick={() => { 
                                    setMobileOpen(false);
                                    setTimeout(() => navigate('/client-application'), 300);
                                }} 
                                className="w-full py-4 text-xl md:text-2xl font-alata text-white hover:text-[#2ab4bc] transition-colors duration-300 border-b border-white/10"
                            >
                                Application Form
                            </button>
                            <button 
                                onClick={() => setMobileOpen(false)} 
                                className="mt-8 px-8 py-3 bg-white/20 hover:bg-white hover:text-black rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                            >
                                Close Menu
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {/* Main content placed visually over the background */}
            <div className="relative z-10 h-full w-full pt-20">
                <div className="container mx-auto px-4 h-full flex flex-col justify-center">
                    {/* Top section with year and services */}
                    <div className="flex justify-between items-start w-full mb-8 md:mb-16">
                        {/* Left side - Year */}
                        <div className={`flex items-center gap-3 transition-all duration-1000 ${
                            showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}>
                            <img 
                                src="/company%20icon.png" 
                                alt="Company" 
                                className={`w-5 md:w-8 h-auto transition-all duration-1000 ${
                                    showElements ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`} 
                            />
                            <h3 className={`text-[14px] md:text-xl font-bold text-white transition-all duration-1000 delay-200 ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                            }`}>
                                2024 - 2025
                            </h3>
                        </div>

                        {/* Right side - Services */}
                        <div className="text-right font-alata">
                            {[
                                'Brand Identity Design',
                                'UI/UX, Web, App Developments',
                                'Ads Production',
                                'Ongoing Support'
                            ].map((text, index) => (
                                <div 
                                    key={index}
                                    className="mb-0"
                                >
                                    <span className="glass text-white text-sm md:text-lg px-3 py-0 inline-block">
                                        {text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main heading section */}
                    <div className="w-full mt-8 md:mt-16">
                        {/* Pixel Junkie heading */}
                        <div className="text-left">
                            <h1 className={`font-bold text-6xl md:text-8xl font-dela  lg:text-[150px] xl:text-[200px] text-white mb-4 md:mb-6 leading-none transition-all duration-1000 ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}>
                                Pixel Junkie
                            </h1>
                            
                            {/* Creative Studio text below Pixel Junkie - aligned to right */}
                            <div className="w-full flex justify-end">
                                <h2 className={`font-bold font-dela text-4xl md:text-6xl lg:text-[100px] xl:text-[100px] text-white mb-8 md:mb-12 transition-all duration-1000 delay-300 ${
                                    showElements ? 'opacity-100' : 'opacity-0'
                                }`}>
                                    Creative Studio
                                </h2>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="w-full max-w-2xl">
                            <p className={`glass text-base md:text-[24px] font-alata p-6 text-left transition-all duration-1000 delay-500 ${
                                showElements ? 'opacity-100' : 'opacity-0'
                            }`}>
                                We create digital designs that help brands move faster and convert better. Your business deserves more than just a website. It needs results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes slideIn {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(0); }
                }
                .animate-slideIn {
                    animation: slideIn 1s ease-in-out forwards;
                }
                
                .glass {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    -webkit-backdrop-filter: blur(5px);
                    padding: 8px 16px;
                    border-radius: 4px;
                    display: inline-block;
                    margin: 4px 0;
                }
                
                .glass-text-shadow {
                    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
                }
                
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
};

export default Hero;
