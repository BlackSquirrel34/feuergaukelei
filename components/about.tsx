"use client";

import React from 'react'
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {

const { ref } = useSectionInView('About');
/*
const {ref, inView } = useInView({
  threshold: 0.75,
});
const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

useEffect(() => {
  if (inView && Date.now() - timeOfLastClick > 1000) {
    setActiveSection("About");
  }
}, [inView, setActiveSection, timeOfLastClick]);
*/

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a Master of Science in{" "}
        <span className="italic">Computing in the Humanities</span>, I decided to further specialize in Full-Stack Development.
        I enrolled in a Professional Certificate program and learned to{" "}
        <span className="font-medium">build, deploy, test, run, and manage full-stack applications.</span>{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I enjoy the feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Node.js, and MongoDB
        </span>
        . TypeScript, Next.js and Python with Django are also familiar to me. I am always looking to
        learn new technologies. Currently, I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
      <span className="italic">When I&apos;m not coding</span>, I&apos;ll be probably practicing  <span className="font-medium">acrobatics or flow arts</span>,{" "}
        <span className="font-medium">read a book </span> about some topic that got me hooked,
         or <span className="font-medium">meet up with friends.</span> 
      </p>
    </motion.section>
  );
}