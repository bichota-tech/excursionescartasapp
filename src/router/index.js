import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Navigation guard - updates SEO meta tags on every route change
const setMeta = (title, description) => {
  document.title = `${title} | Excursiones Cartas`
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', description)
}

const routes = [
  {
    path: '/',
    redirect: '/inicio',
  },
  {
    path: '/inicio',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Inicio',
      description: 'Explora los Países Bajos con nuestras excursiones académicas diseñadas para estudiantes universitarios hispanohablantes.',
    },
  },
  {
    path: '/sobre-mi',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'Sobre Mí',
      description: 'Conoce a Yanetsis Cartas Álvarez, Licenciada en Historia del Arte y guía académica experta en los Países Bajos.',
    },
  },
  {
    path: '/servicios',
    name: 'services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Servicios',
      description: 'Descubre nuestras excursiones académicas personalizadas: rutas adaptadas, material didáctico y sesiones introductorias.',
    },
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'Blog',
      description: 'Artículos sobre arte, historia y cultura de los Países Bajos. Recursos académicos para estudiantes y viajeros.',
    },
  },
  {
    path: '/blog/:slug',
    name: 'blog-post',
    component: () => import('../views/BlogPostView.vue'),
    meta: {
      title: 'Artículo',
      description: 'Lee el artículo completo sobre arte, historia y cultura de los Países Bajos.',
    },
  },
  {
    path: '/contacto',
    name: 'contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contacto',
      description: 'Contacta con Excursiones Cartas. Escríbenos por WhatsApp, correo o rellena el formulario de contacto.',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const { title, description } = to.meta
  if (title) setMeta(title, description)
})

export default router
