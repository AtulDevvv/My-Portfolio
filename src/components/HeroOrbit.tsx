import StarIcon from '@/assets/icons/star.svg'
import { PropsWithChildren } from 'react'

function HeroOrbit({children,size,rotation}:PropsWithChildren<{size:number,rotation:number}>) {
  return (
    <div><div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
    <div className='  size-[800px] animate-spin [animation-duration:30s]'  style={{height:`${size}px`,
width:`${size}px`,
transform:`rotate(${rotation}deg)`

}}>
   <div className=' inline-flex animate-spin [animation-duration:30s]' style={{transform:`rotate(${rotation *-1}deg)`}}>
  {children}
    </div>
   </div>
    </div></div>
  )
}

export default HeroOrbit