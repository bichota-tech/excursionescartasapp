<template>
  <div class="home-view">
    <!-- Hero con vídeo -->
    <section class="hero-section" aria-label="Cabecera principal">
      <div class="background" aria-hidden="true">
        <video
          autoplay
          muted
          loop
          playsinline
          aria-hidden="true"
          title="Video de fondo con vistas de los Países Bajos"
        >
          <source src="/video/utrecht_background.mp4" type="video/mp4" />
          <img
            src="/img/utrecht_aerial.png"
            alt="Vista panorámica de los Países Bajos"
          />
        </video>
      </div>

      <div class="header-content">
        <img
          src="/img/menu-icon.png"
          alt="Bandera de los Países Bajos"
          id="menu-icon"
          aria-hidden="true"
        />
        <div class="preview" v-anim="'slide-left'">
          <h1>Excursiones Académicas<br />a los Países Bajos</h1>
          <p>Descubre los Países Bajos a través de nuestras excursiones académicas diseñadas para estudiantes.</p>
          <div class="cta">
            <RouterLink to="/servicios" class="btn-primary">Ver Excursiones</RouterLink>
            <a href="https://wa.me/640947912" class="btn-secondary" aria-label="Enviar mensaje por WhatsApp">
              <i class="bi bi-whatsapp" aria-hidden="true"></i> Enviar Mensaje
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Cards de características -->
    <section class="home-section" aria-labelledby="home-heading">
      <div class="homecontainer">
        <div class="card-list stagger" role="list">
          <article class="card-icon diagfirst" v-anim="'slide-top'" role="listitem">
            <i class="bi bi-compass" aria-hidden="true"></i>
            <span>Ciudades con un extenso patrimonio histórico y cultural, ideales para excursiones.</span>
          </article>
          <article class="card-icon diagsecond" v-anim="'slide-right'" role="listitem">
            <i class="bi bi-compass" aria-hidden="true"></i>
            <span>Recorridos guiados por expertos bilingües en arte e historia para ampliar la cultura local.</span>
          </article>
          <article class="card-icon diagsecond" v-anim="'slide-left'" role="listitem">
            <i class="bi bi-compass" aria-hidden="true"></i>
            <span>Explorar arquitecturas, museos y arte para comprender el valor cultural de la región.</span>
          </article>
          <article class="card-icon diagfirst" v-anim="'slide-bottom'" role="listitem">
            <i class="bi bi-compass" aria-hidden="true"></i>
            <span>Brindar a los estudiantes experiencias prácticas e inmersivas para su aprendizaje.</span>
          </article>
          <div class="cta" style="grid-column: 1 / 3;">
            <RouterLink to="/servicios" class="btn-primary">Ver Excursiones</RouterLink>
            <a href="tel:+34640947912" class="btn-secondary" aria-label="Llamar al +34 640 947 912">
              <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
            </a>
          </div>
        </div>

        <div class="img-right diagfirst" role="img" aria-label="Fotografía de estudiantes en excursión">
          <div class="circle-exp" v-anim="'stamp'">
            <div class="exp">
              <span id="number">+ 18</span>
              <span id="phrase">Años de Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section Preview -->
    <section class="about-section" aria-label="about-heading">
      <h2 id="title-about" class="section-title">
        Excursiones Cartas
      </h2>
      <div class="aboutcontainer">
        <div class="information stagger">
          <div class="presentation-img diagfirst" v-anim="'slide-right'" role="img" aria-label="Fotografía de Yanetsis"></div>
          <div class="fullname diagsecond" v-anim="'slide-left'">
            <h3>Yanetsis Cartas Álvarez</h3>
            <p>
              <strong>Licenciada en Historia del Arte</strong> con experiencia en museología, gestión del
              patrimonio y cultura. Me dedico a enseñar, coordinar y guiar excursiones académicas en
              Países Bajos <em>especialmente en Utrecht</em> para estudiantes y profesionales
              hispanohablantes de universidades de España y Latinoamérica.
            </p>
          </div>
        </div>

        <div class="cta">
          <RouterLink to="/sobre-mi" class="btn-primary">Conoce más sobre mí</RouterLink>
          <a href="tel:+34640947912" class="btn-secondary" aria-label="Llamar al +34 640 947 912">
            <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
          </a>
        </div>
      </div>
    </section>
      <!-- Clientes / Targets -->
    <section class="clients-section" aria-labelledby="clients-heading">
      <h3 id="clients-heading">¿A quiénes va dirigido?</h3>
      <div class="info">
        <div class="card-list stagger" role="list">
          <article class="card-icon diagfirst" v-anim="'slide-top'" role="listitem">
            <i class="bi bi-bookmark-check-fill" style="color: var(--navegation);" aria-hidden="true"></i>
            <span>Facultades de Historia del Arte.</span>
          </article>
          <article class="card-icon diagsecond" v-anim="'slide-right'" role="listitem">
            <i class="bi bi-bookmark-check-fill" style="color: var(--navegation);" aria-hidden="true"></i>
            <span>Programas de Museología.</span>
          </article>
          <article class="card-icon diagsecond" v-anim="'slide-left'" role="listitem">
            <i class="bi bi-bookmark-check-fill" style="color: var(--navegation);" aria-hidden="true"></i>
            <span>Estudios de Patrimonio.</span>
          </article>
          <article class="card-icon diagfirst" v-anim="'slide-bottom'" role="listitem">
            <i class="bi bi-bookmark-check-fill" style="color: var(--navegation);" aria-hidden="true"></i>
            <span>Minors, masters y viajes de estudio.</span>
          </article>
        </div>
          
        <div class="img-right-grid stagger" v-anim="'draw-border'">
          <div class="right-grid imgtop" v-anim="'slide-right'">
            <img src="/img/students_museum.png" class="slide" alt="Grupo de estudiantes visitando un museo holandés" />
          </div>
          <div class="right-grid imgbottom" v-anim="'slide-right'">
            <img src="/img/students_canal.png" class="slide" alt="Estudiantes en los canales de Utrecht" />
          </div>
          <div class="right-grid imgbottom" v-anim="'slide-left'">
            <img src="/img/students_streets.png" class="slide" alt="Estudiantes explorando las calles medievales de Utrecht" />
          </div>
            <div class="right-grid imgtop" v-anim="'slide-left'">
              <img src="/img/hero_home.png" class="slide" alt="Estudiantes con guía en los canales de los Países Bajos" />
            </div>
          </div>
        </div>
    
        <div class="cta">
          <RouterLink to="/servicios" class="btn-primary">Ver Ofertas</RouterLink>
          <a href="tel:+34640947912" class="btn-secondary" aria-label="Llamar al +34 640 947 912">
            <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
          </a>
        </div>
    </section>

    <!-- Services Preview -->
    <section class="services-section" aria-labelledby="services-heading">
      <h2 id="services-heading" class="section-title">Nuestros Servicios</h2>
      <div class="servcontent">
        <div class="backflayer imgtop" aria-hidden="true">
          <h3 class="bungee text-white">VIAJA A</h3>
          <svg viewBox="0 0 1000 180" xmlns="http://www.w3.org/2000/svg" aria-label="PAÍSES BAJOS" role="img">
            <text x="180" y="130" class="svg-text" fill="transparent" stroke="#ffffff" stroke-width="6" stroke-linejoin="round">
              PAÍSES BAJOS
            </text>
          </svg>
          <h4>¿Qué incluye la excursión?</h4>
          <div class="actinfo">
            <div class="info">
              <i class="bi bi-sign-turn-right" id="ico" aria-hidden="true"></i>
              <p>Diseño de rutas planificadas según el currículo.</p>
            </div>
            <div class="info">
              <i class="bi bi-mortarboard" id="ico" aria-hidden="true"></i>
              <p>Contenido académico adaptado al nivel universitario.</p>
            </div>
            <div class="info">
              <i class="bi bi-person-video3" id="ico" aria-hidden="true"></i>
              <p>Introducciones virtuales previas a la excursión.</p>
            </div>
            <div class="info">
              <i class="bi bi-buildings" id="ico" aria-hidden="true"></i>
              <p>Visitas a museos, instituciones culturales y espacios patrimoniales.</p>
            </div>
            <div class="info">
              <i class="bi bi-activity" id="ico" aria-hidden="true"></i>
              <p>Actividades participativas y análisis in situ.</p>
            </div>
          </div>
        </div>

        <div class="plane" aria-hidden="true">
          <img src="/img/plane.png" id="plane" alt="" aria-hidden="true" />
        </div>

        <div class="whyus-explain">
          <h3>¿Por qué elegir nuestros servicios?</h3>
          <div class="card-list stagger" role="list">
            <article class="card-icon diagfirst" v-anim="'slide-left'" role="listitem">
              <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
              <h4>Excursiones Personalizadas</h4>
              <p>Diseño de rutas adaptadas al contenido del programa académico.</p>
            </article>
            <article class="card-icon diagsecond" v-anim="'slide-top'" role="listitem">
              <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
              <h4>Adaptadas al alumno</h4>
              <p>Excursiones diseñadas en función del nivel del estudiante.</p>
            </article>
            <article class="card-icon diagsecond" v-anim="'slide-bottom'" role="listitem">
              <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
              <h4>Material Didáctico</h4>
              <p>Material complementario que vincula la excursión con los objetivos académicos.</p>
            </article>
            <article class="card-icon diagfirst" v-anim="'slide-right'" role="listitem">
              <i class="bi bi-bookmark-check-fill" aria-hidden="true"></i>
              <h4>Formato Flexible</h4>
              <p>Sesiones virtuales previas para introducir al alumno a la excursión.</p>
            </article>
          </div>
        </div>
      </div>
      <div class="cta">
        <RouterLink to="/servicios" class="btn-primary">Ver Ofertas</RouterLink>
        <a href="tel:+34640947912" class="btn-secondary" aria-label="Llamar al +34 640 947 912">
          <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
        </a>
      </div>
    </section>
    <!-- CTA Final con imagen de fondo -->
    <div class="img-right footer-cta" role="region" aria-label="Llamada a la acción final">
      <div class="footer-cta-content" v-anim="'slide-left'">
        <h2>¿Listo para tu próxima aventura académica?</h2>
        <p>Únete a cientos de estudiantes que ya han descubierto los Países Bajos con nuestras rutas personalizadas.</p>
        <div class="cta">
          <RouterLink to="/contacto" class="btn-primary">Reservar ahora</RouterLink>
          <RouterLink to="/servicios" class="btn-secondary">Explorar más</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>

