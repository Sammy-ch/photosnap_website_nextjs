import './globals.css'
import { DM_Sans } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
            <Navbar />
              <div className='wrapper'>{children}</div>
              <Footer />
          </body>
    </html>
  )
}
