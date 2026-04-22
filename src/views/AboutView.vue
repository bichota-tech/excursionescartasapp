<template>
  <div class="about-view">
    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Sobre Mí">
      <img src="/img/profile_yanetsis.png" alt="Yanetsis Cartas Álvarez ante la arquitectura holandesa" />
      <div class="page-hero-content slide-left">
        <h1>Sobre Mí</h1>
        <p>Historia del Arte • Museología • Patrimonio Cultural</p>
      </div>
    </section>

    <main class="about-page">
      <!-- Presentación principal -->
      <section class="presentation" aria-labelledby="presentation-heading">
        <h2 id="presentation-heading" class="section-title">
          Yanetsis Cartas Álvarez
        </h2>
        <div class="presentation-grid">
          <div class="presentation-img diagfirst" v-anim="'slide-right'" role="img" aria-label="Fotografía de Yanetsis"></div>
          <div class="presentation-text diagsecond" v-anim="'slide-left'">
            <p class="lead"><strong>Licenciada en Historia del Arte</strong> por la Universidad de La Habana, con más de 18 años de experiencia en museología, gestión del patrimonio cultural y coordinación de excursiones académicas en los Países Bajos.</p>
            <p>Especializada en el arte holandés del Siglo de Oro —Rembrandt, Vermeer, Hals— y en la arquitectura gótica y renacentista de Utrecht, Ámsterdam y La Haya, ofrezco una perspectiva única que combina el rigor académico con la pasión por la enseñanza.</p>
            <p>Colaboro regularmente con universidades de <strong>España, México, Argentina, Colombia y Chile</strong>, diseñando rutas académicas personalizadas que se integran en el currículum universitario como experiencias de aprendizaje completas y evaluables.</p>
            <div class="badges" role="list" aria-label="Áreas de especialización">
              <span class="badge" role="listitem">Historia del Arte</span>
              <span class="badge" role="listitem">Museología</span>
              <span class="badge" role="listitem">Gestión del Patrimonio</span>
              <span class="badge" role="listitem">Arte Holandés</span>
              <span class="badge" role="listitem">Guía Bilingüe</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Formación y trayectoria -->
      <section class="timeline-section" aria-labelledby="timeline-heading">
        <h2 id="timeline-heading" class="section-title">Formación y Trayectoria</h2>
        <div class="timeline">
          <article class="timeline-item stagger" v-anim="'slide-right'">
            <div class="timeline-icon" aria-hidden="true"><i class="bi bi-mortarboard-fill"></i></div>
            <div class="timeline-content">
              <span class="timeline-date">2003</span>
              <h3>Licenciatura en Historia del Arte</h3>
              <p>Universidad de La Habana, Cuba. Especialización en Arte Europeo, con énfasis en el período del Renacimiento y el Barroco holandés.</p>
            </div>
          </article>
          <article class="timeline-item stagger" v-anim="'slide-left'">
            <div class="timeline-icon" aria-hidden="true"><i class="bi bi-building"></i></div>
            <div class="timeline-content">
              <span class="timeline-date">2007</span>
              <h3>Formación en Museología</h3>
              <p>Centraal Museum Utrecht. Práctica profesional en gestión de colecciones, conservación preventiva y educación museística.</p>
            </div>
          </article>
          <article class="timeline-item stagger" v-anim="'slide-right'">
            <div class="timeline-icon" aria-hidden="true"><i class="bi bi-geo-alt-fill"></i></div>
            <div class="timeline-content">
              <span class="timeline-date">2008</span>
              <h3>Establecida en Utrecht</h3>
              <p>Inicio de la actividad como guía académica independiente para grupos universitarios hispanohablantes. Primeras colaboraciones con facultades de Historia del Arte españolas.</p>
            </div>
          </article>
          <article class="timeline-item stagger" v-anim="'slide-left'">
            <div class="timeline-icon" aria-hidden="true"><i class="bi bi-star-fill"></i></div>
            <div class="timeline-content">
              <span class="timeline-date">2012</span>
              <h3>Creación de Excursiones Cartas</h3>
              <p>Fundación del proyecto Excursiones Cartas, con un enfoque metodológico propio que integra la preparación previa virtual, la visita presencial y el seguimiento académico posterior.</p>
            </div>
          </article>
          <article class="timeline-item stagger" v-anim="'slide-right'">
            <div class="timeline-icon" aria-hidden="true"><i class="bi bi-globe"></i></div>
            <div class="timeline-content">
              <span class="timeline-date">Hoy</span>
              <h3>+18 Años · +200 Grupos · 5 Países</h3>
              <p>Colaboraciones activas con universidades de España, México, Argentina, Colombia y Chile. Más de 200 grupos académicos guiados en los Países Bajos.</p>
            </div>
          </article>
        </div>
      </section>

      <!-- Metodología -->
      <section class="methodology" aria-labelledby="methodology-heading">
        <h2 id="methodology-heading" class="section-title">Mi Metodología</h2>
        <div class="method-grid">
          <article class="method-card diagfirst" v-anim="'slide-top'">
            <div class="method-icon" aria-hidden="true"><i class="bi bi-person-video3"></i></div>
            <h3>Antes: Sesión introductoria</h3>
            <p>Realizamos una sesión virtual previa donde contextualizamos históricamente cada visita, presentamos los artistas, obras y espacios que veremos, y resolvemos dudas.</p>
          </article>
          <article class="method-card diagsecond" v-anim="'slide-top'">
            <div class="method-icon" aria-hidden="true"><i class="bi bi-buildings"></i></div>
            <h3>Durante: Inmersión presencial</h3>
            <p>Las visitas son guiadas con metodología activa: análisis in situ, debate, actividades participativas y conexión constante con los contenidos del programa universitario.</p>
          </article>
          <article class="method-card diagfirst" v-anim="'slide-bottom'">
            <div class="method-icon" aria-hidden="true"><i class="bi bi-book"></i></div>
            <h3>Después: Seguimiento académico</h3>
            <p>Entregamos material complementario —guías de análisis, bibliografía comentada— para que la experiencia se integre plenamente en el currículum universitario.</p>
          </article>
          <article class="method-card diagsecond" v-anim="'slide-bottom'">
            <div class="method-icon" aria-hidden="true"><i class="bi bi-chat-heart"></i></div>
            <h3>Siempre: Atención personalizada</h3>
            <p>Cada grupo es único. Adapto el contenido, el ritmo y el nivel de profundidad a las necesidades específicas de cada facultad, programa y grupo de estudiantes.</p>
          </article>
        </div>
      </section>

      <!-- CTA -->
      <section class="about-cta" aria-label="Llamada a la acción">
        <div class="cta-box">
          <h2>¿Quieres diseñar una excursión con mi metodología?</h2>
          <p>Escríbeme y cuéntame tu programa académico. Juntos diseñaremos una experiencia educativa a medida.</p>
          <div class="cta">
            <RouterLink to="/contacto" class="btn-primary">Contactar ahora</RouterLink>
            <a href="https://wa.me/640947912" class="btn-secondary" aria-label="Enviar mensaje por WhatsApp">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

