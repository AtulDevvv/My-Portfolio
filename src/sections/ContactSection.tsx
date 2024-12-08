import React, { useRef } from 'react'
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
function ContactSection() {
    

  return (
    <div className='py-16 pt-12'>
    <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-10 rounded-3xl text-center'>
        <h2 className='font-serif text-2xl'>Let's create something amazing together</h2>


        <p className='text-sm mt-2'>Ready to bring  your next porject to life? let's connect and how I can help you achieve your goals. </p>

        <h3 className='text-lg font-bold mt-10 animate-bounce'> +91 8219454453</h3>
        <button className='flex  gap-3 glow-on-hover items-center justify-center font-bold m-auto mt-10 '><span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"><a href="mailto:atulkimshra858@gmail.com">Contact Me</a></span>
         
        <ArrowUpRightIcon className="transform hover:scale-125 transition duration-200 ease-linear"/></button>
        </div>
    </div>
    </div>
  )
}

export default ContactSection