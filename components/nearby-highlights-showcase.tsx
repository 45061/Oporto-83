"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ExternalLink, MapPin } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getNearbyHighlights, type Locale, welcomeBookTranslations } from "@/lib/welcome-book-data"

export default function NearbyHighlightsShowcase({ locale }: { locale: Locale }) {
  const t = welcomeBookTranslations[locale]
  const nearbyHighlights = getNearbyHighlights(locale)
  const [selectedPlace, setSelectedPlace] = useState(nearbyHighlights[0])

  useEffect(() => {
    setSelectedPlace(nearbyHighlights[0])
  }, [locale])

  return (
    <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
      <Card className="border-white/10 bg-white/10 text-white shadow-none">
        <CardContent className="p-8">
          <h2 className="text-3xl font-bold">{t.highlightsTitle}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{t.highlightsDescription}</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {nearbyHighlights.map((place) => {
              const isActive = selectedPlace.name === place.name

              return (
                <button
                  key={place.name}
                  type="button"
                  onClick={() => setSelectedPlace(place)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-secondary bg-white/18 shadow-lg"
                      : "border-white/10 bg-white/5 hover:bg-white/12"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-white/10 p-2 text-secondary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <p className="text-sm font-semibold">{place.name}</p>
                  </div>
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-white/10 bg-white text-card-foreground">
        <div className="relative min-h-[500px]">
          <Image
            src={selectedPlace.imagePath}
            alt={selectedPlace.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.selectedPlace}</p>
            <h3 className="mt-3 text-3xl font-bold">{selectedPlace.name}</h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">{selectedPlace.description}</p>
            <div className="mt-5">
              <Button
                variant="outline"
                className="border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
                asChild
              >
                <a href={selectedPlace.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  {t.imageSource}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
