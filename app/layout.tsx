import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header"
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blacksquirrel Portfolio ',
  description: 'Blacksquirrel is a Full Stack Developer and this is their Personal Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-slate-50 text-slate-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#bae3e4] absolute top-[-6rem] -z-10 right-[5rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"> </div>
        <ActiveSectionContextProvider>
        <Header />
        {children}
        </ActiveSectionContextProvider>
        </body>
    </html>
  );
}
