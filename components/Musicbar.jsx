import '@styles/globalStyles.css';

import { IoHeadsetOutline } from 'react-icons/io5';

export default function Musicbar(){
  return(
    <div className="borderTest flex flex-row items-center gap-5 absolute px-20 w-full bg-primary-green h-16 bottom-0">
      <div className="flex flex-row items-center text-white gap-2 ">
        <IoHeadsetOutline className="w-5 h-5" /> Listen Together
      </div>
      <div className="text-white">
        Item 2
      </div>
      
    </div>
  )
}