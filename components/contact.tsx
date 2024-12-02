/* 
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export default function Contact() {
  const { ref } = useSectionInView("Kontakt");

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
      id="kontakt"
      ref={ref}
      className="xs:mt-10 sm:mt-5 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Kontakt</SectionHeading>

      <div className="bg-[#dc143c] absolute -z-10 right-[5rem] 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
              sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#dc143c]"> 
          </div>
          <div className="bg-[#ff7d3b] absolute -z-10 left-[5rem] 
              h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
              sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem] dark:bg-[#ff7d3b]"> 
          </div>

      <p className="-mt-6 text-white/80">
        Ihr könnt mir direkt schreiben an{" "}
        <a className="underline" href="mailto:edith-foerster@proton.me">
        pseudonym55@posteo.de
        </a>{" "}
        oder über dieses Formular.
      </p>

      <form
        onSubmit={handleSubmit} // Call the handleSubmit function on submit
        className="mt-10 flex flex-col text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={200}
          placeholder="Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Nachricht"
          required
          maxLength={3000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
  */