"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, ExternalLink, Facebook, Instagram, Linkedin, AlertCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formState.name.trim()) {
      newErrors.name = "Numele este obligatoriu"
    }
    
    if (!formState.email.trim()) {
      newErrors.email = "Email-ul este obligatoriu"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Adresa de email nu este validă"
    }
    
    if (formState.phone && !/^(07\d{2}\s?\d{3}\s?\d{3}|(\+40|0040)7\d{2}\s?\d{3}\s?\d{3})$/.test(formState.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Formatul numărului de telefon nu este valid"
    }
    
    if (!formState.subject) {
      newErrors.subject = "Te rugăm să selectezi un subiect"
    }
    
    if (formState.message.trim().length < 10) {
      newErrors.message = "Mesajul trebuie să conțină cel puțin 10 caractere"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormState(prev => ({ ...prev, [id]: value }))
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }))
    }
  }
  
  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, subject: value }))
    if (errors.subject) {
      setErrors(prev => ({ ...prev, subject: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Contactează-ne</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ai întrebări sau ai nevoie de asistență? Suntem aici să te ajutăm!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8 animate-slideInLeft">
          {/* Contact Form */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <Send size={20} className="text-primary" />
                Trimite-ne un Mesaj
              </CardTitle>
              <CardDescription>Completează formularul de mai jos și te vom contacta cât mai curând posibil</CardDescription>
            </CardHeader>
            {formSubmitted ? (
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-lg p-6 text-center animate-scaleIn">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Mulțumim!</h3>
                  <p>Mesajul tău a fost trimis cu succes. Te vom contacta în curând.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: ""
                      })
                    }}
                  >
                    Trimite alt mesaj
                  </Button>
                </div>
              </CardContent>
            ) : (
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={cn(errors.name && "text-destructive")}>Nume</Label>
                      <Input 
                        id="name" 
                        placeholder="Ion Popescu" 
                        value={formState.name}
                        onChange={handleChange}
                        className={cn(errors.name && "border-destructive")}
                      />
                      {errors.name && (
                        <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={cn(errors.email && "text-destructive")}>Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="ion@exemplu.ro" 
                        value={formState.email}
                        onChange={handleChange}
                        className={cn(errors.email && "border-destructive")} 
                      />
                      {errors.email && (
                        <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className={cn(errors.phone && "text-destructive")}>Număr de Telefon</Label>
                    <Input 
                      id="phone" 
                      placeholder="07xx xxx xxx" 
                      value={formState.phone}
                      onChange={handleChange}
                      className={cn(errors.phone && "border-destructive")}
                    />
                    {errors.phone ? (
                      <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.phone}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">Format: 07xx xxx xxx sau +40 7xx xxx xxx</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className={cn(errors.subject && "text-destructive")}>Subiect</Label>
                    <Select onValueChange={handleSelectChange} value={formState.subject}>
                      <SelectTrigger id="subject" className={cn(errors.subject && "border-destructive")}>
                        <SelectValue placeholder="Selectează un subiect" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Întrebare Generală</SelectItem>
                        <SelectItem value="booking">Întrebare despre Programare</SelectItem>
                        <SelectItem value="service">Informații despre Servicii</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Altele</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.subject && (
                      <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className={cn(errors.message && "text-destructive")}>Mesaj</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Cu ce te putem ajuta?" 
                      className={cn("min-h-[150px]", errors.message && "border-destructive")}
                      value={formState.message}
                      onChange={handleChange}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full h-12 relative group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Se trimite...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2 transition-transform group-hover:translate-x-1">
                        Trimite Mesaj <Send size={16} className="inline transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            )}
          </Card>

          {/* FAQ - Moved from right column */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <AlertCircle size={20} className="text-primary" />
                Întrebări Frecvente
              </CardTitle>
              <CardDescription>Cele mai frecvente întrebări despre serviciile noastre</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Am nevoie de programare?</AccordionTrigger>
                  <AccordionContent>
                    Deși acceptăm și clienți fără programare, recomandăm să faci o programare pentru a asigura un serviciu prompt și pentru a evita timpii de așteptare, mai ales în zilele aglomerate.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Cât timp durează o spălare auto?</AccordionTrigger>
                  <AccordionContent>
                    Spălările simple durează de obicei 20-30 de minute, în timp ce serviciile premium și de detailing pot dura 1-3 ore, în funcție de pachet și de starea vehiculului.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Oferiți servicii mobile?</AccordionTrigger>
                  <AccordionContent>
                    Da, oferim servicii de detailing mobil într-o rază de 15 kilometri. Contactează-ne pentru disponibilitate și prețuri. Serviciile mobile sunt disponibile doar pentru pachete premium și necesită programare cu cel puțin 24 de ore în avans.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Ce metode de plată acceptați?</AccordionTrigger>
                  <AccordionContent>
                    Acceptăm plăți în numerar, cu cardul (Visa, Mastercard), prin transfer bancar, precum și prin aplicații mobile precum Apple Pay și Google Pay.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8 animate-slideInRight">
          {/* Contact Information */}
          <Card className="border-2 shadow-lg">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Informații de Contact
              </CardTitle>
              <CardDescription>Detalii despre cum ne poți contacta sau vizita</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start group cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Adresă</h3>
                    <p className="text-muted-foreground">Strada Spalării 123, Timișoara, România</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-muted-foreground">0712 345 678</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">contact@sparklecarwash.ro</p>
                  </div>
                </div>
                <div className="flex items-start group cursor-pointer hover:bg-muted/50 p-2 rounded-md transition-colors">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold">Program</h3>
                    <p className="text-muted-foreground">Luni - Sâmbătă: 8:00 - 19:00</p>
                    <p className="text-muted-foreground">Duminică: 9:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <h3 className="font-semibold mb-4">Urmărește-ne</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-primary hover:border-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-primary hover:border-primary transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10 hover:text-primary hover:border-primary transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="border-2 shadow-lg overflow-hidden">
            <CardHeader className="bg-muted/50">
              <CardTitle className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                Locație
              </CardTitle>
              <CardDescription>Ne găsești la această adresă</CardDescription>
            </CardHeader>
            <div className="h-[300px] relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.9479192974144!2d21.226537811485483!3d45.75509092123861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610655bf%3A0xfd8e52808f58034!2sTimisoara!5e0!3m2!1sen!2sro!4v1653308837264!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Hartă ce arată locația noastră"
              ></iframe>
            </div>
            <div className="p-4 bg-muted/50 flex justify-end">
              <Button variant="outline" size="sm" className="text-xs flex items-center gap-1 hover:bg-background">
                <span>Deschide harta</span>
                <ExternalLink size={12} />
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.5s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
