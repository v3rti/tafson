'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';

export default function Search({params}){


  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedInput, setDebouncedInput] = useState(searchInput);

  useEffect(() => {
    fetchResult();
  }, [])

  const fetchResult = async () => {
    const url = `https://spotify23.p.rapidapi.com/search/?q=${params.slug}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
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



  return (
    <div className="mx-48 p-10">
      <div className="font-semibold text-3xl text-primary-green">Search results: </div>
      <div className="flex flex-col gap-4">
        <div className='flex flex-col mt-8 gap-4'>
          <div className="flex flex-row justify-between items-center font-semibold border border-red-500 ">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/vertigo.png"} width={140} height={140}/>
              <div className='text-primary-green'>
                <div className='text-2xl'>start//end</div>
                <div className='text-xl'>Eden</div>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}