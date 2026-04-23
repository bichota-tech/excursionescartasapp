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

    <main class="w-full px-0! md:px-8">

      <!-- ── ¿Hablamos? ───────────────────────────────────── -->
      <section class="mb-12 md:mb-16" aria-labelledby="contact-heading">
        <h2 id="contact-heading" class="section-title">¿Hablamos?</h2>

        <div class="flex flex-col lg:flex-row gap-10 max-w-5xl mx-auto items-start">

          <!-- Formulario -->
          <div class="w-full lg:flex-1" v-anim="'slide-left'">
            <form
              class="flex flex-col gap-5 bg-white p-6 md:p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,51,128,0.1)]"
              @submit.prevent="handleSubmit"
              novalidate
              aria-label="Formulario de contacto"
            >
              <!-- Nombre -->
              <div class="flex flex-col gap-1.5">
                <label for="contact-name" class="font-sans text-sm font-semibold text-navigation">
                  Nombre completo <span class="text-atomic" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  v-model="form.name"
                  type="text"
                  placeholder="Tu nombre completo"
                  autocomplete="name"
                  required
                  :aria-invalid="errors.name ? 'true' : 'false'"
                  :aria-describedby="errors.name ? 'name-error' : undefined"
                  class="font-sans text-sm text-primary border-2 rounded-xl px-4 py-3 bg-[#f8faff] outline-none transition-colors duration-200 cursor-text"
                  :class="errors.name ? 'border-dutch-red' : 'border-navigation/20 focus:border-navigation focus:shadow-[0_0_0_3px_rgba(0,51,128,0.1)]'"
                />
                <span v-if="errors.name" id="name-error" class="font-sans text-xs font-semibold text-dutch-red" role="alert">{{ errors.name }}</span>
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-1.5">
                <label for="contact-email" class="font-sans text-sm font-semibold text-navigation">
                  Correo electrónico <span class="text-atomic" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  v-model="form.email"
                  type="email"
                  placeholder="tu@universidad.es"
                  autocomplete="email"
                  required
                  :aria-invalid="errors.email ? 'true' : 'false'"
                  :aria-describedby="errors.email ? 'email-error' : undefined"
                  class="font-sans text-sm text-primary border-2 rounded-xl px-4 py-3 bg-[#f8faff] outline-none transition-colors duration-200 cursor-text"
                  :class="errors.email ? 'border-dutch-red' : 'border-navigation/20 focus:border-navigation focus:shadow-[0_0_0_3px_rgba(0,51,128,0.1)]'"
                />
                <span v-if="errors.email" id="email-error" class="font-sans text-xs font-semibold text-dutch-red" role="alert">{{ errors.email }}</span>
              </div>

              <!-- Institución -->
              <div class="flex flex-col gap-1.5">
                <label for="contact-institution" class="font-sans text-sm font-semibold text-navigation">Universidad / Institución</label>
                <input
                  id="contact-institution"
                  v-model="form.institution"
                  type="text"
                  placeholder="Universidad de Barcelona"
                  autocomplete="organization"
                  class="font-sans text-sm text-primary border-2 border-navigation/20 rounded-xl px-4 py-3 bg-[#f8faff] outline-none focus:border-navigation focus:shadow-[0_0_0_3px_rgba(0,51,128,0.1)] transition-colors duration-200 cursor-text"
                />
              </div>

              <!-- Tipo de consulta -->
              <div class="flex flex-col gap-1.5">
                <label for="contact-subject" class="font-sans text-sm font-semibold text-navigation">
                  Tipo de consulta <span class="text-atomic" aria-hidden="true">*</span>
                </label>
                <select
                  id="contact-subject"
                  v-model="form.subject"
                  required
                  :aria-invalid="errors.subject ? 'true' : 'false'"
                  :aria-describedby="errors.subject ? 'subject-error' : undefined"
                  class="font-sans text-sm text-primary border-2 rounded-xl px-4 py-3 bg-[#f8faff] outline-none transition-colors duration-200"
                  :class="errors.subject ? 'border-dutch-red' : 'border-navigation/20 focus:border-navigation focus:shadow-[0_0_0_3px_rgba(0,51,128,0.1)]'"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="excursion">Solicitud de excursión académica</option>
                  <option value="info">Información general</option>
                  <option value="collaboration">Colaboración institucional</option>
                  <option value="other">Otro</option>
                </select>
                <span v-if="errors.subject" id="subject-error" class="font-sans text-xs font-semibold text-dutch-red" role="alert">{{ errors.subject }}</span>
              </div>

              <!-- Mensaje -->
              <div class="flex flex-col gap-1.5">
                <label for="contact-message" class="font-sans text-sm font-semibold text-navigation">
                  Mensaje <span class="text-atomic" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Cuéntanos sobre tu grupo, el programa académico, las fechas previstas..."
                  required
                  :aria-invalid="errors.message ? 'true' : 'false'"
                  :aria-describedby="errors.message ? 'message-error' : undefined"
                  class="font-sans text-sm text-primary border-2 rounded-xl px-4 py-3 bg-[#f8faff] outline-none resize-y transition-colors duration-200 cursor-text"
                  :class="errors.message ? 'border-dutch-red' : 'border-navigation/20 focus:border-navigation focus:shadow-[0_0_0_3px_rgba(0,51,128,0.1)]'"
                ></textarea>
                <span v-if="errors.message" id="message-error" class="font-sans text-xs font-semibold text-dutch-red" role="alert">{{ errors.message }}</span>
              </div>

              <p class="font-sans text-xs text-secondary"><span class="text-atomic">*</span> Campos obligatorios</p>

              <div class="flex justify-center">
                <button
                  type="submit"
                  :disabled="submitted"
                  class="inline-flex items-center gap-2 px-8 py-3 font-sans text-base font-bold text-white rounded-xl border-none cursor-pointer transition-all duration-300"
                  :class="submitted ? 'bg-[#4ade80] cursor-default' : 'bg-navigation hover:bg-smart-blue hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(11,74,193,0.2)]'"
                >
                  <template v-if="!submitted">
                    <i class="bi bi-send-fill" aria-hidden="true"></i> Enviar mensaje
                  </template>
                  <template v-else>
                    <i class="bi bi-check-circle-fill" aria-hidden="true"></i> ¡Mensaje enviado!
                  </template>
                </button>
              </div>

              <!-- Mensaje de éxito -->
              <div
                v-if="submitted"
                class="flex items-center gap-3 bg-[#4ade80]/15 border border-[#4ade80] rounded-xl p-4 font-sans text-sm text-[#166534]"
                role="alert"
                aria-live="polite"
              >
                <i class="bi bi-check-circle-fill text-xl text-[#22c55e]" aria-hidden="true"></i>
                Gracias por contactarnos. Te responderemos en menos de 24 horas.
              </div>
            </form>
          </div>

          <!-- Info de contacto -->
          <aside class="flex flex-col gap-4 w-full lg:w-[360px] lg:shrink-0" v-anim="'slide-right'" aria-label="Información de contacto">
            <div
              v-for="info in contactInfo"
              :key="info.title"
              :class="['flex items-center gap-4 px-5 py-5 bg-white shadow-[var(--card-shadow)] transition-transform duration-300 hover:translate-x-1.5', info.shape]"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                :class="info.iconBg"
                aria-hidden="true"
              >
                <i :class="['bi', info.icon, 'text-white text-xl']"></i>
              </div>
              <div>
                <h3 class="font-serif text-[clamp(.9rem,2vw,1.1rem)] text-navigation mb-0.5 text-left">{{ info.title }}</h3>
                <a
                  v-if="info.href"
                  :href="info.href"
                  :target="info.external ? '_blank' : undefined"
                  :rel="info.external ? 'noopener noreferrer' : undefined"
                  :aria-label="info.ariaLabel"
                  class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-secondary no-underline border-b border-transparent pb-0.5 hover:text-navigation hover:border-navigation transition-colors duration-200"
                >{{ info.label }}</a>
                <p v-else class="font-sans text-[clamp(.85rem,1.8vw,1rem)] text-secondary leading-snug m-0">
                  Utrecht, Países Bajos<br /><em class="text-atomic">Visitas en toda Holanda y Bélgica</em>
                </p>
              </div>
            </div>
          </aside>

        </div>
      </section>

      <!-- ── Closing con imagen de fondo ─────────────────── -->
      <section class="mb-0 px-0" aria-label="Sección de cierre">
        <div class="relative overflow-hidden min-h-[25rem] flex items-center">
          <img
            src="/img/utrecht_aerial.png"
            alt="Vista aérea de Utrecht"
            class="absolute inset-0 w-full h-full object-cover brightness-40 saturate-[1.3]"
            aria-hidden="true"
          />
          <div class="relative z-[1] p-8 md:p-12 max-w-2xl">
            <h2 class="font-serif text-[clamp(1.5rem,4vw,2.5rem)] text-white text-left mb-4">¿Listo para vivir Utrecht?</h2>
            <p class="font-sans text-white/88 mb-6 text-[clamp(.9rem,1.8vw,1.1rem)]">
              Más de 18 años de experiencia acompañando a estudiantes universitarios hispanohablantes en su descubrimiento del arte y la cultura de los Países Bajos.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                href="https://wa.me/640947912"
                class="btn-contact-primary"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enviar mensaje de WhatsApp"
              >
                <i class="bi bi-whatsapp" aria-hidden="true"></i> Escríbenos ahora
              </a>
              <a href="tel:+34640947912" class="btn-contact-secondary" aria-label="Llamar al +34 640 947 912">
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

