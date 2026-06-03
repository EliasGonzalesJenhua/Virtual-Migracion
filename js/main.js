const isNested = location.pathname.replaceAll("\\", "/").includes("/pages/");
const root = isNested ? "../" : "";
const loginStorageKey = "vm-migration-auth";
const isAuthenticated = sessionStorage.getItem(loginStorageKey) === "ok";

if (!isAuthenticated) {
  document.documentElement.classList.add("auth-lock");
}

const pages = [
  ["inicio", "Inicio", "Planificación de Migración de Entornos Virtuales", "home"],
  ["operaciones", "Operaciones", "Operaciones del PDF", "operations"],
  ["introduccion", "Introducción", "Virtualización para IA y datos", "intro"],
  ["migracion", "Migración", "Qué es migrar entornos virtuales", "migration"],
  ["tipos", "Tipos", "Estrategias de migración", "types"],
  ["fases", "Fases", "Ciclo de vida de la migración", "phases"],
  ["herramientas", "Herramientas", "Plataformas y herramientas", "tools"],
  ["riesgos", "Riesgos", "Riesgos y desafíos", "risks"],
  ["mitigacion", "Mitigación", "Estrategias de mitigación", "mitigation"],
  ["arquitectura-actual", "Actual", "Arquitectura actual", "current"],
  ["inventario-vms", "Inventario", "Inventario de VMs", "inventory"],
  ["dependencias-flujos", "Dependencias", "Dependencias y flujos", "dependencies"],
  ["puntos-criticos", "Críticos", "Puntos críticos", "critical"],
  ["arquitectura-propuesta", "Propuesta", "Arquitectura propuesta", "proposed"],
  ["segregacion-ia", "Segregación", "Segregación de entornos IA", "segregation"],
  ["avances", "Avances", "Modernización tecnológica", "advances"],
  ["seguridad", "Seguridad", "Ciberseguridad en migración", "security"],
  ["dashboard", "Dashboard", "Dashboard analítico", "dashboard"],
  ["casos", "Casos", "Casos de éxito", "cases"],
  ["conclusiones", "Conclusiones", "Conclusiones y mejora continua", "conclusions"],
  ["equipo", "Equipo", "Equipo de trabajo", "team"],
  ["preguntas", "Preguntas", "Preguntas de reflexión", "questions"]
];

