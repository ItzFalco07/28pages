"use client"

import { useState } from "react"
import { Mic } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function TapToSpeak() {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="min-h-[400px] w-full flex items-center justify-center bg-dot-pattern">
      <Card className="relative w-full max-w-md p-8 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-4">
          <button
            onPointerDown={() => setIsPressed(true)}
            onPointerUp={() => setIsPressed(false)}
            onPointerLeave={() => setIsPressed(false)}
            className={cn(
              "relative flex items-center justify-center w-24 h-24 transition-transform rounded-full",
              "bg-gradient-to-br from-primary/80 to-primary",
              "hover:scale-105 active:scale-95",
              "before:absolute before:inset-0 before:rounded-full",
              "before:bg-gradient-to-br before:from-primary/10 before:to-primary",
              "before:transition-all before:duration-500",
              isPressed && [
                "before:animate-pulse-fast",
                "before:opacity-50 before:blur-xl",
                "after:absolute after:inset-0 after:rounded-full",
                "after:bg-gradient-to-br after:from-primary/50 after:to-primary/50",
                "after:animate-pulse-slow after:blur-2xl",
              ],
            )}
          >
            <Mic className={cn("w-8 h-8 text-white dark:text-black !opacity-100 transition-transform", isPressed && "scale-90")} />
          </button>
          <p className="text-lg font-medium text-center text-muted-foreground">
            {isPressed ? "Listening..." : "Tap to speak"}
          </p>
        </div>

        {/* Ambient background glow */}
        <div
          className={cn(
            "absolute inset-0 transition-opacity duration-300",
            "bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10",
            !isPressed && "opacity-0",
          )}
        />
      </Card>
    </div>
  )
}

