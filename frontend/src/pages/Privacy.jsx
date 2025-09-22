import React from 'react';
import Navbar from '../components/Navbar';
import Bottom from './Bottom';

const Privacy = () => {
    return (
        <div className="w-full bg-[#E8E3D8] min-h-screen">
            {/* Navbar */}
            <Navbar currentPage="privacy" />
            
            {/* Hero Section with Image and Overlay */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <img 
                    src="/privacy.jpg" 
                    alt="Privacy Notice" 
                    className="w-full h-full object-cover"
                />
                {/* 50% Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Title on overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-mogilte text-center px-4">
                        PRIVACY NOTICE
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="space-y-8 md:space-y-10">
                    
                    {/* Introduction */}
                    <div>
                        <p className="text-gray-700 font-afacad text-lg mb-4">
                            <strong>Effective Date:</strong> 01/01/2025
                        </p>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-8">
                            We respect the privacy of our clients and everyone who visits our website, www.pixeljunkiestudio.in (Our Site). Pixel Junkie Creative Studio (we/us/our) will only collect and use personal data in ways described in this Privacy Notice, and in compliance with applicable data protection laws.
                        </p>
                    </div>

                    {/* Definitions and Interpretation */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            1. Definitions and Interpretation
                        </h2>
                        <div className="space-y-4 ml-4">
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">Client:</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    a client who engages our services or purchases products from us.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">Data Protection Legislation:</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    all applicable data protection and privacy legislation in force, including GDPR and any local privacy laws relevant to the processing of personal data.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Information About Us */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            2. Information About Us
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            Pixel Junkie Creative Studio is the controller responsible for your personal data.
                        </p>
                        <div className="space-y-2 ml-4">
                            <p className="text-gray-700 font-afacad text-lg">
                                <strong>Contact:</strong>
                            </p>
                            <p className="text-gray-700 font-afacad text-lg">
                                📧 <a href="mailto:bussiness@pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline">bussiness@pixeljunkiestudio.in</a>
                            </p>
                            <p className="text-gray-700 font-afacad text-lg">
                                🌐 <a href="https://www.pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">www.pixeljunkiestudio.in</a>
                            </p>
                        </div>
                    </section>

                    {/* Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            3. Your Personal Data
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>Personal data is any information that identifies you, including name, contact details, online identifiers, or account information.</li>
                            <li>Keep your personal data accurate and up-to-date.</li>
                            <li>If you do not provide required personal data, we may be unable to deliver certain services or products.</li>
                        </ul>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            4. Your Rights
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            You have the following rights under Data Protection Legislation:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4 mb-4">
                            <li>Right to be informed about how we use your personal data</li>
                            <li>Right to access your personal data</li>
                            <li>Right to rectify inaccurate or incomplete personal data</li>
                            <li>Right to request deletion or withdraw consent</li>
                            <li>Right to restrict processing for specific purposes</li>
                            <li>Right to portability of your personal data</li>
                            <li>Rights related to automated decision-making (we do not use this)</li>
                            <li>Right to lodge a complaint with the relevant data protection authority</li>
                        </ul>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            For any questions or requests, contact us at <a href="mailto:bussiness@pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline">bussiness@pixeljunkiestudio.in</a>.
                        </p>
                    </section>

                    {/* What Data We Collect */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            5. What Data We Collect
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            We may collect personal data depending on your interactions:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li><strong>Contact Information:</strong> name, email, phone, address</li>
                            <li><strong>Account Information:</strong> username, password, profile details</li>
                            <li><strong>Payment Information:</strong> billing details, transaction history (full card numbers are not stored)</li>
                            <li><strong>Communication Data:</strong> messages between you and us</li>
                            <li><strong>Usage Information:</strong> analytics on website interactions</li>
                            <li><strong>Technical Information:</strong> IP address, browser type, device type, operating system</li>
                            <li><strong>Social Media Data:</strong> interactions on our social media pages</li>
                            <li><strong>Cookies & Tracking Technologies:</strong> for analytics and user experience</li>
                            <li><strong>Other Information:</strong> additional data collected with your consent or as required by law</li>
                        </ul>
                    </section>

                    {/* How We Use Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            6. How We Use Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            We process your data lawfully for purposes including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4 mb-4">
                            <li>To perform contracts with clients</li>
                            <li><strong>For our legitimate interests:</strong> business development, client relationship management, IT security, website improvement</li>
                            <li>To comply with legal obligations</li>
                            <li><strong>With your consent:</strong> marketing communications and direct outreach</li>
                        </ul>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            We do not use automated decision-making or profiling.
                        </p>
                    </section>

                    {/* Keeping Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            7. Keeping Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            We retain personal data only as long as necessary for the purpose it was collected, taking into account legal obligations and potential disputes. Data may be anonymised for research or statistical purposes.
                        </p>
                    </section>

                    {/* Storing Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            8. Storing Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            We implement technical and organizational measures to protect your data:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>SSL encryption for data in transit and at rest</li>
                            <li>Secure storage with access controls</li>
                            <li>Regular security audits and updates</li>
                            <li>Confidentiality obligations for staff and contractors</li>
                            <li>Procedures for data breach management and notification</li>
                        </ul>
                    </section>

                    {/* Transferring and Sharing Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            9. Transferring and Sharing Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            We may share data with trusted third-party service providers for project management, email, analytics, or payment processing. Examples include:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4 mb-4">
                            <li>Project Planning Platforms (e.g., Monday.com)</li>
                            <li>Email & Scheduling Services (e.g., Gmail/Google Workspace)</li>
                        </ul>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            Data may be stored or processed outside your country; we ensure appropriate protections are in place.
                        </p>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-2">
                            We may also share data:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>With your consent</li>
                            <li>For legal obligations or to prevent harm</li>
                            <li>With professional advisers (lawyers, auditors, insurers)</li>
                            <li>With authorities such as tax regulators</li>
                            <li>In the event of business sale or transfer</li>
                        </ul>
                    </section>

                    {/* Controlling and Withholding Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            10. Controlling and Withholding Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            You may control how we use your data for marketing purposes (e.g., unsubscribing from emails). Some website features may require personal data to function.
                        </p>
                    </section>

                    {/* Accessing Your Personal Data */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            11. Accessing Your Personal Data
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            You can request details of your personal data (Subject Access Request) by emailing <a href="mailto:bussiness@pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline">bussiness@pixeljunkiestudio.in</a>.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>Normally free of charge, unless requests are excessive</li>
                            <li>Responses provided within one month (up to three months if complex)</li>
                        </ul>
                    </section>

                    {/* Contact Details */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            12. Contact Details
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            For any questions regarding your personal data or this Privacy Notice, contact us at:
                        </p>
                        <div className="space-y-2 ml-4">
                            <p className="text-gray-700 font-afacad text-lg">
                                📧 <a href="mailto:bussiness@pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline">bussiness@pixeljunkiestudio.in</a>
                            </p>
                            <p className="text-gray-700 font-afacad text-lg">
                                🌐 <a href="https://www.pixeljunkiestudio.in/contact" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">www.pixeljunkiestudio.in/contact</a>
                            </p>
                        </div>
                    </section>

                    {/* Updates to This Privacy Notice */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            13. Updates to This Privacy Notice
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            We may update this Privacy Notice from time to time. The latest version will be published on Our Site, and continued use of Our Site constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    {/* Last Updated */}
                    <div className="border-t border-gray-300 pt-8 mt-12">
                        <p className="text-gray-600 font-afacad text-base">
                            Last Updated: 01/01/2025
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Component */}
            <Bottom />
        </div>
    );
};

export default Privacy;