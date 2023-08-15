'use client';

import '@styles/globalStyles.css';
import NavbarIn from '@components/NavbarIn';
import Footer from '@components/Footer';


export default function RootLayout({children}){

  
  return (
    <html lang="en">
      <body className="h-screen">
        <NavbarIn />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}