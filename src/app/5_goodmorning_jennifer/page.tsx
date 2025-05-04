"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000)
    
    return () => clearInterval(timer)
  }, [])
  
  // Format the greeting based on time of day
  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return "Good morning"
    if (hour < 18) return "Good afternoon"
    return "Good evening"
  }

  return (
    <div className="flex text-black justify-center items-center min-h-screen bg-gray-100">
      {/* Phone frame */}
      <div className="relative w-full max-w-[375px] h-[812px] bg-[#f5f5f7] rounded-[40px] overflow-hidden shadow-xl">
        {/* Content container */}
        <div className="relative h-full flex flex-col p-6">
          {/* Top section with profile */}
          <div className="flex justify-between items-start pt-6">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                <Image 
                  src="/placeholder.svg?height=56&width=56" 
                  alt="Profile" 
                  width={56} 
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full border border-gray-300" style={{ 
                background: 'transparent',
                borderStyle: 'dashed',
                borderWidth: '1px',
                borderRadius: '50%',
                transform: 'scale(1.2)'
              }}></div>
            </div>
          </div>
          
          {/* Greeting section */}
          <div className="mt-16">
            <h1 className="text-5xl font-light tracking-tight">
              {getGreeting()}
            </h1>
            <h2 className="text-5xl font-bold tracking-tight mt-1">
              Jenifer
            </h2>
          </div>
          
          {/* Calendar section */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-lg"></div>
                <div className="absolute inset-[1px] bg-white rounded-[3px]"></div>
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-600">31</div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-green-500 to-blue-500 rounded-b-[3px]"></div>
              </div>
              <span className="text-2xl text-gray-600 font-normal">Calendar</span>
            </div>
            
            {/* Time slots */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-24 text-2xl font-medium">10:00</div>
                <div className="w-2 h-2 bg-black rounded-full ml-2"></div>
              </div>
              
              <div className="flex items-center">
                <div className="w-24 text-2xl font-medium">11:00</div>
                <div className="flex-1">
                  <div className="flex items-center bg-white rounded-full py-3 px-4 shadow-sm">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0">
                      <Image 
                        src="/placeholder.svg?height=32&width=32" 
                        alt="Nicholas" 
                        width={32} 
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xl font-medium">Meeting with Nicholas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom navigation bar */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black rounded-b-[40px]"></div>
      </div>
    </div>
  )
}
