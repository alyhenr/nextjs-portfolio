"use client"

import React, { useState, useTransition } from 'react';
import Image from 'next/image';

import illustration from "../../../assets/illustration.png";
import TabButton from './TabButton';

const About = () => {

  const [tab, setTab] = useState("skills");
  const [startTransition, isPending] = useTransition();

  const handleTabChange = selectedTab => {
    setTab(selectedTab);
  };

  return (
    <section className='text-white' id='about'>
      <div className='grid md:grid-cols-2 gap-8 space-y-8 items-center justify-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          className='rounded-xl opacity-70 place-self-center w-9/12 sm:w-2/3 md:w-full lg:w-8/12 max-w-lg'
          src={illustration}
          alt='Neon retro tech environment'
          width={500}
          height={500}
        />
        <div>
          <h2 className='text-center md:text-left text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus eaque cumque ab quaerat quis nemo voluptatibus aperiam. Quisquam qui soluta eaque explicabo nisi minus id accusantium rerum deleniti culpa nulla sapiente consectetur enim voluptate cupiditate esse tempore maxime quod, illo dolorem. Velit voluptates quam libero ipsum in, exercitationem fugiat.</p>
          <div className='flex flex-row mt-8 space-x-4'>
            {
              ['Skills', 'Education', 'Certfications'].map(item =>
                <TabButton
                  key={item}
                  selectTab={() => handleTabChange(item.toLowerCase())}
                  active={tab === item.toLowerCase()}
                >
                  {item}
                </TabButton>)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;