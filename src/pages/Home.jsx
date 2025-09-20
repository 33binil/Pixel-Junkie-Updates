// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
    const videos = ["/Home1.mp4", "/Home2.mp4", "/Home3.mp4"];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showBoxes, setShowBoxes] = useState(false);
    const [videosLoaded, setVideosLoaded] = useState(false);
    const videoRef = useRef(null);
    const boxTimerRef = useRef(null);
    const preloadedVideos = useRef([]);

    const lineSpacingDesktop = 320;
    const lineSpacingTablet = 200;
    const lineSpacingMobile = 220;

    const getLineSpacing = () => {
        if (window.innerWidth >= 768) return lineSpacingDesktop;
        if (window.innerWidth >= 480) return lineSpacingTablet;
        return lineSpacingMobile;
    };

    const [lineSpacing, setLineSpacing] = useState(getLineSpacing());

    useEffect(() => {
        const handleResize = () => setLineSpacing(getLineSpacing());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Preload all videos for faster switching
    useEffect(() => {
        const preloadVideos = async () => {
            try {
                const videoPromises = videos.map((src, index) => {
                    return new Promise((resolve) => {
                        const video = document.createElement('video');
                        video.src = src;
                        video.preload = 'metadata';
                        video.muted = true;
                        video.playsInline = true;
                        
                        video.addEventListener('loadedmetadata', () => {
                            preloadedVideos.current[index] = video;
                            resolve(video);
                        });
                        
                        video.addEventListener('error', () => {
                            console.warn(`Failed to preload video: ${src}`);
                            resolve(null);
                        });
                        
                        // Start preloading
                        video.load();
                    });
                });
                
                await Promise.all(videoPromises);
                setVideosLoaded(true);
            } catch (error) {
                console.warn('Video preloading failed:', error);
                setVideosLoaded(true); // Continue anyway
            }
        };
        
        preloadVideos();
    }, []);

    const boxTops = [0, 1, 2, 3, 4].map((i) => i * lineSpacing);

    const triggerBoxes = () => {
        setShowBoxes(true);
        boxTimerRef.current = setTimeout(() => {
            setShowBoxes(false);
            // Preload next video before switching
            const nextIndex = (currentVideoIndex + 1) % videos.length;
            const nextVideo = preloadedVideos.current[nextIndex];
            if (nextVideo) {
                nextVideo.currentTime = 0;
                nextVideo.load();
            }
            setCurrentVideoIndex(nextIndex);
        }, 2000);
    };

    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        v.play();

        const handleEnded = () => triggerBoxes();
        v.addEventListener("ended", handleEnded);
        return () => {
            v.removeEventListener("ended", handleEnded);
            if (boxTimerRef.current) clearTimeout(boxTimerRef.current);
        };
    }, [currentVideoIndex, lineSpacing]);

    return (
        <section className="fixed inset-0 w-full h-screen overflow-hidden m-0 p-0" style={{ height: '100vh', width: '100vw' }}>
            {/* Loading indicator */}
            {!videosLoaded && (
                <div className="absolute inset-0 bg-black flex items-center justify-center z-50">
                    <div className="text-[#FBF9D1] text-center">
                        <div className="animate-spin w-8 h-8 border-2 border-[#FBF9D1] border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="font-stint text-sm">Loading Experience...</p>
                    </div>
                </div>
            )}
            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                style={{ width: '100vw', height: '100vh' }}
                src={videos[currentVideoIndex]}
                autoPlay
                muted
                playsInline
                preload="metadata"
                loading="eager"
            />

            {/* Fixed Horizontal Lines */}
            <div className="absolute -top-[160px] md:-top-60 left-0 w-full z-20">
                {boxTops.map((top, index) => (
                    <div
                        key={index}
                        className="w-full h-[1px] bg-[#575757] absolute left-0"
                        style={{ top: `${top + lineSpacing}px` }}
                    />
                ))}
            </div>

            {/* Fixed Vertical Line */}
            <div className="absolute top-0 bottom-0 left-[40px] md:left-[70px] sm:left-16 xs:left-8 w-[1px] bg-[#575757] z-20" />

            {/* Boxes */}
            <div className="absolute inset-0 z-10 -top-[160px] md:-top-60 pointer-events-none">
                {boxTops.map((top, index) => (
                    <div
                        key={index}
                        className="absolute left-0 w-full bg-[#9C8D72] transition-all duration-1000 ease-in-out"
                        style={{
                            top: `${top}px`,
                            height: showBoxes ? `${lineSpacing}px` : "1px",
                            transform: showBoxes ? "translateY(0)" : `translateY(${lineSpacing}px)`,
                            opacity: showBoxes ? 1 : 0.8,
                        }}
                    />
                ))}
            </div>

            {/* Logo */}
            <div className="absolute -top-1 md:-top-4 left-16 md:left-24 sm:left-8 z-30">
                <img
                    src="/logo.png"
                    alt="Logo"
                    className="w-[69px] sm:w-[75px] xs:w-[60px] h-auto object-contain"
                />
            </div>

            {/* Overlay Content */}
            <div className="w-full flex flex-col justify-between relative h-full z-30 px-4 sm:px-6 top-2 md:top">
                <div className="mt-[140px] md:mt-[200px] mb-auto ml-8 md:ml-0">
                    <h1 className="font-vogca text-[50px] md:text-[130px] text-[#FBF9D1] leading-tight text-center sm:text-[90px] xs:text-[70px]">
                        Pixel Junkie Creative Studio
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-32 gap-4 md:gap-0">
                    <div className="font-stint text-[12px] md:text-lg text-[#FBF9D1] space-y-4 md:ml-[100px] sm:ml-[40px] xs:ml-4 relative text-center md:text-left">
                        <p>
                            Where ideas evolve
                            <br />
                            into businesses.
                        </p>
                        <p>
                            Designing brands,
                            <br />
                            building futures.
                        </p>
                        <p>
                            Turning imagination
                            <br />
                            into scalable reality.
                        </p>
                    </div>

                    <div className="flex gap-4 mr-0 md:mr-[50px] sm:mr-4 relative">
                        <a
                            href="#works"
                            className="font-stint inline-block bg-black/80 text-[#FBF9D1] px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-md text-xs sm:text-sm md:text-base lg:text-lg hover:bg-black transition-colors whitespace-nowrap"
                        >
                            Our Latest Works
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;