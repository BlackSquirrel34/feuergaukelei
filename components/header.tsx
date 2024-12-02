"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggle = () => {
        setIsNavOpen(prev => !prev);
    };

    return (
        <header className="relative z-[999]">
            {/* Hamburger Menu */}
            <div className="fixed top-0 right-0 p-4 z-10">
                <button onClick={handleToggle} className="p-3 md:p-6 lg:p-7 text-gray-50">
                    {isNavOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6">
                            <g>
                                <path fill="currentColor" d="M0 0h24v24H0z" />
                                <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                            </g>
                        </svg>
                    ) : (
                        <>
                            <span className="block w-6 h-0.5 bg-gray-50 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-50 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-50"></span>
                        </>
                    )}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isNavOpen && (
                <motion.ul className="fixed top-0 left-0 bg-gray-900 text-gray-50 z-10 flex flex-col p-4 inline-flex
                backdrop-blur-[0.5rem] border border-white min-w-[120px] custom-rounded overflow-hidden md:ml-6 md:mt-3 lg:ml-16 lg:mt-5">
                {links.map(link => (
                    <motion.li key={link.hash} className="w-full relative">
                        <Link 
                            className={clsx("flex items-center justify-start px-2 py-2 transition relative", 
                            {
                                "text-gray-900": activeSection === link.name,
                                "text-gray-50": activeSection !== link.name
                            })} 
                            href={link.hash} 
                            onClick={() => {
                                setActiveSection(link.name);
                                setTimeOfLastClick(Date.now());
                                setIsNavOpen(false); // Close the menu on link click
                            }}>
                            {link.name}
                            {link.name === activeSection && (
                                <motion.span className='bg-white rounded custom-rounded absolute inset-0 -z-10' 
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30
                                    }}></motion.span>
                            )}
                        </Link>
                    </motion.li>
                ))}
                </motion.ul>
            )}
        </header>
    );
}