import React from "react";

{/* Timeline Items */}
<div className="absolute inset-0 pointer-events-none">
    {[
        // 1. Right
        { num: "01", title: "Idea & Vision", text: "Define your services, target audience, and niche. Research competitors and draft a clear mission.", pos: "right-[400px] top-[300px]", mobilePos: "top-[0px] right-[20px]" },
        // 2. Left
        { num: "02", title: "Business Planning", text: "Decide business model, pricing, and set financial goals.", pos: "left-[400px] top-[500px]", mobilePos: "top-[200px] left-[20px]" },
        // 3. Right
        { num: "03", title: "Budgeting", text: "Plan startup costs (registration, domain, branding, software, hardware, marketing) and monthly expenses (salaries, subscriptions, marketing, utilities). Track revenue and profits.", pos: "right-[400px] top-[700px]", mobilePos: "top-[400px] right-[20px]" },
        // 4. Left
        { num: "04", title: "Branding & Identity", text: "Create brand name, logo, colors, and style guide. Set up domain, professional email, and social profiles.", pos: "left-[400px] top-[900px]", mobilePos: "top-[600px] left-[20px]" },
        // 5. Right
        { num: "05", title: "Legal & Administration", text: "Register company, open business account, obtain tax IDs, and draft contracts.", pos: "right-[400px] top-[1100px]", mobilePos: "top-[800px] right-[20px]" },
        // 6. Left
        { num: "06", title: "Website & Digital Presence", text: "Design website (home, services, portfolio, contact). Optionally add client login, CMS/backend, payment gateway, and analytics.", pos: "left-[400px] top-[1300px]", mobilePos: "top-[1000px] left-[20px]" },
        // 7. Right
        { num: "07", title: "Tools & Tech", text: "Use project management, communication, design, and dev tools. Automate marketing where possible.", pos: "right-[400px] top-[1500px]", mobilePos: "top-[1200px] right-[20px]" },
        // 8. Left
        { num: "08", title: "Marketing & Outreach", text: "Build portfolio, run campaigns, leverage influencer partnerships, and email marketing.", pos: "left-[400px] top-[1700px]", mobilePos: "top-[1400px] left-[20px]" },
        // 9. Right
        { num: "09", title: "Client Acquisition & Sales", text: "Use proposals, contracts, free demos, and CRM to track and convert leads.", pos: "right-[400px] top-[1900px]", mobilePos: "top-[1600px] right-[20px]" },
        // 10. Left
        { num: "10", title: "Team & Operations", text: "Hire or outsource designers, developers, and marketers. Define roles, workflows, and communication.", pos: "left-[400px] top-[2100px]", mobilePos: "top-[1800px] left-[20px]" },
        // 11. Center
        { num: "11", title: "Growth & Scaling", text: "Expand services/products, retain clients, explore partnerships, and optimize operations.", pos: "left-1/2 -translate-x-1/2 top-[2420px]", mobilePos: "top-[2000px] left-1/2 -translate-x-1/2" }
    ].map((item, index) => (
        <div
            key={index}
            className={`absolute w-64 p-4 bg-black bg-opacity-80 text-white rounded-lg border border-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105 pointer-events-auto
                                ${item.pos} ${window.innerWidth < 768 ? item.mobilePos : ''}`}
        >
            <div className="flex items-center mb-2">
                <span className="text-yellow-400 font-bold text-2xl mr-2">{item.num}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
            </div>
            <p className="text-sm text-gray-300">{item.text}</p>
        </div>
    ))}
</div>