import { CalendarClock } from "lucide-react"

import { Button } from "@/components/ui/button"

interface PromotionBannerProps {
  title: string
  description: string
  code: string
  expiryDate: string
}

export default function PromotionBanner({ title, description, code, expiryDate }: PromotionBannerProps) {
  return (
    <section className="bg-primary/10 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-lg border border-primary/20 bg-background p-6 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarClock className="h-4 w-4" />
              <span>Expires: {expiryDate}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Use code:</span>
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                {code}
              </code>
            </div>
            <Button>Claim Offer</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
