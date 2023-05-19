import '@styles/globalStyles.css';

import Image from 'next/image';

export default function DemoBody(){
  return (<div className="h-auto bg-secondary-jetstream w-full">
    <div className="flex flex-col items-center py-6 gap-y-4">
      {/* Card 1 */}
      <div className="homeFirstCard w-4/6 h-72 rounded-xl  flex flex-col items-center gap-6 py-16">
        {/* Image as bg */}
        <p className="text-3xl text-center w-4/6 text-white">Explore a dynamic blend of music from up-and-coming and established artists worldwide, streaming and sharing to your heart's content.</p>
        <button className="w-fit px-4 py-2 rounded-md text-primary-green bg-secondary-jetstream font-semibold	">Start listening for free</button>
      </div>
      {/* Card 2 */}
      <div className="w-4/6 h-96 rounded-xl bg-primary-green text-secondary-jetstream p-6">
        Second card content
      </div>
    </div>
  </div>)
}