import Image from "next/image"
import { Check } from "lucide-react"

interface RestaurantViewProps {
  onViewChange: () => void
}

export default function RestaurantView({ onViewChange }: RestaurantViewProps) {
  return (
    <div className="px-4 pb-4">
      {/* Restaurant image */}
      <div className="rounded-3xl overflow-hidden mb-6">
        <Image
          src="/placeholder.svg?height=200&width=350"
          alt="Restaurant interior"
          width={350}
          height={200}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Restaurant details */}
      <div className="bg-white/70 rounded-3xl p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Person 1" width={32} height={32} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
              <Image src="/placeholder.svg?height=32&width=32" alt="Person 2" width={32} height={32} />
            </div>
          </div>
          <div>
            <div className="font-medium">You and Mary</div>
            <div className="text-xs text-gray-500">Guests</div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-1">Ambleside Restaurant</h2>
        <div className="text-gray-500 text-sm mb-2">$$$$ · American, American Contemporary</div>

        <div className="flex text-yellow-400 mb-4">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-300">★</span>
        </div>

        <div className="flex gap-2">
          <button onClick={onViewChange} className="flex items-center gap-2 bg-gray-100 text-gray-800 rounded-full px-4 py-2 flex-1">
            <Check size={16} className="text-blue-500" />
            Pierside Table
          </button>
          <button className="bg-white text-gray-800 rounded-full px-4 py-2 flex-1">Standard Table</button>
        </div>
      </div>

      {/* Date indicator */}
      <div className="bg-blue-100/70 rounded-3xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">Wed</span>
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
        <div className="text-sm text-gray-500">6 events today</div>
      </div>
    </div>
  )
}
