import '@styles/globalStyles.css';
import Image from 'next/image';

import {AiFillPlayCircle, AiFillStar} from 'react-icons/ai';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';
import {CiCircleMore} from 'react-icons/ci';

export default function ReviewPage(){

  return (
    <div className='mx-48 p-10 flex flex-col gap-8'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          
          <div className='flex flex-col gap-3 w-fit'>
            <Image src="/assets/joji.png" width={280} height={280} className='rounded-xl'/>
            <div className='relative border-primary-green border-2 px-4 py-2 text-primary-green flex rounded-2xl items-center justify-center'>
              <div className='absolute left-2'><AiFillPlayCircle className='w-8 h-8'/></div>
              <div className='text-lg'>Play Demo</div>
            </div>
          </div>
          <div className='flex gap-36'>
            <div className='flex flex-col gap-4'>
            <div className='text-primary-green'>
              <div className='text-3xl font-semibold'>Slow Dancing in The Dark</div>
              <div className='flex gap-1'>By<div className='font-semibold'>Joji</div></div>
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
                  <Image src="/assets/spotify.png" width={50} height={50} className='rounded-full cursor-pointer'/>
                </div>
                <div>
                  <Image src="/assets/applemusic.png" width={50} height={50} className='rounded-full cursor-pointer'/>
                </div>
                <div>
                  <Image src="/assets/youtubemusic.png" width={50} height={50} className='rounded-full cursor-pointer'/>
                </div>
                <div>
                  <Image src="/assets/deezer.png" width={50} height={50} className='rounded-full cursor-pointer'/>
                </div>
                <div>
                  <Image src="/assets/soundcloud.png" width={50} height={50} className='rounded-full cursor-pointer'/>
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
        {/* <div>
          <fieldset className='border-2 border-primary-green rounded-2xl'>
            <legend className='ml-4 p-2 text-xl font-semibold'>Similar Artists</legend>
            <div className='px-4 pt-1 pb-3 flex gap-2 justify-center items-center'>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/willhe.jpg" className='rounded-xl' width={70} height={70}/>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/run.jpeg" className='rounded-xl' width={70} height={70}/>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/ew.png" className='rounded-xl' width={70} height={70}/>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/ew.png" className='rounded-xl' width={70} height={70}/>
              </div>
            </div>
          </fieldset>
        </div> */}
        </div>
      </div>
      <div>
        <div className=''>
          <div className='text-2xl font-semibold text-primary-green mb-4'>Song Details</div>
          <div className='flex flex-col gap-4 py-4'>
            <div className=''>
              <div className='mb-2 text-primary-green font-semibold text-xl'>Joji (Artist Name)</div>
              <div className='text-primary-green'>George Kusunoki Miller (ミラー・ジョージ・クスノキ, Mirā Jōji Kusunoki, born 18 September 1992),[2] known professionally as Joji and formerly for playing the characters Filthy Frank and Pink Guy, is a Japanese singer-songwriter, rapper and internet personality. Miller's music has been described as a mix between R&B, lo-fi, and trip hop.</div>
            </div>
            <div className='w-full flex justify-between gap-3 text-primary-green'>
              <div className="w-full">
                <table className=''>
                  <tbody>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Title</td>
                      <td className="px-4 py-2">Slow Dancing in The Dark</td>
                    </tr>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Genre</td>
                      <td className="px-4 py-2">R&B</td>
                    </tr>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Album</td>
                      <td className="px-4 py-2">Ballads 1</td>
                    </tr>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Release Date</td>
                      <td className="px-4 py-2">12 September 2018</td>
                    </tr>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Producer</td>
                      <td className="px-4 py-2">George Miller & Patrick Wimberly</td>
                    </tr>
                    <tr>
                      <td className="pr-48 py-2 font-semibold">Featured Artists</td>
                      <td className="px-4 py-2">Joji</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <fieldset className='w-4/12 border-2 border-primary-green rounded-2xl'>
                <legend className='ml-4 p-2 text-xl font-semibold'>More Songs From The Artist</legend>
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
    </div>
  )
}