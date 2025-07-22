import React, { useEffect, useState } from 'react'
import MaterialCardItem from './MaterialCardItem'
import { db } from '@/configs/db'
import axios from 'axios'
import Link from 'next/link';

function StudyMaterialSection({courseId,course}) {

    const [studyTypeContent,setStudyTypeContent]=useState();
    const MaterialList=[
        {
            name:'Catatan',
            desc:'Baca catatan untuk persiapan',
            icon:'/notes.png',
            path:'/notes',
            type:'notes'
        },
        {
            name:'Quiz',
            desc:'Ayo buat bank soal untuk cara yang bagus untuk menguji pengetahuan',
            icon:'/quiz.png',
            path:'/quiz',
            type:'quiz'
        }
    ]

    useEffect(()=>{
        GetStudyMaterial();
    },[])

    const GetStudyMaterial=async()=>{
        const result=await axios.post('/api/study-type',{
            courseId:courseId,
            studyType:'ALL'
        })

        console.log(result?.data);
        setStudyTypeContent(result.data)
    }


  return (
    <div className='mt-5'>
        <h2 className='font-medium text-xl'>Bahan Pelajaran</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-3'>
            {MaterialList.map((item,index)=>(
                
                <MaterialCardItem item={item} key={index}
                    studyTypeContent={studyTypeContent}
                    course={course}
                    refreshData={GetStudyMaterial}
                />
             
            ))}
        </div>
    </div>
  )
}

export default StudyMaterialSection