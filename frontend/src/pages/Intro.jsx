import React from 'react';

const Intro = () => {
    return (
        <section className="relative bg-[#F5F5ED] w-full py-10 flex flex-col items-center" style={{ zIndex: 100 }}>
            {/* Top Text Block */}
            <div className="w-full max-w-[1280px] mt-12 md:mt-[70px] lg:mt-[130px] px-4">
                <h1 className="text-[#3D3C27] text-xl md:text-3xl lg:text-4xl font-mogilte text-center leading-tight">
                    AT PIXEL JUNKIE WE DESIGN IMMERSIVE EXPERIENCES
                </h1>
                <p className="text-[#3D3C27] text-base md:text-lg lg:text-xl font-architect text-right mt-2">
                    too striking to overlook
                </p>
            </div>

            {/* Section 1: Image Left, Text Right */}
            <div className="w-full mt-16 md:mt-28 flex flex-col md:flex-row">
                {/* Image Box */}
                <div className="md:w-1/2 w-full h-[250px] md:h-[350px] lg:h-[420px] bg-gray-300 flex items-center justify-center">
                    <img
                        src="/intro1.jpg"
                        alt="Pixel Junkie Studio"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Block */}
                <div className="md:w-1/2 w-full flex font-pethra items-center justify-center text-center px-4 md:px-8 lg:px-[175px] py-6">
                    <p className="text-[#3D3C27] text-lg md:text-xl lg:text-2xl leading-relaxed">
                        We are Pixel Junkie Creative Studio, a creative powerhouse dedicated to elevating brands through{' '}
                        <span className="text-[#B993C5]"> bold identity, seamless design, and powerful storytelling. </span>
                    </p>
                </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="w-full mt-4 md:mt-5 flex flex-col md:flex-row">
                {/* Text Block */}
                <div className="md:w-1/2 w-full flex items-center font-pethra justify-center text-center px-4 md:px-8 lg:px-[150px] py-6 order-2 md:order-1">
                    <p className="text-[#3D3C27] text-lg md:text-xl lg:text-2xl leading-relaxed">
                        We don't just create designs or strategies—we create{' '}
                        <span className="text-[#B993C5]"> growth, trust, and long-lasting impact </span>{' '}
                        for every brand we partner with.
                    </p>
                </div>

                {/* Image Box */}
                <div className="md:w-1/2 w-full h-[250px] md:h-[350px] lg:h-[420px] bg-gray-300 flex items-center justify-center order-1 md:order-2">
                    <img
                        src="/intro2.jpg"
                        alt="Creative Growth"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Intro;