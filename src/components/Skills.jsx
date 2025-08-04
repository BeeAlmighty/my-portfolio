import React from 'react';
import { FaHtml5 } from 'react-icons/fa6';
import { FaCss3 } from 'react-icons/fa6';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact } from 'react-icons/fa6';
import { SiTailwindcss } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import { SiMockserviceworker } from 'react-icons/si';
import { SiAxios } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa6';
import { TbBrandNuxt } from 'react-icons/tb';
import { SiExpress } from "react-icons/si";

export const Skills = () => {
	return (
		<section
			id='skills'
			className='py-[4rem] flex  flex-col'
		>
			<h2 className='text-[2rem]'>Skills</h2>
			<div className='grid grid-cols-2 py-[4rem] min-md:grid-cols-3 min-lg:grid-cols-4 gap-[2rem]'>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaHtml5 className='text-orange-700 text-[4rem]' />
					<p>HTML</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaCss3 className='text-blue-500 text-[4rem]' />
					<p>CSS</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<IoLogoJavascript className='text-yellow-400 text-[4rem]' />
					<p>JS</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaReact className='text-sky-400 text-[4rem]' />
					<p>REACT</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<SiTailwindcss className='text-blue-500 text-[4rem]' />
					<p>Tailwind</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaGithub className='text-[4rem]' />
					<p>Github</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaGitAlt className='text-[4rem] text-red-600' />
					<p>Git</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaNodeJs className='text-[4rem] text-green-500' />
					<p>Node</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<SiTestinglibrary className='text-[4rem] text-red-400' />
					<p>Testing Library</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<SiAxios className='text-purple-500 text-[4rem]' />
					<p>Axios</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<SiMockserviceworker className='text-[4rem] text-orange-400' />
					<p>msw</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<FaVuejs className='text-[4rem] text-green-400' />
					<p>vue</p>
				</div>
				<div className='flex flex-col items-center gap-[0.5rem]'>
					<TbBrandNuxt className='text-[4rem] text-green-400' />
					<p>nuxt</p>
				</div>
        <div className='flex flex-col items-center gap-[0.5rem]'>
					<SiExpress className='text-[4rem] text--400' />
					<p>express</p>
				</div>
			</div>
		</section>
	);
};
