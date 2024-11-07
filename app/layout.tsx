import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Blacksquirrel',
  description: 'Personal Portfolio Website of Blacksquirrel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-950 relative`}>
        <div className="bg-[#bae3e4] absolute top-[-6rem] -z-10 right-[5rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}</body>
    </html>
  )
}
