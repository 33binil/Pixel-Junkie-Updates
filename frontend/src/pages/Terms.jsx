import React from 'react';
import Navbar from '../components/Navbar';
import Bottom from './Bottom';

const Terms = () => {
    return (
        <div className="w-full bg-[#E8E3D8] min-h-screen">
            {/* Navbar */}
            <Navbar currentPage="terms" />
            
            {/* Hero Section with Image and Overlay */}
            <div className="relative w-full h-64 md:h-80 lg:h-96">
                <img 
                    src="/terms.jpg"
                    alt="Terms of Use" 
                    className="w-full h-full object-cover"
                />
                {/* 50% Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                
                {/* Title on overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-mogilte text-center px-4">
                        TERMS OF USE
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
                <div className="space-y-8 md:space-y-10">

                    {/* Effective Date */}
                    <div>
                        <p className="text-gray-700 font-afacad text-lg mb-8">
                            These Website Terms of Use, together with the documents referred to in them, set out the terms under which you may use our website at www.pixeljunkiestudio.in (Our Website).
                        </p>
                    </div>

                    {/* Definitions and Interpretation */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            1. Definitions and Interpretation
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed mb-4">
                            In these Terms of Use, the following expressions have the meanings set out below:
                        </p>
                        <div className="space-y-4 ml-4">
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">"Content"</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    Means all text, images, audio, video, scripts, code, software, databases, and any other information on Our Website or social media channels, including but not limited to Pixel Junkie Creative Studio's Instagram and LinkedIn accounts.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">"Data Protection Legislation"</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    Means all applicable data protection and privacy legislation in force from time to time, including GDPR and any local privacy laws that apply to personal data.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">"Intellectual Property Rights"</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    Means all current and future rights in patents, trademarks, service marks, designs, copyrights, database rights, trade secrets, know-how, domain names, and any other intellectual property.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">"We/Us/Our"</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    Means Pixel Junkie Creative Studio, the owner and operator of Our Website.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-semibold font-afacad text-lg">"You/Your"</p>
                                <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                                    Means any person accessing or using Our Website.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Acceptance of Terms */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            2. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            By accessing or using Our Website, you agree to comply with and be bound by these Terms of Use. If you do not agree, please do not use our website.
                        </p>
                    </section>

                    {/* Changes to Terms */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            3. Changes to Terms
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            We may revise these Terms of Use from time to time without notice. Continued use of the website after updates indicates acceptance of the revised terms.
                        </p>
                    </section>

                    {/* Privacy and Data Protection */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            4. Privacy and Data Protection
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>Your use of Our Website is also governed by Our Privacy Policy.</li>
                            <li>We collect and process personal data in accordance with applicable data protection laws.</li>
                        </ul>
                    </section>

                    {/* Account */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            5. Account
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>Some parts of Our Website may require you to create an account. You must provide accurate information and keep it up-to-date.</li>
                            <li>Do not share your account details, and notify us immediately if you suspect unauthorized access.</li>
                            <li>You may close your account at any time, but access to account-restricted areas will then be disabled.</li>
                        </ul>
                    </section>

                    {/* Intellectual Property */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            6. Intellectual Property
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>All Content on Our Website and social media channels is owned by Us or our licensors.</li>
                            <li>You may not reproduce, distribute, sell, sub-license, or create derivative works without our prior written consent.</li>
                            <li>You may access and view Content in a browser, print pages, and save pages for offline viewing, provided you acknowledge Pixel Junkie Creative Studio as the owner.</li>
                        </ul>
                    </section>

                    {/* User Conduct */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            7. User Conduct
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 font-afacad text-lg leading-relaxed space-y-2 ml-4">
                            <li>You agree to use Our Website for lawful purposes only.</li>
                            <li>Do not post harmful, offensive, or illegal content.</li>
                            <li>Do not attempt to introduce viruses, malware, or disrupt Our Website.</li>
                            <li>We reserve the right to suspend or terminate access for violations.</li>
                        </ul>
                    </section>

                    {/* Disclaimers */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            8. Disclaimers
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            We make no guarantees that Our Website will meet your requirements, be error-free, or secure. We are not liable for inaccuracies or reliance on any Content.
                        </p>
                    </section>

                    {/* Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            9. Limitation of Liability
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            To the fullest extent permitted by law, Pixel Junkie Creative Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from use of Our Website.
                        </p>
                    </section>

                    {/* Indemnification */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            10. Indemnification
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            You agree to indemnify and hold Us harmless from any claims, liabilities, or expenses arising from your use of Our Website or violation of these Terms.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl md:text-3xl font-bold font-afacad text-gray-800 mb-4">
                            12. Contact Information
                        </h2>
                        <p className="text-gray-700 font-afacad text-lg leading-relaxed">
                            If you have any questions or concerns about Our Website or these Terms of Use, please contact us via our Contact Us page or email us at <a href="mailto:business@pixeljunkiestudio.in" className="text-blue-600 hover:text-blue-800 underline">business@pixeljunkiestudio.in</a>.
                        </p>
                    </section>

                    {/* Last Updated */}
                    <div className="border-t border-gray-300 pt-8 mt-12">
                        <p className="text-gray-600 font-afacad text-base">
                            Date: 01/01/2025
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Component */}
            <Bottom />
        </div>
    );
};

export default Terms;