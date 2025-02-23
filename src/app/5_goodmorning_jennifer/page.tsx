"use client"

import { useEffect, useState } from "react"
import { CalendarIcon, Cloud, Sun, Umbrella } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/ModeToggle"
import { MeetingCard } from "@/components/meeting-card"
import { Button } from "@/components/ui/button"

const meetings = [
  {
    time: "10:00",
    title: "Team Standup",
    attendee: {
      name: "Team",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    time: "11:00",
    title: "Meeting with Nicholas",
    attendee: {
      name: "Nicholas",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
  {
    time: "14:00",
    title: "Product Review",
    attendee: {
      name: "Sarah",
      image: "/placeholder.svg?height=32&width=32",
    },
  },
]

export default function Home() {
  const [greeting, setGreeting] = useState("")
  const [weather, ] = useState<{
    temp: number
    condition: "sunny" | "cloudy" | "rainy"
  }>({ temp: 72, condition: "sunny" })

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  const WeatherIcon = {
    sunny: Sun,
    cloudy: Cloud,
    rainy: Umbrella,
  }[weather.condition]

  return (
    <div className="min-h-screen bg-background p-4 transition-colors">
      <div className="mx-auto max-w-2xl space-y-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 rounded-full ring-2 ring-primary ring-offset-2">
              <AvatarImage src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-4xl font-bold tracking-tight">{greeting} Jenifer</h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <WeatherIcon className="h-4 w-4" />
                <span>{weather.temp}°F</span>
              </div>
            </div>
          </div>
          <ModeToggle />
        </header>

        <Card>
          <CardHeader className="flex flex-row items-center gap-2">
            <CalendarIcon className="h-5 w-5" />
            <h2 className="text-xl font-semibold">Calendar</h2>
          </CardHeader>
          <CardContent className="grid gap-4">
            {meetings.map((meeting) => (
              <MeetingCard key={meeting.time} {...meeting} />
            ))}
            <Button className="w-full" variant="outline">
              + Add Meeting
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

