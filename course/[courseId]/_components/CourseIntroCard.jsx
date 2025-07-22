import { Progress } from '@/components/ui/progress'
import Image from 'next/image'
import React from 'react'

function CourseIntroCard({course}) {
  return (
    <div className='flex gap-5 items-center p-10 border shadow-md rounded-lg'>
      <Image src={'/knowledge.png'} alt='other' width={70} height={70}/>
      <div>
        <h2 className='font-bold text-2xl'>{course?.courseLayout?.course_title}</h2>
        <p className='mt-1'>{course?.courseLayout?.course_summary}</p>
        <h2 className='mt-5 text-lg'>Total Bab: {course?.courseLayout?.chapters?.length}</h2>
      </div>
    </div>
  )
}

export default CourseIntroCard