const content = {
  home: {
    title: "Planificación de Migración de Entornos Virtuales",
    subtitle: "Solución estructurada para modernizar un cluster heredado de una empresa de ciencia de datos e inteligencia artificial, reduciendo riesgos operativos y preparando una arquitectura escalable.",
    body: [
      ["Contexto del caso", "La organización procesa grandes volúmenes de datos para modelos de inteligencia artificial. Su cluster de virtualización heredado agrupa cargas críticas sin una segregación clara entre producción, desarrollo, pruebas, bases de datos, servicios de inferencia y componentes de almacenamiento. Esta situación crea cuellos de botella, eleva el riesgo de downtime y complica la innovación. El sitio presenta la solución completa solicitada en la actividad: diseño de la migración, diagrama de la arquitectura actual y diagrama de la arquitectura propuesta."],
      ["Objetivo general", "El objetivo es plantear una ruta de migración comprensible para infraestructura, operaciones y responsables académicos. La propuesta combina inventario técnico, criterios de éxito, selección de estrategia, recursos requeridos, fases de ejecución, rollback, validación y documentación. También incorpora necesidades específicas de ciencia de datos e IA: aceleradores GPU, redes de alta velocidad, almacenamiento de alto rendimiento, microsegmentación y separación de ambientes."],
      ["Resultado esperado", "Al finalizar, el equipo contará con una visión integral de qué se migra, por qué se migra, cómo se reduce el impacto sobre el servicio y qué arquitectura objetivo soportará mayor disponibilidad, escalabilidad y eficiencia operativa."]
    ]
  },
  operations: {
    title: "Operaciones del Caso Practico",
    subtitle: "El PDF HT07 solicita tres operaciones centrales: diseñar la solución, diagramar la arquitectura actual y diagramar la arquitectura propuesta.",
    operations: true,
    body: [
      ["Operación 01: Diseña la solución", "Realizar el inventario completo de máquinas virtuales, aplicaciones, dependencias, cargas de ciencia de datos e IA, almacenamiento, redes y políticas de seguridad. Definir objetivos de migración, seleccionar estrategia, establecer criterios de éxito, recursos requeridos, roles, fases, rollback y mitigación de riesgos."],
      ["Operación 02: Diagrama arquitectura actual", "Mapear servidores físicos, hipervisores, switches, almacenamiento, redes de virtualización y máquinas virtuales con sus roles. Identificar dependencias, flujos de datos, redes externas, zonas de falla, cuellos de botella y puntos críticos. Documentar qué se conserva, actualiza o elimina."],
      ["Operación 03: Diagrama arquitectura propuesta", "Crear la arquitectura objetivo con nuevos hosts o cluster, segregación de producción IA, desarrollo y pruebas, redes definidas por software, almacenamiento compartido o nube híbrida. Incluir GPU, almacenamiento rápido, microsegmentación, alta disponibilidad, rollback y pruebas de aceptación."]
    ],
    questions: [
      "¿Cuáles fueron los factores clave que motivaron la migración del entorno virtual actual en este caso práctico?",
      "¿Qué riesgos se anticiparon en la fase de diseño de solución y qué medidas de mitigación se plantearon?",
      "¿Cómo se planificó el proceso de migración por fases para minimizar el downtime y mantener la continuidad del servicio?",
      "¿Cómo documentaste los diagramas y artefactos de migración para que fueran comprensibles por todos los miembros del equipo?",
      "¿Cómo evaluarías tu desempeño en este caso práctico y qué mejoras implementarías en futuras migraciones?"
    ],
    showItems: [
      [
        ["Introducción", "#introduccion"],
        ["Qué es migración", "#migracion"],
        ["Tipos de migración", "#tipos"],
        ["Fases y plan de ejecución", "#fases"],
        ["Herramientas", "#herramientas"],
        ["Riesgos y mitigación", "#riesgos"]
      ],
      [
        ["Arquitectura actual", "#arquitectura-actual"],
        ["Inventario de VMs", "#inventario-vms"],
        ["Dependencias y flujos", "#dependencias-flujos"],
        ["Puntos críticos", "#puntos-criticos"]
      ],
      [
        ["Arquitectura propuesta", "#arquitectura-propuesta"],
        ["Segregación de entornos IA", "#segregacion-ia"],
        ["Ciberseguridad", "#seguridad"],
        ["Dashboard de validación", "#dashboard"],
        ["Conclusiones", "#conclusiones"]
      ]
    ]
  },
  intro: {
    title: "Introducción a la Virtualización",
    subtitle: "La virtualización permite ejecutar múltiples servidores lógicos sobre una infraestructura física común, controlando recursos, aislamiento y continuidad.",
    body: [
      ["Fundamento técnico", "Un entorno virtual abstrae CPU, memoria, red y almacenamiento para que cada máquina virtual opere como si tuviera hardware propio. Esta capa de abstracción, administrada por un hipervisor, facilita consolidar servidores, desplegar ambientes repetibles y administrar cargas de trabajo con mayor velocidad. En el contexto de ciencia de datos e inteligencia artificial, la virtualización permite separar notebooks, APIs, bases de datos, servicios de entrenamiento y herramientas de monitoreo sin comprar un servidor dedicado para cada función."],
      ["Hipervisores", "Los hipervisores de Tipo 1 se ejecutan directamente sobre el hardware y son comunes en centros de datos por su rendimiento y control. Los de Tipo 2 se ejecutan sobre un sistema operativo anfitrión y suelen emplearse en laboratorios, desarrollo o pruebas. Para una empresa que procesa datos masivos, el hipervisor debe integrarse con almacenamiento compartido, switches redundantes, políticas de alta disponibilidad y herramientas de automatización."],
      ["Valor operativo", "La virtualización reduce tiempos de aprovisionamiento, mejora el uso de recursos y permite implementar snapshots, backups y recuperación ante fallos. Sin embargo, cuando el cluster crece sin diseño modular aparecen dependencias invisibles, saturación de IOPS, redes planas y mezclas peligrosas entre producción y pruebas. Por eso migrar no significa mover máquinas sin criterio: significa rediseñar la plataforma para que el negocio pueda operar y crecer con menor fricción."]
    ]
  },
  migration: {
    title: "Qué es la Migración de Entornos Virtuales",
    subtitle: "Es el traslado planificado de máquinas virtuales, datos, redes y dependencias hacia una plataforma objetivo con criterios medibles de éxito.",
    body: [
      ["Definición", "La migración de entornos virtuales es un proceso controlado que mueve cargas desde una plataforma actual hacia otra arquitectura, ya sea un nuevo cluster, una nube privada, una nube pública o un modelo híbrido. Incluye inventario, análisis de dependencias, diseño de red, preparación de almacenamiento, pruebas piloto, migración por oleadas, validación funcional y cierre operativo."],
      ["Objetivos", "En este caso práctico, la migración responde a cinco objetivos: reducir costos operativos, aumentar disponibilidad, mejorar escalabilidad, segregar entornos de IA y datos, y modernizar la plataforma de virtualización. Cada objetivo debe traducirse en métricas, como downtime máximo permitido, rendimiento esperado, disponibilidad objetivo, reducción de incidentes y periodo de validación posterior al cambio."],
      ["Casos de uso", "Las migraciones aparecen cuando el hardware llega al final de vida útil, cuando la plataforma no soporta nuevas versiones, cuando se requiere crecer hacia GPU o almacenamiento más rápido, o cuando la operación necesita separar ambientes críticos. Para IA, además, es frecuente migrar porque los modelos demandan picos de cómputo, datasets grandes y redes con baja latencia entre procesamiento, almacenamiento y servicios de inferencia."]
    ]
  },
  types: {
    title: "Tipos y Estrategias de Migración",
    subtitle: "La elección entre lift and shift, consolidación o rediseño depende del riesgo, la criticidad y la oportunidad de modernización.",
    body: [
      ["Migración en frío", "La migración en frío apaga la máquina virtual antes de moverla. Es simple, segura para cargas con baja criticidad y útil cuando se requiere consistencia total del disco. Su desventaja es el downtime. Puede aplicarse a servicios de desarrollo, laboratorios de datos, servidores obsoletos o componentes que acepten ventanas de mantenimiento amplias."],
      ["Migración en caliente", "La migración en caliente mueve una VM en ejecución, sincronizando memoria y estado entre hosts. Reduce interrupciones y es adecuada para bases de datos, APIs de inferencia o servicios internos que necesitan continuidad. Requiere compatibilidad entre hipervisores, red estable, almacenamiento preparado y pruebas previas para evitar degradación durante la sincronización."],
      ["Enfoque híbrido", "El enfoque recomendado combina lift and shift para cargas estables, consolidación para VMs sobredimensionadas y re-arquitectura para servicios de IA que necesitan GPU, contenedores o escalabilidad automática. La estrategia se decide por oleadas: primero servicios no críticos, luego componentes de soporte, después datos e IA, y finalmente producción crítica con plan de reversa documentado."]
    ],
    table: [["Estrategia", "Ventaja", "Uso recomendado"], ["Lift and shift", "Rápida y de bajo rediseño", "VMs estables con dependencias conocidas"], ["Consolidación", "Reduce costos y desperdicio", "Servidores sobredimensionados"], ["Re-arquitectura", "Mayor escalabilidad", "IA, datos, APIs y servicios modernos"]]
  },
  phases: {
    title: "Fases de la Migración",
    subtitle: "Un proyecto exitoso avanza por descubrimiento, diseño, piloto, oleadas, cut-over, validación y optimización.",
    body: [
      ["Descubrimiento", "La primera fase levanta inventario completo: máquinas virtuales, aplicaciones, dependencias, direcciones IP, reglas de firewall, consumo de CPU, memoria, IOPS, latencia, almacenamiento, backups y políticas de seguridad. En cargas de IA se agregan datasets, jobs programados, dependencias de GPU y rutas de intercambio de datos."],
      ["Diseño y piloto", "Con el inventario se diseña la arquitectura objetivo, se asignan recursos y se definen criterios de éxito. El piloto prueba un grupo reducido de VMs para validar conectividad, rendimiento, restauración, monitoreo y rollback. Esta fase permite ajustar procedimientos antes de tocar producción."],
      ["Oleadas y cierre", "La migración por oleadas agrupa servicios por criticidad y dependencia. Cada oleada tiene ventana, responsables, checklist, verificación y punto de reversa. Luego del cut-over se ejecutan pruebas funcionales, monitoreo intensivo, comparación de métricas y documentación final. El cierre no es administrativo solamente: confirma que el entorno objetivo opera mejor que el anterior."]
    ],
    timeline: ["Inventario y mapa de dependencias", "Diseño detallado y criterios de éxito", "Prueba piloto con cargas no críticas", "Migración por oleadas controladas", "Cut-over, validación, rollback disponible", "Optimización y cierre documental"]
  },
  current: {
    title: "Diagrama de Arquitectura Actual",
    subtitle: "El estado inicial muestra un cluster heredado, redes poco segmentadas y cargas de IA agrupadas con servicios críticos.",
    body: [
      ["Diagnóstico", "La arquitectura actual concentra demasiadas funciones en un cluster de virtualización heredado. Las máquinas virtuales de bases de datos, entrenamiento, front-end, backend, archivos y servicios administrativos comparten recursos sin separación suficiente. El almacenamiento centralizado atiende cargas transaccionales y datasets pesados, lo que aumenta la competencia por IOPS. La red plana facilita conectividad, pero también amplifica riesgos de seguridad."],
      ["Dependencias", "Los flujos críticos conectan APIs de backend con bases de datos, jobs de entrenamiento con almacenamiento de datasets y usuarios externos con front-end. Al no existir documentación completa, varias dependencias solo se descubren cuando un servicio falla o satura la red. Este es uno de los mayores riesgos antes de migrar: mover una VM sin entender su relación con datos, DNS, firewall o servicios compartidos puede provocar interrupciones inesperadas."],
      ["Puntos críticos", "Los principales puntos de falla son el almacenamiento compartido sin tiering claro, la ausencia de microsegmentación, la falta de separación entre ambientes y hosts con capacidad limitada para cargas modernas. El diagrama documenta qué se conserva, qué se actualiza y qué debe eliminarse o consolidarse."]
    ],
    diagram: "current"
  },
  inventory: {
    title: "Inventario de VMs",
    subtitle: "La Operación 02 requiere documentar las máquinas virtuales, roles, recursos y estado operativo del entorno actual.",
    body: [
      ["Alcance del inventario", "El inventario reúne nombre de la VM, sistema operativo, dirección IP, rol, aplicación asociada, CPU, RAM, almacenamiento, snapshots, backups, propietario y criticidad. En el caso de ciencia de datos e IA también se registran notebooks, jobs de entrenamiento, servicios de inferencia, repositorios de modelos y datasets conectados."],
      ["Clasificación", "Cada VM se clasifica por ambiente: producción, desarrollo, pruebas, datos, administración o servicios externos. Esta clasificación permite decidir qué se migra primero, qué requiere ventana de mantenimiento, qué puede consolidarse y qué debe eliminarse por obsolescencia."],
      ["Evidencia esperada", "La evidencia puede presentarse como tabla, matriz o lista técnica. Debe mostrar qué recursos se conservan, cuáles se actualizan y cuáles representan riesgo por sobredimensionamiento, falta de respaldo o dependencia no documentada."]
    ]
  },
  dependencies: {
    title: "Dependencias y Flujos",
    subtitle: "Antes de migrar se deben identificar conexiones entre VMs, aplicaciones, almacenamiento, usuarios, redes externas y servicios compartidos.",
    body: [
      ["Mapa de dependencias", "El mapa conecta front-end, backend, bases de datos, almacenamiento de datasets, servicios de autenticación, DNS, firewalls y herramientas de monitoreo. En IA, además, se consideran pipelines de datos, colas de procesamiento, APIs de inferencia y repositorios de modelos."],
      ["Flujos de datos", "Los flujos describen qué servicio consume datos, desde dónde, con qué frecuencia y por qué puerto o regla de red. Esta información evita que una VM sea migrada sin su base de datos, sin acceso al storage o sin permisos para comunicarse con servicios críticos."],
      ["Validación", "El diagrama debe revisarse con infraestructura y operaciones para confirmar que no falten dependencias invisibles. Una dependencia mal documentada puede provocar downtime aunque la migración técnica de la VM haya sido exitosa."]
    ]
  },
  critical: {
    title: "Puntos Críticos del Entorno Actual",
    subtitle: "La Operación 02 también debe señalar zonas de falla, cuellos de botella y riesgos que justifican la migración.",
    body: [
      ["Cuellos de botella", "Los principales cuellos de botella aparecen cuando demasiadas VMs compiten por CPU, memoria, red o IOPS en el mismo cluster heredado. Las cargas de IA pueden intensificar el problema por lectura masiva de datasets, entrenamiento programado o procesos de análisis concurrentes."],
      ["Zonas de falla", "Una red plana, almacenamiento único, hosts sin capacidad suficiente o backups no probados son puntos de falla. Si una de estas capas se degrada, varias aplicaciones críticas pueden quedar afectadas al mismo tiempo."],
      ["Decisiones de migración", "Los puntos críticos ayudan a decidir qué se mantiene, qué se actualiza y qué se elimina. También alimentan el plan de mitigación, la microsegmentación y la arquitectura propuesta."]
    ]
  },
  tools: {
    title: "Herramientas de Migración",
    subtitle: "La selección de herramientas combina compatibilidad, monitoreo, automatización y soporte para nubes o clusters modernos.",
    body: [
      ["VMware y Hyper-V", "VMware vMotion y Hyper-V Live Migration permiten mover máquinas virtuales con baja interrupción cuando la plataforma, CPU, red y almacenamiento son compatibles. Son herramientas fuertes para migraciones dentro de ecosistemas existentes, especialmente cuando ya hay licenciamiento, conocimiento operativo y políticas de alta disponibilidad."],
      ["Nube e híbrido", "Azure Migrate y AWS Migration Hub agregan descubrimiento, evaluación de compatibilidad, recomendaciones de tamaño y seguimiento de oleadas. Son útiles si la arquitectura propuesta incluye nube híbrida, recuperación ante desastres o expansión temporal de capacidad para proyectos de IA."],
      ["Criterios de elección", "La herramienta debe alinearse con el objetivo técnico. Para VMs críticas se prioriza migración en caliente y validación de consistencia. Para modernización se priorizan análisis de dependencias, automatización e integración con infraestructura como código. Para datos e IA se revisa soporte de almacenamiento, GPU, redes de alta velocidad y monitoreo de performance."]
    ],
    table: [["Herramienta", "Fortaleza", "Consideración"], ["vMotion", "Continuidad operativa", "Requiere compatibilidad VMware"], ["Hyper-V Live Migration", "Integración Microsoft", "Necesita red y storage preparados"], ["Azure Migrate", "Evaluación e inventario", "Ideal para nube Microsoft"], ["AWS Migration Hub", "Seguimiento multi-servicio", "Requiere diseño cloud claro"]]
  },
  risks: {
    title: "Riesgos y Desafíos",
    subtitle: "Los riesgos deben anticiparse antes de la ejecución: datos, downtime, compatibilidad, seguridad y rendimiento.",
    body: [
      ["Pérdida o corrupción de datos", "El mayor riesgo técnico es mover datos sin garantizar consistencia. Bases de datos, volúmenes de datasets y archivos de entrenamiento requieren snapshots coordinados, backups verificables y pruebas de restauración. La corrupción puede no detectarse de inmediato, por eso se necesitan checksums, validaciones funcionales y comparación de resultados."],
      ["Downtime no planificado", "Una ventana mal estimada puede interrumpir servicios de front-end, APIs internas o procesos de IA programados. La causa suele ser dependencia no documentada, saturación de red, incompatibilidad de drivers, DNS no actualizado o falla de almacenamiento. El downtime se reduce con pilotos, oleadas pequeñas y criterios de retroceso."],
      ["Brechas transitorias", "Durante la migración aparecen permisos temporales, reglas abiertas, copias de datos y conexiones cruzadas. Si no se controlan, estas excepciones se convierten en exposición permanente. Por ello cada cambio debe tener dueño, vigencia, bitácora y verificación posterior."]
    ]
  },
  mitigation: {
    title: "Estrategias de Mitigación",
    subtitle: "La mitigación convierte riesgos previsibles en controles operativos: backup, pilotos, monitoreo, ventanas y rollback.",
    body: [
      ["Backup 3-2-1", "Antes de migrar, cada carga crítica debe tener al menos tres copias de datos, en dos medios distintos y una copia fuera del entorno principal. No basta con que el backup exista: debe probarse su restauración. Para datasets grandes, se recomienda validar integridad mediante hash y conservar una copia congelada antes de cada oleada importante."],
      ["Dry-runs y ventanas", "Los dry-runs permiten medir duración, ancho de banda, errores de compatibilidad y pasos manuales. Las ventanas de mantenimiento se eligen según criticidad del servicio, horarios de uso y dependencias de negocio. Cada ventana debe incluir checklist de entrada, pausa, decisión de continuar, rollback y comunicación."],
      ["Monitoreo y rollback", "Durante la ejecución se monitorean CPU, RAM, latencia, IOPS, errores de aplicación, tráfico de red y logs de seguridad. El rollback plan define cómo volver al estado anterior, cuánto tarda, quién lo aprueba y hasta qué punto de la migración sigue siendo viable. Una migración madura no improvisa el regreso: lo diseña desde el inicio."]
    ]
  },
  advances: {
    title: "Avances Tecnológicos",
    subtitle: "La arquitectura propuesta debe preparar la plataforma para automatización, contenedores, GPU y operación inteligente.",
    body: [
      ["IA aplicada a operación", "La inteligencia artificial puede ayudar a planificar migraciones analizando patrones de consumo, detectando anomalías y recomendando ventanas de baja actividad. También permite identificar VMs sobredimensionadas, prever saturación y priorizar oleadas según dependencias reales."],
      ["Contenedores y Kubernetes", "No todas las cargas deben seguir como máquinas virtuales. APIs de inferencia, servicios backend y componentes stateless pueden migrar hacia contenedores para escalar con mayor rapidez. Kubernetes aporta despliegue declarativo, recuperación automática y separación por namespaces, aunque requiere gobierno, observabilidad y seguridad adecuados."],
      ["Edge, GPU y automatización", "Las cargas de IA modernas necesitan aceleradores GPU, redes de baja latencia y almacenamiento rápido. La arquitectura objetivo puede incorporar nodos especializados para entrenamiento, nodos generales para servicios corporativos y automatización con scripts o infraestructura como código. Esta combinación reduce tareas repetitivas y mejora la consistencia entre ambientes."]
    ]
  },
  security: {
    title: "Ciberseguridad en la Migración",
    subtitle: "La migración debe reforzar la postura de seguridad, no trasladar vulnerabilidades del entorno heredado.",
    body: [
      ["Zero Trust", "El principio Zero Trust asume que ninguna red, usuario o carga es confiable por defecto. Aplicado a migraciones, exige autenticación fuerte, mínimo privilegio, segmentación, registro de cambios y verificación continua. Las VMs de IA, bases de datos y servicios de usuarios deben comunicarse solo por flujos permitidos."],
      ["Cifrado y accesos", "Los datos deben cifrarse en tránsito y en reposo, especialmente datasets sensibles, respaldos y réplicas temporales. Las cuentas usadas para migración deben tener permisos limitados, caducidad definida y auditoría. También se revisan secretos en scripts, claves de APIs, credenciales antiguas y accesos heredados."],
      ["Microsegmentación", "La arquitectura propuesta separa producción IA, desarrollo, pruebas, datos, DMZ y administración. Esta separación limita el impacto de una falla o incidente. Las reglas de firewall se documentan por aplicación y no por costumbre histórica, evitando abrir redes completas solo para acelerar la migración."]
    ]
  },
  cases: {
    title: "Casos de Éxito",
    subtitle: "Dos escenarios comparables muestran cómo la migración ordenada mejora disponibilidad, rendimiento y gobierno.",
    body: [
      ["Sector financiero", "Una entidad financiera modernizó un cluster heredado separando bases de datos, servicios transaccionales y analítica. El equipo inició con inventario automatizado, identificó dependencias críticas y ejecutó oleadas nocturnas. Los sistemas core se migraron al final, después de validar backups, latencia y pruebas de usuario. El resultado fue menor downtime, mayor trazabilidad de cambios y mejor uso de almacenamiento."],
      ["Retail con analítica", "Una empresa retail con modelos de recomendación trasladó servicios de análisis hacia una arquitectura híbrida. Conservó cargas sensibles on-premise y movió procesamiento elástico hacia nube. Para evitar interrupciones, replicó datasets, probó pipelines y separó ambientes de desarrollo y producción. La disponibilidad mejoró porque los servicios dejaron de competir en el mismo pool de recursos."],
      ["Lecciones", "Ambos casos coinciden en tres prácticas: inventario detallado, migración por oleadas y validación con métricas. La tecnología ayuda, pero el éxito depende de gobernar dependencias, comunicar ventanas y medir si la arquitectura final cumple los objetivos prometidos."]
    ]
  },
  dashboard: {
    title: "Dashboard Analítico",
    subtitle: "Simulación de métricas para comparar consumo, disponibilidad y riesgo antes, durante y después de la migración.",
    body: [
      ["Lectura operativa", "El dashboard muestra indicadores simulados que apoyan la toma de decisiones. CPU, RAM, almacenamiento y disponibilidad se observan por fase para identificar momentos de mayor presión. Durante una migración real, estos datos deberían venir de la plataforma de monitoreo, del hipervisor y de las aplicaciones críticas."],
      ["Uso en la validación", "Las métricas permiten decidir si una oleada puede continuar, si debe pausarse o si requiere rollback. Un aumento de latencia, pérdida de disponibilidad o saturación de IOPS puede indicar que una dependencia fue subestimada. Después del cut-over, la comparación contra la línea base demuestra si la migración realmente mejoró la operación."],
      ["Criterios de éxito", "Para este caso, los criterios sugeridos son disponibilidad mayor a 99.5 %, reducción de recursos desperdiciados, separación de ambientes de IA y datos, backups restaurables y documentación aprobada por stakeholders."]
    ],
    dashboard: true
  },
  proposed: {
    title: "Diagrama de Arquitectura Propuesta",
    subtitle: "La arquitectura objetivo separa ambientes, incorpora alta disponibilidad, microsegmentación y capacidad especializada para IA.",
    combinedOperation: true,
    body: [
      ["Arquitectura objetivo", "La arquitectura objetivo moderniza la infraestructura mediante la separación de entornos de producción, pruebas y desarrollo, garantizando mayor seguridad y estabilidad operativa. Además, incorpora mecanismos de alta disponibilidad para asegurar la continuidad del servicio ante fallos, implementa microsegmentación de red para reducir riesgos de seguridad y optimiza la gestión del tráfico interno. Finalmente, se añaden recursos especializados para cargas de trabajo de Inteligencia Artificial, permitiendo un mejor rendimiento en procesos de entrenamiento, análisis de datos e inferencia de modelos, sin afectar los servicios críticos de la organización."],
      ["Diseño objetivo", "La propuesta crea un cluster moderno con hosts redundantes, almacenamiento compartido de alto rendimiento, redes separadas y zonas lógicas por función. Producción IA, desarrollo, pruebas, datos, DMZ y administración dejan de convivir en una red plana. Las cargas críticas se distribuyen con alta disponibilidad y las cargas de entrenamiento pueden usar nodos con GPU."],
      ["Modernización", "Los servicios stateless pueden evolucionar hacia contenedores, mientras bases de datos y sistemas con estado permanecen en VMs bien dimensionadas. La red definida por software facilita microsegmentación y las políticas de firewall se documentan por flujo. El almacenamiento se organiza por rendimiento: datasets calientes, repositorios de modelos, backups y archivos históricos."],
      ["Transición", "La migración se realiza de forma gradual mediante oleadas planificadas que incluyen los entornos de desarrollo, pruebas, servicios internos, bases de datos, plataformas de Inteligencia Artificial y sistemas de producción crítica. Cada etapa contempla procesos de validación, mecanismos de reversión y aprobación formal para minimizar riesgos. Durante la transición, los recursos que aportan valor son migrados a la nueva infraestructura, los componentes obsoletos son retirados y los recursos sobredimensionados se consolidan para optimizar costos, rendimiento y administración de la plataforma tecnológica."]
    ],
    diagram: "proposed"
  },
  segregation: {
    title: "Segregación de Entornos IA",
    subtitle: "La arquitectura propuesta separa producción, desarrollo, pruebas, datos y administración para reducir riesgos y mejorar el control.",
    body: [
      ["Definición", "La segregación de entornos de Inteligencia Artificial consiste en separar las áreas de producción, desarrollo, pruebas, datos y administración dentro de la infraestructura tecnológica. Esta estrategia permite aislar las cargas de trabajo, mejorar la seguridad, reducir el impacto de errores o fallos, controlar el acceso a la información y optimizar el rendimiento de los recursos. Como resultado, se garantiza una operación más estable, segura y eficiente para el desarrollo y despliegue de soluciones basadas en IA."],
      ["Separación por ambientes", "La separación por ambientes consiste en aislar los entornos de producción, desarrollo y pruebas para garantizar que los cambios realizados durante el desarrollo o la experimentación no afecten los servicios críticos en operación. Esta práctica mejora la estabilidad, la seguridad y el control sobre los sistemas de Inteligencia Artificial, evitando el acceso no autorizado a información sensible y reduciendo riesgos operativos."],
      ["Segmentación técnica", "La segmentación técnica es la implementación de mecanismos de aislamiento mediante VLANs, redes definidas por software (SDN), firewalls, grupos de seguridad y controles de acceso. Su objetivo es limitar la comunicación únicamente a los flujos autorizados entre componentes como bases de datos, servicios de inferencia, nodos GPU y repositorios de datos, fortaleciendo la seguridad y minimizando la superficie de ataque."],
      ["Beneficio operativo", "El beneficio operativo de la segregación de entornos radica en facilitar la administración, supervisión y mantenimiento de la infraestructura. Al mantener los ambientes separados, es posible realizar monitoreo más preciso, auditorías efectivas, procesos de recuperación (rollback) controlados y una mejor escalabilidad. Además, los incidentes o fallas en entornos de prueba no impactan directamente los sistemas de producción, asegurando la continuidad del negocio."]
    ]
  },
  conclusions: {
    title: "Conclusiones",
    subtitle: "Migrar entornos virtuales exige método, documentación y una arquitectura objetivo alineada con operación e innovación.",
    body: [
      ["Lecciones aprendidas", "La migración de un cluster heredado no debe verse como traslado de archivos, sino como rediseño controlado de la plataforma. El inventario y el mapa de dependencias son la base del proyecto: sin ellos, cualquier herramienta puede mover máquinas, pero no garantiza continuidad. En ciencia de datos e IA, además, los datasets, GPUs, pipelines y servicios de inferencia agregan exigencias especiales."],
      ["Buenas prácticas", "Las mejores prácticas incluyen migración por oleadas, backups probados, pilotos, monitoreo en tiempo real, rollback documentado, microsegmentación y validación con stakeholders. Cada decisión debe registrarse para que infraestructura, operaciones y seguridad entiendan qué cambió y por qué."],
      ["Mejora futura", "En futuras migraciones se recomienda automatizar más el descubrimiento, usar infraestructura como código, incorporar pruebas de seguridad desde el piloto y medir ahorro de costos junto con rendimiento. La arquitectura propuesta deja una base flexible para crecer hacia nube híbrida, contenedores y operación asistida por IA."]
    ]
  },
  team: {
    title: "Equipo de Trabajo",
    subtitle: "Roles sugeridos para ejecutar la actividad académica con responsabilidades claras y trazabilidad.",
    body: [
      ["Organización", "El equipo se distribuye por especialidad para cubrir diseño, arquitectura, redes, seguridad, documentación y validación. Esta división evita que la migración dependa de una sola persona y facilita revisar decisiones con stakeholders. Cada integrante produce evidencias: inventario, diagramas, matriz de riesgos, plan de oleadas, criterios de aceptación y conclusiones."],
      ["Comunicación", "La comunicación se gestiona con bitácoras, reuniones cortas por fase y aprobación formal antes de cada oleada. El equipo debe explicar los diagramas en lenguaje técnico pero comprensible, resaltando dependencias, riesgos y beneficios. La claridad documental es parte de la nota y también de la operación real."],
      ["Evaluación", "El desempeño se evalúa por coherencia técnica, calidad visual de los diagramas, relación con el caso de IA, control de riesgos y capacidad para justificar decisiones. Una mejora futura sería añadir métricas reales de monitoreo o una maqueta ejecutable del entorno."]
    ],
    team: true
  }
};

