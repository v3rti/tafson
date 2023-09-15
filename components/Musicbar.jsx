'use client'

import '@styles/globalStyles.css';

import Image from 'next/image';

import { useState, useRef, useEffect } from 'react';

import { IoHeadsetOutline } from 'react-icons/io5';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdSkipPrevious, MdSkipNext, MdOutlinePause } from 'react-icons/md';
import {IoMdHeart, IoMdHeartEmpty} from 'react-icons/io'
import { useSession } from "next-auth/react";



export default function Musicbar(){

  const {status} = useSession();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [duration, setDuration] = useState('0:00');
  const [currentTime, setCurrentTime] = useState('0:00');
  const isAuth = status === "authenticated";


  function handlePlay(){
    setIsPlaying(!isPlaying);
  }

  function handleLike(){
    setIsLiked(!isLiked);
  }

  const audioRef = useRef(null);

  const play = () => {
    audioRef.current.play();
  };

  const pause = () => {
    audioRef.current.pause();
  };

  const handleLoadedMetadata = () => {
    const totalSeconds = audioRef.current.duration;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
    setDuration(`${minutes}:${seconds}`);
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const currentSeconds = audioRef.current.currentTime;
      const minutes = Math.floor(currentSeconds / 60);
      const seconds = Math.floor(currentSeconds % 60).toString().padStart(2, '0');
      setCurrentTime(`${minutes}:${seconds}`);
    };

    const timer = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(timer);
  }, []);


  if(isAuth){
    return(
    <div className="z-30 flex flex-row items-center justify-between gap-36 px-20 w-full bg-primary-green h-16 bottom-0 fixed">
      <div className="flex flex-row items-center text-white gap-2 ">
        <IoHeadsetOutline className="w-5 h-5" /> Listen Together
        <audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata}>
          <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" />
          Your browser does not support the audio element.
        </audio>
      </div>
            <div className="flex flex-row items-center gap-2">
        <div><MdSkipPrevious className="w-6 h-6 text-white" /></div>
        {isPlaying ? <div><MdOutlinePause className="w-7 h-7 text-white" onClick={() => {
           handlePlay();
           pause();
        }}/></div> : <div><BsFillPlayFill className="w-7 h-7 text-white" onClick={() => {
          handlePlay();
          play();
          }}/></div>}
        
        <div><MdSkipNext className="w-6 h-6 text-white" /></div>
        <div className="text-white ml-4">{currentTime}</div>
        <div className="flex flex-row items-center">
          <div className="border-2 border-white w-96"></div>
          <div className="border-2 border-white w-24"></div>
        </div>
        <div className="text-white">{duration}</div>
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
  return (<audio ref={audioRef} onLoadedMetadata={handleLoadedMetadata}>
    <source src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg" />
    Your browser does not support the audio element.
  </audio>)
}