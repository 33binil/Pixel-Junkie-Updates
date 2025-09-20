import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import About from './pages/About';
import Intro from './pages/Intro';
import Services from './pages/Services';
import ServicesPage from './pages/ServicesPage';
import Work from './pages/Work';
import Desc from './pages/Desc';
import Story from './pages/Story';
import Review from './pages/Review';
import Bottom from './pages/Bottom';
import ClientApplication from './pages/ClientApplication';
import FloatingClientButton from './components/FloatingClientButton';

// Main HomePage Component
const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [showClientApplication, setShowClientApplication] = useState(false);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    const handleOpenClientApplication = () => {
        setShowClientApplication(true);
    };

    const handleCloseClientApplication = () => {
        setShowClientApplication(false);
    };

    return (
        <div className="w-full">
            {isLoading ? (
                <Loading onComplete={handleLoadingComplete} />
            ) : (
                <>
                    {/* Home - Sticky Background */}
                    <div className="sticky top-0 z-10">
                        <Home />
                    </div>

                    {/* About - First scrollable from bottom, then becomes sticky when full screen */}
                    <div className="relative z-20 h-screen">
                    </div>

                    {/* After About is fully visible, it becomes sticky for Intro to slide over */}
                    <div className="relative z-30">
                        <div className="sticky top-0 z-10">
                            <About />
                        </div>
                        
                        {/* Intro - Slides up from bottom after About is sticky */}
                        <div className="relative z-20" data-section="intro">
                            <Intro />
                        </div>
                        
                        {/* Services - Below Intro, higher z-index to stay on top */}
                        <div className="relative z-30">
                            <Services />
                        </div>
                        
                        {/* Work - Below Services */}
                        <div className="relative z-40">
                            <Work />
                        </div>
                        
                        {/* Desc - Below Work */}
                        <div className="relative z-50">
                            <Desc />
                        </div>
                        
                        {/* Story - Below Desc */}
                        <div className="relative z-60">
                            <Story />
                        </div>
                        
                        {/* Review - Below Story */}
                        <div className="relative z-70">
                            <Review />
                        </div>
                        
                        {/* Bottom - Below Review */}
                        <div className="relative z-80" data-section="bottom">
                            <Bottom />
                        </div>
                    </div>

                </>
            )}
            
            {/* Floating Client Application Button */}
            <FloatingClientButton onOpen={handleOpenClientApplication} />
            
            {/* Client Application Modal */}
            {showClientApplication && (
                <ClientApplication onClose={handleCloseClientApplication} />
            )}
        </div>
    );
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<Work />} />
            <Route path="/client-application" element={<ClientApplication />} />
        </Routes>
    );
};

export default App;
