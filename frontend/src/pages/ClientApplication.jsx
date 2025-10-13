import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { submitClientApplication } from '../utils/api';

const ClientApplication = () => {
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
    
    const [emailError, setEmailError] = useState('');
    const [fieldErrors, setFieldErrors] = useState({
        fullName: false,
        businessName: false,
        email: false
    });
    const [fieldErrorMessages, setFieldErrorMessages] = useState({
        fullName: '',
        businessName: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Special handling for email validation
        if (name === 'email') {
            if (value && !validateEmail(value)) {
                setEmailError('Please enter a valid email address with @ and domain (e.g., user@example.com)');
            } else {
                setEmailError('');
            }
        }
        
        // Clear field error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: false }));
            setFieldErrorMessages(prev => ({ ...prev, [name]: '' }));
        }
        
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Reset status
        setSubmitStatus(null);
        
        // Check required fields
        const errors = {
            fullName: !formData.fullName.trim(),
            businessName: !formData.businessName.trim(),
            email: !formData.email.trim() || !validateEmail(formData.email)
        };
        
        // Set error messages
        const errorMessages = {
            fullName: !formData.fullName.trim() ? 'Full Name is empty' : '',
            businessName: !formData.businessName.trim() ? 'Company Name is empty' : '',
            email: !formData.email.trim() ? 'Email is empty' : (!validateEmail(formData.email) ? 'Please enter a valid email address with @ and domain (e.g., user@example.com)' : '')
        };
        
        setFieldErrors(errors);
        setFieldErrorMessages(errorMessages);
        
        // If any required field is empty, don't submit
        if (errors.fullName || errors.businessName || errors.email) {
            return;
        }
        
        setIsSubmitting(true);
        
        try {
            console.log('Submitting application:', formData);
            const response = await submitClientApplication(formData);
            
            if (response.success) {
                setSubmitStatus('success');
                console.log('Application submitted successfully:', response);
                
                // Reset form after successful submission
                setTimeout(() => {
                    setFormData(prevData => ({
                        ...prevData,
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
                    }));
                    setSubmitStatus(null);
                }, 5000); // Reset after 5 seconds
            } else {
                setSubmitStatus('error');
                console.error('Application submission failed:', response);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Application submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };
    

    return (
        <div className="fixed inset-0 bg-[#E8E3D8] z-[10000] overflow-auto">
            {/* Navbar */}
            <Navbar currentPage="client-application" />

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Image Section - Top on mobile, Left on desktop */}
                <div className="w-full lg:w-[500px] xl:w-[600px] h-64 lg:h-auto flex-shrink-0">
                    <img 
                        src="/Application.webp"
                        alt="Client Application" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Application Form Section - Bottom on mobile, Right on desktop */}
                <div className="w-full lg:flex-1 p-6 sm:p-8 lg:p-12 xl:p-16">
                    <div className="max-w-3xl lg:max-w-none xl:max-w-4xl mx-auto">
                        <h2 className="text-2xl text-center md:text-[40px] font-bold font-architects-daughter text-gray-800 mb-4 tracking-wide">CLIENT APPLICATION</h2>
                        <p className="text-gray-700 text-xl font-semibold text-center font-architects-daughter mb-12 leading-relaxed">
                            Brilliant work starts with good questions. Here's a quick few from us to get the conversation started.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Fields Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div>
                                    <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border rounded-sm bg-transparent focus:outline-none ${
                                            fieldErrors.fullName ? 
                                            'border-red-400 focus:border-red-600' : 
                                            'border-gray-400 focus:border-gray-600'
                                        }`}
                                        required
                                    />
                                    {fieldErrorMessages.fullName && (
                                        <p className="text-red-500 text-sm mt-1">{fieldErrorMessages.fullName}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                        Business Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        value={formData.businessName}
                                        onChange={handleInputChange}
                                        className={`w-full p-3 border rounded-sm bg-transparent focus:outline-none ${
                                            fieldErrors.businessName ? 
                                            'border-red-400 focus:border-red-600' : 
                                            'border-gray-400 focus:border-gray-600'
                                        }`}
                                        required
                                    />
                                    {fieldErrorMessages.businessName && (
                                        <p className="text-red-500 text-sm mt-1">{fieldErrorMessages.businessName}</p>
                                    )}
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full p-3 border rounded-sm bg-transparent focus:outline-none ${
                                        emailError || fieldErrors.email ? 
                                        'border-red-400 focus:border-red-600' : 
                                        'border-gray-400 focus:border-gray-600'
                                    }`}
                                    placeholder="example@domain.com"
                                    required
                                />
                                {(emailError || fieldErrorMessages.email) && (
                                    <p className="text-red-500 text-sm mt-1">{emailError || fieldErrorMessages.email}</p>
                                )}
                            </div>

                            {/* Business Story */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                    Tell us more about your business! What's the story behind it?
                                </label>
                                <textarea
                                    name="businessStory"
                                    value={formData.businessStory}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                />
                            </div>

                            {/* Excitement */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                    What makes you excited about working with Pixel Junkie Creative Studios?
                                </label>
                                <textarea
                                    name="excitement"
                                    value={formData.excitement}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600 resize-none"
                                />
                            </div>

                            {/* Services */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-4 font-afacad">
                                    What services are you interested in? Select all that apply.
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
                                            <span className="text-md text-gray-700 font-afacad">{service.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Collateral Description */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
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
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                    Do you have a budget in mind?
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                />
                            </div>

                            {/* Launch Date */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
                                    Do you have a specific launch date in mind?
                                </label>
                                <input
                                    type="text"
                                    name="launchDate"
                                    value={formData.launchDate}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-400 rounded-sm bg-transparent focus:outline-none focus:border-gray-600"
                                />
                            </div>

                            {/* Business Duration */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-4 font-afacad">
                                    How long have you been in business?
                                </label>
                                <div className="space-y-3">
                                    {[
                                        { value: 'Less than 1 year', label: 'Less than 1 year' },
                                        { value: '1-2 years', label: '1-2 years' },
                                        { value: '3-5 years', label: '3-5 years' },
                                        { value: '5 years+', label: '5 years+' }
                                    ].map(option => (
                                        <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="businessDuration"
                                                value={option.value}
                                                checked={formData.businessDuration === option.value}
                                                onChange={handleInputChange}
                                                className="w-4 h-4 border-2 border-gray-500 text-gray-700 focus:outline-none focus:ring-0"
                                            />
                                            <span className="text-md text-gray-700 font-afacad">{option.label}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div>
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
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
                                <label className="block text-md font-medium text-gray-700 mb-2 font-afacad">
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

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                                    <p className="font-medium">✅ Application submitted successfully!</p>
                                    <p className="text-sm">Thank you for your submission. We'll review your application and get back to you within 24-48 hours. Please check your email for a confirmation.</p>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                                    <p className="font-medium">❌ Submission failed</p>
                                    <p className="text-sm">There was an error submitting your application. Please check your internet connection and try again.</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitStatus === 'success'}
                                    className={`px-8 py-3 rounded-sm transition-colors duration-300 font-medium ${
                                        isSubmitting || submitStatus === 'success'
                                            ? 'bg-gray-400 cursor-not-allowed text-gray-700'
                                            : 'bg-[#3D3C27] hover:bg-[#4D4C37] text-white'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                                            Submitting...
                                        </>
                                    ) : submitStatus === 'success' ? (
                                        'Submitted ✅'
                                    ) : (
                                        'Submit Application →'
                                    )}
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