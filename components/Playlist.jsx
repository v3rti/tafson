'use client'

import { useStore } from '@app/store/stateStore';
import '@styles/globalStyles.css'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {AiFillPlayCircle} from 'react-icons/ai';

export default function Playlist(){


  const setCurrentlyPlaying  = useStore((state) => state.setCurrentlyPlaying);
  const setCurrentSongInfos = useStore((state) => state.setCurrentSongInfos);

  const setIsPlaying = useStore((state) => state.setIsPlaying);

  const handlePlayClick = (previewLink, song) => {
    setCurrentlyPlaying(previewLink);
    setIsPlaying(true);
    const image = song.album.images[0].url;
    const name = song.name;
    const artist = song.artists[0].name;
    setCurrentSongInfos({ image, name, artist });
    console.log('Setting currentlyPlaying:', previewLink);  
  };
  
  const [playlist,setPlaylist] = useState();
  const [playlistTracks, setPlaylistTracks] = useState();

  useEffect(() => {
    getPlaylist().then(setPlaylist);
  }, [])

  useEffect(() => {
    getPlaylistTracks().then(setPlaylistTracks);
    console.log(playlistTracks);
  }, [])



  const getPlaylist = async () => {
    const url = 'https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX6OgmB2fwLGd';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '26681d754fmsh3cb5cb5a73b9a6ap1500d6jsn1ab2e9d4d46e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  const getPlaylistTracks = async () => {
    const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX6OgmB2fwLGd&offset=0&limit=100';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '26681d754fmsh3cb5cb5a73b9a6ap1500d6jsn1ab2e9d4d46e',
        'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  
  function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  
  if(playlist && playlistTracks){

  return(
    <div className='bg-primary-green w-7/12 py-8 px-6 rounded-xl flex gap-4'>
              <div className='text-secondary-jetstream flex flex-col gap-6'>
                <Image src={playlist.images[0].url} width={260} height={260}/>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl font-semibold'>{playlist.name}</div>
                  <div>{`${addCommasToNumber(playlist.followers.total)} Follower`}</div>
                  <Link href={"https://open.spotify.com/playlist/37i9dQZF1DX6OgmB2fwLGd?si=26bdedcf4d884fe1"}className='mt-4 bg-secondary-jetstream py-2 text-primary-green font-semibold text-lg text-center rounded-lg'>Check on Spotify</Link>
                </div>
              </div>
              <div className='text-secondary-jetstream w-full border-2 border-secondary-jetstream rounded-lg px-6 py-3 overflow-y-scroll max-h-[320px]'>
                {playlistTracks.items.slice(0,20).map(t => {
                  return <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div className="cursor-pointer" onClick={() => handlePlayClick(t.track?.preview_url, t.track)} ><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>{t.track?.name}</div>
                    <div>{t.track?.artists[0].name}</div>
                  </div>
                  <div className=''>{t.track?.duration}</div>
                </div>
                } )}
              </div>
              {/* {playlistTracks.items.map(t => console.log(t.track))} */}
            </div>
            
  )
}
}