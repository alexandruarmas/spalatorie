import { Star, StarHalf } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function TestimonialsPage() {
  return (
    <div className="container py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Testimoniale Clienți</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nu ne crede doar pe cuvânt - ascultă ce spun clienții noștri mulțumiți
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">Toate Recenziile</TabsTrigger>
            <TabsTrigger value="wash">Spălare Auto</TabsTrigger>
            <TabsTrigger value="detail">Detailing</TabsTrigger>
            <TabsTrigger value="membership">Abonament</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wash" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials
                .filter((t) => t.category === "Spălare Auto")
                .map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="detail" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials
                .filter((t) => t.category === "Detailing")
                .map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="membership" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials
                .filter((t) => t.category === "Abonament")
                .map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Satisfacția Clienților</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfacția Clienților</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10.000+</div>
              <p className="text-muted-foreground">Mașini Îngrijite</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">4,9/5</div>
              <p className="text-muted-foreground">Rating Mediu</p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Recenzii Evidențiate</h2>
          <div className="space-y-6">
            {featuredTestimonials.map((testimonial, index) => (
              <FeaturedTestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Lasă Recenzia Ta</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Feedback-ul tău este important pentru noi! Dacă ai folosit recent serviciile noastre, am aprecia să ne spui părerea ta.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Scrie o Recenzie
          </a>
        </div>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  rating: number
  testimonial: string
  date: string
  imageSrc: string
  category: string
}

function TestimonialCard({ name, rating, testimonial, date, imageSrc, category }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => {
                if (i < Math.floor(rating)) {
                  return <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                  return <StarHalf key={i} className="h-4 w-4 fill-primary text-primary" />
                } else {
                  return <Star key={i} className="h-4 w-4 text-muted-foreground" />
                }
              })}
              <span className="text-xs text-muted-foreground ml-2">{category}</span>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground mb-3">"{testimonial}"</p>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardContent>
    </Card>
  )
}

interface FeaturedTestimonialProps extends TestimonialCardProps {
  service: string
  vehicleType: string
}

function FeaturedTestimonialCard({
  name,
  rating,
  testimonial,
  date,
  imageSrc,
  category,
  service,
  vehicleType,
}: FeaturedTestimonialProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto">
              <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
            </div>
            <div className="text-center mt-4">
              <h4 className="font-semibold">{name}</h4>
              <div className="flex items-center justify-center">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(rating)) {
                    return <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  } else if (i === Math.floor(rating) && rating % 1 !== 0) {
                    return <StarHalf key={i} className="h-4 w-4 fill-primary text-primary" />
                  } else {
                    return <Star key={i} className="h-4 w-4 text-muted-foreground" />
                  }
                })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">{date}</p>
            </div>
          </div>
          <div className="md:w-3/4">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">{category}</span>
              <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">{service}</span>
              <span className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-full">{vehicleType}</span>
            </div>
            <p className="text-muted-foreground italic mb-4">"{testimonial}"</p>
            <div className="border-t pt-4">
              <p className="text-sm">
                <span className="font-semibold">Serviciu Utilizat:</span> {service}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const testimonials: TestimonialCardProps[] = [
  {
    name: "Ion Popescu",
    rating: 5,
    testimonial: "Pachetul de spălare premium a meritat fiecare bănuț. Mașina mea nu a arătat atât de bine de când am cumpărat-o!",
    date: "10 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Spălare Auto",
  },
  {
    name: "Maria Ionescu",
    rating: 5,
    testimonial: "Sunt uimită de cum au reușit să îndepărteze petele pe care le credeam permanente. Serviciu excelent!",
    date: "28 aprilie 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Detailing",
  },
  {
    name: "Mihai Popa",
    rating: 4,
    testimonial: "Serviciu grozav și personal prietenos. Sistemul de programare online a făcut rezervarea atât de ușoară.",
    date: "15 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Spălare Auto",
  },
  {
    name: "Elena Dinu",
    rating: 5,
    testimonial:
      "Sunt abonată de 6 luni și mașina mea arată întotdeauna impecabil. Abonamentul lunar este o valoare excelentă.",
    date: "5 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Abonament",
  },
  {
    name: "David Vasile",
    rating: 4.5,
    testimonial: "Serviciul de detailing a readus la viață mașina mea de 10 ani. Arată aproape nouă din nou!",
    date: "20 aprilie 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Detailing",
  },
  {
    name: "Ana Marin",
    rating: 5,
    testimonial: "Îmi place cât de convenabil este procesul de programare. Personalul este întotdeauna profesionist și meticulos.",
    date: "12 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Spălare Auto",
  },
  {
    name: "Robert Tudor",
    rating: 4,
    testimonial:
      "Serviciul de restaurare a farurilor a făcut o diferență uriașă. Vizibilitatea mea pe timp de noapte s-a îmbunătățit dramatic.",
    date: "30 aprilie 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Detailing",
  },
  {
    name: "Ioana Cristea",
    rating: 5,
    testimonial:
      "Fiind un membru premium am economisit mulți bani. Îmi spăl mașina săptămânal și este întotdeauna impecabilă.",
    date: "8 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Abonament",
  },
  {
    name: "Cristian Neagu",
    rating: 4.5,
    testimonial: "Atenția la detalii este impresionantă. Au curățat zone de care nici nu știam că au nevoie de curățare!",
    date: "3 mai 2025",
    imageSrc: "/placeholder.svg?height=100&width=100",
    category: "Spălare Auto",
  },
]

const featuredTestimonials: FeaturedTestimonialProps[] = [
  {
    name: "Andrei Georgescu",
    rating: 5,
    testimonial:
      "Am încercat multe servicii de spălătorie auto din zonă, dar Sparkle Car Wash este de departe cel mai bun. Pachetul de Detailing Ultimate a transformat complet vehiculul meu. Corectarea vopselei a eliminat ani de zgârieturi în spirală și zgârieturi minore, iar stratul ceramic aplicat oferă mașinii o strălucire incredibilă care respinge perfect apa. Detailing-ul interior a fost la fel de impresionant - au curățat zone la care nici nu știam că se poate ajunge! Fiecare bănuț cheltuit a meritat, iar rezultatele au durat luni de zile. Nu-mi voi încredința mașina nimănui altcuiva.",
    date: "15 aprilie 2025",
    imageSrc: "/placeholder.svg?height=200&width=200",
    category: "Detailing",
    service: "Pachet Detailing Ultimate",
    vehicleType: "Sedan de Lux",
  },
  {
    name: "Alina Dumitrescu",
    rating: 5,
    testimonial:
      "Ca mamă ocupată cu trei copii, SUV-ul meu este mereu murdar. Pete de suc, firimituri de biscuiți și zone lipicioase misterioase erau norma. Am programat serviciul de Spălare Premium, fără să mă aștept la minuni, dar exact asta am primit! Echipa de la Sparkle Car Wash a eliminat petele pe care le credeam permanente și a făcut mașina să miroasă proaspăt din nou. Personalul a fost incredibil de prietenos și chiar l-a distrat pe cel mic în timp ce eu făceam check-in-ul. Sistemul de programare online a fost convenabil, iar notificările de amintire au fost foarte utile. M-am înscris acum pentru planul de abonament lunar pentru că valoarea este incredibilă. Mulțumesc că ați făcut viața acestei mame puțin mai ușoară!",
    date: "2 mai 2025",
    imageSrc: "/placeholder.svg?height=200&width=200",
    category: "Abonament",
    service: "Abonament Premium",
    vehicleType: "SUV de Familie",
  },
]
