import '@styles/globalStyles.css'


export default function BodyIn(){
  return (
    <div className='mx-20 my-10 h-2/6'>
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
        <div className="w-7/12 p-6 bg-primary-green rounded-xl">
          Card 2 content
        </div>
      </div>
      {/* Recomended Music */}
      <div>
        
      </div>
    </div>
  )
}