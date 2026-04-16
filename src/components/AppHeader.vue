<template>
  <header role="banner">
    <!-- Liens de skip para accesibilidad -->
    <a href="#main-content" class="skip-link">Ir al contenido principal</a>

    <div class="header-inner">
      <!-- Logo / Nombre -->
      <RouterLink to="/inicio" class="logo" aria-label="Excursiones Cartas - Ir al inicio">
        <img src="/img/menu-icon.png" alt="Bandera de los Países Bajos" />
        <span>Excursiones<br /><strong>Cartas</strong></span>
      </RouterLink>

      <!-- Botón hamburguesa (móvil) -->
      <button
        class="hamburguer"
        id="hamburguer-btn"
        :aria-expanded="appStore.menuOpen.toString()"
        aria-controls="nav-menu"
        aria-label="Abrir menú de navegación"
        @click="appStore.toggleMenu"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>

      <!-- Navegación -->
      <nav :class="['nav-menu', { active: appStore.menuOpen }]" id="nav-menu" aria-label="Menú principal" role="navigation">
        <ul role="list">
          <li v-for="link in navLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              :aria-label="`Ir a ${link.label}`"
              @click="appStore.closeMenu"
            >{{ link.label }}</RouterLink>
          </li>
          <li>
            <a
              href="tel:+34640947912"
              class="nav-cta"
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

    <!-- Overlay para cerrar menú -->
    <div
      v-if="appStore.menuOpen"
      class="nav-overlay"
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

<style scoped>
/* Skip link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--navegation);
  color: white;
  padding: 8px 12px;
  z-index: 9999;
  font-family: 'Montserrat', sans-serif;
  transition: top 0.2s;
  text-decoration: none;
}
.skip-link:focus { top: 0; }

header {
  position: sticky;
  top: 0;
  z-index: 900;
  width: 100%;
  background: var(--glass-bg, rgba(255, 255, 255, 0.95));
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 51, 128, 0.1);
  box-shadow: 0 4px 16px rgba(0, 51, 128, 0.05);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .6rem 1.2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: .6rem;
  text-decoration: none;
  color: var(--navegation);
}

.logo img {
  width: clamp(2.2rem, 6vw, 3.5rem);
  height: auto;
  object-fit: contain;
}

.logo span {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(.75rem, 2vw, 1rem);
  line-height: 1.2;
  font-weight: 600;
}

/* Hamburguesa */
.hamburguer {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  width: 36px;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: var(--navegation);
  border-radius: 3px;
  transition: all 0.3s ease;
  display: block;
}

.hamburguer[aria-expanded="true"] .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburguer[aria-expanded="true"] .bar:nth-child(2) { opacity: 0; }
.hamburguer[aria-expanded="true"] .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Nav menú móvil */
.nav-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: min(75vw, 280px);
  height: 100vh;
  background: rgba(0, 51, 128, 0.96);
  backdrop-filter: blur(16px);
  padding: 5rem 1.5rem 2rem;
  transition: left 0.3s ease;
  z-index: 800;
  overflow-y: auto;
}

.nav-menu.active { left: 0; }

.nav-menu ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.nav-menu a {
  display: block;
  text-decoration: none;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.05rem;
  font-weight: 500;
  padding: .5rem .8rem;
  border-radius: 8px;
  border-left: 3px solid transparent;
  transition: background .25s, border-color .25s;
}

.nav-menu a:hover,
.nav-menu a.router-link-active {
  background: rgba(255, 255, 255, 0.12);
  border-left-color: var(--atomic);
}

.nav-cta {
  display: flex !important;
  align-items: center;
  gap: .4rem;
  margin-top: 1rem;
  background-color: var(--atomic) !important;
  color: white !important;
  border-radius: 12px !important;
  border-left: none !important;
  font-weight: 700 !important;
  box-shadow: 0 4px 12px rgba(255, 119, 63, 0.2);
}

/* Overlay */
.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 799;
}

/* Desktop */
@media (min-width: 768px) {
  .hamburguer { display: none; }

  .nav-menu {
    position: static;
    width: auto;
    height: auto;
    background: none;
    backdrop-filter: none;
    padding: 0;
    overflow: visible;
    display: block;
  }

  .nav-menu ul {
    flex-direction: row;
    align-items: center;
    gap: .3rem;
  }

  .nav-menu a {
    color: var(--navegation);
    font-size: clamp(.85rem, 1.4vw, 1rem);
    border-left: none;
    border-bottom: 2px solid transparent;
    border-radius: 0;
    padding: .4rem .6rem;
  }

  .nav-menu a:hover,
  .nav-menu a.router-link-active {
    background: none;
    border-left: none;
    border-bottom: 2px solid var(--navegation);
  }

  .nav-cta {
    background: var(--navegation) !important;
    color: white !important;
    border-radius: 10px !important;
    padding: .45rem .9rem !important;
    border-bottom: none !important;
    margin-top: 0 !important;
  }

  .nav-cta:hover {
    background: var(--smart_blue) !important;
    border-bottom: none !important;
  }
}
</style>
