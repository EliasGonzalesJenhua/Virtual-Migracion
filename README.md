# Virtual-Migracion

Este proyecto lo desarrollé como una página web académica para explicar la planificación de una migración de entornos virtuales orientada a ciencia de datos e inteligencia artificial. La idea principal fue presentar, de forma visual e interactiva, cómo se puede pasar de una infraestructura virtual heredada hacia una arquitectura más moderna, segura y preparada para nuevas cargas de trabajo.

En el sistema agregué una pantalla de acceso con login protegido. Para ingresar se usa un ID y una contraseña, y antes de abrir el contenido principal se muestra una pantalla de carga con video de fondo, animación tipo glitch y música en bucle. Esto permite que la experiencia tenga una entrada más dinámica antes de mostrar la página web completa.

También integré secciones informativas sobre el contexto del caso, el objetivo general, los resultados esperados, la introducción a la virtualización, los tipos y estrategias de migración, las fases del proceso, los riesgos, las herramientas recomendadas, la arquitectura actual y la arquitectura propuesta. Cada parte fue organizada para que el contenido del PDF se entienda mejor y tenga una presentación más atractiva.

El proyecto incluye recursos multimedia como videos, imágenes, tarjetas animadas, fondos visuales, diagramas y componentes interactivos. En la parte de integrantes agregué cards con imágenes, nombres y mensajes personalizados para representar al equipo de trabajo. Además, añadí preguntas de reflexión con respuestas relacionadas al caso práctico, para cerrar el contenido de manera más completa.

Para la navegación utilicé una estructura de sitio estático con HTML, CSS y JavaScript. El diseño tiene una estética oscura, tecnológica y moderna, con efectos de luces, animaciones, bordes brillantes, textos destacados y elementos visuales relacionados con virtualización, migración, redes, servidores e inteligencia artificial.

En resumen, este sistema presenta una propuesta completa de migración virtual: explica el problema, plantea la solución, muestra las operaciones solicitadas, organiza las fases, analiza riesgos y propone una arquitectura final más estable, escalable y segura.

## Objetivo del proyecto

Mi objetivo fue crear una experiencia web que no se vea como una presentación simple, sino como una página interactiva donde el usuario pueda recorrer el caso práctico paso a paso. Por eso organicé el contenido en bloques visuales, agregué animaciones, elementos multimedia y una navegación clara para que la explicación de la migración sea más entendible.

El proyecto busca demostrar cómo se puede analizar una infraestructura virtual, detectar riesgos, planificar fases de migración y proponer una arquitectura final con mejor rendimiento, disponibilidad, seguridad y escalabilidad.

## Estructura del proyecto

La estructura principal del sistema está organizada de la siguiente manera:

```text
Virtual-Migracion/
├── index.html
├── README.md
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── arquitectura-migracion-ia.mp4
│   ├── descarga.png
│   ├── migracion de entorno virtual.png
│   ├── tipoyestrategia.jpeg
│   └── virtualizacion.png
├── pages/
│   ├── 06-infraestructura-actual.html
│   ├── 07-arquitectura-propuesta.html
│   └── book-casos-conclusiones.html
├── temamusical.mp3
├── PRINCIPAL.mp4
├── entornosvirtuales.mp4
├── Arquitectura de migracion virtual e IA.mp4
├── miles-morales-purple-neon-spiderman-moewalls-com.mp4
└── OPERACION DE CASO.mp4
```

`index.html` funciona como la base principal de la página. Desde ahí se cargan los estilos, las librerías externas y el archivo JavaScript que genera gran parte del contenido dinámico.

`css/styles.css` contiene toda la parte visual del proyecto: colores, animaciones, tarjetas, fondos, diseños responsivos, efectos de texto, formularios, reloj digital, loader, secciones y componentes.

`js/main.js` controla la navegación, el login, el reloj digital, la carga inicial, las interacciones, los gráficos, las tarjetas, los contenidos renderizados y los elementos dinámicos de la página.

La carpeta `images/` guarda recursos gráficos y algunos videos comprimidos que se usan dentro de las secciones. La carpeta `pages/` contiene páginas complementarias del proyecto para contenidos específicos.

## Tecnologías utilizadas

Para construir este sistema utilicé:

- HTML5 para la estructura base del sitio.
- CSS3 para estilos, animaciones, fondos, tarjetas y diseño responsivo.
- JavaScript para la interacción, validación del login, reloj digital, renderizado de secciones y comportamiento dinámico.
- Bootstrap para facilitar algunos componentes visuales y organización responsiva.
- Font Awesome para integrar iconos en botones, navegación y tarjetas.
- AOS para animaciones al hacer scroll.
- Chart.js para gráficos y visualización de datos dentro del contenido.
- Git y GitHub para controlar versiones y publicar el repositorio.
- Vercel para desplegar el proyecto en línea.

## Diseño visual y estilos

El diseño se trabajó con una estética tecnológica, oscura y futurista. Usé fondos con tonos azul profundo, negro, cian, blanco y gris metálico para conectar visualmente con temas de virtualización, servidores, redes, inteligencia artificial y migración de infraestructura.

