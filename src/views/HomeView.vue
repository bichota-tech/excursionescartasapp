<template>
  <div class="home-view">

    <!-- ── HERO con vídeo ─────────────────────────────────── -->
    <section class="relative w-full overflow-hidden" aria-label="Cabecera principal">
      <!-- Vídeo de fondo -->
      <div class="relative w-full" aria-hidden="true">
        <video
          autoplay muted loop playsinline
          aria-hidden="true"
          title="Video de fondo con vistas de los Países Bajos"
          class="w-full h-[clamp(23rem,60vw,40rem)] md:h-[clamp(500px,80vh,700px)] object-cover [border-radius:0_0_15px_15px] saturate-[1.8]"
        >
          <source src="/video/utrecht_background.mp4" type="video/mp4" />
          <img src="/img/utrecht_aerial.png" alt="Vista panorámica de los Países Bajos" />
        </video>
      </div>

      <!-- Contenido sobre el vídeo -->
      <div class="absolute inset-0 flex flex-col items-center justify-center px-4">
        <img
          src="/img/menu-icon.png"
          alt="Bandera de los Países Bajos"
          aria-hidden="true"
          class="absolute top-[3%] right-0 w-[clamp(8rem,20vw,12rem)] h-auto z-[1]"
        />
        <div
          class="flex flex-col items-center gap-4 px-4 py-6 bg-[#0f0f0f9a] rounded-2xl w-full max-w-xl md:max-w-[60%] text-center z-[2] slide-left"
        >
          <h1 class="font-serif text-[clamp(1.5rem,4vw,3rem)] text-white leading-tight">
            Excursiones Académicas<br />a los Países Bajos
          </h1>
          <p class="font-sans text-[clamp(.9rem,2vw,1.5rem)] text-white">
            Descubre los Países Bajos a través de nuestras excursiones académicas diseñadas para estudiantes.
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-2">
            <RouterLink to="/servicios" class="btn-cta-primary">Ver Excursiones</RouterLink>
            <a href="https://wa.me/640947912" class="btn-cta-secondary" aria-label="Enviar mensaje por WhatsApp">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CARACTERÍSTICAS ────────────────────────────────── -->
    <section class="w-full px-4 md:px-8 py-10 md:py-14" aria-labelledby="home-heading">
      <div class="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto">

        <!-- Grid de cards -->
        <div class="grid grid-cols-2 gap-2 w-full md:w-1/2 stagger text-center" role="list">
          <article
            v-for="(feat, i) in features"
            :key="i"
            :class="['card-icon bg-navigation text-white py-4 px-3', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
            :v-anim="feat.anim"
            v-anim="feat.anim"
            role="listitem"
          >
            <i :class="['bi bi-compass', 'text-[clamp(1.4rem,2vw,1.8rem)] mb-0 text-atomic']" aria-hidden="true"></i>
            <span class="font-sans text-[clamp(.9rem,2vw,1.15rem)] leading-snug block">{{ feat.text }}</span>
          </article>

          <!-- CTA fila completa -->
          <div class="col-span-2 flex flex-wrap justify-center gap-4 mt-4">
            <RouterLink to="/servicios" class="btn-cta-primary">Ver Excursiones</RouterLink>
            <a href="tel:+34640947912" class="btn-cta-secondary" aria-label="Llamar al +34 640 947 912">
              <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
            </a>
          </div>
        </div>

        <!-- Imagen con badge de experiencia -->
        <div
          class="diagfirst relative w-full md:w-1/2 h-[clamp(25rem,60vh,35rem)] bg-center bg-cover bg-no-repeat flex items-center justify-center"
          style="background-image: url('/img/students_canal.png');"
          role="img"
          aria-label="Fotografía de estudiantes en excursión"
        >
          <div class="stamp absolute top-[65%] right-[0%] md:right-[-5%] rounded-full border-2 border-dashed border-atomic flex items-center justify-center w-[clamp(10rem,25vw,14rem)] h-[clamp(10rem,25vw,14rem)]">
            <div class="rounded-full bg-atomic flex flex-col items-center justify-center w-[clamp(9rem,22vw,13rem)] h-[clamp(9rem,22vw,13rem)] p-3">
              <span class="text-white font-sans text-[clamp(2rem,4vw,3rem)] font-bold">+ 18</span>
              <span class="text-white font-sans text-[clamp(.9rem,3vw,1.1rem)] font-bold text-center">Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SOBRE MÍ PREVIEW ────────────────────────────────── -->
    <section class="flex flex-col items-center px-4 md:px-8 mb-10 md:mb-14" aria-label="about-heading">
      <h2 class="section-title mt-8">Excursiones Cartas</h2>
      <div class="flex flex-col items-center w-full max-w-6xl mx-auto">

        <div class="flex flex-col gap-6 md:flex-row md:items-stretch w-full mb-8 stagger">
          <!-- Foto -->
          <div
            class="diagfirst w-full md:w-1/2 h-[400px] bg-top bg-cover bg-no-repeat z-[2]"
            style="background-image: url('/img/profile_yanetsis.png');"
            v-anim="'slide-right'"
            role="img"
            aria-label="Fotografía de Yanetsis"
          ></div>

          <!-- Texto -->
          <div
            class="diagsecond w-full md:w-1/2 flex flex-col justify-center bg-atomic px-6 pt-20 pb-8 md:px-8 md:py-8 relative md:static -mt-20 md:mt-0 z-[1]"
            v-anim="'slide-left'"
          >
            <h3 class="font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-white mb-4 text-left">Yanetsis Cartas Álvarez</h3>
            <p class="font-sans text-[clamp(.9rem,2vw,1.1rem)] text-white text-left leading-relaxed">
              <strong>Licenciada en Historia del Arte</strong> con experiencia en museología, gestión del
              patrimonio y cultura. Me dedico a enseñar, coordinar y guiar excursiones académicas en
              Países Bajos <em>especialmente en Utrecht</em> para estudiantes y profesionales
              hispanohablantes de universidades de España y Latinoamérica.
            </p>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mt-0 mb-8">
          <RouterLink to="/sobre-mi" class="btn-cta-primary">Conoce más sobre mí</RouterLink>
          <a href="tel:+34640947912" class="btn-cta-secondary" aria-label="Llamar al +34 640 947 912">
            <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
          </a>
        </div>
      </div>
    </section>

    <!-- ── ¿A QUIÉNES VA DIRIGIDO? ─────────────────────────── -->
    <section class="w-full px-4 md:px-8 mb-10 md:mb-14" aria-labelledby="clients-heading">
      <h3 id="clients-heading" class="font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-navigation mb-6 text-center">¿A quiénes va dirigido?</h3>

      <div class="flex flex-col lg:flex-row justify-center items-start gap-6 max-w-6xl mx-auto">
        <!-- Cards targets -->
        <div class="grid grid-cols-2 gap-2 w-full lg:w-1/2 stagger" role="list">
          <article
            v-for="(client, i) in clients"
            :key="i"
            :class="['flex flex-col items-center justify-center text-center p-6 gap-2 rounded-lg shadow-[5px_5px_12px_rgba(11,75,193,0.2)]', i % 2 === 0 ? 'diagfirst' : 'diagsecond']"
            v-anim="client.anim"
            role="listitem"
          >
            <i class="bi bi-bookmark-check-fill text-[1.6rem] text-atomic" aria-hidden="true"></i>
            <span class="font-sans text-[clamp(1rem,2vw,1.2rem)] font-semibold text-primary">{{ client.text }}</span>
          </article>
        </div>

        <!-- Grid de fotos -->
        <div class="grid grid-cols-2 gap-2 w-full lg:w-1/2 p-2 rounded-[15%]">
          <!-- <div class="imgtop overflow-hidden w-full h-full" v-anim="'slide-right'">
            <img src="/img/students_museum.png" class="w-full h-full object-cover object-center block" alt="Grupo de estudiantes visitando un museo holandés" />
          </div> -->
          <!-- <div class="imgbottom overflow-hidden w-full h-full" v-anim="'slide-right'">
            <img src="/img/students_canal.png" class="w-full h-full object-cover object-center block" alt="Estudiantes en los canales de Utrecht" />
          </div> -->
          <div class="imgbottom overflow-hidden w-full h-full" v-anim="'slide-left'">
            <img src="/img/students_streets.png" class="w-full h-full object-cover object-center block" alt="Estudiantes explorando las calles medievales de Utrecht" />
          </div>
          <div class="imgtop overflow-hidden w-full h-full mt-6" v-anim="'slide-left'">
            <img src="/img/hero_home.png" class="w-full h-full object-cover object-center block" alt="Estudiantes con guía en los canales de los Países Bajos" />
          </div>
        </div>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mt-8">
        <RouterLink to="/servicios" class="btn-cta-primary">Ver Ofertas</RouterLink>
        <a href="tel:+34640947912" class="btn-cta-secondary" aria-label="Llamar al +34 640 947 912">
          <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
        </a>
      </div>
    </section>

    <!-- ── SERVICIOS (parallax) ────────────────────────────── -->
    <section
      class="services-parallax relative flex flex-col items-center px-4 md:px-8 py-16 w-full mb-0"
      aria-labelledby="services-heading"
    >
      <!-- Overlay oscuro -->
      <div class="absolute inset-0 bg-black/45 z-0"></div>

      <h2 id="services-heading" class="section-title relative z-[1] text-white! before:bg-white after:bg-white">Nuestros Servicios</h2>

      <div class="relative z-[1] flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-6xl mx-auto">

        <!-- Info viaje -->
        <div class="flex flex-col items-center w-full lg:w-[40%] lg:min-h-[80vh]">
          <h3 class="font-display text-[30px] text-white mb-0">VIAJA A</h3>
          <svg viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg" aria-label="PAÍSES BAJOS" role="img" class="w-full">
            <text x="180" y="130" class="font-display text-[5rem]" fill="transparent" stroke="#ffffff" stroke-width="6" stroke-linejoin="round">
              PAÍSES BAJOS
            </text>
          </svg>
          <h4 class="font-sans font-bold text-[clamp(1.1rem,3vw,1.3rem)] text-white text-center mb-4 w-full">¿Qué incluye la excursión?</h4>
          <div class="w-[95%] p-6 flex flex-col gap-3 bg-black/40 rounded-2xl backdrop-blur-sm">
            <div v-for="item in includes" :key="item.icon" class="flex items-center gap-3 text-left w-full">
              <i :class="['bi', item.icon, 'text-white text-xl bg-atomic rounded-full px-1.5 py-0.5 shrink-0']" aria-hidden="true"></i>
              <p class="font-sans text-white font-semibold text-[clamp(.9rem,2vw,1rem)] m-0">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <!-- Avión decorativo -->
        <div class="absolute bottom-[80%] right-[-5%] w-full z-[0] pointer-events-none" aria-hidden="true">
          <img src="/img/plane.png" alt="" aria-hidden="true" class="w-[100%] md:w-[70%] lg:w-[50%] lg:relative lg:top-auto lg:right-auto" />
        </div>

        <!-- Por qué elegirnos -->
        <div class="flex flex-col items-center w-full lg:w-1/2">
          <h3 class="font-serif text-[clamp(1.2rem,3vw,1.8rem)] font-bold text-white mb-6 text-center">¿Por qué elegir nuestros servicios?</h3>
          <div class="grid grid-cols-2 gap-2 w-full stagger" role="list">
            <article
              v-for="(why, i) in whyUs"
              :key="i"
              :class="['card-icon bg-navigation', i % 2 === 0 ? 'diagfirst' : 'diagsecond', 'flex-col items-center text-center px-4 py-5']"
              v-anim="why.anim"
              role="listitem"
            >
              <i class="bi bi-bookmark-check-fill text-[1.4rem] mb-1 text-atomic" aria-hidden="true"></i>
              <h4 class="font-sans text-[clamp(1.1rem,3vw,1.3rem)] text-white mb-0">{{ why.title }}</h4>
              <p class="font-sans text-[clamp(.9rem,2vw,1.1rem)] text-white/85">{{ why.text }}</p>
            </article>
          </div>
        </div>
      </div>

      <div class="relative z-[1] flex flex-wrap justify-center gap-4 mt-10">
        <RouterLink to="/servicios" class="btn-cta-primary">Ver Ofertas</RouterLink>
        <a href="tel:+34640947912" class="btn-cta-secondary" aria-label="Llamar al +34 640 947 912">
          <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
        </a>
      </div>
    </section>

    <!-- ── CTA FINAL ─────────────────────────────────────────── -->
    <div
      class="footer-cta-bg w-full flex items-center justify-center lg:justify-end lg:p-15 lg:px-50  px-4 md:px-8 py-12"
      role="region"
      aria-label="Llamada a la acción final"
    >
      <div
        class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 max-w-lg text-center text-white shadow-[0_8px_32px_rgba(0,0,0,0.3)] slide-left"
      >
        <h2 class="font-serif text-[clamp(1.5rem,3vw,2.2rem)] text-navigation mb-4">¿Listo para tu próxima aventura académica?</h2>
        <p class="font-sans text-[clamp(1rem,1.8vw,1.15rem)] mb-6 opacity-95">Únete a cientos de estudiantes que ya han descubierto los Países Bajos con nuestras rutas personalizadas.</p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/contacto" class="btn-cta-primary">Reservar ahora</RouterLink>
          <RouterLink to="/servicios" class="btn-cta-secondary">Explorar más</RouterLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const features = [
  { anim: 'slide-top',    text: 'Ciudades con un extenso patrimonio histórico y cultural, ideales para excursiones.' },
  { anim: 'slide-right',  text: 'Recorridos guiados por expertos bilingües en arte e historia para ampliar la cultura local.' },
  { anim: 'slide-left',   text: 'Explorar arquitecturas, museos y arte para comprender el valor cultural de la región.' },
  { anim: 'slide-bottom', text: 'Brindar a los estudiantes experiencias prácticas e inmersivas para su aprendizaje.' },
]

