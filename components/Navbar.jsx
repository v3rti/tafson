import '@styles/globalStyles.css';

import Searchbar from '@components/Searchbar';
import AuthButtons from '@components/AuthButtons';

import Image from 'next/image';

export default function Navbar(){
  {/* not logged in */}
  return (
    <nav className="w-full bg-primary-green h-16 flex flex-row px-16 gap-16 justify-between">
      <div className="w-8/12 flex flex-row  gap-28">
        <Image className=""  src="/assets/Logo.svg" width={120} height={62} />
        <Searchbar />
      </div>
      <AuthButtons />
    </nav>
  )
}