/* ─── Hero ─────────────────────────────────────────────── */
.hero-section {
  width: 100%;
  position: relative;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.background {
  position: relative;
  width: 100%;
  z-index: -3;
}

video {
  filter: saturate(1.8);
  width: 100%;
  height: clamp(23rem, 60vw, 40rem);
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0 0 15px 15px;
}

.header-content {
  width: 100%;
  height: clamp(23rem, 60vw, 40rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  position: relative;
}

#menu-icon {
  width: clamp(8rem, 20vw, 12rem);
  height: auto;
  position: absolute;
  top: 3%;
  right: 0;
  z-index: 1;
}

.preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .8rem;
  gap: 1rem;
  background-color: var(--shadow);
  border-radius: 15px;
  width: 100%;
  height: auto;
  margin-top: 1rem;
}

.preview .cta{
  margin: 0;
}

.preview h1 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.5rem, 4vw, 3rem);
  color: var(--ligth_bgd);
  text-align: center;
}

.preview p {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.9rem, 2vw, 1.5rem);
  color: var(--ligth_bgd);
  text-align: center;
}

a.btn-secondary i{
  font-size: clamp(1rem, 2vw, 1.5rem);
}

/* ─── Home Section ──────────────────────────────────────── */

.home-section { 
  width: 100%;
  padding-inline: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.homecontainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.homecontainer .card-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  width: 100%;
}

