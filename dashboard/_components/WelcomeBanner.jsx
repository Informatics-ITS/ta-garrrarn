"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    const {user}=useUser();
  return (
    <div className='p-5 bg-gray-600 w-full text-white rounded-lg flex items-center gap-6'>
        <Image src={'/laptop.png'} alt='laptop' width={100} height={100}/>
        <div>
            <h2 className='font-bold text-3xl'>Hai, {user?. fullName} </h2>
            <p>Sudah waktunya untuk kembali dan memulai pelajaran baru.</p>
        </div>
    </div>
  )
}

export default WelcomeBanner