'use client'

import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { useStore } from '@app/store/stateStore';
import { IoHeadsetOutline } from 'react-icons/io5';
import { BsFillPlayFill } from 'react-icons/bs';
import { MdSkipPrevious, MdSkipNext, MdOutlinePause } from 'react-icons/md';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { useSession } from 'next-auth/react';

export default function NewMusicBar() {
  const { status } = useSession();

  const currentlyPlaying = useStore((state) => state.currentlyPlaying);
  
  const setCurrentlyPlaying = useStore((state) => state.setCurrentlyPlaying);

  const setCurrentSongInfos = useStore((state) => state.setCurrentSongInfos);

  const currentSongIndex = useStore((state) => state.currentSongIndex);
  const setCurrentSongIndex = useStore((state) => state.setCurrentSongIndex);
  
  const playQueue = useStore((state) => state.playQueue);

  const isPlaying = useStore((state) => state.isPlaying);

  const currentSongInfos = useStore((state) => state.currentSongInfos);

  const {image, name, artist} = currentSongInfos;

  const togglePlayPause = useStore((state) => state.togglePlayPause);

  const [isLiked, setIsLiked] = useState(false);
  const [duration, setDuration] = useState('0:00');
  const [currentTime, setCurrentTime] = useState('0:00');
  const isAuth = status === 'authenticated';

  const audioRef = useRef(null); // Define audioRef here

  function handleLike() {
    setIsLiked(!isLiked);
  }

  function handleClick(){
    togglePlayPause();
  }

  const play = () => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      audioElement.play();
    }
  };

  const pause = () => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      audioElement.pause();
    }
  };

  const handleLoadedMetadata = () => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      const totalSeconds = audioElement.duration;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
      setDuration(`${minutes}:${seconds}`);
    }
  };

  useEffect(() => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      audioElement.addEventListener('timeupdate', () => {
        const currentSeconds = audioElement.currentTime;
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = Math.floor(currentSeconds % 60).toString().padStart(2, '0');
        setCurrentTime(`${minutes}:${seconds}`);
      });
    }

  

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('timeupdate', () => {});
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (currentlyPlaying) {
        audioRef.current.src = currentlyPlaying;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }

    console.log(playQueue);
    console.log(currentlyPlaying);
  }, [currentlyPlaying]);
  
  const playNextSong = () => {
    console.log(currentlyPlaying);
    if (currentSongIndex < playQueue.length - 1) {
      const image = playQueue[currentSongIndex].album.images[0].url; // Replace with appropriate image size
      const name = playQueue[currentSongIndex].name;
      const artist = playQueue[currentSongIndex].artists[0].name;
      setCurrentSongIndex(currentSongIndex + 1);
      setCurrentlyPlaying(playQueue[currentSongIndex].preview_url);
      setCurrentSongInfos({ image, name, artist });
    }
    console.log(currentlyPlaying);
  };


  return (
    <div className={`${isAuth ? "z-30 flex flex-row items-center justify-between gap-36 px-20 w-full bg-primary-green h-16 bottom-0 fixed" : "hidden"}`}>
      <div className="flex flex-row items-center text-white gap-2 ">
        <IoHeadsetOutline className="w-5 h-5" /> Listen Together
        <audio  autoPlay
          id="audioPlayer"
          onLoadedMetadata={handleLoadedMetadata}
          src={currentlyPlaying}
          preload="metadata"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <MdSkipPrevious className="w-6 h-6 text-white" />
        </div>
        {isPlaying ? (
          <div>
            <MdOutlinePause
              className="w-7 h-7 text-white"
              onClick={() => {
                handleClick();
                pause();
                console.log(isPlaying)
              }}
            />
          </div>
        ) : (
          <div>
            <BsFillPlayFill
              className="w-7 h-7 text-white"
              onClick={() => {
                handleClick();
                play();
                console.log(isPlaying)
              }}
            />
          </div>
        )}
        <div onClick={playNextSong}>
          <MdSkipNext className="w-6 h-6 text-white" />
        </div>
        <div className="text-white ml-4">{currentTime}</div>
        <div className="flex flex-row items-center">
          <div className="border-2 border-white w-96"></div>
          <div className="border-2 border-white w-24"></div>
        </div>
        <div className="text-white">{duration}</div>
      </div>
      <div className="text-white flex flex-row items-center">
        <Image src={image ? image :"/assets/sleep.jpg" } width={47} height={47} />
        <div className="ml-3">
          <p className="font-light">{name ? name : "Sleep"}</p>
          <p className="text-xs font-light">{artist ? artist : "Trinity"}</p>
        </div>
        {isLiked ? (
          <div>
            <IoMdHeart className="ml-8 w-6 h-6 text-white" onClick={() => handleLike()} />
          </div>
        ) : (
          <div>
            <IoMdHeartEmpty className="ml-8 w-6 h-6 text-white" onClick={() => handleLike()} />
          </div>
        )}
      </div>
    </div>
  );
}
