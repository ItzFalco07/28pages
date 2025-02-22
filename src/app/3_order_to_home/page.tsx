"use client"

import type React from "react"

import { useState } from "react"
import { Store, MapPin, ChevronRight, ShoppingBag } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

const stores = [
  {
    name: "Whole Foods",
    type: "Groceries",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Sprouts Farmers Market",
    type: "Groceries",
    image: "/placeholder.svg?height=50&width=50",
  },
  {
    name: "Smart & Final",
    type: "Groceries",
    image: "/placeholder.svg?height=50&width=50",
  },
]

const addresses = [
  "123 Main St, Los Angeles, CA 90012",
  "456 Broadway Ave, Los Angeles, CA 90015",
  "789 Sunset Blvd, Los Angeles, CA 90028",
]

export default function FoodDelivery() {
  const [step, setStep] = useState(1)
  const [orderText, setOrderText] = useState("")
  const [selectedAddress, setSelectedAddress] = useState("")
  const [selectedStore, setSelectedStore] = useState("")

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (orderText.toLowerCase().includes("order food")) {
      setStep(2)
    }
  }

  const handleAddressSelect = (address: string) => {
    setSelectedAddress(address)
    setStep(3)
  }

  const handleStoreSelect = (store: string) => {
    setSelectedStore(store)
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background p-4">
      <div className="max-w-md mx-auto space-y-4">
        {/* Step indicator */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((number) => (
            <div
              key={number}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                step >= number ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground",
              )}
            >
              {number}
            </div>
          ))}
        </div>

        {/* Step 1: Order Input */}
        {step === 1 && (
          <Card className="p-6">
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="order">What would you like to do?</Label>
                <Input
                  id="order"
                  placeholder="Type 'Order Food' to continue..."
                  value={orderText}
                  onChange={(e) => setOrderText(e.target.value)}
                  className="text-lg"
                />
              </div>
              <Button type="submit" className="w-full">
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        )}

        {/* Step 2: Address Selection */}
        {step === 2 && (
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-medium">
                <MapPin className="h-5 w-5 text-primary" />
                Select Delivery Address
              </div>
              <RadioGroup defaultValue={selectedAddress} className="space-y-3">
                {addresses.map((address) => (
                  <div
                    key={address}
                    className="flex items-center space-x-2 rounded-lg border p-4 cursor-pointer hover:bg-muted"
                    onClick={() => handleAddressSelect(address)}
                  >
                    <RadioGroupItem value={address} id={address} />
                    <Label htmlFor={address} className="flex-1 cursor-pointer">
                      {address}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </Card>
        )}

        {/* Step 3: Store Selection */}
        {step === 3 && (
          <Card className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-medium">
                <Store className="h-5 w-5 text-primary" />
                Select a Store
              </div>
              <div className="space-y-3">
                {stores.map((store) => (
                  <div
                    key={store.name}
                    className="flex items-center gap-4 p-4 rounded-lg border cursor-pointer hover:bg-muted"
                    onClick={() => handleStoreSelect(store.name)}
                  >
                    <img
                      src={store.image || "/placeholder.svg"}
                      alt={store.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{store.name}</h3>
                      <p className="text-sm text-muted-foreground">{store.type}</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Step 4: Order Confirmation */}
        {step === 4 && (
          <Card className="p-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-lg font-medium text-primary">
                <ShoppingBag className="h-6 w-6" />
                Order Confirmation
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Delivery Address</Label>
                  <p className="font-medium">{selectedAddress}</p>
                </div>

                <div className="space-y-2">
                  <Label className="text-muted-foreground">Selected Store</Label>
                  <p className="font-medium">{selectedStore}</p>
                </div>

                <div className="h-px bg-border" />

                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    Your order has been confirmed! You can now start adding items to your cart from {selectedStore}.
                  </p>
                </div>

                <Button className="w-full" size="lg">
                  Start Shopping
                  <ShoppingBag className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

