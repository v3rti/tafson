'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';

export default function Search({params}){

  const [searchResults, setSearchResults] = useState([]);


  useEffect(() => {
    fetchResult();
  }, [])

  const fetchResult = async () => {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${params.slug}&type=multi&offset=0&limit=3&numberOfTopResults=5`;
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
      setSearchResults(result);
      return;
    } catch (error) {
      console.error(error);
    }
  }



  function getIdArtist(uri) {
    const [, , id] = uri.split(":");
    return id;
  }

  console.log("results are", searchResults);

  if(searchResults) return (
    <div className="mx-48 p-10 pb-36">
      <div className="font-semibold text-3xl text-primary-green">Search results: </div>
      <div className="flex flex-col gap-4">
        <div className='flex flex-col mt-8 gap-4'>
          {searchResults?.artists?.items?.map(res => {
            return <div>
            <div className="flex flex-row justify-between items-center font-semibold ">
            <div className="flex gap-2 w-6/12">
              <Image className="rounded-xl" src={res.data.visuals.avatarImage.sources[0].url} width={140} height={140}/>
              <div className='text-primary-green'>
                <Link href={`/review/artist/${getIdArtist(res.data.uri)}`} className='text-2xl w-fit'>{res.data.profile.name}</Link>
                <div className=' font-semibold'>Artist</div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 mt-2 border-primary-green'></div>
          </div>
          })}
          
        </div>
        <div className='flex flex-col gap-4'>
        {searchResults?.tracks?.items?.map(res => {
            return <div><div className="flex flex-row justify-between items-center font-semibold  ">
            <div className="flex gap-2 w-6/12">
              <Image className="rounded-xl" src={res.data.albumOfTrack.coverArt.sources[0].url} width={140} height={140}/>
              <div className='text-primary-green'>
                <Link href={`/review/song/${res.data.id}`} className='text-2xl w-fit'>{res.data.name}</Link>
                <div className=' font-semibold'>Song</div>
              </div>
            </div> 
          </div>
          <div className='w-full border-t-2 mt-2 border-primary-green'></div></div>
          })}
        </div>
      </div>
    </div>
  )
}