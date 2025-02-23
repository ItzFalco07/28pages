"use client"
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { motion } from "framer-motion";
import { Sun, Moon, Mic, Clock, Search } from "lucide-react";
import { useTheme } from "next-themes";

const fakeWeatherData = {
  today: { temp: 25, condition: "Sunny" },
  week: [
    { day: "Mon", temp: 22, condition: "Cloudy" },
    { day: "Tue", temp: 24, condition: "Rainy" },
    { day: "Wed", temp: 26, condition: "Sunny" },
    { day: "Thu", temp: 23, condition: "Windy" },
    { day: "Fri", temp: 25, condition: "Sunny" },
    { day: "Sat", temp: 21, condition: "Stormy" },
    { day: "Sun", temp: 27, condition: "Clear" },
  ],
};

export default function WeatherApp() {
  const { theme, setTheme } = useTheme();
  const [isHolding, setIsHolding] = useState(false);
  const [location, setLocation] = useState("New York");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-6 max-w-xl mx-auto">
      <div className="absolute top-4 right-4">
        <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
      
      <div className="w-full flex items-center space-x-2 mb-4">
        <Input placeholder="Search location..." value={location} onChange={(e) => setLocation(e.target.value)} />
        <Button><Search size={20} /></Button>
      </div>

      <Card className="p-6 w-full text-center space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sun className="text-yellow-500" size={24} />
            <span className="text-lg font-medium">{fakeWeatherData.today.temp}°C</span>
          </div>
          <Clock className="text-gray-500" size={24} />
        </div>
        <h1 className="text-2xl font-bold">Hey Jane, Welcome back!</h1>
      </Card>

      <Tabs defaultValue="today" className="w-full mt-6">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Last 7 Days</TabsTrigger>
        </TabsList>
        <TabsContent value="today" className="p-4">
          <p className="text-lg">Condition: {fakeWeatherData.today.condition}</p>
        </TabsContent>
        <TabsContent value="week" className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Day</TableHead>
                <TableHead>Temperature</TableHead>
                <TableHead>Condition</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {fakeWeatherData.week.map((day, index) => (
                <TableRow key={index}>
                  <TableCell>{day.day}</TableCell>
                  <TableCell>{day.temp}°C</TableCell>
                  <TableCell>{day.condition}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>

      <motion.div
        className="mt-10 relative"
        animate={{ scale: isHolding ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.button
          onMouseDown={() => setIsHolding(true)}
          onMouseUp={() => setIsHolding(false)}
          onMouseLeave={() => setIsHolding(false)}
          className="relative flex items-center justify-center w-32 h-32 bg-primary text-primary-foreground rounded-full shadow-lg"
        >
          <Mic size={32} />
        </motion.button>
        {isHolding && (
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 0.5, scale: 1.5 }}
            exit={{ opacity: 0, scale: 1 }}
            className="absolute inset-0 bg-primary opacity-50 rounded-full blur-lg"
          />
        )}
      </motion.div>
    </div>
  );
}
