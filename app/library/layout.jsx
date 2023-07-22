import NavbarIn from "@components/NavbarIn"

export default function LibraryLayout({children}){
    return(
        <div>
            <NavbarIn />
            {children}
        </div>
    )
}