"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Camera, Image as ImageIcon, Sparkles, ArrowRight, Clock, BadgeCheck, Star, Car } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function GalleryPage() {
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    setIsInView(true)
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/70 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image 
            src="/assets/images/car-wash-fallback.jpg" 
            alt="Galerie spălătorie auto" 
            fill 
            className="object-cover object-center" 
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,white)]"></div>
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="text-white border-white/40 px-4 py-1 mb-6 text-sm inline-flex items-center">
              <Camera className="mr-1 h-3 w-3" /> Galerie Foto
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-sm">
              Galeria Noastră de Rezultate
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Vezi rezultatele uimitoare ale serviciilor noastre profesionale de spălare și detailing auto
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <ImageIcon className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Imagini Reale</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Calitate Premium</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Rezultate Garantate</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <div className="container py-12 px-4 md:px-6 relative z-10 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-16">
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Explorează Galeria</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Portofoliul Nostru</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fotografii de înaltă calitate care arată transformarea vehiculelor prin serviciile noastre
            </p>
          </div>

          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 p-1 bg-muted/40 rounded-lg mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <ImageIcon className="h-4 w-4" />
                <span>Toate</span>
              </TabsTrigger>
              <TabsTrigger value="exterior" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Car className="h-4 w-4" />
                <span>Exterior</span>
              </TabsTrigger>
              <TabsTrigger value="interior" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Interior</span>
              </TabsTrigger>
              <TabsTrigger value="detailing" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Detailing</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GalleryItem
                  key={1}
                  imageSrc="/assets/gallery/lucas-clarysse-iu-cLlLPFcY-unsplash.jpg"
                  title="Spălare Exterioară Premium"
                  category="Exterior"
                />
                <GalleryItem
                  key={2}
                  imageSrc="/assets/gallery/brad-starkey-W5yX_dPokH4-unsplash.jpg"
                  title="Curățare Interioară Completă"
                  category="Interior"
                />
                <GalleryItem
                  key={3}
                  imageSrc="/assets/gallery/ali-hamza-tullah-Y8lB--0t4ZI-unsplash.jpg"
                  title="Protecție Profesională Vopsea"
                  category="Detailing"
                />
                <GalleryItem
                  key={4}
                  imageSrc="/assets/gallery/ethan-sexton-pLRXgwOefDo-unsplash.jpg"
                  title="Restaurare Faruri"
                  category="Detailing"
                />
                <GalleryItem
                  key={5}
                  imageSrc="/assets/gallery/zulfahmi-khani-9iH_6JO7Ufs-unsplash.jpg"
                  title="Curățare Compartiment Motor"
                  category="Detailing"
                />
                <GalleryItem
                  key={6}
                  imageSrc="/assets/gallery/zulfahmi-khani-VLGa7BAz0Qk-unsplash.jpg"
                  title="Eliminare Mirosuri"
                  category="Interior"
                />
                <GalleryItem
                  key={7}
                  imageSrc="/assets/gallery/lucas-clarysse-t1lSsl_nPCQ-unsplash.jpg"
                  title="Spălare Completă Sedan"
                  category="Exterior"
                />
                <GalleryItem
                  key={8}
                  imageSrc="/assets/gallery/lorenzo-hamers-OjToDRA8StA-unsplash.jpg"
                  title="Eliminare Zgârieturi"
                  category="Interior"
                />
                <GalleryItem
                  key={9}
                  imageSrc="/assets/gallery/erik-mclean-BxjZKXKC2JA-unsplash.jpg"
                  title="Detailing Complet SUV"
                  category="Exterior"
                />
              </div>
            </TabsContent>

            <TabsContent value="exterior" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GalleryItem
                  key={1}
                  imageSrc="/assets/gallery/lucas-clarysse-iu-cLlLPFcY-unsplash.jpg"
                  title="Spălare Exterioară Premium"
                  category="Exterior"
                />
                <GalleryItem
                  key={4}
                  imageSrc="/assets/gallery/lucas-clarysse-t1lSsl_nPCQ-unsplash.jpg"
                  title="Spălare Completă Sedan"
                  category="Exterior"
                />
                <GalleryItem
                  key={7}
                  imageSrc="/assets/gallery/erik-mclean-BxjZKXKC2JA-unsplash.jpg"
                  title="Detailing Complet SUV"
                  category="Exterior"
                />
              </div>
            </TabsContent>

            <TabsContent value="interior" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GalleryItem
                  key={2}
                  imageSrc="/assets/gallery/brad-starkey-W5yX_dPokH4-unsplash.jpg"
                  title="Curățare Interioară Completă"
                  category="Interior"
                />
                <GalleryItem
                  key={5}
                  imageSrc="/assets/gallery/zulfahmi-khani-VLGa7BAz0Qk-unsplash.jpg"
                  title="Eliminare Mirosuri"
                  category="Interior"
                />
                <GalleryItem
                  key={8}
                  imageSrc="/assets/gallery/lorenzo-hamers-OjToDRA8StA-unsplash.jpg"
                  title="Igienizare Completă"
                  category="Interior"
                />
              </div>
            </TabsContent>

            <TabsContent value="detailing" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GalleryItem
                  key={3}
                  imageSrc="/assets/gallery/ali-hamza-tullah-Y8lB--0t4ZI-unsplash.jpg"
                  title="Protecție Profesională Vopsea"
                  category="Detailing"
                />
                <GalleryItem
                  key={6}
                  imageSrc="/assets/gallery/ethan-sexton-pLRXgwOefDo-unsplash.jpg"
                  title="Restaurare Faruri"
                  category="Detailing"
                />
                <GalleryItem
                  key={9}
                  imageSrc="/assets/gallery/erik-mclean-BxjZKXKC2JA-unsplash.jpg"
                  title="Eliminare Zgârieturi"
                  category="Detailing"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mb-20">
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Transformări</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Înainte & După</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vezi transformările spectaculoase realizate de echipa noastră de profesioniști
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <BeforeAfterCard
              key={1}
              beforeSrc="/assets/images/car-wash-fallback.jpg"
              afterSrc="/assets/images/car-wash-fallback.jpg"
              title="Protecție Vopsea Premium"
              description="Transformare uimitoare cu serviciul nostru de protecție a vopselei pentru un luciu de durată"
            />
            <BeforeAfterCard
              key={2}
              beforeSrc="/assets/images/car-wash-fallback.jpg" 
              afterSrc="/assets/images/car-wash-fallback.jpg"
              title="Restaurare Faruri & Eliminare Zgârieturi"
              description="Combinație de servicii pentru a readuce mașina la aspectul de showroom"
            />
            <BeforeAfterCard
              key={3}
              beforeSrc="/assets/images/car-wash-fallback.jpg"
              afterSrc="/assets/images/car-wash-fallback.jpg"
              title="Curățare Completă"
              description="Servicii complete de curățare a motorului și igienizare a interiorului"
            />
          </div>
        </div>

        <div className="text-center mt-16 mb-20 max-w-3xl mx-auto relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-foreground/20 to-transparent rounded-3xl blur-xl opacity-30"></div>
          <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Programează-te</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vrei Rezultate Similare?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Programează-te astăzi și experimentează diferența îngrijirii auto profesionale
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-md font-medium rounded-xl group" asChild>
              <Link href="/booking" className="inline-flex items-center">
                Programează-te Acum
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-md font-medium rounded-xl border-primary/30 hover:border-primary group" asChild>
              <Link href="/services" className="inline-flex items-center">
                Vezi Serviciile Noastre
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />  
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

