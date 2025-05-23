import type { Metadata } from "next"
import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Bine Ați Venit - Sparkle Car Wash & Detailing",
  description: "Servicii profesionale de spălare și detailing auto pentru a face vehiculul tău să strălucească ca nou",
}

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
} 