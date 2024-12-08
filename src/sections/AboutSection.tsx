'use client'
import React, { useRef } from 'react'
import SectionHeader from './SectionHeader'
import Card from './Card'
import {motion} from'framer-motion'
import bookImage from "@/assets/images/book-cover.png"
import Image from 'next/image'
import JavascriptIcon from "@/assets/icons/square-js.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import GitIcon from "@/assets/icons/github.svg"
import TechIcon from '@/components/TechIcon'
import mapImage from "@/assets/images/map.png"
import smileImage from '@/assets/images/memoji-smile.png'
import CardHeader from '@/components/CardHeader'

const toolboxItems=[
    {
        title:'JavaScript',
        iconType:JavascriptIcon,
    },
    {
        title:"Html",
        iconType:HtmlIcon
    },
    {
        title:'CSS3',
        iconType:CssIcon
    },
    {
        title:'React',
        iconType:ReactIcon
    },
    {
        title:'Chrome',
        iconType:ChromeIcon
    },
    {
        title:'Github',
        iconType:GitIcon
    },
]
const hobbies=[
    {
        title:'Painting',
        emoji:'🎨',
        left:'5%',
        top:'5%'

    },
    {
        title:'Reading',
        emoji:'📖',
        left:'50%',
        top:'5%'

    },
    {
        title:'Traveling',
        emoji:'🧳',
        left:'10%',
        top:'35%'

    },
    {
        title:'Spirituality',
        emoji:'🕊️',
        left:'35%',
        top:'40%'

    },
    {
        title:'Music',
        emoji:'🎶',
        left:'70%',
        top:'45%'

    },
    {
        title:'Marketing',
        emoji:'📑',
        left:'5%',
        top:'75%'

    },
]

function AboutSection() {
    const constraintRef=useRef(null)
  return (

    <div className='py-16 px-8 lg:py-28 '><SectionHeader eyebrow='About Me' title='A Glimpse Into My World that Inspire me.' description='Learn more about who I am , what I do ,what isnpire me.'/>
    
    <div className='mt-20 flex flex-col gap-8'>
        <div className=' grid grid-cols-1 md:grid md:grid-cols-5 gap-8'>

   
        <Card className='h-[320px] md:col-span-2'>
           <CardHeader title='My Reads' description='Explore the books that shapes my persoectivess' 
          
           />
               <div className='w-40 mx-auto mt-30 '>
               <Image src={bookImage} alt='Book Cover' />
               </div>

        </Card>
        <Card className='h-[320px] md:col-span-3'>
            <div>
             
                <CardHeader title='My ToolBox' description='Explore the technologies and tools used to craft exceptional digital experiences'/>
            </div>
            <div className='flex gap-5  px-2 text-emerald-300  [mask-image:linear-gradient(to_left,transparent,black_20%,black_90%,transparent)] animate-move-left [animation-duration:18s]'>
                {
                    toolboxItems.map((item)=>(
                        <div key={item.title} className='flex border-[0.1px] border-white/70 gap-2 rounded-lg px-2 py-1'>
                            
                              <span><TechIcon component={item.iconType}/></span>
                              <span className='text-white/80 font-semibold'>{item.title}</span>
                            
                        </div>
                    ))
                }
            </div>
            <div className='flex gap-5  px-2 text-emerald-300  [mask-image:linear-gradient(to_left,transparent,black_20%,black_90%,transparent)] animate-move-right mt-5 [animation-duration:18s]'>
                {
                    toolboxItems.map((item)=>(
                        <div key={item.title} className='flex border-[0.1px] border-white/70 gap-2 rounded-lg px-2 py-1'>
                            
                              <span><TechIcon component={item.iconType}/></span>
                              <span className='text-white/80 font-semibold'>{item.title}</span>
                            
                        </div>
                    ))
                }
            </div>

        </Card>
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-5 gap-8 '>
        <Card className='h-[320px] flex p-0 flex-col md:col-span-3'>
           
             
                <CardHeader title='Beyond the Code' description='Explore my Interests and hoobies  beyond digital realms '  className=''/>
                
                <div ref={constraintRef} className='relative flex-1 '>
                    {
                        hobbies.map((hobby)=>(
                            < motion.div  key={hobby.title} className='inline-flex items-center gap-2 px-4 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute '
                            style={{left:hobby.left,top:hobby.top}}
                            drag
                            dragConstraints={constraintRef}
                             >
                                <span className='font-medium text-gray-900'>{hobby.title}</span>
                                <span>{hobby.emoji}</span>
                            </motion.div>
                        ))
                    }
                </div>
               
                
           

        </Card>
        <Card className='h-[320px] p-0 relative md:col-span-2'>
        <Image src={mapImage} className='h-full w-full object-cover' alt='map Image'/>
       <div className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2  left-1/2 size-20 rounded-full backdrop-blur opacity-70 bg-gradient-to-r  from-emerald-800 to-sky-400 after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full    '> 
       <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping  rounded-full'></div>
       <div className='absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10'></div>
       <Image src={smileImage} alt='smile Image' className='size-20'/></div>

     
        </Card>
        </div>
    </div>
    
    </div>
  )
}

export default AboutSection