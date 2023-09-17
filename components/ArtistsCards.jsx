import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function ArtistsCards(){

  const [artists, setArtists] = useState();


  useEffect(() => {
    getArtists().then(setArtists);
  },[]);

  

  const getArtists = async () => {
    const url = 'https://spotify23.p.rapidapi.com/artists/?ids=2w9zwq3AktTeYYMuhMjju8';
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

      return result.artists;
    } catch (error) {
      console.error(error);
    }
  }

  console.log("artists are:", artists)
  

  return(
    <div className="border-2 border-primary-green px-6 py-8 w-fit rounded-lg flex flex-col gap-3">  
      {/* <Image src={`/assets/${props.imageLink}`} width={250} height={250} className='rounded-full'/> */}
      <div>
        <div className='font-semibold text-lg'>Kanye West</div>
        <div>54M Monthly Listener</div>
      </div>
      <div className='bg-primary-green text-secondary-jetstream w-fit py-2 px-8 font-semibold text-base rounded-lg '>Review</div>
    </div>
  )
}