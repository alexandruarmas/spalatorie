"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Shield, Star, Clock, ChevronRight, Car, Wrench, Sparkles, BadgeCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("basic")
  const [isInView, setIsInView] = useState(false)
  
  useEffect(() => {
    setIsInView(true)
  }, [])
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/80 to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image 
            src="/assets/images/car-wash-fallback.jpg"
            alt="Servicii spălătorie auto" 
            fill 
            className="object-cover object-center" 
            priority
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,white)]"></div>
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="text-white border-white/40 px-4 py-1 mb-6 text-sm inline-flex items-center">
              <Star className="mr-1 h-3 w-3" /> Servicii Premium
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-sm">
              Servicii de Înaltă Calitate pentru Mașina Ta
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              De la spălare de bază la detailing premium, oferim servicii complete pentru îngrijirea mașinii tale
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center mt-10">
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Calitate Premium</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Serviciu Rapid</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-white/20 p-2 rounded-full">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <span className="text-white">Garanție Satisfacție</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <div className="container py-12 px-4 md:px-6 relative z-10 -mt-8">
        <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 mb-16">
          <div className="text-center mb-10">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Explorează Serviciile</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferim o gamă de servicii profesionale de spălare și detailing auto pentru a menține vehiculul tău în cea mai bună stare
            </p>
          </div>

          <Tabs defaultValue="wash" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 p-1 bg-muted/40 rounded-lg mb-8">
              <TabsTrigger value="wash" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Car className="h-4 w-4" />
                <span>Spălare Auto</span>
              </TabsTrigger>
              <TabsTrigger value="detail" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>Detailing</span>
              </TabsTrigger>
              <TabsTrigger value="additional" className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm py-3 rounded-md flex items-center justify-center gap-2">
                <Wrench className="h-4 w-4" />
                <span>Servicii Adiționale</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="wash" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                  title="Spălare Simplă"
                  price="19,99 Lei"
                  description="O spălare exterioară completă pentru a îndepărta murdăria și praful"
                  features={["Spălare Manuală Exterioară", "Curățarea Roților", "Lustruire Anvelope", "Curățarea Geamurilor", "Aspirare de Bază"]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Car className="h-5 w-5" />}
                />

                <ServiceCard
                  title="Spălare Premium"
                  price="39,99 Lei"
                  description="Curățare completă exterioară și interioară cu protecție de ceară"
                  features={[
                    "Tot ce include Spălarea Simplă",
                    "Aspirare Interioară & Ștergere Praf",
                    "Curățare Bord & Consolă",
                    "Aplicare Ceară Manuală",
                    "Curățare Praguri Uși",
                    "Odorizant Auto",
                  ]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  featured={true}
                  icon={<Star className="h-5 w-5" />}
                />

                <ServiceCard
                  title="Spălare Lux"
                  price="59,99 Lei"
                  description="Serviciu premium cu atenție deosebită la detalii"
                  features={[
                    "Tot ce include Spălarea Premium",
                    "Condiționare Piele",
                    "Protecție Ceară Triplă",
                    "Șamponare Covorașe",
                    "Restaurare Faruri",
                    "Odorizant Premium",
                  ]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Sparkles className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="detail" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ServiceCard
                  title="Detailing Express"
                  price="69,99 Lei"
                  description="Serviciu de detailing rapid dar temeinic"
                  features={[
                    "Spălare și Uscare Manuală",
                    "Aspirare Interioară & Ștergere",
                    "Ceară Express",
                    "Curățare Anvelope & Jante",
                    "Curățare Geamuri",
                    "Odorizant Auto",
                  ]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Clock className="h-5 w-5" />}
                />

                <ServiceCard
                  title="Detailing Complet"
                  price="149,99 Lei"
                  description="Detailing complet interior și exterior"
                  features={[
                    "Spălare Completă Exterioară",
                    "Tratament cu Argilă",
                    "Ceară de Înaltă Calitate",
                    "Curățare Completă Interior",
                    "Șamponare Covorașe & Tapițerie",
                    "Condiționare Piele",
                    "Curățare Compartiment Motor",
                  ]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  featured={true}
                  icon={<Star className="h-5 w-5" />}
                />

                <ServiceCard
                  title="Detailing Ultimate"
                  price="249,99 Lei"
                  description="Maximul în îngrijire și protecție auto"
                  features={[
                    "Tot ce include Detailing Complet",
                    "Corectare Vopsea",
                    "Aplicare Strat Ceramic",
                    "Restaurare Faruri",
                    "Detailing Motor",
                    "Extracție Premium Covorașe",
                    "Tratament Eliminare Mirosuri",
                  ]}
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Sparkles className="h-5 w-5" />}
                />
              </div>
            </TabsContent>

            <TabsContent value="additional" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AdditionalServiceCard
                  title="Protecție Vopsea"
                  price="De la 199,99 Lei"
                  description="Protecție de lungă durată pentru vopseaua vehiculului tău"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Shield className="h-4 w-4" />}
                />

                <AdditionalServiceCard
                  title="Restaurare Faruri"
                  price="49,99 Lei"
                  description="Restore claritatea farurilor încețoșate sau îngălbenite"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Car className="h-4 w-4" />}
                />

                <AdditionalServiceCard
                  title="Eliminare Mirosuri"
                  price="79,99 Lei"
                  description="Tratament profesional pentru eliminarea mirosurilor persistente"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Wrench className="h-4 w-4" />}
                />

                <AdditionalServiceCard
                  title="Curățare Compartiment Motor"
                  price="59,99 Lei"
                  description="Curățare detaliată a compartimentului motorului"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Wrench className="h-4 w-4" />}
                />

                <AdditionalServiceCard
                  title="Eliminare Zgârieturi"
                  price="De la 99,99 Lei"
                  description="Tratament profesional pentru zgârieturi minore"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Car className="h-4 w-4" />}
                />

                <AdditionalServiceCard
                  title="Igienizare Interior"
                  price="69,99 Lei"
                  description="Curățare profundă și igienizare a tuturor suprafețelor interioare"
                  imageSrc="/assets/images/car-wash-fallback.jpg"
                  icon={<Shield className="h-4 w-4" />}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center mt-16 mb-20 max-w-3xl mx-auto relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-foreground/20 to-transparent rounded-3xl blur-xl opacity-30"></div>
          <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Programează-te</Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Gata să Faci Mașina Ta Să Strălucească?</h2>
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
              <Link href="/abonamente" className="inline-flex items-center">
                Vezi Planurile de Abonament
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />  
              </Link>
            </Button>
          </div>
        </div>
      </div>
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
  icon?: React.ReactNode
}

