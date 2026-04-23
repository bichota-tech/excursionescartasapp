<template>
  <div v-if="post" class="blog-post-view">
    <!-- Hero del artículo -->
    <section class="relative w-full h-[clamp(18rem,50vw,30rem)] overflow-hidden" aria-label="Cabecera del artículo">
      <img :src="post.image" :alt="post.imageAlt" class="w-full h-full object-cover brightness-50 saturate-[1.3]" />
      <div class="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-10 md:px-12">
        <div class="max-w-4xl slide-left">
          <span class="inline-block bg-atomic text-white font-sans text-sm font-bold px-4 py-1.5 rounded-full mb-3">{{ post.category }}</span>
          <h1 class="font-serif text-[clamp(1.5rem,4vw,3rem)] text-white font-bold leading-tight my-2 text-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{{ post.title }}</h1>
          <div class="flex flex-wrap gap-5 font-sans text-sm text-white/80 mt-2">
            <time :datetime="post.date" class="flex items-center gap-1.5">
              <i class="bi bi-calendar3" aria-hidden="true"></i> {{ post.date }}
            </time>
            <span class="flex items-center gap-1.5"><i class="bi bi-clock" aria-hidden="true"></i> {{ post.readTime }} de lectura</span>
          </div>
        </div>
      </div>
    </section>

    <main class="w-full max-w-7xl mx-auto px-4 md:px-12">
      <!-- Bread crumb -->
      <nav class="flex items-center flex-wrap gap-2 py-4 font-sans text-sm text-secondary" aria-label="Ruta de navegación">
        <RouterLink to="/inicio" class="text-navigation no-underline hover:underline">Inicio</RouterLink>
        <i class="bi bi-chevron-right text-[0.7rem]" aria-hidden="true"></i>
        <RouterLink to="/blog" class="text-navigation no-underline hover:underline">Blog</RouterLink>
        <i class="bi bi-chevron-right text-[0.7rem]" aria-hidden="true"></i>
        <span aria-current="page">{{ post.title }}</span>
      </nav>

      <div class="flex flex-col md:flex-row items-start gap-8 mb-16">
        <!-- Contenido principal -->
        <article class="flex-1" aria-label="Contenido del artículo">
          <div class="article-body" v-html="post.content"></div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 my-8" role="list" aria-label="Etiquetas del artículo">
            <span v-for="tag in post.tags" :key="tag" class="font-sans text-[0.78rem] font-semibold text-smart-blue bg-smart-blue/10 px-3 py-1 rounded-full" role="listitem">#{{ tag }}</span>
          </div>

          <!-- Share -->
          <div class="flex items-center flex-wrap gap-4 p-6 bg-navigation/5 rounded-xl border-l-4 border-atomic" aria-label="Compartir artículo">
            <p class="font-sans text-[0.9rem] font-semibold text-secondary m-0">Comparte este artículo:</p>
            <a
              :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' - Excursiones Cartas')}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en WhatsApp (se abre en nueva pestaña)"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-sans text-[0.85rem] font-semibold no-underline text-white bg-[#25d366] transition-transform duration-300 hover:scale-105"
            >
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://excursionescartas.com/blog/' + post.slug)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en LinkedIn (se abre en nueva pestaña)"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-sans text-[0.85rem] font-semibold no-underline text-white bg-[#0a66c2] transition-transform duration-300 hover:scale-105"
            >
              <i class="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="w-full md:w-[280px] shrink-0 md:sticky md:top-[100px]" aria-label="Sidebar del artículo">
          <div class="bg-navigation p-8 rounded-xl flex flex-col gap-4 text-center">
            <h3 class="text-white text-[clamp(1rem,2.5vw,1.3rem)] m-0">¿Interesado en una excursión?</h3>
            <p class="text-white/85 text-[0.95rem] m-0">Planifica con nosotros tu próxima visita académica a los Países Bajos.</p>
            <RouterLink to="/contacto" class="inline-block px-4 py-2 mt-2 bg-atomic text-white font-sans font-bold rounded-xl no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(255,119,63,0.2)]">Contactar</RouterLink>
            <a href="https://wa.me/640947912" aria-label="WhatsApp" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#25d366] text-white font-sans font-bold rounded-xl no-underline transition-transform duration-300 hover:scale-105">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </div>
        </aside>
      </div>

      <!-- También han leído -->
      <section class="my-16" aria-labelledby="related-heading">
        <h2 id="related-heading" class="section-title">También han leído...</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" role="list">
          <article
            v-for="related in relatedPosts"
            :key="related.id"
            class="bg-white rounded-[12px_0] shadow-[var(--shadow-card)] overflow-hidden flex flex-col transition-all duration-350 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            v-anim="'fade-in'"
            role="listitem"
          >
            <RouterLink :to="`/blog/${related.slug}`" class="block group" :aria-label="`Leer artículo: ${related.title}`">
              <div class="relative h-[200px] overflow-hidden">
                <img :src="related.image" :alt="related.imageAlt" loading="lazy" class="w-full h-full object-cover transition-transform duration-400 group-hover:scale-[1.06]" />
                <span class="absolute top-3 left-3 bg-atomic text-white font-sans text-[0.7rem] font-bold px-3 py-1 rounded-full">{{ related.category }}</span>
              </div>
            </RouterLink>
            <div class="p-5 flex flex-col gap-2 flex-1">
              <time :datetime="related.date" class="font-sans text-[0.8rem] text-secondary flex items-center gap-1.5">
                <i class="bi bi-calendar3" aria-hidden="true"></i> {{ related.date }}
              </time>
              <h3 class="font-serif text-[clamp(1rem,2.2vw,1.3rem)] text-navigation m-0 leading-tight">
                <RouterLink :to="`/blog/${related.slug}`" class="no-underline text-inherit transition-colors duration-200 hover:text-atomic">{{ related.title }}</RouterLink>
              </h3>
              <p class="font-sans text-[clamp(.8rem,1.7vw,.95rem)] text-secondary leading-relaxed m-0">{{ related.excerpt }}</p>
              <RouterLink :to="`/blog/${related.slug}`" class="inline-flex items-center gap-1.5 text-navigation font-sans text-[0.88rem] font-bold no-underline mt-auto border-b-2 border-transparent pb-0.5 transition-colors duration-200 hover:text-smart-blue hover:border-navigation w-max" :aria-label="`Leer: ${related.title}`">
                Leer artículo <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </RouterLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>

  <!-- 404 post not found -->
  <div v-else class="flex flex-col items-center justify-center text-center gap-6 min-h-[60vh] p-8">
    <h1 class="font-serif text-navigation text-3xl">Artículo no encontrado</h1>
    <p class="font-sans text-primary">Lo sentimos, el artículo que buscas no existe.</p>
    <RouterLink to="/blog" class="inline-block px-6 py-3 bg-navigation text-white font-sans font-bold rounded-xl no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,51,128,0.2)]">Volver al Blog</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useBlogStore } from '../stores'

const route = useRoute()
const blogStore = useBlogStore()

const post = computed(() => blogStore.getPostBySlug(route.params.slug))
const relatedPosts = computed(() => blogStore.getRelatedPosts(route.params.slug))
</script>

<style scoped>
/* Article body – styles for v-html content */
.article-body :deep(h3) {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: var(--color-navigation);
  margin: 2rem 0 .8rem;
  text-align: left;
}

.article-body :deep(p) {
  font-size: clamp(.9rem, 1.8vw, 1.1rem);
  line-height: 1.8;
  color: var(--color-primary);
  margin-bottom: 1.2rem;
}

.article-body :deep(strong) { color: var(--color-navigation); }
.article-body :deep(em)     { color: var(--color-atomic); font-style: italic; }
</style>
