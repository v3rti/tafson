'use client';

import '@styles/globalStyles.css';
import NavbarIn from '@components/NavbarIn';
import Footer from '@components/Footer';
import AuthProvider from '@components/AuthProvider';


export default function RootLayout({children}){


  return (
    <AuthProvider>
    <html lang="en">
      <body className="h-screen">
        
        {children}
        {/* <Footer /> */}
      </body>
    </html>
    </AuthProvider>
  )
}