import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sparkle Car Wash & Detailing - Spălătorie Auto",
  description: "Servicii profesionale de spălare și detailing auto pentru a face vehiculul tău să strălucească ca nou",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro" suppressHydrationWarning className="light">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
