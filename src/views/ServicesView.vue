<template>
  <div class="services-view">

    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Servicios">
      <img 
        src="/img/students_canal-1920w.webp" 
        srcset="/img/students_canal-640w.webp 640w, /img/students_canal-1024w.webp 1024w"
        sizes="100vw"
        alt="Estudiantes en un canal holandés" 
      />
      <div class="page-hero-content slide-left">
        <h1>Nuestros Servicios</h1>
        <p>Excursiones académicas diseñadas a medida para universitarios hispanohablantes</p>
      </div>
    </section>

    <main class="w-full">

      <!-- ── ¿Qué ofrecemos? ───────────────────────────────── -->
      <section class="px-4 md:px-8 mb-10 md:mb-14" aria-labelledby="what-heading">
        <h2 id="what-heading" class="section-title">¿Qué ofrecemos?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-5xl mx-auto">
          <article
            v-for="(svc, i) in services"
            :key="i"
            class="bg-navigation p-8 flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 rounded-2xl text-center"
            v-anim="svc.anim"
          >
            <div class="flex flex-col items-center gap-3">
              <div class="w-16 h-16 bg-atomic rounded-full flex items-center justify-center shrink-0">
                <i :class="['bi', svc.icon, 'text-white text-2xl']" aria-hidden="true"></i>
              </div>
              <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] font-bold text-white text-center mb-0">{{ svc.title }}</h3>
            </div>
            <p class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-white/85">{{ svc.text }}</p>
          </article>
        </div>
      </section>

      <!-- ── ¿A quiénes va dirigido? ─────────────────────── -->
      <section class="px-4 md:px-8 mb-10 md:mb-14" aria-labelledby="targets-heading">
        <h2 id="targets-heading" class="section-title">¿A quiénes va dirigido?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          <article
            v-for="(target, i) in targets"
            :key="i"
            :class="['flex flex-col items-center text-center bg-white/70 gap-3 p-7 shadow-[5px_5px_12px_rgba(11,74,193,0.25)]', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
            v-anim="target.anim"
          >
            <i class="bi bi-bookmark-check-fill text-[1.6rem] text-atomic" aria-hidden="true"></i>
            <h3 class="font-serif text-[clamp(1rem,2.2vw,1.2rem)] font-bold text-navigation mb-1 text-center">{{ target.title }}</h3>
            <p class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-secondary">{{ target.text }}</p>
          </article>
        </div>
      </section>

      <!-- ── Destinos Principales ─────────────────────────── -->
      <section class="plane-bg  px-4 md:px-8 mb-10 md:mb-14" aria-labelledby="travel-heading">
        <h2 id="travel-heading" class="section-title">Destinos Principales</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto">
          
          <div
            v-for="(dest, i) in destinations"
            :key="i"
            :class="['relative overflow-hidden cursor-pointer aspect-[4/3]', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
            v-anim="dest.anim"
          >
            <img
              :src="dest.img"
              :srcset="`${dest.img.replace('.webp', '-640w.webp')} 640w, ${dest.img.replace('.webp', '-1024w.webp')} 1024w`"
              sizes="(max-width: 640px) 100vw, 50vw"
              :alt="dest.imgAlt"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.08]"
            />
            <div class="absolute inset-0 flex flex-col items-center justify-end gap-8 px-4 pb-7 bg-gradient-to-t from-navigation/70 to-transparent translate-y-[50%] hover:translate-y-0 transition-transform duration-300">
              <h3 class="font-serif font-bold text-[clamp(1.1rem,2.5vw,1.8rem)] text-white text-center mb-8 w-full">{{ dest.city }}</h3>
              <p class="font-sans font-semibold text-[clamp(.9rem,1.5vw,1.2rem)] text-white/85 w-[70%] text-center">{{ dest.desc }}</p>
            </div>            
          </div>
        </div>
       </section>

      <!-- ── Incluye / Por qué elegirnos (parallax) ──────── -->
      <section class="mb-0 p-0" aria-labelledby="includes-heading">
        <div class="servcontent relative flex flex-col lg:flex-row items-center justify-center gap-8 py-12 px-4 md:px-8 w-full">
          <!-- Overlay oscuro -->
          <div class="absolute inset-0 bg-[#06072a8c] z-0"></div>

          <!-- Bloque VIAJA A -->
          <div class="relative z-[1] flex flex-col items-center w-full lg:w-[40%] lg:min-h-[80vh]">
            <h3 class="font-display text-[30px] text-white mb-0">VIAJA A</h3>
            <svg viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg" aria-label="PAÍSES BAJOS" role="img" class="w-full">
              <text x="180" y="130" class="svg-text" fill="transparent" stroke="#ffffff" stroke-width="6" stroke-linejoin="round">
                PAÍSES BAJOS
              </text>
            </svg>
            <h4 id="includes-heading" class="font-sans font-semibold text-[clamp(1.1rem,3vw,1.3rem)] text-white text-center mb-4 w-full">¿Qué incluye la excursión?</h4>
            <div class="w-full flex flex-col bg-black/55 gap-3 rounded-2xl p-4">
              <div v-for="item in includesList" :key="item.icon" class="flex items-start gap-3 text-left">
                <i :class="['bi', item.icon, 'text-white text-xl bg-atomic rounded-full px-1.5 py-0.5 shrink-0']" aria-hidden="true"></i>
                <p class="font-sans text-white font-semibold text-[clamp(.9rem,2vw,1rem)] m-0">{{ item.text }}</p>
              </div>
            </div>
          </div>

          <!-- Por qué elegirnos -->
          <div class="relative z-[1] flex flex-col items-center w-full lg:w-1/2 max-w-2xl">
            <h3 class="font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-white mb-6 text-center">¿Por qué elegir nuestros servicios?</h3>
            <div class="grid grid-cols-2 gap-2 w-full stagger" role="list">
              <article
                v-for="(why, i) in whyUs"
                :key="i"
                :class="['card-icon bg-navigation flex-col items-center text-center px-4 py-3', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
                v-anim="why.anim"
                role="listitem"
              >
                <i class="bi bi-bookmark-check-fill text-[1.4rem] mb-1 text-atomic" aria-hidden="true"></i>
                <h4 class="font-sans text-[clamp(1.1rem,3vw,1.3rem)] text-white mb-0">{{ why.title }}</h4>
                <p class="font-sans text-[clamp(.9rem,2vw,1.1rem)] text-white/85">{{ why.text }}</p>
              </article>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mt-8">
              <RouterLink to="/contacto" class="btn-svc-primary">Solicitar información</RouterLink>
              <a href="tel:+34640947912" class="btn-svc-secondary" aria-label="Llamar al +34 640 947 912">
                <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const services = [
  { anim: 'slide-left',  icon: 'bi-map',          title: 'Rutas Personalizadas',       text: 'Diseñamos cada itinerario en función del programa académico del grupo. Arte holandés, patrimonio medieval, historia urbana o museología contemporánea: cada ruta es única.' },
  { anim: 'slide-right', icon: 'bi-person-video3', title: 'Sesión Introductoria Virtual', text: 'Antes de la visita realizamos una sesión online de 90 minutos donde contextualizamos históricamente el itinerario, presentamos las obras y artistas principales y resolvemos dudas previas.' },
  { anim: 'slide-left',  icon: 'bi-mortarboard',  title: 'Guía Académica In Situ',     text: 'La visita presencial se desarrolla con metodología activa: análisis comparativo de obras, debates grupales, actividades participativas y un enfoque riguroso pero accesible.' },
  { anim: 'slide-right', icon: 'bi-book',          title: 'Material Didáctico',         text: 'Entregamos a cada participante dossiers con fichas de análisis, textos académicos seleccionados y actividades de evaluación que pueden integrarse directamente en la asignatura.' },
  { anim: 'slide-left',  icon: 'bi-translate',     title: 'Guía Bilingüe',              text: 'Las visitas se conducen en español, con explicaciones en neerlandés e inglés cuando el contexto lo requiere. Facilitamos la comunicación con museos y espacios patrimoniales locales.' },
  { anim: 'slide-right', icon: 'bi-buildings',     title: 'Acceso Privilegiado',        text: 'Gracias a nuestra red de contactos en museos, fundaciones y archivos históricos de Utrecht y Ámsterdam, podemos ofrecer visitas a espacios no accesibles al público general.' },
]

