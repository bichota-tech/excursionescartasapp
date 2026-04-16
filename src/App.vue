<template>
  <AppHeader />

  <main id="main-content" tabindex="-1">
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-page">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </main>

  <!-- WhatsApp flotante -->
  <a
    href="https://wa.me/640947912"
    class="whatsapp-float"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contáctanos por WhatsApp (se abre en nueva pestaña)"
  >
    <i class="bi bi-whatsapp" aria-hidden="true"></i>
  </a>

  <AppFooter />
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router'
</script>

<style>
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
