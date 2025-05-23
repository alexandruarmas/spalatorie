import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ServiceCardProps {
  title: string
  price: string
  description: string
  features: string[]
  imageSrc: string
  featured?: boolean
}

export default function ServiceCard({
  title,
  price,
  description,
  features,
  imageSrc,
  featured = false,
}: ServiceCardProps) {
  return (
    <Card className={`overflow-hidden ${featured ? "border-primary shadow-lg ring-1 ring-primary" : "border shadow"}`}>
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {featured && <Badge className="absolute top-2 right-2 bg-primary">Popular</Badge>}
      </div>
      <CardHeader className="pb-0">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-2xl font-bold text-primary">{price}</div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-muted-foreground mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href="/booking">Book This Service</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
