'use client'


import '@styles/globalStyles.css';
import Image from 'next/image';

import {AiFillPlayCircle, AiFillLike, AiOutlineLike, AiOutlineDislike, AiFillDislike} from 'react-icons/ai';
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs';

import Carousel from '@components/Carousel';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStore } from '@app/store/stateStore';
import { useRouter } from 'next/router';

export default function ReviewPage({params}){

  useEffect(() => {
    
    getArtistInfos().then(setArtistInfo)}, []);

  const apiKey = process.env.RAPID_API;

  const [artistInfo, setArtistInfo] = useState();

  const [loading, setLoading] = useState(true);

  const setReviewArtist = useStore((state) => state.setReviewArtist)
  const reviewArtist = useStore((state) => state.reviewArtist)

  const getArtistInfos = async () => {
      const url =
        `https://spotify23.p.rapidapi.com/artist_overview/?id=${params.slug}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '26681d754fmsh3cb5cb5a73b9a6ap1500d6jsn1ab2e9d4d46e',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result.data.artist;
      } catch (error) {
        console.error(error);
      }

  }

  function addCommasToNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleRouting = (id) => {
    console.log(id);
  }

  function truncateString(str, numWords) {
    const words = str.split(' ');

    if (words.length > numWords) {
      const truncatedWords = words.slice(0, numWords);
      return `${truncatedWords.join(' ')} ...`;
    }

    return str;
  }

  if(artistInfo)
    return (
      <div className='mx-48 p-10 flex flex-col gap-8'>
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            
            <div className='flex flex-col gap-3 w-fit'>
              <Image src={artistInfo?.visuals.avatarImage.sources[0].url} width={280} height={280} className='rounded-xl'/>
    
            </div>
            <div className='flex gap-36'>
              <div className='flex flex-col gap-4'>
              <div className='text-primary-green'>
                <div className='text-3xl font-semibold'>{artistInfo?.profile.name}</div>
                <div className='flex gap-1'>Followers: {addCommasToNumber(artistInfo.stats.followers)}</div>
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
                <div className='text-primary-green font-semibold text-lg'>Check artist profile on:</div>
                <div className='flex gap-2 items-center'>
                  <div>
                    <Link href={artistInfo.sharingInfo.shareUrl}><Image src="/assets/spotify.png" width={50} height={50} className='rounded-full cursor-pointer'/></Link>
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
              <legend className='ml-4 p-2 text-xl font-semibold'>Related Artists</legend>
              <div className='flex flex-col gap-2 p-4'>
                {artistInfo?.relatedContent.relatedArtists.items.slice(0, 4).map((item) => {
                  return <div className='flex gap-2'>
                  <Image src={item.visuals.avatarImage.sources[0].url} width={45} height={45} className='rounded-lg'/>
                  <div className='flex flex-col'>
                    <Link href={`/review/artist/${item.id}`}><div className='cursor-pointer text-lg font-semibold'>{item.profile.name}</div></Link>
                    <div>0 Reviews</div>
                  </div>
                </div>
                })}
               </div>
            </fieldset>
          </div>
          
          </div>
        </div>
        <div>
          <div className=''>
            <div className='text-2xl font-semibold text-primary-green'>About {artistInfo?.profile.name}</div>
            <div className='flex flex-col gap-4 py-4'>
              <div className=''>
                <div className='mb-2 text-primary-green font-semibold text-xl'>Biography</div>
                <div className='text-primary-green'>{truncateString(artistInfo?.profile.biography.text, 60)}</div>
              </div>
              <div className='w-full flex justify-between gap-3 text-primary-green'>
                <div className="w-full">
                  <table className=''>
                    <tbody>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Artist Name</td>
                        <td className="px-4 py-2">{artistInfo?.profile.name}</td>
                      </tr>
                      <tr>
                        <td className="pr-48 py-2 font-semibold">Monthly Listeners</td>
                        <td className="px-4 py-2">{addCommasToNumber(artistInfo?.stats.monthlyListeners)} Listener</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <fieldset className='w-4/12 border-2 border-primary-green rounded-2xl'>
                  <legend className='ml-4 p-2 text-xl font-semibold'>{artistInfo.profile.name} Songs:</legend>
                  <div className='px-4 py-2 flex gap-2 flex-col'>
                  {artistInfo?.discography.topTracks.items.slice(0, 3).map((item) => {
                    return <div className='flex gap-2'>
                      <Image src={item.track.album.coverArt.sources[0].url} className='rounded-xl' width={50} height={50}/>
                      <div className='flex flex-col justify-between'>
                        <Link href={`/review/song/${item.track.id}`}><div className='text-lg cursor-pointer'>{truncateString(item?.track.name,4)}</div></Link>
                        <div className='flex gap-1 text-sm'><div className='font-semibold'>4,712</div>Review</div>
                      </div>
                    </div>
                  })}
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        <div>
          
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