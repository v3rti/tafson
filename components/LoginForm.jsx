import '@styles/globalStyles.css';
import {AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {useStore} from '../app/store/stateStore';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {signIn} from 'next-auth/react';


export default function LoginForm(){

  const toggleLoginPop = useStore((state) => state.toggleLoginPop);
  const toggleSignUpPop = useStore((state) => state.toggleSignUpPop)

  const [error, setError] = useState("");

  const [userInfo, setUserInfo] = useState({email: "", password: ""});

  const {email, password} = userInfo;

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidEmail = emailRegex.test(email);


  const handleSignUpHere = () => {
    toggleLoginPop();
    toggleSignUpPop();
  }

  const clearErrorAfterDelay = () => {
    if (error) {
      // Set the error to null after 3000 milliseconds (3 seconds)
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };

  useEffect(() => {
    clearErrorAfterDelay();
  }, [error]);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setUserInfo({...userInfo,  [name]: value})
  }

  const handleLoginPop = () => {
    toggleLoginPop();
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isValidEmail){
      setError("Invalid email address. Please enter a valid email.");
      return;
    }

    if(!email || !password){
      setError("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })
    if(res?.error)
      {
        setLoading(false);
        setError(res.error);
        return;
      }
    else{
      setLoading(false);
      toggleLoginPop();
    }
    
    
    // router.replace('/profile')
  };

  return(
    <div>
      <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 '></div>
            <div className="z-20 absolute mx-auto text-white px-0 pt-6 pb-16 rounded-2xl w-3/12 bg-primary-green border-2 border-secondary-jetstream">
            
                <div className='flex items-center flex-col gap-8'>
                    <div><AiOutlineClose className='text-secondary-jetstream w-5 h-5 absolute top-5 right-5 cursor-pointer' onClick={toggleLoginPop}/></div>
                    <div className={`${error ? 'relative z-40 text-md text-primary-green bg-secondary-jetstream px-6 py-2 top-2 w-8/12 rounded-xl' : 'hidden'}`}>{error}</div>
                    <div className='text-2xl font-semibold text-secondary-jetstream'>
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
                    <button type="submit" className='text-center py-2 text-primary-green bg-secondary-jetstream text-xl rounded-lg w-full outline-none flex flex-col justify-center items-center'>
                    {loading ? <svg width="28" height="28" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#023430">
                          <g fill="none" fill-rule="evenodd">
                              <g transform="translate(1 1)" stroke-width="2">
                                  <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                                  <path d="M36 18c0-9.94-8.06-18-18-18">
                                      <animateTransform
                                          attributeName="transform"
                                          type="rotate"
                                          from="0 18 18"
                                          to="360 18 18"
                                          dur="1s"
                                          repeatCount="indefinite"/>
                                  </path>
                              </g>
                          </g>
                      </svg> : "Login"}
                    </button>
                    </form>
                    
                    {/* <div className='border-b-2  border-secondary-jetstream text-xl text-secondary-jertstream w-8/12'>
                        <div>Password</div>
                    </div> */}
                    
                    <div className='text-secondary-jetstream text-sm flex gap-1'>Don't have an account?<button onClick={handleSignUpHere}className='underline'> Sign up here</button></div>
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