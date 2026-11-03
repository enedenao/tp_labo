// Formato argentino: coma decimal
const fmt = (n, dec = 1) =>
  n.toLocaleString("es-AR", { minimumFractionDigits: dec, maximumFractionDigits: dec });

const reducirMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// =========================================================
// 1. Rosquilla de la portada: frases y chispas al tocarla
// =========================================================
const FRASES = ["Mmm… rosquillas", "¡Ay, caramba!", "¡D'oh!", "¡Excelente!", "¡Woo-hoo!"];
const COLORES_CHISPAS = ["#ffd521", "#4aa8e8", "#7bc96f", "#ffffff", "#ff8a1f"];

const rosquilla = document.getElementById("rosquilla");
const globoRosquilla = document.getElementById("globo-rosquilla");
let fraseActual = 0;
let temporizadorGlobo;

rosquilla.addEventListener("click", (e) => {
  // Frase siguiente, en orden
  globoRosquilla.textContent = FRASES[fraseActual];
  fraseActual = (fraseActual + 1) % FRASES.length;
  globoRosquilla.classList.add("visible");
  clearTimeout(temporizadorGlobo);
  temporizadorGlobo = setTimeout(() => globoRosquilla.classList.remove("visible"), 1800);

  if (reducirMovimiento) return;

  // Pequeña sacudida
  rosquilla.classList.remove("mordida");
  void rosquilla.offsetWidth; // reinicia la animación
  rosquilla.classList.add("mordida");

  // Chispas que salen desde el punto tocado
  const caja = rosquilla.getBoundingClientRect();
  const x = e.clientX || caja.left + caja.width / 2;
  const y = e.clientY || caja.top + caja.height / 2;
  for (let i = 0; i < 18; i++) {
    const chispa = document.createElement("span");
    chispa.className = "chispa";
    chispa.style.background = COLORES_CHISPAS[i % COLORES_CHISPAS.length];
    chispa.style.left = x + "px";
    chispa.style.top = y + "px";
    document.body.appendChild(chispa);

    const angulo = Math.random() * Math.PI * 2;
    const distancia = 60 + Math.random() * 90;
    chispa.animate(
      [
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        {
          transform: `translate(${Math.cos(angulo) * distancia}px, ${Math.sin(angulo) * distancia + 60}px) rotate(${Math.random() * 720}deg)`,
          opacity: 0,
        },
      ],
      { duration: 900 + Math.random() * 400, easing: "cubic-bezier(.2,.8,.4,1)" }
    ).onfinish = () => chispa.remove();
  }
});

// =========================================================
// 2. Barra de reparto del diálogo (datos del gráfico 1)
//    "Resto" = 100 − suma de los cuatro principales
// =========================================================
const REPARTO = {
  "1989-1999": { Homer: 21.2, Marge: 9.3, Bart: 9.1, Lisa: 7.3 },
  "2000-2009": { Homer: 21.2, Marge: 10.4, Bart: 7.8, Lisa: 7.9 },
  "2010-2016": { Homer: 19.9, Marge: 9.0, Bart: 8.5, Lisa: 8.2 },
};
const COLORES = {
  Homer: "var(--rosa)",
  Marge: "var(--naranja)",
  Bart: "var(--azul)",
  Lisa: "var(--verde)",
  "Resto del pueblo": "#e4e4ec",
};

const barra = document.getElementById("barra-reparto");
const leyenda = document.getElementById("leyenda");
const datoClave = document.getElementById("dato-clave");
const tituloDecada = document.getElementById("reparto-decada");
const botonesDecada = document.querySelectorAll("#reparto .selector button");

function filasDe(decada) {
  const d = REPARTO[decada];
  const familia = Object.values(d).reduce((a, b) => a + b, 0);
  return [...Object.entries(d), ["Resto del pueblo", 100 - familia]];
}

function construirReparto() {
  filasDe("1989-1999").forEach(([nombre]) => {
    const seg = document.createElement("div");
    seg.className = "segmento";
    seg.dataset.nombre = nombre;
    seg.style.background = COLORES[nombre];
    barra.appendChild(seg);

    const item = document.createElement("li");
    item.innerHTML = `<i style="background:${COLORES[nombre]}"></i>${nombre} <strong data-pct="${nombre}"></strong>`;
    leyenda.appendChild(item);
  });
}