const targets = [
  { anim: 'slide-top',    title: 'Facultades de Historia del Arte', text: 'Asignaturas de Arte Holandés, Arte Barroco, Renacimiento Nórdico, Historia del Museo o Patrimonio Cultural.' },
  { anim: 'slide-top',    title: 'Programas de Museología',        text: 'Grados y masters en museología, gestión cultural, conservación y restauración que incluyen visitas profesionales a museos.' },
  { anim: 'slide-bottom', title: 'Estudios de Patrimonio',         text: 'Programas centrados en la gestión del patrimonio histórico, arquitectónico y cultural europeo.' },
  { anim: 'slide-bottom', title: 'Minors, Masters y Erasmus',      text: 'Estudiantes en programas de intercambio or intensivos que buscan actividades académicas complementarias en la región.' },
]

const destinations = [
  { anim: 'slide-left',   img: '/img/utrecht_aerial.webp',  imgAlt: 'Vista aérea de Utrecht con su famosa Torre Dom',          city: 'Utrecht',  desc: 'Torre Dom, canales históricos, Centraal Museum, Dom Cathedral y el Pandhof medieval.' },
  { anim: 'slide-top',    img: '/img/students_museum.webp', imgAlt: 'Interior de museo holandés con estudiantes',               city: 'Ámsterdam', desc: 'Rijksmuseum, Van Gogh Museum, Stedelijk Museum y el Canal Ring UNESCO.' },
  { anim: 'slide-bottom', img: '/img/hero_home.webp',       imgAlt: 'Estudiantes en los canales holandeses',                   city: 'La Haya',   desc: 'Mauritshuis (La Ronda de Noche, La Joven de la Perla), Gemeentemuseum Den Haag.' },
  { anim: 'slide-right',  img: '/img/students_streets.webp',imgAlt: 'Estudiantes explorando calles medievales holandesas',     city: 'Delft',     desc: 'Ciudad natal de Vermeer, con sus canales únicos y un legado cerámico y pictórico incomparable.' },
]

