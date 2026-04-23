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
    class="fixed bottom-10 left-5 w-[60px] h-[60px] bg-whatsapp text-white rounded-full
           flex items-center justify-center text-[2.2rem] z-[1000]
           shadow-[0_6px_16px_rgba(0,0,0,0.2)] no-underline
           hover:scale-110 hover:rotate-[5deg] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]
           transition-all duration-300"
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
