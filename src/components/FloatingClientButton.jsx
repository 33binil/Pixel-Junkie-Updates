import React, { useState, useEffect } from 'react';

const FloatingClientButton = ({ onOpen }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Try to find the actual Intro and Bottom sections
            const introSection = document.querySelector('[data-section="intro"]');
            const bottomSection = document.querySelector('[data-section="bottom"]');
            
            let showThreshold = 0;
            let hideThreshold = Infinity;
            
            if (introSection) {
                // Show when Intro section comes into view (with some offset)
                const introRect = introSection.getBoundingClientRect();
                const introOffsetTop = scrollPosition + introRect.top;
                showThreshold = Math.max(0, introOffsetTop - windowHeight + 100);
            } else {
                // Fallback: Use viewport-based calculation for mobile vs desktop
                const isMobile = windowHeight < 1024;
                showThreshold = isMobile ? windowHeight * 1.2 : windowHeight * 2; // Earlier on mobile
            }
            
            if (bottomSection) {
                // Hide when Bottom section is mostly out of view
                const bottomRect = bottomSection.getBoundingClientRect();
                const bottomOffsetTop = scrollPosition + bottomRect.top;
                hideThreshold = bottomOffsetTop + bottomSection.offsetHeight + 200;
            } else {
                // Fallback: Hide after a reasonable scroll distance
                hideThreshold = document.documentElement.scrollHeight - windowHeight * 2;
            }
            
            if (scrollPosition >= showThreshold && scrollPosition <= hideThreshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Add a small delay to ensure DOM is fully loaded
        const timeoutId = setTimeout(() => {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial position
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        console.log('Client Application button clicked');
        if (onOpen) {
            onOpen();
        }
    };

    if (!isVisible) return null;

    return (
        <div 
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] animate-fade-in"
            style={{ zIndex: 9999 }}
        >
            <button
                onClick={handleClick}
                className="bg-[#a95c3d] hover:bg-[#4D4C37] text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-500 hover:border-gray-400"
            >
                <div className="flex items-center space-x-2">
                    <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                        />
                    </svg>
                    <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                        Client Application
                    </span>
                </div>
            </button>
        </div>
    );
};

export default FloatingClientButton;