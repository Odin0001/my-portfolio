import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Philip's Portfolio",
  description: 'Philip Jobran\'s Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gray-200 dark:bg-slate-800`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
