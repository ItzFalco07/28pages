"use client"

import { useState } from "react"
import { Search, Home, Menu } from "lucide-react"
import CalendarView from "./calendar-view"
import RestaurantView from "./restaurant-view"

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState("Personal")
  const [activeView, setActiveView] = useState("calendar") // "calendar" or "restaurant"

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      {/* Phone frame */}
      <div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] overflow-hidden shadow-2xl">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100"></div>

        {/* Content container */}
        <div className="relative h-full flex flex-col">
          {/* Category tabs */}
          <div className="flex justify-between px-4 pt-12 pb-4">
            {["Personal", "Family", "Business", "Entert"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full text-sm ${
                  activeTab === tab ? "bg-gray-800 text-white" : "bg-gray-200/80 text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main content area */}
          <div className="flex-1 overflow-auto">
            {activeView === "calendar" ? (
              <CalendarView onViewChange={() => setActiveView("restaurant")} />
            ) : (
              <RestaurantView onViewChange={() => setActiveView("calendar")} />
            )}
          </div>

          {/* Bottom input */}
          <div className="p-4 flex justify-center">
            <button className="flex items-center gap-2 bg-gray-200/80 text-gray-500 rounded-full px-6 py-3 w-full max-w-xs">
              <div className="w-6 h-6 rounded-full bg-pink-200"></div>
              <span>What you want to do?</span>
            </button>
          </div>

          {/* Navigation bar */}
          <div className="flex justify-between items-center px-12 py-4 border-t border-gray-200">
            <button onClick={()=> setActiveView("calendar")} className="p-2 rounded-full bg-gray-800 text-white">
              <Home size={20} />
            </button>
            <button onClick={()=> setActiveView("restaurant")} className="p-2">
              <Menu size={20} color="#888" />
            </button>
            <button className="p-2">
              <Search size={20} color="#888" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
