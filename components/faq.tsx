"use client";

import React, { useState } from 'react';
import { faqs } from "@/lib/data"; // Adjust the path as necessary
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { ref } = useSectionInView('FAQ');

  return (
    <motion.section
      id="faq"
      ref={ref}
      className="py-10 sm:py-16 lg:py-24" // Added section class for padding
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="mt-28 px-4 mx-auto sm:px-6 lg:px-8 max-w-[min(100%,38rem)]"> {/* Container width settings */}
        
        <SectionHeading>Häufige Fragen</SectionHeading>

        <div className="mt-8 space-y-4 md:mt-16">
            {faqs.map((faq, index) => (
            <div 
                key={index}
                className="border border-gray-200 shadow-lg group rounded-xl cursor-pointer hover:bg-white hover:text-slate-900"
            >
                <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                <span className="flex text-lg font-semibold">{faq.question}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className={`w-6 h-6 text-gray-400 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                    <p className="text-white group-hover:text-slate-900 transition-colors duration-200">{faq.answer}</p> {/* Ensuring text color changes on hover */}
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    </motion.section>
  );
}