function mostrarReparto(decada) {
  const filas = filasDe(decada);
  const familia = 100 - filas[filas.length - 1][1];

  filas.forEach(([nombre, pct]) => {
    const seg = barra.querySelector(`[data-nombre="${nombre}"]`);
    seg.style.flexBasis = pct + "%";
    seg.textContent = pct >= 7 ? `${fmt(pct)} %` : "";
    seg.title = `${nombre}: ${fmt(pct)} %`;
    leyenda.querySelector(`[data-pct="${nombre}"]`).textContent = `${fmt(pct)} %`;
  });

  tituloDecada.textContent = decada;
  barra.setAttribute("aria-label", `En ${decada}: ` + filas.map(([n, p]) => `${n} ${fmt(p)} %`).join(", "));
  datoClave.innerHTML =
    `La familia junta dice el <strong>${fmt(familia)} %</strong> de las palabras; ` +
    `el resto del pueblo, el <strong>${fmt(100 - familia)} %</strong>.`;

  botonesDecada.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.decada === decada)));
}

construirReparto();
mostrarReparto("1989-1999");
botonesDecada.forEach((b) => b.addEventListener("click", () => mostrarReparto(b.dataset.decada)));

// =========================================================
// 3. Explorador de fases del rating (datos del gráfico 2)
// =========================================================
const FASES = [
  {
    nombre: "Ascenso", temporadas: "Temporadas 1 a 5", delta: 0.53, sube: true,
    texto: "El rating crece temporada tras temporada hasta su punto más alto, mientras la parte del diálogo de la familia baja.",
  },
  {
    nombre: "Meseta", temporadas: "Temporadas 5 a 8", delta: 0.12, sube: false,
    texto: "La nota se mantiene arriba de 8 y casi no se mueve. El protagonismo de la familia, en cambio, sube y baja.",
  },
  {
    nombre: "Quiebre", temporadas: "Temporadas 8 a 11", delta: 0.93, sube: false,
    texto: "La caída más fuerte de toda la serie, en solo tres temporadas. Justo en ese tramo la familia gana protagonismo: lo contrario de lo que esperaríamos si más familia significara mejor nota.",
  },
  {
    nombre: "Declive lento", temporadas: "Temporadas 11 a 26", delta: 0.58, sube: false,
    texto: "La nota sigue bajando, pero despacio y a lo largo de quince temporadas, mientras el protagonismo oscila en el mismo rango de siempre.",
  },
];

const panelFase = document.getElementById("fase-panel");
const botonesFase = document.querySelectorAll(".fases button");

function mostrarFase(i) {
  const f = FASES[i];
  panelFase.innerHTML = `
    <p class="temporadas">${f.temporadas}</p>
    <h4>${f.nombre}</h4>
    <p class="delta ${f.sube ? "sube" : "baja"}">${f.sube ? "▲" : "▼"} ${fmt(f.delta, 2)}</p>
    <p>${f.texto}</p>`;
  botonesFase.forEach((b) => b.setAttribute("aria-selected", String(Number(b.dataset.fase) === i)));
}

botonesFase.forEach((b) => b.addEventListener("click", () => mostrarFase(Number(b.dataset.fase))));
mostrarFase(0);

// =========================================================
// 4. Gráfico interactivo: rating por cuartil y década (gráfico 3)
// =========================================================
const CUARTILES = {
  "1989-1999": { valores: [8.12, 8.16, 8.04, 8.0], color: "#ffd521" },
  "2000-2009": { valores: [6.98, 7.1, 7.13, 6.95], color: "#4aa8e8" },
  "2010-2016": { valores: [6.75, 6.66, 6.79, 7.0], color: "#f47aa8" },
};
const ETIQUETAS_Q = ["Q1 (menos)", "Q2", "Q3", "Q4 (más)"];

const svg = document.getElementById("grafico-q");
const tooltip = document.getElementById("tooltip-q");
const selectorQ = document.getElementById("selector-q");
const NS = "http://www.w3.org/2000/svg";

// Dimensiones y escalas
const W = 560, H = 320, M = { arriba: 20, derecha: 24, abajo: 44, izquierda: 48 };
const yMin = 6.5, yMax = 8.4;
const xEsc = (i) => M.izquierda + 20 + i * ((W - M.izquierda - M.derecha - 40) / 3);
const yEsc = (v) => H - M.abajo - ((v - yMin) / (yMax - yMin)) * (H - M.arriba - M.abajo);

