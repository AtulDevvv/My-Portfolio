import React, { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

function Card({className,children,...others}:ComponentPropsWithoutRef<'div'>) {
  return (
    
       <div  className={twMerge('bg-gray-800 border-3xl  relative after:content-[""] z-0 after:z-10 overflow-hidden after:absolute after:inset-0 rounded-3xl after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none   ',className)}{...others}>
       <div className='absolute inset-0 -z-10 opacity-5' style={{backgroundImage:`url(${grainImage.src})`}}></div>
       {children}
    
    </div>
  )
}

export default Card