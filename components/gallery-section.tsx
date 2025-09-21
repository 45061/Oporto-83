"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  {
    src: "/Habitacion.jpg",
    alt: "Habitación ejecutiva con vista a la ciudad",
  },
  {
    src: "/Baño.jpg",
    alt: "Baño moderno y elegante",
  },
  {
    src: "/Recepcion.jpg",
    alt: "Lobby y área de recepción",
  },
  {
    src: "/Comedor.jpg",
    alt: "Área de desayuno",
  },
  {
    src: "/Fachada.jpg",
    alt: "Fachada del hotel durante el día",
  },
]

export function GallerySection() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-balance">Conoce nuestras instalaciones</h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={images[currentImage].src || "/placeholder.svg"}
              alt={images[currentImage].alt}
              className="w-full h-full object-cover"
            />

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImage ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