function pathTo(url) {
  return root + url;
}

function anchorTo(sectionId) {
  return isNested ? pathTo(`index.html#${sectionId}`) : `#${sectionId}`;
}

function renderNav() {
  const current = document.body.dataset.page || "home";
  const groups = [
    {
      label: "Operación 1",
      keys: ["intro", "migration", "types", "phases", "tools", "risks", "mitigation"],
      items: [
        ["introduccion", "Introducción"],
        ["migracion", "Qué es migración"],
        ["tipos", "Tipos de migración"],
        ["fases", "Fases y plan de ejecución"],
        ["herramientas", "Herramientas"],
        ["riesgos", "Riesgos y mitigación"]
      ]
    },
    {
      label: "Opción 2",
      keys: ["current", "inventory", "dependencies", "critical"],
      items: [
        ["arquitectura-actual", "Arquitectura actual"],
        ["inventario-vms", "Inventario de VMs"],
        ["dependencias-flujos", "Dependencias y flujos"],
        ["puntos-criticos", "Puntos críticos"]
      ]
    },
    {
      label: "Opción 3",
      keys: ["proposed", "segregation", "security", "dashboard", "conclusions"],
      items: [
        ["arquitectura-propuesta", "Arquitectura propuesta"],
        ["segregacion-ia", "Segregación de entornos IA"],
        ["seguridad", "Ciberseguridad"],
        ["dashboard", "Dashboard de validación"],
        ["conclusiones", "Conclusiones"]
      ]
    }
  ];
  const dropdowns = groups.map((group, index) => `
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle ${group.keys.includes(current) ? "active" : ""}" href="#" id="navGroup${index}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${group.label}
      </a>
      <ul class="dropdown-menu" aria-labelledby="navGroup${index}">
        ${group.items.map(([sectionId, label]) => `<li><a class="dropdown-item" href="${anchorTo(sectionId)}">${label}</a></li>`).join("")}
      </ul>
    </li>`).join("");

  document.getElementById("site-nav").innerHTML = `
    <nav class="navbar navbar-expand-xxl">
      <div class="container">
        <a class="navbar-brand" href="${anchorTo("inicio")}"><i class="fa-solid fa-network-wired me-2"></i>VM Migration</a>
        <button class="navbar-toggler btn btn-outline-light" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Abrir navegación">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link ${current === "home" ? "active" : ""}" href="${anchorTo("inicio")}">Inicio</a></li>
            <li class="nav-item"><a class="nav-link ${current === "operations" ? "active" : ""}" href="${anchorTo("operaciones")}">Operaciones</a></li>
            ${dropdowns}
            <li class="nav-item"><a class="nav-link ${current === "cases" ? "active" : ""}" href="${anchorTo("casos")}">Casos</a></li>
            <li class="nav-item"><a class="nav-link ${current === "team" ? "active" : ""}" href="${anchorTo("equipo")}">Equipo</a></li>
          </ul>
        </div>
      </div>
    </nav>`;
}

function renderSidebar() {
  return `<aside class="glass sidebar" data-aos="fade-left">
    ${pages.map(([sectionId, label, title]) => `<a href="${anchorTo(sectionId)}">${label}. ${title}</a>`).join("")}
  </aside>`;
}

function renderTable(rows) {
  if (!rows) return "";
  const [head, ...body] = rows;
  return `<div class="table-responsive mt-4"><table class="table table-hover align-middle">
    <thead><tr>${head.map(cell => `<th>${cell}</th>`).join("")}</tr></thead>
    <tbody>${body.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>
  </table></div>`;
}

function renderTimeline(items) {
  if (!items) return "";
  return `<div class="timeline mt-4">${items.map((item, index) => `
    <div class="timeline-item" data-aos="fade-up">
      <div class="step">${index + 1}</div>
      <div><h3 class="h5 mb-1">${item}</h3><p class="mb-0">Actividad controlada con responsable, evidencia y criterio de aceptación.</p></div>
    </div>`).join("")}</div>`;
}

function renderDiagram(type) {
  if (!type) return "";
  const current = type === "current";
  const columns = current
    ? [
      ["Capa física", ["Hosts heredados", "Switches compartidos", "Storage único", "Sin tiering claro"]],
      ["Virtualización", ["BD + IA en el mismo cluster", "Front-end y backend mezclados", "Snapshots sin gobierno", "VMs sobredimensionadas"]],
      ["Riesgos", ["Red plana", "Cuellos de botella IOPS", "Downtime alto", "Dependencias invisibles"]]
    ]
    : [
      ["Cluster moderno", ["Hosts HA", "Nodos GPU", "Storage rápido", "Backup aislado"]],
      ["Segmentación", ["Producción IA", "Desarrollo", "Pruebas", "Datos y DMZ"]],
      ["Operación", ["Microsegmentación", "Monitoreo 24/7", "Rollback por oleada", "Escalabilidad automática"]]
    ];
  return `<div class="diagram mt-4" data-aos="zoom-in">
    <div class="diagram-stage">
      ${columns.map(([title, nodes]) => `<section class="diagram-layer">
        <h3 class="h5">${title}</h3>
        ${nodes.map((node, index) => `<div class="node ${current && index > 1 ? "warning" : !current ? "good" : ""}">${node}</div>`).join("")}
      </section>`).join("")}
    </div>
  </div>`;
}

function renderDashboardSupport(summary, analysis, formItems, review) {
  return `
    <div class="dashboard-support-grid">
      <article class="dashboard-support-card">
        <span><i class="fa-solid fa-book-open" aria-hidden="true"></i></span>
        <h3>Resumen</h3>
        <p>${summary}</p>
      </article>
      <article class="dashboard-support-card">
        <span><i class="fa-solid fa-magnifying-glass-chart" aria-hidden="true"></i></span>
        <h3>Análisis</h3>
        <p>${analysis}</p>
      </article>
      <article class="dashboard-support-card">
        <span><i class="fa-solid fa-list-check" aria-hidden="true"></i></span>
        <h3>Formulario</h3>
        <form class="dashboard-mini-form">
          ${formItems.map((item) => `<label><input type="checkbox"> ${item}</label>`).join("")}
        </form>
      </article>
      <article class="dashboard-support-card">
        <span><i class="fa-solid fa-comments" aria-hidden="true"></i></span>
        <h3>Reseña</h3>
        <blockquote>${review}</blockquote>
      </article>
    </div>`;
}

function renderCasesConclusionsBook() {
  return `
    <article class="book-showcase book-showcase-embed" data-aos="fade-up">
      <div id="conclusiones" class="page-anchor" aria-hidden="true"></div>
      <iframe class="cases-book-frame" src="${pathTo("pages/book-casos-conclusiones.html")}" title="Casos de Éxito y Conclusiones"></iframe>
    </article>`;
}

