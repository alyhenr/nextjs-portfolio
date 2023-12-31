"use client"

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import avatar from '../../../assets/avatar.png';
import HeroTypeAnimation from './HeroTypeAnimation';
import Link from 'next/link';

import { motion } from "framer-motion";

const PT_CV = '/cvs/alysson-cv-pt_br.pdf';
const EN_CV = '/cvs/alysson-cv-en.pdf';

const Hero = () => {
    const [showCvs, setShowCvs] = useState(false);

    const clickOutsideCVS = useCallback(ev => {
        if (showCvs && ev.target.id !== 'cvs') {
            setShowCvs(false);
        }
    }, [showCvs])

    useEffect(() => {
        window.addEventListener("click", clickOutsideCVS);
        return () => { window.removeEventListener("click", clickOutsideCVS); };
    }, [clickOutsideCVS]);

    return (
        <section>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='grid grid-cols-1 lg:grid-cols-12'
            >
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-white mb-4 text-5xl lg:text-6xl font-extrabold h-40'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-400'>
                            Hello, I&apos;m<br />
                        </span>
                        <HeroTypeAnimation />
                    </h1>
                    <p className='text-[#ADB7BE] text-lg lg:text-xl mb-8'>
                        I&apos;m a full stack developer and I&apos;m looking forward to be part of a team and contribute with my skills!
                    </p>
                    <Link
                        href="#contact-me"
                        className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 hover:opacity-95 text-white"
                    >
                        Hire Me
                    </Link>
                    <div
                        className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3 relative cursor-pointer"
                    >
                        <span
                            className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
                            onClick={() => { setShowCvs(prev => !prev); }}
                            id='cvs'
                        >
                            Download CV
                        </span>
                        <ul className={`${showCvs ? 'inline' : 'hidden'} z-30 absolute top-14 p-2 bg-primary-500 rounded-lg [&>li]:m-1 [&>li]:p-2`}>
                            <li
                                className='hover:bg-primary-400 rounded-xl'>
                                <a href={PT_CV} download="alysson-henrique-cv-pt.pdf">
                                    Portuguese
                                </a>
                            </li>
                            <li
                                className='hover:bg-primary-400 rounded-xl'>
                                <a href={EN_CV} download="alysson-henrique-cv-en.pdf">
                                    English
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-6 lg:mt-0'>
                    <div
                        className='flex justify-center items-center rounded-full bg-[#181818] w-[300px] h-[300px] relative'>
                        <Image
                            src={avatar}
                            alt='cartoon hero img'
                            className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero;