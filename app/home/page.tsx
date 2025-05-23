"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Phone, Shield, Sparkles, Star, Clock, BadgeCheck, ChevronRight, ChevronLeft, ThumbsUp, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [animatedStats, setAnimatedStats] = useState({
    clients: 0,
    cars: 0,
    experience: 0,
    satisfaction: 0
  })
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  
  const testimonials = [
    {
      name: "Alex Popescu",
      rating: 5,
      text: "Am folosit serviciile lor pentru detailing complet și sunt foarte mulțumit. Mașina arată ca nouă!",
      image: "/assets/testimonials/testimonial1.jpg",
      car: "BMW X5"
    },
    {
      name: "Maria Ionescu",
      rating: 5,
      text: "Echipa a făcut o treabă excelentă cu spălarea interioară. Recomand cu încredere!",
      image: "/assets/testimonials/testimonial2.jpg",
      car: "Audi A4"
    },
    {
      name: "Dan Mureșan",
      rating: 4,
      text: "Servicii rapide și profesionale. Cu siguranță voi reveni pentru următoarea spălare.",
      image: "/assets/testimonials/testimonial3.jpg",
      car: "Volkswagen Golf"
    }
  ]
  
  const finalStats = {
    clients: 5000,
    cars: 20000, 
    experience: 15,
    satisfaction: 99
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section")
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect()
        const isInViewport = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0
        setIsStatsVisible(isInViewport)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  useEffect(() => {
    if (isStatsVisible) {
      const interval = setInterval(() => {
        setAnimatedStats(prev => ({
          clients: Math.min(prev.clients + 50, finalStats.clients),
          cars: Math.min(prev.cars + 200, finalStats.cars),
          experience: Math.min(prev.experience + 1, finalStats.experience),
          satisfaction: Math.min(prev.satisfaction + 1, finalStats.satisfaction)
        }))
      }, 30)
      
      return () => clearInterval(interval)
    }
  }, [isStatsVisible])
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }
  
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="video-container absolute inset-0 w-full h-full">
          <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-full h-full object-fill z-0">
            <source src="/assets/videos/car-wash-video.mp4" type="video/mp4" />
          </video>
          <Image 
            src="/assets/images/car-wash-fallback.jpg" 
            alt="Car Wash Background" 
            fill 
            className="object-cover z-[-1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 z-10"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-[1]"></div>
        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="animate-fadeIn">
            <div className="animate-explode mb-4 -mt-12">
              <Image 
                src="/assets/icons/icon.ico" 
                width={200}
                height={200} 
                alt="Sparkle Car Wash Logo" 
                className="mx-auto"
              />
            </div>
            <Badge variant="outline" className="text-white border-white/40 px-4 py-1 mb-4 text-sm backdrop-blur-sm">
              Spălătorie și Detailing Auto Premium în Timișoara
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slideUp">
              Perfecțiune Auto la <span className="text-primary">Fiecare Spălare</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl animate-slideUp animation-delay-200">
              Redescoperă strălucirea mașinii tale cu cele mai avansate servicii de îngrijire auto
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slideUp animation-delay-300">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg group transition-all duration-300">
              <Link href="/booking" className="flex items-center gap-2">
                Programează-te Acum 
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform"/>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 font-semibold px-8 py-6 text-lg"
            >
              <Link href="/services">Serviciile Noastre</Link>
            </Button>
          </div>
          
          <div className="flex gap-8 mt-12 animate-slideUp animation-delay-500">
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-primary h-6 w-6" />
              <span className="text-white font-medium">Calitate Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-primary h-6 w-6" />
              <span className="text-white font-medium">Servicii Complete</span>
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="text-primary h-6 w-6" />
              <span className="text-white font-medium">Satisfacție Garantată</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats-section" className="py-16 bg-primary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.clients.toLocaleString()}+</div>
              <p className="text-white/70">Clienți Mulțumiți</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.cars.toLocaleString()}+</div>
              <p className="text-white/70">Mașini Spălate</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.experience}+</div>
              <p className="text-white/70">Ani Experiență</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{animatedStats.satisfaction}%</div>
              <p className="text-white/70">Satisfacție</p>
            </div>
          </div>
        </div>
      </section>

      {/* Add more sections from the original home page as needed */}
    </div>
  )
} 