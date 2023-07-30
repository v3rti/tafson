import Image from 'next/image';

import '@styles/globalStyles.css';

import { AiOutlineMore, AiFillPlayCircle, AiFillHeart } from 'react-icons/ai'
import { BsFillPersonPlusFill } from 'react-icons/bs'

export default function MyProfile(){
  
  return(
    <div className="mx-20 pt-8 text-primary-green pb-36">
      <div className="flex gap-6 justify-center mb-24">
        <div className="relative  h-96 p-4 rounded-lg w-8/12 profileCover ">
          <AiOutlineMore className='absolute w-10 h-10 text-secondary-jetstream rotate-90 top-2 right-6 cursor-pointer'/>
          <div className='absolute -bottom-16 left-8 flex gap-6'>
            <Image src="/assets/profilePic.png" className='rounded-full z-20' height={255} width={255}/>
            <div className='mt-28 z-20'>
              <div className='text-3xl font-semibold drop-shadow-2xl'>
                Mob
              </div>
              <div className='flex gap-3 font-semibold drop-shadow-2xl'>
                <p>49 Follower</p>
                <p>108 Following</p>
              </div>
            </div>
          </div>
          <div className=''>
            
          </div>
    
        </div>
        <div className='flex flex-col w-2/12 gap-4'>
          <div className="border-primary-green border-2 h-36 px-4 py-6 rounded-lg bg-primary-green">
            <div className='flex flex-col gap-6 text-secondary-jetstream'>
              <div className='flex gap-1'>Favorite Genre: <p className='font-semibold'>Pop Music</p></div>
              <span>Favorite Playlist: <p></p></span>
            </div>
          </div>
          <div className="border-primary-green border-2 h-full px-4 py-6 rounded-lg  bg-primary-green">
            <div className='flex flex-col gap-6 text-secondary-jetstream'>
              <div className='flex gap-1 font-semibold text-2xl'>Badges</div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-2 mb-8 w-10/12 mx-auto border-y-4 border-primary-green py-4'>
        <div className='text-3xl font-semibold pb-2'>
            Bio / About me
        </div>
        <div className='text-lg'>
          My taste in music is pretty eclectic, ranging from classic rock legends like Led Zeppelin to modern indie vibes of Tame Impala. I'm always on the lookout for fresh beats and undiscovered gems that resonate with my soul.
        </div>
      </div>
      <div className='flex gap-8 justify-center'>
        <div>
          <div className='text-3xl font-semibold'>
            Current Favorite Song
          </div>
          <div className='pt-8 pb-4 px-2 mx-10 border-b-4 border-primary-green flex gap-5 w-fit'>
            <div className="relative w-fit">
              <Image src="/assets/afraid.png" width={230} height={230}/>
              <AiFillPlayCircle className="w-24 h-24 text-primary-green absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <div className='flex flex-col justify-between h-full'>
                <div className=''>
                  <div className='text-2xl font-semibold'>Afraid</div>
                  <div>The Neighbourhood</div>
                  <div className='flex gap-1'>Album: <div className='font-semibold'>I Love You.</div></div>
                </div>
                <div className=''>
                  <div className='p-2 bg-primary-green flex gap-2 items-center mx-6 justify-center text-secondary-jetstream rounded-lg'><AiFillHeart className="w-5 h-5" /> Like</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-3xl font-semibold'>
            Top Played Artist
          </div>
          <div className='pt-8 pb-4 px-2 mx-10 border-b-4 border-primary-green flex gap-5 w-fit'>
            <div className="relative w-fit">
              <Image src="/assets/rosenfeld.png" width={230} height={230}/>
            </div>
            <div>
              <div className='flex flex-col justify-between h-full'>
                <div className=''>
                  <div className='text-2xl font-semibold'>Rosenfeld</div>
                  <div>27,142 Monthly Streamer</div>
                </div>
                <div className=''>
                  <div className='p-2 bg-primary-green flex gap-2 items-center mx-8 justify-center text-secondary-jetstream rounded-lg'><BsFillPersonPlusFill className="w-5 h-5" /> Follow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='text-3xl font-semibold'>
          Favorite Playlist:
          </div>
          <div className='pt-8 pb-4 px-2 mx-10 border-b-4 border-primary-green flex gap-5 w-fit'>
            <div className="relative w-fit">
              <Image src="/assets/insomnia_playlist.png" width={230} height={230}/>
            </div>
            <div>
              <div className='flex flex-col justify-between h-full'>
                <div className=''>
                  <div className='text-2xl font-semibold'>Afraid</div>
                  <div>2,711 Likes</div>
                  <div className='flex gap-1'>By<div className='font-semibold'>vertig0</div></div>
                </div>
                <div className=''>
                  <div className='p-2 bg-primary-green flex gap-2 items-center mx-2 justify-center text-secondary-jetstream rounded-lg'><AiFillHeart className="w-5 h-5" /> Like</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )

}