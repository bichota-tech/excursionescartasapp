# Excursiones Cartas - Proyecto de Migración

Este proyecto representa la migración y modernización del sitio web **Excursiones Cartas** a una arquitectura moderna basada en **Vue 3**. El objetivo fundamental ha sido mejorar la experiencia de usuario, optimizar el rendimiento y facilitar el mantenimiento futuro mediante el uso de herramientas de vanguardia.

## 🚀 Tecnologías Utilizadas

- **Core:** [Vue 3](https://vuejs.org/) (Composition API con `<script setup>`)
- **Herramienta de Construcción:** [Vite](https://vitejs.dev/) para un desarrollo ultrarrápido.
- **Enrutamiento:** [Vue Router 4](https://router.vuejs.org/) con modo History para URLs limpias.
- **Gestión de Estado:** [Pinia](https://pinia.vuejs.org/) (sucesor oficial de Vuex).
- **Estilos:** CSS nativo con soporte para **Sass** y **Bootstrap Icons**.
- **Animaciones:** Integración de efectos de movimiento y transiciones suaves entre páginas.

## 📁 Estructura del Proyecto

La estructura sigue las mejores prácticas actuales para proyectos Vue:

- `src/views/`: Contiene las páginas principales (Home, About, Services, Blog, Contact).
- `src/components/`: Componentes reutilizables como el Header y Footer.
- `src/router/`: Configuración de navegación y transiciones.
- `src/stores/`: Lógica de negocio y estado global (Pinia).
- `src/assets/`: Recursos estáticos como imágenes y estilos globales.

## 🛠️ Instalación y Uso

Para ejecutar este proyecto de forma local, sigue estos pasos:

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd excursionescartas
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**

   ```bash
   npm run dev
   ```

4. **Construir para producción:**

   ```bash
   npm run build
   ```

## 📝 Notas de la Migración

- Se ha implementado el **History Mode** en el router para evitar el uso de `#` en las URLs.
- Se ha rediseñado la sección "Sobre mí" para asegurar un diseño responsivo y simétrico.
- Se han optimizado las transiciones entre vistas para una navegación fluida.
- La gestión de datos de productos y servicios se centraliza ahora en **Pinia**.
