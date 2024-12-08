'use client'
import React from 'react'
import StarIcon from '@/assets/icons/star.svg'
const words=[
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scaleable",
    "Realiable",
    "Interactive",
    "Scaleable",
    "Accessible",
    "Secure",
    "Interactive",
    "Scaleable",
    "Realiable",
    "Realiable",
    "Usable",
    "experiance"
]

function TapeSection() {
  return (
    <div data-scroll  data-scroll-speed='.2' className='py-[5vw] text-gray-950 font-bold  '>
        <div  className='bg-gradient-to-r from-emerald-400 to-sky-400 py-4 overflow-x-clip -rotate-3 '>
            <div className='flex [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex  flex-none gap-4 py-3 animate-move-left' 
           >
            {
                words.map((word,index)=>(
                   
                   
                    <div key={index} className='inline-flex gap-4 '>
                        <span>{word}</span>
                        <StarIcon className="size-6 -rotate-12"/>
                    </div>
                  
                ))
            }
            </div>

            </div>
        </div>
    </div>
  )
}

export default TapeSection