import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Clock, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <Image
                  src="/assets/icons/icon.ico"
                  alt="Logo Sparkle Car Wash Timișoara"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-primary">Sparkle Car Wash</span>
            </Link>
            <p className="text-gray-600">
              Servicii profesionale de spălătorie auto și detailing în Timișoara, oferind soluții complete de curățare și întreținere pentru mașina dumneavoastră.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Pagina noastră de Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Pagina noastră de Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary transition-colors" aria-label="Pagina noastră de Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Servicii Auto</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/spalare-exterior" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Spălare Exterior Auto
                </Link>
              </li>
              <li>
                <Link href="/services/spalare-interior" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Curățare Interior Auto
                </Link>
              </li>
              <li>
                <Link href="/services/polish-auto" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Polish și Ceruire Auto
                </Link>
              </li>
              <li>
                <Link href="/services/detailing-auto" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Detailing Auto Premium Timișoara
                </Link>
              </li>
              <li>
                <Link href="/services/curatare-tapiterie" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Curățare Tapițerie Auto
                </Link>
              </li>
              <li>
                <Link href="/services/abonamente-spalatorie" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Abonamente Spălătorie Auto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Spălătorie Auto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Strada Exemplu 123, Timișoara, Timiș, România, 300001</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">0712 345 678</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">contact@sparklecarwash.ro</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Luni-Vineri: 08:00-20:00</p>
                  <p>Sâmbătă: 09:00-18:00</p>
                  <p>Duminică: 10:00-16:00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Legături Rapide</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Despre Sparkle Car Wash
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Servicii Spălătorie
                </Link>
              </li>
              <li>
                <Link href="/preturi" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Prețuri Spălătorie Auto
                </Link>
              </li>
              <li>
                <Link href="/programare" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Programare Online
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-1" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-gray-600 mb-6">
            Sparkle Car Wash oferă servicii premium de spălătorie auto și detailing în Timișoara. 
            Suntem specializați în spălare auto, curățare interior auto, polish auto, ceruire, 
            și servicii complete de detailing pentru mașini, SUV-uri și autovehicule comerciale. 
            Folosim produse profesionale și echipamente de ultimă generație pentru a asigura cea 
            mai bună îngrijire pentru mașina dumneavoastră. Vă așteptăm în locația noastră din 
            Timișoara pentru servicii de spălătorie auto de calitate superioară.
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sparkle Car Wash Timișoara. Toate drepturile rezervate.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-confidentialitate" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Termeni și Condiții
              </Link>
              <Link href="/cookies" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Politica de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
