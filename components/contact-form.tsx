"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `
      ¡Hola! Quisiera solicitar información con los siguientes datos:
      -------------------------------------
      *Nombre:* ${formData.name}
      *Email:* ${formData.email}
      *Teléfono:* ${formData.phone || "No proporcionado"}
      -------------------------------------
      *Asunto:* ${formData.subject}
      *Mensaje:* ${formData.message}
      -------------------------------------
      ¡Quedo a la espera de su respuesta!
    `

    const whatsappNumber = "+573197981552" // Reemplaza con tu número de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="h-fit">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje Enviado!</h3>
          <p className="text-slate-600 mb-4">Gracias por contactarnos. Te responderemos en menos de 2 horas.</p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline">
            Enviar Otro Mensaje
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-2xl text-slate-900">Envíanos un Mensaje</CardTitle>
        <p className="text-slate-600">Completa el formulario y te contactaremos pronto</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre Completo *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+57 300 123 4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Asunto *</Label>
              <Select onValueChange={(value) => handleInputChange("subject", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un asunto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reservation">Reserva</SelectItem>
                  <SelectItem value="information">Información General</SelectItem>
                  <SelectItem value="events">Eventos y Reuniones</SelectItem>
                  <SelectItem value="transport">Transporte</SelectItem>
                  <SelectItem value="complaint">Quejas y Sugerencias</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Mensaje *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              rows={5}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Enviar Mensaje
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
