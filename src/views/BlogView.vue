<template>
  <div class="blog-view">
    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Blog">
      <img src="/img/blog_rembrandt.png" alt="Escena en estilo pictórico holandés de estudiantes en un museo" fetchpriority="high" />
      <div class="page-hero-content slide-left">
        <h1>Blog</h1>
        <p>Arte, patrimonio e historia de los Países Bajos</p>
      </div>
    </section>

    <main class="w-full px-4 md:px-8 mb-12 md:mb-16">
      <section aria-labelledby="blog-heading">
        <h2 id="blog-heading" class="section-title">Últimos Artículos</h2>

        <!-- Skeleton Loaders -->
        <div v-if="blogStore.loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto" role="status" aria-label="Cargando artículos">
          <div v-for="n in 3" :key="n" class="bg-white rounded-[12px_0] shadow-[var(--shadow-card)] overflow-hidden flex flex-col animate-pulse">
            <div class="relative h-[260px] bg-gray-200"></div>
            <div class="p-6 flex flex-col gap-3 flex-1">
              <div class="flex gap-4">
                <div class="h-4 w-24 bg-gray-200 rounded"></div>
                <div class="h-4 w-20 bg-gray-200 rounded"></div>
              </div>
              <div class="h-6 w-full bg-gray-200 rounded mt-2"></div>
              <div class="h-6 w-3/4 bg-gray-200 rounded"></div>
              <div class="h-16 w-full bg-gray-200 rounded mt-2"></div>
            </div>
          </div>
          <span class="sr-only">Cargando contenido...</span>
        </div>

        <!-- Grid de artículos -->
        <div v-else-if="blogStore.posts && blogStore.posts.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto" role="list">
          <article
            v-for="post in blogStore.posts"
            :key="post._id"
            class="bg-white rounded-[12px_0] shadow-[var(--shadow-card)] overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] flex flex-col"
            v-anim="'fade-in'"
            role="listitem"
          >
            <RouterLink :to="`/blog/${post.slug}`" class="block group" :aria-label="`Leer artículo: ${post.title}`">
              <div class="relative h-[260px] overflow-hidden">
                <img :src="post.image" :alt="post.imageAlt || `Imagen representativa de ${post.title}`" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <span v-if="post.category" class="absolute top-4 left-4 bg-atomic text-white font-sans text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">{{ post.category }}</span>
              </div>
            </RouterLink>
            
            <div class="p-6 flex flex-col gap-3 flex-1">
              <div class="flex flex-wrap gap-4" aria-label="Información del artículo">
                <time :datetime="post.publishedAt" class="font-sans text-sm text-secondary flex items-center gap-1.5">
                  <i class="bi bi-calendar3" aria-hidden="true"></i> {{ formatDate(post.publishedAt) }}
                </time>
                <span class="font-sans text-sm text-secondary flex items-center gap-1.5">
                  <i class="bi bi-clock" aria-hidden="true"></i> {{ post.readTime || 5 }} min lectura
                </span>
              </div>
              
              <h3 class="font-serif text-[clamp(1.15rem,2.5vw,1.5rem)] text-navigation m-0 leading-snug">
                <RouterLink :to="`/blog/${post.slug}`" class="no-underline text-inherit hover:text-atomic transition-colors duration-250">{{ post.title }}</RouterLink>
              </h3>
              
              <p class="text-secondary text-[clamp(.85rem,1.8vw,1rem)] leading-relaxed m-0">{{ post.excerpt }}</p>
              
              <div class="flex flex-wrap gap-2 mt-1" role="list" :aria-label="`Etiquetas del artículo ${post.title}`">
                <span v-for="tag in post.tags" :key="tag" class="font-sans text-xs font-semibold text-smart-blue bg-smart-blue/10 px-2.5 py-1 rounded-full" role="listitem">#{{ tag }}</span>
              </div>
              
              <RouterLink
                :to="`/blog/${post.slug}`"
                class="inline-flex items-center gap-1.5 text-navigation font-sans text-sm font-bold no-underline mt-auto border-b-2 border-transparent pb-0.5 hover:border-navigation hover:text-smart-blue transition-colors duration-250 w-max"
                :aria-label="`Leer artículo completo: ${post.title}`"
              >
                Leer artículo <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </RouterLink>
            </div>
          </article>
        </div>

        <div v-else-if="!blogStore.loading && blogStore.error" class="text-center py-12" role="alert" aria-live="assertive">
          <p class="text-red-600 font-sans">Hubo un problema al cargar los artículos. Por favor, intenta de nuevo más tarde.</p>
        </div>

        <div v-else class="text-center py-12" role="status">
          <p class="text-secondary font-sans">Aún no hay artículos publicados.</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBlogStore } from '../stores'
import { RouterLink } from 'vue-router'

const blogStore = useBlogStore()

// Utilidad para formatear fechas desde ISO a "10 de marzo de 2025"
const formatDate = (dateString) => {
  if (!dateString) return ''
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date)
}

onMounted(() => {
  blogStore.fetchPosts()
})
</script>
