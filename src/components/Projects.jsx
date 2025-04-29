import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { myContext } from '../App';

export const Projects = () => {
  
  return (
    <section id='projects' className='py-[4rem] flex flex-col gap-[2rem]'>
      <h2 className='text-[2rem] text-blue-400'>Projects</h2>
      {/* <img src='/images/weatherApp.png' alt="" /> */}
      <div className='grid gap-[2rem] min-lg:grid-cols-3 min-[700px]:grid-cols-2 m-auto'>
        <ProjectsDemo 
          src='/images/weatherApp.png'
          projectName='Weather App'
          description='A weather web application that uses an open-source api to get the current web details of any location'
          languages='React, Tailwind, API, Axios'
          ghLink='https://github.com/BeeAlmighty/Weather-App-React'
          webLink='https://weather-app-react-seven-peach.vercel.app/'
        />
        <ProjectsDemo 
          src='/images/quiz-app.png'
          projectName='Quiz App'
          description='A quiz app that tests your knowledge in different sports'
          languages='React, Tailwind, React Router'
          ghLink='https://github.com/BeeAlmighty/Sports-Quiz-App'
          webLink='https://sports-quiz-app.vercel.app/'
        />
        <ProjectsDemo 
          src='/images/tip-calculator.png'
          projectName='Tip Calculator'
          description='A basic app that calculates how the bill and tip is shared amongst people'
          languages='HTML, CSS, JAVASCRIPT'
          ghLink='https://github.com/BeeAlmighty/Tip-calculator-App'
          webLink='https://tip-calculator-app-git-main-beealmightys-projects.vercel.app/'
        />
        <ProjectsDemo 
          src='/images/ecommerce-page.png'
          projectName='E-commerce Product Page'
          description='A basic app that shows a product page and utilizes cart display and product display using light box'
          languages='HTML, CSS, JAVASCRIPT'
          ghLink='https://github.com/BeeAlmighty/Ecommerce-product-page'
          webLink='https://ecommerce-product-page-psi-seven.vercel.app/'
        />
      </div>
    </section>
  )
}

const ProjectsDemo = ({ src, projectName, description, languages, ghLink, webLink }) => {
  const {isDark} = useContext(myContext)
  return (
    <div className={`${isDark ? 'text-black bg-blue-100 hover:shadow-gray-400' : 'text-white bg-gray-600 hover:shadow-gray-500'} grid rounded-lg cursor-pointer shadow-md duration-500 max-w-[22rem]`}>
      <img src={src} alt={src} className='rounded-t-lg' />
      <div className='p-[1rem] flex flex-col gap-[1rem]'>
        <h2 className='text-2xl'>{projectName}</h2>
        <p>{description}</p>
        <p>{languages}</p>
        <div className='flex gap-2.5'>
          <a href={ghLink} target='_blank' className={`${isDark ? 'hover:text-black text-gray-500' : 'hover:text-white text-gray-400'} duration-200 ease-in`}><FaGithub className='text-[2rem] cursor-pointer'/></a>
          <a href={webLink} target='_blank' className={`${isDark ? 'hover:text-black text-gray-500' : 'hover:text-white text-gray-400'} duration-200 ease-in`}><CgWebsite className='text-[2rem] cursor-pointer'/></a>
        </div>
      </div>
    </div>
  )
}