Los estilos principales incluyen:

- Fondos oscuros con degradados y efectos de iluminación.
- Bordes brillantes en tonos cian para dar sensación tecnológica.
- Tarjetas con transparencias, sombras y efecto glassmorphism.
- Textos grandes para títulos principales y subtítulos destacados.
- Animaciones suaves al aparecer secciones y tarjetas.
- Efectos hover en botones, cards e integrantes.
- Diseño responsivo para adaptarse a distintas pantallas.
- Estética tipo panel de control para reforzar el tema de infraestructura.

También agregué un login visual con reloj digital, bordes animados, estilo metálico blanco/gris en textos y una composición lateral donde el reloj acompaña al formulario de acceso.

## Tipografías

El proyecto usa una combinación de tipografías modernas para reforzar el estilo visual:

- Tipografías sans-serif para textos generales, párrafos, botones y formularios.
- Tipografías de alto impacto para títulos grandes.
- Estilos decorativos tipo outline en algunos encabezados para dar una apariencia más editorial y tecnológica.
- Variaciones de peso en títulos, subtítulos y etiquetas para jerarquizar la información.

La intención fue que los títulos se vean fuertes y llamativos, mientras que los párrafos sean más claros para lectura académica.

## Gráficos y elementos visuales

Dentro del sistema integré gráficos y bloques visuales para explicar mejor el caso práctico. Estos elementos ayudan a resumir información técnica de forma más clara.

Se incorporaron:

- Diagramas de arquitectura actual y propuesta.
- Tarjetas de operaciones del caso práctico.
- Secciones con indicadores, riesgos y fases.
- Cards de integrantes con imágenes y mensajes.
- Bloques de preguntas de reflexión con respuestas.
- Componentes con iconos para representar herramientas, riesgos, fases y recursos.
- Videos de fondo para dar mayor impacto visual.
- Animaciones de entrada para mejorar la experiencia de navegación.

## Videos y multimedia

El proyecto usa varios recursos multimedia separados, cada uno con una función específica:

- `PRINCIPAL.mp4`: video de fondo para la portada principal.
- `entornosvirtuales.mp4`: video relacionado con entornos virtuales.
- `Arquitectura de migracion virtual e IA.mp4`: video integrado en el bloque visual tipo celular.
- `miles-morales-purple-neon-spiderman-moewalls-com.mp4`: video de fondo para la pantalla de carga.
- `OPERACION DE CASO.mp4`: video asociado a la sección de operaciones del caso práctico.
- `temamusical.mp3`: música en bucle para el login y la pantalla de carga.

Cada video se mantiene separado para no mezclar funciones. El video del celular, el video de operaciones, el video de carga y los fondos principales cumplen propósitos distintos dentro del sistema.

## Login y pantalla de carga

Agregué un sistema de acceso inicial con ID y contraseña. El login tiene un diseño oscuro, borde animado, botón de entrada, campos de usuario y contraseña, y un reloj digital estilo futurista.

Cuando el usuario ingresa correctamente, se muestra una pantalla de carga con:

- Video de fondo.
- Texto `Cargando...` con efecto glitch.
- Música en bucle.
- Espera de 1 minuto antes de abrir la página principal.

Este flujo queda organizado así:

```text
Login de acceso -> Pantalla de carga -> Página web principal
```

## Contenido académico integrado

El contenido del sistema está orientado a explicar una migración de entornos virtuales. Se agregaron secciones sobre:

- Contexto del caso.
- Objetivo general.
- Resultado esperado.
- Introducción a la virtualización.
- Fundamento técnico.
- Hipervisores.
- Valor operativo.
- Tipos y estrategias de migración.
- Fases de la migración.
- Inventario y mapa de dependencias.
- Diseño detallado y criterios de éxito.
- Prueba piloto.
- Migración por oleadas.
- Cut-over, validación y rollback.
- Optimización y cierre documental.
- Arquitectura actual.
- Arquitectura propuesta.
- Herramientas recomendadas.
- Riesgos y mitigación.
- Preguntas de reflexión.
- Integrantes del equipo.

## Integrantes

También integré una sección de integrantes con tarjetas visuales. Cada card tiene imagen, nombre, frase personalizada, botón de seguimiento y estilo animado. Esta parte representa al equipo del proyecto y complementa la presentación académica con una sección más personalizada.

## Publicación

El proyecto fue versionado con Git, subido a GitHub y desplegado en Vercel para poder verlo desde un enlace público. Esto permite compartir el sistema como una página web funcional, no solo como archivos locales.

Enlace del proyecto:

```text
https://virtual-migracion.vercel.app
```

## Conclusión

Con este proyecto logré construir una página web completa para presentar un caso de migración de entornos virtuales. No solo se explica la teoría, sino que también se muestra una experiencia visual con login, carga animada, videos, música, gráficos, tarjetas, secciones técnicas y una organización clara del contenido.

El resultado final combina diseño web, contenido académico y recursos multimedia para explicar de forma más atractiva cómo se puede planificar una migración virtual hacia una arquitectura moderna preparada para ciencia de datos e inteligencia artificial.
