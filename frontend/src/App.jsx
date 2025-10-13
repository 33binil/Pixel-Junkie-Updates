import './App.css'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Services from './pages/Services'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Bottom from './pages/Bottom'
import ClientApplication from './pages/ClientApplication'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Loading from './pages/Loading'

function App() {
    const [scrollY, setScrollY] = useState(0)
    const [canShowServices, setCanShowServices] = useState(false)
    const [canShowProjects, setCanShowProjects] = useState(false)
    const [canShowAboutUs, setCanShowAboutUs] = useState(false)
    const [canShowBottom, setCanShowBottom] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleLoadingComplete = () => setIsLoading(false)

    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY
            setScrollY(newScrollY)

            if (newScrollY < 2 * window.innerHeight) {
                setCanShowServices(false)
                setCanShowProjects(false)
                setCanShowAboutUs(false)
                setCanShowBottom(false)
            }

            if (newScrollY >= 2 * window.innerHeight && newScrollY < 3 * window.innerHeight) {
                setCanShowServices(true)
                setCanShowProjects(false)
                setCanShowAboutUs(false)
                setCanShowBottom(false)
            }

            if (newScrollY >= 3 * window.innerHeight && newScrollY < 4 * window.innerHeight) {
                setCanShowServices(true)
                setCanShowProjects(true)
                setCanShowAboutUs(false)
                setCanShowBottom(false)
            }

            if (newScrollY >= 4 * window.innerHeight && newScrollY < 5 * window.innerHeight) {
                setCanShowServices(true)
                setCanShowProjects(true)
                setCanShowAboutUs(true)
                setCanShowBottom(false)
            }

            if (newScrollY >= 5 * window.innerHeight) {
                setCanShowServices(true)
                setCanShowProjects(true)
                setCanShowAboutUs(true)
                setCanShowBottom(true)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // --- Translate animations ---
    const introTranslateY =
        scrollY < window.innerHeight ? Math.max(100 - (scrollY / window.innerHeight) * 100, 0) : 0

    const servicesTranslateY = canShowServices
        ? canShowProjects
            ? canShowAboutUs
                ? canShowBottom
                    ? -300 // move up when Bottom appear
                    : -200 // move up when AboutUs appear
                : -100 // move up when Projects appear
            : 0
        : 100

    const projectsTranslateY = canShowProjects
        ? canShowAboutUs
            ? canShowBottom
                ? -200 // move up when Bottom appear
                : -100 // move up when AboutUs appear
            : 0
        : 100

    const aboutUsTranslateY = canShowAboutUs
        ? canShowBottom
            ? -100 // move up when Bottom appear
            : 0
        : 100

    const bottomTranslateY = canShowBottom ? 0 : 100

    if (isLoading) {
        return <Loading onComplete={handleLoadingComplete} />
    }

    return (
        <Routes>
            <Route path="/" element={
                <div className="relative" style={{ height: '600vh' }}>
                    {/* Home */}
                    <div className="fixed inset-0 z-10">
                        <Home isVisible={true} />
                    </div>

                    {/* Intro */}
                    <div
                        className="fixed inset-0 z-20"
                        style={{
                            transform: `translateY(${introTranslateY}vh)`,
                            transition: 'transform 0.3s ease-out',
                        }}
                    >
                        <Intro isVisible={scrollY >= window.innerHeight} />
                    </div>

                    {/* Services */}
                    <div
                        className="fixed inset-0 z-30"
                        style={{
                            transform: `translateY(${servicesTranslateY}vh)`,
                            transition: 'transform 0.6s ease-out',
                        }}
                    >
                        <Services showServices={canShowServices} translateY={servicesTranslateY} />
                    </div>

                    {/* Projects */}
                    <div
                        className="fixed inset-0 z-40"
                        style={{
                            transform: `translateY(${projectsTranslateY}vh)`,
                            transition: 'transform 0.6s ease-out',
                        }}
                    >
                        <Projects showProjects={canShowProjects} />
                    </div>

                    {/* AboutUs */}
                    <div
                        className="fixed inset-0 z-50"
                        style={{
                            transform: `translateY(${aboutUsTranslateY}vh)`,
                            transition: 'transform 0.6s ease-out',
                        }}
                    >
                        <AboutUs />
                    </div>

                    {/* Bottom */}
                    <div
                        className="fixed inset-0 z-[999]"
                        style={{
                            transform: `translateY(${bottomTranslateY}vh)`,
                            transition: 'transform 0.6s ease-out',
                        }}
                    >
                        <Bottom />
                    </div>

                </div>
            } />
            <Route path="/client-application" element={<ClientApplication />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    )
}

export default App