function nodo(tipo, atributos, padre = svg) {
  const el = document.createElementNS(NS, tipo);
  Object.entries(atributos).forEach(([k, v]) => el.setAttribute(k, v));
  padre.appendChild(el);
  return el;
}

// Líneas guía y ejes
[6.5, 7.0, 7.5, 8.0].forEach((v) => {
  nodo("line", { x1: M.izquierda, x2: W - M.derecha, y1: yEsc(v), y2: yEsc(v), class: "eje" });
  nodo("text", { x: M.izquierda - 8, y: yEsc(v) + 4, "text-anchor": "end", class: "eje-texto" }).textContent = fmt(v);
});
ETIQUETAS_Q.forEach((t, i) => {
  nodo("text", { x: xEsc(i), y: H - M.abajo + 22, "text-anchor": "middle", class: "eje-texto" }).textContent = t;
});
nodo("text", { x: 12, y: M.arriba + 4, class: "eje-texto" }).textContent = "Rating IMDb";

// Una línea con puntos por década
const grupos = {};
Object.entries(CUARTILES).forEach(([decada, { valores, color }]) => {
  const g = nodo("g", {});
  grupos[decada] = g;

  const puntos = valores.map((v, i) => `${xEsc(i)},${yEsc(v)}`).join(" ");
  // Primero un contorno negro grueso y encima la línea de color (estilo dibujo animado)
  nodo("polyline", { points: puntos, stroke: "#1d1d2b", class: "linea contorno" }, g);
  nodo("polyline", { points: puntos, stroke: color, class: "linea" }, g);

  valores.forEach((v, i) => {
    const p = nodo("circle", { cx: xEsc(i), cy: yEsc(v), r: 7, fill: color, class: "punto", tabindex: 0 }, g);
    const texto = `${decada}, ${ETIQUETAS_Q[i]}: ${fmt(v, 2)}`;
    p.setAttribute("aria-label", texto);
    const mostrar = () => {
      const cajaSvg = svg.getBoundingClientRect();
      const escala = cajaSvg.width / W;
      tooltip.textContent = texto;
      tooltip.style.left = 11 + xEsc(i) * escala + "px";
      tooltip.style.top = 11 + yEsc(v) * escala + "px";
      tooltip.hidden = false;
    };
    p.addEventListener("mouseenter", mostrar);
    p.addEventListener("focus", mostrar);
    p.addEventListener("click", mostrar);
    p.addEventListener("mouseleave", () => (tooltip.hidden = true));
    p.addEventListener("blur", () => (tooltip.hidden = true));
  });
});

// Botones para mostrar u ocultar cada década, con el cambio Q1→Q4
Object.entries(CUARTILES).forEach(([decada, { valores, color }]) => {
  const cambio = valores[3] - valores[0];
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("aria-pressed", "true");
  b.innerHTML = `<span style="display:inline-block;width:.8rem;height:.8rem;border-radius:50%;border:2px solid #1d1d2b;background:${color};vertical-align:-1px;margin-right:.35rem"></span>${decada} ${cambio >= 0 ? "▲" : "▼"} ${fmt(Math.abs(cambio), 2)}`;
  b.title = "Cambio de rating de Q1 a Q4";
  b.addEventListener("click", () => {
    const activa = b.getAttribute("aria-pressed") === "true";
    b.setAttribute("aria-pressed", String(!activa));
    grupos[decada].classList.toggle("oculta", activa);
  });
  selectorQ.appendChild(b);
});

// =========================================================
// 5. Quiz con los resultados del trabajo
// =========================================================
const PREGUNTAS = [
  {
    texto: "¿Qué parte de las palabras de la serie dice Homer?",
    opciones: ["Cerca del 10 %", "Cerca del 20 %", "Más del 40 %"],
    correcta: 1,
    explicacion: "Entre el 19,9 % y el 21,2 % según la década: una de cada cinco palabras.",
  },
  {
    texto: "Los cuatro principales juntos, ¿hablan más que el resto del pueblo?",
    opciones: ["Sí, bastante más", "No, hablan un poco menos"],
    correcta: 1,
    explicacion: "La familia dice entre el 45,6 % y el 47,3 % de las palabras: menos de la mitad.",
  },
  {
    texto: "¿En qué tramo cayó más rápido el rating?",
    opciones: ["Temporadas 1 a 5", "Temporadas 8 a 11", "Temporadas 11 a 26"],
    correcta: 1,
    explicacion: "Bajó 0,93 puntos en solo tres temporadas. Entre la 11 y la 26 bajó 0,58, pero en quince.",
  },
  {
    texto: "En una misma década, ¿los episodios con más protagonismo de la familia tienen mejor rating?",
    opciones: ["Sí, claramente", "Casi no hay diferencia", "Tienen peor rating"],
    correcta: 1,
    explicacion: "El cambio de Q1 a Q4 no supera 0,25 puntos, y su signo cambia según la década.",
  },
];