.img-right {
  background-image: url('/img/students_canal.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: clamp(25rem, 60vh, 35rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.circle-exp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 45%;
  right: -30%;
  border-radius: 50%;
  border: 2px dashed var(--atomic);
  width: clamp(10rem, 20vw, 13rem);
  height: clamp(10rem, 20vw, 13rem);
}

.circle-exp .exp {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: .6rem;
  width: clamp(9rem, 20vw, 12rem);
  height: clamp(9rem, 20vw, 12rem);
  background-color: var(--atomic);
}

#number {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
}

#phrase {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.9rem, 3vw, 1.1rem);
  font-weight: 700;
}

/* ─── About Section ─────────────────────────────────────── */
.about-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 1rem;
}

.about-section h2 {
  margin-top: 2rem;
}

.aboutcontainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.information {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.presentation-img {
  background-image: url('/img/profile_yanetsis.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  z-index: 2;
  border-radius: 40% 0;

}

.fullname.diagsecond {
  display: flex;
  flex-direction: column;
  justify-content: initial;
  background-color: var(--atomic);
  padding: 6rem .8rem 2rem 3rem;
  position: relative;
  top:-5rem;
  z-index: 1;
  width: 100%;
  height: 400px;
  border-radius: 0 40%;
}

.fullname h3 { color: white; margin-block: 1rem; text-align: left; }
.fullname p  { color: white; text-align: left; line-height: 1.6; }

.aboutcontainer .cta{
  margin-top: -2rem;
}

.clients-section{
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.clients-section .card-list {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  margin-bottom: 2rem;
}


.clients-section .card-icon {
  width: 100%;
  min-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  box-shadow: 4px 3px 9px -1px var(--navegation);
  background-color: transparent;
}

.clients-section .card-icon i {
  font-size: clamp(1.6rem, 2vw, 1.8rem);
  color: white;
  margin-bottom: 0;
}

.clients-section .card-icon span {
  color: var(--text_primary);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 600;
}

.img-right-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  width: 100%;
  padding: .5rem;
  border-radius: 15%;
  color: var(--atomic);
  margin-bottom: 1rem;
}

.right-grid {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
}

img.slide {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

/* ─── Services Section ──────────────────────────────────── */
.services-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url('/img/utrecht_aerial.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed; /* Parallax en la sección padre */
  padding-block: 4rem;
  padding-inline: 1rem;
  margin-bottom: 0;
  width: 100%;
}

.services-section > * {
  position: relative;
  z-index: 1;
}

.services-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45); /* Overlay para legibilidad global */
  z-index: 0;
}

h2#services-heading {
  color: white;
  margin-bottom: 1.5rem;
}

