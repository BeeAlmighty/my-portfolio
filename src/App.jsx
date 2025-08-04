import React, { useState, createContext, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';
import { FaAngleDoubleUp } from 'react-icons/fa';

export const myContext = createContext();
export const App = () => {
	const [showButton, setShowButton] = useState(false);
	const [isDark, setIsDark] = useState(true);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 500) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div
			className={`font-Aboreto ${
				isDark ? 'bg-gray-950 text-white' : 'bg-slate-50 text-black'
			} flex flex-col`}
		>
			<myContext.Provider value={{ isDark, setIsDark }}>
				<Navbar />
				<main className='px-[1rem] min-lg:px-[5rem] py-[2rem] min-md:px-[2rem] min-xl:px-[12%]'>
					{showButton && (
						<button
							className='cursor-pointer p-[0.1rem] bg-white fixed right-[2rem] top-[50%] text-3xl rounded-full'
							onClick={handleScrollToTop}
						>
							<FaAngleDoubleUp className=' text-sky-400' />
						</button>
					)}
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
	);
};
