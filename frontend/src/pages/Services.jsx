import React from 'react';

const services = [
    { number: '01', title: 'Branding & Identity' },
    { number: '02', title: 'Business Consulting & Scaling Solutions' },
    { number: '03', title: 'Web & App Development' },
    { number: '04', title: 'Photography & Video Services' },
    { number: '05', title: 'Digital Marketing & Strategy' },
];

const Services = () => {
    const handleServicesClick = () => {
        // Redirect to ServicesPage with refresh
        window.location.href = '/services';
    };

    return (
        <section className="relative bg-[#3D3C27] text-white pt-[75px] pb-[40px] h-auto" style={{ zIndex: 10 }}>
            <div className="max-w-auto mx-auto px-4 flex flex-col items-center">
                {/* Heading */}
                <h2 className="text-[24px] text-center font-semibold font-architect">
                    OUR SERVICES
                </h2>

                {/* Service Boxes */}
                <div className="flex flex-wrap justify-center gap-6 mt-16 md:mt-[80px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="w-[315px] text-[#F5F5ED] rounded-md p-3 md:p-6 flex flex-col items-start"
                        >
                            <span className="text-[14px] md:text-[18px] font-bold font-architect">{service.number}</span>
                            <h3 className="text-[22px] md:text-[32px]  mt-2 font-insomatte leading-tight">
                                {service.title}
                            </h3>
                        </div>
                    ))}
                </div>


                {/* CTA Button */}
                <div className="mt-20">
                    <button 
                        onClick={handleServicesClick}
                        className="text-[14px] md:text-[16px] font-abhaya text-[#F5F5ED] tracking-[6px] hover:bg-[#F5F5ED] hover:text-[#3D3C27] transition-all duration-300 cursor-pointer"
                    >
                        View our Services.. →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;