<template>
  <div class="services-view">
    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Servicios">
      <img src="/img/students_museum.png" alt="Estudiantes visitando un museo holandés" />
      <div class="page-hero-content slide-left">
        <h1>Nuestros Servicios</h1>
        <p>Excursiones académicas diseñadas a medida para universitarios hispanohablantes</p>
      </div>
    </section>

    <main class="services-page">

      <!-- Sección: ¿Qué ofrecemos? -->
      <section class="what-section" aria-labelledby="what-heading">
        <h2 id="what-heading" class="section-title accent">
          <span>----- </span> ¿Qué ofrecemos? <span> -----</span>
        </h2>
        <div class="services-grid">
          <article class="service-card diagfirst" v-anim="'slide-left'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-map"></i></div>
            <h3>Rutas Personalizadas</h3>
            <p>Diseñamos cada itinerario en función del programa académico del grupo. Arte holandés, patrimonio medieval, historia urbana o museología contemporánea: cada ruta es única.</p>
          </article>
          <article class="service-card diagsecond" v-anim="'slide-top'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-person-video3"></i></div>
            <h3>Sesión Introductoria Virtual</h3>
            <p>Antes de la visita realizamos una sesión online de 90 minutos donde contextualizamos históricamente el itinerario, presentamos las obras y artistas principales y resolvemos dudas previas.</p>
          </article>
          <article class="service-card diagsecond" v-anim="'slide-bottom'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-mortarboard"></i></div>
            <h3>Guía Académica In Situ</h3>
            <p>La visita presencial se desarrolla con metodología activa: análisis comparativo de obras, debates grupales, actividades participativas y un enfoque riguroso pero accesible.</p>
          </article>
          <article class="service-card diagfirst" v-anim="'slide-right'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-book"></i></div>
            <h3>Material Didáctico</h3>
            <p>Entregamos a cada participante dossiers con fichas de análisis, textos académicos seleccionados y actividades de evaluación que pueden integrarse directamente en la asignatura.</p>
          </article>
          <article class="service-card diagfirst" v-anim="'slide-left'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-translate"></i></div>
            <h3>Guía Bilingüe</h3>
            <p>Las visitas se conducen en español, con explicaciones en neerlandés e inglés cuando el contexto lo requiere. Facilitamos la comunicación con museos y espacios patrimoniales locales.</p>
          </article>
          <article class="service-card diagsecond" v-anim="'slide-right'">
            <div class="service-icon" aria-hidden="true"><i class="bi bi-buildings"></i></div>
            <h3>Acceso Privilegiado</h3>
            <p>Gracias a nuestra red de contactos en museos, fundaciones y archivos históricos de Utrecht y Ámsterdam, podemos ofrecer visitas a espacios no accesibles al público general.</p>
          </article>
        </div>
      </section>

      <!-- Sección: ¿A quiénes va dirigido? -->
      <section class="targets-section" aria-labelledby="targets-heading">
        <h2 id="targets-heading" class="section-title accent">
          <span>----- </span> ¿A quiénes va dirigido? <span> -----</span>
        </h2>
        <div class="targets-grid">
          <article class="target-card" v-anim="'slide-top'">
            <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
            <h3>Facultades de Historia del Arte</h3>
            <p>Asignaturas de Arte Holandés, Arte Barroco, Renacimiento Nórdico, Historia del Museo o Patrimonio Cultural.</p>
          </article>
          <article class="target-card" v-anim="'slide-top'">
            <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
            <h3>Programas de Museología</h3>
            <p>Grados y masters en museología, gestión cultural, conservación y restauración que incluyen visitas profesionales a museos.</p>
          </article>
          <article class="target-card" v-anim="'slide-bottom'">
            <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
            <h3>Estudios de Patrimonio</h3>
            <p>Programas centrados en la gestión del patrimonio histórico, arquitectónico y cultural europeo.</p>
          </article>
          <article class="target-card" v-anim="'slide-bottom'">
            <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
            <h3>Minors, Masters y Erasmus</h3>
            <p>Estudiantes en programas de intercambio or intensivos que buscan actividades académicas complementarias en la región.</p>
          </article>
        </div>
      </section>

      <!-- Sección: VIAJA A - con el mismo diseño del original -->
      <section class="travel-section" aria-labelledby="travel-heading">
        <h2 id="travel-heading" class="section-title accent">
          <span>----- </span> Destinos Principales <span> -----</span>
        </h2>
        <div class="travel-grid">
          <div class="destination-card diagfirst" v-anim="'slide-left'">
            <img src="/img/utrecht_aerial.png" alt="Vista aérea de Utrecht con su famosa Torre Dom" />
            <div class="destination-overlay">
              <h3>Utrecht</h3>
              <p>Torre Dom, canales históricos, Centraal Museum, Dom Cathedral y el Pandhof medieval.</p>
            </div>
          </div>
          <div class="destination-card diagsecond" v-anim="'slide-top'">
            <img src="/img/students_museum.png" alt="Interior de museo holandés con estudiantes" />
            <div class="destination-overlay">
              <h3>Ámsterdam</h3>
              <p>Rijksmuseum, Van Gogh Museum, Stedelijk Museum y el Canal Ring UNESCO.</p>
            </div>
          </div>
          <div class="destination-card diagsecond" v-anim="'slide-bottom'">
            <img src="/img/hero_home.png" alt="Estudiantes en los canales holandeses" />
            <div class="destination-overlay">
              <h3>La Haya</h3>
              <p>Mauritshuis (La Ronda de Noche, La Joven de la Perla), Gemeentemuseum Den Haag.</p>
            </div>
          </div>
          <div class="destination-card diagfirst" v-anim="'slide-right'">
            <img src="/img/students_streets.png" alt="Estudiantes explorando calles medievales holandesas" />
            <div class="destination-overlay">
              <h3>Delft</h3>
              <p>Ciudad natal de Vermeer, con sus canales únicos y un legado cerámico y pictórico incomparable.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Backflayer con info del viaje (réplica del original) -->
      <section class="includes-section" aria-labelledby="includes-heading">
        <div class="servcontent">
          <div class="backflayer imgtop" aria-hidden="true">
            <div class="activity imgtop">
              <h3 class="bungee text-white">VIAJA A</h3>
              <svg viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg" aria-label="PAÍSES BAJOS" role="img">
                <text x="50" y="130" class="svg-text" fill="transparent" stroke="#ffffff" stroke-width="6" stroke-linejoin="round">
                  PAÍSES BAJOS
                </text>
              </svg>
              <h4 id="includes-heading">¿Qué incluye la excursión?</h4>
              <div class="actinfo">
                <div class="info">
                  <i class="bi bi-sign-turn-right" id="ico" aria-hidden="true"></i>
                  <p>Diseño de rutas planificadas según el currículo académico del grupo.</p>
                </div>
                <div class="info">
                  <i class="bi bi-mortarboard" id="ico" aria-hidden="true"></i>
                  <p>Contenido adaptado al nivel universitario: grado, máster o doctorado.</p>
                </div>
                <div class="info">
                  <i class="bi bi-person-video3" id="ico" aria-hidden="true"></i>
                  <p>Sesión introductoria virtual previa a la excursión.</p>
                </div>
                <div class="info">
                  <i class="bi bi-buildings" id="ico" aria-hidden="true"></i>
                  <p>Visitas a museos, archivos, espacios patrimoniales e instituciones culturales.</p>
                </div>
                <div class="info">
                  <i class="bi bi-activity" id="ico" aria-hidden="true"></i>
                  <p>Actividades participativas, análisis in situ y material académico complementario.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="whyus">
            <div class="explain">
              <h3>¿Por qué elegir nuestros servicios?</h3>
              <div class="card-list stagger" role="list">
                <article class="card-icon diagfirst" v-anim="'slide-left'" role="listitem">
                  <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
                  <h4>Excursiones Personalizadas</h4>
                  <p>Diseño de rutas adaptadas al contenido del programa académico de cada facultad.</p>
                </article>
                <article class="card-icon diagsecond" v-anim="'slide-top'" role="listitem">
                  <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
                  <h4>Adaptadas al Alumno</h4>
                  <p>El ritmo, el nivel de análisis y la profundidad se ajustan al perfil del grupo.</p>
                </article>
                <article class="card-icon diagsecond" v-anim="'slide-bottom'" role="listitem">
                  <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
                  <h4>Material Didáctico</h4>
                  <p>Recursos que vinculan la visita presencial con los objetivos académicos evaluables.</p>
                </article>
                <article class="card-icon diagfirst" v-anim="'slide-right'" role="listitem">
                  <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
                  <h4>Formato Flexible</h4>
                  <p>Sesiones virtuales previas, visitas de medio día o jornada completa, multi-ciudad.</p>
                </article>
              </div>
              <div class="cta">
                <RouterLink to="/contacto" class="btn-primary">Solicitar información</RouterLink>
                <a href="tel:+34640947912" class="btn-contact" aria-label="Llamar al +34 640 947 912">
                  <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
                </a>
              </div>
            </div>
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
.services-page { padding-inline: 1rem; }
section { margin-bottom: 5rem; }

