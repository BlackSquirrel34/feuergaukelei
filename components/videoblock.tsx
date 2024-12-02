
"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { useLanguage } from '@/context/language-context';
import { english, german } from '@/lib/data';

export default function VideoBlock() {
    const { ref } = useSectionInView('Kontaktfestival');

    // language switching
    const { currentlanguage } = useLanguage(); // Get current language state

    // Determine the content based on the current language
    // this line will end up assigning the content variable either the english array or the german array, 
    // depending on the current language chosen. 
    const content = currentlanguage === 'en' ? english : german;

    const festivalheadline = content[3]?.festivalheadline;

    return (
        <div id="kontaktfestival" ref={ref} className="mt-20 flex flex-col items-center w-full h-screen max-w-[1046px] bg-black py-8 px-5 sm:px-2 md:px-9 lg:px-16">
            <div className='py-7 mb-6'>
                <SectionHeading>{festivalheadline}</SectionHeading>
            </div>
            <div 
                className="relative h-0 overflow-hidden max-w-full w-full rounded-xl" 
                style={{ paddingBottom: '56.25%' }}
            >
                <iframe
                    src="https://www.youtube.com/embed/Y-XouSuoO_8"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    title="YouTube Video" // Adding title for accessibility
                ></iframe>
            </div>
        </div>
    );
}