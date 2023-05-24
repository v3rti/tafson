import '@styles/globalStyles.css'

import Image from 'next/image';


export default function BodyIn(){
  return (
    <div className='mx-20 mt-10 pb-20'>
      {/* Main Cards */}
      <div className="w-full flex flex-row gap-10 h-full text-white">
         {/* Today's Hits Card */}
        <div className="todaysHitsCard w-5/12 p-6 bg-primary-green rounded-xl">
          <div className='text-4xl font-semibold'>
            Today's Hits
          </div>
          <div className='mt-8 text-3xl font-semibold  w-4/6'>
            Stay up-to-date with the latest and greatest in music.
          </div>
          <div className='mt-16 w-4/6  flex flex-row justify-center'>
            <button className="bg-secondary-jetstream rounded-md text-primary-green text-xl px-6 py-2 font-semibold">Tune Your Ears</button>
          </div>
        </div>
        {/* Podcasts of The Week */}
        <div className="podcastsCard w-7/12 p-6 bg-primary-green rounded-xl">
           <div className='text-4xl font-semibold'>
              Podcasts of the Week
            </div>
            <div className='mt-8 text-3xl font-semibold w-3/6'>
              Discover the best podcasts of the week with our curated selection of top picks.
            </div>
            <div className='mt-8 w-4/6 ml-16'>
              <button className="bg-secondary-jetstream rounded-md text-primary-green text-xl px-6 py-2 font-semibold">Dive In and Discover</button>
            </div>
        </div>
      </div>
        {/* Title */ }
        <div className=' mt-8 font-bold text-primary-green text-3xl'>
          Stuff we thought you might like
        </div>
        {/* Recomended Music */}
        <div className='mt-8 flex gap-10'>
          <div className="text-primary-green">
            <Image src="/assets/okjeremy.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">OK</div>
            <div className="-mt-2 font-semibold text-md">Jeremy Zucker</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theweeknd.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Acquainted</div>
            <div className="-mt-2 font-semibold text-md">The Weeknd</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/torylanez.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Midnight’s Interlude</div>
            <div className="-mt-2 font-semibold text-md">Tory Lanez</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/sewerperson.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/central-cee.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theneighbourhood.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
        </div>
        <div className='mt-8 flex gap-10'>
          <div className="text-primary-green">
            <Image src="/assets/okjeremy.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">OK</div>
            <div className="-mt-2 font-semibold text-md">Jeremy Zucker</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theweeknd.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Acquainted</div>
            <div className="-mt-2 font-semibold text-md">The Weeknd</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/torylanez.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Midnight’s Interlude</div>
            <div className="-mt-2 font-semibold text-md">Tory Lanez</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/sewerperson.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/central-cee.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theneighbourhood.png" width={250} height={250} />
            <div className="mt-1 font-semibold text-2xl">Next stop, the moon</div>
            <div className="-mt-2 font-semibold text-md">Sewerperson</div>
          </div>
        </div>
    </div>
  )
}