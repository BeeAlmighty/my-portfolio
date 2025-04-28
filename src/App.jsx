import React, { useState, createContext } from 'react'
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
export const myContext = createContext();
export const App = () => {
  const [ isDark, setIsDark ] = useState(true);
  return (
    <div className={`font-Aboreto ${ isDark ? 'bg-gray-950 text-white': 'bg-slate-50 text-black' } flex flex-col`}>
      <myContext.Provider value={{isDark, setIsDark}}>
        <Navbar />
        <main className='px-[1rem] min-lg:px-[5rem] py-[2rem] min-md:px-[2rem] min-xl:px-[12%]'>
          <Hero />
          <hr />
          <About />
          <hr />
          <Projects />
          <hr />
          <Skills />
          <hr />
        </main>
        <Footer />
      </myContext.Provider>
    </div>
  )
}
