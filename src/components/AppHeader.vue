<template>
  <header class="fixed top-0 z-[900] w-full bg-white/90 backdrop-blur-md border-b border-navigation/10 shadow-[0_4px_16px_rgba(0,51,128,0.05)]">
    <!-- Skip link accesibilidad -->
    <a href="#main-content" class="skip-link">Ir al contenido principal</a>

    <div class="flex items-center justify-between px-4 md:px-8 py-2.5 max-w-7xl mx-auto">

      <!-- Logo -->
      <RouterLink
        to="/inicio"
        class="flex items-center gap-2.5 text-navigation no-underline"
        aria-label="Excursiones Cartas - Ir al inicio"
      >
        <img
          src="/img/menu-icon.png"
          alt="Bandera de los Países Bajos"
          class="w-12 md:w-14 h-auto object-contain"
        />
        <span class="font-serif text-base md:text-lg leading-tight font-semibold text-navigation">
          Excursiones<br /><strong>Cartas</strong>
        </span>
      </RouterLink>

      <!-- Botón hamburguesa (móvil) -->
      <button
        class="flex flex-col gap-1.5 md:hidden p-1.5 w-9 bg-transparent border-none cursor-pointer"
        id="hamburguer-btn"
        :aria-expanded="appStore.menuOpen.toString()"
        aria-controls="nav-menu"
        aria-label="Abrir menú de navegación"
        @click="appStore.toggleMenu"
      >
        <span
          v-for="n in 3"
          :key="n"
          class="block w-full h-0.5 bg-navigation rounded transition-all duration-300"
          :class="{
            'translate-y-2 rotate-45':  n === 1 && appStore.menuOpen,
            'opacity-0':                n === 2 && appStore.menuOpen,
            '-translate-y-2 -rotate-45': n === 3 && appStore.menuOpen,
          }"
        ></span>
      </button>

      <!-- Navegación -->
      <nav
        :class="[
          'fixed md:static top-0 left-0 h-screen md:h-auto w-[min(75vw,280px)] md:w-auto',
          'bg-navigation/96 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none',
          'pt-16 md:pt-0 px-6 md:px-0 pb-8 md:pb-0',
          'transition-[left] duration-300 md:transition-none z-[800] md:z-auto overflow-y-auto md:overflow-visible',
          appStore.menuOpen ? 'left-0' : 'left-[-100%]'
        ]"
        id="nav-menu"
        aria-label="Menú principal"
        role="navigation"
      >
        <ul class="flex flex-col md:flex-row md:items-center gap-4 md:gap-1 list-none m-0 p-0">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              :aria-label="`Ir a ${link.label}`"
              class="block text-white md:text-navigation font-sans text-base md:text-sm font-medium
                     px-3 py-2 md:py-1.5 rounded-none md:rounded
                     border-l-[3px] md:border-l-0 border-b-2 border-transparent
                     hover:bg-white/10 md:hover:bg-transparent
                     hover:border-l-atomic md:hover:border-l-transparent md:hover:border-b-navigation
                     [&.router-link-active]:bg-white/10 md:[&.router-link-active]:bg-transparent
                     [&.router-link-active]:border-l-atomic md:[&.router-link-active]:border-l-transparent md:[&.router-link-active]:border-b-navigation
                     transition-colors duration-200 no-underline"
              @click="appStore.closeMenu"
            >{{ link.label }}</RouterLink>
          </li>
          <li>
            <a
              href="tel:+34640947912"
              class="flex items-center gap-1.5 mt-4 md:mt-0
                     bg-atomic md:bg-navigation text-white font-sans font-bold
                     px-3.5 py-2 md:py-1.5 rounded-xl
                     shadow-[0_4px_12px_rgba(255,119,63,0.2)] md:shadow-none
                     border-none! hover:bg-atomic/90 md:hover:bg-smart-blue
                     transition-colors duration-200 no-underline"
              aria-label="Llamar al +34 640 947 912"
              @click="appStore.closeMenu"
            >
              <i class="bi bi-telephone-fill" aria-hidden="true"></i>
              Llámanos
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Overlay para cerrar menú móvil -->
    <div
      v-if="appStore.menuOpen"
      class="fixed inset-0 bg-black/45 z-[799] md:hidden"
      aria-hidden="true"
      @click="appStore.closeMenu"
    ></div>
  </header>
</template>

<script setup>
import { useAppStore } from '../stores'
import { RouterLink } from 'vue-router'

const appStore = useAppStore()

const navLinks = [
  { to: '/inicio',    label: 'Inicio' },
  { to: '/sobre-mi',  label: 'Sobre Mí' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/blog',      label: 'Blog' },
  { to: '/contacto',  label: 'Contacto' },
]
</script>
