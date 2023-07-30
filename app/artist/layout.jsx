import NavbarIn from "@components/NavbarIn"
import Musicbar from "@components/Musicbar"


export default function ArtistLayout({children}){
  return(
    <div>
      <NavbarIn /> 
      {children}
      <Musicbar />
    </div>
  )
}