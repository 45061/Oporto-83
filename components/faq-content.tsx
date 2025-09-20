import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const faqCategories = [
  {
    title: "Reservas y Tarifas",
    icon: "💳",
    questions: [
      {
        question: "¿Cómo puedo hacer una reserva?",
        answer:
          "Puedes hacer tu reserva directamente en nuestro sitio web, por teléfono al +57 319 798 1552, o por WhatsApp. Ofrecemos confirmación inmediata y los mejores precios garantizados.",
      },
      {
        question: "¿Cuál es la política de cancelación?",
        answer:
          "Ofrecemos cancelación gratuita hasta 24 horas antes de tu llegada. Para reservas no reembolsables, la cancelación debe hacerse con 96 horas de anticipación.",
      },
      {
        question: "¿Incluyen las tarifas impuestos?",
        answer:
          "Nuestras tarifas no incluyen el IVA del 19%. Aparte de este impuesto no hay ningun otro por pagar, no hay costos ocultos.",
      },
      {
        question: "¿Ofrecen descuentos por estadías largas?",
        answer:
          "Sí, ofrecemos descuentos especiales para estadías de 7 noches o más. Contacta directamente para conocer nuestras tarifas preferenciales.",
      },
    ],
  },
  {
    title: "Servicios del Hotel",
    icon: "🏨",
    questions: [
      {
        question: "¿Qué servicios incluye el hotel?",
        answer:
          "Incluimos WiFi gratuito, agua caliente, sala de coworking, y servicio a la habitación.",
      },
      {
        question: "¿Tienen servicio de transporte al aeropuerto?",
        answer:
          "Sí, ofrecemos transporte al Aeropuerto El Dorado con una empresa colaboradora especializada en trasporte, El trayecto toma aproximadamente 10 minutos.",
      },
      {
        question: "¿El desayuno está incluido?",
        answer:
          "El desayuno no está incluido, pero por un costo adicional puedes acceder a el. Se sirve de 7:00 AM a 9:00 AM de lunes a sabado y los dias domingos y festivos de 8:00 AM a 10:00 AM, en nuestro restaurante principal.",
      },
      {
        question: "¿Tienen servicio de lavandería?",
        answer:
          "Sí, ofrecemos servicio de lavandería con entrega el mismo día para prendas recibidas antes de las 10:00 AM.",
      },
    ],
  },
  {
    title: "Ubicación y Transporte",
    icon: "📍",
    questions: [
      {
        question: "¿Qué tan cerca están del aeropuerto?",
        answer:
          "Estamos ubicados a solo 2.5 km del Aeropuerto Internacional El Dorado, aproximadamente 10 minutos en vehículo.",
      },
      {
        question: "¿Cómo llego desde el aeropuerto?",
        answer:
          "Puedes tomar un taxi (costo aproximado $25,000 COP), o usar servicios como Uber. También ofrecemos servicio de recogida personalizado.",
      },
      {
        question: "¿Tienen estacionamiento?",
        answer:
          "Sí, contamos con estacionamiento y seguro para nuestros huéspedes, disponible las 24 horas con vigilancia. (cargo de $10,000 COP por noche, es necesario confirmar disponibilidad).",
      },
      {
        question: "¿Qué atracciones hay cerca?",
        answer:
          "Estamos cerca del Centro Comercial Hayuelos, Salitre Plaza, Gran Estacion, Bogota la Nuestra, Plaza Central, El Eden, al Jardin Botanico, Maloka, parque de atracciones Salitre Magico y a 30 minutos del centro histórico de Bogotá.",
      },
    ],
  },
  {
    title: "Habitaciones y Comodidades",
    icon: "🛏️",
    questions: [
      {
        question: "¿Qué tipos de habitaciones tienen?",
        answer:
          "Ofrecemos habitaciones Sencillas, Dobles, Triples, Cuadruples y Aparta Estudio. Todas incluyen TV LED, baño privado.",
      },
      {
        question: "¿Las habitaciones tienen aire acondicionado?",
        answer:
          "No, nuestras habitaciones no cuentan con aire acondicionado o calefacción ni con ventilador de techo.",
      },
      {
        question: "¿Permiten mascotas?",
        answer:
          "Sí, somos pet-friendly. Aceptamos mascotas pequeñas y medianas con un cargo adicional de $20,000 COP por estadia. Consulta nuestras políticas específicas para la acomodación de mascotas.",
      },
      {
        question: "¿Tienen habitaciones para no fumadores?",
        answer:
          "Todas nuestras habitaciones son libres de humo. Contamos con áreas designadas para fumadores en las zonas exteriores del hotel.",
      },
    ],
  },
  {
    title: "Políticas del Hotel",
    icon: "📋",
    questions: [
      {
        question: "¿Cuáles son los horarios de check-in y check-out?",
        answer:
          "Check-in: 2:00 PM - Check-out: 12:00 PM. Ofrecemos early check-in y late check-out sujeto a disponibilidad, con cargos adicionales si es necesario.",
      },
      {
        question: "¿Qué documentos necesito para registrarme?",
        answer:
          "Necesitas una identificación válida (cédula, pasaporte o licencia de conducir) y la tarjeta de crédito utilizada para la reserva.",
      },
      {
        question: "¿Tienen política de edad mínima?",
        answer:
          "Los huéspedes deben ser mayores de 18 años para registrarse. Los menores deben estar acompañados por un adulto responsable.",
      },
      {
        question: "¿Qué pasa si llego muy tarde?",
        answer:
          "Nuestro front desk está disponible 24/7. Si llegas después de medianoche, por favor avísanos para asegurar un check-in sin problemas.",
      },
    ],
  },
]

export default function FAQContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <Card className="border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-900">
                    <span className="text-3xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-cyan-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
              {categoryIndex < faqCategories.length - 1 && <Separator className="mt-8" />}
            </div>
          ))}

          <Card className="bg-gradient-to-r from-cyan-50 to-amber-50 border-cyan-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste tu respuesta?</h3>
              <p className="text-gray-600 mb-6">
                Nuestro equipo está disponible 24/7 para ayudarte con cualquier pregunta adicional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-cyan-600 hover:bg-cyan-700" asChild>
                  <a href="https://wa.me/573197981552">Contactar por WhatsApp</a>
                </Button>
                <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50 bg-transparent" asChild>
                  <a href="mailto:oporto83bogota@gmail.com?subject=Solicitud%20de%20Información&body=Hola,%20quisiera%20solicitar%20información.">
                    Enviar Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
