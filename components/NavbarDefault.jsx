'use client';

import '@styles/globalStyles.css';

import Searchbar from '@components/Searchbar';
import AuthButtons from '@components/AuthButtons';

import { MdLibraryMusic } from 'react-icons/md'
import { RiPlayListFill } from 'react-icons/ri'
import { IoMdMicrophone } from 'react-icons/io'
import { SiYoutubemusic } from 'react-icons/si'
import { RxAvatar } from 'react-icons/rx'

import Image from 'next/image';


export default function NavbarDefault({loggedIn}){

  loggedIn(false);

  function sendStatustoparent(){
    loggedIn(true);
  }

  return (
    
    <nav className="w-full bg-primary-green h-16 flex flex-row px-16 justify-between">
      {/* not logged in */}
      <div className="w-8/12 flex flex-row  gap-28">
        <Image src="/assets/Logo.svg" width={120} height={62} />
        <Searchbar />
      </div>
      <div className="flex flex-row items-center cursor-pointer" onClick={sendStatustoparent}><AuthButtons /></div>
    </nav>
  )
}