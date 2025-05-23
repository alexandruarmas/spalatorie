"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/services" },
    { name: "Abonamente", href: "/abonamente" },
    { name: "Galerie", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-14 w-14">
            <Image
              src="/assets/icons/icon.ico"
              alt="Logo Sparkle Car Wash"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-primary">Sparkle Car Wash</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            asChild 
            className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/booking">Programează-te</Link>
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" aria-label="Deschide Meniu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border">
              <div className="flex flex-col gap-6 py-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative h-11 w-11">
                    <Image
                      src="/assets/icons/icon.ico"
                      alt="Logo Sparkle Car Wash"
                      width={45}
                      height={45}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold text-primary">Sparkle Car Wash</span>
                </div>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button 
                  asChild 
                  className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href="/booking" onClick={() => setIsMenuOpen(false)}>
                    Programează-te
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
