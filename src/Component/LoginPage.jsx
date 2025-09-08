import React from 'react'
import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>
    <div className="bg-blue-100 min-h-screen flex items-center justify-center px-4">
  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center flex flex-col items-center justify-center">

    
    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mb-4 text-blue-500 flex items-center justify-center">
      <UserRound size={36} />
    </div>

    
    <div>
      <h1 className="text-xl md:text-2xl font-bold mb-2">Instructor Login</h1>
      <h2 className="font-normal text-sm md:text-base mb-6">
        Select your account to access course progress
      </h2>
    </div>

    
    <div className="flex flex-col items-center justify-center space-y-3 w-full">
      <Link to="/mrazeez" className="w-full">
        <button className="flex flex-row items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-gray-300 
          hover:bg-gray-500 hover:text-white transition duration-200 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
            <UserRound size={18} />
          </div>
          <p className="text-black font-semibold text-sm md:text-base">Mr Azeez</p>
        </button>
      </Link>

      <Link to="/mrspelumi" className="w-full">
        <button className="flex flex-row items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-gray-300 
          hover:bg-gray-500 hover:text-white transition duration-200 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
            <UserRound size={18} />
          </div>
          <p className="text-black font-semibold text-sm md:text-base">Mrs Pelumi</p>
        </button>
      </Link>

      <Link to="/mremma" className="w-full">
        <button className="flex flex-row items-center gap-3 w-full px-4 py-3 rounded-lg border-2 border-gray-300 
          hover:bg-gray-500 hover:text-white transition duration-200 cursor-pointer">
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
            <UserRound size={18} />
          </div>
          <p className="text-black font-semibold text-sm md:text-base">Mr Emmanuel</p>
        </button>
      </Link>
    </div>

  </div>
</div>
    </>
  )
}

export default LoginPage
