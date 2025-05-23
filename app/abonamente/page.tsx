"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, Shield, Sparkles, Calendar, BadgeCheck, Star, ThumbsUp, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SubscriptionPlans() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-primary/90 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <Image 
            src="/assets/images/car-wash-fallback.jpg" 
            alt="Planuri de abonament" 
            fill 
            className="object-cover object-center" 
            priority
          />
        </div>
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="text-white border-white/40 px-4 py-1 mb-4 text-sm">
              Economisește și primește servicii premium
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Planuri de Abonament</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Alege planul potrivit nevoilor tale și beneficiază de servicii de spălare și detailing auto la prețuri avantajoase
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white text-primary px-4 py-2 text-sm">
                <BadgeCheck className="h-4 w-4 mr-1" /> Economii garantate
              </Badge>
              <Badge className="bg-white text-primary px-4 py-2 text-sm">
                <BadgeCheck className="h-4 w-4 mr-1" /> Acces prioritar
              </Badge>
              <Badge className="bg-white text-primary px-4 py-2 text-sm">
                <BadgeCheck className="h-4 w-4 mr-1" /> Fără perioada contractuală
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Abonamente</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Alege Planul Potrivit Pentru Tine</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferim o varietate de planuri de abonament pentru a satisface toate nevoile de îngrijire auto, de la spălări de bază până la detailing complex
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <Card className="border shadow hover:shadow-lg transition-all">
              <CardHeader className="text-center pt-8 pb-4">
                <Badge className="bg-gray-100 text-gray-800 mb-3 mx-auto">
                  Standard
                </Badge>
                <h3 className="text-2xl font-bold">Abonament Simplu</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">99</span>
                  <span className="text-xl font-bold text-muted-foreground"> Lei</span>
                  <span className="text-muted-foreground">/lună</span>
                </div>
                <p className="text-muted-foreground">Pentru întreținere de bază</p>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>4 spălări exterioare pe lună</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>2 spălări interioare pe lună</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Curățare și protecție anvelope</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Programare online prioritară</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="h-5 w-5 text-muted-foreground/40 mr-3 flex-shrink-0" />
                    <span>Detailing interior</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="h-5 w-5 text-muted-foreground/40 mr-3 flex-shrink-0" />
                    <span>Ceară auto premium</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button className="w-full" variant="outline">
                  <Link href="/contact" className="flex items-center justify-center w-full">
                    Abonează-te Acum
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Premium Plan */}
            <Card className="border-primary shadow-lg hover:shadow-xl transition-all relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-3 py-1">
                Popular
              </div>
              <CardHeader className="text-center pt-8 pb-4">
                <Badge className="bg-primary/10 text-primary mb-3 mx-auto">
                  Premium
                </Badge>
                <h3 className="text-2xl font-bold">Abonament Premium</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">199</span>
                  <span className="text-xl font-bold text-muted-foreground"> Lei</span>
                  <span className="text-muted-foreground">/lună</span>
                </div>
                <p className="text-muted-foreground">Pentru îngrijire completă</p>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Spălări exterioare nelimitate</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>4 spălări interioare pe lună</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Aplicare ceară premium lunar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Detailing interior lunar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Programare prioritară garantată</span>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Check className="h-5 w-5 text-muted-foreground/40 mr-3 flex-shrink-0" />
                    <span>Curățare detaliată motor</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact" className="flex items-center justify-center w-full">
                    Abonează-te Acum
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border shadow hover:shadow-lg transition-all">
              <CardHeader className="text-center pt-8 pb-4">
                <Badge className="bg-gray-800 text-white mb-3 mx-auto">
                  Pro
                </Badge>
                <h3 className="text-2xl font-bold">Abonament Profesional</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">349</span>
                  <span className="text-xl font-bold text-muted-foreground"> Lei</span>
                  <span className="text-muted-foreground">/lună</span>
                </div>
                <p className="text-muted-foreground">Pentru perfecționiști</p>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Toate beneficiile Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Detailing exterior și interior complet</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Curățare profesională motor</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Tratament ceramic cada 3 luni</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Protecție tapiserie și piele</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>Curățare profesională jante</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-4 pb-8">
                <Button className="w-full" variant="outline">
                  <Link href="/contact" className="flex items-center justify-center w-full">
                    Abonează-te Acum
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Avantaje</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">De Ce Să Alegi Un Abonament</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descoperă beneficiile abonamentelor noastre și cum te pot ajuta să economisești timp și bani
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Economii Semnificative</h3>
              <p className="text-muted-foreground">
                Economisești până la 40% față de prețurile standard prin alegerea unui abonament lunar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Programare Prioritară</h3>
              <p className="text-muted-foreground">
                Clienții cu abonament au prioritate la programări și acces la intervale orare exclusive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Îngrijire Constantă</h3>
              <p className="text-muted-foreground">
                Mașina ta va beneficia de îngrijire regulată, menținându-și aspectul premium și valoarea în timp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4 px-4 py-1">Întrebări Frecvente</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Întrebări și Răspunsuri</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Află răspunsurile la cele mai frecvente întrebări despre planurile noastre de abonament
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y">
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Cum funcționează abonamentele?</h3>
              <p className="text-muted-foreground">
                Abonamentele noastre funcționează pe bază lunară. După achiziție, primești un card de membru sau un cod QR care îți oferă acces la serviciile incluse în planul ales, conform frecvenței specificate.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Pot anula abonamentul oricând?</h3>
              <p className="text-muted-foreground">
                Da, toate abonamentele noastre sunt fără contracte pe termen lung. Poți anula oricând, iar abonamentul va rămâne activ până la sfârșitul perioadei plătite.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Se aplică pentru orice tip de vehicul?</h3>
              <p className="text-muted-foreground">
                Abonamentele standard se aplică pentru mașini de dimensiuni mici și medii. Pentru SUV-uri, camioane sau vehicule de dimensiuni mari, se aplică un supliment de 20%.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Pot transfera abonamentul la alt vehicul?</h3>
              <p className="text-muted-foreground">
                Abonamentele sunt asociate cu un singur vehicul. În cazuri speciale, putem aproba transferul către alt vehicul cu un cost administrativ minim.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-3">Cum fac programarea cu abonamentul?</h3>
              <p className="text-muted-foreground">
                Clienții cu abonament pot face programări online prin contul de membru, telefonic menționând codul de membru, sau direct la locație cu prioritate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image 
            src="/cta-background.jpg" 
            alt="Background" 
            fill
            className="object-cover"
          />
        </div>
        <div className="container px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Gata pentru îngrijire auto constantă?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto mb-10">
            Abonează-te astăzi și bucură-te de servicii premium la prețuri avantajoase
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                Abonează-te Acum <ChevronRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent hover:bg-white/10 text-white border-white font-semibold px-8 py-6 text-lg"
            >
              <Link href="/services">Vezi Serviciile</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center">
              <ThumbsUp className="text-white mr-2 h-5 w-5" />
              <span>Economii garantate</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="flex items-center">
              <Star className="text-white mr-2 h-5 w-5" />
              <span>Servicii premium</span>
            </div>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white/40"></div>
            <div className="flex items-center">
              <Shield className="text-white mr-2 h-5 w-5" />
              <span>Fără contracte pe termen lung</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 