function renderDashboard() {
  const metrics = [
    ["fa-server", "Máquinas Virtuales", "42", "18 críticas | 24 no críticas"],
    ["fa-database", "Almacenamiento Total", "120 TB", "Asignado: 85 TB (71%)"],
    ["fa-network-wired", "Redes", "12", "Segmentos configurados"],
    ["fa-shield-halved", "Disponibilidad Objetivo", "99.9%", "HA y recuperación"],
    ["fa-sack-dollar", "Ahorro Estimado", "-28%", "Reducción de costos"]
  ];
  const operations = [
    ["01", "Diseña la solución", "Inventario completo, objetivos, estrategia, recursos y plan de ejecución por oleadas.", "green", ["42 VMs clasificadas", "Mapa de dependencias", "Rollback por oleada"], "Entregable: plan técnico aprobado"],
    ["02", "Arquitectura actual", "Cluster heredado, dependencias, red corporativa, almacenamiento y puntos críticos.", "blue", ["Storage al 85%", "Red plana detectada", "Servicios IA mezclados"], "Entregable: diagrama actual validado"],
    ["03", "Arquitectura propuesta", "Cluster moderno, HA, SDN, microsegmentación, GPU, backup y recuperación.", "violet", ["Alta disponibilidad", "Segmentos IA/Data", "Backup y DR remoto"], "Entregable: arquitectura objetivo"]
  ];
  const phases = ["Descubrimiento", "Diseño", "Piloto", "Oleadas", "Cut-over", "Validación", "Cierre"];
  const inventory = [
    ["Producción IA", "8 VMs", "Crítico"],
    ["Bases de datos", "6 VMs", "Crítico"],
    ["Desarrollo", "12 VMs", "Medio"],
    ["Pruebas", "9 VMs", "Bajo"],
    ["Servicios internos", "7 VMs", "Medio"]
  ];
  const activities = [
    ["Pruebas piloto", "24/05/2025", "Completado"],
    ["Migración ola 1", "28/05/2025", "En curso"],
    ["Migración ola 2", "04/06/2025", "Pendiente"],
    ["Cut-over final", "11/06/2025", "Pendiente"]
  ];
  const navItems = [
    ["resumen", "fa-house", "Resumen"],
    ["solucion", "fa-clipboard-check", "Operación 01"],
    ["actual", "fa-diagram-project", "Arquitectura Actual"],
    ["propuesta", "fa-cubes", "Arquitectura Propuesta"],
    ["fases", "fa-flag", "Fases"],
    ["riesgos", "fa-shield-halved", "Riesgos"],
    ["inventario", "fa-server", "Inventario"],
    ["seguridad", "fa-user-shield", "Seguridad"],
    ["validacion", "fa-chart-line", "Validación"]
  ];
  return `
    <section id="migration-dashboard" class="migration-dashboard is-open dashboard-page-panel">
      <div class="migration-dashboard-shell">
        <aside class="migration-dashboard-sidebar" aria-label="Navegación del dashboard">
          <div class="dashboard-brand">
            <i class="fa-solid fa-bars-staggered" aria-hidden="true"></i>
            <strong>Migración de<br>Entornos Virtuales</strong>
          </div>
          <nav>
            ${navItems.map(([id, icon, label], index) => `
              <button class="${index === 0 ? "active" : ""}" type="button" data-dashboard-tab="${id}">
                <i class="fa-solid ${icon}" aria-hidden="true"></i>${label}
              </button>`).join("")}
          </nav>
        </aside>
        <div class="migration-dashboard-main">
          <section class="dashboard-panel active" data-dashboard-panel="resumen">
            <header class="migration-dashboard-header">
              <div>
                <h2>Resumen Ejecutivo</h2>
                <p>Empresa de procesamiento de datos para Inteligencia Artificial</p>
              </div>
              <button class="dashboard-export" type="button"><i class="fa-solid fa-download"></i>Exportar</button>
            </header>
            <div class="dashboard-kpis">
              ${metrics.map(([icon, label, value, detail]) => `
                <article class="dashboard-kpi">
                  <span><i class="fa-solid ${icon}" aria-hidden="true"></i></span>
                  <div>
                    <p>${label}</p>
                    <strong>${value}</strong>
                    <small>${detail}</small>
                  </div>
                </article>`).join("")}
            </div>
            <div class="dashboard-board">
              <div class="dashboard-operations">
                ${operations.map(([number, title, text, tone, items, deliverable]) => `
                  <article class="dashboard-operation dashboard-operation-${tone}">
                    <h3>Operación ${number}: ${title}</h3>
                    <p>${text}</p>
                    <ul>${items.map((item) => `<li><i class="fa-solid fa-check"></i>${item}</li>`).join("")}</ul>
                    <strong>${deliverable}</strong>
                    <button type="button">Ver detalle</button>
                  </article>`).join("")}
              </div>
              <aside class="dashboard-side">
                <article>
                  <h3>Estado del Proyecto</h3>
                  <div class="dashboard-progress"><strong>63%</strong><span>Completado</span></div>
                  <ul>
                    <li><span class="dot green"></span>Descubrimiento 100%</li>
                    <li><span class="dot blue"></span>Diseño 80%</li>
                    <li><span class="dot violet"></span>Migración 45%</li>
                    <li><span class="dot yellow"></span>Validación 20%</li>
                  </ul>
                </article>
                <article>
                  <h3>Alertas y Riesgos</h3>
                  <p><i class="fa-solid fa-triangle-exclamation"></i> Riesgo alto: dependencias no documentadas.</p>
                  <p><i class="fa-solid fa-circle-info"></i> Riesgo medio: almacenamiento actual al 85%.</p>
                </article>
              </aside>
            </div>
            <div class="dashboard-charts">
              <div class="glass chart-wrap"><canvas id="resourceChart"></canvas></div>
              <div class="glass chart-wrap"><canvas id="availabilityChart"></canvas></div>
            </div>
            ${renderDashboardSupport(
              "El resumen consolida el estado de migración del cluster heredado hacia una arquitectura preparada para ciencia de datos e IA.",
              "La lectura principal es que el consumo baja gradualmente mientras la disponibilidad objetivo sube; el mayor punto de atención sigue siendo el cut-over.",
              ["Revisar KPIs principales", "Confirmar ventana de migración", "Validar responsables por operación"],
              "La vista ejecutiva permite explicar el avance sin entrar todavía al detalle técnico de cada diagrama."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="solucion">
            <header class="migration-dashboard-header"><div><h2>Operación 01 · Diseña la solución</h2><p>Alcance, recursos, estrategia y gobierno de la migración HT07.</p></div></header>
            <div class="dashboard-details-grid">
              <article class="dashboard-detail-card"><h3>Componentes del plan</h3><ul class="dashboard-check-list"><li>Inventario de VMs, aplicaciones y propietarios.</li><li>Criterios de éxito: disponibilidad, rendimiento y rollback.</li><li>Priorización por criticidad y dependencias reales.</li><li>Roles para infraestructura, redes, seguridad y datos.</li></ul></article>
              <article class="dashboard-detail-card"><h3>Distribución de esfuerzo</h3><div class="chart-wrap compact"><canvas id="solutionChart"></canvas></div></article>
              <article class="dashboard-detail-card"><h3>Entregables</h3><p>Plan de oleadas, matriz de riesgos, checklist de piloto, plan de comunicación, plan de reversa y documentación de aprobación.</p></article>
            </div>
            ${renderDashboardSupport(
              "La solución define qué se migra, cómo se agrupa por oleadas y qué criterios permiten continuar, pausar o revertir.",
              "El diseño concentra esfuerzo en inventario y dependencias porque esos datos reducen errores durante piloto y cut-over.",
              ["Inventario completo", "Dependencias confirmadas", "Rollback documentado", "Criterios de éxito aprobados"],
              "Una buena operación 01 evita improvisar durante la migración y convierte el trabajo técnico en un proceso auditable."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="actual">
            <header class="migration-dashboard-header"><div><h2>Operación 02 · Arquitectura actual</h2><p>Lectura del cluster heredado, dependencias, cuellos de botella y puntos críticos.</p></div></header>
            <div class="dashboard-details-grid">
              <article class="dashboard-detail-card"><h3>Puntos críticos</h3><ul class="dashboard-check-list"><li>Red plana con baja separación entre ambientes.</li><li>Storage compartido sin tiering por tipo de carga.</li><li>IA, datos y servicios internos compiten por recursos.</li><li>Dependencias poco documentadas entre VMs.</li></ul></article>
              <article class="dashboard-detail-card"><h3>Riesgo por capa</h3><div class="chart-wrap compact"><canvas id="currentRiskChart"></canvas></div></article>
              <article class="dashboard-detail-card"><h3>Dependencias detectadas</h3><div class="chart-wrap compact"><canvas id="dependencyChart"></canvas></div></article>
            </div>
            ${renderDashboardSupport(
              "La arquitectura actual muestra un cluster heredado con recursos compartidos, redes poco segmentadas y dependencias críticas.",
              "Los riesgos más fuertes aparecen en almacenamiento, red plana y cargas de IA mezcladas con servicios corporativos.",
              ["Validar diagrama actual", "Confirmar flujos críticos", "Registrar puntos de falla", "Identificar VMs obsoletas"],
              "Este panel sirve como evidencia para justificar por qué migrar no es solo mover VMs, sino rediseñar la operación."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="propuesta">
            <header class="migration-dashboard-header"><div><h2>Operación 03 · Arquitectura propuesta</h2><p>Cluster moderno con HA, SDN, microsegmentación y capacidad para IA.</p></div></header>
            <div class="dashboard-details-grid">
              <article class="dashboard-detail-card"><h3>Mejoras clave</h3><ul class="dashboard-check-list"><li>Separación producción IA, datos, desarrollo y pruebas.</li><li>Nodos con GPU para entrenamiento e inferencia.</li><li>Backup local y replicación remota.</li><li>Monitoreo centralizado y políticas Zero Trust.</li></ul></article>
              <article class="dashboard-detail-card"><h3>Capacidad objetivo</h3><div class="chart-wrap compact"><canvas id="targetCapacityChart"></canvas></div></article>
              <article class="dashboard-detail-card"><h3>Beneficios esperados</h3><div class="dashboard-benefits"><span>-28% costos</span><span>99.9% disponibilidad</span><span>+30% rendimiento</span><span>Mayor seguridad</span></div></article>
            </div>
            ${renderDashboardSupport(
              "La propuesta separa ambientes, fortalece alta disponibilidad e incorpora recursos especializados para datos e IA.",
              "El valor técnico se concentra en microsegmentación, nodos GPU, backup/DR y monitoreo centralizado.",
              ["Revisar segmentación", "Confirmar capacidad GPU", "Validar backup remoto", "Aprobar arquitectura objetivo"],
              "La arquitectura propuesta conecta rendimiento, seguridad y continuidad de negocio en una plataforma más gobernable."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="fases">
            <header class="migration-dashboard-header"><div><h2>Fases de migración</h2><p>Secuencia controlada desde descubrimiento hasta cierre documental.</p></div></header>
            <footer class="dashboard-phases">${phases.map((phase, index) => `<span><strong>${index + 1}</strong>${phase}</span>`).join("")}</footer>
            <div class="dashboard-charts"><div class="glass chart-wrap"><canvas id="phaseProgressChart"></canvas></div><div class="glass chart-wrap"><canvas id="phaseRiskChart"></canvas></div></div>
            ${renderDashboardSupport(
              "Las fases ordenan el proyecto desde descubrimiento hasta cierre, reduciendo el impacto sobre servicios críticos.",
              "El riesgo aumenta durante oleadas y cut-over, por lo que esas etapas requieren más monitoreo y puntos de reversa.",
              ["Piloto aprobado", "Ventanas comunicadas", "Monitoreo activo", "Acta de cierre preparada"],
              "La fase no termina cuando se mueve la VM; termina cuando se valida, documenta y acepta el servicio."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="riesgos">
            <header class="migration-dashboard-header"><div><h2>Riesgos y mitigación</h2><p>Seguimiento de riesgos técnicos, operativos y de seguridad.</p></div></header>
            <div class="dashboard-charts"><div class="glass chart-wrap"><canvas id="riskMatrixChart"></canvas></div><div class="glass chart-wrap"><canvas id="mitigationChart"></canvas></div></div>
            ${renderDashboardSupport(
              "El panel agrupa riesgos de downtime, datos, compatibilidad, seguridad y rendimiento durante la migración.",
              "La mitigación más importante combina backups probados, piloto realista, rollback y monitoreo continuo.",
              ["Backup restaurado", "Riesgos priorizados", "Plan de rollback probado", "Alertas configuradas"],
              "Un riesgo documentado es manejable; un riesgo invisible aparece tarde y suele afectar disponibilidad."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="inventario">
            <header class="migration-dashboard-header"><div><h2>Inventario de VMs</h2><p>Clasificación por ambiente, prioridad y cantidad de cargas.</p></div></header>
            <div class="dashboard-details-grid">
              <article class="dashboard-detail-card"><h3>Inventario por ambiente</h3><table><thead><tr><th>Ambiente</th><th>VMs</th><th>Prioridad</th></tr></thead><tbody>${inventory.map(([env, vms, priority]) => `<tr><td>${env}</td><td>${vms}</td><td>${priority}</td></tr>`).join("")}</tbody></table></article>
              <article class="dashboard-detail-card"><h3>Distribución</h3><div class="chart-wrap compact"><canvas id="inventoryChart"></canvas></div></article>
              <article class="dashboard-detail-card"><h3>Acciones rápidas</h3><div class="dashboard-actions"><button type="button"><i class="fa-solid fa-server"></i>Ver inventario</button><button type="button"><i class="fa-solid fa-file-lines"></i>Documentación</button><button type="button"><i class="fa-solid fa-chart-simple"></i>Reporte</button><button type="button"><i class="fa-solid fa-user-check"></i>Aprobación</button></div></article>
            </div>
            ${renderDashboardSupport(
              "El inventario clasifica máquinas virtuales por ambiente, prioridad, propietario y relación con datos o IA.",
              "Las VMs de producción IA y bases de datos deben migrarse al final, después de probar dependencias y respaldos.",
              ["Propietario asignado", "Criticidad definida", "Snapshot revisado", "Dependencias registradas"],
              "El inventario es la base del proyecto: sin inventario, las oleadas se vuelven decisiones por intuición."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="seguridad">
            <header class="migration-dashboard-header"><div><h2>Ciberseguridad en la migración</h2><p>Zero Trust, cifrado, accesos temporales y microsegmentación.</p></div></header>
            <div class="dashboard-details-grid"><article class="dashboard-detail-card"><h3>Controles</h3><ul class="dashboard-check-list"><li>MFA y mínimo privilegio.</li><li>Cifrado en tránsito y reposo.</li><li>Auditoría de cuentas de migración.</li><li>Reglas por flujo, no por red completa.</li></ul></article><article class="dashboard-detail-card"><h3>Cobertura de controles</h3><div class="chart-wrap compact"><canvas id="securityChart"></canvas></div></article><article class="dashboard-detail-card"><h3>Estado</h3><p>La postura objetivo reduce exposición lateral y limita el impacto de incidentes durante oleadas y cut-over.</p></article></div>
            ${renderDashboardSupport(
              "Seguridad se integra desde el diseño: identidad, cifrado, segmentación, auditoría y control de secretos.",
              "Zero Trust limita el movimiento lateral y evita abrir redes completas para acelerar una migración.",
              ["MFA activo", "Credenciales temporales", "Secretos rotados", "Reglas documentadas"],
              "La migración segura no traslada vulnerabilidades heredadas; las corrige antes de llevarlas al nuevo entorno."
            )}
          </section>
          <section class="dashboard-panel" data-dashboard-panel="validacion">
            <header class="migration-dashboard-header"><div><h2>Validación y cierre</h2><p>Métricas para decidir continuidad, pausa o rollback de una oleada.</p></div></header>
            <div class="dashboard-details-grid"><article class="dashboard-detail-card"><h3>Próximas actividades</h3><ul class="dashboard-activity-list">${activities.map(([name, date, status]) => `<li><span>${name}</span><strong>${date}</strong><em>${status}</em></li>`).join("")}</ul></article><article class="dashboard-detail-card"><h3>Criterios</h3><ul class="dashboard-check-list"><li>Disponibilidad mayor a 99.5%.</li><li>Backups restaurables.</li><li>Latencia dentro de línea base.</li><li>Documentación aprobada.</li></ul></article><article class="dashboard-detail-card"><h3>Resultado esperado</h3><div class="chart-wrap compact"><canvas id="validationChart"></canvas></div></article></div>
            ${renderDashboardSupport(
              "La validación confirma que la migración mantiene continuidad, rendimiento, seguridad y documentación.",
              "La decisión de cierre debe apoyarse en métricas comparables contra línea base, no solo en que la VM encienda.",
              ["Pruebas funcionales OK", "Métricas comparadas", "Stakeholders conformes", "Lecciones registradas"],
              "El cierre correcto deja evidencia para auditoría y mejora la próxima migración."
            )}
          </section>
        </div>
      </div>
    </section>`;
}

function renderDashboardOpenButton() {
  const particlePath = `<path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" />`;
  const particles = Array.from({ length: 18 }, () => `
    <svg class="particle" viewBox="0 0 15 15" aria-hidden="true" focusable="false">
      ${particlePath}
    </svg>`).join("");
  return `
    <article class="dashboard-open-section" data-aos="fade-up">
      <div class="sparkle-button">
        <a class="dashboard-open-button" href="${pathTo("pages/13-dashboard.html")}" target="_blank" rel="noopener">
          <span class="spark" aria-hidden="true"></span>
          <span class="backdrop" aria-hidden="true"></span>
          <svg class="sparkle" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" />
            <path d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z" />
            <path d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z" />
          </svg>
          <span class="text">Abrir Dashboard</span>
        </a>
        <span class="particle-pen" aria-hidden="true">${particles}</span>
      </div>
    </article>`;
}

