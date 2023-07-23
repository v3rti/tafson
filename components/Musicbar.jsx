'use client'

import '@styles/globalStyles.css';

import Image from 'next/image';

import { useState } from 'react';

import { IoHeadsetOutline } from 'react-icons/io5';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdSkipPrevious, MdSkipNext, MdOutlinePause } from 'react-icons/md';
import {IoMdHeart, IoMdHeartEmpty} from 'react-icons/io'

export default function Musicbar(){

  const [isPlaying, setIsPlaying] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  function handlePlay(){
    setIsPlaying(!isPlaying);
  }

  function handleLike(){
    setIsLiked(!isLiked);
  }


  return(
    <div className="z-30 flex flex-row items-center justify-between gap-36 px-20 w-full bg-primary-green h-16 bottom-0 fixed">
      <div className="flex flex-row items-center text-white gap-2 ">
        <IoHeadsetOutline className="w-5 h-5" /> Listen Together
        
      </div>
            <div className="flex flex-row items-center gap-2">
        <div><MdSkipPrevious className="w-6 h-6 text-white" /></div>
        {isPlaying ? <div><MdOutlinePause className="w-7 h-7 text-white" onClick={() => handlePlay()}/></div> : <div><BsFillPlayFill className="w-7 h-7 text-white" onClick={() => handlePlay()}/></div>}
        
        <div><MdSkipNext className="w-6 h-6 text-white" /></div>
        <div className="text-white ml-4">3:22</div>
        <div className="flex flex-row items-center">
          <div className="border-2 border-white w-96"></div>
          <div className="border-2 border-white w-24"></div>
        </div>
        <div className="text-white">4:39</div>
      </div>
      <div className="text-white flex flex-row items-center">
          <Image src="/assets/sleep.jpg" width={47} height={47}/>
          <div className="ml-3">
            <p className="font-light">Sleep</p>
            <p className="text-xs font-light">Trinity</p>
          </div>
          {isLiked ? <div><IoMdHeart className="ml-8 w-6 h-6 text-white" onClick={() => handleLike()}/></div> : <div><IoMdHeartEmpty className="ml-8 w-6 h-6 text-white" onClick={() => handleLike()}/></div>}
      </div>
    </div>
  )
}