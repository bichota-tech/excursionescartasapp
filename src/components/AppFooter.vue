<template>
  <footer class="w-full bg-smart-blue" role="contentinfo">
    <!-- Cuerpo del footer -->
    <div
      class="relative w-full bg-navigation text-white flex flex-wrap md:flex-nowrap justify-center md:justify-around items-start gap-8 px-6 py-8 md:px-8 md:py-10"
      id="contacto"
    >
      <!-- Imagen watermark de fondo -->
      <img
        src="/img/menu-icon-640w.webp"
        alt=""
        aria-hidden="true"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(14rem,26vw,20rem)] h-auto opacity-[0.07] pointer-events-none select-none"
      />

      <!-- Brand (solo desktop) -->
      <div class="hidden md:flex items-center justify-center z-10">
        <RouterLink
          to="/inicio"
          class="font-serif text-[clamp(1rem,2.2vw,1.6rem)] font-bold text-white no-underline text-center leading-snug cursor-pointer"
          aria-label="Excursiones Cartas - Inicio"
        >
          Excursiones Académicas<br />a los Países Bajos
        </RouterLink>
      </div>

      <!-- Contacto -->
      <div class="flex flex-col gap-2 min-w-[140px] z-10">
        <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-white mb-1 text-left">Contacto</h3>
        <a
          href="tel:+34640947912"
          class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200"
          aria-label="Llamar al +34 640 947 912"
        >
          <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
        </a>
        <a
          href="mailto:adalvarez2021@gmail.com"
          class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200"
          aria-label="Enviar correo a adalvarez2021@gmail.com"
        >
          <i class="bi bi-envelope-fill" aria-hidden="true"></i> adalvarez2021@gmail.com
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200"
          aria-label="Perfil de LinkedIn (se abre en nueva pestaña)"
        >
          <i class="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
        </a>
      </div>

      <!-- Menú -->
      <nav aria-label="Menú del pie de página" class="flex flex-col gap-2 min-w-[140px] z-10">
        <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-white mb-1 text-left">Menú</h3>
        <RouterLink
          v-for="link in footerLinks"
          :key="link.to"
          :to="link.to"
          class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200"
        >{{ link.label }}</RouterLink>
      </nav>

      <!-- Legal -->
      <div class="flex flex-col gap-2 min-w-[140px] z-10">
        <h3 class="font-serif text-[clamp(1rem,2.5vw,1.3rem)] text-white mb-1 text-left">Legal</h3>
        <a href="#" class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200">Aviso Legal</a>
        <a href="#" class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200">Política de Cookies</a>
        <a href="#" class="flex items-center gap-1.5 text-white/85 font-sans text-[clamp(.8rem,1.8vw,1rem)] no-underline border-b border-transparent pb-0.5 hover:text-white hover:border-atomic transition-colors duration-200">Política de Privacidad</a>
      </div>
    </div>

    <!-- Copyright -->
    <p class="font-sans text-xs font-semibold text-white/75 text-center py-3 bg-smart-blue">
      &copy;{{ year }} Excursiones Cartas.
      Diseñado y desarrollado por <a href="#" class="text-atomic no-underline hover:underline" aria-label="ACMA - Desarrollador web">ACMA</a>.
    </p>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()

const footerLinks = [
  { to: '/inicio',    label: 'Inicio' },
  { to: '/sobre-mi',  label: 'Sobre Mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/blog',      label: 'Blog' },
  { to: '/contacto',  label: 'Contacto' },
]
</script>
