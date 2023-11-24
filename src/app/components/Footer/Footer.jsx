import React from 'react'
import Link from 'next/link'

import { SiUpwork } from "react-icons/si";


const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white flex justify-center'>
            <div className='container flex justify-between p-5'>
                <div className='flex flex-row space-x-5'>
                    <Link href={"https://www.upwork.com/freelancers/~012320c8b4dfe401f5"} target="_blank" rel="noopener noreferrer">
                        <SiUpwork size={30} />
                    </Link>
                    <p className='text-sm text-[#ADB7BE]'>I&apos;m at upwork too!</p>
                </div>
                <p className='text-slate-700 pr-10'>This website is powered by Next.js</p>
            </div>
        </footer>
    )
}

export default Footer