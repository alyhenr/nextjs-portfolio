"use client"

import React, { useState, useTransition } from 'react';
import Image from 'next/image';

import illustration from "../../../assets/illustration.png";
import TabButton from './TabButton';

import { TAB_DATA } from './tabData';

const About = () => {

  const [tab, setTab] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = selectedTab => {
    startTransition(() => {
      setTab(prev => prev !== selectedTab ? selectedTab : null);
    });
  };

  return (
    <section className='text-white' id='about'>
      <div className='grid md:grid-cols-2 gap-8 space-y-8 items-center justify-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div>
          <h2 className='text-center md:text-left text-4xl font-bold text-white mb-4'>About me</h2>
          <p className='text-base md:text-lg'>
            Curiosity and a passion for learning have driven me to venture into various topics and fields; however, it was in programming that I found my true calling.<br />

            Self-directed learning has always played a significant role in my life. And after taking my first steps in the world of programming, I was certain that this was the path I wanted for my career.<br />

            And here I&apos;m, doing what I love and getting better every day!

            Let&apos;s build something together!<br /><br />
            Email: <a href="mailto:alyssonhra99@gmail.com">
              <strong>
                alyssonhra99@gmail.com
              </strong>
            </a><br />
            GitHub: <a href="https://github.com/alyhenr" target='_blank' rel="noopener noreferrer">
              <strong>
                @alyhenr
              </strong>
            </a>
          </p>
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
        {
          !!tab ? <div className='flex flex-col'>
            {
              TAB_DATA[tab]?.content
            }
          </div> :
            <Image
              className='rounded-xl opacity-70 place-self-center w-9/12 sm:w-2/3 md:w-full lg:w-8/12 max-w-lg'
              src={illustration}
              alt='Neon retro tech environment'
              width={500}
              height={500}
            />
        }
      </div>
    </section>
  )
}

export default About;