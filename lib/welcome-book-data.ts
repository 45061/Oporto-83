export type Locale = "es" | "en" | "fr"
export type PlaceCategory = "restaurantes" | "bares" | "planes"

type LocalizedText = Record<Locale, string>

type LocalizedListItem = {
  name: LocalizedText
  description: LocalizedText
  alt: LocalizedText
  imagePath?: string
  sourceUrl?: string
}

type LocalizedFallbackPlace = {
  category: PlaceCategory
  name: LocalizedText
  description: LocalizedText
  address: LocalizedText
  mapsUrl: string
}

export type FallbackPlace = {
  category: PlaceCategory
  name: string
  description: string
  address: string
  mapsUrl: string
}

export const hotelWelcomeInfo = {
  hotelName: "Hotel Oporto 83",
  address: "Calle 23 #83-20, Bogota, Colombia",
  phone: "+57 319 798 1552",
  whatsappUrl: "https://wa.me/573197981552",
  email: "oporto83bogota@gmail.com",
  checkIn: "2:00 PM",
  checkOut: "12:00 PM",
  wifiName: "Oporto",
  wifiPassword: "Oporto83",
}

export const localizedHotelInfo = {
  airportDistance: {
    es: "2.5 km del Aeropuerto Internacional El Dorado",
    en: "2.5 km from El Dorado International Airport",
    fr: "A 2,5 km de l'aeroport international El Dorado",
  },
  airportTime: {
    es: "10 a 15 minutos en vehiculo",
    en: "10 to 15 minutes by car",
    fr: "10 a 15 minutes en voiture",
  },
  breakfast: {
    es: "Lunes a sabado de 7:00 AM a 9:00 AM. Domingos y festivos de 8:00 AM a 10:00 AM.",
    en: "Monday to Saturday from 7:00 AM to 9:00 AM. Sundays and holidays from 8:00 AM to 10:00 AM.",
    fr: "Du lundi au samedi de 7h00 a 9h00. Les dimanches et jours feries de 8h00 a 10h00.",
  },
  parking: {
    es: "Disponible 24 horas, sujeto a disponibilidad. Valor de referencia: $10.000 COP por noche.",
    en: "Available 24 hours, subject to availability. Reference price: COP 10,000 per night.",
    fr: "Disponible 24h/24 selon disponibilite. Tarif indicatif : 10 000 COP par nuit.",
  },
}

const arrivalNotesLocalized: LocalizedText[] = [
  {
    es: "Presenta un documento de identidad valido al momento del registro.",
    en: "Please present a valid ID at check-in.",
    fr: "Veuillez presenter une piece d'identite valide lors de l'enregistrement.",
  },
  {
    es: "Si tu llegada sera despues de la medianoche, avisanos por WhatsApp para agilizar el ingreso.",
    en: "If you are arriving after midnight, please message us on WhatsApp so we can speed up your arrival.",
    fr: "Si vous arrivez apres minuit, merci de nous prevenir sur WhatsApp pour faciliter votre arrivee.",
  },
  {
    es: "Si necesitas transporte desde o hacia el aeropuerto, nuestro equipo puede orientarte con antelacion.",
    en: "If you need transportation to or from the airport, our team can help you in advance.",
    fr: "Si vous avez besoin d'un transport depuis ou vers l'aeroport, notre equipe peut vous aider a l'avance.",
  },
]

const houseRulesLocalized: LocalizedText[] = [
  {
    es: "Todas las habitaciones son libres de humo.",
    en: "All rooms are non-smoking.",
    fr: "Toutes les chambres sont non-fumeurs.",
  },
  {
    es: "Las mascotas pequenas y medianas son bienvenidas con cargo adicional.",
    en: "Small and medium-sized pets are welcome with an additional fee.",
    fr: "Les animaux de petite et moyenne taille sont acceptes avec un supplement.",
  },
  {
    es: "El early check-in y el late check-out dependen de disponibilidad.",
    en: "Early check-in and late check-out are subject to availability.",
    fr: "L'enregistrement anticipe et le depart tardif dependent des disponibilites.",
  },
  {
    es: "Los menores deben estar acompanados por un adulto responsable.",
    en: "Minors must be accompanied by a responsible adult.",
    fr: "Les mineurs doivent etre accompagnes d'un adulte responsable.",
  },
]

