"use client"

import { useState } from "react"
import { Bell, Search } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Activity {
  id: number
  title: string
  description: string
  images: string[]
  price?: string
  rating?: number
  location?: string
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Book a flight for me",
    description: "9:20 - 11:45",
    images: ["https://images.unsplash.com/photo-1611043714658-af3e56bc5299?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: "",
  },
  {
    id: 2,
    title: "Find a beach with temperature of 75 degrees",
    description: "Hilton Garden",
    images: [
      "https://images.unsplash.com/photo-1606768666853-403c90a981ad?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1611043714658-af3e56bc5299?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-23%205.53.58%20PM-BrWRa39fcYmawvK3TpeBO17XIi1PPe.png",
    ],
    price: "$120 per night",
    rating: 5,
    location: "Honolulu, HI",
  },
  {
    id: 3,
    title: "How to protect yourself from the sun on the beach?",
    description: "Neutrogena Ultra Sheer Dry",
    images: ["https://images.unsplash.com/photo-1564613469739-c78f970f9c17?q=80&w=1447&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: "$15.99",
    rating: 4,
  },
  {
    id: 4,
    title: "What to do on the beach?",
    description: "Beach activities guide",
    images: ["https://images.unsplash.com/photo-1534214526114-0ea4d47b04f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    price: "",
  },
]

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredActivities = activities.filter(
    (activity) =>
      activity.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-md">
        <div className="flex justify-between items-center mb-6">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="relative">
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        <h1 className="text-2xl font-semibold mb-4">What would you like to do?</h1>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 w-full rounded-xl bg-secondary items-center"
            placeholder="I want to go to vacation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid gap-4">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden bg-secondary">
              <CardContent className="p-0">
                <div className="p-4">
                  <h3 className="font-medium mb-2">{activity.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{activity.description}</p>
                    {activity.rating && (
                      <div className="flex items-center">
                        <span className="text-sm mr-1">⭐</span>
                        <span className="text-sm text-gray-600">{activity.rating}</span>
                      </div>
                    )}
                  </div>
                </div>
                {activity.images.length > 0 && (
                  <div className="relative">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={activity.images[0] || "/placeholder.svg"}
                        alt={activity.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {activity.images.length > 1 && (
                      <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded-md text-sm">
                        +{activity.images.length - 1}
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              {activity.price && (
                <CardFooter className="flex justify-between items-center p-4">
                  <span className="text-sm text-gray-600">{activity.price}</span>
                  {activity.location && (
                    <Button variant="default" size="sm">
                      Book now
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

