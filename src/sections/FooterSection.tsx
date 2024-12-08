import React from 'react'
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
const footerLinks=[
   
    {title:'Instagram',
        link:''
    },
    {title:'Twitter',
        link:''
    },
    {title:'LinkedIn',
        link:'https://www.linkedin.com/in/atul-mishra-535376232?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbyMvCb55TKS7u7nkdP5enw%3D%3D'
    },
]

function FooterSection() {
  return (
    <footer className='relative -z-10'>
        <div className='absolute h-[400px] w-full bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-emerald-300/30 mask-image'></div>

    <div className='container' >
        <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row gap-8 justify-between  '>
            <div className=''>&copy; 2024, All rights reserve </div>
            <nav className='flex flex-col items-center gap-6 mt-3 md:flex-row'>
               {
                footerLinks.map((link)=>(
                    <a key={link.title} href={link.link} className='inline-flex items-center gap-3'> <span className='font-semibold'>{link.title}</span>
                    <ArrowUpRightIcon className='size-4'/>
                    </a>
                   
                ))
               }
            </nav>
           
        </div>
    </div>
    </footer>
  )
}

export default FooterSection