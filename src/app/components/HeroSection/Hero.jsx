"use client"

import React from 'react';
import Image from 'next/image';

import avatar from '../../../assets/avatar.png';
import HeroTypeAnimation from './HeroTypeAnimation';

const Hero = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-l from-pink-500 to-purple-400'>
                        Hello, I&apos;m<br />
                    </span>
                    <HeroTypeAnimation />
                </h1>
                <p className='text-[#ADB7BE] text-lg lg:text-xl mb-8'>
                    I&apos;m a full stack developer and I&apos;m looking forward to be part of a team and contribute with my skills!
                </p>
                <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-white hover:bg-slate-200 text-white text-xl font-bold hover:font-extrabold sm:mb-4 bg-gradient-to-br from-blue-500 via-purpple-500 to-pink-500'>Contact me</button>
                  <button className='px-6 py-3 rounded-full w-full sm:w-fit bg-transparent hover:bg-slate-800 text-white text-xl font-bold hover:font-extrabold border border-white mt-3 sm:mb-4 bg-gradient-to-br from-blue-500 via-purpple-500 to-pink-500'>Download my CV</button>
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
        </div>
    </section>
  )
}

export default Hero;