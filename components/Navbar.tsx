import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import { FaPowerOff } from 'react-icons/fa';

const Navbar = () => {
    const {data:isAuthenticated} = useSession();

  return (

    <div className='h-24 w-full shadow-md flex justify-between items-center font-raleway px-4'>
        <div className='hidden lg:flex justify-center items-center px-4'>
            <Image src={isAuthenticated?.user?.image!} alt="" className="rounded-full shadow" width={60} height={60}/>
            <span className='text-xl text-gray-700 font-bold my-12 px-4'>
                {isAuthenticated?.user?.name}
            </span>
        </div>
        <div className='lg:hidden flex justify-center items-center px-6'>
            <Image src={isAuthenticated?.user?.image!} alt="" className="rounded-full shadow" width={40} height={40}/>
            <span className='text-sm text-gray-700 font-bold my-12 px-4'>
                {isAuthenticated?.user?.name}
            </span>
        </div>
        <div className='px-40 lg:block hidden'>
          <button onClick={()=>signOut()} 
          className="text-xl text-white bg-gray-700 my-12 px-6 py-3 rounded"> Logout</button>
        </div>
        <div className='px-40 block lg:hidden'>
          <button onClick={()=>signOut()}><FaPowerOff className='w-5 h-5 text-red-500'/></button>
        </div>
    </div>
  )
}

export default dynamic(()=> Promise.resolve(Navbar),{ssr:false})