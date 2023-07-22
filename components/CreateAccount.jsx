import '@styles/globalStyles.css';


export default function CreateAccount(){
    return(
        <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 borderTest'></div>
            <div className="z-20 absolute mx-auto text-white p-12 rounded-xl text-secondary-jetstream w-4/12 bg-primary-green border-2 border-secondary-jetstream">
                <div className='flex justify-center'>
                    <div className='borderTest text-2xl font-semibold'>
                        Create a Tafson Account
                    </div>
                </div>
            </div>
        </div>
    )
}