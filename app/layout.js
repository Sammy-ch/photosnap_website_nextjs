"use client"
import './globals.scss'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MantineProvider } from '@mantine/core';

const dm_sans = DM_Sans({
  weight: ["400","700"],
  subsets: ['latin'],
});

export const metadata = {
  title: 'PhotoSnap website',
  description: 'A Photo Sharing website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

          <body className={dm_sans.className}>
            <MantineProvider>
                    <Navbar />
                          <div className='wrapper'>{children}</div>
                      <Footer />
              </MantineProvider>
            </body>

    </html>
  )
}
