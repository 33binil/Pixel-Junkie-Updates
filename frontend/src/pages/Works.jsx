import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/LogoAnimation.css';

const Works = () => {
    const containerRef = React.useRef(null);
    const viewportCenterRef = React.useRef(window.innerWidth / 2);
    const lastFrameRef = React.useRef(0);
    const animationRef = React.useRef(null);

    React.useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = (timestamp) => {
            if (!containerRef.current) return;
            if (timestamp - lastFrameRef.current < 16) return; // Limit to ~60fps
            lastFrameRef.current = timestamp;

            const centerX = viewportCenterRef.current;
            const logoItems = containerRef.current.getElementsByClassName('logo-item');

            Array.from(logoItems).forEach((item) => {
                const rect = item.getBoundingClientRect();
                const itemCenterX = rect.left + rect.width / 2;
                const distance = centerX - itemCenterX;
                const maxScale = 1.4;
                const scalingDistance = 300;
                const scale = Math.max(
                    1,
                    maxScale - (Math.abs(distance) / scalingDistance)
                );
                item.style.transform = `scale(${scale})`;
            });
        };

        const animate = (timestamp) => {
            handleScroll(timestamp);
            animationRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            viewportCenterRef.current = window.innerWidth / 2;
        };

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            } else {
                animationRef.current = requestAnimationFrame(animate);
            }
        };

        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F5F5ED' }}>
            {/* Navbar */}
            <Navbar currentPage="works" />
            
            <div className="flex flex-col">
                {/* Image Box Section */}
<div className="flex flex-col items-center justify-center ">
                    <div 
className="relative w-screen flex items-center justify-center"
                        style={{
                            height: '350px',
                            minHeight: '550px',
                            maxHeight: '530px',
                            backgroundImage: 'url(/Works.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        {/* 50% Black Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        
                        {/* Text Content */}
<div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
<h1 className="font-vogca text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-8">
                                OUR WORKS
                            </h1>
<p className="font-lexend text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
                                We craft bold brands, immersive websites, and powerful digital experiences that help businesses stand out. From design to development, every project is built with creativity, strategy, and precision.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Logo Slider Section */}
                <div className="logo-container mt-4 md:mt-16 py-8 md:py-16">
                    <div ref={containerRef} className="animate-scroll">
                        <div className="logo-wrapper">
                        {/* First set of logos */}
                        {[...Array(17)].map((_, index) => (
                            <div 
                                key={`first-${index}`}
className="logo-item flex-none mx-2 sm:mx-3 md:mx-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#7D7D7D] rounded-lg flex items-center justify-center p-4 sm:p-5 md:p-6 hover:opacity-90 transition-all duration-300 shadow-md"
                            >
                                <img
                                    src={`/${index + 1}.png`}
                                    alt={`Client Logo ${index + 1}`}
                                    className="w-4/5 h-4/5 object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate set of logos for seamless loop */}
                        {[...Array(17)].map((_, index) => (
                            <div 
                                key={`second-${index}`}
className="flex-none mx-2 sm:mx-3 md:mx-4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-[#7D7D7D] rounded-lg flex items-center justify-center p-4 sm:p-5 md:p-6 hover:opacity-90 transition-all duration-300 shadow-md"
                            >
                                <img
                                    src={`/${index + 1}.png`}
                                    alt={`Client Logo ${index + 1}`}
                                    className="w-4/5 h-4/5 object-contain"
                                />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
