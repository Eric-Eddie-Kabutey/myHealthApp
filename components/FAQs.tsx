'use client';

import React, { useState } from 'react'

const faqData = [
    {
        question: "Is this really no cost to me? How can that be?",
        answer: "Yes, this program is typically covered by your employer or health plan at no additional cost to you. Your employer or insurance provider has partnered with us to offer these services as part of your benefits package."
    },
    {
        question: "What happens after I enroll?",
        answer: "After enrollment, you'll receive your smart scale within 5-7 business days. You'll also get access to our app where you can track your progress, access personalized content, and connect with expert coaches for guidance and support."
    },
    {
        question: "Will my information be safe?",
        answer: "Absolutely. We take your privacy and data security very seriously. All your personal health information is encrypted and protected according to HIPAA standards and other applicable privacy regulations."
    },
    {
        question: "Who is eligible for Ricia Care?",
        answer: "Eligibility depends on your employer or health plan benefits. Most employees and health plan members have access to our services. You can check your specific eligibility by creating an account or contacting your HR department."
    },
    {
        question: "Do I have to download the mobile app?",
        answer: "While the mobile app provides the best experience for tracking your progress and connecting with coaches, you can also access many features through our web platform on your computer or tablet."
    },
    {
        question: "GLP-1 FAQs",
        answer: "GLP-1 medications are prescription drugs that can help with weight management and diabetes control. Our expert coaches can provide guidance on nutrition and lifestyle factors that complement these medications when prescribed by your healthcare provider."
    }
];

function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return <section className="w-full bg-white flex justify-center py-20 z-10">
        <div className="xl:w-[1200px] mx-auto px-6 flex gap-12 items-start justify-center">
            {/* Left Side - Title */}
            <div className="flex flex-col gap-6">
                <h2 className="text-4xl w-[200px] xl:w-fit xl:text-nowrap font-bold text-[#351F65] leading-tight">
                    Still have questions?
                </h2>
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="flex flex-col w-full">
                {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full py-6 text-left flex items-center justify-between hover:opacity-80 transition-opacity"
                        >
                            <span className="font-medium text-gray-800 pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={`w-6 h-6 text-[#6240E8] transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''
                                    }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                            }`}>
                            <div className="text-gray-600 leading-relaxed text-sm">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}

export default FAQs