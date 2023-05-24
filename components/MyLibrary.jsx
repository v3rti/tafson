import '@styles/globalStyles.css';

import {IoMdHeart} from 'react-icons/io';
import {RiPlayListFill, RiHistoryFill} from 'react-icons/ri';
import {BsPersonHearts} from 'react-icons/bs';
import {AiFillPlayCircle, AiFillInfoCircle} from 'react-icons/ai';

import Image from 'next/image';

export default function MyLibrary(){
  return(
    <div className='mx-20 mt-10 pb-20'>
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
      <div className="mt-5">
        {/* Example: Liked songs */}
        <div className='text-primary-green font-semibold mb-6 ml-6 text-xl flex gap-2 items-center'>
          <AiFillInfoCircle className='w-7 h-7'/>
          <div className=''>You have liked a total of 11 song</div>
        </div>
        
        <div className='flex flex-col gap-2 text-primary-green'>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/vertigo.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>start//end</div>
                <div className='text-xs'>Eden</div>
              </div>
            </div>
            <div className='text-center w-2/12'>Vertigo</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/theweeknd.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Acquainted</div>
                <div className='text-xs'>The Weeknd</div>
              </div>
            </div>
            <div className='text-center w-2/12'>Beauty Behind the Madness</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/joji.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Slow Dancing in the Dark</div>
                <div className='text-xs'>Joji</div>
              </div>
            </div>
            <div className='text-center w-2/12'>BALLADS 1</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/chaseatlantic.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Into it</div>
                <div className='text-xs'>Chase Atlantic</div>
              </div>
            </div>
            <div className='text-center w-2/12'>Chase Atlantic</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/sos.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Same Old Song</div>
                <div className='text-xs'>Two Feet</div>
              </div>
            </div>
            <div className='text-center w-2/12'>A 20 Something Fuck</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/afraid.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Afraid</div>
                <div className='text-xs'>The Neighbourhood</div>
              </div>
            </div>
            <div className='text-center w-2/12'>I Love You.</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/escape.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Escape From LA</div>
                <div className='text-xs'>The Weeknd</div>
              </div>
            </div>
            <div className='text-center w-2/12'>After hours</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/snot.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Blue Moon</div>
                <div className='text-xs'>$NOT, Teddi Jones</div>
              </div>
            </div>
            <div className='text-center w-2/12'>Ethereal</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/deadroses.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Waste away</div>
                <div className='text-xs'>Blackbear</div>
              </div>
            </div>
            <div className='text-center w-2/12'>deadroses</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/formula.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>Formula</div>
                <div className='text-xs'>Labrinth</div>
              </div>
            </div>
            <div className='text-center w-2/12'>Euphoria</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
          <div className='w-full border-t-2 border-primary-green'></div>
          <div className="flex flex-row justify-between items-center font-semibold">
            <div className="flex gap-2 w-2/12">
              <Image className="rounded-xl" src={"/assets/rosenfeld.png"} width={80} height={80}/>
              <div className='text-primary-green'>
                <div>stfu</div>
                <div className='text-xs'>Rosenfeld</div>
              </div>
            </div>
            <div className='text-center w-2/12'>stfu</div>
            <div>18 Sept 2021</div>
            <div className="flex items-center gap-6">
              <div>3:52</div>
              <AiFillPlayCircle className="w-10 h-10 cursor-pointer"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}