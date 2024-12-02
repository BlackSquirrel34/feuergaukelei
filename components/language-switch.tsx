"use client";

import { useLanguage } from "@/context/language-context";
import React from "react";
import ReactCountryFlag from "react-country-flag";

export default function LanguageSwitch() {
  // Use the language context to get the currentLanguage and toggleLanguage function
  const { currentlanguage, toggleLanguage } = useLanguage();

  return (
    <button
      className="fixed top-24 right-[2.35rem] w-[2rem] h-[2rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl 
      rounded-full flex items-center justify-center overflow-hidden 
      hover:scale-[1.15] active:scale-105 transition-all bg-slate-950"
      onClick={toggleLanguage} // Use toggleLanguage from context
    >
      {/* Display the appropriate flag based on current language */}
      {currentlanguage === 'en' ? (
        <ReactCountryFlag 
          countryCode="GB" // British flag for English
          svg 
          style={{ 
            width: '200%',    
            height: 'auto',   
            position: 'relative', 
            top: '-2%',      
            left: '0',        
            objectFit: 'cover' 
          }} 
          title="English" 
        />
      ) : (
        <ReactCountryFlag 
          countryCode="DE" // German flag for German
          svg 
          style={{ 
            width: '200%',
            height: 'auto', 
            position: 'relative',
            top: '-2%',      
            left: '0', 
            objectFit: 'cover'
          }} 
          title="German" 
        />
      )}
    </button>
  );
}