import React from "react";

const Desc = () => {
    return (
        <div className="w-full bg-[#3D3C27] relative" style={{ zIndex: 10 }}>
            {/* Solid background overlay to ensure opacity */}
            <div className="absolute inset-0 bg-[#3D3C27] z-0"></div>
            
            {/* Desktop View - Keep original unchanged */}
            <div className="hidden md:flex justify-center px-6 py-24">
                <div className="w-[1550px] text-center h-auto text-white text-[32px] font-vogca leading-relaxed space-y-12 relative z-10">
                    <p>
                        <span className="underline underline-offset-4">Every decision</span> you make today shapes{" "}
                        tomorrow's success.
                        Every decision you make today shapes{" "}
                        <span className="underline underline-offset-4">tomorrow's success</span>.
                    </p>


                    <p>
                        The late nights, the bold moves, the small wins that become breakthroughs.{" "}
                        <span className="underline underline-offset-4">We're here for all of it</span>—the pivots, the progress, and yes, even the setbacks. Because building something meaningful takes more than strategy.{" "}
                        The late nights, the bold moves, the small wins that become breakthroughs.{" "}
                        <span className="underline underline-offset-4">We're here for all of it</span>—the pivots, the progress, and yes, even the setbacks. Because building something meaningful takes more than strategy.
                    </p>

                    <p>
                        It takes <span className="underline underline-offset-4">creating a story that moves people</span>.
                    </p>
                </div>
            </div>

            {/* Mobile/Tablet View - Responsive design */}
            <div className="md:hidden flex justify-center px-4 py-12 sm:px-6 sm:py-16">
                <div className="w-full max-w-4xl text-center h-auto text-white text-lg sm:text-xl font-vogca leading-relaxed space-y-6 sm:space-y-8 relative z-10">
                    <p>
                        <span className="underline underline-offset-4">Every decision</span> you make today shapes tomorrow's success.
                    </p>

                    <p>
                        The late nights, the bold moves, the small wins that become breakthroughs.{" "}
                        <span className="underline underline-offset-4">We're here for all of it</span>—the pivots, the progress, and yes, even the setbacks. Because building something meaningful takes more than strategy.
                    </p>

                    <p>
                        It takes <span className="underline underline-offset-4">creating a story that moves people</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Desc;
