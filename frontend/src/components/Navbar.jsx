import React, { useState } from 'react';

const Navbar = ({ currentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (item) => {
        console.log(`${item} clicked`);
        setIsMenuOpen(false);
        
        // Handle navigation
        if (item === 'Home') {
            // Redirect to main page with refresh
            window.location.href = '/';
        } else if (item === 'Work') {
            // Redirect to Work page with refresh
            window.location.href = '/work';
        } else if (item === 'Services') {
            // Redirect to Services page with refresh
            window.location.href = '/services';
        } else if (item === 'Client Application') {
            // Redirect to Client Application page with refresh
            window.location.href = '/client-application';
        } else if (item === 'Contact') {
            // Redirect to Contact page with refresh
            window.location.href = '/contact';
        }
        // Add other navigation logic here later
    };

    return (
        <div className="w-full relative">
            {/* Main Navbar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-400">
                <h1 className="text-md sm:text-lg lg:text-xl font-alegreya text-gray-800 tracking-wide">
                    PIXEL JUNKIE CREATIVE STUDIO
                </h1>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-md sm:text-lg font-alegreya text-gray-800">Menu</span>
                    <button
                        onClick={toggleMenu}
                        className="text-gray-600 hover:text-gray-800 p-1 flex flex-col space-y-1"
                    >
                        <div className="w-6 h-0.5 bg-gray-800"></div>
                        <div className="w-4 h-0.5 bg-gray-800"></div>
                        <div className="w-3 h-0.5 bg-gray-800"></div>
                    </button>
                    
                </div>
            </div>
            
            {/* Grey Background Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40 transition-opacity duration-300" onClick={toggleMenu}></div>
            )}
            
            {/* Full Width Expandable Menu - Overlay */}
            <div className={`absolute top-full left-0 w-full bg-white border-b border-gray-300 shadow-lg z-50 transform transition-all duration-300 ease-in-out overflow-hidden ${
                isMenuOpen ? 'translate-y-0 opacity-100 max-h-96' : '-translate-y-full opacity-0 max-h-0'
            }`}>
                <div className="flex flex-col p-4 space-y-2">
                    <button
                        onClick={() => handleMenuItemClick('Home')}
                        className={`w-full text-left px-4 py-3 text-md font-afacad text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${currentPage === 'home' ? 'underline' : ''}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('Work')}
                        className={`w-full text-left px-4 py-3 text-md font-afacad text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${currentPage === 'works' ? 'underline' : ''}`}
                    >
                        Work
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('Services')}
                        className={`w-full text-left px-4 py-3 text-md font-afacad text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${currentPage === 'services' ? 'underline' : ''}`}
                    >
                        Services
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('Client Application')}
                        className={`w-full text-left px-4 py-3 text-md font-afacad text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${currentPage === 'client-application' ? 'underline' : ''}`}
                    >
                        Client Application
                    </button>
                    <button
                        onClick={() => handleMenuItemClick('Contact')}
                        className={`w-full text-left px-4 py-3 text-md font-afacad text-gray-800 hover:bg-gray-100 rounded transition-colors duration-200 ${currentPage === 'contact' ? 'underline' : ''}`}
                    >
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;