import React from 'react';

const Bottom = () => {
    const handleButtonClick = (buttonName) => {
        console.log(`${buttonName} button clicked`);
        // You can add specific actions for each button here
    };

    return (
        <div className="w-full bg-[#2D2C1A] px-4 sm:px-6 pt-12 sm:pt-20 relative" style={{ zIndex: 30, marginBottom: 0, paddingBottom: 0 }}>
            <div className="max-w-7xl mx-auto" style={{ marginBottom: 0, paddingBottom: 0 }}>

                {/* Image Boxes Section */}
                <div className="flex justify-center sm:justify-start mb-20 sm:mb-40">
                    <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-10">
                        {/* Image Box 1 */}
                        <div
                            className="bg-gray-600 rounded-lg flex items-center justify-center w-20 h-20 sm:w-36 md:w-40 lg:w-44 xl:w-[150px] sm:h-36 md:h-40 lg:h-44 xl:h-[150px]"
                        >
                            <span className="text-white text-xs sm:text-sm">Image 1</span>
                        </div>

                        {/* Image Box 2 */}
                        <div
                            className="bg-gray-600 rounded-lg flex items-center justify-center w-20 h-20 sm:w-36 md:w-40 lg:w-44 xl:w-[150px] sm:h-36 md:h-40 lg:h-44 xl:h-[150px]"
                        >
                            <span className="text-white text-xs sm:text-sm">Image 2</span>
                        </div>

                        {/* Image Box 3 */}
                        <div
                            className="bg-gray-600 rounded-lg flex items-center justify-center w-20 h-20 sm:w-36 md:w-40 lg:w-44 xl:w-[150px] sm:h-36 md:h-40 lg:h-44 xl:h-[150px]"
                        >
                            <span className="text-white text-xs sm:text-sm">Image 3</span>
                        </div>

                        {/* Image Box 4 */}
                        <div
                            className="bg-gray-600 rounded-lg flex items-center justify-center w-20 h-20 sm:w-36 md:w-40 lg:w-44 xl:w-[150px] sm:h-36 md:h-40 lg:h-44 xl:h-[150px]"
                        >
                            <span className="text-white text-xs sm:text-sm">Image 4</span>
                        </div>
                    </div>
                </div>

                {/* Company Title */}
                <div className="text-center mb-16 md:mb-28 sm:mb-32">
                    <h1 className="text-white font-bold font-vogca text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] leading-tight">
                        Pixel Junkie Creative Studio
                    </h1>
                </div>

                {/* Navigation Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 mb-7 md:mb-16 font-lexend px-2">
                    <button
                        onClick={() => handleButtonClick('PROJECTS')}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-[10px] sm:text-base lg:text-lg font-medium"
                    >
                        PROJECTS
                    </button>

                    <button
                        onClick={() => handleButtonClick('CLIENT APPLICATION')}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-[10px] sm:text-base lg:text-lg font-medium"
                    >
                        CLIENT APPLICATION
                    </button>

                    <button
                        onClick={() => handleButtonClick('SERVICES')}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-[10px] sm:text-base lg:text-lg font-medium"
                    >
                        SERVICES
                    </button>

                    <button
                        onClick={() => handleButtonClick('TERMS OF USE')}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-[10px] sm:text-base lg:text-lg font-medium"
                    >
                        TERMS OF USE
                    </button>

                    <button
                        onClick={() => handleButtonClick('PRIVACY NOTICE')}
                        className="text-white hover:text-gray-300 transition-colors duration-200 text-[10px] sm:text-base lg:text-lg font-medium"
                    >
                        PRIVACY NOTICE
                    </button>
                </div>

                {/* Copyright Section */}
                <div className="flex items-center justify-center text-gray-400 ">
                    {/* Company Icon */}
                    <div className="w-3 md:w-4 h-3 md:h-4 mb-2 md:mb-1 border-2 border-gray-400 rounded-full flex items-center justify-center mr-2 sm:mr-3 text-[6px] md:text-[8px] font-bold">
                        C
                    </div>

                    {/* Copyright Text */}
                    <span className="text-[10px] sm:text-[14px] mb-2 md:mb-1 text-center">
                        2025 Pixel Junkie Creative Studio. All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Bottom;