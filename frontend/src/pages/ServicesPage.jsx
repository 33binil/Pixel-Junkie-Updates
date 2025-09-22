import React from 'react';
import Navbar from '../components/Navbar';
import Bottom from './Bottom';

const ServicesPage = () => {
    const services = [
        {
            title: "Branding & Identity",
            description: "We create powerful brand identities that go beyond logos, shaping visuals, voice, and strategy to help your business stand out and connect with your audience.",
            position: "right",
            image: "branding.jpg"
        },
        {
            title: "Business Consulting & Scaling Solutions", 
            description: "We guide businesses from idea to growth, offering strategic insights, process optimization, and scalable solutions that help companies launch, adapt, and expand successfully.",
            position: "left",
            image: "service1.jpg"
        },
        {
            title: "UI UX Designing",
            description: "We design intuitive, user-friendly, and visually engaging digital experiences that enhance usability, boost engagement, and turn visitors into loyal customers.",
            position: "right",
            image: "uiux.jpg"
        },
        {
            title: "Web Development",
            description: "We build fast, secure, and scalable websites tailored to your business needs, combining modern technology with seamless functionality to deliver powerful online experiences.",
            position: "left",
            image: "web.jpg"
        },
        {
            title: "App Development", 
            description: "We create high-performance, user-centric mobile and web applications that combine sleek design with powerful functionality to drive engagement and business growth.",
            position: "right",
            image: "app.jpg"
        },
        {
            title: "Digital Marketing & Strategy",
            description: "We craft data-driven marketing strategies that boost your online presence and drive measurable growth through SEO, social media, and targeted campaigns.",
            position: "left",
            image: "marketing.jpg"
        },
        {
            title: "Video Production",
            description: "We produce high-quality videos and motion graphics that tell your brand's story, engage audiences, and create lasting impact across digital platforms.",
            position: "right",
            image: "editing.jpg"
        },
        {
            title: "Motion Graphics",
            description: "We design dynamic animations that bring ideas to life, simplify complex concepts, and captivate audiences with visually striking storytelling.",
            position: "left",
            image: "motion graphics.jpg"
        }
    ];

    return (
        <div className="w-full bg-[#E8E3D8] min-h-screen">
            {/* Navbar */}
            <Navbar currentPage="services" />
            
            {/* Header */}
            <div className="text-center py-8 sm:py-10 md:py-12 px-4">
                <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold font-architect text-gray-800 mb-4 md:mb-20 tracking-wide">
                    WHAT WE DO
                </h1>
            </div>

            {/* Services Grid */}
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 pb-16">
                <div className="space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-28">
                    {services.map((service, index) => (
                        <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 xl:gap-20 ${service.position === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                            {/* Image Box */}
                            <div className="w-full lg:w-auto">
                                {/* Mobile & Tablet: Responsive width and height */}
                                <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg h-48 sm:h-56 md:h-64 lg:hidden">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Desktop: Fixed 700px x 300px */}
                                <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-sm mx-auto hidden lg:block" style={{ width: '700px', height: '300px' }}>
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            
                            {/* Content */}
                            <div className="w-full lg:w-2/5 space-y-4 md:space-y-6 lg:space-y-8">
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold font-architect text-gray-800 leading-tight text-center lg:text-left">
                                    {service.title}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-afacad text-gray-700 leading-relaxed text-center lg:text-left px-4 sm:px-0">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Component */}
            <Bottom />
        </div>
    );
};

export default ServicesPage;