const clients = [
  { anim: 'slide-top',    text: 'Facultades de Historia del Arte.' },
  { anim: 'slide-right',  text: 'Programas de Museología.' },
  { anim: 'slide-left',   text: 'Estudios de Patrimonio.' },
  { anim: 'slide-bottom', text: 'Minors, masters y viajes de estudio.' },
]

const includes = [
  { icon: 'bi-sign-turn-right', text: 'Diseño de rutas planificadas según el currículo.' },
  { icon: 'bi-mortarboard',     text: 'Contenido académico adaptado al nivel universitario.' },
  { icon: 'bi-person-video3',   text: 'Introducciones virtuales previas a la excursión.' },
  { icon: 'bi-buildings',       text: 'Visitas a museos, instituciones culturales y espacios patrimoniales.' },
  { icon: 'bi-activity',        text: 'Actividades participativas y análisis in situ.' },
]

const whyUs = [
  { anim: 'slide-left',   title: 'Excursiones Personalizadas', text: 'Diseño de rutas adaptadas al contenido del programa académico.' },
  { anim: 'slide-top',    title: 'Adaptadas al alumno',        text: 'Excursiones diseñadas en función del nivel del estudiante.' },
  { anim: 'slide-bottom', title: 'Material Didáctico',         text: 'Material complementario que vincula la excursión con los objetivos académicos.' },
  { anim: 'slide-right',  title: 'Formato Flexible',           text: 'Sesiones virtuales previas para introducir al alumno a la excursión.' },
]
</script>

<style scoped>
/* Sección servicios: parallax con imagen de fondo */
.services-parallax {
  background-image: url('/img/utrecht_aerial.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

/* CTA final: imagen de fondo */
.footer-cta-bg {
  background-image: url('/img/students_canal.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/* Botones reutilizables en esta vista */
.btn-cta-primary {
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
.btn-cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 119, 63, 0.45);
  filter: brightness(1.1);
}

.btn-cta-secondary {
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
.btn-cta-secondary:hover {
  transform: translateY(-2px);
  background-color: var(--smart_blue);
  box-shadow: 0 6px 20px rgba(11, 74, 193, 0.3);
}

/* SVG text font */
.services-parallax svg text {
  font-family: 'Bungee', cursive;
  font-size: 5rem;
}
</style>
