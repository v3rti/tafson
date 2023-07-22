import '@styles/globalStyles.css';


import Image from 'next/image';

export default function Footer(){
  return(
    <div className="relative px-28 py-20 bg-primary-green text-secondary-jetstream flex flex-col justify-center items-center gap-20">
      <div className='flex gap-56 justify-center items-center '>
        <div className='flex flex-col gap-12'>
          <div className='text-3xl font-semibold'>Start</div>
          <div className='flex flex-col gap-8 text-xl'>
            <div className='text-xl'>Create an account</div>
            <div>Chose a Subscription</div>
            <div>Download Desktop App</div>
            <div>Get Support</div>
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='text-3xl font-semibold'>Explore</div>
          <div className='flex flex-col gap-8 text-xl'>
            <div className='text-xl'>For Music</div>
            <div>For Artists</div>
            <div>Playlists</div>
            <div>Podcasts</div>
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='text-3xl font-semibold'>Features</div>
          <div className='flex flex-col gap-8 text-xl'>
            <div className='text-xl'>Go Premium</div>
            <div>Listen Together</div>
            <div>Artist Profile</div>
            <div>Lyrics</div>
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='text-3xl font-semibold'>Tafson's Team</div>
          <div className='flex flex-col gap-8 text-xl'>
            <div className='text-xl'>Who Are We</div>
            <div>Careers</div>
            <div>Partners</div>
            <div>Get Support</div>
          </div>
        </div>
      </div>
      <div className=''><Image src="/assets/Logo.svg" width={200} height={60}/></div>
      <div className='absolute right-10 bottom-6 text-xl'>Tafson.com © 2023</div>
    </div>
  )
}