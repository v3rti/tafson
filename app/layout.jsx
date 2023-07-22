'use client';

import '@styles/globalStyles.css';



export default function RootLayout({children}){

  
  return (
    <html lang="en">
      <body className="h-screen">
        {children}
      </body>
    </html>
  )
}