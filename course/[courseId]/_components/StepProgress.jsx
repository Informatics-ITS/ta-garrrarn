import { Button } from '@/components/ui/button'
import React from 'react'

function StepProgress({stepCount,setStepCount,data}) {
  return (
    <div className='flex gap-5 items-center'>
           {stepCount!=0&& <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount-1)}>Sebelumnya</Button>}
            {data?.map((item,index)=>(
                <div key={index} className={`w-full h-2 rounded-full
                ${index<stepCount?'bg-primary':'bg-gray-200'}`}>
                    </div>
            ))}
            <Button variant="outline" size="sm" onClick={()=>setStepCount(stepCount+1)}>Selanjutnya</Button>

        </div>
  )
}

export default StepProgress