function ServiceCard({ title, price, description, features, imageSrc, featured = false, icon }: ServiceCardProps) {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-xl group ${featured ? "border-primary shadow-lg ring-1 ring-primary relative" : "border shadow hover:-translate-y-1"}`}>
      {featured && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs px-4 py-1 rounded-bl-lg font-semibold z-20">
          Popular
        </div>
      )}
      <div className="relative h-48 overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-white/90 rounded-full p-2">
          {icon}
        </div>
      </div>
      <CardHeader className={`${featured ? "bg-primary/5" : ""}`}>
        <CardTitle className="flex justify-between items-center">
          <span>{title}</span>
          <span className="text-xl font-bold text-primary">{price}</span>
        </CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className={`rounded-full p-1 mr-3 ${featured ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                <Check className="h-3 w-3 flex-shrink-0" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4 pb-5">
        <Button 
          asChild 
          className={`w-full rounded-xl transition-all duration-300 ${
            featured 
              ? "bg-primary hover:bg-primary/90 text-white group-hover:shadow-md" 
              : "group-hover:bg-primary group-hover:text-white"
          }`}
        >
          <Link href="/booking" className="inline-flex items-center justify-center">
            <span>Programează Acest Serviciu</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

interface AdditionalServiceCardProps {
  title: string
  price: string
  description: string
  imageSrc: string
  icon?: React.ReactNode
}

function AdditionalServiceCard({ title, price, description, imageSrc, icon }: AdditionalServiceCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
      <div className="relative h-40 overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-3 bg-white/90 rounded-full p-2">
          {icon}
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{title}</CardTitle>
          <div className="text-md font-bold text-primary">{price}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          asChild 
          variant="outline" 
          className="w-full rounded-xl border-primary/30 hover:border-primary transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary"
        >
          <Link href="/booking" className="inline-flex items-center justify-center group">
            <span>Adaugă la Programare</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

// Add this CSS to the globals.css file:
// .bg-grid-white\/5 {
//   background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
// }
