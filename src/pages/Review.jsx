import React, { useState, useEffect } from 'react';

const Review = () => {
    const [currentReview, setCurrentReview] = useState(0);
    const [animationState, setAnimationState] = useState('sliding-in'); // 'sliding-in', 'showing', 'sliding-out'

    const reviews = [
        {
            text: "We hired Pixel Junkie for our company's website redesign, and the results were beyond our expectations. They delivered a highly responsive, user-friendly, and visually appealing site that feels both modern and functional. The UI/UX is smooth, intuitive, and really engaging — making it much easier for our clients to navigate and interact with us online. Their creative suggestions on content placement and animations gave the site a premium feel. It has truly elevated our online presence, and we've seen an increase in inquiries since the launch.",
            author: "Anjali R"
        },
        {
            text: "We hired Pixel Junkie for our company's website redesign, and the results were beyond our expectations. They delivered a highly responsive, user-friendly, and visually appealing site that feels both modern and functional. The UI/UX is smooth, intuitive, and really engaging — making it much easier for our clients to navigate and interact with us online. Their creative suggestions on content placement and animations gave the site a premium feel. It has truly elevated our online presence, and we've seen an increase in inquiries since the launch.",
            author: "Arjun Menon"
        },
        {
            text: "The team at Pixel Junkie Creative Studios is very talented and professional. We worked with them on a digital marketing campaign, and the way they handled everything — from strategy and creatives to execution — was impressive. Their designs and social media posts were eye-catching and well thought out, and our engagement rates increased noticeably within just a few weeks. The only area for improvement is faster turnaround on certain deliverables, but the quality and creativity of their work more than made up for it. We are very satisfied overall.",
            author: "Priya Nair"
        },
        {
            text: "I approached Pixel Junkie Creative Studios to create a product promo video, and the output was nothing short of stunning. The motion graphics, editing, and storytelling style gave our product the spotlight it deserved. They managed to convey all the key features in a visually engaging way that held attention from start to finish. The team was professional, collaborative, and open to feedback throughout the process. Our customers loved the video, and it has been a big help in our marketing campaigns.",
            author: "Rahul S"
        },
        {
            text: "Pixel Junkie Creative Studios is more than just a design agency — they are true creative partners. From branding and web development to strategy and consulting, they guided us at every step with fresh, unique ideas. They paid attention to the smallest details and made sure everything aligned with our company's vision. Their approach was collaborative, transparent, and professional. Thanks to them, our startup now has a polished, modern look online that has helped us attract clients and build trust quickly. I would wholeheartedly recommend them to any business looking to stand out.",
            author: "Sneha Thomas"
        }
    ];

    useEffect(() => {
        let timeouts = [];
        
        const startCycle = () => {
            // 1. Slide from right outside screen to center (0.5s)
            timeouts.push(setTimeout(() => {
                setAnimationState('showing');
                
                // 2. Show in center for 4 seconds
                timeouts.push(setTimeout(() => {
                    // 3. Slide from center to left outside screen (0.5s)
                    setAnimationState('sliding-out');
                    
                    timeouts.push(setTimeout(() => {
                        // 4. Change to next review and reset to sliding-in state
                        setCurrentReview((prev) => (prev + 1) % reviews.length);
                        setAnimationState('sliding-in');
                        startCycle(); // Restart cycle with new review
                    }, 500)); // Time for slide out
                }, 4000)); // Show for 4 seconds
            }, 500)); // Time for slide in
        };
        
        // Start the first cycle
        startCycle();
        
        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, [reviews.length]);

    return (
        <div className="w-full bg-[#3D3C27] h-auto flex justify-center items-center px-4 sm:px-6 py-12 sm:py-24 relative overflow-hidden" style={{ zIndex: 20 }}>
            <div className="max-w-7xl w-full">
                {/* Review Content */}
                <div className="overflow-hidden">
                    <div
                        className={`transition-transform duration-500 ease-in-out ${
                            animationState === 'sliding-in' ? 'translate-x-[200%]' :    // Start from right outside
                            animationState === 'showing' ? 'translate-x-0' :           // Center position
                            'translate-x-[-200%]'                                      // End at left outside
                        }`}
                        key={currentReview}
                    >
                        {/* Review Text - Center aligned */}
                        <p className="text-white font-vogca leading-relaxed mt-4 sm:mt-8 mb-8 sm:mb-16 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] xl:leading-[1.4]">
                            "{reviews[currentReview].text}"
                        </p>

                        {/* Review Author - Below text, center aligned */}
                        <div className="text-center">
                            <p className="text-gray-300 mb-2 text-sm sm:text-base xl:text-[18px]">
                                Reviewed by
                            </p>
                            <p className="text-white font-mogilte text-2xl sm:text-3xl md:text-4xl xl:text-[40px]">
                                {reviews[currentReview].author}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Review Indicators */}
                <div className="flex justify-center mt-6 sm:mt-12 space-x-2 sm:space-x-3">
                    {reviews.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                                index === currentReview ? 'bg-white' : 'bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;