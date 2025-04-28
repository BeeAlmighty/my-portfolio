import React from 'react'
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer id='footer' className='mx-auto flex flex-col text-[1.3rem] py-[2rem] gap-[0.5rem]'>
      <div className='flex flex-col items-center gap-3.5 min-md:flex-row'>
        Contact me: <a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBHvjFGPdJgkWRdfcsnHHmLPxvSCjZtMchgVWJMZZXpdshzvXkkrVlQGzKgwfxQfBCQ" className='text-sky-400 hover:text-sky-500'>Cardozo9042@gmail.com</a>
        {/* <SiGmail className='text-red-400'/> */}
      </div>
      <p className='flex items-center gap-3.5 justify-center'><FaRegCopyright /> 2025 Moses Maduakonam</p>
      <p className='text-center'>Version 1.0.0</p>
    </footer>
  )
}
