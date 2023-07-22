import '@styles/globalStyles.css';

import {AiFillGoogleCircle, AiFillTwitterCircle} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';


export default function CreateAccount(){
    return(
        <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 '></div>
            <div className="z-20 absolute mx-auto text-white px-12 py-24 rounded-2xl w-4/12 bg-primary-green border-2 border-secondary-jetstream">
                <div className='flex items-center flex-col gap-8'>
                    <div className='text-3xl font-semibold text-secondary-jetstream'>
                        Create a Tafson Account
                    </div>
                    <div className='border-b-2 border-secondary-jetstream text-2xl w-8/12'>
                        <div>Pick a username</div>
                    </div>
                    <div className='text-center py-4 text-black bg-secondary-jetstream text-2xl rounded-lg w-8/12'>
                        Continue
                    </div>
                    <div className='text-secondary-jetstream'>Already have an account? Login here</div>
                    <div className='border-b-2 border-secondary-jetstream w-full'></div>
                    <div className='px-4 flex gap-4 py-4 items-center text-black bg-secondary-jetstream text-2xl rounded-lg w-8/12'>
                        <AiFillGoogleCircle className="h-10 w-10 text-primary-green"/> Continue using Google
                    </div>
                    <div className='px-4 flex gap-4 py-4 items-center text-black bg-secondary-jetstream text-2xl rounded-lg w-8/12'>
                        <BsFacebook className="h-10 w-10 text-primary-green"/> Continue using Facebook
                    </div>
                    <div className='px-4 flex gap-4 py-4 items-center text-black bg-secondary-jetstream text-2xl rounded-lg w-8/12'>
                        <AiFillTwitterCircle className="h-10 w-10 text-primary-green"/> Continue using Twitter
                    </div>
                </div>
            </div>
        </div>
    )
}