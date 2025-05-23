import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  rating: number
  testimonial: string
  date: string
  imageSrc: string
}

export default function TestimonialCard({ name, rating, testimonial, date, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                if (i < Math.floor(rating)) {
                  return <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                  return <StarHalf key={i} className="h-4 w-4 fill-primary text-primary" />
                } else {
                  return <Star key={i} className="h-4 w-4 text-muted-foreground" />
                }
              })}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mb-3">"{testimonial}"</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}
