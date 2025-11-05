import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Welcome from './components/Welcome';
import './App.css';
import Services from './components/Services';
import Projects from './components/Projects';
import AboutUs from './components/AboutUs';
import Bottom from './components/Bottom';
import ClientApplication from './components/ClientApplication';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
    return (
        <div className="min-h-screen bg-black">
            <Routes>
                <Route path="/client-application" element={
                    <div className="min-h-screen">
                        <ClientApplication />
                    </div>
                } />
                <Route path="/privacy" element={
                    <div className="min-h-screen">
                        <Privacy />
                    </div>
                } />
                <Route path="/terms" element={
                    <div className="min-h-screen">
                        <Terms />
                    </div>
                } />
                <Route path="/" element={
                    <>
                        <Hero />
                        <Welcome />
                        <Services />
                        <Projects />
                        <AboutUs />
                        <Bottom />
                    </>
                } />
            </Routes>
        </div>
    );
}

export default App;