interface GalleryItemProps {
  imageSrc: string
  title: string
  category: string
}

function GalleryItem({ imageSrc, title, category }: GalleryItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-square w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className="object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100 flex flex-col justify-end p-6">
        <h3 className="text-white font-semibold text-lg transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{title}</h3>
        <div className="flex items-center mt-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <Badge className="bg-primary/80 text-white hover:bg-primary">{category}</Badge>
          <Button variant="link" size="sm" className="text-white ml-auto p-0 h-auto" asChild>
            <Link href="/booking">
              <span className="flex items-center gap-1 text-sm">
                Programează
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

interface BeforeAfterCardProps {
  beforeSrc: string
  afterSrc: string
  title: string
  description: string
}

function BeforeAfterCard({ beforeSrc, afterSrc, title, description }: BeforeAfterCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background shadow-md hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-2 gap-3 p-3">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
          <Image
            src={beforeSrc || "/placeholder.svg"}
            alt={`Înainte - ${title}`}
            width={600}
            height={400}
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
          <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-3 py-1.5 rounded-full font-medium">Înainte</div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group">
          <Image
            src={afterSrc || "/placeholder.svg"}
            alt={`După - ${title}`}
            width={600}
            height={400}
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80"></div>
          <div className="absolute bottom-3 left-3 bg-primary text-white text-xs px-3 py-1.5 rounded-full font-medium">După</div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="ghost" size="sm" className="mt-2 text-primary p-0 h-auto hover:bg-transparent hover:text-primary/80" asChild>
          <Link href="/booking" className="flex items-center gap-1 text-sm font-medium">
            Vreau o transformare similară
            <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
