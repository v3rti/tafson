'use client';

import '@styles/globalStyles.css';

import {AiFillGoogleCircle, AiFillTwitterCircle, AiOutlineClose} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {useStore} from '../app/store/stateStore';
import { useState, useEffect } from 'react';


export default function CreateAccount(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');

    const [loading, setLoading] = useState(false);  

    const setError = useStore((state) => state.setError);
    const errorMsg = useStore((state) => state.error);

    const [hideOptions, setHideOptions] = useState(true);

    const bio = "";
    const profilePicture = "/assets/default_pfp.png";

    const toggleSignUpPop = useStore((state) => state.toggleSignUpPop);
    const toggleLoginPop = useStore((state) => state.toggleLoginPop);

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValidEmail = emailRegex.test(email);


    const handleLoginHere = () => {
      toggleLoginPop();
      toggleSignUpPop();
    }

    const clearErrorAfterDelay = () => {
      if (errorMsg) {
        // Set the error to null after 3000 milliseconds (3 seconds)
        setTimeout(() => {
          setError(null);
        }, 5000);
      }
    };

    useEffect(() => {
      clearErrorAfterDelay();
    }, [errorMsg]);

    const toggleOptions = () => {
        setHideOptions(!hideOptions);
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(dob);

      if(!isValidEmail) {
        setError("Invalid email address. Please enter a valid email.");
        return;
      }
      if (!firstName || !lastName || !email || !password || !dob ) {
        setError("Please fill in all required fields.")
        return;
      }

      setLoading(true);

      try {
        const userData = {
          firstName,
          lastName,
          email,
          password,
          dob,
          bio,
          profilePicture,
        };

        const response = await fetch('/api/register', {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.status === 200) {
          setError("Your Account has been successfully created.")
          setEmail("");
          setPassword("");
          setFirstName("");
          setLastName("");
          setDob("");
        } else if (response.status === 201){
          // Registration failed, handle error
          const errorData = await response.json();
          setError(errorData.message); 
          setEmail("");
          // Handle the error message in errorData.error
        }
      } catch (error) {
        console.log(error)
      }
        setLoading(false);
      };

    const handleSignUpPop = () => {
        toggleSignUpPop();
    }

    return(
        <div className="absolute w-full top-0 flex justify-center items-center h-screen">
            <div className='relative bg-primary-green opacity-50 h-screen w-full z-10 flex justify-center'></div>
            
            <div className="z-20 absolute mx-auto text-white px-0 py-6 pb-12 rounded-2xl w-3/12 bg-primary-green border-2 border-secondary-jetstream">
                <div className='flex items-center flex-col gap-8'>
                <div className={`${errorMsg ? 'relative z-40 text-md text-primary-green bg-secondary-jetstream px-6 py-2 top-4 w-8/12 rounded-xl' : 'hidden'}`}>{errorMsg}</div>
                    <div><AiOutlineClose className='text-secondary-jetstream w-5 h-5 absolute top-5 right-5 cursor-pointer' onClick={handleSignUpPop}/></div>
                    <div className='text-2xl font-semibold text-secondary-jetstream'>
                        Create a Tafson Account
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center w-8/12'>
                    <div className='flex flex-col w-full gap-1'>
                      <input
                        placeholder='First Name'
                        
                        id="firstName"
                        name="firstName"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                      <input
                        placeholder='Last Name'
                        
                        id="lastName"
                        name="lastName"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={email}
                        placeholder='Email Address'
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='flex flex-col w-full gap-1'>
                      <input
                        placeholder='Date of Birth'
                        type="date"
                        id="dob"
                        name="dob"
                        className='outline-0 bg-primary-green border-b-2 border-secondary-jetstream pb-1'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                    <button type="submit" disabled={loading ? true : false} className='text-center py-2 text-primary-green bg-secondary-jetstream text-xl rounded-lg w-full outline-none flex flex-col justify-center items-center'>
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
                      </svg> : "Sign up"
                    }
                    </button>
                    </form>
                    <div className='text-secondary-jetstream text-sm flex gap-1'>Already have an account?<button onClick={handleLoginHere} className='underline'> Login here</button></div>
                    <div className='border-b-2 border-secondary-jetstream w-10/12'></div>
                    <button className={`${hideOptions ? 'px-3 flex gap-3 py-3 items-center text-primary-green bg-secondary-jetstream text-lg font-semibold rounded-lg w-8/12 justify-center' : 'hidden'}`} onClick={toggleOptions}>Explore More Options</button>
                    <div className={`${hideOptions ? 'hidden' : 'flex flex-col w-full gap-4 justify-center items-center'}`}>
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