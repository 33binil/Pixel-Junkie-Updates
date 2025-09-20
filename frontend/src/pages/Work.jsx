import React from "react";

const Work = () => {
    const handleClick = () => {
        console.log("OUR WORKS button clicked");
        // You can trigger scroll, modal, or route here
    };

    return (
        <div className="relative w-full bg-[#F5F5ED] overflow-hidden" style={{ zIndex: 10 }}>
            {/* Desktop View - Keep original unchanged */}
            <div className="hidden md:block w-screen h-screen relative overflow-hidden">
                {/* Top-left label */}
                <div className="absolute top-8 left-14 text-[24px] font-semibold text-black font-architect">
                    Our Latest Work (On Progress..)
                </div>

                {/* Top-right button */}
                <button
                    onClick={handleClick}
                    className="absolute top-8 right-12 text-[20px] font-bold text-black font-abhaya underline-offset-4 hover:underline cursor-pointer transition-all duration-200"
                >
                    OUR WORKS
                </button>

                {/* Centered white image box with downward shift */}
                <div className="w-screen h-screen bg-[#F5F5ED] flex items-center justify-center">
                    <div className="w-[1574px] h-[910px] bg-white shadow-lg mt-[60px]" />
                </div>
            </div>

            {/* Mobile/Tablet View - Responsive design */}
            <div className="md:hidden w-full min-h-screen py-8 px-4 bg-[#F5F5ED]">
                {/* Mobile header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div className="text-lg sm:text-xl font-semibold text-black font-architect">
                        Our Latest Work (On Progress..)
                    </div>
                    <button
                        onClick={handleClick}
                        className="text-base sm:text-lg font-bold text-black font-abhaya underline-offset-4 hover:underline cursor-pointer transition-all duration-200"
                    >
                        OUR WORKS
                    </button>
                </div>

                {/* Mobile centered white box */}
                <div className="w-full flex items-center justify-center py-8">
                    <div className="w-full max-w-sm sm:max-w-md bg-white shadow-lg rounded-lg" style={{ aspectRatio: '4/3', minHeight: '570px' }} />
                </div>
            </div>
        </div>
    );
};

export default Work;