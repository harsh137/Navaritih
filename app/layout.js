import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/component/Navbar'
import Footer from '@/component/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NAVARITIH',
  description: 'Student Fourm',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&display=swap" rel="stylesheet" />

        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link href="https://db.onlinewebfonts.com/c/6e800e0ea1aabedc7054eafa1d6ae693?family=Felix+Titling+W00" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap" rel="stylesheet" />
    
       
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>

          </head>
          <body className={inter.className}>
            <Navbar />
            
            {children}
            
            <Footer />
            <SpeedInsights />
          </body>

        </html>
        )
}
