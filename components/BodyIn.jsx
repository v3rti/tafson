'use client'
import '@styles/globalStyles.css'

import Image from 'next/image';

import {AiFillPlayCircle} from 'react-icons/ai';

import Playlist from './Playlist';
import OtherPlaylists from './OtherPlaylists';
// import ArtistsCards from './ArtistsCards';
import RecommendedSongs from './RecommendedSongs';
import { useSession } from 'next-auth/react';
import Head from 'next/head';


export default function BodyIn(){

  const {data} = useSession();

  return (
    <div className='mx-20 mt-10 pb-20'>
      <Head>
        <title>Tafson - Stay up-to-date with the latest </title>
      </Head>
      {/* Main Cards */}
      <div className="w-full flex flex-row gap-10 h-full text-white">
         {/* Today's Hits Card */}
        <div className="todaysHitsCard w-5/12 p-6 bg-primary-green rounded-xl">
          <div className='text-4xl font-semibold'>
            Today's Hits
          </div>
          <div className='mt-8 text-2xl w-4/6'>
            Stay up-to-date with the latest and greatest in music.
          </div>
          <div className='mt-16 w-4/6  flex flex-row justify-center'>
            <button className="bg-secondary-jetstream rounded-md text-primary-green text-xl px-6 py-2 font-semibold">Tune Your Ears</button>
          </div>
        </div>
        {/* Podcasts of The Week */}
        <div className="podcastsCard w-7/12 p-6 bg-primary-green rounded-xl">
           <div className='text-4xl font-semibold'>
              Podcasts of the Week
            </div>
            <div className='mt-8 text-2xl w-3/6'>
              Discover the best podcasts of the week with our curated selection of top picks.
            </div>
            <div className='mt-8 w-4/6 ml-16'>
              <button className="bg-secondary-jetstream rounded-md text-primary-green text-xl px-6 py-2 font-semibold">Dive In and Discover</button>
            </div>
        </div>
      </div>
        {/* Title */ }
        <div className='mt-8 font-bold text-primary-green text-2xl'>
          Stuff we thought you might like
        </div>
        {/* Recomended Music */}
        <RecommendedSongs />
        <div className='my-8'>
          <div className='text-2xl font-semibold mb-4'>Featured Playlists</div>
          <div className='flex gap-8 flex-wrap '>
            <Playlist />
            <OtherPlaylists playlistId="37i9dQZF1DX0XUsuxWHRQd"/>
            <OtherPlaylists playlistId="37i9dQZF1DXcBWIGoYBM5M"/>
          </div>
        </div>
        
    </div>
  )
}