const includesList = [
  { icon: 'bi-sign-turn-right', text: 'Diseño de rutas planificadas según el currículo académico del grupo.' },
  { icon: 'bi-mortarboard',     text: 'Contenido adaptado al nivel universitario: grado, máster o doctorado.' },
  { icon: 'bi-person-video3',   text: 'Sesión introductoria virtual previa a la excursión.' },
  { icon: 'bi-buildings',       text: 'Visitas a museos, archivos, espacios patrimoniales e instituciones culturales.' },
  { icon: 'bi-activity',        text: 'Actividades participativas, análisis in situ y material académico complementario.' },
]

const whyUs = [
  { anim: 'slide-left',   title: 'Excursiones Personalizadas', text: 'Diseño de rutas adaptadas al contenido del programa académico de cada facultad.' },
  { anim: 'slide-top',    title: 'Adaptadas al Alumno',        text: 'El ritmo, el nivel de análisis y la profundidad se ajustan al perfil del grupo.' },
  { anim: 'slide-bottom', title: 'Material Didáctico',         text: 'Recursos que vinculan la visita presencial con los objetivos académicos evaluables.' },
  { anim: 'slide-right',  title: 'Formato Flexible',           text: 'Sesiones virtuales previas, visitas de medio día o jornada completa, multi-ciudad.' },
]
</script>

<style scoped>
.plane-bg {
  background-image: url('/img/plane-640w.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
}

/* Parallax con imagen de fondo */
.servcontent {
  background-image: url('/img/utrecht_aerial-1920w.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

/* SVG Bungee font */
.svg-text {
  font-family: 'Bungee', cursive;
  font-size: 5rem;
}

/* Botones del bloque parallax */
.btn-svc-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  font-weight: 700;
  text-decoration: none;
  border-radius: 15px;
  background-color: var(--atomic);
  color: white;
  box-shadow: 0 4px 14px rgba(255, 119, 63, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}
.btn-svc-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 119, 63, 0.45);
  filter: brightness(1.1);
}
.btn-svc-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  font-weight: 700;
  text-decoration: none;
  border-radius: 15px;
  background-color: var(--navegation);
  color: white;
  box-shadow: 0 4px 14px rgba(0, 51, 128, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}
.btn-svc-secondary:hover {
  transform: translateY(-2px);
  background-color: var(--smart_blue);
  box-shadow: 0 6px 20px rgba(11, 74, 193, 0.3);
}
</style>