function renderTeam() {
  const members = [
    {
      name: "Elias Gonzales Jenhua",
      message: "Tu éxito profesional brilla con la gloria de un trabajo hecho con lujo.",
      followers: "600M",
      image: "elias.jpeg"
    },
    {
      name: "José Feliciano García",
      message: "Cada pequeño paso que das hoy te acerca un poco más a tus grandes metas futuras.",
      followers: "500M",
      image: "jose.jpg",
      dark: true
    },
    {
      name: "Luis Adrián Cervera",
      message: "El éxito profesional se viste con la gloria de resultados hechos con gran lujo.",
      followers: "400M",
      image: "luis.jpg",
      dark: true
    },
    {
      name: "Milton Anderson Ricra",
      message: "La verdadera gloria profesional se refleja en el éxito de proyectos bastante lujosos.",
      followers: "300M",
      image: "anderson.jpg"
    },
    {
      name: "Roque Valentin Garcia",
      message: "Un trabajo profesional de lujo es la base firme para alcanzar el éxito.",
      followers: "200M",
      image: "roque.jpg"
    },
    {
      name: "Josias Cadenillas Tarazona",
      message: "La gloria llega al profesional exitoso que valora la elegancia de lo lujoso.",
      followers: "100M",
      image: "josias.jpg",
      dark: true
    }
  ];
  return `<div class="team-card-grid">${members.map((member, index) => `
    <article class="team-card ${member.dark ? "dark" : ""}" data-aos="fade-up" data-aos-delay="${index * 70}">
      <img src="${pathTo(member.image)}" alt="Foto de ${member.name}" loading="lazy">
      <section>
        <h3>${member.name}</h3>
        <p>${member.message}</p>
        <div>
          <span class="team-tag" aria-label="${member.followers} seguidores">
            <i class="fa-solid fa-user"></i> ${member.followers}
          </span>
          <button type="button" data-team-follow>Seguir</button>
        </div>
      </section>
    </article>`).join("")}</div>`;
}

function operationLabelFor(key) {
  if (["current", "inventory", "dependencies", "critical"].includes(key)) return "Operacion 02 · Arquitectura actual";
  if (["proposed", "segregation", "advances", "security", "dashboard", "cases", "conclusions"].includes(key)) return "Operacion 03 · Arquitectura propuesta";
  if (["team"].includes(key)) return "Cierre del proyecto";
  return "Operacion 01 · Diseña la solucion";
}

function renderOperations(data) {
  const cards = data.body.map(([heading, text], index) => `
    <article class="operation-card" data-aos="fade-up">
      <span>0${index + 1}</span>
      <h2>${heading}</h2>
      <p>${text}</p>
      <div class="operation-includes">
        <h3>Se mostrara:</h3>
        <ul>
          ${data.showItems[index].map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}
        </ul>
      </div>
    </article>`).join("");
  return `
    <article class="operations-layout" data-aos="fade-up">
      <div class="operations-content">
        <div class="eyebrow mb-3">HT07 · Requerimientos del PDF</div>
        <h1>${data.title}</h1>
        <p class="lead">${data.subtitle}</p>
        <div class="operations-grid">${cards}</div>
      </div>
    </article>`;
}

function renderQuestionsSection() {
  const answers = [
    "Los factores clave fueron la obsolescencia del cluster heredado, la mezcla de ambientes sin segregación clara, los cuellos de botella en almacenamiento y red, y la necesidad de soportar cargas de ciencia de datos e IA con mayor disponibilidad, escalabilidad y seguridad.",
    "Se anticiparon riesgos de downtime, pérdida o inconsistencia de datos, incompatibilidad entre plataformas, fallas de conectividad, exposición de servicios y bajo rendimiento. Como mitigación se plantearon inventario completo, backups probados, piloto, migración por oleadas, rollback documentado, microsegmentación y monitoreo durante la transición.",
    "La migración se planificó por fases: descubrimiento e inventario, diseño de arquitectura objetivo, prueba piloto con cargas no críticas, ejecución por oleadas, cut-over controlado, validación funcional y optimización. Este orden reduce interrupciones porque primero se prueban dependencias y después se migran los servicios más críticos.",
    "Los diagramas se documentaron separando arquitectura actual y propuesta, mostrando VMs, redes, almacenamiento, dependencias, flujos, puntos críticos y ambientes de IA. Además, se usaron textos explicativos para que el equipo entienda qué se conserva, qué se actualiza, qué se elimina y por qué cada decisión reduce riesgos.",
    "El desempeño se puede evaluar como positivo si la solución identifica riesgos, propone fases claras, justifica la arquitectura objetivo y relaciona la migración con continuidad operativa. Para mejorar futuras migraciones se podrían agregar métricas reales de monitoreo, pruebas automatizadas, costos comparativos y una maqueta ejecutable del entorno."
  ];
  const questions = content.operations.questions.map((question, index) => `
    <article class="question-card" data-aos="fade-up" data-aos-delay="${index * 90}">
      <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${question}</h3>
        <p>${answers[index]}</p>
      </div>
    </article>`).join("");
  return `
    <section id="preguntas" class="section-band page-anchor final-questions">
      <div class="container">
        <section class="questions-panel" data-aos="fade-up">
          <div class="eyebrow mb-3">Cierre del PDF</div>
          <h2>Preguntas de Reflexion</h2>
          <div class="questions-list">${questions}</div>
        </section>
      </div>
    </section>`;
}

function renderArticle(data, key = "operations") {
  if (data.team) return renderTeam();
  const body = data.body.map(([heading, text]) => `<section data-aos="fade-up"><h2>${heading}</h2><p>${text}</p></section>`).join("");
  return `
    <div class="eyebrow mb-3">${operationLabelFor(key)}</div>
    <h1>${data.title}</h1>
    <p class="lead">${data.subtitle}</p>
    ${body}
    ${renderTable(data.table)}
    ${renderTimeline(data.timeline)}
    ${renderDiagram(data.diagram)}
    ${data.dashboard ? renderDashboard() : ""}
    ${data.team ? renderTeam() : ""}`;
}

function renderSecurityShowcase(data) {
  const icons = ["fa-user-shield", "fa-key", "fa-network-wired"];
  return `
    <article class="security-showcase" data-aos="fade-up">
      <div class="eyebrow mb-3">${operationLabelFor("security")}</div>
      <h1>${data.title}</h1>
      <p class="lead">${data.subtitle}</p>
      <ul class="security-card-grid">
        ${data.body.map(([heading, text], index) => `
          <li class="security-card" data-security-card tabindex="0" role="button" aria-pressed="false" data-aos="fade-up" data-aos-delay="${index * 90}">
            <span class="security-icon" aria-hidden="true"><i class="fa-solid ${icons[index]}"></i></span>
            <h2>${heading}</h2>
            <p>${text}</p>
          </li>`).join("")}
      </ul>
    </article>`;
}

function renderProposedOperationShowcase() {
  const proposedSections = Object.fromEntries(content.proposed.body);
  const segregationSections = Object.fromEntries(content.segregation.body);
  return `
    <article class="operation-three-showcase" data-aos="fade-up">
      <section class="operation-three-panel">
        <figure class="operation-three-sticky operation-three-diagram-image">
          <img src="${pathTo("ARQUITECTURAPROPUESTAIA.png")}" alt="Diagrama de arquitectura propuesta para IA">
        </figure>
        <div class="operation-three-content">
          <div class="eyebrow">Operacion 03 · Arquitectura propuesta</div>
          <h1>${content.proposed.title}</h1>
          <p class="lead">${proposedSections["Arquitectura objetivo"]}</p>
          <section>
            <h2>Diseño objetivo</h2>
            <p>${proposedSections["Diseño objetivo"]}</p>
          </section>
          <section>
            <h2>Modernización</h2>
            <p>${proposedSections["Modernización"]}</p>
          </section>
          <section>
            <h2>Transición</h2>
            <p>${proposedSections["Transición"]}</p>
          </section>
          ${renderDiagram("proposed")}
        </div>
      </section>
      <section id="segregacion-ia" class="operation-three-panel operation-three-panel-reverse page-anchor">
        <div class="operation-three-content">
          <div class="eyebrow">Operacion 03 · Arquitectura propuesta</div>
          <h1>${content.segregation.title}</h1>
          <p class="lead">${segregationSections["Definición"]}</p>
          <section>
            <h2>Separación por ambientes</h2>
            <p>${segregationSections["Separación por ambientes"]}</p>
          </section>
          <section>
            <h2>Segmentación técnica</h2>
            <p>${segregationSections["Segmentación técnica"]}</p>
          </section>
          <section>
            <h2>Beneficio operativo</h2>
            <p>${segregationSections["Beneficio operativo"]}</p>
          </section>
        </div>
        <figure class="operation-three-sticky">
          <img src="https://img.magnific.com/foto-gratis/arte-digital-tecnologia-inteligencia-artificial_23-2151719637.jpg?semt=ais_hybrid&w=740&q=80" alt="Tecnología de inteligencia artificial aplicada a entornos segregados">
        </figure>
      </section>
      ${renderTechnologyAdvanceScroller()}
    </article>`;
}

function renderTechnologyAdvanceScroller() {
  const images = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1200"
  ];
  return `
    <section class="tech-advance-scroller" aria-label="Avances tecnológicos">
      <p class="msg-supports">Sorry, your browser does not support <code>animation-timeline</code></p>
      <section class="wrapper">
        ${images.map((image) => `<div style="--bg:url('${image}');"></div>`).join("")}
        <div class="center" style="--bg:url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200');">
          <hgroup>
            <h1>Avances Tecnológicos</h1>
            <p>Innovación, IA y Transformación Digital</p>
          </hgroup>
        </div>
      </section>
    </section>`;
}

function renderAdvancesScrollStory(data) {
  const sections = Object.fromEntries(data.body);
  const ringText = "Avances Tecnologicos";
  const storyItems = [
    [
      "IA aplicada a operación",
      sections["IA aplicada a operación"],
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900"
    ],
    [
      "Contenedores y Kubernetes",
      sections["Contenedores y Kubernetes"],
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
    ],
    [
      "Edge, GPU y automatización",
      sections["Edge, GPU y automatización"],
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900"
    ],
    [
      "Automatización inteligente",
      "La automatización permite ejecutar tareas repetitivas de aprovisionamiento, monitoreo y validación con menor intervención manual. En una migración moderna, esto reduce errores, acelera la operación y mejora la trazabilidad de cada cambio realizado sobre la infraestructura.",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900"
    ],
    [
      "Observabilidad avanzada",
      "La observabilidad integra métricas, registros, alertas y trazas para entender el comportamiento de la plataforma. Con esta capacidad, el equipo puede detectar degradación de rendimiento, anticipar saturación y validar si la arquitectura propuesta cumple sus objetivos.",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900"
    ],
    [
      "Infraestructura como código",
      "La infraestructura como código permite describir redes, máquinas, políticas y servicios mediante archivos versionados. Esto facilita replicar ambientes, auditar cambios y recuperar configuraciones con mayor velocidad ante incidentes o ajustes de capacidad.",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
    ],
    [
      "Nube híbrida",
      "La nube híbrida combina recursos locales con servicios cloud para ampliar capacidad, habilitar recuperación ante desastres y ejecutar cargas temporales de IA. Esta opción permite crecer sin trasladar todos los sistemas críticos fuera del entorno controlado.",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900"
    ],
    [
      "Seguridad Zero Trust",
      "Zero Trust refuerza la postura de seguridad verificando usuarios, dispositivos y cargas antes de permitir comunicación. En entornos de IA, este modelo ayuda a proteger datasets, modelos, APIs de inferencia y servicios administrativos.",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900"
    ],
    [
      "Almacenamiento optimizado",
      "El almacenamiento se organiza por niveles de rendimiento para separar datasets activos, repositorios de modelos, backups y archivos históricos. Esta clasificación mejora la latencia, reduce costos y evita que cargas de baja prioridad afecten servicios críticos.",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900"
    ],
    [
      "Operación predictiva",
      "La operación predictiva usa análisis de consumo y detección de anomalías para anticipar incidentes. Esto permite planificar crecimiento, ajustar recursos y decidir ventanas de mantenimiento con base en datos reales de comportamiento.",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=900"
    ]
  ];
  return `
    <article class="advances-scroll-story" data-aos="fade-up">
      <div class="ring-wrapper" style="--char-count: ${ringText.length};" aria-hidden="true">
        <div class="ring">
          ${[...ringText].map((char, index) => `<span class="char" style="--char-index: ${index};">${char}</span>`).join("")}
        </div>
      </div>
      <header class="advances-story-header">
        <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900" alt="Equipo trabajando con tecnología digital">
        <div class="eyebrow">Operacion 03 · Arquitectura propuesta</div>
        <h1>
          <span>Avances</span>
          <span>Tecnológicos</span>
        </h1>
        <p>${data.subtitle}</p>
      </header>
      <main class="advances-story-main">
        ${storyItems.map(([heading, text, image]) => `
          <section class="advances-story-item">
            <img src="${image}" alt="${heading}">
            <p><strong>${heading}</strong><br>${text}</p>
          </section>`).join("")}
      </main>
    </article>`;
}

