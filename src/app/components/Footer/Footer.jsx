import React from 'react'
import Link from 'next/link'

import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";


const Footer = () => {
    return (
        <footer className='footer border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white flex justify-center'>
            <div className='container flex justify-between p-5'>
                <div className='flex flex-row space-x-5'>
                    <Link href={""} target="_blank" rel="noopener noreferrer">
                        <SiGmail size={30} />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/alysson-henrique-r-de-almeida/"} target="_blank" rel="noopener noreferrer">
                        <SiLinkedin size={30} />
                    </Link>
                    <Link href={"https://github.com/alyhenr"} target="_blank" rel="noopener noreferrer">
                        <SiGithub size={30} />
                    </Link>
                </div>
                <p className='text-slate-700 pr-10'>This website is powered by Next.js</p>
            </div>
        </footer>
    )
}

export default Footer