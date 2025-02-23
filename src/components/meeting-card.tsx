import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface MeetingCardProps {
  time: string
  title: string
  attendee: {
    name: string
    image?: string
  }
}

export function MeetingCard({ time, title, attendee }: MeetingCardProps) {
  return (
    <Card className="w-full transition-all hover:shadow-md">
      <CardContent className="flex items-center gap-4 p-4">
        <time className="text-sm font-medium text-muted-foreground">{time}</time>
        <div className="flex flex-1 items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={attendee.image} />
            <AvatarFallback>{attendee.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-medium">{title}</span>
        </div>
      </CardContent>
    </Card>
  )
}

