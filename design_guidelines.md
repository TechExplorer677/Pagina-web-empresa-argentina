# Guía de Diseño - Sitio Web Empresa Desarrolladora de Software

## Enfoque de Diseño
**Enfoque Basado en Referencias**: Inspirado en sitios web corporativos tecnológicos modernos como Vercel, Stripe, y Linear. El diseño debe transmitir profesionalismo, innovación tecnológica y confiabilidad.

## Principios Clave
- **Minimalismo Profesional**: Espacios amplios, jerarquía clara
- **Orientado a Conversión**: Cada elemento debe guiar hacia el contacto
- **Credibilidad Técnica**: Demostrar expertise sin ser intimidante

## Elementos de Diseño Central

### A. Paleta de Colores
**Modo Oscuro (Principal)**:
- Primario: 220 90% 60% (azul profesional vibrante)
- Fondo: 222 15% 8% (negro suave)
- Superficie: 220 10% 12% (gris carbón)
- Texto: 210 20% 95% (blanco cálido)

**Modo Claro**:
- Primario: 220 90% 50%
- Fondo: 0 0% 100%
- Superficie: 220 20% 98%
- Texto: 220 25% 15%

**Gradientes**: Usar gradientes sutiles de azul a púrpura (220 90% 60% hacia 260 80% 65%) en elementos clave como botones CTA y fondos de sección.

### B. Tipografía
- **Primaria**: Inter (Google Fonts) - moderna, legible, tecnológica
- **Secundaria**: JetBrains Mono para código/elementos técnicos
- **Jerarquía**: Tamaños 14px, 16px, 18px, 24px, 32px, 48px

### C. Sistema de Espaciado
Usar unidades Tailwind: **2, 4, 8, 12, 16, 24** para consistencia. Espaciado generoso entre secciones (24-32 unidades).

### D. Biblioteca de Componentes

**Navegación**: 
- Header fijo con logo, navegación centrada, botón CTA destacado
- Menú hamburguesa en móvil con overlay completo

**Hero**: 
- Titular impactante con gradiente de texto
- Subtítulo explicativo
- Dos botones CTA (primario y secundario con variant="outline")
- Elemento visual: animación de código o dashboard mockup

**Servicios**:
- Grid de tarjetas con efectos glassmorphism
- Iconos minimalistas (Heroicons)
- Hover states con elevación sutil

**Portafolio/Casos de Estudio**:
- Cards con imágenes, overlay de información
- Filtros por categoría
- Modal para detalles expandidos

**Testimonios**:
- Cards horizontales con foto, nombre, empresa
- Carousel sutil en desktop

**Contacto**:
- Formulario estilizado con validación visual
- Información de contacto en sidebar
- Mapa opcional

**Footer**:
- Grid organizado por categorías
- Enlaces a redes sociales
- Información legal y contacto

### E. Interacciones
- **Scroll Reveal**: Elementos aparecen con fade-in desde abajo
- **Hover States**: Elevación sutil en cards, cambio de color en botones
- **Micro-animaciones**: Loading states, form feedback
- **Parallax Sutil**: Solo en hero, no distractivo

## Imágenes
- **Hero**: Imagen conceptual de desarrollo de software o dashboard moderno (no necesaria, puede ser reemplazada por animación CSS)
- **Servicios**: Iconos minimalistas, no imágenes complejas
- **Portafolio**: Screenshots de proyectos reales o mockups profesionales
- **Equipo**: Fotos profesionales del equipo (opcional)
- **Fondos**: Patrones geométricos sutiles o gradientes

## Restricciones Críticas
- **Máximo 5 secciones**: Hero, Servicios, Portafolio/Casos de Estudio, Testimonios, Contacto
- **Foco en conversión**: Cada sección debe guiar hacia el contacto
- **Carga rápida**: Optimizar imágenes y animaciones
- **Responsive first**: Diseño móvil prioritario

## Tratamiento Visual Especial
- **Efectos Glassmorphism** en cards principales
- **Gradientes sutiles** en backgrounds de sección
- **Sombras estratégicas** para jerarquía
- **Líneas divisorias** sutiles entre secciones