const qProgreso = document.getElementById("quiz-progreso");
const qPregunta = document.getElementById("quiz-pregunta");
const qOpciones = document.getElementById("quiz-opciones");
const qRespuesta = document.getElementById("quiz-respuesta");
const qSiguiente = document.getElementById("quiz-siguiente");
let actual = 0;
let aciertos = 0;

function mostrarPregunta() {
  const p = PREGUNTAS[actual];
  qProgreso.textContent = `Pregunta ${actual + 1} de ${PREGUNTAS.length}`;
  qPregunta.textContent = p.texto;
  qRespuesta.innerHTML = "";
  qSiguiente.hidden = true;
  qOpciones.innerHTML = "";

  p.opciones.forEach((op, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = op;
    b.addEventListener("click", () => responder(i));
    qOpciones.appendChild(b);
  });
}

function responder(i) {
  const p = PREGUNTAS[actual];
  const botones = qOpciones.querySelectorAll("button");
  botones.forEach((b) => (b.disabled = true));
  botones[p.correcta].classList.add("correcta");

  if (i === p.correcta) {
    aciertos++;
    qRespuesta.innerHTML = `<strong>¡Excelente!</strong> ${p.explicacion}`;
  } else {
    botones[i].classList.add("incorrecta");
    qRespuesta.innerHTML = `<strong>¡D'oh!</strong> ${p.explicacion}`;
  }

  qSiguiente.textContent = actual < PREGUNTAS.length - 1 ? "Siguiente pregunta" : "Ver resultado";
  qSiguiente.hidden = false;
  qSiguiente.focus();
}

function mostrarFinal() {
  const frase =
    aciertos === PREGUNTAS.length ? "¡Woo-hoo! Puntaje perfecto." :
    aciertos >= 2 ? "¡Ay, caramba! Nada mal." :
    "¡D'oh! Volvé a mirar los resultados y probá de nuevo.";
  qProgreso.textContent = "Resultado";
  qPregunta.textContent = frase;
  qOpciones.innerHTML = `<p class="quiz-final">${aciertos} de ${PREGUNTAS.length}</p>`;
  qRespuesta.innerHTML = "";
  qSiguiente.textContent = "Jugar otra vez";
  qSiguiente.hidden = false;
}

qSiguiente.addEventListener("click", () => {
  if (qProgreso.textContent === "Resultado") {
    actual = 0;
    aciertos = 0;
    mostrarPregunta();
  } else if (actual < PREGUNTAS.length - 1) {
    actual++;
    mostrarPregunta();
  } else {
    mostrarFinal();
  }
});

mostrarPregunta();

// =========================================================
// 6. Visor para ampliar los gráficos del notebook
// =========================================================
const visor = document.getElementById("visor");
const visorImg = document.getElementById("visor-img");

document.querySelectorAll("[data-ampliar]").forEach((boton) => {
  boton.addEventListener("click", () => {
    const img = boton.querySelector("img");
    visorImg.src = img.src;
    visorImg.alt = img.alt;
    visor.showModal();
  });
});
document.getElementById("cerrar-visor").addEventListener("click", () => visor.close());
visor.addEventListener("click", (e) => { if (e.target === visor) visor.close(); });

// =========================================================
// 7. Menú: resalta la sección que se está viendo
// =========================================================
const enlaces = document.querySelectorAll(".barra nav a");
const secciones = [...enlaces].map((a) => document.querySelector(a.getAttribute("href")));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      enlaces.forEach((a) => a.classList.toggle("activo", a.getAttribute("href") === "#" + entrada.target.id));
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
secciones.forEach((s) => s && observador.observe(s));
