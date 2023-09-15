import '@styles/globalStyles.css';
import {AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {useStore} from '../app/store/stateStore';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {signIn} from 'next-auth/react';


export default function LoginForm(){

  const toggleLoginPop = useStore((state) => state.toggleLoginPop);

  const [error, setError] = useState("");

  const [userInfo, setUserInfo] = useState({email: "", password: ""});

  const {email, password} = userInfo;

  const router = useRouter();


  const handleChange = ({target}) => {
    const {name, value} = target;
    setUserInfo({...userInfo,  [name]: value})
  }

  const handleLoginPop = () => {
    toggleLoginPop();
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    if(res?.error) return setError(res.error);
    router.replace('/profile')
  };

  return(
    <div>
      <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 '></div>
            <div className="z-20 absolute mx-auto text-white px-0 pt-12 pb-24 rounded-2xl w-3/12 bg-primary-green border-2 border-secondary-jetstream">
                <div className='flex items-center flex-col gap-8'>
                    <div><AiOutlineClose className='text-secondary-jetstream w-5 h-5 absolute top-5 right-5 cursor-pointer' onClick={handleLoginPop}/></div>
                    <div className='text-2xl font-semibold text-secondary-jetstream'>
                      <div>Temporarly: {error}</div>
                        Login to Tafson
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center w-8/12'>
                    <div className='flex flex-col w-full gap-1'>
                      
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={email}
                        placeholder='Email Address'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                      
                      <input
                        placeholder='Password'
                        type="password"
                        id="password"
                        name="password"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={password}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className='text-center py-2 text-primary-green bg-secondary-jetstream text-xl rounded-lg w-full'>Log In</button>
                    </form>
                    
                    {/* <div className='border-b-2  border-secondary-jetstream text-xl text-secondary-jertstream w-8/12'>
                        <div>Password</div>
                    </div> */}
                    
                    <div className='text-secondary-jetstream text-sm flex gap-1'>Don't have an account?<p className='underline'> Sign up here</p></div>
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
    </div>
  )

}