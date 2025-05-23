"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Phone, Shield, Sparkles, Star, Clock, BadgeCheck, ChevronRight, ChevronLeft, ThumbsUp, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export default function Home() {
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
          <video autoPlay playsInline loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Avantaje</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De Ce Să Ne Alegi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Suntem dedicați să oferim servicii de spălare auto de cea mai înaltă calitate, cu atenție la detalii și satisfacția completă a clienților
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Calitate Premium</h3>
                <p className="text-muted-foreground">
                  Folosim exclusiv produse premium și tehnici avansate pentru a ne asigura că mașina ta arată și se simte impecabil după fiecare vizită.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Satisfacție Garantată</h3>
                <p className="text-muted-foreground">
                  Satisfacția ta este prioritatea noastră. Dacă nu ești complet mulțumit de serviciul nostru, revenim gratuit pentru a remedia situația.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <CardContent className="pt-6 flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Programare Convenabilă</h3>
                <p className="text-muted-foreground">
                  Sistem modern de programare online pentru a-ți rezerva vizita la momentul convenabil pentru tine, fără timpi de așteptare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div>
              <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Servicii</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
              <p className="text-muted-foreground max-w-2xl">Explorează gama noastră completă de servicii de spălare și detailing auto de calitate înaltă</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
              <Button variant="outline" className="text-primary border-primary font-medium group">
                <Link href="/services" className="flex items-center">
                  Vezi Toate Serviciile <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="text-primary border-primary font-medium group">
                <Link href="/abonamente" className="flex items-center">
                  Planuri de Abonament <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Spălare Simplă"
              price="49,99 Lei"
              description="Spălare exterioară, curățarea roților și aspirare interioară de bază."
              features={["Spălare Exterioară", "Curățarea Roților", "Aspirare Interioară", "Curățarea Geamurilor"]}
              imageSrc="/assets/images/car-wash-fallback.jpg"
            />
            <ServiceCard
              title="Spălare Premium"
              price="89,99 Lei"
              description="Curățare completă exterioară și interioară cu protecție de ceară."
              features={["Tot ce include Spălarea Simplă", "Ceară Aplicată Manual", "Lustruire Anvelope", "Detailing Interior", "Tratament Bord"]}
              imageSrc="/assets/images/car-wash-fallback.jpg"
              featured={true}
            />
            <ServiceCard
              title="Detailing Complet"
              price="249,99 Lei"
              description="Pachet complet de detailing pentru perfecționiști."
              features={[
                "Tot ce include Premium",
                "Tratament cu Argilă",
                "Corectare Vopsea",
                "Condiționare Piele",
                "Curățare Compartiment Motor",
              ]}
              imageSrc="/assets/images/car-wash-fallback.jpg"
            />
          </div>
        </div>
      </section>

      {/* Înainte și După Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Rezultate</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Înainte și După</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vezi transformarea spectaculoasă pe care o putem face pentru mașina ta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-[300px] md:h-[400px]">
                <Image 
                  src="/assets/images/beforeafter.jpg" 
                  alt="Detailing Exterior" 
                  fill 
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Detailing Exterior</h3>
                  <Badge className="bg-primary text-white">Înainte și După</Badge>
                </div>
                <p className="text-white/90 mt-2">Transformăm mașina ta în bijuterie strălucitoare</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <div className="relative h-[300px] md:h-[400px]">
                <Image 
                  src="/assets/images/beforeafter.jpg" 
                  alt="Detailing Interior" 
                  fill 
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Detailing Interior</h3>
                  <Badge className="bg-primary text-white">Înainte și După</Badge>
                </div>
                <p className="text-white/90 mt-2">Interior curat ca nou după serviciile noastre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Testimoniale</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Peste 5000 de clienți mulțumiți de serviciile noastre de spălătorie și detailing auto
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4">
                    <Card className="border-none shadow-lg">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <Image 
                              src={testimonial.image || "/placeholder-avatar.jpg"} 
                              alt={testimonial.name} 
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-muted-foreground text-sm">{testimonial.car}</p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <div key={i} className="relative w-4 h-4 mr-1">
                                  <Image
                                    src="/assets/images/car-wash-fallback.jpg"
                                    alt="Star rating"
                                    fill
                                    className={`object-cover rounded-full ${i < testimonial.rating ? "opacity-100" : "opacity-30"}`}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-lg italic">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hover:bg-gray-100 z-10 md:-translate-x-6"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white shadow-md hover:bg-gray-100 z-10 md:translate-x-6"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    idx === currentTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentTestimonial(idx)}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="ghost" className="text-primary">
              <Link href="/testimonials" className="flex items-center">
                Vezi Toate Testimonialele <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Locație</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vizitează-ne</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer">
                  <MapPin className="h-6 w-6 text-primary mr-4 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg">Adresă</h3>
                    <p className="text-muted-foreground">Strada Spalării 123, Timișoara, România</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer">
                  <Phone className="h-6 w-6 text-primary mr-4 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p className="text-muted-foreground">0712 345 678</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer">
                  <Mail className="h-6 w-6 text-primary mr-4 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-muted-foreground">contact@sparklecarwash.ro</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 p-3 rounded-lg transition-colors cursor-pointer">
                  <Clock className="h-6 w-6 text-primary mr-4 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg">Program</h3>
                    <p className="text-muted-foreground">Luni - Sâmbătă: 8:00 - 19:00</p>
                    <p className="text-muted-foreground">Duminică: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <Link href="/contact" className="flex items-center gap-2">
                  Contactează-ne <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="h-[450px] relative rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9479192974144!2d21.226537811485483!3d45.75509092123861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610655bf%3A0xfd8e52808f58034!2sTimisoara!5e0!3m2!1sen!2sro!4v1653308837264!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Hartă locație"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/assets/images/homebanner.jpg" 
            alt="Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ești Gata Să Faci Mașina Ta Să Strălucească?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
            Programează-te astăzi și experimentează diferența îngrijirii auto profesionale
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
              <Link href="/booking" className="flex items-center gap-2">
                Programează-te Acum <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/abonamente">Planuri de Abonament</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-6">
            <div className="flex items-center">
              <ThumbsUp className="text-white mr-2 h-5 w-5" />
              <span>Servicii de calitate</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="flex items-center">
              <Star className="text-white mr-2 h-5 w-5" />
              <span>Recenzii excelente</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="flex items-center">
              <Shield className="text-white mr-2 h-5 w-5" />
              <span>Satisfacție garantată</span>
            </div>
          </div>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  price: string
  description: string
  features: string[]
  imageSrc: string
  featured?: boolean
}

function ServiceCard({ title, price, description, features, imageSrc, featured = false }: ServiceCardProps) {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group",
      featured ? "border-primary shadow-md ring-1 ring-primary relative" : "border shadow"
    )}>
      <div className="relative h-48">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        {featured && (
          <div className="absolute top-0 right-0 bg-primary text-white py-1 px-3 text-xs font-medium">
            Recomandat
          </div>
        )}
      </div>
      <CardContent className="p-6 relative z-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-2xl font-bold text-primary mt-2">{price}</div>
        <p className="text-muted-foreground my-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="w-full mt-4 group">
          <Link href="/booking" className="flex items-center justify-center z-20 relative">
            <span className="flex items-center gap-2">
              Programează Acest Serviciu
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
