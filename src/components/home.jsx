import React from 'react';
import Drin from '../assets/Drin.png';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-slate-800 '>
        <div className='text-white max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Developer
                </h2>
                <p className='text-gray-300 py-4 max-w-md'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex, maiores fuga magnam voluptatum eaque nesciunt quas fugiat pariatur perferendis dolorum 
                    quia ullam nulla nostrum laboriosam ratione odio quis maxime unde.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-xl bg-gradient-to-r from-indigo-400 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-200'><MdOutlineKeyboardDoubleArrowRight size={20} className='ml-1' /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={Drin} alt="Profili" className='rounded-3xl mx-auto mt-7
                 w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home;
