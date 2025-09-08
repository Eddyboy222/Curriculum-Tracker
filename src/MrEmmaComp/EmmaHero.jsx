import React, {useState} from 'react'
import {Circle, CircleCheck} from 'lucide-react'

function EmmaHero({topics}) {
    const [statuses, setStatuses] = useState(
            topics.map(() => "Pending")
          );
        
          const toggleStatus = (index) => {
            setStatuses((prev) =>
              prev.map((status, i) =>
                i === index ? (status === "Pending" ? "Completed" : "Pending") : status
              )
            );
          };
  return (
    <div className='bg-gray-50 min-h-screen flex justify-center pt-30 pb-16'>
      <div className='bg-white shadow-md w-full max-w-md md:max-w-7xl h-auto rounded-2xl p-6'>

        <div className='flex md:flex-row justify-between md:items-center border-b border-gray-300 pb-4'>
            <div className='space-y-2'>
              <h1 className='font-bold md:text-2xl text-xl text-gray-900'>Graphic Design</h1>
              <h2 className='font-normal text-sm md:text-lg text-gray-600'>Track your teaching progress and ensure comprehensive coverage</h2>
            </div>

            <div className='text-right md:text-right mt-3 md:mt-0'>
              <h1 className='font-bold md:text-3xl text-2xl text-blue-500'>60%</h1>
              <h2 className='font-normal md:text-base text-sm text-gray-600'>Complete</h2>
            </div>
        </div>
    
    
            <div className="pt-5 space-y-3">
              {topics.map((topic, index) => (
                <div key={index} className="w-full px-4 py-4 rounded-lg bg-gray-100 border border-gray-300 flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <button
                    onClick={() => toggleStatus(index)}
                    className="cursor-pointer"
                  >
                    {statuses[index] === "Pending" ? (
                      <Circle size={28} className='text-gray-400' />
                    ) : (
                      <CircleCheck size={28} className='text-green-500' />
                    )}
                  </button>
                    <h2 className="font-semibold md:text-lg text-base">{topic}</h2>
                  </div>
    
                  <div
                  className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition
                    ${
                      statuses[index] === "Pending"
                        ? "bg-gray-200 text-gray-700"
                        : "bg-green-500 text-white"
                    }`}
                >
                  {statuses[index]}
                </div>
                </div>
              ))}
            </div>
    
          </div>
        </div>
  )
}

export default EmmaHero
