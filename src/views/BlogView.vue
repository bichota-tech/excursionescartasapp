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

    <main class="blog-page">
      <section aria-labelledby="blog-heading">
        <h2 id="blog-heading" class="section-title">Últimos Artículos</h2>

        <!-- Grid de artículos -->
        <div class="blog-grid" role="list">
          <article
            v-for="post in blogStore.posts"
            :key="post.id"
            class="blog-card"
            v-anim="'fade-in'"
            role="listitem"
          >
            <RouterLink :to="`/blog/${post.slug}`" class="card-img-link" :aria-label="`Leer artículo: ${post.title}`">
              <div class="card-img">
                <img :src="post.image" :alt="post.imageAlt" loading="lazy" />
                <span class="card-category">{{ post.category }}</span>
              </div>
            </RouterLink>
            <div class="card-body">
              <div class="card-meta" aria-label="Información del artículo">
                <time :datetime="post.date" class="card-date">
                  <i class="bi bi-calendar3" aria-hidden="true"></i> {{ post.date }}
                </time>
                <span class="card-read">
                  <i class="bi bi-clock" aria-hidden="true"></i> {{ post.readTime }} lectura
                </span>
              </div>
              <h3 class="card-title">
                <RouterLink :to="`/blog/${post.slug}`">{{ post.title }}</RouterLink>
              </h3>
              <p class="card-excerpt">{{ post.excerpt }}</p>
              <div class="card-tags" role="list" :aria-label="`Etiquetas del artículo ${post.title}`">
                <span v-for="tag in post.tags" :key="tag" class="tag" role="listitem">#{{ tag }}</span>
              </div>
              <RouterLink
                :to="`/blog/${post.slug}`"
                class="card-link"
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

<style scoped>
.blog-page { padding-inline: 1rem; }
section { margin-bottom: 3rem; }

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Blog Card */
.blog-card {
  background: white;
  border-radius: 12px 0;
  box-shadow: var(--card-shadow);
  overflow: hidden;
  transition: transform .35s, box-shadow .35s;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--card-shadow-hover);
}

.card-img-link { display: block; }

.card-img {
  position: relative;
  height: 260px;
  overflow: hidden;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.blog-card:hover .card-img img { transform: scale(1.06); }

.card-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--atomic);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: .75rem;
  font-weight: 700;
  padding: .3rem .8rem;
  border-radius: 20px;
  letter-spacing: .04em;
}

.card-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  flex: 1;
}

.card-meta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-date, .card-read {
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: var(--text_secondary);
  display: flex;
  align-items: center;
  gap: .3rem;
}

.card-title {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.15rem, 2.5vw, 1.5rem);
  color: var(--navegation);
  margin: 0;
  text-align: left;
  line-height: 1.3;
}

.card-title a {
  text-decoration: none;
  color: inherit;
  transition: color .25s;
}

.card-title a:hover { color: var(--atomic); }

.card-excerpt {
  color: var(--text_secondary);
  font-size: clamp(.85rem, 1.8vw, 1rem);
  line-height: 1.6;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: .4rem;
}

.tag {
  font-family: 'Montserrat', sans-serif;
  font-size: .75rem;
  font-weight: 600;
  color: var(--smart_blue);
  background-color: rgba(11, 74, 193, 0.08);
  padding: .2rem .6rem;
  border-radius: 12px;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  color: var(--navegation);
  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  font-weight: 700;
  text-decoration: none;
  margin-top: auto;
  border-bottom: 2px solid transparent;
  padding-bottom: .1rem;
  transition: border-color .25s, color .25s;
}

.card-link:hover { border-bottom-color: var(--navegation); color: var(--smart_blue); }

@media (min-width: 660px) {
  .blog-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .blog-page { padding-inline: 2.5rem; }
  section { padding-inline: 3rem; }
  .blog-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>
