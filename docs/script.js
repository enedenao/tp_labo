// =========================================================
// Datos: % de palabras habladas por década (gráfico 1 del notebook).
// "Resto" se calcula como 100 menos la suma de los cuatro.
// =========================================================
const REPARTO = {
  "1989-1999": { Homer: 21.2, Marge: 9.3, Bart: 9.1, Lisa: 7.3 },
  "2000-2009": { Homer: 21.2, Marge: 10.4, Bart: 7.8, Lisa: 7.9 },
  "2010-2016": { Homer: 19.9, Marge: 9.0, Bart: 8.5, Lisa: 8.2 },
};

// Color de fondo y de texto de cada segmento (variables de style.css)
const COLORES = {
  Homer: ["var(--azul-4)", "#ffffff"],
  Marge: ["var(--azul-3)", "#ffffff"],
  Bart:  ["var(--azul-2)", "#0e1828"],
  Lisa:  ["var(--azul-1)", "#0e1828"],
  "Resto de los personajes": ["var(--resto)", "var(--tinta)"],
};

// Formato argentino: coma decimal
const fmt = (n) => n.toLocaleString("es-AR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const barra = document.getElementById("barra-reparto");
const leyenda = document.getElementById("leyenda");
const datoClave = document.getElementById("dato-clave");
const tituloDecada = document.getElementById("reparto-decada");
const botones = document.querySelectorAll(".selector button");

// Agrega "Resto" a los datos de una década y devuelve [nombre, %] en orden
function filasDe(decada) {
  const d = REPARTO[decada];
  const familia = Object.values(d).reduce((a, b) => a + b, 0);
  return [...Object.entries(d), ["Resto de los personajes", 100 - familia]];
}

// Crea los segmentos y la leyenda una sola vez
function construir() {
  filasDe("1989-1999").forEach(([nombre]) => {
    const [fondo, texto] = COLORES[nombre];

    const seg = document.createElement("div");
    seg.className = "segmento";
    seg.dataset.nombre = nombre;
    seg.style.background = fondo;
    seg.style.color = texto;
    barra.appendChild(seg);

    const item = document.createElement("li");
    item.innerHTML = `<i style="background:${fondo}"></i>${nombre} <strong data-pct="${nombre}"></strong>`;
    leyenda.appendChild(item);
  });
}

// Actualiza anchos, etiquetas y texto según la década elegida
function mostrar(decada) {
  const filas = filasDe(decada);
  const familia = 100 - filas[filas.length - 1][1];

  filas.forEach(([nombre, pct]) => {
    const seg = barra.querySelector(`[data-nombre="${nombre}"]`);
    seg.style.flexBasis = pct + "%";
    // Solo escribimos la etiqueta si el segmento es lo bastante ancho
    seg.textContent = pct >= 7 ? `${fmt(pct)} %` : "";
    leyenda.querySelector(`[data-pct="${nombre}"]`).textContent = `${fmt(pct)} %`;
  });

  tituloDecada.textContent = decada;
  barra.setAttribute(
    "aria-label",
    `En ${decada}: ` + filas.map(([n, p]) => `${n} ${fmt(p)} %`).join(", ")
  );
  datoClave.innerHTML =
    `Los cuatro principales juntos dicen el <strong>${fmt(familia)} %</strong> de las palabras; ` +
    `el resto del elenco, el <strong>${fmt(100 - familia)} %</strong>.`;

  botones.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.decada === decada)));
}

construir();
mostrar("1989-1999");
botones.forEach((b) => b.addEventListener("click", () => mostrar(b.dataset.decada)));

// =========================================================
// Visor: al tocar un gráfico se abre ampliado en un <dialog>
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
// Cerrar también al tocar fuera de la imagen
visor.addEventListener("click", (e) => { if (e.target === visor) visor.close(); });

// =========================================================
// Navegación: resalta la sección que se está viendo
// =========================================================
const enlaces = document.querySelectorAll(".barra nav a");
const secciones = [...enlaces].map((a) => document.querySelector(a.getAttribute("href")));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      enlaces.forEach((a) =>
        a.classList.toggle("activo", a.getAttribute("href") === "#" + entrada.target.id)
      );
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
secciones.forEach((s) => s && observador.observe(s));
