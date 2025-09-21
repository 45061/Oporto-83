import { Button } from "@/components/ui/button"
import { Gift, Clock } from "lucide-react"

export function OffersSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center">
              <Gift className="w-8 h-8 text-secondary-foreground" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-secondary-foreground text-balance">
            Oferta Especial - Reserva Directa
          </h2>

          <p className="text-xl mb-8 text-secondary-foreground/90 text-balance">
            Reserva directo en nuestra web y recibe nuestro descuento de temporadas.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="w-5 h-5 text-secondary-foreground/80" />
            <span className="text-secondary-foreground/80">Oferta válida hasta fin de mes</span>
          </div>
        </div>
      </div>
    </section>
  )
}
