import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Hotel Oporto 83</h3>
            <p className="mb-6 leading-relaxed">
              Tu descanso seguro cerca al Aeropuerto El Dorado. Comodidad, ubicación estratégica y atención
              personalizada.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Calle 83 #68-45, Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+57 (1) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>reservas@hoteloporto83.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/rooms" className="hover:text-secondary transition-colors">
                  Habitaciones
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-secondary transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#reservar" className="hover:text-secondary transition-colors">
                  Reservar
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-secondary transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-secondary transition-colors">
                  Ubicación
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">WhatsApp Directo</h5>
              <Button
                variant="outline"
                className="border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                +57 300 123 4567
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p>&copy; 2024 Hotel Oporto 83. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
