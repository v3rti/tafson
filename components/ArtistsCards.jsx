import Image from 'next/image';


export default function ArtistsCards(props){
  return(
    <div className="border-2 border-primary-green px-6 py-8 w-fit rounded-lg flex flex-col gap-3">  
      <Image src={`/assets/${props.imageLink}`} width={250} height={250} className='rounded-full'/>
      <div>
        <div className='font-semibold text-lg'>Kanye West</div>
        <div>54M Monthly Listener</div>
      </div>
      <div className='bg-primary-green text-secondary-jetstream w-fit py-2 px-8 font-semibold text-base rounded-lg '>Review</div>
    </div>
  )
}