function renderOnePageSections() {
  return pages
    .filter(([, , , key]) => key !== "home" && key !== "questions" && key !== "risks" && key !== "mitigation" && key !== "critical" && key !== "segregation" && key !== "conclusions")
    .map(([sectionId, , , key]) => key === "tools" ? renderOperationOneScrollCarouselSection() : `
      <section id="${sectionId}" class="section-band page-anchor ${key === "operations" ? "operations-showcase" : key === "current" ? "current-showcase" : key === "inventory" ? "inventory-showcase" : key === "dependencies" ? "dependency-collage-showcase" : key === "intro" ? "intro-showcase" : key === "migration" ? "migration-showcase" : key === "types" ? "types-showcase" : key === "phases" ? "phases-showcase" : key === "tools" ? "tools-showcase" : key === "proposed" ? "operation-three-section" : key === "advances" ? "advances-story-section" : ""}">
          ${key === "operations" ? `
            <video class="operations-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
              <source src="${pathTo("images/arquitectura-migracion-ia.mp4")}" type="video/mp4">
            </video>` : key === "migration" ? `
            <video class="migration-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
              <source src="${pathTo("entornosvirtuales.mp4")}" type="video/mp4">
            </video>` : ""}
          <div class="${["current", "inventory", "dependencies", "proposed", "advances", "dashboard"].includes(key) ? "container-fluid px-0" : "container"}">
          ${key === "intro" ? renderIntroShowcase(content[key]) : key === "migration" ? renderMigrationShowcase(content[key]) : key === "types" ? renderTypesShowcase(content[key]) : key === "phases" ? renderPhasesShowcase(content[key]) : key === "tools" ? renderToolsShowcase(content[key]) : key === "operations" ? renderOperations(content[key]) : key === "current" ? renderCurrentArchitectureStory(content[key]) : key === "inventory" ? renderInventoryReveal(content[key]) : key === "dependencies" ? renderDependencyCriticalCollage(content.dependencies, content.critical) : key === "proposed" ? renderProposedOperationShowcase() : key === "advances" ? renderAdvancesScrollStory(content[key]) : key === "security" ? renderSecurityShowcase(content[key]) : key === "dashboard" ? renderDashboardOpenButton() : key === "team" ? renderTeam() : key === "cases" ? renderCasesConclusionsBook() : `<article class="glass article" data-aos="fade-up">
            ${renderArticle(content[key], key)}
          </article>`}
        </div>
      </section>`)
    .join("");
}

function renderOperationOneScrollCarouselSection() {
  const slides = [
    ["herramientas", "tools", renderToolsShowcase(content.tools)],
    ["riesgos", "risks", renderRisksInteractiveShowcase(content.risks)],
    ["mitigacion", "mitigation", renderMitigationShowcase(content.mitigation)]
  ];
  return `
    <section id="herramientas" class="risk-scroll-showcase page-anchor" data-risk-carousel>
      <div id="riesgos" class="risk-carousel-anchor risk-anchor-risks page-anchor" aria-hidden="true"></div>
      <div id="mitigacion" class="risk-carousel-anchor risk-anchor-mitigation page-anchor" aria-hidden="true"></div>
      <div class="container risk-sticky-wrap">
        <div class="risk-carousel-panel" data-aos="fade-up">
          ${slides.map(([id, key, markup], index) => `
            <div class="risk-carousel-slide ${index === 0 ? "active" : ""}" data-risk-slide="${id}">
              ${markup}
            </div>`).join("")}
          <div class="risk-carousel-dots" aria-hidden="true">
            ${slides.map(([, key], index) => `<span class="${index === 0 ? "active" : ""}">${content[key].title}</span>`).join("")}
          </div>
        </div>
      </div>
    </section>`;
}

function renderCurrentArchitectureStory(data) {
  const headlines = ["OPERACION 02", "Arquitectura actual", "Concepto basicos", "Aclaracion"];
  return `
    <article class="current-story">
      ${headlines.map((headline, index) => `
        <section class="current-story-hero">
          <div class="current-story-inner" id="section-${index}">
            <figure aria-hidden="true"></figure>
            <h2 class="current-story-title">${headline}</h2>
          </div>
        </section>`).join("")}
      <section class="current-story-content">
        <article class="current-story-article">
          <h1>Diagrama de Arquitectura Actual</h1>
          <h3>por ELIAS</h3>
          <p>${data.subtitle}</p>
          <p><strong>Diagnóstico:</strong> ${data.body[0][1]}</p>
          <p><strong>Dependencias:</strong> ${data.body[1][1]}</p>
          <p><strong>Puntos críticos:</strong> ${data.body[2][1]}</p>
          <blockquote>La migración fortalecerá seguridad, rendimiento y escalabilidad para futuras necesidades tecnológicas.</blockquote>
          <p>La evaluación detallada de la infraestructura actual permite identificar riesgos, dependencias y oportunidades de mejora, facilitando una migración planificada que incremente la seguridad, optimice el rendimiento de los servicios y garantice la continuidad operativa durante todo el proceso de transformación tecnológica.</p>
          <p>Comprender la arquitectura existente es fundamental para reducir interrupciones y asegurar una transición eficiente. La modernización de los recursos, redes y sistemas permitirá disponer de una plataforma más estable, escalable y preparada para responder a futuras demandas empresariales y tecnológicas.</p>
          <p>La identificación temprana de los puntos críticos y las dependencias entre servicios contribuye a minimizar riesgos durante la migración, permitiendo implementar mejoras que fortalezcan la disponibilidad, el desempeño y la protección de la información en toda la infraestructura.</p>
          <blockquote>Identificar los riesgos actuales es el primer paso hacia una infraestructura más robusta.</blockquote>
          <p>La arquitectura actual presenta limitaciones en segmentación, almacenamiento y distribución de cargas de trabajo. La migración busca reducir riesgos, mejorar la seguridad, optimizar el rendimiento de los servicios y construir una infraestructura más moderna, escalable y preparada para soportar futuras necesidades tecnológicas.</p>
          <p>El análisis de la arquitectura actual evidencia dependencias críticas y puntos de falla que deben ser atendidos. La modernización de la infraestructura permitirá mejorar la disponibilidad, la seguridad y la eficiencia operativa de los servicios.</p>
        </article>
      </section>
    </article>`;
}

function renderInventoryReveal(data) {
  return `
    <article class="inventory-reveal">
      <header class="inventory-reveal-header">
        <div class="inventory-reveal-panel inventory-reveal-solid">
          <div class="inventory-title-wrapper">
            <h1>${data.title}</h1>
          </div>
        </div>
        <div class="inventory-reveal-panel inventory-reveal-image" aria-hidden="true">
          <div class="inventory-title-wrapper">
            <h1>${data.subtitle}</h1>
          </div>
        </div>
      </header>
      <section class="inventory-reveal-content">
        ${data.body.map(([heading, text]) => `
          <article>
            <h2>${heading}</h2>
            <p>${text}</p>
          </article>`).join("")}
      </section>
    </article>`;
}

function renderDependencyCriticalCollage(dependencyData, criticalData) {
  const photos = [
    ...Array.from({ length: 35 }, (_, index) => [
      `https://picsum.photos/600/800?random=${index + 1}`,
      `Collage infraestructura ${index + 1}`
    ])
  ];

  const renderTextBlock = (data, id = "") => `
    <section ${id ? `id="${id}"` : ""} class="dependency-text-block ${id ? "page-anchor" : ""}" data-aos="fade-up">
      <div class="dependency-pill">Operacion 02 · Arquitectura actual</div>
      <h1>${data.title}</h1>
      <p class="dependency-lead">${data.subtitle}</p>
      ${data.body.map(([heading, text]) => `
        <article>
          <h2>${heading}</h2>
          <p>${text}</p>
        </article>`).join("")}
    </section>`;

  return `
    <article class="dependency-collage-layout">
      ${renderTextBlock(dependencyData)}
      <div class="dependency-collage" aria-label="Collage de infraestructura y dependencias">
        <div class="dependency-photo-block">
          <div class="dependency-photo-grid">
            ${photos.map(([src, alt]) => `
              <div class="dependency-photo">
                <img src="${src}" alt="${alt}" loading="lazy">
              </div>`).join("")}
          </div>
        </div>
        <div class="dependency-indicators" aria-hidden="true">
          <div class="dependency-progress dependency-progress-enter">
            <div class="dependency-progress-bar"></div>
            <div class="dependency-progress-label">enter</div>
          </div>
          <div class="dependency-progress dependency-progress-exit">
            <div class="dependency-progress-bar"></div>
            <div class="dependency-progress-label">exit</div>
          </div>
          <div class="dependency-progress dependency-progress-cover">
            <div class="dependency-progress-bar"></div>
            <div class="dependency-progress-label">cover</div>
          </div>
          <div class="dependency-progress dependency-progress-contain">
            <div class="dependency-progress-bar"></div>
            <div class="dependency-progress-label">contain</div>
          </div>
        </div>
      </div>
      ${renderTextBlock(criticalData, "puntos-criticos")}
    </article>`;
}

function renderRisksInteractiveShowcase(data) {
  const options = data.body.map(([heading, text], index) => ({ heading, text, index: index + 1 }));
  return `
    <article class="risk-interactive-layout">
      <header class="risk-interactive-header">
        <h1>${data.title}</h1>
        <p>${data.subtitle}</p>
      </header>
      <div class="risk-choice-board" aria-label="Opciones de riesgos">
        <div class="risk-choice-hint" aria-hidden="true">
          <i class="fa-solid fa-arrow-turn-up"></i>
          <span>Use this!</span>
        </div>
        <button class="risk-upgrade-button" type="button" aria-label="Upgrade" data-risk-upgrade>
          <span>Upgrade</span>
        </button>
        ${options.map(({ heading, text, index }) => `
          <button class="risk-choice-button" type="button" data-risk-open data-risk-index="${index - 1}" data-risk-title="${heading}" data-risk-text="${text}">
            <span>${index}</span>
            <strong>${heading}</strong>
          </button>`).join("")}
      </div>
      <div class="risk-modal-backdrop" data-risk-modal hidden>
        <article class="risk-modal" role="dialog" aria-modal="true" aria-labelledby="riskModalTitle">
          <div class="risk-modal-glitch" aria-hidden="true"></div>
          <div class="risk-modal-version">v001.2149927356</div>
          <h2 id="riskModalTitle"></h2>
          <p data-risk-modal-text></p>
          <strong>¿Quieres continuar?</strong>
          <div class="risk-modal-actions">
            <button type="button" data-risk-close="cancel"><i class="fa-solid fa-xmark"></i>Cancel</button>
            <button type="button" data-risk-close="proceed"><i class="fa-solid fa-check"></i>Proceed</button>
          </div>
        </article>
      </div>
    </article>`;
}

function renderMitigationShowcase(data) {
  const articles = [
    ...data.body,
    [
      "Conclusion.",
      "La combinación de respaldos confiables, pruebas previas, planificación adecuada, monitoreo continuo y mecanismos de reversión minimiza los riesgos asociados a la migración de entornos virtuales, asegurando la continuidad del servicio, la integridad de los datos y una transición exitosa con el menor impacto posible para la organización."
    ]
  ];
  const rotations = ["45deg", "275deg", "190deg", "45deg"];
  return `
    <article class="mitigation-scroll-cookbook" data-mitigation-cookbook data-step="0" style="--step: 0;">
      <header class="mitigation-cookbook-header">
        <h1>Estrategias de<span>Mitigación</span></h1>
        <p>${data.subtitle}</p>
      </header>
      <div class="mitigation-cookbook-main">
        <div class="mitigation-cookbook-content">
          <div class="mitigation-cookbook-tiles" aria-hidden="true">
            ${rotations.map((rotation, index) => `
              <div class="mitigation-cookbook-tile" style="--r: ${rotation}; --i: ${index};"></div>`).join("")}
          </div>
          <section class="mitigation-cookbook-articles">
            ${articles.map(([heading, text]) => `
              <article>
                <div class="title-wrap">
                  <h2>${heading}</h2>
                </div>
                <hr>
                <div class="content-wrap">
                  <p>${text}</p>
                </div>
              </article>`).join("")}
          </section>
          <section class="mitigation-cookbook-finish">
            <h2>Operacion 1 Terminado.</h2>
          </section>
        </div>
      </div>
      <footer>Elias Gonzales Jenhua &copy; 2026</footer>
    </article>`;
}

function renderToolsShowcase(data) {
  const toolImages = [
    ["VMware y Hyper-V", "VMware y Hyper-V.webp", "Migración con baja interrupción para plataformas compatibles, herramientas para ecosistemas existentes y continuidad operativa.", "border-left-behind"],
    ["Nube e híbrido", "Nube e híbrido.webp", "Descubrimiento, evaluación, recomendaciones de tamaño y soporte para expansión temporal de cargas IA.", "border-bottom-behind"],
    ["Criterios de elección", "Criterios de elección.avif", "La selección depende de criticidad, compatibilidad, automatización, monitoreo, GPU y redes de alto rendimiento.", "border-right-behind"]
  ];
  return `
    <article class="tools-layout" data-aos="fade-up">
      <header class="tools-header">
        <h1>Herramientas de<br>Migración</h1>
        <p>${data.subtitle}</p>
      </header>
      <div class="tools-card-stage">
        ${toolImages.map(([title, file, text, borderClass]) => `
          <article class="tool-tilt-card ${borderClass}" style="--url: url('${pathTo(file)}'); --rotateX: 0deg; --rotateY: 0deg;">
            <div class="tool-card-shadow"></div>
            <div class="tool-card-image tool-card-background"><img src="${pathTo(file)}" alt="${title}"></div>
            <div class="tool-card-image tool-card-cutout"><img src="${pathTo(file)}" alt="" aria-hidden="true"></div>
            <div class="tool-card-content">
              <h2>${title}</h2>
              <p>${text}</p>
            </div>
          </article>`).join("")}
      </div>
    </article>`;
}

function renderPhasesShowcase(data) {
  const sections = Object.fromEntries(data.body);
  const icons = ["fa-list-check", "fa-pen-ruler", "fa-clipboard-check", "fa-server", "fa-certificate", "fa-person-chalkboard"];
  return `
    <article class="phases-layout" data-aos="fade-up">
      <div class="phases-pill">Operacion 1</div>
      <header class="phases-header">
        <h1>Fases de la Migración</h1>
        <p>${data.subtitle}</p>
      </header>
      <div class="phases-copy">
        <section>
          <h2>Descubrimiento</h2>
          <p>${sections["Descubrimiento"]}</p>
        </section>
        <section>
          <h2>Diseño y piloto</h2>
          <p>${sections["Diseño y piloto"]}</p>
        </section>
        <section>
          <h2>Oleadas y cierre</h2>
          <p>${sections["Oleadas y cierre"]}</p>
        </section>
      </div>
      <ol class="phases-steps">
        ${data.timeline.map((item, index) => `
          <li>
            <i class="fa-solid ${icons[index]}" aria-hidden="true"></i>
            <div class="phase-step-card">
              <span>${index + 1}</span>
              <div>
                <h3>${item}</h3>
                <p>${index === 0 ? "Actividad controlada con responsable, evidencia y criterio de aceptación." : phaseStepDescription(index)}</p>
              </div>
            </div>
          </li>`).join("")}
      </ol>
    </article>`;
}

