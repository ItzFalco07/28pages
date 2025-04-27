"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, Bell, ChevronRight, Plus, Search } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function FinancialApp() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [activeTab, setActiveTab] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const tabs = [
    { id: "home", label: "Home" },
    { id: "assets", label: "Assets" },
    { id: "calendar", label: "Calendar" },
    { id: "clients", label: "Clients" },
  ]

  const recentActivity = [
    { id: 1, type: "Gold to Silver", amount: "5,404.82 EUR", date: "Yesterday" },
    { id: 2, type: "Mastercard to Silver", amount: "8,000.00 EUR", date: "Yesterday" },
    { id: 3, type: "Balance Top Up", amount: "5,404.82 EUR", date: "Monday, 5th of December" },
  ]

  const meetings = [
    { id: 1, title: "Meeting with Missy Cormac", time: "9:00 - 10:00" },
    { id: 2, title: "Meeting with Webbie Burma", time: "10:30 - 11:30" },
    { id: 3, title: "Contract signing with Sonic Abramham", time: "13:00 - 14:00" },
    { id: 4, title: "Delivery of Gold to Geraldly Sim", time: "15:00 - 16:00" },
  ]

  const clients = [
    { id: 1, name: "Webbie Burma", amount: "€4,320,000", change: "+7%" },
    { id: 2, name: "Missy Cormac", amount: "€3,200,000", change: "+3%" },
    { id: 3, name: "Sonic Abramham", amount: "€1,800,000", change: "+2%" },
    { id: 4, name: "Geraldly Sim", amount: "€980,000", change: "+0.5%" },
  ]

  return (
    <div className="h-[800px] max-w-[400px] border shadow-xl rounded-[40px] py-6 mx-auto bg-background text-foreground">
      <header className="flex justify-between items-center p-4 border-b">
        <Menu className="w-6 h-6" />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex items-center space-x-2">
          <Bell className="w-6 h-6" />
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Good morning, Robert Richards</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
          <TabsList className="grid w-full grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-sm">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {activeTab === "home" && (
          <>
            <Card className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">Total Assets</div>
                <Button variant="outline" size="sm">
                  View all
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">€800,500</div>
                <p className="text-xs text-muted-foreground">+€20,500 (2.05%)</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <h3 className="text-lg font-semibold">Recent Activity</h3>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[200px]">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex justify-between items-center mb-4">
                      <div>
                        <p className="font-medium">{activity.type}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{activity.amount}</p>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </>
        )}

        {activeTab === "assets" && (
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Assets Distribution</h3>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div>
                  <p className="font-medium">Gold</p>
                  <p className="text-2xl font-bold">€370,100.00</p>
                </div>
                <div>
                  <p className="font-medium">Silver</p>
                  <p className="text-2xl font-bold">€230,900.00</p>
                </div>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-full" style={{ width: "60%" }}></div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "calendar" && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-lg font-semibold">Today&apos;s Schedule</h3>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" /> Add Event
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                {meetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium">{meeting.title}</p>
                      <p className="text-sm text-muted-foreground">{meeting.time}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        )}

        {activeTab === "clients" && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <h3 className="text-lg font-semibold">Clients</h3>
              <Input type="search" placeholder="Search clients..." className="max-w-sm" />
            </CardHeader>
            <CardContent>
              {clients.map((client) => (
                <div key={client.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center">
                    <Avatar className="h-9 w-9 mr-2">
                      <AvatarFallback>{client.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{client.name}</p>
                      <p className="text-sm text-muted-foreground">{client.amount}</p>
                    </div>
                  </div>
                  <div className="text-green-500 font-medium">{client.change}</div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" /> Find new clients
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  )
}

