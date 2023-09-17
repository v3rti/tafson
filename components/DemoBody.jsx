import '@styles/globalStyles.css';

import { useStore } from '@app/store/stateStore';

import {AiFillPlayCircle} from 'react-icons/ai';

import Image from 'next/image';
import Footer from './Footer';

export default function DemoBody(){
  
  const toggleSignUpPop = useStore((state) => state.toggleSignUpPop);
  

  return (
  <div className="h-auto w-full">
    <div className='mt-16 mb-8 mx-28 flex flex-col justify-center items-center gap-8'>
      <div className='text-5xl font-bold text-primary-green'>
        Experience Music Like Never Before
      </div>
      <p className="mx-80 text-center text-2xl font-semibold text-primary-green">Embark on a revolutionary musical journey and elevate your listening experience to new heights. Discover a world of unparalleled sound and sensation</p>
      <button onClick={toggleSignUpPop} className='text-white bg-primary-green text-xl font-semibold py-3 px-5 rounded-lg cursor-pointer'>
        Start Your Melodic Adventure
      </button>
    </div>
    <div className="mx-28 flex py-10 gap-4">
      {/* Card 1 */}
      <div className="homeFirstCard w-4/6  rounded-xl  flex flex-col items-center gap-6 py-16">
        {/* Image as bg */}
        <p className="text-3xl text-center w-4/6 text-white">Explore a dynamic blend of music from up-and-coming and established artists worldwide, streaming and sharing to your heart's content.</p>
        <button className="w-fit px-4 py-2 rounded-md text-primary-green bg-secondary-jetstream font-semibold	">Start listening for free</button>
      </div>
      {/* Card 2 */}
      <div className=" w-4/6  rounded-xl bg-primary-green text-secondary-jetstream p-6">
        <div className="relative pl-60 pr-10">
          <Image className="absolute -top-28 -left-32" src='/assets/to.png' width={500} height={600}/>
          <p className="text-4xl font-semibold mb-6">Tafson's Vision</p>
          <div className=" flex flex-col items-center pb-5 gap-8">
            <p className="pl-12 text-2xl">Explore a dynamic blend of music from up-and-coming and established artists worldwide, streaming and sharing to your heart's content.</p>
            <button className="w-fit px-4 py-2 rounded-md text-primary-green bg-secondary-jetstream font-semibold">Find out more</button>
          </div>
        </div>
      </div>
    </div>
    <div className='mb-24'>
      <div></div>
      
      
    </div>
    <Footer />
  </div>)
}