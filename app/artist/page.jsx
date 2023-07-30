import Image from 'next/image';
import '@styles/globalStyles.css';

import { AiFillPlayCircle } from 'react-icons/ai';


export default function Artist(){
  return(
    <div className="pt-8 text-primary-green mx-auto w-10/12 pb-36">
      <div className="flex flex-col gap-10">
        <div className="relative h-72 border-2 border-primary-green rounded-lg ">
          <div className='artistCover h-full'></div>
          <div className='absolute top-1/2 left-6 transform -translate-y-1/2 flex items-center gap-3 z-10'>
            <Image className="rounded-full" src="/assets/snot.png" width={200} height={200} />
            <div className='flex flex-col gap-4'>
              <div>
                <div className='text-3xl font-semibold'>$NOT</div>
                <div className='text-lg'>5,140,233 Monthly Streamer</div>
              </div>
              <div className='flex gap-2'>
                <div className='bg-primary-green text-secondary-jetstream w-fit py-2 px-8 font-semibold text-base rounded-lg '>Follow</div>
                <div className='bg-primary-green text-secondary-jetstream w-fit py-2 px-8 font-semibold text-base rounded-lg '>Listen</div>
              </div>
            </div>
          </div>
        </div>
        <div className='px-2 mb-4 border-y-4 border-primary-green py-4'>
          <div className='text-3xl font-semibold pb-2'>
              Biography
          </div>
          <div className='text-lg'>
          Morphing between the alternative rap styles of the late 2010s, Florida-based rapper $NOT employs a relaxed approach to the era's trap sonics. After breaking through in 2018 with his single "Gosha," he signed on with 300 Entertainment for studio albums like - TRAGEDY + and Beautiful Havoc, both released in 2020. A third album, Ethereal, arrived in 2022, heralded by the single "Doja" with A$AP Rocky.
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-5/12'>
            <div className='mb-4 text-3xl font-semibold'>Most Played</div>
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2 border-4 border-primary-green px-6 py-2 justify-between items-center rounded-xl'>
                <div>01</div>
                <div><Image src="/assets/easterpink.jpeg" className='rounded-lg' width={50} height={50} /></div>
                <div>Easter Pink</div>
                <div>2:38</div>
                <div><AiFillPlayCircle className="w-10 h-10 cursor-pointer"/></div>
              </div>
              <div className='flex gap-2 border-4 border-primary-green px-6 py-2 justify-between items-center rounded-xl'>
                <div>02</div>
                <div><Image src="/assets/likeme.png" className='rounded-lg' width={50} height={50} /></div>
                <div>Like Me</div>
                <div>3:09</div>
                <div><AiFillPlayCircle className="w-10 h-10 cursor-pointer"/></div>
              </div>
              <div className='flex gap-2 border-4 border-primary-green px-6 py-2 justify-between items-center rounded-xl'>
                <div>03</div>
                <div><Image src="/assets/easterpink.jpeg" className='rounded-lg' width={50} height={50} /></div>
                <div>Easter Pink</div>
                <div>2:38</div>
                <div><AiFillPlayCircle className="w-10 h-10 cursor-pointer"/></div>
              </div>
              <div className='flex gap-2 border-4 border-primary-green px-6 py-2 justify-between items-center rounded-xl'>
                <div>04</div>
                <div><Image src="/assets/likeme.png" className='rounded-lg' width={50} height={50} /></div>
                <div>Like Me</div>
                <div>3:09</div>
                <div><AiFillPlayCircle className="w-10 h-10 cursor-pointer"/></div>
              </div>
              <div className='flex gap-2 border-4 border-primary-green px-6 py-2 justify-between items-center rounded-xl'>
                <div>05</div>
                <div><Image src="/assets/easterpink.jpeg" className='rounded-lg' width={50} height={50} /></div>
                <div>Easter Pink</div>
                <div>2:38</div>
                <div><AiFillPlayCircle className="w-10 h-10 cursor-pointer"/></div>
              </div>
            </div>
          </div>
          <div className='w-5/12 mb-4'>
            <div className='mb-4 text-3xl font-semibold'>Albums</div>
            <div className='flex gap-4 flex-wrap'>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/easterpink.jpeg" height={180} width={180}/>
                <div>
                  <div className='text-lg'>Easter Pink</div>
                  <div className=''>2023</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/easterpink.jpeg" height={180} width={180}/>
                <div>
                  <div className='text-lg'>Easter Pink</div>
                  <div className=''>2023</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/easterpink.jpeg" height={180} width={180}/>
                <div>
                  <div className='text-lg'>Easter Pink</div>
                  <div className=''>2023</div>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Image src="/assets/easterpink.jpeg" height={180} width={180}/>
                <div>
                  <div className='text-lg'>Easter Pink</div>
                  <div className=''>2023</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}