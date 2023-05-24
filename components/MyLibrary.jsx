import '@styles/globalStyles.css';

import {IoMdHeart} from 'react-icons/io';
import {RiPlayListFill, RiHistoryFill} from 'react-icons/ri';
import {BsPersonHearts} from 'react-icons/bs';
import {AiFillPlayCircle} from 'react-icons/ai';

import Image from 'next/image';

export default function MyLibrary(){
  return(
    <div className='mx-20 mt-10'>
      {/* Vertical Cards */}
      <div className='w-full text-white flex flex-col items-center gap-12'>
        <div className='w-6/12 px-8 py-4 bg-primary-green flex flex-row justify-between gap-2 rounded-lg'>
          <div className="flex items-center font-md text-xl activeCardTest"><IoMdHeart className="w-7 h-8 mr-2" />Liked</div>
          <div className="flex items-center font-md text-xl"><RiPlayListFill className="w-7 h-8 mr-2" />My Playlists</div>
          <div className="flex items-center font-md text-xl"><RiHistoryFill className="w-7 h-8 mr-2" />Recently Played</div>
          <div className="flex items-center font-md text-xl"><BsPersonHearts className="w-7 h-8 mr-2" />Made For You</div>
        </div>
      </div>
      {/* Selected Card Content */}
      <div className=" mt-5">
        {/* Example: Liked songs */}
        <div className='flex flex-col gap-2 text-primary-green'>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 ">
              <Image className="rounded-xl" src={"/assets/theweeknd.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Acquainted</div>
                <div className='text-xs'>The Weeknd</div>
              </div>
            </div>
            <div>Beauty Behind the Madness</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
        </div>
      </div>
    </div>
  )
}