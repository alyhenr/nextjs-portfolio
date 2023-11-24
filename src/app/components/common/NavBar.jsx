"use client"

import Link from 'next/link';
import React, { useState } from 'react';

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

import Logo from "../../../../public/logo.png"
import Image from 'next/image';

const menuItems = ['About', 'Contact me'];

const MenuItems = ({ mobile = false, setOpenMenu = () => { } }) => {
    return (
        menuItems.map(item => (
            <li key={item}>
                <Link
                    className='block py-2 pl-3 pr-4 text-[#ADB7BE] text-2xl sm:text-xl rounded md:p-0 hover:text-white'
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => {
                        if (!mobile) { return; }
                        else { setOpenMenu(false); }
                    }}
                >
                    {item}
                </Link>
            </li>
        ))
    )
}

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='fixed top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap justify-between items-center mx-auto p-8'>
                <Link
                    href={"/"}
                    className='text-3xl md:text-5xl text-white font-semibold'
                ><Image src={Logo} alt='alyhenr logo' width={200} /></Link>
                {/* //Small screen - menu*/}
                <button className='flex items-center px-3 py-2 text-slate-200 border border-slate-200 rounded-md hover:text-white md:hidden'
                    onClick={() => setOpenMenu(prev => !prev)}>
                    {!openMenu
                        ? <Bars3Icon
                            className='h-5 w-5' />
                        : <XMarkIcon
                            className='h-5 w-5' />}
                </button>
                {/* Medium screen */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex justify-evenly items-center p-4 md:p-0 md:flex-row md:space-x-8'>
                        <MenuItems setOpenMenu={setOpenMenu} />
                    </ul>
                </div>
            </div>
            {/* //Small screen - menu*/}
            {openMenu &&
                <div onClick={() => setOpenMenu(false)}>
                    <MenuOverlay>
                        <MenuItems mobile={true} setOpenMenu={setOpenMenu} />
                    </MenuOverlay>
                </div>}
        </nav>
    )
}

export default NavBar;