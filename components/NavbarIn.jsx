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
    <nav className="w-full bg-primary-green h-16 flex flex-row px-16 justify-between">
      {/* Logged in */}
      <div className="w-6/12 flex flex-row gap-28 items-center">
        <Link href="/"><Image src="/assets/Logo.svg" width={120} height={62} /></Link>
        <Searchbar />
      </div>
      <div className="w-4/12 flex flex-row gap-12 items-center text-white">
        <Link href="/library"><div className='flex flex-row items-center gap-2 cursor-pointer'><MdLibraryMusic className='w-6 h-6'/>My Library</div></Link>
        <div className='flex flex-row items-center gap-2 cursor-pointer'><RiPlayListFill className='w-6 h-6'/>Playlists</div>
        <div className='flex flex-row items-center gap-2 cursor-pointer'><SiYoutubemusic className='w-6 h-6'/>New Releases</div>
        <div className='flex flex-row items-center gap-2 cursor-pointer'><IoMdMicrophone className='w-6 h-6'/>Podcasts</div>
      </div>
      <div className="w-fit flex flex-row gap-12 items-center text-white px-8">
      <Link href="/profile"><div className='flex flex-row items-center gap-2 cursor-pointer'><RxAvatar className='w-6 h-6'/>Profile</div></Link>
      </div>
    </nav>
  )
}