import React from 'react'

import darkSaasLandingPage from "@/assets/images/ai-startup.png";
import lightSaasLandingPage from "@/assets/images/booking-app.png";
import aiStartupLandingPage from "@/assets/images/ai-landing.png";
import doctorAppointment from "@/assets/images/doctor-appointment.png";

import grainImage from '@/assets/images/grain.jpg'
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import Image from 'next/image';
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'
import Card from './Card';
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ai-startup-landing-page-mu.vercel.app/",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://mern-booking-app-1-ycdh.onrender.com",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Lorent Landing page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://lorent-websitee-7bi1.vercel.app",
    image: aiStartupLandingPage,
  },
  {
    company: "Prescripto",
    year: "2023",
    title: "Doctors Booking App",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://doctors-appointment-kappa.vercel.app/",
    image: doctorAppointment,
  },
];

function Projects() {
  return (
    <div className='pb-16 lg:py-24'>

    <div className='container'>
        <div className='flex flex-col justify-center '>

        <p className='uppercase font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>Real-world Results</p>
     
        <h1 className='font-serif text-3xl md:text-5xl text-center mt-6'>Featured Projects</h1>
        <p className='text-center md:text-lg text-white/60 mt-4 '>See how I transform concepts into digital experiences</p>
        </div>
   
    <div className='flex gap-4 flex-col items-center mt-10 justify-center md:mt-20 '>

    {
        portfolioProjects.map((project,index)=>(
          

            <Card key={index} className={` p-8 md:p-12 md:px-10 lg:px-20 sticky `} style={{
              top:`calc(64px + ${index*40}px)`
            }}>
               
                <div className='lg:grid lg:grid-cols-2'>
                  <div>
                    <div className='bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text justify-center '>
                   <span className='text-center '>{project.company}</span>
                   <span>&bull;</span>
                   <span>{project.year}</span>
                
                </div>
                <h3 className='font-serif text-2xl mt-2 md:text-4xl'>{project.title}</h3>
                <hr className='border-t-2 border-white/5 mt-4' />
                <ul className='flex flex-col gap-4 mt-4'>
                    {project.results.map((result)=>(
                        <li key={result.title} className='flex gap-2 text-sm text-white/50'>
                            <CheckCircleIcon className='size-5'/>
                            <span>{result.title}</span>
                            </li>
                    ))}
                </ul>
                <a href={project.link} className='z-20'>
                <button className='flex  gap-3 glow-on-hover items-center justify-center font-bold m-auto mt-10 '><span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"><a href="mailto:atulkimshra858@gmail.com">View Live</a></span>
                <ArrowRightIcon className="transform hover:scale-125 transition duration-200 ease-linear"/></button>
                </a>
                </div>
                <div>
                <Image src={project.image} className='mt-8 -mb-4' alt={project.title}/>
                </div>
                </div>

            </Card>
           
        ))
    }
    </div>
    </div>
     </div>
  )
}

export default Projects