import '@styles/globalStyles.css';

import {AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';


export default function CreateAccount(){
    return(
        <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 '></div>
            <div className="z-20 absolute mx-auto text-white px-0 pt-12 pb-24 rounded-2xl w-3/12 bg-primary-green border-2 border-secondary-jetstream">
                <div className='flex items-center flex-col gap-8'>
                    <div><AiOutlineClose className='text-secondary-jetstream w-5 h-5 absolute top-5 right-5'/></div>
                    <div className='text-2xl font-semibold text-secondary-jetstream'>
                        Create a Tafson Account
                    </div>
                    <div className='border-b-2  border-secondary-jetstream text-xl text-secondary-jertstream w-8/12'>
                        <div>Pick a username</div>
                    </div>
                    <div className='text-center py-4 text-black bg-secondary-jetstream text-xl rounded-lg w-8/12'>
                        Continue
                    </div>
                    <div className='text-secondary-jetstream text-sm flex gap-1'>Already have an account?<p className='underline'> Login here</p></div>
                    <div className='border-b-2 border-secondary-jetstream w-10/12'></div>
                    <div className='px-3 flex gap-3 py-3 items-center text-black bg-secondary-jetstream text-xl rounded-lg w-8/12'>
                        <AiFillGoogleCircle className="h-8 w-8 text-primary-green"/> Continue using Google
                    </div>
                    <div className='px-3 flex gap-3 py-3 items-center text-black bg-secondary-jetstream text-xl rounded-lg w-8/12'>
                        <BsFacebook className="h-8 w-8 text-primary-green"/>Continue using Facebook
                    </div>
                    <div className='px-3 flex gap-3 py-3 items-center text-black bg-secondary-jetstream text-xl rounded-lg w-8/12'>
                        <AiFillTwitterCircle className="h-8 w-8 text-primary-green"/> Continue using Twitter
                    </div>
                </div>
            </div>
        </div>
    )
}