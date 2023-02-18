import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import giphy from "../public/giphy.gif";
import { BsGithub } from 'react-icons/bs';

const Login = () => {
  const {data:isAuthenticated} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(isAuthenticated){
      router.push("/")
    }

  },[isAuthenticated, router])
  return (
    !isAuthenticated && <div className='w-full flex flex-col justify-center items-center h-screen bg-white font-raleway'>
      <span className='text-6xl text-gray-700 font-bold my-12 px-5'> Welcome Coders...</span>

      <div className='flex justify-center items-center w-full lg:flex-row flex-col'>
        <Image src={giphy} alt="" width={700} height={700}/>
        <div className='relative w-2/12'>
          <button onClick={()=>signIn("github", {callbackUrl:"http://localhost:3000"})} className='text-2xl text-black bg-slate-50 my-12 px-6 py-6 absolute -mx-20 hover:bg-sky-600
          rounded flex justify-center items-center gap-5 shadow font-bold transition ease-in-out delay-150 hover:scale-110 
          hover:text-white duration-300'>
            <BsGithub className='w-10 h-10'/> Login With Github
          </button>
        </div>
      </div>
      </div>
  )
}

export default Login