/* Services grid */
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.service-card {
  background-color: var(--navegation);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
  transition: transform .3s;
}

.service-card:hover { transform: translateY(-4px); }

.service-icon {
  width: 4rem;
  height: 4rem;
  background-color: var(--atomic);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.service-icon i { color: white; font-size: 1.6rem; }
.service-card h3 { color: white; text-align: center; }
.service-card p  { color: rgba(255,255,255,0.85); font-size: clamp(.85rem, 1.8vw, 1rem); }

/* Targets */
.targets-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.target-card {
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  align-items: flex-start;
  padding: 1.5rem;
  box-shadow: 5px 5px 12px rgba(11,74,193,0.2);
  border-radius: 0 0 40% 0;
  transition: transform .3s;
}

.target-card:hover { transform: translateX(4px); }

.target-card i {
  font-size: 2rem;
  background-color: var(--navegation);
  color: white;
  border-radius: 50%;
  padding: .7rem;
  flex-shrink: 0;
}

.target-card h3 { font-size: clamp(1rem, 2.2vw, 1.2rem); text-align: left; margin-bottom: .4rem; }
.target-card p  { font-size: clamp(.85rem, 1.8vw, 1rem); color: var(--text_secondary); }

/* Destinations */
.travel-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.destination-card {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
}

.destination-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .5s ease;
}

