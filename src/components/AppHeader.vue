<template>
  <header class="fixed top-0 z-[900] w-full bg-white/90 backdrop-blur-md border-b border-navigation/10 shadow-[0_4px_16px_rgba(0,51,128,0.05)]">
    <!-- Skip link accesibilidad -->
    <a href="#main-content" class="skip-link">Ir al contenido principal</a>

    <div class="flex items-center justify-between px-4 md:px-8 py-2.5 max-w-[90%] mx-auto">

      <!-- Logo -->
      <RouterLink
        to="/inicio"
        class="flex items-center gap-2.5 text-navigation no-underline"
        aria-label="Excursiones Cartas - Ir al inicio"
      >
        <img
          src="/img/menu-icon.png"
          alt="Bandera de los Países Bajos"
          class="w-12 md:w-18 h-auto object-contain"
        />
        <span class="font-serif text-base md:text-lg lg:text-xl leading-tight font-semibold text-navigation">
          <strong>Excursiones<br>Cartas</strong>
        </span>
      </RouterLink>

      <!-- Botón hamburguesa (móvil) -->
      <button
        class="flex flex-col gap-1.5 md:hidden p-1.5 w-9 bg-transparent border-none cursor-pointer relative z-[950]"
        id="hamburguer-btn"
        :aria-expanded="appStore.menuOpen.toString()"
        aria-controls="nav-menu"
        aria-label="Abrir menú de navegación"
        @click="appStore.toggleMenu"
      >
        <span
          v-for="n in 3"
          :key="n"
          class="block w-full h-0.5 rounded transition-all duration-300"
          :class="[
            appStore.menuOpen ? 'bg-navigation' : 'bg-navigation',
            {
              'translate-y-2 rotate-45':  n === 1 && appStore.menuOpen,
              'opacity-0':                n === 2 && appStore.menuOpen,
              '-translate-y-2 -rotate-45': n === 3 && appStore.menuOpen,
            }
          ]"
        ></span>
      </button>

      <!-- Navegación -->
      <nav
        :class="[
          'fixed md:static top-0 left-0 h-screen md:h-auto w-full md:w-auto',
          'bg-gradient-to-b from-dutch-red/100 via-white/100 to-navigation/100 md:bg-none md:bg-transparent backdrop-blur-lg md:backdrop-blur-none',
          'pt-24 md:pt-0 px-6 md:px-0 pb-8 md:pb-0',
          'transition-transform duration-300 md:transition-none z-[800] md:z-auto overflow-y-auto md:overflow-visible',
          appStore.menuOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'
        ]"
        id="nav-menu"
        aria-label="Menú principal"
        role="navigation"
      >
        <ul class="flex flex-col items-center justify-center md:flex-row gap-4 md:gap-1 lg:gap-4 list-none m-0 p-0 w-full">
          <li v-for="link in navLinks" :key="link.to" class="w-full md:w-auto flex justify-center ">
            <RouterLink
              :to="link.to"
              :aria-label="`Ir a ${link.label}`"
              class="block text-navigation font-bold drop-shadow md:drop-shadow-none md:font-semibold md:text-navigation font-sans text-xl md:text-sm lg:text-xl
                     px-3 py-2 md:py-1 md:px-3 rounded-xl md:rounded-sm
                     border-b-2 lg:rounded-md lg:border-b-3 border-transparent
                     hover:border-b-navigation
                     md:hover:border-b-navigation
                     [&.router-link-active]:border-b-navigation md:[&.router-link-active]:bg-transparent
                     [&.router-link-active]:text-navigation md:[&.router-link-active]:border-b-navigation
                     transition-all duration-200 no-underline text-center"
              @click="appStore.closeMenu"
            >{{ link.label }}</RouterLink>
          </li>
          <li class="mt-4 md:mt-0">
            <a
              href="tel:+34640947912"
              class="flex items-center justify-center gap-2
                     bg-atomic md:bg-navigation text-white font-sans font-bold text-lg md:text-sm lg:text-xl
                     px-6 py-3 md:px-3.5 md:py-1.5 rounded-2xl md:rounded-xl
                     shadow-[0_4px_12px_rgba(255,119,63,0.3)] md:shadow-none
                     border-none! hover:bg-atomic/90 md:hover:bg-smart-blue hover:scale-105 md:hover:scale-100
                     transition-all duration-200 no-underline"
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
