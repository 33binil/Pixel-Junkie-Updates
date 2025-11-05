import React from "react";
import "./Projects.css";

export default function Projects({ showProjects }) {
    const boxes = [
        { gradient: "from-[#013220] to-[#151817]", img: "1.png" },
        { gradient: "from-[#390000] to-[#0C0C0C]", img: "2.png" },
        { gradient: "from-[#E8F5E9] to-[#C8E6C9]", img: "3.png" },
        { gradient: "from-[#000000] to-[#1C1C1C]", img: "4.png" },
        { gradient: "from-[#000000] to-[#2B2B2B]", img: "5.png" },
        { gradient: "from-[#0D0D0D] to-[#1A1A1A]", img: "6.png" },
        { gradient: "from-[#000000] to-[#2C2C2C]", img: "7.png" },
        { gradient: "from-[#0D0D0D] to-[#1A1A1A]", img: "8.png" },
        { gradient: "from-[#0D0D0D] to-[#1A1A1A]", img: "9.png" },
        { gradient: "from-[#F9F5EB] to-[#E4DCCF]", img: "10.png" },
        { gradient: "from-[#000000] to-[#2A2A2A]", img: "11.png" },
        { gradient: "from-[#000000] to-[#1C1C1C]", img: "12.png" },
        { gradient: "from-[#FFD700] to-[#FFF8DC]", img: "13.png" },
        { gradient: "from-[#FFCC00] to-[#FF3300]", img: "14.png" },
        { gradient: "from-[#1D1D1D] to-[#0D0D0D]", img: "15.png" },
        { gradient: "from-[#00FF00] to-[#00CC66]", img: "16-2.png" },
        { gradient: "from-[#F5F5F5] to-[#D7D7D7]", img: "17.png" },
    ];

    return (
        <div id="projects" className="relative w-full min-h-screen bg-black text-white flex flex-col">
            <div className="flex-grow flex flex-col justify-center">
                <div className="w-full max-w-7xl mx-auto px-4">
                    {/* === TOP SECTION === */}
                    <div className="w-full mb-8">
                        <h1 className="text-[20px] md:text-[50px] font-dela tracking-wide">OUR PROJECTS</h1>
                    </div>

                    {/* === SLIDER SECTION === */}
                    <div className="banner w-full h-[60vh] overflow-visible">
                        <div className="slider" style={{ "--quantity": boxes.length }}>
                            {boxes.map((box, index) => (
                                <div
                                    key={index}
                                    className={`item bg-gradient-to-b ${box.gradient} rounded-2xl flex items-center justify-center overflow-hidden`}
                                    style={{ "--position": index + 1 }}
                                >
                                    <img
                                        src={`/projects/${box.img}`}
                                        alt={`Project ${index + 1}`}
                                        className="w-[80%] h-[80%] object-contain rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