.destination-card:hover img { transform: scale(1.08); }

.destination-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,51,128,0.9) 0%, transparent 100%);
  padding: 1.5rem 1rem 1rem;
  transform: translateY(20%);
  transition: transform .4s ease;
}

.destination-card:hover .destination-overlay { transform: translateY(0); }
.destination-overlay h3 { color: white; text-align: left; margin-bottom: .3rem; font-size: clamp(.95rem, 2vw, 1.2rem); }
.destination-overlay p  { color: rgba(255,255,255,0.85); font-size: clamp(.75rem, 1.5vw, .9rem); }

/* Includes section (replica home) */
.servcontent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

.backflayer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/img/utrecht_aerial.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  filter: drop-shadow(10px 10px 5px #0f0f0f5b);
}

.activity {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 2em;
  background-color: #0f0f0f5b;
}

.bungee { font-family: 'Bungee', cursive; font-size: 30px; margin-bottom: 0; }
.text-white { color: white !important; }
.svg-text { font-family: 'Bungee', cursive; font-size: 5rem; }

.activity h4 { color: white; margin-block: 1rem; }

.actinfo {
  width: 90%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #0f0f0f5b;
  border-radius: 15px;
}

.actinfo .info {
  display: flex;
  flex-direction: row;
  gap: .8rem;
  align-items: flex-start;
  text-align: left;
}

.actinfo .info p { color: white; font-weight: 600; }

#ico {
  color: white;
  font-size: 1.2rem;
  background-color: var(--atomic);
  border-radius: 50%;
  padding: .3rem;
  flex-shrink: 0;
}

.whyus { display: flex; flex-direction: column; align-items: center; width: 100%; }
.explain { display: flex; flex-direction: column; align-items: center; gap: 1rem; width: 100%; max-width: 700px; }
.explain h3 { margin-bottom: 1.5rem; }

.btn-primary {
  padding: .7rem 1.4rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.9rem, 2vw, 1.1rem);
  background-color: var(--navegation);
  color: white;
  border: none;
  border-radius: 15px;
  text-decoration: none;
  transition: transform .3s, background-color .3s;
}
.btn-primary:hover { transform: scale(1.05); background-color: var(--smart_blue); }

.btn-contact {
  padding: .6rem 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.9rem, 2vw, 1.1rem);
  color: var(--text_primary);
  border: 3px solid var(--navegation);
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: .4rem;
  transition: transform .3s, background-color .3s;
}
.btn-contact:hover { background-color: var(--navegation); color: white; transform: scale(1.05); }
.btn-contact i { color: green; }

@media (min-width: 768px) {
  .services-page { padding-inline: 2.5rem; }
  section { padding-inline: 3rem; }

  .services-grid { grid-template-columns: repeat(3, 1fr); }
  .targets-grid  { grid-template-columns: repeat(2, 1fr); }

  .servcontent { flex-direction: row; gap: 4rem; align-items: center; }
  .backflayer, .activity { width: 40%; min-height: 80vh; }
  .whyus { width: 50%; }

  .explain .card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
</style>
