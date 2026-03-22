"use client"

import { useEffect, useState } from "react"
import { ExternalLink, MapPinned, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getFallbackPlaces, type Locale, type PlaceCategory, welcomeBookTranslations } from "@/lib/welcome-book-data"

type PlaceItem = {
  name: string
  description: string
  address: string
  mapsUrl: string
}

export default function WelcomeBookPlaces({ locale }: { locale: Locale }) {
  const t = welcomeBookTranslations[locale]
  const [selectedCategory, setSelectedCategory] = useState<PlaceCategory>("restaurantes")
  const [places, setPlaces] = useState<PlaceItem[]>(getFallbackPlaces(locale).filter((item) => item.category === "restaurantes"))
  const [sourceLabel, setSourceLabel] = useState(t.sourceFallback)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadPlaces() {
      setLoading(true)

      try {
        const response = await fetch(`/api/google-places?category=${selectedCategory}&locale=${locale}`)
        const data = await response.json()

        if (cancelled) {
          return
        }

        setPlaces(data.places)
        setSourceLabel(data.source === "google-places" ? t.sourceGoogle : t.sourceFallback)
      } catch {
        if (!cancelled) {
          setPlaces(getFallbackPlaces(locale).filter((item) => item.category === selectedCategory))
          setSourceLabel(t.sourceFallback)
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    void loadPlaces()

    return () => {
      cancelled = true
    }
  }, [selectedCategory, locale, t.sourceFallback, t.sourceGoogle])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.exploreTag}</p>
          <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{t.exploreTitle}</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.exploreDescription}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {(Object.keys(t.categoryLabels) as PlaceCategory[]).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={selectedCategory === category ? "" : "bg-transparent"}
              onClick={() => setSelectedCategory(category)}
            >
              {t.categoryLabels[category]}
            </Button>
          ))}
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          {loading ? t.loadingPlaces : sourceLabel}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {places.map((place) => (
            <Card key={`${selectedCategory}-${place.name}`} className="border-border/70">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-secondary/15 p-3 text-secondary">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{place.name}</h3>
                    <p className="text-sm text-muted-foreground">{t.categoryLabels[selectedCategory]}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{place.description}</p>
                <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPinned className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{place.address}</span>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={place.mapsUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.viewMapsPlace}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