const form = reactive({ name: '', email: '', institution: '', subject: '', message: '' })
const errors = reactive({})
const submitted = ref(false)

const validate = () => {
  Object.keys(errors).forEach((k) => delete errors[k])
  let valid = true
  if (!form.name.trim()) { errors.name = 'El nombre es obligatorio.'; valid = false }
  if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) { errors.email = 'Introduce un correo electrónico válido.'; valid = false }
  if (!form.subject) { errors.subject = 'Selecciona el tipo de consulta.'; valid = false }
  if (!form.message.trim() || form.message.length < 20) { errors.message = 'El mensaje debe tener al menos 20 caracteres.'; valid = false }
  return valid
}

const handleSubmit = () => {
  if (!validate()) return
  submitted.value = true
}

const contactInfo = [
  { shape: 'diagfirst',  icon: 'bi-telephone-fill', iconBg: 'bg-navigation',  title: 'Teléfono',          href: 'tel:+34640947912',             label: '+34 640 947 912',            ariaLabel: 'Llamar al +34 640 947 912',    external: false },
  { shape: 'diagsecond', icon: 'bi-whatsapp',        iconBg: 'bg-[#25d366]',   title: 'WhatsApp',          href: 'https://wa.me/640947912',       label: 'Envíanos un mensaje',        ariaLabel: 'Enviar mensaje de WhatsApp',  external: true  },
  { shape: 'diagfirst',  icon: 'bi-envelope-fill',   iconBg: 'bg-navigation',  title: 'Correo electrónico', href: 'mailto:adalvarez2021@gmail.com', label: 'adalvarez2021@gmail.com',    ariaLabel: 'Enviar correo',               external: false },
  { shape: 'diagsecond', icon: 'bi-linkedin',        iconBg: 'bg-[#0a66c2]',   title: 'LinkedIn',          href: 'https://linkedin.com',          label: 'Yanetsis Cartas Álvarez',   ariaLabel: 'Ver perfil de LinkedIn',      external: true  },
  { shape: 'diagfirst',  icon: 'bi-geo-alt-fill',    iconBg: 'bg-navigation',  title: 'Ubicación',         href: null,                            label: null,                         ariaLabel: null,                           external: false },
]
</script>

<style scoped>
.btn-contact-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  font-weight: 700;
  text-decoration: none;
  border-radius: 15px;
  background-color: var(--atomic);
  color: white;
  box-shadow: 0 4px 14px rgba(255, 119, 63, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}
.btn-contact-primary:hover { transform: translateY(-2px); filter: brightness(1.1); }

.btn-contact-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(0.9rem, 1.8vw, 1.05rem);
  font-weight: 700;
  text-decoration: none;
  border-radius: 15px;
  background-color: var(--navegation);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
}
.btn-contact-secondary:hover { transform: translateY(-2px); background-color: var(--smart_blue); }
</style>
