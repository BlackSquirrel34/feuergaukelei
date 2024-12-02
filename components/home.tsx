"use client";

import Image from 'next/image';
import React from 'react';
import homeImg from "@/public/leonardo-welcome-removebg.png";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from '@/context/active-section-context';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/language-context';
import { english, german } from '@/lib/data';

export default function Welcome() {
  const { ref } = useSectionInView('Home');
  const {
    setActiveSection,
    setTimeOfLastClick,
  } = useActiveSectionContext();

  // language switching
  const { currentlanguage } = useLanguage(); // Get current language state
  const content = currentlanguage === 'en' ? english : german;
  const welcomeHeadline = content[0]?.welcomeheadline;
  const subheadline = content[1]?.subheadline;

  return (
    <div ref={ref} className="w-full max-w-[1046px] h-screen bg-black flex flex-col md:flex-row">
      {/* Text Section */}
        <div className="flex flex-col justify-center text-white w-full px-6 md:w-1/2 mt-20 mb-12 
        md:mt-0 p-4 md:p-8 md:mx-12 lg:p-12 lg:mx-24">

            <motion.div 
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
        <h1 className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl font-semibold mb-3 md:md-6 lg:mb-8">{welcomeHeadline}</h1>
            </motion.div>
            <motion.div 
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                    delay: 0.2,
                }}
                viewport={{
                    once: true,
                }}
        >
        <p className="lg:text-xl sm:text-xl text-lg lg:my-6 my-2">
            {subheadline}
        </p>
        </motion.div>
        </div>
        

      {/* Image Section */}
      <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
            delay: 0.4,
        }}
        viewport={{
            once: true,
        }}
      className="flex justify-center items-center w-full md:w-1/2 h-60 md:h-full sm: mr-12 md:mr-28"
      >
        <div className="relative w-[17rem] h-[17rem] md:w-[20rem] md:h-[20rem] border-4 border-gray-300 rounded-full overflow-hidden">
          <Image 
            src={homeImg} 
            alt="Hero Image" 
            className="rounded-full fill cover"
          />
        </div>
      </motion.div>
    </div>
  );
}