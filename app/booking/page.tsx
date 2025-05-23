"use client"

import { useState } from "react"
import { Calendar, ChevronRight, ChevronLeft, Car, Clock, MessageSquare, Check, Sparkles, CalendarCheck } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { format } from "date-fns"
import { ro } from "date-fns/locale"
import { cn } from "@/lib/utils"

const formSteps = [
  { id: "service", title: "Serviciul", icon: Sparkles },
  { id: "vehicle", title: "Vehicul", icon: Car },
  { id: "datetime", title: "Data & Ora", icon: Clock },
  { id: "contact", title: "Contact", icon: MessageSquare },
]

export default function BookingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedService, setSelectedService] = useState("basic")
  const [hour, setHour] = useState("09")
  const [minute, setMinute] = useState("00")
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    notes: ""
  })
  const [confirmation, setConfirmation] = useState<{message: string, isError: boolean} | null>(null)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [submittedData, setSubmittedData] = useState<any>(null)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value
    })
  }
  
  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (parseInt(value) > 17) value = "17"
    if (parseInt(value) < 9) value = "09"
    setHour(value.padStart(2, '0'))
  }
  
  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    if (parseInt(value) > 59) value = "59"
    if (parseInt(value) < 0) value = "00"
    setMinute(value.padStart(2, '0'))
  }
  
  const handleTimeConfirmation = () => {
    const hourValue = parseInt(hour)
    
    if (hourValue >= 9 && hourValue < 18) {
      setConfirmation({
        message: `Ora selectată: ${hour}:${minute.padStart(2, '0')}`,
        isError: false
      })
    } else {
      setConfirmation({
        message: "Programul de lucru este între orele 9:00 - 17:59",
        isError: true
      })
    }
    
    // Clear confirmation after 3 seconds
    setTimeout(() => {
      setConfirmation(null)
    }, 3000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = {
      ...formState,
      service: selectedService,
      date: date ? format(date, "PPP", { locale: ro }) : "",
      time: `${hour}:${minute}`
    }
    setSubmittedData(formData)
    setShowConfirmationModal(true)
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, formSteps.length - 1))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 0))
  
  const isLastStep = step === formSteps.length - 1
  const isFirstStep = step === 0
  
  const getServiceDetails = (service: string) => {
    switch(service) {
      case "basic":
        return { name: "Spălare Simplă", description: "Spălare exterioară & aspirare", price: "19,99 Lei" }
      case "premium":
        return { name: "Spălare Premium", description: "Interior & exterior complet", price: "39,99 Lei" }
      case "ultimate":
        return { name: "Detailing Complet", description: "Detailing complet", price: "89,99 Lei" }
      default:
        return { name: "", description: "", price: "" }
    }
  }

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div className="grid grid-cols-1 gap-4">
            {["basic", "premium", "ultimate"].map((service) => {
              const details = getServiceDetails(service);
  return (
                <div 
                  key={service}
                  onClick={() => setSelectedService(service)}
                  className={cn(
                    "flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer",
                    selectedService === service 
                      ? "border-primary bg-primary/5 shadow-sm" 
                      : "border-muted/60 hover:border-primary/50 hover:bg-muted/50"
                  )}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center border-2 mr-4 transition-colors",
                    selectedService === service ? "border-primary" : "border-muted-foreground"
                  )}>
                    {selectedService === service && (
                      <div className="w-3 h-3 rounded-full bg-primary transition-transform duration-200" />
                    )}
        </div>
                  <div className="flex-1">
                    <div className="font-medium">{details.name}</div>
                    <div className="text-sm text-muted-foreground">{details.description}</div>
                  </div>
                  <div className="font-semibold text-lg">
                    {details.price}
                  </div>
                </div>
              );
            })}
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
                  <div className="space-y-2">
              <Label htmlFor="vehicle">Marca & Modelul Vehiculului</Label>
              <Input 
                id="vehicle" 
                placeholder="Dacia Logan" 
                value={formState.vehicle}
                onChange={handleChange}
                required 
                className="h-12"
              />
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                <p className="text-sm font-medium">Ai selectat: {getServiceDetails(selectedService).name}</p>
              </div>
              <p className="ml-7 text-xs text-muted-foreground">{getServiceDetails(selectedService).price}</p>
            </div>
            <div className="space-y-2 mt-6">
              <Label htmlFor="notes">Cereri Speciale sau Observații</Label>
              <Textarea
                id="notes"
                placeholder="Orice instrucțiuni sau cereri speciale pentru programare"
                className="min-h-[100px] resize-none"
                value={formState.notes}
                onChange={handleChange}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="rounded-lg border shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-base font-medium">Selectează data și ora programării</h3>
                  </div>
              
              <div className="p-4">
                {/* Month picker */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">{date ? format(date, 'MMMM yyyy', { locale: ro }) : 'Alege data'}</h4>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 p-0"
                      type="button"
                      onClick={() => {
                        if (date) {
                          const prevMonth = new Date(date);
                          prevMonth.setMonth(prevMonth.getMonth() - 1);
                          setDate(prevMonth);
                        } else {
                          const now = new Date();
                          const prevMonth = new Date(now);
                          prevMonth.setMonth(now.getMonth() - 1);
                          setDate(prevMonth);
                        }
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-8 w-8 p-0"
                      type="button"
                      onClick={() => {
                        if (date) {
                          const nextMonth = new Date(date);
                          nextMonth.setMonth(nextMonth.getMonth() + 1);
                          setDate(nextMonth);
                        } else {
                          const now = new Date();
                          const nextMonth = new Date(now);
                          nextMonth.setMonth(now.getMonth() + 1);
                          setDate(nextMonth);
                        }
                      }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Day of week headers */}
                <div className="grid grid-cols-7 mb-2">
                  {['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du'].map((day, i) => (
                    <div key={day} className="text-center text-xs font-medium text-muted-foreground py-1">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Date grid */}
                <div className="grid grid-cols-7 gap-1">
                  {(() => {
                    // Calculate dates for the grid
                    const currentDate = date || new Date();
                    const month = currentDate.getMonth();
                    const year = currentDate.getFullYear();
                    
                    // First day of the month
                    const firstDayOfMonth = new Date(year, month, 1);
                    
                    // Last day of the month
                    const lastDayOfMonth = new Date(year, month + 1, 0);
                    
                    // Get the day of the week the month starts on (0 = Sunday, 1 = Monday, etc.)
                    let firstDayOfWeek = firstDayOfMonth.getDay();
                    // Adjust to start week on Monday (0 = Monday, 6 = Sunday)
                    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
                    
                    // Array to hold all the day elements
                    const daysArray = [];
                    
                    // Empty cells for days of the week before the 1st of the month
                    for (let i = 0; i < firstDayOfWeek; i++) {
                      daysArray.push(
                        <div key={`empty-${i}`} className="h-10" />
                      );
                    }
                    
                    // Days of the month
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
                      const currentDay = new Date(year, month, day);
                      const isToday = currentDay.getTime() === today.getTime();
                      const isSelected = date && currentDay.getTime() === new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
                      const isPast = currentDay < today;
                      
                      daysArray.push(
                        <button
                          key={`day-${day}`}
                          type="button"
                          disabled={isPast}
                          onClick={() => {
                            const newDate = new Date(currentDay);
                            setDate(newDate);
                          }}
                          className={cn(
                            "h-10 rounded-md flex items-center justify-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                            isSelected ? "bg-primary text-white" :
                            isToday ? "border border-primary/50 text-primary" :
                            isPast ? "text-muted-foreground/50 cursor-not-allowed" :
                            "hover:bg-slate-100 dark:hover:bg-slate-800"
                          )}
                        >
                          {day}
                        </button>
                      );
                    }
                    
                    return daysArray;
                  })()}
                </div>

                {/* Time slots */}
                {date && (
                  <div className="mt-6">
                    <h4 className="font-medium text-sm mb-3">
                      {format(date, 'EEEE, d MMMM', { locale: ro })}
                    </h4>
                    
                    {/* Manual time adjustment */}
                    <div className="pt-2">
                      <h4 className="font-medium text-sm mb-3">
                        Selectează ora dorită
                      </h4>
                      
                      <div className="flex items-center justify-center border rounded-lg overflow-hidden shadow-sm max-w-md mx-auto">
                        <div className="flex-1 relative group">
                          <Input 
                            type="number" 
                            value={hour}
                            onChange={handleHourChange}
                            className="border-0 rounded-none text-center py-5 text-xl font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                            min="9"
                            max="17"
                            required 
                          />
                          <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                        </div>
                        
                        <div className="px-1 text-2xl font-semibold">:</div>
                        
                        <div className="flex-1 relative group">
                          <Input 
                            type="number" 
                            value={minute}
                            onChange={handleMinuteChange}
                            className="border-0 rounded-none text-center py-5 text-xl font-medium focus-visible:ring-0 focus-visible:ring-offset-0"
                            min="0"
                            max="59"
                            required 
                          />
                          <div className="absolute inset-x-0 bottom-0 h-1 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                        </div>
                      </div>
                      <p className="text-center text-sm text-muted-foreground mt-2">Program de lucru: 9:00 - 17:59</p>
                    </div>
                  </div>
                )}
                  </div>
                </div>

            <div className="flex items-center p-3 bg-muted/50 rounded-lg">
              <div className="bg-muted rounded-md p-1.5 mr-3">
                <Clock className="h-4 w-4" />
              </div>
              <div className="text-sm">
                <p className="font-medium">Durată estimată: {selectedService === "basic" ? "30-45 min" : selectedService === "premium" ? "60-90 min" : "120-180 min"}</p>
                <p className="text-muted-foreground text-xs">Te rugăm să ajungi cu 10 minute înainte</p>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nume Complet</Label>
                <Input 
                  id="name" 
                  placeholder="Ion Popescu" 
                  value={formState.name}
                  onChange={handleChange}
                  required 
                  className="h-12"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="ion.popescu@example.com" 
                  value={formState.email}
                  onChange={handleChange}
                  required 
                  className="h-12"
                />
              </div>
                <div className="space-y-2">
                <Label htmlFor="phone">Număr de Telefon</Label>
                <Input 
                  id="phone" 
                  placeholder="07xx xxx xxx" 
                  value={formState.phone}
                  onChange={handleChange}
                  required 
                  className="h-12"
                />
                <p className="text-xs text-muted-foreground">Format: 07xx xxx xxx sau +40 7xx xxx xxx</p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-lg p-4 space-y-3">
              <h3 className="font-medium">Rezumat Programare</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Serviciu:</span>
                  <span className="font-medium">{getServiceDetails(selectedService).name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Vehicul:</span>
                  <span className="font-medium">{formState.vehicle || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data:</span>
                  <span className="font-medium">{date ? format(date, "PPP", { locale: ro }) : "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ora:</span>
                  <span className="font-medium">{`${hour}:${minute}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Preț:</span>
                  <span className="font-medium">{getServiceDetails(selectedService).price}</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container py-12 px-4 md:px-6 min-h-[calc(100vh-6rem)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Programează Spălarea Mașinii Tale</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Programează-te online și noi ne vom ocupa de restul
          </p>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between">
            {formSteps.map((formStep, idx) => (
              <button 
                key={formStep.id}
                className={cn(
                  "flex flex-col items-center p-2 rounded-lg transition-colors",
                  step === idx ? "text-primary" : "text-muted-foreground",
                  step > idx ? "text-primary" : ""
                )}
                onClick={() => setStep(idx)}
              >
                <div className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full mb-1 transition-all",
                  step === idx ? "bg-primary text-primary-foreground" : "bg-muted",
                  step > idx ? "bg-primary/20" : ""
                )}>
                  {step > idx ? <Check className="h-5 w-5" /> : <formStep.icon className="h-5 w-5" />}
                </div>
                <span className="text-xs font-medium hidden sm:block">{formStep.title}</span>
              </button>
            ))}
          </div>
          <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${(step / (formSteps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <Card className="shadow-lg border-muted/50">
          <CardHeader className="pb-4">
            <CardTitle>{formSteps[step].title}</CardTitle>
            <CardDescription>
              {step === 0 && "Alege serviciul potrivit pentru mașina ta"}
              {step === 1 && "Spune-ne despre vehiculul tău"}
              {step === 2 && "Alege data și ora potrivită pentru tine"}
              {step === 3 && "Detaliile tale de contact"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="transition-opacity duration-300 space-y-4">
                {renderStep()}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t p-6">
              <Button 
                type="button" 
                variant="outline" 
                onClick={prevStep}
                disabled={isFirstStep}
                className={cn("gap-1", isFirstStep && "opacity-0")}
              >
                <ChevronLeft className="h-4 w-4" />
                Înapoi
              </Button>
              {isLastStep ? (
                <Button type="submit">
                  Confirmă Programarea
                </Button>
              ) : (
                <Button 
                  type="button" 
                  onClick={nextStep}
                  className="gap-1"
                >
                  Continuă
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>

        <div className="mt-12 bg-muted/40 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Informații Programare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Politica de Anulare
              </h3>
              <p className="text-muted-foreground text-sm">
                Înțelegem că planurile se pot schimba. Poți anula sau reprograma cu până la 24 de ore înainte fără nicio taxă.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Car className="h-4 w-4" />
                La Ce Să Te Aștepți
              </h3>
              <p className="text-muted-foreground text-sm">
                Te rugăm să ajungi cu 5-10 minute înainte de ora programată. Echipa noastră va discuta serviciul cu tine înainte de a începe.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Plata
              </h3>
              <p className="text-muted-foreground text-sm">
                Plata se face la momentul serviciului. Acceptăm toate cardurile principale, numerar și opțiuni de plată mobilă.
              </p>
            </div>
          </div>
        </div>

        {showConfirmationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-xl shadow-lg max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-300">
              <div className="p-6 bg-primary/10 flex justify-center">
                <div className="rounded-full bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center">
                  <CalendarCheck className="h-8 w-8" />
                </div>
              </div>
              <div className="p-6 text-center space-y-4">
                <h2 className="text-2xl font-bold">Programare Confirmată!</h2>
                <p className="text-muted-foreground">
                  Îți mulțumim pentru programare. Vei primi un email de confirmare în curând.
                </p>
                
                <div className="bg-muted/30 rounded-lg p-4 text-left mt-4">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-muted-foreground">Serviciu:</div>
                    <div className="font-medium">{getServiceDetails(submittedData?.service || "").name}</div>
                    
                    <div className="text-muted-foreground">Vehicul:</div>
                    <div className="font-medium">{submittedData?.vehicle || "-"}</div>
                    
                    <div className="text-muted-foreground">Data:</div>
                    <div className="font-medium">{submittedData?.date || "-"}</div>
                    
                    <div className="text-muted-foreground">Ora:</div>
                    <div className="font-medium">{submittedData?.time || "-"}</div>
                    
                    <div className="text-muted-foreground">Nume:</div>
                    <div className="font-medium">{submittedData?.name || "-"}</div>
                    
                    <div className="text-muted-foreground">Email:</div>
                    <div className="font-medium">{submittedData?.email || "-"}</div>
                    
                    <div className="text-muted-foreground">Telefon:</div>
                    <div className="font-medium">{submittedData?.phone || "-"}</div>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t flex justify-center">
                <Button 
                  onClick={() => {
                    setShowConfirmationModal(false)
                    // Reset form
                    setStep(0)
                    setDate(undefined)
                    setHour("09")
                    setMinute("00")
                    setFormState({
                      name: "",
                      phone: "",
                      email: "",
                      vehicle: "",
                      notes: ""
                    })
                    // Navigate to home page
                    router.push("/")
                  }}
                  className="w-full sm:w-auto"
                >
                  OK
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
