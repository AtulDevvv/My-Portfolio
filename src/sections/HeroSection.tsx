'use client'
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'; 
import StarIcon from '@/assets/icons/star.svg'
import { motion } from 'framer-motion';
import KeyDown from "@/assets/icons/arrow-down.svg"

import Cyl from '../components/Cyl';

const introMe = "Build Exceptional User Experience";

function HeroSection() {
  return (
    <div className='relative'>
      <Canvas flat camera={{ fov: 60 }} className='md:ml-[20vw] '>
        <mesh >
          <OrbitControls enableZoom={false} />
          <ambientLight />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={5.0}
              luminanceThreshold={0.26}
              luminanceSmoothing={0.07}
            />
            <ToneMapping adaptive />
          </EffectComposer>
          <Cyl />
        </mesh>
      </Canvas>
      
      <div className='absolute inset-20'>
        <StarIcon className='size-8 text-emerald-300 ' />
      </div>
      <div className='absolute top-1/4 left-[10%] font-poppins text-5xl font-extrabold flex flex-col gap-3 w-1/3'>

      <div className='sm:w-[320px] md:w-[400px] sm:leading-5'>
        {introMe.split(' ').map((letter, index) => (
          <motion.span
          key={index}
          initial={{ y: '100%' ,opacity:0}}
          animate={{ y: '0%' ,opacity:1}}
          transition={{
            ease: 'easeIn',
            delay: index * 0.05, // Staggered delay for each letter
            duration: 0.06, // Duration of the animation
          }}
          className=" inline-block bg-gradient-to-r from-white to-sky-400 text-transparent bg-clip-text sm:text-2xl  md:text-5xl "
        >
          {letter}
        </motion.span>
       
        ))}
      </div>
        <div className='bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg w-[300px] md:w-[300px] sm:w-[200px] '>
            <div className='bg-green-500 size-2.5 rounded-full relative'>
                <div className='bg-green-500 absolute rounded-full animate-ping inset-0 '></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
        </div>
        <p className='text-sm xs:w-[300px] md:w-[350px] text-gray-400'> I specialize in transforming design into functional performance web applications. Let's discuss your project.</p>

        <div className='flex gap-3 xs:mt-[-20px]'>
        <button id='about' className='flex  gap-3 sm:gap:1 sm:px-1 glow-on-hover items-center justify-center font-bold m-auto mt-10 '><span className="text-sm xs:w-[100px] sm:w-[150px]">Explore My Work</span>
        <KeyDown className="transform hover:scale-125 transition duration-200 ease-linear size-4"/></button>
        <button className='flex  gap-3 glow-on-hover items-center justify-center font-bold m-auto mt-10 '><span className="text-sm xs:w-[140px] sm:w-[150px]"> <a href="mailto:atulkimshra858@gmail.com">👋
          Contact Me</a></span>
       </button>
      </div>
      </div>
 

    </div>
  );
}

export default HeroSection;
