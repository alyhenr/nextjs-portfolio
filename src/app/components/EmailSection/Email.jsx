"use client"

import Link from 'next/link'
import React from 'react'

import { FaGithub, FaLinkedinIn } from "react-icons/fa"

export const Email = () => {
    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-[400px] w-[400px] z-0 blur-xl absolute top-10 left-20 transform -translate-x-1/2 -translate-1/2"></div>
            <div className="z-10">
                <h5 className='text-xl font-bold text-white my-2'>
                    Let&apos;s Connect!
                </h5>
                <p>
                    {" "}
                    I&apos;m open for new challenges and opportunities, if you
                    want to team up with someone passionate about techonology and
                    a lifelong learner, my inbox is always open, you&apos;re very
                    welcome to reach me out!
                </p>
                <div className='socials flex flex-row gap-5 mt-10'>
                    <Link href="https://github.com/alyhenr" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={35} className='hover:scale-110' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/alysson-henrique-r-de-almeida/" target="_blank" noopener="noreferrer">
                        <FaLinkedinIn size={35} className='hover:scale-110' />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col gap-3'>
                    <label
                        htmlFor="email"
                        className='text-white block text-sm font-medium'
                    >Your email</label>
                    <input
                        name="email"
                        id="email"
                        type="email"
                        placeholder='youremail@example.com'
                        className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                    <label
                        htmlFor="subject"
                        className='text-white block text-sm font-medium'
                    >Subject</label>
                    <input
                        name="subject"
                        id="subject"
                        type="text"
                        placeholder='Just saying hi...'
                        className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                    <label
                        htmlFor="message"
                        className='text-white block text-sm font-medium'
                    >Message</label>
                    <textarea
                        name="message"
                        id="message"
                        type="text"
                        placeholder="Amazing work! I want to work with you, let's go!"
                        className='bg-[#18191E] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                    />
                    <button
                        type='submit'
                        className='bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )

}