'use client'

import { useState, FormEvent } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, Phone, Mail } from "lucide-react"
import { rooms } from "./rooms-grid"

export function BookingWidget() {
  const [checkin, setCheckin] = useState("")
  const [checkout, setCheckout] = useState("")
  const [roomType, setRoomType] = useState("")
  const [guests, setGuests] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [requests, setRequests] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const room = rooms.find((r) => r.id === roomType)
    const roomName = room ? room.name : "No seleccionada"

    const message = `
      ¡Hola! Quisiera solicitar una reserva con los siguientes datos:
      -------------------------------------
      *Nombre:* ${name}
      *Email:* ${email}
      *Teléfono:* ${phone}
      -------------------------------------
      *Fecha de llegada:* ${checkin}
      *Fecha de salida:* ${checkout}
      *Tipo de habitación:* ${roomName}
      *Número de huéspedes:* ${guests}
      -------------------------------------
      *Solicitudes especiales:* ${requests || "Ninguna"}
      -------------------------------------
      ¡Quedo a la espera de su confirmación!
    `

    const whatsappNumber = "+573197981552" // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-cyan-700">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Reserva tu habitación</h2>
          <p className="text-xl text-cyan-100">Completa el formulario y te contactaremos para confirmar tu reserva</p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-slate-900">Formulario de Reserva</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="checkin">Fecha de llegada</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="checkin" type="date" className="pl-10" value={checkin} onChange={(e) => setCheckin(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="checkout">Fecha de salida</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="checkout" type="date" className="pl-10" value={checkout} onChange={(e) => setCheckout(e.target.value)} required />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="room-type">Tipo de habitación</Label>
                  <Select value={roomType} onValueChange={setRoomType} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una habitación" />
                    </SelectTrigger>
                    <SelectContent>
                      {rooms.map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} - ${room.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Número de huéspedes</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Select value={guests} onValueChange={setGuests} required>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Selecciona huéspedes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 huésped</SelectItem>
                        <SelectItem value="2">2 huéspedes</SelectItem>
                        <SelectItem value="3">3 huéspedes</SelectItem>
                        <SelectItem value="4">4 huéspedes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" placeholder="Tu nombre completo" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                    <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input id="phone" type="tel" placeholder="+57 300 123 4567" className="pl-10" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requests">Solicitudes especiales (opcional)</Label>
                <Input id="requests" placeholder="Ej: Cama extra, vista específica, alergias alimentarias..." value={requests} onChange={(e) => setRequests(e.target.value)} />
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">Políticas de reserva:</h3>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Check-in: 2:00 PM - Check-out: 12:00 PM</li>
                  <li>• Cancelación gratuita hasta 24 horas antes</li>
                  <li>• Servicio de traslado desde/hacia el aeropuerto</li>
                  <li>• Servicio de desayuno</li>
                </ul>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 text-lg font-semibold"
              >
                Enviar solicitud de reserva
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <p className="text-cyan-100 mb-4">¿Prefieres reservar por teléfono?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="bg-white text-cyan-600 hover:bg-cyan-50">
              <Phone className="w-4 h-4 mr-2" />
              +57 (319) 798 1552
            </Button>
            <Button variant="outline" className="bg-white text-cyan-600 hover:bg-cyan-50">
              <Mail className="w-4 h-4 mr-2" />
              oporto83bogota@gmail.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
