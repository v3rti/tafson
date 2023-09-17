'use client'

import '@styles/globalStyles.css';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function Searchbar(){

  const [searchInput, setSearchInput] = useState();
  const router = useRouter()

  const handleSearch = (e) => {
     e.preventDefault();
     setSearchInput(null);
    router.push(`/search/${searchInput}`);
  }

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }

  return (
    <div className="w-8/12 flex items-center px-0 ">
      <form  onSubmit={handleSearch} className='w-full flex gap-2'>
        <input value={searchInput} onChange={handleChange}  type="text" className="px-3 text-xs w-full h-7 rounded-md outline-none" placeholder="Search for artists, albums, podcasts.." />
      </form>
      
    </div>
  )
}