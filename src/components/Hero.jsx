import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { myContext } from '../App';

export const Hero = () => {
  const {isDark} = useContext(myContext);
  return (
    <section className='py-[5rem] grid min-lg:grid-cols-2 min-lg:gap-[2rem] '>
      <div className='flex flex-col gap-[1.5rem]'>
        <h1 className='text-[5rem] leading-[5rem]'>I'm <span className={`text-sky-500 text-shadow-lg ${isDark ? 'text-shadow-slate-100 ' : 'text-shadow-amber-600'}`}>Moses</span></h1>
        <h2 className='text-4xl'>
          a Front-end Web developer 
        </h2>
        <p className='text-[1.5rem] font-CormorantU  font-extrabold min-lg:text-[2rem] leading-[1.4rem]'>
          Creating intuitive and scalable web applications.
        </p>
        <div className='flex gap-[1rem]'>
          <a href="https://www.github.com/beealmighty" target='_blank' className='hover:-translate-y-[0.75rem] duration-500 ease-in'><FaGithub className='text-[2rem] cursor-pointer'/></a>
          <a href="https://www.linkedin.com/in/moses-maduakonam/" target='_blank' className='hover:-translate-y-[0.75rem] duration-500 ease-in'><FaLinkedin className='text-[2rem] cursor-pointer'/></a>
          
        </div>
      </div>
      <img src="src/assets/images/hero-RufAmTht (1).svg" alt="hero-img" className='hidden min-lg:inline-grid'/>
    </section>
  )
}
