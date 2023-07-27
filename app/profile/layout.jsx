import NavbarIn from "@components/NavbarIn"

export default function ProfileLayout({children}){
    return(
        <div>
            <NavbarIn />
            {children}
        </div>
    )
}