'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

export default function MobileDashboard() {
  const [selectedTab, setSelectedTab] = useState('family');

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-gray-200 to-gray-100">
      <div className="w-[375px] bg-white rounded-3xl p-4 shadow-lg relative">
        {/* Tabs */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-4">
          <TabsList className="grid grid-cols-4 rounded-full bg-gray-100 p-1">
            <TabsTrigger value="personal" className="rounded-full">Personal</TabsTrigger>
            <TabsTrigger value="family" className="rounded-full">Family</TabsTrigger>
            <TabsTrigger value="business" className="rounded-full">Business</TabsTrigger>
            <TabsTrigger value="entertainment" className="rounded-full">Enter</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Event Card */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="mb-4 bg-gray-50">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <Image src="/user-avatar.jpg" alt="Avatar" width={30} height={30} className="rounded-full" />
                <p className="text-sm font-medium">You and Mary</p>
              </div>
              <h2 className="text-lg font-semibold mt-2">Ambleside Restaurant</h2>
              <p className="text-xs text-gray-500">$$$$ · American, Contemporary</p>
              <div className="flex mt-2 space-x-2">
                <Button variant="outline" className="rounded-full">Pierside Table</Button>
                <Button variant="outline" className="rounded-full">Standard Table</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Schedule */}
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Wed March 9</h3>
          <p className="text-xs text-gray-500">6 events today</p>
          <div className="mt-2 bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between text-sm">
              <span className="text-blue-500">12 pm</span>
              <span>Lunch plan</span>
            </div>
            <div className="flex justify-between text-sm mt-2">
              <span className="text-black font-semibold">3 pm</span>
              <span>Project meeting</span>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Button className="rounded-full px-6 bg-gradient-to-r from-pink-400 to-purple-500 text-white">
            What you want to do?
          </Button>
        </div>
      </div>
    </div>
  );
}
