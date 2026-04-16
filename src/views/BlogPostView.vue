<template>
  <div v-if="post" class="blog-post-view">
    <!-- Hero del artículo -->
    <section class="article-hero" aria-label="Cabecera del artículo">
      <img :src="post.image" :alt="post.imageAlt" />
      <div class="article-hero-overlay">
        <div class="article-hero-content slide-left">
          <span class="category-badge">{{ post.category }}</span>
          <h1>{{ post.title }}</h1>
          <div class="article-meta">
            <time :datetime="post.date">
              <i class="bi bi-calendar3" aria-hidden="true"></i> {{ post.date }}
            </time>
            <span><i class="bi bi-clock" aria-hidden="true"></i> {{ post.readTime }} de lectura</span>
          </div>
        </div>
      </div>
    </section>

    <main class="article-page">
      <!-- Bread crumb -->
      <nav class="breadcrumb" aria-label="Ruta de navegación">
        <RouterLink to="/inicio">Inicio</RouterLink>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
        <RouterLink to="/blog">Blog</RouterLink>
        <i class="bi bi-chevron-right" aria-hidden="true"></i>
        <span aria-current="page">{{ post.title }}</span>
      </nav>

      <div class="article-layout">
        <!-- Contenido principal -->
        <article class="article-content" aria-label="Contenido del artículo">
          <div class="article-body" v-html="post.content"></div>

          <!-- Tags -->
          <div class="article-tags" role="list" aria-label="Etiquetas del artículo">
            <span v-for="tag in post.tags" :key="tag" class="tag" role="listitem">#{{ tag }}</span>
          </div>

          <!-- Share -->
          <div class="article-share" aria-label="Compartir artículo">
            <p>Comparte este artículo:</p>
            <a
              :href="`https://wa.me/?text=${encodeURIComponent(post.title + ' - Excursiones Cartas')}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en WhatsApp (se abre en nueva pestaña)"
              class="share-btn whatsapp"
            >
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
            <a
              :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://excursionescartas.com/blog/' + post.slug)}`"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Compartir en LinkedIn (se abre en nueva pestaña)"
              class="share-btn linkedin"
            >
              <i class="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
            </a>
          </div>
        </article>

        <!-- Sidebar -->
        <aside class="article-sidebar" aria-label="Sidebar del artículo">
          <div class="sidebar-cta">
            <h3>¿Interesado en una excursión?</h3>
            <p>Planifica con nosotros tu próxima visita académica a los Países Bajos.</p>
            <RouterLink to="/contacto" class="btn-primary">Contactar</RouterLink>
            <a href="https://wa.me/640947912" class="btn-whatsapp" aria-label="WhatsApp">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </div>
        </aside>
      </div>

      <!-- También han leído -->
      <section class="related-posts" aria-labelledby="related-heading">
        <h2 id="related-heading" class="section-title accent">
          <span>----- </span> También han leído... <span> -----</span>
        </h2>
        <div class="related-grid" role="list">
          <article
            v-for="related in relatedPosts"
            :key="related.id"
            class="related-card"
            v-anim="'fade-in'"
            role="listitem"
          >
            <RouterLink :to="`/blog/${related.slug}`" class="related-img-link" :aria-label="`Leer artículo: ${related.title}`">
              <div class="related-img">
                <img :src="related.image" :alt="related.imageAlt" loading="lazy" />
                <span class="card-category">{{ related.category }}</span>
              </div>
            </RouterLink>
            <div class="related-body">
              <time :datetime="related.date" class="card-date">
                <i class="bi bi-calendar3" aria-hidden="true"></i> {{ related.date }}
              </time>
              <h3 class="related-title">
                <RouterLink :to="`/blog/${related.slug}`">{{ related.title }}</RouterLink>
              </h3>
              <p class="related-excerpt">{{ related.excerpt }}</p>
              <RouterLink :to="`/blog/${related.slug}`" class="card-link" :aria-label="`Leer: ${related.title}`">
                Leer artículo <i class="bi bi-arrow-right" aria-hidden="true"></i>
              </RouterLink>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>

  <!-- 404 post not found -->
  <div v-else class="not-found">
    <h1>Artículo no encontrado</h1>
    <p>Lo sentimos, el artículo que buscas no existe.</p>
    <RouterLink to="/blog" class="btn-primary">Volver al Blog</RouterLink>
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
/* Hero del artículo */
.article-hero {
  position: relative;
  width: 100%;
  height: clamp(18rem, 50vw, 30rem);
  overflow: hidden;
}

.article-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5) saturate(1.3);
}

.article-hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  padding: 2.5rem 2rem;
}

.article-hero-content { max-width: 900px; }

.category-badge {
  background-color: var(--atomic);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  font-weight: 700;
  padding: .3rem .9rem;
  border-radius: 20px;
  margin-bottom: .8rem;
  display: inline-block;
}

.article-hero-content h1 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: white;
  font-weight: 700;
  line-height: 1.2;
  margin: .5rem 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}

