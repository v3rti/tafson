'use client';

import '@styles/globalStyles.css';
import NavbarIn from '@components/NavbarIn';



export default function RootLayout({children}){

  
  return (
    <html lang="en">
      <body className="h-screen">
        <NavbarIn />
        {children}
      </body>
    </html>
  )
}