const usefulServicesLocalized: LocalizedText[] = [
  { es: "WiFi gratuito", en: "Free WiFi", fr: "WiFi gratuit" },
  { es: "Agua caliente", en: "Hot water", fr: "Eau chaude" },
  { es: "Sala de coworking", en: "Coworking room", fr: "Espace coworking" },
  { es: "Servicio a la habitacion", en: "Room service", fr: "Service en chambre" },
  { es: "Lavanderia", en: "Laundry service", fr: "Blanchisserie" },
  {
    es: "Traslado al aeropuerto con aliado externo",
    en: "Airport transfer with an external partner",
    fr: "Transfert aeroport avec partenaire externe",
  },
]

const nearbyHighlightsLocalized: LocalizedListItem[] = [
  {
    name: {
      es: "Centro Comercial Hayuelos",
      en: "Hayuelos Shopping Center",
      fr: "Centre commercial Hayuelos",
    },
    description: {
      es: "Ideal para compras, comidas, cine y tramites rapidos a pocos minutos del hotel.",
      en: "Great for shopping, dining, cinema and quick errands just a few minutes from the hotel.",
      fr: "Ideal pour le shopping, les repas, le cinema et les courses rapides a quelques minutes de l'hotel.",
    },
    alt: {
      es: "Vista exterior del Centro Comercial Hayuelos en Bogota",
      en: "Exterior view of Hayuelos Shopping Center in Bogota",
      fr: "Vue exterieure du centre commercial Hayuelos a Bogota",
    },
    imagePath: "/welcome-book/places/centro-comercial-hayuelos-bogota.jpg",
    sourceUrl: "https://www.hayueloscc.com/historia-de-hayuelos/",
  },
  {
    name: { es: "Salitre Plaza", en: "Salitre Plaza", fr: "Salitre Plaza" },
    description: {
      es: "Centro comercial practico para compras, restaurantes y una salida tranquila.",
      en: "A convenient shopping center for shopping, restaurants and a relaxed outing.",
      fr: "Un centre commercial pratique pour faire du shopping, manger et passer un moment tranquille.",
    },
    alt: {
      es: "Vista exterior de Salitre Plaza en Bogota",
      en: "Exterior view of Salitre Plaza in Bogota",
      fr: "Vue exterieure de Salitre Plaza a Bogota",
    },
    imagePath: "/welcome-book/places/salitre-plaza-bogota.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Salitre_Plaza_2022.jpg",
  },
  {
    name: { es: "Gran Estacion", en: "Gran Estacion", fr: "Gran Estacion" },
    description: {
      es: "Uno de los complejos comerciales mas conocidos para compras y entretenimiento.",
      en: "One of the best-known shopping complexes for shopping and entertainment.",
      fr: "L'un des centres commerciaux les plus connus pour le shopping et les loisirs.",
    },
    alt: {
      es: "Fachada del centro comercial Gran Estacion en Bogota",
      en: "Facade of Gran Estacion shopping center in Bogota",
      fr: "Facade du centre commercial Gran Estacion a Bogota",
    },
    imagePath: "/welcome-book/places/gran-estacion-bogota.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Centro_comercial_gran_estacion.JPG",
  },
  {
    name: {
      es: "Jardin Botanico",
      en: "Botanical Garden",
      fr: "Jardin botanique",
    },
    description: {
      es: "Espacio verde perfecto para caminar, respirar aire fresco y desconectarse un rato.",
      en: "A perfect green space to walk, enjoy fresh air and unwind.",
      fr: "Un espace vert parfait pour se promener, respirer et se detendre.",
    },
    alt: {
      es: "Lago y zonas verdes del Jardin Botanico de Bogota",
      en: "Lake and green areas of the Bogota Botanical Garden",
      fr: "Lac et espaces verts du Jardin botanique de Bogota",
    },
    imagePath: "/welcome-book/places/jardin-botanico-bogota.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Lago_Jard%C3%ADn_Bot%C3%A1nico_de_Bogot%C3%A1.jpg",
  },
  {
    name: { es: "Maloka", en: "Maloka", fr: "Maloka" },
    description: {
      es: "Plan interactivo y familiar con ciencia, experiencias y actividades educativas.",
      en: "An interactive family-friendly plan with science, experiences and educational activities.",
      fr: "Une sortie interactive et familiale avec science, experiences et activites educatives.",
    },
    alt: {
      es: "Vista del centro interactivo Maloka en Bogota",
      en: "View of Maloka interactive center in Bogota",
      fr: "Vue du centre interactif Maloka a Bogota",
    },
    imagePath: "/welcome-book/places/maloka-bogota.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Maloka_in_Bogot%C3%A1_Colombia.jpg",
  },
  {
    name: {
      es: "Salitre Magico",
      en: "Salitre Magico",
      fr: "Salitre Magico",
    },
    description: {
      es: "Parque de diversiones para una tarde activa con atracciones y ambiente familiar.",
      en: "Amusement park for an active afternoon with rides and a family atmosphere.",
      fr: "Parc d'attractions pour un apres-midi actif avec maneges et ambiance familiale.",
    },
    alt: {
      es: "Atraccion del parque Salitre Magico en Bogota",
      en: "Ride at Salitre Magico amusement park in Bogota",
      fr: "Attraction du parc Salitre Magico a Bogota",
    },
    imagePath: "/welcome-book/places/salitre-magico-bogota.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Bogot%C3%A1_Parque_Salitre_M%C3%A1gico.JPG",
  },
  {
    name: {
      es: "Centro historico de Bogota",
      en: "Historic Center of Bogota",
      fr: "Centre historique de Bogota",
    },
    description: {
      es: "Recorrido cultural para conocer plazas, arquitectura y puntos emblematicos de la ciudad.",
      en: "A cultural route to discover squares, architecture and iconic places in the city.",
      fr: "Un parcours culturel pour decouvrir les places, l'architecture et les sites emblematiques de la ville.",
    },
    alt: {
      es: "Calle del Centro Historico de Bogota en La Candelaria",
      en: "Street view of Bogota Historic Center in La Candelaria",
      fr: "Vue d'une rue du centre historique de Bogota a La Candelaria",
    },
    imagePath: "/welcome-book/places/centro-historico-bogota-la-candelaria.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:La_Candelaria_-_Bogota,_Colombia_(2012).jpg",
  },
]

