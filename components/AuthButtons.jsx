import '@styles/globalStyles.css';


export default function AuthButtons({}){

  
  return (
    <div className="flex gap-6 items-center">
      <button className="py-1 w-28 flex justify-center items-center bg-secondary-jetstream rounded-md text-sm text-primary-green font-semibold border-secondary-jetstream border-2">Login</button>
      <button className="py-1 w-28 flex justify-center items-center text-secondary-jetstream rounded-md text-sm bg-primary-green font-semibold border-secondary-jetstream border-2">Sign up</button>
    </div>
  )
}