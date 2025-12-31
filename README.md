# Agenda de eventos - Litiobyte

## 📋 Resumen de la aplicación

Esta aplicación presenta una vista frontend para visualizar eventos de una agenda interna.
Permite explorar y gestionar eventos de forma clara y sencilla, priorizando la legibilidad y la identificación rápida de información relevante.

En la aplicación se puede:

* Visualizar una lista de eventos con su información principal (título, fecha, duración y tipo).
* Filtrar los eventos por tipo (meeting, call, reminder).
* Ordenar los eventos por fecha o por duración.
* Identificar visualmente:

  * **Eventos próximos** (hoy y mañana).
  * **Eventos largos**, mediante una etiqueta específica.
* Visualizar fechas siempre actualizadas gracias al uso de datos mockeados con fechas dinámicas.

No existe backend; los datos se encuentran mockeados y aislados para facilitar un posible reemplazo futuro por una API real.

---

## 🛠️ Tecnologías utilizadas

* **React**: librería principal para la construcción de la interfaz.
* **Vite**: entorno de desarrollo y build, elegido por su rapidez y configuración mínima.
* **Tailwind CSS**: framework de estilos utilitario para construir una UI simple, consistente y fácilmente mantenible.

---

## ▶️ Cómo levantar el proyecto

1. Clonar el repositorio:

   ```bash
   git clone <url-del-repositorio>
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar el proyecto en modo desarrollo:

   ```bash
   npm run dev
   ```

4. Abrir el navegador en la URL indicada por Vite (por defecto `http://localhost:5173`).

---

## 🧩 Decisiones de UI

La interfaz fue diseñada priorizando claridad visual y facilidad de escaneo. Al no existir un diseño previo, se optó por una vista en lista que permite identificar rápidamente los eventos y su información clave.

Cada evento se representa mediante una tarjeta con una jerarquía clara de información:

* **Título**: se muestra como el elemento principal, con mayor tamaño y peso tipográfico para destacar el evento.
* **Eventos próximos**: los eventos que ocurren hoy o mañana se resaltan mediante un badge visible sobre el título, enfatizando urgencia sin saturar la interfaz.
* **Fecha**: se acompaña de un icono de calendario para facilitar la lectura rápida.
* **Duración**: se muestra en minutos con un icono de tiempo. Los eventos considerados largos se destacan con una etiqueta adicional para facilitar su identificación.
* **Tipo de evento**: se representa mediante iconos (meeting, call, reminder) acompañados de texto, permitiendo reconocer el contexto del evento de un vistazo.

El uso de iconos y etiquetas busca mejorar la comprensión visual sin reemplazar la información textual, manteniendo la accesibilidad y la claridad.

---

## 🎯 Qué prioricé

* Un **diseño simple, reconocible y fácil de entender**, evitando complejidad visual innecesaria.
* La **separación de responsabilidades en el código**, organizando la aplicación por carpetas y archivos según su propósito (datos, tipos, helpers y componentes).
* Mantener la **lógica de negocio desacoplada de la UI**, utilizando helpers para el manejo de fechas y clasificación de eventos, y componentes enfocados únicamente en renderizar la interfaz.
* Claridad en los filtros y ordenamientos, priorizando comportamientos predecibles y fáciles de usar.

Además, se optó por generar los eventos mockeados con **fechas dinámicas basadas en la fecha actual**, de modo que los estados “hoy”, “mañana” y “futuro” se mantengan correctos independientemente del momento en que se visualice la aplicación. Esto evita que la agenda quede obsoleta con el paso del tiempo y mejora la coherencia de la experiencia.

---

## 🚀 Qué mejoraría con más tiempo

* **Barra de búsqueda** para permitir filtrar eventos por título.
* **Paginación o carga progresiva**, evitando renderizar grandes cantidades de eventos al mismo tiempo y mejorando la experiencia en listas extensas.
* **Cambio de vista** entre lista y tarjetas, permitiendo al usuario elegir el formato de visualización que le resulte más cómodo.
* Mejoras adicionales de accesibilidad y tests unitarios para la lógica de negocio.

---

## 🤖 Uso de IA y fuentes externas

Se utilizó inteligencia artificial como apoyo puntual para la generación del mock de datos y para ajustar la redacción del README.
Todas las decisiones de diseño, estructura y lógica fueron comprendidas y tomadas de forma consciente, priorizando criterio y claridad por sobre resultados puramente estéticos.
