import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const links=[
        {
            id: 1,
            link:'home',
            href: '#top'
        },
        {
            id: 2,
            link:'about',
            href: '#about'
        },
        {
            id: 3,
            link:'portifolio',
            href: '#portfolio'
        },
        {
            id: 4,
            link:'experience',
            href: '#experience'
        },
        {
            id: 5,
            link:'contact',
            href: '#Contact'
        },
    ]
  return (
    <div className="flex mt-2 items-center w-full h-20 text-white space-x-20
    px-4 bg-black fixed rounded">
        <div>
            <h1 className='text-5xl font-signature ml-2 hover:cursor-pointer'>Drin</h1>
        </div>

        <ul className='hidden md:flex'>
        {links.map(({id, link, href}) => (
            <li key={id} className='px-16 cursor-pointer pr- capitalize font-medium text-white
            hover:scale-105 duration-150'>
                <a href={href}>{link}</a>
            </li>
        ))}
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        {nav &&(
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-cyan-900 text-gray-800'>
            {links.map(({id, link, href}) => (
                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <a href={href}>{link}</a>
                </li>
            ))}
        </ul>
        )}
    </div>
  )
}

export default Navbar;
