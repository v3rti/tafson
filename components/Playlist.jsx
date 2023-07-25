import '@styles/globalStyles.css'

import Image from 'next/image';

import {AiFillPlayCircle} from 'react-icons/ai';

export default function Playlist(){
  return(
    <div className='bg-primary-green w-7/12 py-8 px-6 rounded-xl flex gap-4'>
              <div className='text-secondary-jetstream flex flex-col gap-6'>
                <Image src={"/assets/rap_playlist.png"} width={260} height={260}/>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl font-semibold'>Rap Couscous</div>
                  <div>141,463 Follower</div>
                  <div className='mt-4 bg-secondary-jetstream py-2 text-primary-green font-semibold text-lg text-center rounded-lg'>Follow</div>
                </div>
              </div>
              <div className='text-secondary-jetstream w-full border-2 border-secondary-jetstream rounded-lg px-6 py-3 overflow-y-scroll max-h-[320px]'>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
                <div className='border-b-2 border-secondary-jetstream p-2 flex gap-3 items-center w-12/12'>
                  <div><AiFillPlayCircle className='w-8 h-8'/></div>
                  <div className='w-full flex gap-2 justify-between'>
                    <div>Heaven or Hell</div>
                    <div>Don Toliver</div>
                  </div>
                  <div className=''>3:37</div>
                </div>
              </div>
            </div>
            
  )
}