import React from "react";
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import EmailAnimation from "../assets/lottie/Email.json";
import { Instagram, MessageCircleCode, Mail, MapPin, Phone, AtSign } from "lucide-react";

const Bottom = () => {
    const navigate = useNavigate();
    return (
        <section className="relative w-full bg-black text-white">
            {/* --- Top Section: Lottie + CTA --- */}
            <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between px-6 sm:px-20 py-20 md:py-32 gap-10">
                {/* Left: Lottie Animation */}
                <div className="w-full sm:w-1/2 flex justify-center">
                    <Lottie animationData={EmailAnimation} loop={true} className="w-[300px] sm:w-[600px]" />
                </div>

                {/* Right: Text + Button */}
                <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start text-center sm:text-left gap-6">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Got talent, passion, or big ideas? Let’s connect!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Apply now and become part of something exciting.
                    </p>
                    <button onClick={() => navigate('/client-application')} className="bg-[#2ab4bc] hover:bg-white text-black font-semibold py-3 px-6 rounded-md transition">
                        Application Form
                    </button>
                </div>
            </div>

            {/* --- Bottom Footer Section --- */}
            <div className="w-full bg-black text-white flex flex-col justify-center items-center font-sans px-6 sm:px-20 py-0 md:py-12">
                <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-start gap-12 sm:gap-8 md:gap-16">
                    {/* --- Left Section --- */}
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                        <img
                            src="/logo.png"
                            alt="Pixel Junkie Logo"
                            className="w-[135px] h-[135px] mb-4"
                        />
                        <p className="text-[14px] md:text-[18px] text-gray-300 w-[255px] mb-4">
                            We bring ideas to life with design, technology, and creativity.
                        </p>
                        <p className="text-[12px] md:text-[16px] text-gray-400 w-[255px] mb-4">
                            24x7 Services through online texting.
                        </p>
                        <div className="flex gap-[20px] justify-center sm:justify-start">
                            <a href="https://www.instagram.com/pixeljunkiestudio.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-[#2ab4bc] transition-colors">
                                <Instagram size={25} className="sm:size-[30px]"/>
                            </a>
                            <button onClick={() => window.open('https://wa.me/+918921318291?text=Hey Pixel Junkie Team! I just visited your website and loved what I saw. I\'d love to discuss how you can help with my branding, design, or digital marketing needs. Let\'s chat!', '_blank')} className="hover:text-[#2ab4bc] transition-colors bg-transparent border-none cursor-pointer">
                                <MessageCircleCode size={25} className="sm:size-[30px]"/>
                            </button>
                            <button onClick={() => window.open('mailto:business@pixeljunkiestudio.in?subject=Inquiry from Pixel Junkie Creative Studio Website&body=Hi Pixel Junkie Team,%0A%0AI just came across your website and was really impressed! I\'d love to learn more about your services and how you can help with my branding, design, or digital marketing needs.%0A%0ALooking forward to your response!%0A%0ABest,%0A[Your Name]%0A[Your Contact Information] (Optional)', '_self')} className="hover:text-[#2ab4bc] transition-colors bg-transparent border-none cursor-pointer">
                                <Mail size={25} className="sm:size-[30px]"/>
                            </button>
                        </div>
                    </div>

                    {/* --- Middle Section --- */}
                    <div className=" mt-8 md:mt-24 flex flex-col md:flex-row gap-20">
                        <div className="flex flex-col items-center sm:items-start">
                            <h2 className="text-[24px] font-semibold mb-4">Get in Touch</h2>
                            <div className="flex flex-col gap-3 text-[14px] text-gray-300">
                                <div className="flex items-center gap-3">
                                    <MapPin size={14} className="sm:size-[18px]"/>
                                    <span>Pixel Junkie Creative Studio</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone size={14} className="sm:size-[18px]"/>
                                    <span>+91 89213 118292</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <AtSign size={14} className="sm:size-[18px]"/>
                                    <span>pixeljunkiestudios.in@gmail.com</span>
                                </div>
                            </div>
                        </div>

                        {/* --- Right Section (Links) --- */}
                        <div className="flex flex-row gap-12 sm:gap-12 md:gap-16">
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-4">Company</h3>
                                <ul className="flex flex-col gap-2 md:gap-3 text-[13px] md:text-[15px] text-gray-300">
                                    <li><button onClick={() => window.scrollTo({ top: 4 * window.innerHeight, behavior: 'smooth' })} className="hover:text-white transition bg-transparent border-none cursor-pointer">About Us</button></li>
                                    <li><button onClick={() => window.scrollTo({ top: 2 * window.innerHeight, behavior: 'smooth' })} className="hover:text-white transition bg-transparent border-none cursor-pointer">Services</button></li>
                                    <li><button onClick={() => window.scrollTo({ top: 3 * window.innerHeight, behavior: 'smooth' })} className="hover:text-white transition bg-transparent border-none cursor-pointer">Projects</button></li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-4">Quick Links</h3>
                                <ul className="flex flex-col gap-3 md:gap-3 text-[12px] md:text-[14px] text-gray-300">
                                    <li><a href="#" className="hover:text-white transition">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition">Support</a></li>
                                    <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                                </ul>
                            </div>
                            <div className="flex flex-col items-center sm:items-start">
                                <h3 className="text-[18px] md:text-[20px] font-semibold mb-3 md:mb-4">Operating Time</h3>
                                <button onClick={() => navigate('/client-application')} className="text-[13px] md:text-[15px] text-gray-300 hover:text-white transition bg-transparent border-none cursor-pointer">24x7 Services through online</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- Bottom Bar --- */}
                <div className="w-full border-t border-gray-700 mt-10 pt-4 flex flex-col sm:flex-row justify-between items-center text-gray-400 text-[10px] md:text-[13px]">
                    <div className="flex items-center gap-2">
                        <img src="/c-icon.png" alt="c icon" className="w-3 md:w-3.5 h-3 md:h-3.5" />
                        <span>2025 Pixel Junkie Creative Studio. All Rights Reserved.</span>
                    </div>
                    <div className="flex gap-6 mt-4 sm:mt-0">
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/privacy');
                                window.scrollTo(0, 0);
                            }} 
                            className="hover:text-white transition"
                        >
                            Privacy Policy
                        </button>
                        <button 
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/terms');
                                window.scrollTo(0, 0);
                            }} 
                            className="hover:text-white transition"
                        >
                            Terms & Services
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Bottom;
