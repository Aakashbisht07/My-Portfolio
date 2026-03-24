import { Outfit } from 'next/font/google'
import '@/styles/globals.scss'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Aakash Bisht | Portfolio',
  description: 'Software Developer Portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="app-bg"></div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
