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
import Link from 'next/link';


export default function NavbarIn(){
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
      <Link href="/profile"><div className='flex flex-row items-center gap-2 cursor-pointer text-sm'><RxAvatar className='w-5 h-5'/>Profile</div></Link>
      </div>
    </nav>
  )
}