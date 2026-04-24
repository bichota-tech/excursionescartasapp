<template>
  <div class="about-view">

    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Sobre Mí">
      <img src="/img/profile_yanetsis.png" alt="Yanetsis Cartas Álvarez ante la arquitectura holandesa" />
      <div class="page-hero-content slide-left">
        <h1>Sobre Mí</h1>
        <p>Historia del Arte <span class="text-atomic font-bold">•</span> Museología <span class="text-atomic font-bold">•</span> Patrimonio Cultural</p>
      </div>
    </section>

    <main class="w-full">

      <!-- ── Presentación ──────────────────────────────────── -->
      <section class="px-4 md:px-8 mb-14 md:mb-16" aria-labelledby="presentation-heading">
        <h2 id="presentation-heading" class="section-title">Yanetsis Cartas Álvarez</h2>
        <div class="flex flex-col w-full md:flex-row gap-8 items-start max-w-5xl mx-auto">

          <!-- Imagen -->
          <div
            class="diagfirst w-[100%] lg:h-[83vh] md:w-[45%] md:h-[60vw] md:max-h-[65vw] bg-cover bg-center shrink-0"
            style="background-image: url('/img/students_museum.png');"
            v-anim="'slide-right'"
            role="img"
            aria-label="Fotografía de Yanetsis"
          ></div>

          <!-- Texto -->
          <div class="diagsecond w-[100%] flex flex-col gap-4 max-w-2xl" v-anim="'slide-left'">
            <p class="font-sans text-[clamp(1rem,2.2vw,1.25rem)] leading-relaxed">
              <strong>Licenciada en Historia del Arte</strong> por la Universidad de La Habana, con más de 18 años de experiencia en museología, gestión del patrimonio cultural y coordinación de excursiones académicas en los Países Bajos.
            </p>
            <p class="font-sans text-[clamp(.9rem,2vw,1.1rem)] leading-relaxed">
              Especializada en el arte holandés del Siglo de Oro —Rembrandt, Vermeer, Hals— y en la arquitectura gótica y renacentista de Utrecht, Ámsterdam y La Haya, ofrezco una perspectiva única que combina el rigor académico con la pasión por la enseñanza.
            </p>
            <p class="font-sans text-[clamp(.9rem,2vw,1.1rem)] leading-relaxed">
              Colaboro regularmente con universidades de <strong>España, México, Argentina, Colombia y Chile</strong>, diseñando rutas académicas personalizadas que se integran en el currículum universitario como experiencias de aprendizaje completas y evaluables.
            </p>
            <!-- Badges -->
            <div class="flex flex-wrap gap-2 mt-1" role="list" aria-label="Áreas de especialización">
              <span
                v-for="badge in badges"
                :key="badge"
                class="bg-navigation text-white font-sans text-xs font-semibold px-3 py-1 rounded-full"
                role="listitem"
              >{{ badge }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Timeline ───────────────────────────────────────── -->
      <section class="px-4 md:px-8 mb-14 md:mb-16" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" class="section-title">Formación y Trayectoria</h2>
        <div class="timeline relative w-[90%] mx-auto pl-8 md:pl-12">
          <article
            v-for="(item, i) in timeline"
            :key="i"
            class="flex gap-6 mb-10 items-start stagger"
            v-anim="i % 2 === 0 ? 'slide-right' : 'slide-left'"
          >
            <!-- Icono -->
            <div class="shrink-0 w-11 h-11 bg-navigation rounded-full flex items-center justify-center -ml-[3rem] md:-ml-[3.5rem] z-[1]">
              <i :class="['bi', item.icon, 'text-white text-lg']" aria-hidden="true"></i>
            </div>
            <!-- Contenido -->
            <div class="flex-1">
              <span class="font-sans text-sm font-bold text-atomic tracking-wide">{{ item.year }}</span>
              <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-navigation font-bold mt-1 mb-2 text-left">{{ item.title }}</h3>
              <p class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-primary">{{ item.text }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- ── Metodología ────────────────────────────────────── -->
      <section class="px-4 md:px-8 mb-14 md:mb-16" aria-labelledby="methodology-heading">
        <h2 id="methodology-heading" class="section-title">Mi Metodología</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-5xl mx-auto">
          <article
            v-for="(method, i) in methods"
            :key="i"
            :class="['bg-navigation flex flex-col items-center text-center gap-4 p-8 md:p-10', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
            v-anim="method.anim"
          >
            <div class="w-16 h-16 bg-atomic rounded-full flex items-center justify-center" aria-hidden="true">
              <i :class="['bi', method.icon, 'text-white text-2xl']"></i>
            </div>
            <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-white font-bold text-center">{{ method.title }}</h3>
            <p class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-white/88">{{ method.text }}</p>
          </article>
        </div>
      </section>

      <!-- ── CTA ────────────────────────────────────────────── -->
      <section
        class="about-cta flex items-center justify-center md:justify-end px-2 lg:px-40 md:px-10 py-24 mb-0"
        aria-label="Llamada a la acción"
      >
        <div class="bg-black/45 backdrop-blur-sm rounded-2xl p-6 max-w-lg text-center">
          <h2 class="font-serif text-[clamp(1.3rem,3vw,2rem)] text-white mb-4">¿Quieres diseñar una excursión con mi metodología?</h2>
          <p class="font-sans text-white/88 mb-6">Escríbeme y cuéntame tu programa académico. Juntos diseñaremos una experiencia educativa a medida.</p>
          <div class="flex flex-wrap justify-center gap-4">
            <RouterLink to="/contacto" class="btn-about-primary">Contactar ahora</RouterLink>
            <a href="https://wa.me/640947912" class="btn-about-secondary" aria-label="Enviar mensaje por WhatsApp">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const badges = ['Historia del Arte', 'Museología', 'Gestión del Patrimonio', 'Arte Holandés', 'Guía Bilingüe']

const timeline = [
  { year: '2003', icon: 'bi-mortarboard-fill', title: 'Licenciatura en Historia del Arte',   text: 'Universidad de La Habana, Cuba. Especialización en Arte Europeo, con énfasis en el período del Renacimiento y el Barroco holandés.' },
  { year: '2007', icon: 'bi-building',          title: 'Formación en Museología',             text: 'Centraal Museum Utrecht. Práctica profesional en gestión de colecciones, conservación preventiva y educación museística.' },
  { year: '2008', icon: 'bi-geo-alt-fill',       title: 'Establecida en Utrecht',              text: 'Inicio de la actividad como guía académica independiente para grupos universitarios hispanohablantes. Primeras colaboraciones con facultades de Historia del Arte españolas.' },
  { year: '2012', icon: 'bi-star-fill',          title: 'Creación de Excursiones Cartas',     text: 'Fundación del proyecto Excursiones Cartas, con un enfoque metodológico propio que integra la preparación previa virtual, la visita presencial y el seguimiento académico posterior.' },
  { year: 'Hoy',  icon: 'bi-globe',             title: '+18 Años · +200 Grupos · 5 Países', text: 'Colaboraciones activas con universidades de España, México, Argentina, Colombia y Chile. Más de 200 grupos académicos guiados en los Países Bajos.' },
]

const methods = [
  { anim: 'slide-top',    icon: 'bi-person-video3', title: 'Antes: Sesión introductoria',   text: 'Realizamos una sesión virtual previa donde contextualizamos históricamente cada visita, presentamos los artistas, obras y espacios que veremos, y resolvemos dudas.' },
  { anim: 'slide-top',    icon: 'bi-buildings',      title: 'Durante: Inmersión presencial', text: 'Las visitas son guiadas con metodología activa: análisis in situ, debate, actividades participativas y conexión constante con los contenidos del programa universitario.' },
  { anim: 'slide-bottom', icon: 'bi-book',           title: 'Después: Seguimiento académico', text: 'Entregamos material complementario —guías de análisis, bibliografía comentada— para que la experiencia se integre plenamente en el currículum universitario.' },
  { anim: 'slide-bottom', icon: 'bi-chat-heart',     title: 'Siempre: Atención personalizada', text: 'Cada grupo es único. Adapto el contenido, el ritmo y el nivel de profundidad a las necesidades específicas de cada facultad, programa y grupo de estudiantes.' },
]
</script>

<style scoped>
/* CTA section con imagen de fondo */
.about-cta {
  background-image: url('/img/students_streets.png');
  background-position: center;
  background-size: cover;
}

/* Timeline: línea vertical */
.timeline::before {
  content: '';
  position: absolute;
  left: 0.6rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--navegation), var(--atomic));
  border-radius: 3px;
}
@media (min-width: 768px) {
  .timeline::before { left: 0.9rem; }
}

/* Botones del CTA */
.btn-about-primary {
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
.btn-about-primary:hover {
  transform: translateY(-2px);
  filter: brightness(1.1);
}
.btn-about-secondary {
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}
.btn-about-secondary:hover {
  transform: translateY(-2px);
  background-color: var(--smart_blue);
}
</style>
