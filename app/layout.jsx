'use client';

import '@styles/globalStyles.css';

import NavbarDefault from '@components/NavbarDefault';
import DemoBody from '@components/DemoBody';
import Musicbar from '@components/Musicbar';
import NavbarIn from '@components/NavbarIn';

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
        {/* Navbar */}
        {userLogged ? <NavbarIn /> : <NavbarDefault loggedIn={handleUserStatus}/>}
        <BodyIn />
        <Musicbar />
      </body>
    </html>
  )
}