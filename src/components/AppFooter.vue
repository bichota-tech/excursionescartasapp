<template>
  <footer role="contentinfo">
    <div class="footer-main" id="contacto">
      <img
        src="/img/menu-icon.png"
        alt=""
        aria-hidden="true"
        id="foot-icon"
      />

      <div class="footer-brand">
        <RouterLink to="/inicio" aria-label="Excursiones Cartas - Inicio">
          Excursiones Académicas<br />a los Países Bajos
        </RouterLink>
      </div>

      <div class="footer-col">
        <h3>Contacto</h3>
        <a href="tel:+34640947912" aria-label="Llamar al +34 640 947 912">
          <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
        </a>
        <a href="mailto:adalvarez2021@gmail.com" aria-label="Enviar correo a adalvarez2021@gmail.com">
          <i class="bi bi-envelope-fill" aria-hidden="true"></i> adalvarez2021@gmail.com
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Perfil de LinkedIn (se abre en nueva pestaña)">
          <i class="bi bi-linkedin" aria-hidden="true"></i> LinkedIn
        </a>
      </div>

      <nav aria-label="Menú del pie de página" class="footer-col">
        <h3>Menú</h3>
        <RouterLink to="/inicio">Inicio</RouterLink>
        <RouterLink to="/sobre-mi">Sobre Mí</RouterLink>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/contacto">Contacto</RouterLink>
      </nav>

      <div class="footer-col footer-legal">
        <h3>Legal</h3>
        <a href="#">Aviso Legal</a>
        <a href="#">Política de Cookies</a>
        <a href="#">Política de Privacidad</a>
      </div>
    </div>

    <p class="copyright">
      &copy;{{ year }} Excursiones Cartas.
      Diseñado y desarrollado por <a href="#" aria-label="ACMA - Desarrollador web">ACMA</a>.
    </p>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const year = new Date().getFullYear()
</script>

<style scoped>
footer {
  width: 100%;
  margin-top: 4rem;
  background-color: var(--smart_blue);
}

.footer-main {
  position: relative;
  width: 100%;
  background-color: var(--navegation);
  color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 1.5rem;
  gap: 2rem;
}

#foot-icon {
  width: clamp(14rem, 26vw, 20rem);
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: opacity(.07);
  pointer-events: none;
}

.footer-brand {
  display: none;
}

.footer-col {
  display: flex;
  flex-direction: column;
  gap: .6rem;
  min-width: 140px;
  z-index: 1;
}

.footer-col h3 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  color: white;
  margin-bottom: .4rem;
  text-align: left;
}

.footer-col a,
.footer-col :deep(a) {
  text-decoration: none;
  color: rgba(255,255,255,0.85);
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.8rem, 1.8vw, 1rem);
  border-bottom: 1px solid transparent;
  padding-bottom: .1rem;
  transition: color .2s, border-color .2s;
  display: flex;
  align-items: center;
  gap: .4rem;
}

.footer-col a:hover,
.footer-col :deep(a):hover {
  color: white;
  border-bottom-color: var(--atomic);
}

.copyright {
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.75);
  text-align: center;
  padding: .8rem;
}

.copyright a {
  color: var(--atomic);
  text-decoration: none;
}

.copyright a:hover { text-decoration: underline; }

@media (min-width: 768px) {
  .footer-main {
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 2.5rem 3rem;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .footer-brand a {
    font-family: 'Frank Ruhl Libre', serif;
    font-size: clamp(1rem, 2.2vw, 1.6rem);
    font-weight: 700;
    color: white;
    text-decoration: none;
    text-align: center;
    line-height: 1.3;
    cursor: pointer;
  }

  .footer-col h3 { text-align: left; }
}
</style>
