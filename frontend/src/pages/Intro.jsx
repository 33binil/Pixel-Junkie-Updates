import React, { useState, useEffect } from 'react'

const Intro = ({ isVisible }) => {
    const [blackBoxExpanded, setBlackBoxExpanded] = useState(false)

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setBlackBoxExpanded(true)
            }, 300)
            return () => clearTimeout(timer)
        } else {
            setBlackBoxExpanded(false)
        }
    }, [isVisible])

    return (
        <div className="w-full h-full bg-white text-black flex items-start justify-center pt-28">
            <div className="max-w-[1700px] mx-auto text-center">
                <h1 className="font-dela text-[26px] md:text-8xl mb-8 glass-text-shadow">
                    Welcome to Pixel Junkie Creative Studio
                </h1>
                <div className="glass text-[16px] md:text-xl font-alata leading-relaxed max-w-[950px] mx-auto">
                    <p className="mb-6">
                        Discover the power of creative innovation. We transform ideas into stunning digital experiences that captivate and convert.
                    </p>
                </div>
            </div>

            {/* Black Box - Desktop */}
            <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div
                    className="bg-black border border-white/20 shadow-2xl transition-all duration-1000 ease-out"
                    style={{
                        width: blackBoxExpanded ? '100vw' : '520px',
                        height: blackBoxExpanded ? '100vh' : '310px',
                        transformOrigin: 'bottom center'
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            loop
                        >
                            <source src="/Home1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            {/* Black Box - Mobile */}
            <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div
                    className="bg-black border border-white/20 shadow-2xl transition-all duration-1000 ease-out"
                    style={{
                        width: blackBoxExpanded ? '100vw' : '400px',
                        height: blackBoxExpanded ? '100vh' : '235px',
                        transformOrigin: 'bottom center'
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            loop
                        >
                            <source src="/Home1.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
