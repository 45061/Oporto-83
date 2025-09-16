import type { Metadata } from "next"
import { RoomsHero } from "@/components/rooms-hero"
import { RoomsGrid } from "@/components/rooms-grid"
import { RoomAmenities } from "@/components/room-amenities"
import { BookingWidget } from "@/components/booking-widget"

export const metadata: Metadata = {
  title: "Habitaciones - Hotel Oporto 83",
  description:
    "Descubre nuestras cómodas habitaciones cerca del Aeropuerto El Dorado en Bogotá. Reserva directamente y obtén el mejor precio.",
}

export default function RoomsPage() {
  return (
    <main className="min-h-screen">
      <RoomsHero />
      <RoomsGrid />
      <RoomAmenities />
      <BookingWidget />
    </main>
  )
}
