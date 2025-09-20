import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export function RoomsHero() {
  return (
    <section className="relative h-[60vh] bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/EspecialRoom.jpg')",
        }}
      />
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
        <h1 className="text-5xl font-bold mb-6 text-balance">Nuestras Habitaciones</h1>
        <p className="text-xl text-slate-200 text-balance max-w-2xl mx-auto">
          Espacios diseñados para tu comodidad y descanso, con todas las amenidades que necesitas para una estadía
          perfecta
        </p>
      </div>
    </section>
  )
}
