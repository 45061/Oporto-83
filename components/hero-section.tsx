import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/modern-hotel-exterior-at-night-with-warm-lighting-.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Tu descanso seguro cerca al Aeropuerto El Dorado
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed">
          Habitaciones cómodas, desayuno incluido y atención personalizada en la mejor ubicación de Bogotá.
        </p>
        <Button
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 h-auto"
        >
          📅 Reserva Ahora
        </Button>
      </div>

      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg">
          📅 Reservar
        </Button>
      </div>
    </section>
  )
}
