import React from 'react'

function SectionHeader({title,eyebrow,description}:{title:string,
    eyebrow:string,
    description:string
}) {
  return (
    <div>
        <div className='flex flex-col justify-center '>

<p className='uppercase font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>{title}</p>

<h1 className='font-serif text-3xl md:text-5xl text-center mt-6'>{eyebrow}</h1>
<p className='text-center md:text-lg text-white/60 mt-4 '>{description}</p>
</div>
    </div>
  )
}

export default SectionHeader