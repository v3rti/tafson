import Image from 'next/image';

import {AiFillEye} from 'react-icons/ai';

export default function OtherPlaylists(){
  return (
    <div className='relative bg-primary-green py-5 px-10 rounded-lg '>
      <AiFillEye className='w-5 h-5 text-secondary-jetstream absolute top-1 right-2 cursor-pointer' />
      <div className=' text-secondary-jetstream flex flex-col gap-6'>
                <Image src={"/assets/late_playlist.png"} width={200} height={260}/>
                <div className='flex flex-col gap-1'>
                  <div className='text-xl font-semibold'>Late Nights Hits</div>
                  <div>182,216 Follower</div>
                  <div className='mt-4 bg-secondary-jetstream py-2 text-primary-green font-semibold text-lg text-center rounded-lg'>Follow</div>
                </div>
      </div>
    </div>
  )
}