function phaseStepDescription(index) {
  const descriptions = [
    "",
    "Definir arquitectura destino, cronograma, riesgos, ventanas de mantenimiento y plan de rollback.",
    "Migrar un entorno de prueba o aplicación de bajo impacto para validar procedimientos.",
    "Ejecutar la migración progresiva de servidores y servicios según prioridad.",
    "Cambio definitivo al nuevo entorno y validación funcional, manteniendo plan de reversión.",
    "Ajustar rendimiento, actualizar documentación y transferir conocimiento al equipo operativo."
  ];
  return descriptions[index];
}

function renderTypesShowcase(data) {
  const sections = Object.fromEntries(data.body);
  return `
    <article class="types-layout" data-aos="fade-up">
      <div class="types-pill">Operacion 1</div>
      <header class="types-header">
        <h1>Tipos y Estrategias<br>de Migración</h1>
        <p>${data.subtitle}</p>
      </header>
      <div class="types-copy">
        <section>
          <h2>Migración en Frío</h2>
          <p>${sections["Migración en frío"]}</p>
        </section>
        <section>
          <h2>Migración en Caliente</h2>
          <p>${sections["Migración en caliente"]}</p>
        </section>
        <section>
          <h2>Enfoque Híbrido</h2>
          <p>${sections["Enfoque híbrido"]}</p>
        </section>
      </div>
      <figure class="types-image-frame">
        <img src="${pathTo("images/tipoyestrategia.jpeg")}" alt="Tipos y estrategias de migracion">
      </figure>
    </article>`;
}

function renderMigrationShowcase(data) {
  const sections = Object.fromEntries(data.body);
  return `
    <article class="migration-layout" data-aos="fade-up">
      <div class="migration-copy">
        <h1 class="migration-title" aria-label="${data.title}">
          <span>Qué es la Migración</span>
          <span>de Entornos</span>
          <span>Virtuales</span>
        </h1>
        <p class="migration-subtitle">${data.subtitle}</p>
        <section>
          <h2>Definicion</h2>
          <p>${sections["Definición"]}</p>
        </section>
        <section>
          <h2>Objetivos</h2>
          <p>${sections["Objetivos"]}</p>
        </section>
      </div>
      <section class="migration-case">
        <h2>Casos de Uso</h2>
        <p>${sections["Casos de uso"]}</p>
      </section>
    </article>`;
}

function renderIntroShowcase(data) {
  const sections = Object.fromEntries(data.body);
  return `
    <article class="intro-layout" data-aos="fade-up">
      <div class="intro-top">
        <div>
          <div class="intro-pill">Operacion 01 · Diseña la solucion</div>
          <h1>${data.title}</h1>
          <p class="intro-subtitle">${data.subtitle}</p>
        </div>
        <img class="intro-illustration" src="${pathTo("images/virtualizacion.png")}" alt="Icono de virtualización">
      </div>
      <div class="intro-block intro-fundamento">
        <h2>Fundamento Tecnico</h2>
        <p>${sections["Fundamento técnico"]}</p>
      </div>
      <div class="intro-block intro-hipervisores">
        <h2>Hipervisores</h2>
        <p>${sections["Hipervisores"]}</p>
      </div>
      <div class="intro-block intro-valor">
        <h2>Valor Operativo</h2>
        <p>${sections["Valor operativo"]}</p>
      </div>
    </article>`;
}

function renderCaseShowcase(sourceBody) {
  const wanted = ["Contexto del caso", "Objetivo general", "Resultado esperado"];
  const blocks = sourceBody
    .filter(([heading]) => wanted.includes(heading))
    .map(([heading, text]) => `
      <section class="case-copy-block" data-aos="fade-up">
        <h2>${heading}</h2>
        <p>${text}</p>
      </section>`)
    .join("");

  return `
    <section id="contexto" class="case-showcase section-band page-anchor">
      <div class="container">
        <div class="case-showcase-grid">
          <div class="case-copy">
            ${blocks}
          </div>
          <div class="case-video-card" data-aos="fade-left">
            <video autoplay muted loop controls preload="metadata" playsinline>
              <source src="${pathTo("images/arquitectura-migracion-ia.mp4")}" type="video/mp4">
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>`;
}

function renderPage() {
  const key = document.body.dataset.page || "home";
  const data = content[key] || content.home;
  document.title = `${data.title} | VM Migration`;
  const body = data.body.map(([heading, text]) => `<section data-aos="fade-up"><h2>${heading}</h2><p>${text}</p></section>`).join("");
  document.getElementById("app").innerHTML = `
    <main class="page-shell">
      <section id="${key === "home" ? "inicio" : ""}" class="${key === "home" ? "hero page-anchor" : key === "operations" ? "section-band operations-showcase" : key === "current" ? "section-band current-showcase" : key === "inventory" ? "section-band inventory-showcase" : ["dependencies", "critical"].includes(key) ? "section-band dependency-collage-showcase" : key === "migration" ? "section-band migration-showcase" : key === "types" ? "section-band types-showcase" : key === "phases" ? "section-band phases-showcase" : key === "tools" ? "section-band tools-showcase" : key === "proposed" ? "section-band operation-three-section" : key === "advances" ? "section-band advances-story-section" : "section-band"}">
        ${key === "home" ? `
          <video class="hero-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
            <source src="${pathTo("PRINCIPAL.mp4")}" type="video/mp4">
          </video>` : key === "operations" ? `
          <video class="operations-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
            <source src="${pathTo("images/arquitectura-migracion-ia.mp4")}" type="video/mp4">
          </video>` : key === "migration" ? `
          <video class="migration-bg-video" autoplay muted loop playsinline preload="metadata" aria-hidden="true">
            <source src="${pathTo("entornosvirtuales.mp4")}" type="video/mp4">
          </video>` : ""}
        <div class="${["current", "inventory", "dependencies", "critical", "proposed", "advances", "dashboard"].includes(key) ? "container-fluid px-0" : "container"}">
          ${key === "home" ? `
            <div class="row align-items-center g-4">
              <div class="col-lg-7" data-aos="fade-right">
                <div class="eyebrow mb-3">HT07 · Ciencia de datos e IA</div>
                <h1>${data.title}</h1>
                <p class="mt-4">${data.subtitle}</p>
              </div>
              <div class="col-lg-5" data-aos="fade-left">
                <div class="hero-visual hero-image-frame">
                  <img src="${pathTo("images/descarga.png")}" alt="Computadora holográfica representando migración virtual">
                </div>
                <div class="hero-actions d-flex flex-wrap gap-3 mt-3">
                  <a class="btn btn-accent btn-lg" href="#arquitectura-actual"><i class="fa-solid fa-diagram-project me-2"></i>Ver arquitecturas</a>
                  <a class="btn btn-outline-light btn-lg" href="#dashboard"><i class="fa-solid fa-chart-line me-2"></i>Dashboard</a>
                </div>
              </div>
            </div>` : `
            ${key === "operations" ? renderOperations(data) : key === "current" ? renderCurrentArchitectureStory(data) : key === "inventory" ? renderInventoryReveal(data) : ["dependencies", "critical"].includes(key) ? renderDependencyCriticalCollage(content.dependencies, content.critical) : key === "migration" ? renderMigrationShowcase(data) : key === "types" ? renderTypesShowcase(data) : key === "phases" ? renderPhasesShowcase(data) : key === "tools" ? renderToolsShowcase(data) : key === "mitigation" ? renderMitigationShowcase(data) : key === "proposed" ? renderProposedOperationShowcase() : key === "advances" ? renderAdvancesScrollStory(data) : key === "security" ? renderSecurityShowcase(data) : key === "dashboard" ? renderDashboard() : key === "team" ? renderTeam() : ["cases", "conclusions"].includes(key) ? renderCasesConclusionsBook() : `<div class="content-grid">
              <article class="glass article" data-aos="fade-up">
                ${renderArticle(data, key)}
              </article>
              ${renderSidebar()}
            </div>`}`}
        </div>
      </section>
      ${key === "home" ? `${renderCaseShowcase(data.body)}${renderOnePageSections()}${renderQuestionsSection()}` : ""}
    </main>`;
}

function renderFooter() {
  document.getElementById("site-footer").innerHTML = `
    <footer>
      <div class="container d-flex flex-wrap justify-content-between gap-2">
        <span>HT07 · Planifica migración de entornos virtuales</span>
        <span>Diseño, arquitectura actual y arquitectura propuesta</span>
      </div>
    </footer>`;
}

