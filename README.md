# 🍅 Zen Pomodoro

**Zen Pomodoro** es una aplicación web de temporizador basada en la técnica **Pomodoro**, diseñada para ayudar a organizar los períodos de estudio o trabajo y los momentos de descanso.

El proyecto fue desarrollado utilizando **HTML, CSS y JavaScript**, sin necesidad de instalar dependencias externas.

## 📌 Características

* ⏱️ Temporizador de **25 minutos de enfoque**.
* ☕ Temporizador de **5 minutos de descanso**.
* ▶️ Botón para iniciar y pausar el temporizador.
* 🔄 Botón para reiniciar el temporizador.
* 🔵 Anillo circular que muestra el progreso del tiempo.
* 🔊 Sonido de notificación al cambiar entre enfoque y descanso.
* 🎨 Interfaz visual sencilla con un diseño tipo *glassmorphism*.
* 📱 Diseño adaptable a diferentes tamaños de pantalla.

## 🛠️ Tecnologías utilizadas

* **HTML5** → estructura de la aplicación.
* **CSS3** → estilos, diseño visual y adaptación de la interfaz.
* **JavaScript** → funcionamiento del temporizador, controles, cambio de modos y sonido.
* **SVG** → representación del círculo de progreso.
* **Web Audio API** → generación del sonido de notificación.

## 📂 Estructura del proyecto

```text
evaluacion-18-09/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contiene la estructura principal de la aplicación: el temporizador, el indicador circular de progreso, el estado actual y los botones de control.

### `style.css`

Contiene todos los estilos visuales de la aplicación, incluyendo el diseño de la interfaz, los botones, el temporizador y los diferentes modos.

### `script.js`

Se encarga de toda la lógica del temporizador. Controla el tiempo restante, el inicio y pausa, el reinicio, el cambio entre enfoque y descanso, el progreso circular y el sonido de notificación.

## ⚙️ Funcionamiento

Al abrir la aplicación, el temporizador comienza configurado en **25:00 minutos** y aparece el estado **"Enfoque"**.

Al presionar **Iniciar**, comienza la cuenta regresiva. El botón cambia a **"Pausar"**, permitiendo detener temporalmente el contador.

Cuando finalizan los 25 minutos, la aplicación cambia automáticamente al modo **"Descanso"**, configurado en 5 minutos, y reproduce un sonido de notificación.

Al terminar el descanso, vuelve nuevamente al modo de enfoque.

El botón **Reiniciar** permite volver en cualquier momento al estado inicial de 25 minutos.

## 🚀 Cómo ejecutar el proyecto

No es necesario instalar ninguna dependencia.

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Abrir el archivo `index.html` en un navegador web.
4. Presionar **Iniciar** para comenzar el temporizador.

También se puede ejecutar utilizando una extensión como **Live Server** en Visual Studio Code.

## 🎯 Objetivo

El objetivo del proyecto es crear una herramienta sencilla para administrar períodos de concentración y descanso mediante la técnica Pomodoro, además de aplicar conocimientos de **HTML, CSS y JavaScript** en un proyecto web funcional.

## 👨‍💻 Autor

**Aron-23**

Repositorio: [evaluacion-18-09](https://github.com/Aron-23/evaluacion-18-09)

## 📄 Licencia

Este proyecto fue realizado con fines educativos.
