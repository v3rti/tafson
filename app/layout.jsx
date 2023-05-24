'use client';

import '@styles/globalStyles.css';

import NavbarDefault from '@components/NavbarDefault';
import DemoBody from '@components/DemoBody';
import Musicbar from '@components/Musicbar';
import NavbarIn from '@components/NavbarIn';
import Footer from '@components/Footer';
import MyLibrary from '@components/MyLibrary';

import { useState } from 'react';
import BodyIn from '@components/BodyIn';

export default function RootLayout({children}){

  const [userLogged, setUserLogged] = useState(false);

  const handleUserStatus = (isLogged) => {
    console.log('user status is: ', isLogged);
    setUserLogged(isLogged);
  }
  return (
    <html lang="en">
      <body className="h-screen">
        {userLogged ? <NavbarIn /> : <NavbarDefault loggedIn={handleUserStatus}/>}
        {/* userLogged ? <BodyIn /> : <DemoBody /> } */}
        {/* <Footer /> */}
        <MyLibrary />
        <Musicbar />
      </body>
    </html>
  )
}