.article-meta {
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  font-family: 'Montserrat', sans-serif;
  font-size: .85rem;
  color: rgba(255,255,255,0.8);
  margin-top: .4rem;
}

.article-meta i { margin-right: .25rem; }

/* Breadcrumb */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: .4rem;
  flex-wrap: wrap;
  padding: 1rem 0;
  font-family: 'Montserrat', sans-serif;
  font-size: .85rem;
  color: var(--text_secondary);
}

.breadcrumb a { color: var(--navegation); text-decoration: none; }
.breadcrumb a:hover { text-decoration: underline; }
.breadcrumb i { font-size: .7rem; }

/* Article Page */
.article-page { padding-inline: 1rem; max-width: 1200px; margin: 0 auto; }

.article-layout {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Article body – styles for v-html content */
.article-body :deep(h3) {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: var(--navegation);
  margin: 2rem 0 .8rem;
  text-align: left;
}

.article-body :deep(p) {
  font-size: clamp(.9rem, 1.8vw, 1.1rem);
  line-height: 1.8;
  color: var(--text_primary);
  margin-bottom: 1.2rem;
}

.article-body :deep(strong) { color: var(--navegation); }
.article-body :deep(em)     { color: var(--atomic); font-style: italic; }

/* Tags */
.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
  margin: 2rem 0;
}

.tag {
  font-family: 'Montserrat', sans-serif;
  font-size: .78rem;
  font-weight: 600;
  color: var(--smart_blue);
  background-color: rgba(11, 74, 193, 0.1);
  padding: .25rem .7rem;
  border-radius: 12px;
}

/* Share */
.article-share {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1.5rem;
  background-color: rgba(0, 51, 128, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--atomic);
}

.article-share p {
  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  color: var(--text_secondary);
  margin: 0;
}

.share-btn {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  padding: .5rem 1rem;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: .85rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform .3s;
}

.share-btn:hover { transform: scale(1.05); }
.share-btn.whatsapp { background-color: #25d366; color: white; }
.share-btn.linkedin { background-color: #0a66c2; color: white; }

/* Sidebar */
.article-sidebar { width: 100%; }

.sidebar-cta {
  background-color: var(--navegation);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
}

.sidebar-cta h3 { color: white; text-align: center; font-size: clamp(1rem, 2.5vw, 1.3rem); }
.sidebar-cta p  { color: rgba(255,255,255,0.85); font-size: .95rem; }

.btn-primary {
  display: inline-block;
  padding: .7rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: .95rem;
  background-color: var(--atomic);
  color: white;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  transition: transform .3s;
  text-align: center;
}

.btn-primary:hover { transform: scale(1.05); }

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  padding: .6rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  background-color: #25d366;
  color: white;
  border-radius: 12px;
  text-decoration: none;
  transition: transform .3s;
}

.btn-whatsapp:hover { transform: scale(1.05); }

/* Related Posts */
.related-posts { margin: 4rem 0; }

.related-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.related-card {
  border-radius: 12px 0;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,51,128,0.12);
  display: flex;
  flex-direction: column;
  transition: transform .35s, box-shadow .35s;
}

.related-card:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,51,128,0.2); }

.related-img {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.related-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .4s;
}

.related-card:hover .related-img img { transform: scale(1.06); }

.card-category {
  position: absolute;
  top: .8rem;
  left: .8rem;
  background-color: var(--atomic);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: .7rem;
  font-weight: 700;
  padding: .2rem .7rem;
  border-radius: 20px;
}

.related-body { padding: 1.2rem; display: flex; flex-direction: column; gap: .6rem; flex: 1; }

.card-date {
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: var(--text_secondary);
  display: flex;
  align-items: center;
  gap: .3rem;
}

.related-title {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1rem, 2.2vw, 1.3rem);
  color: var(--navegation);
  text-align: left;
  margin: 0;
}

.related-title a { text-decoration: none; color: inherit; transition: color .2s; }
.related-title a:hover { color: var(--atomic); }

.related-excerpt {
  font-size: clamp(.8rem, 1.7vw, .95rem);
  color: var(--text_secondary);
  line-height: 1.5;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  color: var(--navegation);
  font-family: 'Montserrat', sans-serif;
  font-size: .88rem;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  padding-bottom: .1rem;
  transition: border-color .2s, color .2s;
  margin-top: auto;
}

.card-link:hover { border-bottom-color: var(--navegation); color: var(--smart_blue); }

/* Not found */
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  min-height: 60vh;
  padding: 2rem;
}

.not-found h1 { font-family: 'Frank Ruhl Libre', serif; color: var(--navegation); font-size: 2rem; }

@media (min-width: 768px) {
  .article-page { padding-inline: 3rem; }

  .article-layout {
    flex-direction: row;
    align-items: flex-start;
  }

  .article-content { flex: 1; }
  .article-sidebar { width: 280px; flex-shrink: 0; position: sticky; top: 100px; }

  .related-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
