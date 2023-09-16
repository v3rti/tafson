'use client'


import '@styles/globalStyles.css';
import Image from 'next/image';

import {AiFillPlayCircle, AiFillLike, AiOutlineLike, AiOutlineDislike, AiFillDislike} from 'react-icons/ai';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

import Carousel from '@components/Carousel';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@app/store/stateStore';

export default function ReviewPage({params}){

  const apiKey = process.env.RAPID_API;

  const [song, setSong] = useState();
  const [artistInfo, setArtistInfo] = useState();

  const [loading, setLoading] = useState(true);


  const setReviewArtist = useStore((state) => state.setReviewArtist)
  const reviewArtist = useStore((state) => state.reviewArtist)

  const getReviewInfos = async () => {
    const fetchData = async () => {
      const url =
        `https://spotify23.p.rapidapi.com/tracks/?ids=${params.slug}`;
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

        const tracks = data.tracks
        setSong(tracks[0]);
        setReviewArtist(tracks[0].artists[0].id);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }

  console.log("the review id is: ", reviewArtist)

  useEffect(() => getReviewInfos(), []);


  const getArtistInfos = () => {
    if(reviewArtist){
      const fetchData = async () => {
        const url = `https://spotify23.p.rapidapi.com/artist_overview/?id=${reviewArtist}`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': process.env.RAPID_API,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        };
        
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          const data = result.data;
          
          console.log("this is artist infos", data)
          setArtistInfo(data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(false);
  
        }
      }
      fetchData();
    }
  }
  useEffect(() => getArtistInfos(), [reviewArtist]);


  const setCurrentlyPlaying = useStore((state) => state.setCurrentlyPlaying);
  const setIsPlaying = useStore((state) => state.setIsPlaying);

  const setCurrentSongInfos = useStore((state) => state.setCurrentSongInfos);

  const handlePlayClick = (song) => {
    const previewLink = song?.preview_url;
    setCurrentlyPlaying(previewLink);
    setIsPlaying(true);
    const image = song?.album.images[0].url;
    const name = song?.name;
    const artist = song?.artists[0].name;
    setCurrentSongInfos({ image, name, artist });
    console.log('Setting currentlyPlaying:', previewLink);  
  };

  const millisecondsToMinutesAndSeconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
  
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  const formatDate = (inputDate) => {

    const dateParts = inputDate.split('-');

    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const day = dateParts[2];
    const monthIndex = parseInt(dateParts[1]) - 1; 
    const year = dateParts[0];

    const monthName = monthNames[monthIndex];
    const formattedDate = `${day} ${monthName} ${year}`;
  
    return formattedDate;
  }

  function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  if(song){
    console.log("these are the artist infos:",artistInfo);
    return (
      <div className='mx-48 p-10 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            
            <div className='flex flex-col gap-3 w-fit'>
              <Image src={song?.album.images[0].url} width={280} height={280} className='rounded-xl'/>
              <div onClick={() => handlePlayClick(song)} className='relative border-primary-green border-2 px-4 py-2 text-primary-green flex rounded-2xl items-center justify-center cursor-pointer'>
                <div className='absolute left-2'><AiFillPlayCircle className='w-8 h-8'/></div>
                <div className='text-lg'>Play Demo</div>
              </div>
            </div>
            <div className='flex gap-36'>
              <div className='flex flex-col gap-4'>
              <div className='text-primary-green'>
                <div className='text-3xl font-semibold'>{song?.name}</div>
                <div className='flex gap-1'>By<Link className='font-semibold' href={song?.artists[0].external_urls.spotify}>{song?.artists[0].name}</Link></div>
                {song?.artists.length > 1 ? <div className='flex gap-1 text-sm'>Featuring:
                  <div className='flex gap-2'>
                    {song?.artists.slice(1).map(artist => {
                    return <Link href={artist.external_urls.spotify} className='font-semibold cursor-pointer'>{artist.name}</Link>
                  })}
                  </div>
                </div> : ""}
              </div>
              <div className='flex gap-3 items-center text-primary-green'>
                <div className='flex gap-1'>
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarFill className='w-6 h-6' />
                  <BsStarHalf className='w-6 h-6' />
                </div>
                <div className='flex text-lg gap-2'>
                  <div className='font-semibold'>7,331</div>
                  <div>Rating</div>
                </div>
              </div>
              <div className='bg-primary-green px-6 py-2 text-secondary-jetstream w-fit rounded-xl'>Rate & Review</div>
              <div className='mt-4 flex flex-col gap-2'>
                <div className='text-primary-green font-semibold text-lg'>Listen on:</div>
                <div className='flex gap-2 items-center'>
                  <div>
                    <Link href={song.external_urls.spotify}><Image src="/assets/spotify.png" width={50} height={50} className='rounded-full cursor-pointer'/></Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
            
          </div>
          <div className='relative flex flex-col gap-2 w-3/12'>
          <div className='absolute p-6 text-xl font-semibold rounded-full text-secondary-jetstream bg-primary-green h-fit top-0 -left-24'>8.7</div>
          <div>
            <fieldset className='border-2 border-primary-green rounded-2xl'>
              <legend className='ml-4 p-2 text-xl font-semibold'>Featured Reviews</legend>
              <div className='flex flex-col gap-2 p-4'>
                  <div className='flex gap-2'>
                    <Image src="/assets/user2.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Emily Johnson</div>
                      <div className='text-sm'>"Absolutely love this song! The melo.."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/user3.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Alex Rodriguez</div>
                      <div className='text-sm'>"Impressive work by the artist. The .."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/playboi.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>Sarah Smith</div>
                      <div className='text-sm'>"This song takes me on a journey.."</div>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Image src="/assets/user1.png" width={50} height={50} className='rounded-full'/>
                    <div className='flex flex-col'>
                      <div className='text-lg font-semibold'>David Thompson</div>
                      <div className='text-sm'>"I've been a fan of the artist.."</div>
                    </div>
                  </div>
               </div>
            </fieldset>
          </div>
          
          </div>
        </div>
        <div>
          <div className=''>
            <div className='text-2xl font-semibold text-primary-green'>Song Details</div>
            <div className='flex flex-col gap-4 py-4'>
              <div className=''>
                <div className='mb-2 text-primary-green font-semibold text-xl'>Artist Name: {song?.artists[0].name}</div>
              </div>
              <div className='w-full flex justify-between gap-3 text-primary-green'>
                <div className="w-full">
                  <table className=''>
                    <tbody>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Title</td>
                        <td className="px-4 py-2">{song?.name}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Artist</td>
                        <td className="px-4 py-2">{song?.artists[0].name}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Duration</td>
                        <td className="px-4 py-2">{millisecondsToMinutesAndSeconds(song?.duration_ms)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Album Type</td>
                        <td className="px-4 py-2">{capitalize(song?.album.album_type)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Release Date</td>
                        <td className="px-4 py-2">{formatDate(song?.album.release_date)}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Explicit</td>
                        <td className="px-4 py-2">{song?.explicit ? <div className='text-red-700 font-semibold'>Yes</div> : <div className='text-green-600 font-semibold'>Safe</div>}</td>
                      </tr>
                      <tr>
                      {song?.artists.length > 1 ? <td className="pr-48 py-2 font-semibold">Featured Artists</td> : ""}
                        {song?.artists.length > 1 ? <td className='px-4 py-2 flex flex-row gap-5'>
                            {song?.artists.slice(1).map(artist => {
                            return <div className='font-semibold'>{artist.name}</div>
                          })}
                          </td>: ""}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <fieldset className='w-4/12 border-2 border-primary-green rounded-2xl'>
                  <legend className='ml-4 p-2 text-xl font-semibold'>Recommended Songs</legend>
                  <div className='px-4 py-2 flex gap-2 flex-col'>
                    <div className='flex gap-2'>
                      <Image src="/assets/willhe.jpg" className='rounded-xl' width={50} height={50}/>
                      <div className='flex flex-col justify-between'>
                        <div className='text-lg'>Will He</div>
                        <div className='flex gap-1 text-sm'><div className='font-semibold'>4,712</div>Review</div>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <Image src="/assets/run.jpeg" className='rounded-xl' width={50} height={50}/>
                      <div className='flex flex-col justify-between'>
                        <div className='text-lg'>Run</div>
                        <div className='flex gap-1 text-sm'><div className='font-semibold'>1,420</div>Review</div>
                      </div>
                    </div>
                    <div className='flex gap-2'>
                      <Image src="/assets/ew.png" className='rounded-xl' width={50} height={50}/>
                      <div className='flex flex-col justify-between'>
                        <div className='text-lg'>Ew</div>
                        <div className='flex gap-1 text-sm'><div className='font-semibold'>1,141</div>Review</div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-2xl font-semibold text-primary-green mb-4'>Reviews</div>
          <div className=''>
            <div className='flex justify-between'>
              <div className='text-lg text-primary-green mb-3'>Leave your feedback: </div>
              <div className='flex gap-1 text-primary-green'>
                  <BsStar className='w-6 h-6' />
                  <BsStar className='w-6 h-6' />
                  <BsStar className='w-6 h-6' />
                  <BsStar className='w-6 h-6' />
                  <BsStar className='w-6 h-6' />
               </div>
            </div>
            <textarea cols="30" rows="4" className='p-4 w-full rounded-xl text-primary-green outline-0 bg-secondary-jetstream border-2 border-primary-green placeholder:text-slate-500' placeholder='Leave your review here..'>
            </textarea>
            <div className='flex justify-end'>
              <div className='px-6 py-2 bg-primary-green text-secondary-jetstream w-fit rounded-lg mt-2 text-left text-lg mr-4 cursor-pointer'>Post my review</div>
            </div>
          </div>
          <div className='w-full border-b-4 border-primary-green py-3 mb-4'></div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 text-primary-green'>
              <Image src="/assets/playboi.png" width={70} height={70} className='rounded-full'/>
              <div className='flex flex-col'>
                <div className='text-xl font-semibold'>Sarah Smith</div>
                <div className='text-sm'>Member Since 2018</div>
                <div className='flex gap-1 text-primary-green'>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                </div>
              </div>  
            </div>
            <div className='border-2 border-primary-green h-fit rounded-lg p-4 pr-16 text-primary-green'>
              I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day.
            </div>
            <div className='mr-0 ml-auto text-primary-green'>
              <div className='flex gap-2'><AiOutlineLike className='w-7 h-7 cursor-pointer' /> <AiOutlineDislike className='w-7 h-7 cursor-pointer' /></div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 text-primary-green'>
              <Image src="/assets/playboi.png" width={70} height={70} className='rounded-full'/>
              <div className='flex flex-col'>
                <div className='text-xl font-semibold'>Sarah Smith</div>
                <div className='text-sm'>Member Since 2018</div>
                <div className='flex gap-1 text-primary-green'>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                </div>
              </div>  
            </div>
            <div className='border-2 border-primary-green h-fit rounded-lg p-4 pr-16 text-primary-green'>
              I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day.
            </div>
            <div className='mr-0 ml-auto text-primary-green'>
              <div className='flex gap-2'><AiOutlineLike className='w-7 h-7 cursor-pointer' /> <AiOutlineDislike className='w-7 h-7 cursor-pointer' /></div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex gap-2 text-primary-green'>
              <Image src="/assets/playboi.png" width={70} height={70} className='rounded-full'/>
              <div className='flex flex-col'>
                <div className='text-xl font-semibold'>Sarah Smith</div>
                <div className='text-sm'>Member Since 2018</div>
                <div className='flex gap-1 text-primary-green'>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                  <BsStarFill className='w-5 h-5'/>
                </div>
              </div>  
            </div>
            <div className='border-2 border-primary-green h-fit rounded-lg p-4 pr-16 text-primary-green'>
              I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day. I was hooked right away. It's got this haunting sound that just grabs your attention. And his voice is like a warm hug on a rainy day.
            </div>
            <div className='mr-0 ml-auto text-primary-green'>
              <div className='flex gap-2'><AiOutlineLike className='w-7 h-7 cursor-pointer' /> <AiOutlineDislike className='w-7 h-7 cursor-pointer' /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}