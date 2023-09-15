'use client';

import '@styles/globalStyles.css';

import Searchbar from '@components/Searchbar';
import AuthButtons from '@components/AuthButtons';

import { MdLibraryMusic } from 'react-icons/md'
import { RiPlayListFill } from 'react-icons/ri'
import { IoMdMicrophone } from 'react-icons/io'
import { SiYoutubemusic } from 'react-icons/si'
import { RxAvatar } from 'react-icons/rx'

import { useStore } from '@app/store/stateStore';

import Image from 'next/image';
import Link from 'next/link';

import { signOut, useSession } from 'next-auth/react';

export default function NavbarIn(){

  const toggleLogin = useStore((state) => state.toggleLogin);

  const {data, status} = useSession();

  const isAuth = status === "authenticated";

  const toggleSignUpPop = useStore((state) => state.toggleSignUpPop);
  const toggleLoginPop = useStore((state) => state.toggleLoginPop);

  const handleLoginClick = () => {
    toggleLogin();
    console.log("Clicked on Login")
  };

  const handleSignUp = () => {
    toggleSignUpPop();
    console.log("Opened the Sign Up Pop")
  }

  if(isAuth) {
    return (
      <nav className="w-full bg-primary-green h-12 flex flex-row px-16 justify-between">
        {/* Logged in */}
        <div className="w-6/12 flex flex-row gap-28 items-center">
          <Link href="/"><Image src="/assets/Logo.svg" width={80} height={40} /></Link>
          <Searchbar />
        </div>
        <div className="w-4/12 flex flex-row gap-12 items-center text-white">
          <Link href="/library"><div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><MdLibraryMusic className='w-5 h-5'/>Reviews</div></Link>
          <div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><RiPlayListFill className='w-5 h-5'/>Music Discovery</div>
          <div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><SiYoutubemusic className='w-5 h-5'/>Trending</div>
          <div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><IoMdMicrophone className='w-5 h-5'/>Podcasts</div>
        </div>
        <div className="w-fit flex flex-row gap-12 items-center text-white px-8">
        {isAuth ? <Link href="/profile"><div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><RxAvatar className='w-5 h-5'/>Welcome, {data?.user?.firstName} </div></Link> : ""}
        <button onClick={() => signOut()} className='cursor-pointer text-sm'>Logout</button>
        </div>
      </nav>
    )
  }else {
    return (
    
      <nav className="w-full bg-primary-green h-12 flex flex-row px-16 justify-between">
        {/* not logged in */}
        <div className="w-8/12 flex flex-row  gap-28">
          <Image src="/assets/Logo.svg" width={80} height={56} />
          <Searchbar />
        </div>
        <div className="flex flex-row items-center cursor-pointer">
          <div className="flex gap-6 items-center">
          <button className="py-1 w-28 flex justify-center items-center bg-secondary-jetstream rounded-md text-sm text-primary-green font-semibold border-secondary-jetstream border-2" onClick={toggleLogin}>Skip Login</button>
          <button className="py-1 w-28 flex justify-center items-center bg-secondary-jetstream rounded-md text-sm text-primary-green font-semibold border-secondary-jetstream border-2" onClick={toggleLoginPop}>Login</button>
          <button className="py-1 w-28 flex justify-center items-center text-secondary-jetstream rounded-md text-sm bg-primary-green font-semibold border-secondary-jetstream border-2" onClick={handleSignUp}>Sign up</button>
          </div>
        </div>
      </nav>
    )
  }
  
}