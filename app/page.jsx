'use client'

import BodyIn from "@components/BodyIn";
import DemoBody from "@components/DemoBody";
import Musicbar from "@components/Musicbar";
import NavbarDefault from "@components/NavbarDefault";
import NavbarIn from "@components/NavbarIn";
import { useState, useEffect } from "react";
import { useStore } from "./store/stateStore";
import CreateAccount from "@components/CreateAccount";
import Footer from "@components/Footer";


export default function HomePage(){
  
  const isUserLogged = useStore((state) => state.isUserLogged);
  const isSignUpPop = useStore((state) => state.isSignUpPop);

  // const [userLogged, setUserLogged] = useState(false);

  return (
    <div className={`relative h-full ${isSignUpPop ? "overflow-hidden	" : ""}`}>
        {isUserLogged ? <NavbarIn /> : <NavbarDefault/>}
        {isUserLogged ? <BodyIn /> : <DemoBody /> }
        {/* <Footer /> */}
        {/* <MyLibrary /> */}
        {isUserLogged ? <Musicbar /> : <div></div>}
        {isSignUpPop ? <CreateAccount /> : ""}
        <Footer />
    </div>
  )
}