'use client'

import '@styles/globalStyles.css';
import { useEffect, useState } from 'react';

export default function Searchbar(){

  return (
    <div className="w-8/12 flex items-center px-0 ">
      <input type="text" className="px-3 text-xs w-full h-7 rounded-md outline-none" placeholder="Search for artists, albums, podcasts.." />

    </div>
  )
}