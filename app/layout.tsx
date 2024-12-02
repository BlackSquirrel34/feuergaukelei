import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import LanguageContextProvider from "@/context/language-context";
import LanguageSwitch from "@/components/language-switch";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bamberg "Feuergaukelei" Fireartists Website',
  description: 'The Bamberger Feuergaukelei is a group of flow arts and fire spinning enthusiasts.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-black text-gray-50 relative text-opacity-90`}
      >
        <LanguageContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <LanguageSwitch />
          </ActiveSectionContextProvider>
          </LanguageContextProvider>
      </body>
    </html>
  );
}
