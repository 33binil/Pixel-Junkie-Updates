import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HamburgerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="7" x2="16" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="14" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <line x1="4" y1="21" x2="24" y2="21" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const DESKTOP_IMAGES = [
    '/home1.webp',
    '/home2.webp',
    '/home3.webp',
    '/home4.webp',
    '/home5.webp',
]

const MOBILE_IMAGES = [
    '/home11.webp',
    '/home22.webp',
    '/home33.webp',
    '/home44.webp',
    '/home55.webp',
]

const Home = ({ isVisible }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [enteringImage, setEnteringImage] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [showElements, setShowElements] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const navigate = useNavigate()

    const images = isMobile ? MOBILE_IMAGES : DESKTOP_IMAGES
    const baseImage = images[currentIndex]

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    useEffect(() => {
        const firstImage = isMobile ? MOBILE_IMAGES[0] : DESKTOP_IMAGES[0];
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = firstImage;
        document.head.appendChild(link);
        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
        };
    }, [isMobile])
    useEffect(() => {
        if (isVisible) {
            setShowElements(false)
            const timer = setTimeout(() => setShowElements(true), 500)
            return () => clearTimeout(timer)
        } else {
            setShowElements(false)
        }
    }, [isVisible])

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % images.length
            setEnteringImage(images[nextIndex])
            setTimeout(() => {
                setCurrentIndex(nextIndex)
                setEnteringImage(null)
            }, 500) // 0.5s animation
        }, 3500)

        return () => clearInterval(interval)
    }, [currentIndex, images])

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
          @keyframes dropIn {
            0% { transform: translateY(-120vh); }
            100% { transform: translateY(0); }
          }
          .entering-anim {
            animation: dropIn 0.5s ease-out forwards;
          }
        `
            }} />
            <div className="fixed inset-0 overflow-hidden w-screen h-screen pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                    style={{
                        backgroundImage: `url(${baseImage})`
                    }}
                />
                {enteringImage && (
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-20 will-change-transform entering-anim"
                        style={{ backgroundImage: `url(${enteringImage})` }}
                    />
                )}
            </div>

            {/* Page content layered above background */}
            <header className={`fixed top-0 left-0 right-0 z-[90] pointer-events-auto transition-opacity duration-1000 ${
                showElements ? 'opacity-100' : 'opacity-0'
            }`}>
                <div className="max-w-full mx-auto relative h-20">
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={`absolute w-[74px] md:w-[97px] left-5 transition-all duration-1000 ${
                            showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-20px]'
                        }`}
                    />

                    <nav className="flex gap-[300px] relative items-center justify-center h-20">
                        {/* centered nav hidden on small screens */}
                        <div className="hidden sm:flex gap-[300px] items-center justify-center w-full">
                            <button onClick={() => window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' })} className={`text-[18px] font-alata text-white transition-all duration-700 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-15px]'
                            }`}>Services</button>
                            <button onClick={() => window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' })} className={`text-[18px] font-alata text-white transition-all duration-700 delay-100 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-15px]'
                            }`}>Projects</button>
                            <button onClick={() => window.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' })} className={`text-[18px] font-alata text-white transition-all duration-700 delay-200 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-15px]'
                            }`}>About Us</button>
                            <button onClick={() => navigate('/client-application')} className={`text-[18px] font-alata text-white transition-all duration-700 delay-300 hover:scale-110 bg-transparent border-none cursor-pointer ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-15px]'
                            }`}>Application Form</button>
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
            </header>

            {/* Mobile overlay menu */}
            {mobileOpen && (
                <div className={`fixed inset-0 z-[95] bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-white transition-all duration-500 ${
                    showElements ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                    <button onClick={() => { setMobileOpen(false); window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' }); }} className="text-2xl font-alata bg-transparent border-none text-white cursor-pointer">
                        Services
                    </button>
                    <button onClick={() => { setMobileOpen(false); window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' }); }} className="text-2xl font-alata bg-transparent border-none text-white cursor-pointer">
                        Projects
                    </button>
                    <button onClick={() => { setMobileOpen(false); window.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' }); }} className="text-2xl font-alata bg-transparent border-none text-white cursor-pointer">
                        About Us
                    </button>
                    <button onClick={() => { setMobileOpen(false); navigate('/client-application'); }} className="text-2xl font-alata bg-transparent border-none text-white cursor-pointer">
                        Application Form
                    </button>
                    <button className="mt-4 px-6 py-2 bg-white/10 rounded" onClick={() => setMobileOpen(false)}>
                        Close
                    </button>
                </div>
            )}

            {/* Main content placed visually over the background */}
            {!mobileOpen && (
                <div>
                    <div className="absolute left-0 right-0 top-[500px] md:top-[520px] z-[95] pointer-events-auto">
                        {/* Row 1: left icon+year (flush left) and services (flush right) */}
                        <div className="relative w-full">
                            {/* left flush */}
                            <div className={`relative justify-center -left-32 md:-left-[700px] top-24 md:top-0 text-center flex items-center gap-3 transition-all duration-1000 ${
                                showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
                            }`}>
                                <img src="/company%20icon.png" alt="Company" className={`w-[18px] md:w-[34px] h-auto block transition-all duration-1000 ${
                                    showElements ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                                }`} />
                                <h3 className={`text-[17px] md:text-[32px] leading-none font-big-shoulders text-white transition-all duration-1000 delay-200 ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[15px]'
                                }`}>2024 - 2025</h3>
                            </div>

                            {/* right flush */}
                            <div className="absolute right-5 md:right-20 top-0 md:w-[250px] w-[180px] font-alata text-right text-white text-[10px] md:text-[18px] leading-[1.4]">
                                <h1 className={`glass text-white transition-all duration-700 ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
                                }`}>Brand Identity Design</h1>
                                <h1 className={`glass text-white transition-all duration-700 delay-100 ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
                                }`}>UI/UX, Web, App Developments</h1>
                                <h1 className={`glass text-white transition-all duration-700 delay-200 ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
                                }`}>Ads Production</h1>
                                <h1 className={`glass text-white transition-all duration-700 delay-300 ${
                                    showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]'
                                }`}>Ongoing Support</h1>
                            </div>
                        </div>

                        {/* Row 2: Pixel Junkie (flush left), paragraph, Creative Studio (flush right) */}
                        <div className="relative w-full mt-28 md:mt-10">
                            {/* Pixel Junkie flush left */}
                            <div className="relative left-0 md:-left-32 top-0 text-center justify-center">
                                <h2 className={`leading-none font-dela text-[52px] md:text-[200px] text-white glass-text-shadow transition-all duration-1000 ${
                                    showElements ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[30px] scale-95'
                                }`}>
                                    Pixel Junkie
                                </h2>
                            </div>

                            {/* Creative Studio flush right */}
                            <div className="relative flex flex-col md:flex-row items-center justify-center text-white gap-6 px-4 py-0 md:py-8">
                                {/* h2 first on mobile, second on desktop */}
                                <h2 className={`order-1 md:order-2 font-dela whitespace-nowrap text-[38px] md:text-[150px] max-w-[90vw] md:max-w-none leading-none glass-text-shadow transition-all duration-1000 delay-300 ${
                                    showElements ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-[25px] scale-95'
                                }`}>
                                    Creative Studio
                                </h2>
                                {/* h1 second on mobile, first on desktop */}
                                <h1 className={`order-2 md:order-1 md:w-[290px] glass text-[12px] md:text-[18px] font-alata text-white transition-all duration-1000 delay-500 ${
                                    showElements ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[20px]'
                                }`}>
                                    We create digital designs that help brands move faster and convert better. Your business deserves more than just a website. It needs results.
                                </h1>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Home
