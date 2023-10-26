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
import LoginForm from "@components/LoginForm";
import { useSession } from "next-auth/react";
import Head from 'next/head'
import Link from "next/link";

export default function HomePage(){

  
  const {data, status} = useSession();

  const isAuth = status === "authenticated";
  const exists = data?.firstName !== null;
  
  const isUserLogged = useStore((state) => state.isUserLogged);
  const isSignUpPop = useStore((state) => state.isSignUpPop);
  const isLoginPop = useStore((state) => state.isLoginPop);
  // const [userLogged, setUserLogged] = useState(false);

  // {isAuth ? <BodyIn /> : <DemoBody /> }
  //       {/* <Footer /> */}
  //       {/* <MyLibrary /> */}
  //       {/* {isAuth ? <Musicbar /> : <div></div>} */}
  //       {isSignUpPop ? <CreateAccount /> : ""}
  //       {isLoginPop ? <LoginForm /> : ""}

  return (
    <div className={`relative h-full ${isSignUpPop || isLoginPop ? "overflow-hidden	" : ""}`}>
        <Head>
          <title>Tafson - Stay up-to-date with the latest</title>
        </Head>
        <div className=" text-3xl text-secondary-jetstream mb-4">
          Tafson by Amine. Under Developement.
        </div>
        <div className=" text-4xl text-secondary-jetstream mb-4">
          Github Repository: <Link href="https://github.com/v3rti/tafson" className="underline">Tafson</Link>
        </div>
        <div className=" text-2xl text-secondary-jetstream">
          Contact me at: med.bagui.1@gmail.com
        </div>
    </div>
  )
}