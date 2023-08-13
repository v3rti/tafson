import '@styles/globalStyles.css';
import Image from 'next/image';

import {AiFillPlayCircle, AiFillStar} from 'react-icons/ai';
import {BsStarFill, BsStarHalf} from 'react-icons/bs';

export default function ReviewPage(){

  return (
    <div className='mx-48 p-10'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-3 w-fit'>
            <Image src="/assets/joji.png" width={280} height={280} className='rounded-xl'/>
            <div className='relative border-primary-green border-2 px-4 py-2 text-primary-green flex rounded-2xl items-center justify-center'>
              <div className='absolute left-2'><AiFillPlayCircle className='w-8 h-8'/></div>
              <div className='text-lg'>Play Demo</div>
            </div>
          </div>
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
          </div>
        </div>
        <div className='flex flex-col gap-2 w-3/12'>
        <div>
          <fieldset className='border-2 border-primary-green rounded-2xl'>
            <legend className='ml-4 p-2 text-xl font-semibold'>More Songs From The Artist</legend>
            <div className='px-4 py-2 flex gap-2 flex-col'>
              <div className='flex gap-2'>
                <Image src="/assets/willhe.jpg" className='rounded-xl' width={50} height={50}/>
                <div className='flex flex-col justify-between'>
                  <div className='text-lg'>Will He</div>
                  <div className='flex gap-1 text-sm'><div className='font-semibold'>4712</div>Review</div>
                </div>
              </div>
              <div className='flex gap-2'>
                <Image src="/assets/run.jpeg" className='rounded-xl' width={50} height={50}/>
                <div className='flex flex-col justify-between'>
                  <div className='text-lg'>Run</div>
                  <div className='flex gap-1 text-sm'><div className='font-semibold'>1420</div>Review</div>
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
        <div>
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
        </div>
        </div>
      </div>
    </div>
  )
}