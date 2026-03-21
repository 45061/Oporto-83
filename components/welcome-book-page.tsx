"use client"

import Image from "next/image"
import { useMemo, useState } from "react"
import {
  BedDouble,
  Car,
  CheckCircle2,
  Coffee,
  FileText,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  TimerReset,
  Wifi,
} from "lucide-react"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import NearbyHighlightsShowcase from "@/components/nearby-highlights-showcase"
import WelcomeBookPlaces from "@/components/welcome-book-places"
import WelcomeBookPrintButton from "@/components/welcome-book-print-button"
import {
  getArrivalNotes,
  getEmergencyContacts,
  getHouseRules,
  getUsefulServices,
  hotelWelcomeInfo,
  localizedHotelInfo,
  type Locale,
  welcomeBookTranslations,
} from "@/lib/welcome-book-data"

const languageOptions: Locale[] = ["es", "en", "fr"]

export default function WelcomeBookPage() {
  const [locale, setLocale] = useState<Locale>("es")
  const t = welcomeBookTranslations[locale]

  const arrivalNotes = useMemo(() => getArrivalNotes(locale), [locale])
  const houseRules = useMemo(() => getHouseRules(locale), [locale])
  const usefulServices = useMemo(() => getUsefulServices(locale), [locale])
  const emergencyContacts = useMemo(() => getEmergencyContacts(locale), [locale])

  const quickInfo = [
    {
      icon: TimerReset,
      title: t.checkLabel,
      value: `${hotelWelcomeInfo.checkIn} / ${hotelWelcomeInfo.checkOut}`,
    },
    {
      icon: Wifi,
      title: t.wifiLabel,
      value: { network: hotelWelcomeInfo.wifiName, password: hotelWelcomeInfo.wifiPassword },
    },
    {
      icon: Car,
      title: t.parkingLabel,
      value: localizedHotelInfo.parking[locale],
    },
    {
      icon: Coffee,
      title: t.breakfastLabel,
      value: localizedHotelInfo.breakfast[locale],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b bg-primary text-primary-foreground print:border-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,193,7,0.18),transparent_32%)]" />
        <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium">
                {t.badge}
              </div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 p-1 print:hidden">
                {languageOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setLocale(option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                      locale === option ? "bg-secondary text-secondary-foreground" : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <h1 className="text-4xl font-bold leading-tight text-balance md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              {t.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 print:hidden" asChild>
                <a href={hotelWelcomeInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t.contactReception}
                </a>
              </Button>
              <WelcomeBookPrintButton label={t.print} />
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {quickInfo.map((item) => (
                <Card key={item.title} className="border-white/15 bg-white/10 text-white shadow-none">
                  <CardContent className="space-y-3 p-5">
                    <item.icon className="h-6 w-6 text-secondary" />
                    <div>
                      <p className="text-sm font-semibold">{item.title}</p>
                      {typeof item.value === "string" ? (
                        <p className="mt-2 text-sm leading-relaxed text-white/80">{item.value}</p>
                      ) : (
                        <div className="mt-2 space-y-1 text-sm text-white/80">
                          <p>
                            <span className="font-semibold text-white">{t.network}:</span> {item.value.network}
                          </p>
                          <p>
                            <span className="font-semibold text-white">{t.password}:</span> {item.value.password}
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border-white/10 bg-white text-card-foreground shadow-2xl">
            <div className="relative min-h-[420px]">
              <Image src="/Recepcion.jpg" alt="Recepcion del Hotel Oporto 83" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.essentialInfo}</p>
                <h2 className="mt-3 text-3xl font-bold">{t.allInOnePlace}</h2>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/85">{t.allInOnePlaceDescription}</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="border-border/70">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                  <MapPin className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-primary">{t.locationTitle}</h2>
                <div className="mt-5 space-y-4 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">{t.address}:</span> {hotelWelcomeInfo.address}</p>
                  <p><span className="font-semibold text-foreground">{t.airport}:</span> {localizedHotelInfo.airportDistance[locale]}</p>
                  <p><span className="font-semibold text-foreground">{t.estimatedTime}:</span> {localizedHotelInfo.airportTime[locale]}</p>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="bg-transparent" asChild>
                    <a href="https://www.google.com/maps/search/?api=1&query=Calle+23+%2383-20+Bogota+Colombia" target="_blank" rel="noopener noreferrer">
                      {t.viewMaps}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-muted/40">
              <CardContent className="p-8">
                <div className="mb-6 inline-flex rounded-2xl bg-secondary/15 p-4 text-secondary">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold text-primary">{t.beforeArrival}</h2>
                <div className="mt-6 space-y-4">
                  {arrivalNotes.map((note) => (
                    <div key={note} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <p className="leading-relaxed text-muted-foreground">{note}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.stayTag}</p>
            <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{t.stayTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{t.stayDescription}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="border-border/70 lg:col-span-2">
              <CardContent className="p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                  <BedDouble className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">{t.servicesTitle}</h3>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {usefulServices.map((service) => (
                    <div key={service} className="flex items-start gap-3 rounded-2xl bg-muted p-4">
                      <Sparkles className="mt-0.5 h-5 w-5 text-secondary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{service}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/70">
              <CardContent className="p-8">
                <div className="mb-5 inline-flex rounded-2xl bg-secondary/15 p-4 text-secondary">
                  <FileText className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">{t.rulesTitle}</h3>
                <div className="mt-6 space-y-4">
                  {houseRules.map((rule) => (
                    <div key={rule} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary" />
                      <p className="text-sm leading-relaxed text-muted-foreground">{rule}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WelcomeBookPlaces locale={locale} />

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto px-4">
          <NearbyHighlightsShowcase locale={locale} />
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl border-border/70 bg-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-primary">{t.usefulContacts}</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {emergencyContacts.map((contact) => (
                  <div key={contact.title} className="rounded-2xl bg-muted p-5">
                    <p className="text-sm font-semibold text-primary">{contact.title}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{contact.detail}</p>
                    <div className="mt-4">
                      <Button variant="outline" className="bg-transparent" asChild>
                        <a href={contact.actionHref} target="_blank" rel="noopener noreferrer">{contact.actionLabel}</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-border/70 bg-gradient-to-r from-muted via-card to-muted">
            <CardContent className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{t.supportTag}</p>
                <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">{t.supportTitle}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {t.supportDescription.replace("{checkout}", hotelWelcomeInfo.checkOut)}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90" asChild>
                  <a href={hotelWelcomeInfo.whatsappUrl} target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent" asChild>
                  <a href={`mailto:${hotelWelcomeInfo.email}`}>{t.email}</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
