"use client"

import { useState, useEffect } from "react"
import { Clock, Camera } from "lucide-react"

export default function Home() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      {/* Phone frame with hand effect */}
      <div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] overflow-hidden shadow-2xl">
        {/* Gradient background - carefully matched to the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-pink-100/40 to-orange-300/80"></div>

        {/* Light reflections and glow effects */}
        <div className="absolute top-[20%] right-[10%] w-[150px] h-[150px] bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[5%] w-[100px] h-[100px] bg-orange-300/30 rounded-full blur-3xl"></div>

        {/* Frosted glass effect overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>

        {/* Content container */}
        <div className="relative h-full flex flex-col">
          {/* Status bar */}
          <div className="flex justify-between items-center p-6 pt-10">
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <div className="w-5 h-5 rounded-full border-2 border-black/70"></div>
            </button>
            <div className="flex items-center gap-2">
              <div className="text-xs font-medium">●●●</div>
              <div className="w-5 h-3 border border-black/70 rounded-sm relative">
                <div className="absolute top-0.5 bottom-0.5 left-0.5 right-1 bg-black/70 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5">
                <div className="w-4 h-4 mr-1">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-500">
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19.8 4.2L18.4 5.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5.6 18.4L4.2 19.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M19.8 19.8L18.4 18.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M5.6 5.6L4.2 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">25°</span>
                <span className="text-xs ml-1 opacity-70">Sunny</span>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <Clock className="w-5 h-5 text-black/70" />
              </div>
            </div>

            <h1 className="text-2xl font-medium text-black/80">Hey Jane,</h1>
            <p className="text-xl text-black/60">Welcome back!</p>
          </div>

          {/* Bottom bar */}
          <div className="p-8 pb-12 flex justify-between items-center">
            <button className="flex items-center gap-2 bg-yellow-400/90 backdrop-blur-md rounded-full px-4 py-2.5">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-yellow-800">
                  <path
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15 9C15 7.9 14.1 7 13 7H11C9.9 7 9 7.9 9 9V15C9 16.1 9.9 17 11 17H13C14.1 17 15 16.1 15 15V9Z"
                    fill="currentColor"
                  />
                  <path
                    d="M7.5 14C6.7 14 6 13.3 6 12.5C6 11.7 6.7 11 7.5 11C8.3 11 9 11.7 9 12.5C9 13.3 8.3 14 7.5 14Z"
                    fill="currentColor"
                  />
                  <path
                    d="M16.5 14C15.7 14 15 13.3 15 12.5C15 11.7 15.7 11 16.5 11C17.3 11 18 11.7 18 12.5C18 13.3 17.3 14 16.5 14Z"
                    fill="currentColor"
                  />
                  <path d="M16 17L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 17L6 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-medium">Hold to speak</span>
            </button>

            <button className="w-10 h-10 rounded-full flex items-center justify-center">
              <Camera className="w-6 h-6 text-black/70" />
            </button>
          </div>
        </div>

        {/* Edge highlight effect */}
        <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/0 via-white/30 to-white/0"></div>
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-white/0 via-white/30 to-white/0"></div>
      </div>
    </div>
  )
}
