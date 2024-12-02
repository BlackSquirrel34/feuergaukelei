import React, { useState } from 'react';
import { Altcha } from 'react-altcha'; // Ensure this import path is correct
import SubmitBtn from './submit-btn'; // Make sure the path is correct
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFire } from 'react-icons/fa'; // Import the fire icon
import { useLanguage } from '@/context/language-context';
import { english, german } from '@/lib/data';


const AltchaPopup = ({ onClose }) => {
  const [isSubmitSuccess, setisSubmitSuccess] = useState(false); // Track verification status
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Optional loading state

  // language switching
  const { currentlanguage } = useLanguage(); // Get current language state
  const content = currentlanguage === 'en' ? english : german;
  const thanks = content[6]?.thanks;
  const click = content[7]?.click;

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    // console.log("####Submitting form, isSubmitSuccess:", isSubmitSuccess); // Debugging log

    // Handle logic when form is verified and submitted
    // console.log('WOHOO! Form submitted successfully!'); // Log successful submission
    setisSubmitSuccess(true); // Set verification success
    setErrorMessage(''); 

    /*
    if (!isSubmitSuccess) {
      setErrorMessage('Please complete the verification before submitting.');
      console.log("Error: Verification not completed"); // Debugging log
      return; // Exit early if verification hasn't been completed
    }
      */

    
    // onClose(); 
  };

  return (
    <div className="flex flex-col items-center">
      {!isSubmitSuccess ? (  // Render the form only if verification is not complete
        <form onSubmit={handleSubmit} className="mb-3 rounded-sm dark:bg-white dark:bg-opacity-80 w-[260px] transition-all duration-300">
          <Altcha
            challengeurl={`${process.env.NEXT_PUBLIC_API_BASE_URL}/captcha/challenge`}
            verifyurl={`${process.env.NEXT_PUBLIC_API_BASE_URL}/captcha/verify`}
            hidelogo
            hidefooter
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>} 
          <SubmitBtn /> 
        </form>
      ) : (
        <>
          <h3 className="mb-2 text-white py-2">{thanks}</h3>
          <a
            href={`https://t.me/${process.env.NEXT_PUBLIC_LINKED_TELEGRAM_HANDLE}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-4 rounded-full border border-white/90 hover:scale-110 transition-transform duration-300"
          >
            <FaFire size={30} className="text-white" aria-label="Telegram" />
          </a>
          <p className="text-white text-sm mt-2 py-4">
            {click}
          </p>
        </>
      )}
    </div>
  );
};

export default AltchaPopup;