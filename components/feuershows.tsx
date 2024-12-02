"use client";

import React from 'react';
import Image from 'next/image';
import { shows } from '@/lib/data'; // Adjust the import path as necessary
import { useSectionInView } from '@/lib/hooks';

export default function Fireshows() {
    const { ref } = useSectionInView('Feuershows', 0.5);

        return (
          <section id="feuershows" ref={ref}
          className="mt-36 mb-44 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14
          xs:mt-[-6rem] sm:mt-[-4rem] md:mt-[-1rem] lg:mt-[2rem] xl:mt-[2rem]">

         {/* Background shapes */}
         <div className="bg-[#dc143c] absolute -z-10 right-[5rem] 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
              sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#dc143c]"> 
          </div>
          <div className="bg-[#ff7d3b] absolute -z-10 left-[5rem] 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
              sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#ff7d3b]"> 
          </div>

            {shows.map((show, index) => (
              <div key={index} className="w-72 shadow-md rounded-xl duration-500 text-white bg-slate-900/90 border hover:bg-white/80 hover:text-slate-900 border-gray-200 hover:scale-105 hover:shadow-xl">
               
                  <Image
                    src={show.image} 
                    alt={show.name} 
                    className="h-80 w-72 object-cover rounded-t-xl" 
                  />
                  <div className="flex flex-col items-center p-4 "> 
                    <p className="text-lg font-bold truncate block capitalize text-center pt-4 mb-2">{show.name}</p>
                    <p className="text-smtext-center pb-4">{show.info}</p> 
                  </div>
                
              </div>
            ))}
          </section>
        );
      }