.backflayer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}

.activity.imgtop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: auto;
  padding: 1.5rem;
}

.bungee {
  font-family: 'Bungee', cursive;
  font-size: 30px;
  margin-bottom: 0;
}

.backflayer h4 { 
  color: white; 
  margin-block: 1rem; 
  width: 100%; 
  text-align: center; 
}

.text-white { 
  color: white !important; 
}

.svg-text {
  font-family: 'Bungee', cursive;
  font-size: 5rem;
}

.actinfo {
  width: 95%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(12px);
}

.actinfo .info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  text-align: left;
  width: 100%;
}

.actinfo .info p { color: white; font-weight: 600; }

#ico {
  color: white;
  font-size: 1.4rem;
  background-color: var(--atomic);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  padding: .3rem;
  
}

.plane {
  position: absolute;
  top: 8%;
  right: 0;
  transform: translateY(-50%);
  width: 100%;
  z-index: -1;
}

.whyus-explain h3 { 
  margin-bottom: 1.5rem; 
  color: white; 
}

.whyus-explain {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

.servcontent .card-list{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
  width: 100%;
  margin: 0 auto;
}


/* ─── Footer CTA Content ────────────────────────────────── */

.footer-cta {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
}

.footer-cta-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem;
  border-radius: 20px;
  max-width: 500px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.footer-cta-content .cta{
  margin-bottom: 0;
}

.footer-cta-content h2 {
  color: var(--navegation);
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  text-align: inherit;
}

.footer-cta-content p {
  margin-bottom: 2rem;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  opacity: 0.95;
}

/* ─── Accessibility sr-only ─────────────────────────────── */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

/* ─── Desktop ────────────────────────────────────────────── */
@media (min-width: 768px) {

  video {
    height: clamp(500px, 80vh, 700px);
  }

  .header-content {
    height: clamp(500px, 80vh, 700px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.5rem;
    margin-bottom: 2rem;
  }

  #menu-icon { top: 25%; right: 10%; z-index: 1; }

  .preview {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    gap: 1.5rem;
    padding: 2rem;
    margin-top: 0;
  }

  .preview p { width: 80%; }
  .preview .cta{
    margin: 0;
  }
  
  .homecontainer {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: initial;
    width: 100%;
    gap: 1rem;
    padding-inline: 3rem;
  }

  .homecontainer .card-list {
    width: 45%;
  }

  .homecontainer .card-list .card-icon {
    flex-direction: column;
    text-align: left;
    border-radius: 20px;
    gap: .5rem;
    padding: 1rem .8rem 1.5rem 1.8rem;
    text-align: center;
  }

   .homecontainer .card-list .card-icon i{
    margin: 0;
   }

  .img-right { width: 45%; height: 80vh; }
  
  .circle-exp { right: -30%; top: 50%; }
  
  section#about { padding-inline: 3rem; }

  .information {
    flex-direction: row;
    align-items: stretch;
    gap: 2rem;
  }
  
  .presentation-img { width: 50%; height: auto; }

  .information .fullname  { 
    width: 50%; 
    margin: 0; 
    padding: 3rem; 
    position: none; 
    top:0; 
    z-index: 1; 
    padding: 1rem 1rem 1.5rem 3rem;
    justify-content: center;
  }
  
  .clients {
    gap: 1rem; 
    justify-content: center;
    align-items: center;
    flex-direction: column; 
  }

  .clients .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: initial;
    gap: 2rem;
    width: 100%;
  }
  
  .clients .card-list {
    margin-block: 0;
    width: 100%;
    min-width: 40%;
  }

  .img-right-grid{
    justify-content: center;
    align-items: center;
  }
  
  .clients .card-list .card-icon {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  
  .clients .card-list .card-icon span { text-align: center; }
  
  .servcontent {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 0 2rem;
  }
  
  .servcontent .backflayer {
    width: 45%;
    min-height: 70vh;
  }

  .activity{
    width: 45%;
    min-height: 70vh;
    padding: 0 !important;
  }
  
  .whyus { width: 55%; }
  
  .activity .actinfo {
    width: 90%;
    margin: 0 auto;
    gap: 1.5rem;
    padding: 2rem 1.5rem;
  }

  .actinfo .info{
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: .8rem;
    
  }
  
  
  .plane { top: 10%; right: 50%; width: 50%; }
  
  .explain .card-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .explain .card-list .card-icon {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
  }
  
  .footer-cta {
    width: 100%;
    justify-content: flex-end;
    padding-right: 5%;
  }
  
  .footer-cta-content {
    text-align: left;
    max-width: 500px;
  }
}
</style>
