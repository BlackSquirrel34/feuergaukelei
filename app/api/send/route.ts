// test with this: "use server";

import { EmailTemplate } from '@/email/contact-form-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend'; 
import { validateString, getErrorMessage } from "@/lib/utils";

// console.log("API key before", process.env.RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY); // Ensure this is reading the variable


export async function POST(req: Request) {
  try {
    const { email, message } = await req.json(); // Parse the JSON body

    console.log("route.ts here. validation pending")
    
     // simple server-side validation
  if (!validateString(email, 200)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 3000)) {
    return {
      error: "Invalid message",
    };
  }

  console.log("route.ts here. validation completed")

// Todo: change from and to this by verifying a domain you'e allowed to send from
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      // replyTo: email, // check if that works 
      react: EmailTemplate({ message: message, senderEmail: email }), 
    });

    if (error) {
        console.error('Error from route.ts:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
    } catch (error: unknown) {
        return {
        error: getErrorMessage(error),
        };
  } 
}