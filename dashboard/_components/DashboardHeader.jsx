"use client"
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function DashboardHeader() {
  const path=usePathname();
  return (
    <div className={`p-5 shadow-md flex ${path=='/dashboard'?'justify-end':'justify-between'}`}>
       {path!='/dashboard'&& 
        <Link href={'/dashboard'}>
           <div className='flex gap-2 items-center'>
            
             <Image src={'/logo.svg'} alt='logo' width={30} height={30}/>
            
                <h2 className="font-bold text-xl">ClassEngine.ai</h2>
          </div>
          </Link>  }
          <div className='flex items-center gap-3'>
          <UserButton/>
          </div>
    </div>
  )
}

export default DashboardHeader