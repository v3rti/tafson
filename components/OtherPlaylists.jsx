import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function OtherPlaylists(props){


  const [playlist,setPlaylist] = useState();

  useEffect(() => {getPlaylist().then(setPlaylist)}, [])

  const getPlaylist = async () => {
    const url = `https://spotify23.p.rapidapi.com/playlist/?id=${props.playlistId}`;
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

  if(playlist){
    return (
      <div className='relative bg-primary-green py-5 px-10 rounded-lg '>
        <div className=' text-secondary-jetstream flex flex-col gap-6'>
                  <Image src={playlist.images[0].url} width={200} height={260}/>
                  <div className='flex flex-col gap-1'>
                    <div className='text-xl font-semibold'>{playlist.name}</div>
                    <div>{`${addCommasToNumber(playlist.followers.total)} Follower`}</div>
                    <Link href={`https://open.spotify.com/playlist/${props.playlistId}?si=26bdedcf4d884fe1`}className='mt-4 bg-secondary-jetstream py-2 text-primary-green font-semibold text-lg text-center rounded-lg'>Check on Spotify</Link>
                  </div>
        </div>
      </div>
    )
  }
}