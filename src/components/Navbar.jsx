import React, { useContext, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { myContext } from '../App';
import { Link as ScrollLink } from 'react-scroll';
export const Navbar = () => {
  const [ nav, setNav ] = useState(false);
  const {isDark, setIsDark} = useContext(myContext);
  const handleMenuClick = () => {
    setNav(!nav);
  }
  const handleCloseNav = () => {
    setNav(false)
  }
  const ToggleMode = () => {
    setIsDark(!isDark)
  }
  return (
    <nav 
      className={`flex items-center justify-between h-[5rem] ${isDark ? 'bg-gray-900/50 text-white' : 'bg-slate-200 text-black'} px-[1rem] min-lg:px-[5rem] min-md:px-[2rem] min-xl:px-[12%]`}>
      <a className='cursor-pointer flex gap-1 text-[1.3rem] text-blue-400 items-center' href='#'>
        G 
        <span className='text-[1.8rem]'>TECH</span>
      </a>
      <div className='flex items-center gap-2.5'>
       <button onClick={ToggleMode}>
        {isDark ? <MdOutlineLightMode className='text-[2rem] bg-gray-400 p-[0.25rem] rounded-full cursor-pointer' /> : <MdOutlineDarkMode className='text-[2rem] text-white bg-gray-700 p-[0.25rem] rounded-full cursor-pointer' />}
       </button>
        <button onClick={handleMenuClick}>
          <RxHamburgerMenu className='cursor-pointer text-[1.7rem] min-lg:hidden' />
        </button>
        
        {/* Desktop Navigation */}
        <ul className='hidden min-lg:flex gap-[2rem] items-center'>
          <li className='border-b-2 border-b-transparent duration-200 ease-in hover:border-b-blue-400 py-[1rem] cursor-pointer'>
            <ScrollLink to="about-me" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className='border-b-2 border-b-transparent duration-200 ease-in hover:border-b-blue-400 py-[1rem] cursor-pointer'>
            <ScrollLink to="projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className='border-b-2 border-b-transparent duration-200 ease-in hover:border-b-blue-400 py-[1rem] cursor-pointer'>
            <ScrollLink to="footer" smooth={true} duration={500}>
              Contact
            </ScrollLink>
          </li>
          <li className='border-b-2 border-b-transparent duration-200 ease-in hover:border-b-blue-400 py-[1rem] cursor-pointer'>
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <ul className={`fixed bg-black/40 top-0 h-full w-[90%] backdrop-blur-2xl py-[4rem] flex flex-col items-start px-[4rem] gap-[2rem] ${nav ? 'left-0 duration-500 ease-in-out' : 'left-[-100%] duration-300 ease-in-out'} min-md:w-[50%]`}>
          <button className='self-end' onClick={handleCloseNav}>
            <FaWindowClose className='text-[2rem]  cursor-pointer mb-[2rem]' />
          </button>
          <li className={`${isDark ? '' : 'text-white'} cursor-pointer border-b-2 py-[1rem] border-transparent hover:border-blue-400 ease-in duration-75 text-[1.1rem]`}>
            <ScrollLink to="about-me" smooth={true} duration={500} onClick={handleCloseNav}>
              About
            </ScrollLink>
          </li>
          <li className={`${isDark ? '' : 'text-white'} cursor-pointer border-b-2 py-[1rem] border-transparent hover:border-blue-400 ease-in duration-75 text-[1.1rem]`} onClick={handleCloseNav}>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={handleCloseNav}>
              Projects
            </ScrollLink>
          </li>
          <li className={`${isDark ? '' : 'text-white'} cursor-pointer border-b-2 py-[1rem] border-transparent hover:border-blue-400 ease-in duration-75 text-[1.1rem]`} onClick={handleCloseNav}>
            <ScrollLink to="footer" smooth={true} duration={500} onClick={handleCloseNav}>
              Contact
            </ScrollLink>
          </li>
          <li className={`${isDark ? '' : 'text-white'} cursor-pointer border-b-2 py-[1rem] border-transparent hover:border-blue-400 ease-in duration-75 text-[1.1rem]`} onClick={handleCloseNav}>
            <ScrollLink to="footer" smooth={true} duration={500} onClick={handleCloseNav}>
              Skills
            </ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
