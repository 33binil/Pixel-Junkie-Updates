import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ currentPage }) => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        window.location.href = '/';
    };

    return (
        <div className="w-full relative">
            {/* Main Navbar */}
            <div className="flex items-center justify-between p-4 border-b border-gray-400">
                <h1 className="text-md sm:text-lg lg:text-xl font-alegreya text-gray-800 tracking-wide">
                    PIXEL JUNKIE CREATIVE STUDIO
                </h1>
                <button onClick={handleHomeClick} className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-md sm:text-lg font-alegreya text-gray-800">← Home</span>
                    
                </button>
            </div>
        </div>
    );
};

export default Navbar;