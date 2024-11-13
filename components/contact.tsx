"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact() {
  const { ref } = useSectionInView("Contact");

   // Asynchronous function to handle form submission
   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("senderEmail"),
      message: formData.get("message"), 
    };
    console.log("Data transmitted from the form");
    console.log(data);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('API Error:', result);
        throw new Error(result.error || 'Failed to send email.');
      }

      toast.success("Email sent successfully!");
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed /api/send with email:', error);
        toast.error(error.message || 'An error occurred.');
      } else {
        toast.error('An unknown error occurred.');
      }
    }

  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-slate-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:edith-foerster@proton.me">
        edith-foerster@proton.me
        </a>{" "}
        or through this form.
      </p>

      <form
        onSubmit={handleSubmit} // Call the handleSubmit function on submit
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={200}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={3000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}