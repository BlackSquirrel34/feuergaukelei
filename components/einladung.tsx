"use client";

import React, { useState } from 'react';
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import AltchaPopup from './altchapopup'; // Use the new name here
import { useLanguage } from '@/context/language-context';
import { english, german } from '@/lib/data';


export default function Einladung() {
  const { ref } = useSectionInView('Training');

  // language switching
  const { currentlanguage } = useLanguage(); // Get current language state
  const content = currentlanguage === 'en' ? english : german;
  const trainingheadline = content[4]?.trainingheadline;
  const trainingtext = content[5]?.trainingtext;

  // track popup visibility. initially hidden.
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const closePopup = () => {
  setIsPopupOpen(false);
  console.log("Popup closed"); // Check if this logs
};

  return (
    <motion.section
      ref={ref}
      className="mt-28 mb-28 text-center leading-8 sm:mb-40 scroll-mt-28 max-w-[1046px] bg-black py-16 px-6" // Generous padding
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="training"
    >
      <SectionHeading>{trainingheadline}</SectionHeading>
      <p className="mb-6 py-12 px-4 sm:px-10"> {/* Added padding on top and bottom */}
        {trainingtext}
      </p>

      {/* Social Icons Section */}
      <div className="flex justify-center space-x-5 mt-5">
        {/* Instagram Icon */}
        <a 
          href={`${process.env.NEXT_PUBLIC_LINKED_INSTA_ACCOUNT}`} // Replace with your actual Instagram URL
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
          aria-label="Instagram"
          className="p-4 rounded-full border border-white/90 hover:scale-110 transition-transform duration-300" // Circle with border and hover effect
        >
          <FaInstagram size={30} className="text-white" />
        </a>

        {/* Telegram Icon */}
      <div onClick={() => setIsPopupOpen(true)} className="p-4 rounded-full border border-white/90 hover:scale-110 transition-transform duration-300">
        <FaTelegramPlane size={30} className="text-white/90" aria-label="Telegram" />
      </div>

      {/* Popup with Altcha Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-black text-white rounded-lg p-6 max-w-[300px] w-full shadow-lg relative">
          <button onClick={() => setIsPopupOpen(false)} className="absolute top-2 right-2 text-gray-600">
              &times; {/* Close button */}
            </button>
            <AltchaPopup onClose={() => setIsPopupOpen(false)} />
          </div>
        </div>
      )}

      </div>
    </motion.section>
  );
}