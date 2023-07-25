import '@styles/globalStyles.css'

import Image from 'next/image';

import {AiFillPlayCircle} from 'react-icons/ai';

import Playlist from './Playlist';
import OtherPlaylists from './OtherPlaylists';
import ArtistsCards from './ArtistsCards';


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
          <div className='mt-8 text-2xl w-4/6'>
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
            <div className='mt-8 text-2xl w-3/6'>
              Discover the best podcasts of the week with our curated selection of top picks.
            </div>
            <div className='mt-8 w-4/6 ml-16'>
              <button className="bg-secondary-jetstream rounded-md text-primary-green text-xl px-6 py-2 font-semibold">Dive In and Discover</button>
            </div>
        </div>
      </div>
        {/* Title */ }
        <div className='mt-8 font-bold text-primary-green text-2xl'>
          Stuff we thought you might like
        </div>
        {/* Recomended Music */}
        <div className='mt-4 flex gap-6'>
          <div className="text-primary-green">
            <Image src="/assets/okjeremy.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">OK</div>
            <div className="-mt-1 font-semibold text-sm">Jeremy Zucker</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theweeknd.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Acquainted</div>
            <div className="-mt-1 font-semibold text-sm">The Weeknd</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/torylanez.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Midnight’s Interlude</div>
            <div className="-mt-1 font-semibold text-sm">Tory Lanez</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/sewerperson.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Next stop, the moon</div>
            <div className="-mt-1 font-semibold text-sm">Sewerperson</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/central-cee.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">23</div>
            <div className="-mt-1 font-semibold text-sm">Central Cee</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theneighbourhood.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Cry Baby</div>
            <div className="-mt-1 font-semibold text-sm">The Neighbourhood</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theneighbourhood.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Cry Baby</div>
            <div className="-mt-1 font-semibold text-sm">The Neighbourhood</div>
          </div>
          <div className="text-primary-green">
            <Image src="/assets/theneighbourhood.png" width={200} height={200} />
            <div className="mt-1 font-semibold text-lg">Cry Baby</div>
            <div className="-mt-1 font-semibold text-sm">The Neighbourhood</div>
          </div>
        </div>
        <div className='my-8'>
          <div className='text-2xl font-semibold mb-4'>Featured Playlists</div>
          <div className='flex gap-8 flex-wrap '>
            <Playlist />
            <OtherPlaylists />
            <OtherPlaylists />
          </div>
        </div>
        <div>
          <div className='py-4 mt-8 font-bold text-primary-green text-2xl'>
          Recommended Artists
          </div>
          <div className='flex justify-center gap-6'>
            <ArtistsCards imageLink="kanye.png"/>
            <ArtistsCards imageLink="tylor.png"/>
            <ArtistsCards imageLink="draganov.png"/>
            <ArtistsCards imageLink="jojix.png"/>
            <ArtistsCards imageLink="playboi.png"/>
          </div>
        </div>
    </div>
  )
}