import '@styles/globalStyles.css';

export default function Searchbar(){
  return (
    <div className="w-8/12 flex items-center px-0">
      <input type="text" className="px-3 text-xs w-full h-7 rounded-md" placeholder="Search for artists, albums, podcasts.." />
    </div>
  )
}