/* Presentation */
.presentation-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  margin-inline: 1rem;
}

.presentation-img {
  background-image: url('/img/students_museum.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vw;
  max-height: 420px;
  flex-shrink: 0;
}


.presentation-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 700px;
}

.lead { font-size: clamp(1rem, 2.2vw, 1.25rem); line-height: 1.7; }

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: .6rem;
  margin-top: .5rem;
}

.badge {
  background-color: var(--navegation);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  padding: .3rem .8rem;
  border-radius: 20px;
  font-weight: 600;
}

/* Timeline */

.timeline {
  position: relative;
  width: 90%;
  margin: 0 auto;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: .6rem;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--navegation), var(--atomic));
  border-radius: 3px;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  align-items: flex-start;
}

.timeline-icon {
  flex-shrink: 0;
  width: 2.8rem;
  height: 2.8rem;
  background-color: var(--navegation);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -2.5rem;
  z-index: 1;
}

.timeline-icon i { color: white; font-size: 1.1rem; }

.timeline-content { flex: 1; }

.timeline-date {
  font-family: 'Montserrat', sans-serif;
  font-size: .85rem;
  font-weight: 700;
  color: var(--atomic);
  letter-spacing: .05em;
}

.timeline-content h3 {
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin: .3rem 0 .5rem;
  text-align: left;
}

.timeline-content p { font-size: clamp(.85rem, 1.8vw, 1rem); }

/* Methodology */
.methodology, .presentation, .timeline-section {
  margin-bottom: 4rem;
}
.method-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: .5rem;
  width: 95%;
  margin: 0 auto;
}

.method-card {
  background-color: var(--navegation);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
}

.method-icon {
  width: 4rem;
  height: 4rem;
  background-color: var(--atomic);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.method-icon i { color: white; font-size: 1.6rem; }
.method-card h3 { color: white; font-size: clamp(1rem, 2.5vw, 1.3rem); text-align: center; }
.method-card p  { color: rgba(255,255,255,0.88); font-size: clamp(.85rem, 1.8vw, 1rem); }

/* CTA */
.about-cta {
  background-image: url(/img/students_museum.png);
  background-position: center;
  background-size: cover;
  padding: 4rem 2rem;
  margin-bottom: 0;
  text-align: center;
  
}

.cta-box { 
  background-color: #0000006f;
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 1.2rem;
  max-width: 700px; 
  margin: 0 auto; 
}

.cta-box .cta{
  margin-bottom: 0;
}
.cta-box h2 { color: white; font-size: clamp(1.3rem, 3vw, 2rem); margin-bottom: 1rem; }
.cta-box p  { color: rgba(255,255,255,0.88); margin-bottom: 1.5rem; }


.btn-contact i { color: #4ade80; }

@media (min-width: 768px) {
  .about-page { padding-inline: 2.5rem; }
  section { padding-inline: 3rem; }

  .presentation-grid { flex-direction: row; align-items: flex-start; gap: 3rem; }
  .presentation-img  { width: 45%; height: 65vh; max-height: none; }

  .timeline { padding-left: 3rem; }
  .timeline::before { left: .9rem; }
  .timeline-icon { margin-left: -3rem; }

  .method-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
