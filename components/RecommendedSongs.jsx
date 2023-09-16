import Image from "next/image";
import { useEffect, useState } from "react";
import {useStore} from '@app/store/stateStore';

import {AiFillPlayCircle} from 'react-icons/ai';

export default function RecommendedSongs(){

  const [songs, setSongs] = useState([]);

  const setPlayQueue = useStore((state) => state.setPlayQueue);

  const setCurrentlyPlaying  = useStore((state) => state.setCurrentlyPlaying);
  const currentlyPlaying = useStore((state) => state.currentlyPlaying)

  const setCurrentSongInfos = useStore((state) => state.setCurrentSongInfos);

  const isPlaying = useStore((state) => state.isPlaying);

  const togglePlayPause = useStore((state) => state.togglePlayPause);

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


  useEffect(() => {
    const fetchData = async () => {
      const url =
        'https://spotify23.p.rapidapi.com/recommendations/?limit=20&seed_tracks=0c6xIDDpzE81m2q797ordA&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '26681d754fmsh3cb5cb5a73b9a6ap1500d6jsn1ab2e9d4d46e',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        const tracks = data.tracks;
        setSongs(tracks.slice(0, 8));
        setPlayQueue(tracks.slice(0, 8).filter((song) => song.preview_url !== null))
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    
  }, []);
   

  return (
    <div>
    <div className='mt-4 flex gap-6'>
    {songs
    .filter((song) => song.preview_url !== null)
    .map((song, index) => (
      <div key={index} className='text-primary-green'>
        {/* Use song data to populate the elements */}
        <div className="song-container">
          <Image src={song.album.images[0].url} width={200} height={200} />
          <div className="play-icon cursor-pointer" onClick={() => handlePlayClick(song.preview_url, song)}>
            <AiFillPlayCircle className="w-20 h-20 text-primary-green" />
          </div>
        </div>
        <div className='mt-1 font-semibold text-lg song-title'>{song.name}</div>
        <div className='-mt-1 font-semibold text-sm'>{song.artists[0].name}</div>
      </div>
    ))}
    </div>
  </div>
  )
}