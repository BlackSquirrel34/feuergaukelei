"use client"; 

import React, { useRef } from 'react';
import Image from 'next/image';
import { gallery } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from './section-heading';
import { english } from "@/lib/data"; // Import your English array
import { german } from "@/lib/data"; // Import your German array
import { useLanguage } from "@/context/language-context"; // Import the language context

export default function ImageGallery() {
    const { ref } = useSectionInView("Galerie"); // include ref={ref}
    // language switching
    const { currentlanguage } = useLanguage(); // Get current language state

    // Determine the content based on the current language
    // this line will end up assigning the content variable either the english array or the german array, 
    // depending on the current language chosen. 
    const content = currentlanguage === 'en' ? english : german;

    const galleryHeadline = content[2]?.galleryheadline;

    return (
      <div id="galerie" className="max-w-[1046px] bg-black py-24">
          <div className='py-7 mb-6'>
              <SectionHeading>{galleryHeadline}</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {/* Render the large image only on lg screens (4 columns) */}
              <div className="col-span-full lg:col-span-4 md:col-span-3 mb-6 hidden lg:block md:block">
                  <Image
                      src={gallery[0].imageLink}
                      alt={`Large gallery image`}
                      className="w-full h-[32rem] lg:h-[42rem] object-cover rounded-lg transition-transform transform scale-100"
                      width={1080}
                      height={720}
                  />
              </div>

              {/* Render 8 small images from the gallery */}
              {gallery.slice(2, 10).map(({ imageLink }, index) => (
                  <div key={index} className="group cursor-pointer relative">
                      <Image
                          src={imageLink}
                          alt={`Gallery photo ${index + 1}`}
                          className="w-full h-[17rem] md:h-[20rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                          width={1080}
                          height={720}
                      />
                  </div>
              ))}

            {/* Conditionally render the additional small image only on medium screens */}
            <div className="hidden lg:hidden md:block group cursor-pointer relative">
                    <Image
                        src={gallery[1]?.imageLink || ''} // Make sure 9th image exists before rendering
                        alt={`Additional gallery photo`}
                        className="w-full h-[17rem] md:h-[20rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                        width={1080}
                        height={720}
                    />
            </div>

 {/* Conditionally render additional images at index 10 and 11 if they exist */}
 {gallery.length >= 13 && (
                    <>
                        {/* These images will span 3 columns on medium screens (md) */}
                        <div className="hidden md:block md:col-span-3 lg:col-span-2">
                            <Image
                                src={gallery[10]?.imageLink}  // Optional chaining
                                alt={`Additional gallery photo 1`}
                                className="w-full h-[20rem] md:h-[32rem] lg:h-[32rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                                width={1080}
                                height={720}
                            />
                        </div>
                        <div className="hidden md:block md:col-span-3  lg:col-span-2">
                            <Image
                                src={gallery[11]?.imageLink}  // Optional chaining
                                alt={`Additional gallery photo 2`}
                                className="w-full h-[20rem] md:h-[32rem] lg:h-[32rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                                width={1080}
                                height={720}
                            />
                        </div>
                        <div className="hidden md:block md:col-span-3  lg:col-span-2">
                            <Image
                                src={gallery[12]?.imageLink}  // Optional chaining
                                alt={`Additional gallery photo 3`}
                                className="w-full h-[20rem] md:h-[32rem] lg:h-[32rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                                width={1080}
                                height={720}
                            />
                        </div>
                        <div className="hidden md:block md:col-span-3  lg:col-span-2">
                            <Image
                                src={gallery[13]?.imageLink}  // Optional chaining
                                alt={`Additional gallery photo 4`}
                                className="w-full h-[20rem] md:h-[32rem] lg:h-[32rem] object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-110"
                                width={1080}
                                height={720}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}