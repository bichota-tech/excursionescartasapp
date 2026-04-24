import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)

// Directiva global para animaciones al entrar en viewport
app.directive('anim', {
  mounted(el, binding) {
    const animationClass = binding.value || el.dataset.anim
    if (!animationClass) return

    // Ocultar el elemento antes de la animación para evitar parpadeos
    el.style.opacity = '0'

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '' // Restaurar opacidad
            el.classList.add(animationClass)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }
})

app.mount('#app')
