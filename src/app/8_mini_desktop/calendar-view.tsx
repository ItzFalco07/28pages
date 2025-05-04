"use client"

import Image from "next/image"
import { Video } from "lucide-react"

interface CalendarViewProps {
  onViewChange: () => void
}

export default function CalendarView({ onViewChange }: CalendarViewProps) {
  // Days of the week
  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa"]
  const dates = [16, 17, 18, 19, 20, 21]

  return (
    <div className="px-4 pb-4">
      {/* Week view */}
      <div className="mb-6">
        <div className="grid grid-cols-6 gap-2 text-center mb-2">
          {days.map((day, index) => (
            <div key={index} className="text-sm text-gray-400">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-6 gap-2 text-center">
          {dates.map((date, index) => (
            <div
              key={index}
              className={`py-3 text-xl rounded-full ${date === 17 ? "bg-gray-200 font-semibold" : "text-gray-400"}`}
            >
              {date}
              {date === 18 && (
                <div className="flex justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
              )}
              {date === 19 && (
                <div className="flex justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Meeting card */}
      <div className="bg-white/70 rounded-3xl p-4 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="Person 1" width={32} height={32} />
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="Person 2" width={32} height={32} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="Person 3" width={32} height={32} />
              </div>
            </div>
            <span className="text-gray-500 text-sm ml-1">+8</span>
          </div>
          <button className="flex items-center gap-2 bg-blue-100 text-blue-600 font-medium rounded-full px-4 py-2">
            Join Zoom <Video size={16} />
          </button>
        </div>

        <div className="mb-4">
          <div className="flex text-black items-baseline gap-2">
            <div className="text-3xl font-semibold">12:20</div>
            <div className="text-lg font-semibold">AI Phone UX</div>
            <div className="ml-auto text-sm bg-gray-100 px-2 py-1 rounded-full">in 53m</div>
          </div>
          <div className="w-8 h-1 bg-blue-500 rounded-full mt-1 mb-2"></div>
          <p className="text-gray-500 text-sm">
            Relationships/culture building, cross-team visibility of progress, make timely adjustments.
          </p>
        </div>

        <button className="flex items-center gap-2 w-full bg-pink-100 text-gray-700 rounded-full px-4 py-3">
          <div className="w-4 h-4 rounded-full bg-pink-300"></div>
          Create presentation
        </button>
      </div>

      {/* Date and events */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="text-2xl text-black font-bold">Wed</span>
            <span className="text-2xl text-gray-500 ml-2">March 9</span>
          </div>
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-gray-300 -mr-1 overflow-hidden">
              <Image src="/placeholder.svg?height=24&width=24" alt="Person 1" width={24} height={24} />
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden">
              <Image src="/placeholder.svg?height=24&width=24" alt="Person 2" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-4">6 events today</div>

        {/* Events list */}
        <div className="bg-white/70 rounded-3xl p-4">
          <button className="flex items-center gap-3 mb-3 w-full" onClick={onViewChange}>
            <div className="bg-blue-400 text-white rounded-full px-3 py-1 text-sm">12 pm</div>
            <div className="text-black">Lunch plan</div>
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-gray-800 text-white rounded-full px-3 py-1 text-sm">3 pm</div>
            <div className="text-black">Project meeting</div>
          </div>
        </div>
      </div>
    </div>
  )
}
