import React, { useState } from 'react';

const ClientApplication = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessName: '',
        email: '',
        businessStory: '',
        excitement: '',
        services: {
            branding: false,
            consulting: false,
            uiux: false,
            webdev: false,
            appdev: false,
            marketing: false,
            video: false,
            motion: false
        },
        collateralDescription: '',
        budget: '',
        launchDate: '',
        businessDuration: '',
        additionalInfo: '',
        contactInfo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (service) => {
        setFormData(prev => ({
            ...prev,
            services: {
                ...prev.services,
                [service]: !prev.services[service]
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
        alert('Application submitted successfully! ✅');
    };

    return (
        <div className="fixed inset-0 bg-[#E8E3D8] z-[10000] overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-400">
                <h1 className="text-sm sm:text-lg lg:text-xl font-alegreya text-gray-800 tracking-wide">PIXEL JUNKIE CREATIVE STUDIO</h1>
                <div className="flex items-center space-x-2 sm:space-x-4">
                    <span className="text-sm sm:text-lg font-alegreya text-gray-800">Menu</span>
                    <button
                        onClick={onClose}
                        className="text-gray-600 hover:text-gray-800 text-xl sm:text-2xl font-bold p-1"
                    >
                        ✕
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Image Section - Top on mobile, Left on desktop */}
                <div className="w-full lg:w-[800px] h-64 lg:h-auto bg-gray-400 flex items-center justify-center flex-shrink-0">
                    <div className="text-center text-black">
                        <div className="text-[60px] sm:text-[80px] lg:text-[100px] xl:text-[120px] font-light leading-none">
                            <div>i</div>
                            <div>m</div>
                            <div>a</div>
                            <div>g</div>
                            <div>e</div>
                        </div>
                        <div className="text-2xl sm:text-3xl lg:text-4xl mt-2 lg:mt-4">*</div>
                    </div>
                </div>

                {/* Application Form Section - Bottom on mobile, Right on desktop */}
                <div className="w-full lg:flex-5 p-6 sm:p-8 lg:p-52">
                    <div className="max-w-2xl">
                        <h2 className="text-2xl text-center md:text-[40px] font-architect text-gray-800 mb-4 tracking-wide">CLIENT APPLICATION</h2>
                        <p className="text-gray-700 text-center font-architect mb-8 leading-relaxed">
                            Brilliant work starts with good questions. Here's a quick few from us to get the conversation started.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                    required
                                />
                            </div>

                            {/* Business Story */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Tell us more about your business! What's the story behind it? *
                                </label>
                                <textarea
                                    name="businessStory"
                                    value={formData.businessStory}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                    required
                                />
                            </div>

                            {/* Excitement */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    What makes you excited about working with Pixel Junkie Creative Studios? *
                                </label>
                                <textarea
                                    name="excitement"
                                    value={formData.excitement}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                    required
                                />
                            </div>

                            {/* Services */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">
                                    What services are you interested in? Select all that apply.*
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {[
                                        { key: 'branding', label: 'Branding & Identity' },
                                        { key: 'consulting', label: 'Business Consulting & Scaling Solutions' },
                                        { key: 'uiux', label: 'UI/UX Designing' },
                                        { key: 'webdev', label: 'Web Development' },
                                        { key: 'appdev', label: 'App Development' },
                                        { key: 'marketing', label: 'Digital Marketing & Strategy' },
                                        { key: 'video', label: 'Video Production' },
                                        { key: 'motion', label: 'Motion Graphics' }
                                    ].map(service => (
                                        <label key={service.key} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.services[service.key]}
                                                onChange={() => handleCheckboxChange(service.key)}
                                                className="w-4 h-4 border-2 border-gray-500 rounded-sm text-gray-700 focus:ring-gray-600 focus:ring-2"
                                            />
                                            <span className="text-sm text-gray-700">{service.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Collateral Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    If you selected "Collateral Design" or "Other", please describe what type of services or assets you're looking for below:
                                </label>
                                <textarea
                                    name="collateralDescription"
                                    value={formData.collateralDescription}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                />
                            </div>

                            {/* Budget */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Do you have a budget in mind?*
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                    required
                                />
                            </div>

                            {/* Launch Date */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Do you have a specific launch date in mind?*
                                </label>
                                <input
                                    type="text"
                                    name="launchDate"
                                    value={formData.launchDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                    required
                                />
                            </div>

                            {/* Business Duration */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    How long have you been in business?*
                                </label>
                                <textarea
                                    name="businessDuration"
                                    value={formData.businessDuration}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                    required
                                />
                            </div>

                            {/* Additional Info */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Is there anything else you'd like to share about you or your project?
                                </label>
                                <textarea
                                    name="additionalInfo"
                                    value={formData.additionalInfo}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                />
                            </div>

                            {/* Contact Info */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Thank you! How can we get in touch?
                                </label>
                                <input
                                    type="text"
                                    name="contactInfo"
                                    value={formData.contactInfo}
                                    onChange={handleInputChange}
                                    placeholder="Please provide an Email or Phone Number"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="bg-[#3D3C27] hover:bg-[#4D4C37] text-white px-8 py-3 rounded-sm transition-colors duration-300 font-medium"
                                >
                                    Submit ✅
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientApplication;