<template>
  <div class="contact-view">
    <!-- Hero -->
    <section class="page-hero" aria-label="Cabecera Contacto">
      <img src="/img/students_streets.png" alt="Estudiantes en las calles de Utrecht" />
      <div class="page-hero-content slide-left">
        <h1>Contacto</h1>
        <p>Cuéntanos tu proyecto y diseñamos la excursión perfecta</p>
      </div>
    </section>

    <main class="contact-page">
      <section class="contact-section" aria-labelledby="contact-heading">
        <h2 id="contact-heading" class="section-title">¿Hablamos?</h2>

        <div class="contact-layout">

          <!-- Formulario -->
          <div class="contact-form-wrap" v-anim="'slide-left'">
            <form
              class="contact-form"
              @submit.prevent="handleSubmit"
              novalidate
              aria-label="Formulario de contacto"
            >
              <div class="form-group">
                <label for="contact-name">Nombre completo <span aria-hidden="true" class="required">*</span></label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  placeholder="Tu nombre completo"
                  autocomplete="name"
                  required
                  :aria-invalid="errors.name ? 'true' : 'false'"
                  :aria-describedby="errors.name ? 'name-error' : undefined"
                />
                <span v-if="errors.name" id="name-error" class="form-error" role="alert">{{ errors.name }}</span>
              </div>

              <div class="form-group">
                <label for="contact-email">Correo electrónico <span aria-hidden="true" class="required">*</span></label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  placeholder="tu@universidad.es"
                  autocomplete="email"
                  required
                  :aria-invalid="errors.email ? 'true' : 'false'"
                  :aria-describedby="errors.email ? 'email-error' : undefined"
                />
                <span v-if="errors.email" id="email-error" class="form-error" role="alert">{{ errors.email }}</span>
              </div>

              <div class="form-group">
                <label for="contact-institution">Universidad / Institución</label>
                <input
                  id="contact-institution"
                  v-model="form.institution"
                  type="text"
                  placeholder="Universidad de Barcelona"
                  autocomplete="organization"
                />
              </div>

              <div class="form-group">
                <label for="contact-subject">Tipo de consulta <span aria-hidden="true" class="required">*</span></label>
                <select
                  id="contact-subject"
                  v-model="form.subject"
                  required
                  :aria-invalid="errors.subject ? 'true' : 'false'"
                  :aria-describedby="errors.subject ? 'subject-error' : undefined"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="excursion">Solicitud de excursión académica</option>
                  <option value="info">Información general</option>
                  <option value="collaboration">Colaboración institucional</option>
                  <option value="other">Otro</option>
                </select>
                <span v-if="errors.subject" id="subject-error" class="form-error" role="alert">{{ errors.subject }}</span>
              </div>

              <div class="form-group">
                <label for="contact-message">Mensaje <span aria-hidden="true" class="required">*</span></label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Cuéntanos sobre tu grupo, el programa académico, las fechas previstas..."
                  required
                  :aria-invalid="errors.message ? 'true' : 'false'"
                  :aria-describedby="errors.message ? 'message-error' : undefined"
                ></textarea>
                <span v-if="errors.message" id="message-error" class="form-error" role="alert">{{ errors.message }}</span>
              </div>

              <p class="form-note"><span class="required">*</span> Campos obligatorios</p>

              <div class="cta">
                <button type="submit" class="btn-submit" :disabled="submitted">
                  <template v-if="!submitted">
                    <i class="bi bi-send-fill" aria-hidden="true"></i> Enviar mensaje
                  </template>
                  <template v-else>
                    <i class="bi bi-check-circle-fill" aria-hidden="true"></i> ¡Mensaje enviado!
                  </template>
                </button>
              </div>

              <div
                v-if="submitted"
                class="success-msg"
                role="alert"
                aria-live="polite"
              >
                <i class="bi bi-check-circle-fill" aria-hidden="true"></i>
                Gracias por contactarnos. Te responderemos en menos de 24 horas.
              </div>
            </form>
          </div>

          <!-- Info de contacto -->
          <aside class="contact-info" v-anim="'slide-right'" aria-label="Información de contacto">
            <div class="info-card diagfirst">
              <div class="info-icon" aria-hidden="true"><i class="bi bi-telephone-fill"></i></div>
              <div>
                <h3>Teléfono</h3>
                <a href="tel:+34640947912" aria-label="Llamar al +34 640 947 912">+34 640 947 912</a>
              </div>
            </div>

            <div class="info-card diagsecond">
              <div class="info-icon whatsapp-icon-wrap" aria-hidden="true"><i class="bi bi-whatsapp"></i></div>
              <div>
                <h3>WhatsApp</h3>
                <a href="https://wa.me/640947912" target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp (se abre en nueva pestaña)">
                  Envíanos un mensaje
                </a>
              </div>
            </div>

            <div class="info-card diagfirst">
              <div class="info-icon" aria-hidden="true"><i class="bi bi-envelope-fill"></i></div>
              <div>
                <h3>Correo electrónico</h3>
                <a href="mailto:adalvarez2021@gmail.com" aria-label="Enviar correo a adalvarez2021@gmail.com">
                  adalvarez2021@gmail.com
                </a>
              </div>
            </div>

            <div class="info-card diagsecond">
              <div class="info-icon linkedin-icon-wrap" aria-hidden="true"><i class="bi bi-linkedin"></i></div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Ver perfil de LinkedIn (se abre en nueva pestaña)">
                  Yanetsis Cartas Álvarez
                </a>
              </div>
            </div>

            <div class="info-card info-location diagfirst">
              <div class="info-icon" aria-hidden="true"><i class="bi bi-geo-alt-fill"></i></div>
              <div>
                <h3>Ubicación</h3>
                <p>Utrecht, Países Bajos<br />
                  <em>Visitas en toda Holanda y Bélgica</em>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <!-- Mapa decorativo / frase -->
      <section class="closing-section" aria-label="Sección de cierre">
        <div class="closing-box">
          <img src="/img/utrecht_aerial.png" alt="Vista aérea de Utrecht" class="closing-img" aria-hidden="true" />
          <div class="closing-content">
            <h2>¿Listo para vivir Utrecht?</h2>
            <p>Más de 18 años de experiencia acompañando a estudiantes universitarios hispano hablantes en su descubrimiento del arte y la cultura de los Países Bajos.</p>
            <div class="cta">
              <a href="https://wa.me/640947912" class="btn-primary" target="_blank" rel="noopener noreferrer" aria-label="Enviar mensaje de WhatsApp">
                <i class="bi bi-whatsapp" aria-hidden="true"></i> Escríbenos ahora
              </a>
              <a href="tel:+34640947912" class="btn-secondary" aria-label="Llamar al +34 640 947 912">
                <i class="bi bi-telephone-fill" aria-hidden="true"></i> +34 640 947 912
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  institution: '',
  subject: '',
  message: '',
})

const errors = reactive({})
const submitted = ref(false)

const validate = () => {
  Object.keys(errors).forEach((k) => delete errors[k])
  let valid = true

  if (!form.name.trim()) { errors.name = 'El nombre es obligatorio.'; valid = false }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = 'Introduce un correo electrónico válido.'
    valid = false
  }
  if (!form.subject) { errors.subject = 'Selecciona el tipo de consulta.'; valid = false }
  if (!form.message.trim() || form.message.length < 20) {
    errors.message = 'El mensaje debe tener al menos 20 caracteres.'
    valid = false
  }

  return valid
}

const handleSubmit = () => {
  if (!validate()) return
  // Simular envío (aquí iría la integración con el backend/Formspree/EmailJS)
  submitted.value = true
}
</script>

<style scoped>
.contact-page { padding-inline: 1rem; }
section { margin-bottom: 3rem; }

.contact-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* Form */
.contact-form-wrap { width: 100%; }

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,51,128,0.1);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.form-group label {
  font-family: 'Montserrat', sans-serif;
  font-size: .9rem;
  font-weight: 600;
  color: var(--navegation);
}

.form-group input,
.form-group select,
.form-group textarea {
  font-family: 'Montserrat', sans-serif;
  font-size: .95rem;
  color: var(--text_primary);
  border: 2px solid rgba(0,51,128,0.2);
  border-radius: 10px;
  padding: .7rem 1rem;
  background: #f8faff;
  transition: border-color .25s, box-shadow .25s;
  outline: none;
  cursor: text;
}

