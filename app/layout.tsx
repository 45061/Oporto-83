import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Hotel Oporto 83 - Tu descanso cerca al Aeropuerto El Dorado",
  description:
    "Hotel boutique en Bogotá, ubicado estratégicamente cerca al Aeropuerto El Dorado. Comodidad, ubicación y atención personalizada.",
  generator: "v0.app",
  icons: {
    icon: "/OPORTO-05.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
