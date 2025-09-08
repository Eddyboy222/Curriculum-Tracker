import React from 'react'
import { Link } from 'react-router-dom';

function PeluDash() {
  return (
    <>
        <nav className=" w-full fixed top-0 bg-white shadow-sm px-5 md:px-9 py-3">
             <div className='flex md:flex-row md:items-center justify-between md:gap-0 gap-4'>
        
                <div className='flex  md:flex-row items-center text-left md:text-left gap-2'>
                    <img src="https://res.cloudinary.com/dafafyxbh/image/upload/v1757292711/Petforde_vhxm5n.png" alt="Petforde logo"
                    className='w-10 h-10 object-contain'/>
                <div>
                    <h1 className='font-bold md:text-2xl text-xl'>Curriculum Tracker</h1>
                    <h2 className='font-light text-sm md:text-base'>Instructor Dashboard</h2>
                </div>
                </div>
        
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-right'>
                <div>
                    <h1 className='font-semibold text-base md:text-lg'>Mrs Pelumi</h1>
                    <h2 className='font-light md:text-base text-sm'>Instructor</h2>
                </div>
                <Link to='/'><button className='bg-gray-200 w-24 md:w-20 h-10 rounded-lg cursor-pointer font-semibold text-sm md:text-base'>Logout</button></Link>
                </div>
                
             </div>
            </nav>
        
        </>
  )
}

export default PeluDash