.form-group textarea { resize: vertical; }

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--navegation);
  box-shadow: 0 0 0 3px rgba(0,51,128,0.1);
}

.form-group input[aria-invalid="true"],
.form-group select[aria-invalid="true"],
.form-group textarea[aria-invalid="true"] {
  border-color: var(--cta_accent);
}

.form-error {
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: var(--cta_accent);
  font-weight: 600;
}

.required { color: var(--atomic); }

.form-note {
  font-family: 'Montserrat', sans-serif;
  font-size: .8rem;
  color: var(--text_secondary);
}

.btn-submit {
  padding: .8rem 2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-color: var(--navegation);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  transition: transform .3s, background-color .3s;
}

.btn-submit:hover:not(:disabled) { transform: translateY(-2px); background-color: var(--smart_blue); box-shadow: 0 4px 12px rgba(11, 74, 193, 0.2); }
.btn-submit:disabled { background-color: #4ade80; cursor: default; }

.success-msg {
  display: flex;
  align-items: center;
  gap: .6rem;
  background-color: rgba(74, 222, 128, 0.15);
  border: 1px solid #4ade80;
  border-radius: 10px;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: .95rem;
  color: #166534;
}

.success-msg i { font-size: 1.3rem; color: #22c55e; }

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
}

.info-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding: 1.2rem 1.5rem;
  background: white;
  box-shadow: var(--card-shadow);
  transition: transform .3s;
}

.info-card:hover { transform: translateX(6px); }

.info-icon {
  width: 3.2rem;
  height: 3.2rem;
  background-color: var(--navegation);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-icon i { color: white; font-size: 1.2rem; }
.whatsapp-icon-wrap, .whatsapp-icon-wrap { background-color: #25d366; }
.linkedin-icon-wrap { background-color: #0a66c2; }

.info-card h3 {
  font-size: clamp(.9rem, 2vw, 1.1rem);
  color: var(--navegation);
  margin-bottom: .2rem;
  text-align: left;
}

.info-card a {
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(.85rem, 1.8vw, 1rem);
  color: var(--text_secondary);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: color .2s, border-color .2s;
}

.info-card a:hover { color: var(--navegation); border-bottom-color: var(--navegation); }

.info-card p {
  font-size: clamp(.85rem, 1.8vw, 1rem);
  color: var(--text_secondary);
  line-height: 1.5;
  margin: 0;
}

.info-card p em { color: var(--atomic); font-style: italic; }

/* Closing section */
.closing-section { margin-bottom: 0; }

.closing-box {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  min-height: 22rem;
  display: flex;
  align-items: center;
}

.closing-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4) saturate(1.3);
}

.closing-content {
  position: relative;
  z-index: 1;
  padding: 3rem 2rem;
  max-width: 600px;
}

.closing-content h2 {
  font-family: 'Frank Ruhl Libre', serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: white;
  text-align: left;
  margin-bottom: 1rem;
}

.closing-content p { color: rgba(255,255,255,0.88); margin-bottom: 1.5rem; font-size: clamp(.9rem, 1.8vw, 1.1rem); }


.btn-contact i { color: rgba(255,255,255,0.8); }

@media (min-width: 768px) {
  .contact-page { padding-inline: 2.5rem; }
  section { padding-inline: 3rem; }
  .contact-layout { flex-direction: row; align-items: flex-start; }
  .contact-form-wrap { flex: 1; }
  .contact-info { width: 360px; flex-shrink: 0; }
}
</style>
