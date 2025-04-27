"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Phone, ArrowUpRight, Camera, MoreHorizontal, HomeIcon, MapPin, Video } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [activeTab, setActiveTab] = useState("current")

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Phone Frame */}
      <div className="relative max-w-[375px] w-full h-[780px] rounded-[40px] overflow-hidden border-8 border-gray-800 shadow-2xl">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-8 px-6 flex items-center justify-between z-20 text-white">
          <div className="text-sm font-medium">19:23</div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 3C16.97 3 21 7.03 21 12C21 16.97 16.97 21 12 21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="2 4"
                />
              </svg>
            </div>
            <div className="w-4 h-4">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 15L12 9L18 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="w-6 h-3 rounded-sm border border-white relative">
              <div className="absolute top-0.5 bottom-0.5 left-0.5 right-1 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f] to-[#2d6a88] opacity-90"></div>
          <Image
            src="/placeholder.svg?height=780&width=375"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col pt-10 pb-16">
          {/* Search Bar */}
          <div className="px-4 mb-6">
            <div className="bg-[#1e3a5f]/80 backdrop-blur-md rounded-full flex items-center px-4 py-2.5">
              <div className="mr-2">
                <svg className="w-6 h-6 text-gray-300" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21l-6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-gray-400 text-sm flex-1">Search</span>
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-1 h-2 rounded-full bg-green-400 absolute ml-1 mt-1"></div>
                <div className="w-1 h-2 rounded-full bg-red-400 absolute ml-1 -mt-1"></div>
              </div>
            </div>
          </div>

          {/* Weather Widgets */}
          <div className="px-4 mb-6 flex items-center justify-between">
            {/* Temperature Circle */}
            <div className="relative w-20 h-20 rounded-full border border-white/30 flex items-center justify-center">
              <div className="absolute top-0 left-0 w-1 h-1 bg-white rounded-full transform -translate-x-0.5 -translate-y-0.5"></div>
              <div className="text-white">
                <span className="text-3xl font-light">19</span>
                <span className="text-xs align-top">12</span>
              </div>
            </div>

            {/* Weather Icon */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-16 h-12">
                <div className="absolute w-12 h-6 bg-white/80 rounded-full top-0 left-0"></div>
                <div className="absolute w-6 h-4 bg-white/60 rounded-full top-1 left-8"></div>
                <div className="absolute top-6 left-4">
                  <div className="w-0.5 h-2 bg-white/60 transform -rotate-15"></div>
                  <div className="w-0.5 h-2 bg-white/60 transform rotate-15 ml-2 -mt-2"></div>
                  <div className="w-0.5 h-2 bg-white/60 transform -rotate-15 ml-4 -mt-2"></div>
                </div>
              </div>
            </div>

            {/* Temperature Box */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 w-20 h-16 flex flex-col items-center justify-center">
              <div className="text-white">
                <span className="text-3xl font-light">26</span>
                <span className="text-xs align-top">°</span>
              </div>
              <div className="text-white/80 text-xs">Feels like 22°</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-4 mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-white/80 text-sm">{activeTab === "current" ? "Current" : "Past"}</span>
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-xs text-white">{activeTab === "current" ? "6" : "4"}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <HomeIcon className="w-4 h-4 text-white" />
              </button>
              <button className="px-4 py-1 rounded-full bg-white text-gray-800 text-sm font-medium">Home</button>
            </div>
          </div>

          {/* Main Content Area */}
          <Tabs defaultValue="current" className="flex-1" onValueChange={setActiveTab}>
            <TabsContent value="current" className="mt-0 h-full">
              <div className="px-4 space-y-3">
                {/* Zoom Meeting Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="text-white/80 text-sm">Zoom Meeting</div>
                  <div className="text-white font-medium">Building Bridges for success</div>
                  <div className="flex items-center justify-between mt-1">
                    <div></div>
                    <div className="flex items-center">
                      <span className="text-white/70 text-xs">in 20 min</span>
                      <Avatar className="w-6 h-6 ml-2 border border-white/20">
                        <AvatarImage src="/placeholder.svg?height=24&width=24" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <span className="text-white/70 text-xs ml-1">+8</span>
                    </div>
                  </div>
                </div>

                {/* Lin Message Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-medium">Lin</div>
                    <Badge className="bg-red-500 text-white h-5 w-5 rounded-full flex items-center justify-center p-0">
                      4
                    </Badge>
                  </div>
                  <div className="mt-2 flex">
                    <Avatar className="w-8 h-8 mr-2">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Lin" />
                      <AvatarFallback>L</AvatarFallback>
                    </Avatar>
                    <div className="bg-white rounded-2xl rounded-tl-none p-2 max-w-[70%]">
                      <p className="text-xs text-gray-800">I would love to learn more about it.</p>
                    </div>
                  </div>
                  <div className="text-right mt-1">
                    <span className="text-white/50 text-xs">21:53</span>
                  </div>
                </div>

                {/* Rich Table Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="text-white/80 text-sm">How long does it take</div>
                  <div className="text-white text-sm">Jerry to get here?</div>
                  <div className="text-white font-medium">Rich Table</div>
                </div>

                {/* Driving Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-white font-medium">Driving</div>
                    <div className="text-white/80 text-sm">25 min</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="meeting" className="mt-0 h-full">
              <div className="px-4 h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 h-[90%] flex flex-col">
                  <div className="text-white/80 text-sm">Zoom Meeting</div>
                  <div className="text-white text-lg font-medium">Building Bridges for Success</div>
                  <div className="text-white/70 text-sm">June 12 at 11:00</div>

                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <Avatar key={i} className="w-12 h-12 border-2 border-white/20">
                        <AvatarImage src={`/placeholder.svg?height=48&width=48&text=${i}`} alt={`Team member ${i}`} />
                        <AvatarFallback>TM</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>

                  <div className="mt-4 text-white/80 text-sm">
                    <div>Team members:</div>
                    <div>Anna K., Michelle M., John D., Martha F.,</div>
                    <div>Britney S., Joanna S., Tom H.</div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-full py-6">
                      <Video className="w-5 h-5 mr-2" />
                      Join now
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="past" className="mt-0 h-full">
              <div className="px-4 space-y-3">
                <div className="flex justify-end mb-2">
                  <Button variant="ghost" className="bg-white/20 text-white text-sm rounded-full px-4">
                    All
                  </Button>
                </div>

                {/* Amazon Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="text-white/80 text-sm">Amazon</div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-medium">Delivery in</div>
                      <div className="text-white text-sm">2 days</div>
                    </div>
                    <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-3 bg-amber-700 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Reservation Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="text-white/80 text-sm">Reservation</div>
                  <div className="text-white text-sm">2 persons</div>
                  <div className="text-white font-medium">Rich Table</div>
                  <div className="text-white/80 text-sm">Today at 7:30 pm</div>

                  <div className="flex gap-2 mt-2">
                    <div className="bg-pink-500 rounded-xl p-1 w-10 text-center">
                      <div className="text-white text-xs">Apr</div>
                      <div className="text-white font-bold">15</div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-2 w-10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Agent Call Card */}
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3">
                  <div className="text-white/80 text-sm">Agent Call</div>
                  <div className="text-white font-medium">Jim Mathews</div>

                  <div className="flex gap-2 mt-2">
                    <div className="bg-white/20 rounded-xl p-2 w-10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path d="M7 12H17M12 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="bg-red-500 rounded-xl p-2 w-10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Press to Talk Button */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center">
            <div className="text-white/60 text-sm">Press to talk</div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-around px-4">
            <button className="w-12 h-12 rounded-full bg-gray-700/80 flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-700/80 flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-700/80 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-700/80 flex items-center justify-center">
              <Camera className="w-5 h-5 text-white" />
            </button>
            <button className="w-12 h-12 rounded-full bg-gray-700/80 flex items-center justify-center">
              <MoreHorizontal className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
