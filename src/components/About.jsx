import React from 'react'

export const About = () => {
  return (
    <section id='about-me' className=' grid py-[4rem] gap-[3rem] min-lg:grid-cols-2'>
      <img src="/images/about-7koHI_U1.svg" alt="about image" />
      <article className='flex flex-col gap-[1rem]'>
        <h2 className='text-[2rem] text-green-800 font-CormorantU uppercase font-extrabold'>
          About me
        </h2>
        <hr />
        <p className='font-CormorantU text-[1.3rem] leading-[1.5rem] min-xl:leading-[2rem]'>
          Coding has been my source of creativity, passion and productivity. It has taught me a lot of things that i am currently applying to life, like the importance of learning the fundamentals, proper understanding of a problem before proffering a solution and so much more. I am currently a front-end developer with hopes to transition to other aspects of software development in future, with proficiency in Tailwind CSS and ReactJS, i build user-friendly, functional and scalable web applications that not only look good but perform optimally as well. With a few projects under my belt, i produce good work at a basic level but i'm always looking for a better and more efficient way to create.
        </p>
      </article>
    </section>
  )
}
