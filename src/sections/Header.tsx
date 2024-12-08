'use client'
import React, { useState } from 'react';

function Header() {
  const [home,setHome]=useState(true)
  const [about,setAbout]=useState(false)
  const [project,setProject]=useState(false)
  const [contact,setContact]=useState(false)
  
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 bg-white/5 rounded-full backdrop-blur" >
        <a className={home?'nav-items $ bg-white text-gray-900 hover:bg-white/70':`nav-items ` } href="#home"  onClick={()=>{
          setHome(true)
          setAbout(false)
          // setContact(false)
          // setProject(false)
        }}>Home</a>
        <a  className={about?'nav-items $ bg-white text-gray-900 hover:bg-white/70':`nav-items ` } href="#about"
        onClick={()=>{
          setHome(false)
          setAbout(true)
          setContact(false)
          setProject(false)
        }}
        >About</a>
        <a  className={project?'nav-items $ bg-white text-gray-900 hover:bg-white/70':`nav-items ` } href="#projects"
        onClick={()=>{
          setHome(false)
          setAbout(false)
          setContact(false)
          setProject(true)
        }}
        >Projects</a>
        <a className={contact?'nav-items $ bg-white text-gray-900 hover:bg-white/70':`nav-items ` }href="#contact"
        onClick={()=>{
          setHome(false)
          setAbout(false)
          setContact(true)
          setProject(false)
        }}
        >Contact</a>
      </nav>
    </div>
  );
}

export default Header;
