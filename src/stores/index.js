import { defineStore } from 'pinia'

// ─── Blog Posts Store ───────────────────────────────────────────────────────
export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: [
      {
        id: 1,
        slug: 'rembrandt-y-la-luz-del-conocimiento',
        title: 'Rembrandt y la Luz del Conocimiento',
        excerpt: 'Descubre cómo el uso magistral del claroscuro por Rembrandt va más allá de la técnica pictórica: es una metáfora viva del proceso de aprendizaje.',
        content: `
          <p>Cuando Rembrandt van Rijn tomaba su pincel, no solo pintaba cuerpos o rostros: pintaba <strong>estados del alma</strong>. Su técnica del claroscuro —esa poderosa contraposición entre luz y sombra— es quizás la herramienta más pedagógica que el arte ha producido jamás.</p>
          <h3>La luz como símbolo académico</h3>
          <p>En obras como "La lección de anatomía del doctor Nicolaes Tulp" (1632), conservada en el Mauritshuis de La Haya, Rembrandt captura algo más que una clase de medicina del siglo XVII. Captura la <em>intensidad del descubrimiento</em>, ese instante en que la comprensión llega y lo transforma todo.</p>
          <p>Para los estudiantes que visitan los Países Bajos con Excursiones Cartas, ver esta obra en vivo supone una experiencia transformadora. La diferencia entre verla en un libro de texto y contemplarla frente a frente es inconmensurable: los pigmentos envejecidos, el tamaño real del lienzo, la presencia casi física de los personajes.</p>
          <h3>Utrecht y la Escuela Caravaggista</h3>
          <p>Lo que muchos no saben es que Utrecht fue el epicentro del caravaggismo holandés. Pintores como Hendrick ter Brugghen y Gerard van Honthorst trajeron las influencias de Caravaggio desde Roma, creando una escuela propia que influiría directamente en el joven Rembrandt.</p>
          <p>Durante nuestras excursiones, visitamos el <strong>Centraal Museum</strong> de Utrecht, donde se conservan obras fundamentales de estos maestros. Allí, los estudiantes comprenden que el arte no nace en el vacío: es siempre respuesta, conversación, herencia.</p>
          <h3>Para profundizar</h3>
          <p>Si visitas los Países Bajos, te recomendamos tres destinos imprescindibles relacionados con Rembrandt: el Rijksmuseum de Ámsterdam, el Mauritshuis de La Haya y la Casa Rembrandt (Rembrandthuis) en Ámsterdam, donde el maestro vivió y trabajó décadas enteras.</p>
        `,
        image: '/img/blog_rembrandt.png',
        imageAlt: 'Pintura estilo Rembrandt mostrando una clase magistral en un museo holandés',
        category: 'Arte Holandés',
        date: '10 de marzo de 2025',
        readTime: '6 min',
        tags: ['Rembrandt', 'Arte Holandés', 'Museología', 'Utrecht'],
      },
      {
        id: 2,
        slug: 'las-joyas-ocultas-de-utrecht',
        title: 'Las Joyas Ocultas de Utrecht',
        excerpt: 'Utrecht no es solo la Torre Dom. Te llevamos por los rincones menos conocidos de esta ciudad medieval que esconde siglos de historia del arte en cada callejón.',
        content: `
          <p>Cuando los viajeros piensan en los Países Bajos, inmediatamente imaginan Ámsterdam: los canales, el Rijksmuseum, el Barrio Rojo. Pero Utrecht, a solo 30 minutos en tren, guarda secretos que ningún libro de Arte puede revelar por completo.</p>
          <h3>La Torre Dom y el Domkerk</h3>
          <p>La Torre Dom (Domtoren), construida entre 1321 y 1382, es el campanario más alto de los Países Bajos con sus 112 metros. Pero lo verdaderamente fascinante es su historia incompleta: una tormenta en 1674 destruyó la nave de la catedral que la unía al Domkerk, dejando un espacio vacío que todavía hoy permanece abierto, como una cicatriz urbana que el tiempo ha convertido en plaza.</p>
          <p>Subir a la Torre Dom con nuestros grupos de estudiantes siempre genera un momento de silencio colectivo cuando, desde arriba, se comprende de golpe la escala de la ciudad medieval y la planificación urbanística de los siglos XIV y XV.</p>
          <h3>Los Wharf-Cellars: vida bajo el nivel del agua</h3>
          <p>Los llamados <em>werfkelders</em> (bodegas de muelle) son una peculiaridad única de Utrecht. En el siglo XIII, los comerciantes construyeron sótanos directamente bajo las calles que daban al canal, con puertas que se abrían a nivel del agua para cargar y descargar mercancías.</p>
          <p>Hoy convertidos en restaurantes y terrazas, estos espacios permiten a los visitantes literalmente sentarse <strong>bajo el nivel del canal</strong>, una experiencia que ilustra perfectamente la ingeniería hidráulica holandesa que tanto admiramos.</p>
          <h3>El Panadero Bartholomeus</h3>
          <p>En el Centraal Museum de Utrecht se conserva el retrato más pequeño y más tierno del arte holandés del siglo XVII: el Panadero Bartholomeus van der Helst. Si lo encuentras, observa sus ojos: hay en ellos una dignidad tranquila que Vermeer habría envidiado.</p>
        `,
        image: '/img/blog_utrecht.png',
        imageAlt: 'Pintura al óleo estilo holandés del siglo XVII mostrando la ciudad de Utrecht con sus canales y la Torre Dom',
        category: 'Cultura y Patrimonio',
        date: '22 de enero de 2025',
        readTime: '8 min',
        tags: ['Utrecht', 'Patrimonio', 'Arquitectura', 'Historia Medieval'],
      },
      {
        id: 3,
        slug: 'el-arte-de-viajar-para-aprender',
        title: 'El Arte de Viajar para Aprender',
        excerpt: 'La exitosa fórmula pedagógica detrás de las excursiones académicas: por qué ver un cuadro en persona cambia para siempre nuestra forma de entender la historia.',
        content: `
          <p>Existe una experiencia que ningún manual universitario puede reproducir: estar frente a frente con una obra de arte que has estudiado solo en fotografías. El momento en que la imagen bidimensional del libro se convierte en objeto real —con tamaño, textura, presencia— es una de las experiencias más transformadoras de la educación en humanidades.</p>
          <h3>La teoría del "Efecto de Presencia"</h3>
          <p>Los investigadores en educación artística han documentado lo que denominan el <em>presence effect</em>: la capacidad de las obras de arte originales para generar respuestas emocionales e intelectuales que las reproducciones simplemente no pueden replicar. Este efecto es especialmente potente en estudiantes de Historia del Arte, Museología y Patrimonio Cultural.</p>
          <p>Cuando un estudiante de museología visita por primera vez el Rijksmuseum y se detiene ante "La Ronda de Noche", algo cambia en su comprensión del concepto de <em>escala narrativa</em>. El cuadro mide 3,79 × 4,53 metros: esa dimensión es parte esencial de su significado, y solo puede experimentarse en persona.</p>
          <h3>Educación antes de la excursión</h3>
          <p>En Excursiones Cartas, cada visita viene precedida por <strong>sesiones introductorias virtuales</strong> donde preparamos a los estudiantes: contexto histórico, iconografía, terminología especializada. Cuando llegan al museo, no son turistas desorientados: son investigadores que buscan confirmar hipótesis.</p>
          <p>Esta metodología, desarrollada durante más de 18 años de práctica, es la que distingue nuestra propuesta de la simple visita organizada.</p>
          <h3>Después del viaje: el seguimiento académico</h3>
          <p>El aprendizaje no termina al volver al aeropuerto. Ofrecemos material complementario —guías de análisis, bibliografía comentada, acceso a recursos digitales de los museos visitados— para que la excursión se integre en el currículum universitario como una experiencia completa y documentada.</p>
        `,
        image: '/img/blog_scholar.png',
        imageAlt: 'Pintura estilo Vermeer de una joven académica estudiando mapas y libros a la luz de una vela',
        category: 'Metodología',
        date: '5 de diciembre de 2024',
        readTime: '7 min',
        tags: ['Pedagogía', 'Metodología', 'Excursiones', 'Aprendizaje'],
      },
    ],
  }),

  getters: {
    getPostBySlug: (state) => (slug) => state.posts.find((p) => p.slug === slug),
    getRelatedPosts: (state) => (currentSlug) =>
      state.posts.filter((p) => p.slug !== currentSlug).slice(0, 2),
  },
})

// ─── App / Nav Store ────────────────────────────────────────────────────────
export const useAppStore = defineStore('app', {
  state: () => ({
    menuOpen: false,
  }),
  actions: {
    toggleMenu() { this.menuOpen = !this.menuOpen },
    closeMenu()  { this.menuOpen = false },
  },
})
