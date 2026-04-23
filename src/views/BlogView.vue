<template>
  <div class="blog-view">
    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Blog">
      <img src="/img/blog_rembrandt.png" alt="Escena en estilo pictórico holandés de estudiantes en un museo" />
      <div class="page-hero-content slide-left">
        <h1>Blog</h1>
        <p>Arte, patrimonio e historia de los Países Bajos</p>
      </div>
    </section>

    <main class="w-full px-4 md:px-8 mb-12 md:mb-16">
      <section aria-labelledby="blog-heading">
        <h2 id="blog-heading" class="section-title">Últimos Artículos</h2>

        <!-- Grid de artículos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto" role="list">
          <article
            v-for="post in blogStore.posts"
            :key="post.id"
            class="bg-white rounded-[12px_0] shadow-[var(--shadow-card)] overflow-hidden transition-all duration-350 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)] flex flex-col"
            v-anim="'fade-in'"
            role="listitem"
          >
            <RouterLink :to="`/blog/${post.slug}`" class="block group" :aria-label="`Leer artículo: ${post.title}`">
              <div class="relative h-[260px] overflow-hidden">
                <img :src="post.image" :alt="post.imageAlt" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <span class="absolute top-4 left-4 bg-atomic text-white font-sans text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">{{ post.category }}</span>
              </div>
            </RouterLink>
            
            <div class="p-6 flex flex-col gap-3 flex-1">
              <div class="flex flex-wrap gap-4" aria-label="Información del artículo">
                <time :datetime="post.date" class="font-sans text-sm text-secondary flex items-center gap-1.5">
                  <i class="bi bi-calendar3" aria-hidden="true"></i> {{ post.date }}
                </time>
                <span class="font-sans text-sm text-secondary flex items-center gap-1.5">
                  <i class="bi bi-clock" aria-hidden="true"></i> {{ post.readTime }} lectura
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
      </section>
    </main>
  </div>
</template>

<script setup>
import { useBlogStore } from '../stores'
import { RouterLink } from 'vue-router'

const blogStore = useBlogStore()
</script>