const emergencyContactsLocalized = [
  {
    title: {
      es: "Recepcion del hotel",
      en: "Hotel reception",
      fr: "Reception de l'hotel",
    },
    detail: "+57 319 798 1552",
    actionLabel: { es: "WhatsApp", en: "WhatsApp", fr: "WhatsApp" },
    actionHref: "https://wa.me/573197981552",
  },
  {
    title: {
      es: "Correo del hotel",
      en: "Hotel email",
      fr: "Email de l'hotel",
    },
    detail: "oporto83bogota@gmail.com",
    actionLabel: { es: "Enviar correo", en: "Send email", fr: "Envoyer un email" },
    actionHref:
      "mailto:oporto83bogota@gmail.com?subject=Hotel%20Oporto%2083&body=Hello,%20I%20need%20assistance%20during%20my%20stay.",
  },
  {
    title: {
      es: "Emergencias Colombia",
      en: "Colombia emergency line",
      fr: "Urgences Colombie",
    },
    detail: "123",
    actionLabel: { es: "Llamar", en: "Call", fr: "Appeler" },
    actionHref: "tel:123",
  },
]

const fallbackPlacesLocalized: LocalizedFallbackPlace[] = [
  {
    category: "restaurantes",
    name: {
      es: "Crepes & Waffles Hayuelos",
      en: "Crepes & Waffles Hayuelos",
      fr: "Crepes & Waffles Hayuelos",
    },
    description: {
      es: "Opcion conocida para almuerzos, cenas y postres a pocos minutos del hotel.",
      en: "A well-known option for lunch, dinner and desserts a few minutes from the hotel.",
      fr: "Une option connue pour le dejeuner, le diner et les desserts a quelques minutes de l'hotel.",
    },
    address: {
      es: "Centro Comercial Hayuelos, Bogota",
      en: "Hayuelos Shopping Center, Bogota",
      fr: "Centre commercial Hayuelos, Bogota",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Crepes+%26+Waffles+Hayuelos+Bogota",
  },
  {
    category: "restaurantes",
    name: { es: "XL Gourmet Modelia", en: "XL Gourmet Modelia", fr: "XL Gourmet Modelia" },
    description: {
      es: "Restaurante recomendado para disfrutar una comida variada cerca de la zona del hotel.",
      en: "Recommended restaurant for enjoying a varied meal near the hotel area.",
      fr: "Restaurant recommande pour profiter d'un repas varie pres de l'hotel.",
    },
    address: { es: "Modelia, Bogota", en: "Modelia, Bogota", fr: "Modelia, Bogota" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=XL+Gourmet+Modelia+Bogota",
  },
  {
    category: "restaurantes",
    name: { es: "Bufalo Wings Hayuelos", en: "Bufalo Wings Hayuelos", fr: "Bufalo Wings Hayuelos" },
    description: {
      es: "Opcion informal popular para alitas, hamburguesas y reuniones entre amigos.",
      en: "A popular casual spot for wings, burgers and get-togethers with friends.",
      fr: "Un lieu decontracte populaire pour des ailes de poulet, des burgers et des sorties entre amis.",
    },
    address: { es: "Hayuelos, Bogota", en: "Hayuelos, Bogota", fr: "Hayuelos, Bogota" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bufalo+Wings+Hayuelos+Bogota",
  },
  {
    category: "restaurantes",
    name: { es: "El Carnal Hayuelos", en: "El Carnal Hayuelos", fr: "El Carnal Hayuelos" },
    description: {
      es: "Alternativa cercana para quienes buscan cortes, parrilla y ambiente casual.",
      en: "A nearby option for guests looking for grilled meats and a casual atmosphere.",
      fr: "Une option proche pour ceux qui recherchent des grillades et une ambiance detendue.",
    },
    address: { es: "Hayuelos, Bogota", en: "Hayuelos, Bogota", fr: "Hayuelos, Bogota" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=El+Carnal+Hayuelos+Bogota",
  },
  {
    category: "bares",
    name: { es: "BBC Bodega Hayuelos", en: "BBC Bodega Hayuelos", fr: "BBC Bodega Hayuelos" },
    description: {
      es: "Cervezas artesanales y ambiente relajado para la noche.",
      en: "Craft beers and a relaxed evening atmosphere.",
      fr: "Bieres artisanales et ambiance detendue en soiree.",
    },
    address: { es: "Zona Hayuelos, Bogota", en: "Hayuelos area, Bogota", fr: "Zone Hayuelos, Bogota" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=BBC+Bodega+Hayuelos+Bogota",
  },
  {
    category: "bares",
    name: { es: "District Sports Bar", en: "District Sports Bar", fr: "District Sports Bar" },
    description: {
      es: "Bar informal para ver eventos deportivos y compartir en grupo.",
      en: "A casual bar to watch sports and spend time with a group.",
      fr: "Un bar decontracte pour voir du sport et passer du temps en groupe.",
    },
    address: {
      es: "Zona occidente de Bogota",
      en: "Western area of Bogota",
      fr: "Zone ouest de Bogota",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Sports+Bar+Hayuelos+Bogota",
  },
  {
    category: "planes",
    name: { es: "Maloka", en: "Maloka", fr: "Maloka" },
    description: {
      es: "Museo interactivo de ciencia ideal para familias y viajeros curiosos.",
      en: "Interactive science museum ideal for families and curious travelers.",
      fr: "Musee interactif des sciences ideal pour les familles et les voyageurs curieux.",
    },
    address: { es: "Cra. 68D #24A-51, Bogota", en: "Cra. 68D #24A-51, Bogota", fr: "Cra. 68D #24A-51, Bogota" },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Maloka+Bogota",
  },
  {
    category: "planes",
    name: {
      es: "Jardin Botanico de Bogota",
      en: "Bogota Botanical Garden",
      fr: "Jardin botanique de Bogota",
    },
    description: {
      es: "Espacio verde para pasear, descansar y conocer flora local.",
      en: "Green space to walk, relax and discover local flora.",
      fr: "Espace vert pour se promener, se detendre et decouvrir la flore locale.",
    },
    address: {
      es: "Av. Jose Celestino Mutis, Bogota",
      en: "Av. Jose Celestino Mutis, Bogota",
      fr: "Av. Jose Celestino Mutis, Bogota",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Jardin+Botanico+Bogota",
  },
  {
    category: "planes",
    name: { es: "Salitre Magico", en: "Salitre Magico", fr: "Salitre Magico" },
    description: {
      es: "Parque de diversiones con atracciones para familias, grupos y visitantes de todas las edades.",
      en: "Amusement park with rides for families, groups and visitors of all ages.",
      fr: "Parc d'attractions avec des maneges pour les familles, les groupes et tous les ages.",
    },
    address: {
      es: "Av. Calle 63 #68-95, Bogota",
      en: "Av. Calle 63 #68-95, Bogota",
      fr: "Av. Calle 63 #68-95, Bogota",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Salitre+Magico+Bogota",
  },
  {
    category: "planes",
    name: {
      es: "Parque Metropolitano Simon Bolivar",
      en: "Simon Bolivar Metropolitan Park",
      fr: "Parc metropolitain Simon Bolivar",
    },
    description: {
      es: "Uno de los parques urbanos mas importantes de Bogota, ideal para caminar, descansar o hacer picnic.",
      en: "One of Bogota's most important urban parks, ideal for walking, relaxing or having a picnic.",
      fr: "L'un des plus importants parcs urbains de Bogota, ideal pour marcher, se detendre ou pique-niquer.",
    },
    address: {
      es: "Av. Calle 53 y Av. Esmeralda, Bogota",
      en: "Av. Calle 53 and Av. Esmeralda, Bogota",
      fr: "Av. Calle 53 et Av. Esmeralda, Bogota",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Metropolitano+Simon+Bolivar+Bogota",
  },
]

export const welcomeBookTranslations = {
  es: {
    languageName: "Español",
    badge: "Libro digital de bienvenida para huespedes",
    heroTitle: "Bienvenido a Hotel Oporto 83",
    heroDescription:
      "Aqui encontraras la informacion mas importante para tu llegada, tu estancia y tu salida, junto con recomendaciones practicas para disfrutar mejor tu tiempo en Bogota.",
    contactReception: "Contactar recepcion",
    print: "Guardar en PDF o imprimir",
    essentialInfo: "Informacion esencial",
    allInOnePlace: "Todo en un solo lugar",
    allInOnePlaceDescription:
      "Usa esta guia para revisar horarios, servicios, politicas del hotel, contactos utiles y lugares cercanos recomendados.",
    checkLabel: "Check-in / Check-out",
    wifiLabel: "WiFi",
    parkingLabel: "Parqueadero",
    breakfastLabel: "Desayuno",
    network: "Red",
    password: "Clave",
    locationTitle: "Como llegar y ubicacion",
    address: "Direccion",
    airport: "Aeropuerto",
    estimatedTime: "Tiempo estimado",
    viewMaps: "Ver ubicacion en Google Maps",
    beforeArrival: "Antes de llegar",
    stayTag: "Tu estancia",
    stayTitle: "Horarios, servicios y normas del hotel",
    stayDescription: "La idea es que tengas acceso rapido a los datos mas consultados durante tu visita.",
    servicesTitle: "Servicios disponibles",
    rulesTitle: "Normas importantes",
    exploreTag: "Explora la zona",
    exploreTitle: "Recomendaciones cercanas para comer, salir y conocer Bogota",
    exploreDescription:
      "Esta seccion consulta sugerencias desde Google Places cuando la integracion esta configurada y, si no, usa recomendaciones base para que la guia siempre tenga contenido util.",
    categoryLabels: { restaurantes: "Restaurantes", bares: "Bares", planes: "Que hacer cerca" },
    loadingPlaces: "Buscando lugares recomendados...",
    sourceGoogle: "Actualizado con Google Places",
    sourceFallback: "Recomendaciones base",
    viewMapsPlace: "Ver en Google Maps",
    highlightsTitle: "Lugares utiles cerca del hotel",
    highlightsDescription: "Haz clic sobre un lugar para ver una imagen destacada y una referencia rapida.",
    selectedPlace: "Lugar seleccionado",
    imageSource: "Ver fuente de la imagen",
    usefulContacts: "Contactos utiles",
    supportTag: "Salida y soporte",
    supportTitle: "Si necesitas ayuda durante tu estancia, estamos a un mensaje de distancia.",
    supportDescription:
      "Recuerda tu horario de salida a las {checkout}. Si necesitas apoyo adicional, coordinacion de transporte o una consulta puntual, puedes escribirnos directamente.",
    whatsapp: "Escribir por WhatsApp",
    email: "Enviar correo",
  },
  en: {
    languageName: "English",
    badge: "Digital welcome book for guests",
    heroTitle: "Welcome to Hotel Oporto 83",
    heroDescription:
      "Here you will find the most important information for your arrival, your stay and your departure, along with practical recommendations to enjoy your time in Bogota.",
    contactReception: "Contact reception",
    print: "Save as PDF or print",
    essentialInfo: "Essential information",
    allInOnePlace: "Everything in one place",
    allInOnePlaceDescription:
      "Use this guide to review schedules, services, hotel policies, useful contacts and recommended nearby places.",
    checkLabel: "Check-in / Check-out",
    wifiLabel: "WiFi",
    parkingLabel: "Parking",
    breakfastLabel: "Breakfast",
    network: "Network",
    password: "Password",
    locationTitle: "How to get here and location",
    address: "Address",
    airport: "Airport",
    estimatedTime: "Estimated time",
    viewMaps: "View location on Google Maps",
    beforeArrival: "Before arrival",
    stayTag: "Your stay",
    stayTitle: "Schedules, services and house rules",
    stayDescription: "The goal is to give you quick access to the details guests ask for most during their stay.",
    servicesTitle: "Available services",
    rulesTitle: "Important rules",
    exploreTag: "Explore the area",
    exploreTitle: "Nearby recommendations to eat, go out and discover Bogota",
    exploreDescription:
      "This section uses Google Places suggestions when the integration is configured and falls back to curated recommendations so the guide always remains useful.",
    categoryLabels: { restaurantes: "Restaurants", bares: "Bars", planes: "Things to do nearby" },
    loadingPlaces: "Looking for recommended places...",
    sourceGoogle: "Updated with Google Places",
    sourceFallback: "Default recommendations",
    viewMapsPlace: "View on Google Maps",
    highlightsTitle: "Useful places near the hotel",
    highlightsDescription: "Click on a place to see a featured image and a quick reference.",
    selectedPlace: "Selected place",
    imageSource: "View image source",
    usefulContacts: "Useful contacts",
    supportTag: "Departure and support",
    supportTitle: "If you need help during your stay, we are just one message away.",
    supportDescription:
      "Remember that check-out is at {checkout}. If you need extra help, transport coordination or a specific answer, feel free to contact us.",
    whatsapp: "Message on WhatsApp",
    email: "Send email",
  },
  fr: {
    languageName: "Francais",
    badge: "Livre d'accueil numerique pour les clients",
    heroTitle: "Bienvenue a l'Hotel Oporto 83",
    heroDescription:
      "Vous trouverez ici les informations essentielles pour votre arrivee, votre sejour et votre depart, ainsi que des recommandations pratiques pour profiter de votre temps a Bogota.",
    contactReception: "Contacter la reception",
    print: "Enregistrer en PDF ou imprimer",
    essentialInfo: "Informations essentielles",
    allInOnePlace: "Tout au meme endroit",
    allInOnePlaceDescription:
      "Utilisez ce guide pour consulter les horaires, les services, les regles de l'hotel, les contacts utiles et les lieux recommandes a proximite.",
    checkLabel: "Check-in / Check-out",
    wifiLabel: "WiFi",
    parkingLabel: "Parking",
    breakfastLabel: "Petit-dejeuner",
    network: "Reseau",
    password: "Mot de passe",
    locationTitle: "Acces et emplacement",
    address: "Adresse",
    airport: "Aeroport",
    estimatedTime: "Temps estime",
    viewMaps: "Voir l'emplacement sur Google Maps",
    beforeArrival: "Avant l'arrivee",
    stayTag: "Votre sejour",
    stayTitle: "Horaires, services et regles de l'hotel",
    stayDescription: "L'objectif est de vous donner un acces rapide aux informations les plus utiles pendant votre visite.",
    servicesTitle: "Services disponibles",
    rulesTitle: "Regles importantes",
    exploreTag: "Explorer les environs",
    exploreTitle: "Recommandations proches pour manger, sortir et decouvrir Bogota",
    exploreDescription:
      "Cette section utilise Google Places lorsque l'integration est configuree, sinon elle affiche des recommandations de base pour que le guide reste toujours utile.",
    categoryLabels: { restaurantes: "Restaurants", bares: "Bars", planes: "A faire a proximite" },
    loadingPlaces: "Recherche de lieux recommandes...",
    sourceGoogle: "Mis a jour avec Google Places",
    sourceFallback: "Recommandations de base",
    viewMapsPlace: "Voir sur Google Maps",
    highlightsTitle: "Lieux utiles pres de l'hotel",
    highlightsDescription: "Cliquez sur un lieu pour voir une image mise en avant et une reference rapide.",
    selectedPlace: "Lieu selectionne",
    imageSource: "Voir la source de l'image",
    usefulContacts: "Contacts utiles",
    supportTag: "Depart et assistance",
    supportTitle: "Si vous avez besoin d'aide pendant votre sejour, nous sommes a un message de distance.",
    supportDescription:
      "N'oubliez pas que le check-out est a {checkout}. Si vous avez besoin d'une aide supplementaire, d'un transport ou d'une information precise, contactez-nous directement.",
    whatsapp: "Ecrire sur WhatsApp",
    email: "Envoyer un email",
  },
} as const

function pickText(text: LocalizedText, locale: Locale) {
  return text[locale]
}

export function getArrivalNotes(locale: Locale) {
  return arrivalNotesLocalized.map((item) => pickText(item, locale))
}

export function getHouseRules(locale: Locale) {
  return houseRulesLocalized.map((item) => pickText(item, locale))
}

export function getUsefulServices(locale: Locale) {
  return usefulServicesLocalized.map((item) => pickText(item, locale))
}

export function getNearbyHighlights(locale: Locale) {
  return nearbyHighlightsLocalized.map((item) => ({
    name: pickText(item.name, locale),
    description: pickText(item.description, locale),
    alt: pickText(item.alt, locale),
    imagePath: item.imagePath ?? "",
    sourceUrl: item.sourceUrl ?? "",
  }))
}

export function getEmergencyContacts(locale: Locale) {
  return emergencyContactsLocalized.map((item) => ({
    title: pickText(item.title, locale),
    detail: item.detail,
    actionLabel: pickText(item.actionLabel, locale),
    actionHref: item.actionHref,
  }))
}

export function getFallbackPlaces(locale: Locale): FallbackPlace[] {
  return fallbackPlacesLocalized.map((item) => ({
    category: item.category,
    name: pickText(item.name, locale),
    description: pickText(item.description, locale),
    address: pickText(item.address, locale),
    mapsUrl: item.mapsUrl,
  }))
}
