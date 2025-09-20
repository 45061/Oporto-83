import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-cyan-900 to-cyan-700">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/Nosotros.jpg')",
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Quiénes Somos</h1>
        <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
          Descubre la historia y pasión detrás del Hotel Oporto 83
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/contact">Contáctanos</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-cyan-900 bg-transparent"
          >
            <Link href="/rooms">Ver Habitaciones</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
