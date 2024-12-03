"use client";

import React from "react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mb-10 px-4 text-center text-gray-500">
      {/* Footer Content */}
      <div className="relative z-10 pb-4">
        <small className="mb-2 block text-xs">
          &copy; 2024 Meraki. All rights reserved.
        </small>
        <small className="mb-2 block text-xs">
        <Link className="hover:text-white" href="/impressum">Impressum, Kontakt, Datenschutz</Link>
        </small>
        <p className="text-xs">
          <span className="font-semibold">Über diese Website:</span> Gebaut mit
          React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
          Framer Motion, Altcha Captcha, Vercel hosting.
        </p>
      </div>
    </footer>
  );
}