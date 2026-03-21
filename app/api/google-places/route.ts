import { NextResponse } from "next/server"

import { getFallbackPlaces, type Locale, type PlaceCategory } from "@/lib/welcome-book-data"

const queriesByCategory: Record<PlaceCategory, string> = {
  restaurantes: "best restaurants near Calle 23 #83-20 Bogota Colombia",
  bares: "best bars near Calle 23 #83-20 Bogota Colombia",
  planes: "top tourist attractions and activities near Calle 23 #83-20 Bogota Colombia",
}

type GooglePlace = {
  displayName?: { text?: string }
  formattedAddress?: string
  editorialSummary?: { text?: string }
  googleMapsUri?: string
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = (searchParams.get("category") ?? "restaurantes") as PlaceCategory
  const locale = (searchParams.get("locale") ?? "es") as Locale

  if (!queriesByCategory[category]) {
    return NextResponse.json({ error: "Categoria no valida" }, { status: 400 })
  }

  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
      return NextResponse.json({
      source: "fallback",
      places: getFallbackPlaces(locale).filter((place) => place.category === category),
    })
  }

  try {
    const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "places.displayName,places.formattedAddress,places.editorialSummary,places.googleMapsUri",
      },
      body: JSON.stringify({
        textQuery: queriesByCategory[category],
        languageCode: "es",
        maxResultCount: 6,
      }),
      next: { revalidate: 21600 },
    })

    if (!response.ok) {
      throw new Error(`Google Places error: ${response.status}`)
    }

    const data = (await response.json()) as { places?: GooglePlace[] }

    const places =
      data.places?.map((place) => ({
        name: place.displayName?.text ?? "Lugar recomendado",
        address: place.formattedAddress ?? "Direccion no disponible",
        description: place.editorialSummary?.text ?? "Consulta este lugar en Google Maps.",
        mapsUrl:
          place.googleMapsUri ??
          `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.displayName?.text ?? "Bogota")}`,
      })) ?? []

    if (!places.length) {
      return NextResponse.json({
        source: "fallback",
        places: getFallbackPlaces(locale).filter((place) => place.category === category),
      })
    }

    return NextResponse.json({ source: "google-places", places })
  } catch {
    return NextResponse.json({
      source: "fallback",
      places: getFallbackPlaces(locale).filter((place) => place.category === category),
    })
  }
}
