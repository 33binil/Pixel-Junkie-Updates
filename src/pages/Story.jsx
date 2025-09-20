import React, { useEffect, useState, useRef } from 'react';

const Story = () => {
    const [scrollY, setScrollY] = useState(0);
    const storyRef = useRef(null);

    useEffect(() => {
        // Add scroll event listener
        const handleScroll = () => {
            if (storyRef.current) {
                const rect = storyRef.current.getBoundingClientRect();
                const scrollIntoStory = Math.max(0, -rect.top);
                setScrollY(scrollIntoStory);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Desktop animation phases
    const phase1 = 200; // Video grows from small to full screen
    const phase2 = 400; // Full screen viewing time
    const phase3 = 600; // Shrinking animation starts

    // Mobile/Tablet animation phases (your specification)
    const mobilePhase1 = 300; // 0-300px: Video starts small off-screen, slides up and grows to full screen
    const mobilePhase2 = 100; // 300-400px: Video stays full screen and sticky, no text visible (reduced)
    const mobilePhase3 = 400; // 400-800px: Text box slides up from bottom with gradient overlay (earlier start)
    const mobilePhase4 = 600; // 800-1000px: Text box stays visible and stable
    const mobilePhase5 = 650; // 1000-1350px: Fade out phase when Review section approaches (slower fade)

    let videoScale, videoPosition, textOpacity, videoWidth;
    let mobileTextOpacity, mobileTextPosition, mobileStoryOpacity;

    // Desktop animations (unchanged)
    if (scrollY <= phase1) {
        const progress = scrollY / phase1;
        videoScale = 0.3 + (progress * 0.7);
        videoPosition = 80 - (progress * 80);
        textOpacity = 0;
        videoWidth = '60vw';
    } else if (scrollY <= phase1 + phase2) {
        videoScale = 1;
        videoPosition = 0;
        textOpacity = 0;
        videoWidth = '100vw';
    } else {
        const progress = Math.min((scrollY - phase1 - phase2) / phase3, 1);
        const minWidth = 45;
        const maxWidth = 100;
        videoScale = 1;
        videoPosition = 0;
        textOpacity = progress;
        const targetWidth = minWidth + ((1 - progress) * (maxWidth - minWidth));
        videoWidth = `${targetWidth}vw`;
    }

    // Mobile/Tablet animations (your specification)
    if (scrollY <= mobilePhase1) {
        // Phase 1: Video starts small off-screen, slides up and grows to full screen
        mobileTextOpacity = 0;
        mobileTextPosition = 100; // Text stays off-screen
        mobileStoryOpacity = 1;
    } else if (scrollY <= mobilePhase1 + mobilePhase2) {
        // Phase 2: Video stays full screen and sticky, no text visible
        mobileTextOpacity = 0;
        mobileTextPosition = 100; // Text still off-screen
        mobileStoryOpacity = 1;
    } else if (scrollY <= mobilePhase1 + mobilePhase2 + mobilePhase3) {
        // Phase 3: Text box slides up from bottom with gradient overlay
        const progress = Math.min((scrollY - mobilePhase1 - mobilePhase2) / mobilePhase3, 1);
        mobileTextOpacity = progress; // Text fades in as it slides up
        mobileTextPosition = 100 - (progress * 100); // Text slides from 100vh to 0vh
        mobileStoryOpacity = 1;
    } else if (scrollY <= mobilePhase1 + mobilePhase2 + mobilePhase3 + mobilePhase4) {
        // Phase 4: Text box stays visible and stable
        mobileTextOpacity = 1; // Text box fully visible and stable
        mobileTextPosition = 0; // Text box at final position
        mobileStoryOpacity = 1;
    } else {
        // Phase 5: Fade out everything when Review section approaches
        const progress = Math.min((scrollY - mobilePhase1 - mobilePhase2 - mobilePhase3 - mobilePhase4) / mobilePhase5, 1);
        mobileTextOpacity = 1 - progress; // Text fades out
        mobileTextPosition = 0;
        mobileStoryOpacity = 1 - progress; // Everything fades out
    }

    const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth < 1024;

    return (
        <div ref={storyRef} className="w-full relative" style={{ 
            height: isMobileOrTablet ? `${mobilePhase1 + mobilePhase2 + mobilePhase3 + mobilePhase4 + mobilePhase5 + 500}px` : '100vh',
            minHeight: isMobileOrTablet ? '1500px' : '200vh',
            backgroundColor: isMobileOrTablet ? 'white' : '#F5F5ED',
            zIndex: 10,
            overflow: isMobileOrTablet ? 'hidden' : 'visible',
            width: '100%',
            maxWidth: '100vw'
        }}>
            {isMobileOrTablet ? (
                /* Mobile/Tablet: Animated content as per your specification */
                <div className="w-full relative" style={{ overflow: 'hidden', maxWidth: '100vw' }}>
                    {/* Mobile Background Text - behind video during phases 1 & 2 */}
                    {scrollY <= mobilePhase1 + mobilePhase2 && (
                        <div 
                            style={{
                                position: 'fixed',
                                top: '0',
                                left: '0',
                                width: '100vw',
                                height: '100vh',
                                zIndex: 500,
                                backgroundColor: '#F5F5ED',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px',
                                opacity: (scrollY > mobilePhase1 * 0.5 ? 1 : 0) * mobileStoryOpacity,
                                transition: 'opacity 2s ease-out'
                            }}
                        >
                            <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-12 relative z-10" style={{ backgroundColor: '#F5F5ED' }}>
                                <div className="max-w-4xl text-center">
                                    <h1 className="text-3xl font-bold font-architect text-gray-800">
                                        Our Story
                                    </h1>
                                    <p className="text-xl text-gray-600 mb-12 font-abhaya leading-relaxed">
                                        Built for Visionaries, By Visionaries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Mobile Video - starts from center bottom, slides up to full screen */}
                    {scrollY <= mobilePhase1 + mobilePhase2 + mobilePhase3 + mobilePhase4 + mobilePhase5 && (
                        <div 
                            style={{
                                position: 'fixed',
                                bottom: scrollY <= mobilePhase1 ? `${-50 + (scrollY/mobilePhase1) * 50}vh` : '0vh',
                                left: scrollY <= mobilePhase1 ? '50%' : '0',
                                transform: scrollY <= mobilePhase1 ? `translateX(-50%) scale(${0.4 + (scrollY/mobilePhase1) * 0.6})` : 'none',
                                width: scrollY <= mobilePhase1 ? '90vw' : '100vw',
                                height: scrollY <= mobilePhase1 ? '50vh' : '100vh',
                                zIndex: 1000,
                                transition: 'all 0.3s ease-out',
                                borderRadius: scrollY <= mobilePhase1 ? '20px' : '0px',
                                overflow: 'hidden',
                                maxWidth: '100vw',
                                opacity: mobileStoryOpacity
                            }}
                        >
                        <video
                            src="/Story.mp4"
                            autoPlay
                            loop
                            muted
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    )}

                    {/* Mobile Text Box - slides up from bottom with new styling */}
                    {scrollY > mobilePhase1 + mobilePhase2 && scrollY <= mobilePhase1 + mobilePhase2 + mobilePhase3 + mobilePhase4 + mobilePhase5 && (
                        <div 
                            style={{
                                position: 'fixed',
                                top: `${mobileTextPosition}vh`,
                                left: '0',
                                width: '100vw',
                                height: '100vh',
                                zIndex: 5000,
                                background: 'linear-gradient(to bottom, transparent 0%, rgba(245,245,237,0.3) 30%, rgba(245,245,237,0.7) 60%, #F5F5ED 100%)',
                                opacity: mobileTextOpacity * mobileStoryOpacity,
                                transition: 'top 0.3s ease-out, opacity 0.3s ease-out',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '20px 15px',
                                overflow: 'hidden',
                                maxWidth: '100vw'
                            }}
                        >
                        {/* Text content box with gray background and rounded corners */}
                        <div 
                            className="max-w-sm text-center mx-auto"
                            style={{
                                backgroundColor: '#C7C7C7',
                                borderRadius: '16px',
                                padding: '30px 20px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                                width: '90%',
                                maxWidth: '90vw'
                            }}
                        >
                            <h1 className="text-4xl font-bold mb-8 font-architect text-gray-800">
                                Our Story
                            </h1>
                            <p className="text-xl text-gray-700 mb-8 font-abhaya leading-relaxed">
                                Built for Visionaries, By Visionaries.
                            </p>
                            <div className="text-center space-y-6">
                                <p className="text-base text-gray-700 leading-relaxed">
                                    We are not just another agency—we are the driving force behind businesses that refuse to settle.
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Born from the fire of entrepreneurial ambition, we understand the grind, the hustle, and the breakthroughs it takes to build something that lasts.
                                </p>
                                <p className="text-base text-gray-700 leading-relaxed">
                                    Our clients don't come to us for just another campaign—they come to dominate their industry.
                                </p>
                                <p className="text-base text-gray-800 font-semibold leading-relaxed">
                                    Mediocrity is not an option. Excellence is our only standard.
                                </p>
                            </div>
                        </div>
                        </div>
                    )}

                    {/* Spacer for mobile/tablet scroll */}
                    <div style={{ height: `${mobilePhase1 + mobilePhase2 + mobilePhase3 + mobilePhase4 + mobilePhase5 + 500}px`, minHeight: '1500px' }}></div>
                </div>
            ) : (
                /* Desktop: Original animated content */
                <>
                    {/* Normal page content - Story introduction */}
                    <div className="w-full min-h-screen flex flex-col justify-center items-center px-6 py-12 relative z-10" style={{ backgroundColor: '#F5F5ED' }}>
                        <div className="max-w-4xl text-center">
                            <h1 className="text-7xl font-bold mb-8 font-architect text-gray-800">
                                Our Story
                            </h1>
                            <p className="text-2xl text-gray-600 mb-12 font-abhaya leading-relaxed">
                                Built for Visionaries, By Visionaries.
                            </p>
                        </div>
                    </div>

                    {/* Video container - animated based on scroll */}
                    <div style={{
                        position: 'fixed',
                        top: scrollY <= phase1 ? '50%' : '0',
                        left: '0',
                        transform: scrollY <= phase1 ? `translateY(-50%) translateY(${videoPosition}vh) scale(${videoScale})` : 'none',
                        width: videoWidth,
                        height: scrollY <= phase1 ? '56.25vw' : '100vh',
                        maxHeight: '100vh',
                        zIndex: scrollY > phase1 + phase2 ? 100 : 1000,
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-out',
                        borderRadius: scrollY <= phase1 ? '20px' : '0px'
                    }}>
                        <video
                            src="/Story.mp4"
                            autoPlay
                            loop
                            muted
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                    {/* Text content - appears during shrinking phase */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        right: 0,
                        width: scrollY > phase1 + phase2 ? `calc(100vw - ${videoWidth})` : '0px',
                        height: '100vh',
                        zIndex: 1001,
                        backgroundColor: '#F5F5ED',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px',
                        opacity: textOpacity,
                        transition: 'all 0.3s ease-out',
                        overflow: 'hidden'
                    }}>
                        <div style={{ maxWidth: '750px' }}>
                            <h2 style={{
                                fontSize: '44px',
                                fontWeight: 'bold',
                                marginBottom: '24px',
                                color: '#333',
                                textAlign: 'center',
                                lineHeight: '1.5',
                                fontFamily: 'mogilte',
                            }}>
                                The Pixel Junkie Story – Built for Visionaries, By Visionaries.
                            </h2>
                            <p style={{
                                fontSize: '24px',
                                color: '#555',
                                marginBottom: '16px',
                                lineHeight: '1.6',
                                textAlign: 'center',
                                fontFamily: 'mogilte',
                            }}>
                                We are not just another agency—we are the driving force behind businesses that refuse to settle.
                            </p>
                            <p style={{
                                fontSize: '24px',
                                color: '#555',
                                marginBottom: '16px',
                                lineHeight: '1.6',
                                textAlign: 'center',
                                fontFamily: 'mogilte',
                            }}>
                                Born from the fire of entrepreneurial ambition, we understand the grind, the hustle, and the breakthroughs it takes to build something that lasts.
                            </p>
                            <p style={{
                                fontSize: '24px',
                                color: '#555',
                                marginBottom: '16px',
                                lineHeight: '1.6',
                                textAlign: 'center',
                                fontFamily: 'mogilte',
                            }}>
                                Our clients don't come to us for just another campaign—they come to dominate their industry.
                            </p>
                            <p style={{
                                fontSize: '24px',
                                color: '#555',
                                lineHeight: '1.6',
                                textAlign: 'center',
                            }}>
                                Mediocrity is not an option. Excellence is our only standard.
                            </p>
                        </div>
                    </div>

                    {/* Scrollable spacer to enable all animations */}
                    <div style={{
                        height: `${phase1 + phase2 + phase3 + 500}px`,
                        position: 'relative',
                        zIndex: 1
                    }}>
                    </div>
                </>
            )}
        </div>
    );
};

export default Story;