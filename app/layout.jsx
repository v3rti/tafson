'use client';

import '@styles/globalStyles.css';
import NavbarIn from '@components/NavbarIn';
import Footer from '@components/Footer';
import AuthProvider from '@components/AuthProvider';
import { useStore } from "./store/stateStore";
import NavbarDefault from '@components/NavbarDefault';
import Musicbar from '@components/Musicbar';


export default function RootLayout({children}){

  // <NavbarIn />
  //       {children}
  //       <Musicbar />

  return (
    <AuthProvider>
    <html lang="en">
    <body className=" bg-primary-green flex justify-center items-center h-full">
        <NavbarIn />	
        {children}	        {children}
        <Musicbar />	
        {/* <Footer /> */}	        {/* <Footer /> */}
      </body>	
    </html>
    </AuthProvider>
  )
}