function initCharts() {
  if (!document.getElementById("resourceChart") || !window.Chart) return;
  Chart.defaults.color = "#cbd5e1";
  Chart.defaults.borderColor = "rgba(148, 163, 184, 0.22)";
  const chart = (id, config) => {
    const canvas = document.getElementById(id);
    if (!canvas) return null;
    return new Chart(canvas, config);
  };
  new Chart(document.getElementById("resourceChart"), {
    type: "line",
    data: {
      labels: ["Base", "Piloto", "Oleada 1", "Oleada 2", "Cut-over", "Optimización"],
      datasets: [
        { label: "CPU %", data: [78, 70, 66, 61, 58, 52], borderColor: "#00d2ff", tension: 0.35 },
        { label: "RAM %", data: [82, 76, 71, 67, 62, 55], borderColor: "#22c55e", tension: 0.35 },
        { label: "IOPS %", data: [88, 80, 74, 68, 60, 54], borderColor: "#facc15", tension: 0.35 }
      ]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });
  new Chart(document.getElementById("availabilityChart"), {
    type: "bar",
    data: {
      labels: ["Actual", "Piloto", "Migración", "Objetivo"],
      datasets: [{ label: "Disponibilidad %", data: [96.8, 98.2, 99.1, 99.7], backgroundColor: ["#fb7185", "#facc15", "#00d2ff", "#22c55e"] }]
    },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 95, max: 100 } } }
  });
  chart("solutionChart", {
    type: "doughnut",
    data: { labels: ["Inventario", "Diseño", "Piloto", "Documentación"], datasets: [{ data: [30, 28, 22, 20], backgroundColor: ["#22c55e", "#38bdf8", "#a78bfa", "#facc15"] }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
  chart("currentRiskChart", {
    type: "bar",
    data: { labels: ["Storage", "Red", "Cómputo", "Backup", "Seguridad"], datasets: [{ label: "Riesgo", data: [85, 78, 68, 62, 74], backgroundColor: "#fb7185" }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } }
  });
  chart("dependencyChart", {
    type: "radar",
    data: { labels: ["BD", "APIs", "Storage", "DNS", "Firewall", "Usuarios"], datasets: [{ label: "Dependencias", data: [9, 7, 8, 5, 7, 6], borderColor: "#38bdf8", backgroundColor: "rgba(56, 189, 248, 0.18)" }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
  chart("targetCapacityChart", {
    type: "bar",
    data: { labels: ["CPU", "RAM", "Storage", "GPU", "Red"], datasets: [{ label: "Actual", data: [62, 66, 71, 20, 55], backgroundColor: "#64748b" }, { label: "Objetivo", data: [82, 86, 90, 78, 88], backgroundColor: "#22c55e" }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } }
  });
  chart("phaseProgressChart", {
    type: "line",
    data: { labels: ["Desc.", "Diseño", "Piloto", "Oleadas", "Cut-over", "Valid.", "Cierre"], datasets: [{ label: "Avance %", data: [100, 80, 65, 45, 25, 20, 0], borderColor: "#a78bfa", backgroundColor: "rgba(167, 139, 250, 0.14)", fill: true, tension: 0.35 }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } }
  });
  chart("phaseRiskChart", {
    type: "bar",
    data: { labels: ["Desc.", "Diseño", "Piloto", "Oleadas", "Cut-over", "Valid."], datasets: [{ label: "Riesgo", data: [25, 30, 42, 62, 78, 35], backgroundColor: ["#22c55e", "#22c55e", "#facc15", "#f97316", "#fb7185", "#38bdf8"] }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
  chart("riskMatrixChart", {
    type: "bar",
    data: { labels: ["Downtime", "Datos", "Compatibilidad", "Seguridad", "Rendimiento"], datasets: [{ label: "Impacto", data: [82, 88, 70, 86, 74], backgroundColor: "#fb7185" }, { label: "Probabilidad", data: [55, 40, 62, 48, 66], backgroundColor: "#facc15" }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } }
  });
  chart("mitigationChart", {
    type: "doughnut",
    data: { labels: ["Backups", "Piloto", "Rollback", "Monitoreo", "Seguridad"], datasets: [{ data: [24, 18, 22, 20, 16], backgroundColor: ["#38bdf8", "#22c55e", "#a78bfa", "#facc15", "#fb7185"] }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
  chart("inventoryChart", {
    type: "polarArea",
    data: { labels: ["Prod IA", "BD", "Dev", "Test", "Internos"], datasets: [{ data: [8, 6, 12, 9, 7], backgroundColor: ["#22c55e", "#fb7185", "#38bdf8", "#a78bfa", "#facc15"] }] },
    options: { responsive: true, maintainAspectRatio: false }
  });
  chart("securityChart", {
    type: "radar",
    data: { labels: ["MFA", "Cifrado", "Segmentación", "Auditoría", "Secretos", "Firewall"], datasets: [{ label: "Cobertura", data: [90, 88, 82, 76, 70, 84], borderColor: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.18)" }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { r: { min: 0, max: 100 } } }
  });
  chart("validationChart", {
    type: "bar",
    data: { labels: ["Backups", "Pruebas", "Monitoreo", "Docs", "Aprobación"], datasets: [{ label: "Cumplimiento %", data: [92, 86, 88, 80, 76], backgroundColor: "#38bdf8" }] },
    options: { responsive: true, maintainAspectRatio: false, scales: { y: { min: 0, max: 100 } } }
  });
}

function initToolTiltCards() {
  const angle = 20;
  const cards = document.querySelectorAll(".tool-tilt-card");
  if (!cards.length) return;

  const lerp = (start, end, amount) => (1 - amount) * start + amount * end;
  const remap = (value, oldMax, newMax) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  cards.forEach((card) => {
    card.dataset.rotateX = "0";
    card.dataset.rotateY = "0";
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const posX = event.clientX - centerX;
      const posY = event.clientY - centerY;
      card.dataset.rotateX = remap(posY, rect.height / 2, angle);
      card.dataset.rotateY = -remap(posX, rect.width / 2, angle);
    });
    card.addEventListener("mouseleave", () => {
      card.dataset.rotateX = "0";
      card.dataset.rotateY = "0";
    });
  });

  const update = () => {
    cards.forEach((card) => {
      const currentX = parseFloat(card.style.getPropertyValue("--rotateX")) || 0;
      const currentY = parseFloat(card.style.getPropertyValue("--rotateY")) || 0;
      const nextX = lerp(currentX, parseFloat(card.dataset.rotateX) || 0, 0.05);
      const nextY = lerp(currentY, parseFloat(card.dataset.rotateY) || 0, 0.05);
      card.style.setProperty("--rotateX", `${nextX}deg`);
      card.style.setProperty("--rotateY", `${nextY}deg`);
    });
    requestAnimationFrame(update);
  };
  update();
}

function initRiskCarousel() {
  const carousel = document.querySelector("[data-risk-carousel]");
  if (!carousel) return;
  const slides = [...carousel.querySelectorAll("[data-risk-slide]")];
  const dots = [...carousel.querySelectorAll(".risk-carousel-dots span")];
  const mitigationCookbook = carousel.querySelector("[data-mitigation-cookbook]");
  if (!slides.length) return;

  const update = () => {
    const rect = carousel.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
    const activeIndex = Math.min(slides.length - 1, Math.floor(progress * slides.length));
    slides.forEach((slide, index) => slide.classList.toggle("active", index === activeIndex));
    dots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));

    if (mitigationCookbook) {
      const mitigationStart = (slides.length - 1) / slides.length;
      const mitigationProgress = Math.min(Math.max((progress - mitigationStart) * slides.length, 0), 1);
      const step = Math.min(4, Math.floor(mitigationProgress * 5));
      mitigationCookbook.dataset.step = String(step);
      mitigationCookbook.style.setProperty("--step", step);
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initDependencyCollage() {
  const collage = document.querySelector(".dependency-collage");
  if (!collage) return;
  const photos = [...collage.querySelectorAll(".dependency-photo")];
  if (!photos.length) return;

  const directionFor = (index) => {
    const nth = index + 1;
    const column = ((nth - 1) % 7) + 1;
    const even = nth % 2 === 0;
    const edgeColumn = [1, 3, 5, 7].includes(column);
    if (edgeColumn) return even ? [100, -100] : [-100, -100];
    return even ? [-100, 100] : [100, 100];
  };

  const directions = photos.map((_, index) => directionFor(index));

  const update = () => {
    const rect = collage.getBoundingClientRect();
    const travel = Math.max(1, rect.height - window.innerHeight);
    const progress = Math.min(Math.max(-rect.top / travel, 0), 1);
    const boosted = Math.min(progress * 1.9, 1);
    const phase = boosted <= 0.5 ? boosted / 0.5 : 1;
    const horizontalPhase = boosted <= 0.5 ? 0 : (boosted - 0.5) / 0.5;

    photos.forEach((photo, index) => {
      const [horizontal, vertical] = directions[index];
      photo.style.transform = `translate3d(${horizontal * horizontalPhase * 1.35}%, ${vertical * phase * 1.35}%, 0)`;
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initRiskChoiceModal() {
  const modal = document.querySelector("[data-risk-modal]");
  if (!modal) return;
  const title = modal.querySelector("#riskModalTitle");
  const text = modal.querySelector("[data-risk-modal-text]");
  const buttons = document.querySelectorAll("[data-risk-open]");
  const upgradeButton = document.querySelector("[data-risk-upgrade]");
  const audio = {
    slide: new Audio("https://cdn.freesound.org/previews/367/367997_6512973-lq.mp3"),
    accept: new Audio("https://cdn.freesound.org/previews/220/220166_4100837-lq.mp3"),
    reject: new Audio("https://cdn.freesound.org/previews/657/657950_6142149-lq.mp3")
  };

  Object.values(audio).forEach((clip) => {
    clip.volume = 0.28;
    clip.preload = "auto";
  });

  const playSound = (name) => {
    const clip = audio[name];
    if (!clip) return;
    clip.currentTime = 0;
    clip.play().catch(() => {});
  };

  const close = (action = "cancel") => {
    modal.dataset.action = action;
    modal.classList.add("closing");
    playSound(action === "proceed" ? "accept" : "reject");
    setTimeout(() => {
      modal.classList.remove("open", "closing");
      modal.hidden = true;
      delete modal.dataset.action;
    }, 460);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      title.textContent = button.dataset.riskTitle;
      text.textContent = button.dataset.riskText;
      modal.hidden = false;
      playSound("slide");
      requestAnimationFrame(() => {
        modal.classList.remove("closing");
        modal.classList.add("open");
        modal.querySelector(".risk-modal").classList.add("distorting");
        setTimeout(() => modal.querySelector(".risk-modal").classList.remove("distorting"), 520);
      });
    });
  });

  upgradeButton?.addEventListener("click", () => {
    if (upgradeButton.dataset.upgrading === "true") return;
    upgradeButton.dataset.upgrading = "true";
    setTimeout(() => {
      delete upgradeButton.dataset.upgrading;
      upgradeButton.closest(".risk-choice-board")?.classList.add("show-options");
    }, 720);
  });

  window.addEventListener("keydown", ({ key }) => {
    if (key.toLowerCase() === "u" && modal.hidden) upgradeButton?.click();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close("cancel");
    const closeButton = event.target.closest("[data-risk-close]");
    if (closeButton) close(closeButton.dataset.riskClose);
  });

  window.addEventListener("keydown", ({ key }) => {
    if (key === "Escape" && !modal.hidden) close("cancel");
  });
}

function initAdvancesScrollFallback() {
  const story = document.querySelector(".advances-scroll-story");
  if (!story) return;

  const supportsScrollDriven =
    CSS.supports("animation-timeline: scroll()") ||
    CSS.supports("animation-timeline: view()");

  if (supportsScrollDriven) return;

  document.body.classList.add("no-scroll-driven");
  const items = [...story.querySelectorAll(".advances-story-item")];
  const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

  const setElementState = (element, progress, direction) => {
    const enter = clamp(progress / 0.24);
    const exit = clamp((progress - 0.72) / 0.28);
    const opacity = clamp(Math.min(enter, 1 - exit));
    const startX = direction * 90 * (1 - enter);
    const exitX = direction * 70 * exit;
    const exitY = -26 * exit;
    const y = 44 * (1 - enter) + exitY;
    const brightness = 0.25 + opacity * 0.85;

    element.style.opacity = opacity;
    element.style.transform = `translate3d(${startX + exitX}%, ${y}%, 0)`;
    element.style.filter = `brightness(${brightness}) saturate(${0.75 + opacity * 0.35})`;
  };

  const update = () => {
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      const progress = clamp((viewport - rect.top) / (viewport + rect.height));
      const direction = index % 2 === 0 ? -1 : 1;
      const image = item.querySelector("img");
      const copy = item.querySelector("p");
      if (image) setElementState(image, progress, direction);
      if (copy) setElementState(copy, progress, 0);
    });
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initSecurityCards() {
  const cards = [...document.querySelectorAll("[data-security-card]")];
  if (!cards.length) return;

  const selectCard = (selectedCard) => {
    cards.forEach((card) => {
      const isSelected = card === selectedCard;
      card.classList.toggle("is-selected", isSelected);
      card.setAttribute("aria-pressed", String(isSelected));
    });
  };

  cards.forEach((card) => {
    card.addEventListener("click", () => selectCard(card));
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selectCard(card);
    });
  });
}

function initDashboardParticles() {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const particles = document.querySelectorAll(".dashboard-open-section .particle");

  particles.forEach((particle) => {
    particle.setAttribute("style", `
      --x: ${random(20, 80)};
      --y: ${random(20, 80)};
      --duration: ${random(6, 20)};
      --delay: ${random(1, 10)};
      --alpha: ${random(40, 90) / 100};
      --origin-x: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
      --origin-y: ${Math.random() > 0.5 ? random(300, 800) * -1 : random(300, 800)}%;
      --size: ${random(40, 90) / 100};
    `);
  });
}

function initDashboardTabs() {
  const tabs = [...document.querySelectorAll("[data-dashboard-tab]")];
  const panels = [...document.querySelectorAll("[data-dashboard-panel]")];
  if (!tabs.length || !panels.length) return;

  const activate = (id) => {
    tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.dashboardTab === id));
    panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.dashboardPanel === id));
    setTimeout(() => {
      document.querySelectorAll(".dashboard-panel.active canvas").forEach((canvas) => {
        Chart.getChart(canvas)?.resize();
      });
    }, 80);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => activate(tab.dataset.dashboardTab));
  });
}

function initTeamCards() {
  document.querySelectorAll("[data-team-follow]").forEach((button) => {
    button.addEventListener("click", () => {
      const isFollowing = button.classList.toggle("following");
      button.textContent = isFollowing ? "Siguiendo" : "Seguir";
      button.setAttribute("aria-pressed", String(isFollowing));
    });
  });
}

function initLoginClock(clockRoot) {
  if (!clockRoot) return;
  const bars = [
    ["end", "top"],
    ["side", "top", "left"],
    ["side", "top", "right"],
    ["middle"],
    ["side", "bottom", "left"],
    ["side", "bottom", "right"],
    ["end", "bottom"]
  ];

  const addDigits = (number) => {
    const initGroup = (value, padding = 2) => {
      const group = document.createElement("div");
      group.classList.add("group");
      const digits = [...`${value}`.padStart(padding, "0")].map((digit) => {
        const figure = document.createElement("figure");
        figure.classList.add("digit");
        figure.setAttribute("data-digit", digit);
        bars.forEach((classes) => {
          const span = document.createElement("span");
          span.classList.add(...classes);
          figure.append(span);
        });
        return figure;
      });

      group.append(...digits);

      return {
        element: group,
        set number(value) {
          [...`${value}`.padStart(padding, "0").slice(-padding)].forEach((digit, index) => {
            digits[index].setAttribute("data-digit", digit);
          });
        }
      };
    };

    const digitsWrap = document.createElement("div");
    digitsWrap.classList.add("digits");
    const group = initGroup(number);
    const groupShadow1 = initGroup(number);
    const groupShadow2 = initGroup(number);
    groupShadow1.element.classList.add("shadow", "shadow1");
    groupShadow2.element.classList.add("shadow", "shadow2");
    digitsWrap.append(group.element, groupShadow1.element, groupShadow2.element);
    clockRoot.append(digitsWrap);

    return {
      set number(value) {
        group.number = value;
        groupShadow1.number = value;
        groupShadow2.number = value;
      }
    };
  };

  const addColon = () => {
    const colonGroup = document.createElement("div");
    colonGroup.classList.add("colon-group");
    ["", "shadow shadow1", "shadow shadow2"].forEach((className) => {
      const colon = document.createElement("figure");
      colon.className = `colon ${className}`.trim();
      colon.append(document.createElement("span"));
      colonGroup.append(colon);
    });
    clockRoot.append(colonGroup);
  };

  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const numberHour = addDigits(hours);
  addColon();
  const numberMinute = addDigits(minutes);
  addColon();
  const numberSecond = addDigits(seconds);

  const update = () => {
    now = new Date();
    const newSeconds = now.getSeconds();
    if (seconds !== newSeconds) {
      hours = now.getHours();
      minutes = now.getMinutes();
      seconds = newSeconds;
      numberHour.number = hours;
      numberMinute.number = minutes;
      numberSecond.number = seconds;
    }
    requestAnimationFrame(update);
  };
  update();
}

function initLoginGate() {
  if (sessionStorage.getItem(loginStorageKey) === "ok") return;
  if (/^(?:(?!chrome|android)[\s\S])*(?:safari|iPad|iPhone|iPod)/i.test(navigator.userAgent)) {
    document.body.classList.add("safari");
  }

  document.body.insertAdjacentHTML("afterbegin", `
    <section class="login-gate is-ready" aria-label="Inicio de sesión">
      <div class="login-loader-page" data-login-loader>
        <video class="access-loader-video" autoplay muted loop playsinline preload="auto" aria-hidden="true">
          <source src="${pathTo("miles-morales-purple-neon-spiderman-moewalls-com.mp4")}" type="video/mp4">
        </video>
        <div class="loader" aria-label="Cargando">
          <div class="glitch" data-glitch="Cargando...">Cargando...</div>
        </div>
      </div>
      <div class="login-window">
        <div class="login-window-bar" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div class="login-clock-panel">
          <div class="login-clock-wrapper">
            <main class="login-clock-main" aria-label="Reloj digital"></main>
          </div>
          <p>Acceso protegido · VM Migration</p>
        </div>
        <form class="login-form-panel" data-login-form>
          <span class="login-kicker">Bienvenido</span>
          <h1>Iniciar sesión</h1>
          <label>
            <span>ID de usuario</span>
            <input type="text" name="username" autocomplete="username" placeholder="elias123" required>
          </label>
          <label>
            <span>Contraseña</span>
            <input type="password" name="password" autocomplete="current-password" placeholder="Contraseña" required>
          </label>
          <label class="login-remember">
            <input type="checkbox" name="remember">
            <span>Recordar</span>
          </label>
          <p class="login-error" data-login-error role="alert" aria-live="polite"></p>
          <button type="submit">Entrar al proyecto</button>
        </form>
      </div>
    </section>`);

  initLoginClock(document.querySelector(".login-clock-main"));
  const gate = document.querySelector(".login-gate");
  document.querySelector("[data-login-form] input")?.focus();

  const form = document.querySelector("[data-login-form]");
  const error = document.querySelector("[data-login-error]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const username = String(data.get("username") || "").trim();
    const password = String(data.get("password") || "");

    if (username === "elias123" && password === "elias") {
      error.textContent = "";
      form.querySelector("button")?.setAttribute("disabled", "true");
      gate?.classList.remove("is-ready");
      gate?.classList.add("is-access-loading");
      setTimeout(() => {
        sessionStorage.setItem(loginStorageKey, "ok");
        document.documentElement.classList.remove("auth-lock");
        gate?.classList.add("is-closing");
        setTimeout(() => {
          gate?.remove();
          window.AOS?.refresh();
        }, 360);
      }, 30000);
      return;
    }

    error.textContent = "ID o contraseña incorrectos.";
    form.classList.remove("shake");
    void form.offsetWidth;
    form.classList.add("shake");
  });
}

renderNav();
renderPage();
renderFooter();
AOS.init({ once: true, duration: 720, easing: "ease-out-cubic" });
initCharts();
  initToolTiltCards();
  initRiskCarousel();
  initDependencyCollage();
  initRiskChoiceModal();
  initAdvancesScrollFallback();
  initSecurityCards();
  initDashboardParticles();
  initDashboardTabs();
  initTeamCards();
  initLoginGate();
