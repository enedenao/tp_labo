# TP Grupal — Laboratorio de Métodos Cuantitativos

**Universidad de Buenos Aires · Facultad de Ciencias Económicas**
Tecnicatura Universitaria en Gestión y Análisis de Datos en Organizaciones
2do Cuatrimestre 2026

## Integrantes

| Nombre y apellido  | N° de registro | Usuario de GitHub |
|--------------------|----------------|-------------------|
| Bautista Cortés    | 922142         | @bauti0727        |
| Gabriel Goldadler  | 922212         | @ggoldadler-blip  |
| José Luis Joannás  | 922214         | @PAKETTE          |
| Naomi Asato        | 922221         | @enedenao         |
| dagut-rrd          | — (formulario)  | @dagut-rrd       |

## Tema y pregunta de investigación

**Tema:** distribución del diálogo entre personajes y valoración de los episodios de *Los Simpson*.

**Pregunta:** ¿Qué personajes concentran el diálogo en *Los Simpson*, y existe una asociación entre el protagonismo de los personajes principales y la valoración de los episodios en IMDb que se mantenga a lo largo de las décadas?

El proceso de elección del tema y el cambio de dataset están documentados en [brainstorm.md](brainstorm.md).*

## Dataset

**The Simpsons Data** 

**Fuente:** recopilación de Todd Schneider y publicado en Kaggle.

**Link original:** https://github.com/sujanjoejacob/Text-mining-with-Simpsons-Data


Se usan dos tablas, ambas copiadas en [`/data`](data/):

- `simpsons_episodes.csv`: temporada, fecha de emisión, rating de IMDb, votos y audiencia en EE.UU. de cada episodio.
- `simpsons_script_lines.csv.zip`: cada línea de guion con el episodio, el personaje que habla y la cantidad de palabras (CSV comprimido por su tamaño).

Ver [`data/README.md`](data/README.md) para más detalles.


## Contenido del repositorio

- [brainstorm.md](brainstorm.md) — propuestas de temas y preguntas de cada integrante
- [notebook.ipynb](notebook.ipynb) — análisis en Python
- [/data](/data) — dataset/instrucciones para obtenerlo
- [/figuras](/figuras) — gráficos exportados
- [/informe](/informe) — informe académico en PDF
- [/presentación](/presentación) — presentación de la defensa
- [/docs](/docs) — código del sitio web (HTML, CSS y JavaScript)
- [/video](/video) — video explicativo
- [/bibliografía](/bibliografía) — bibliografía

## Organización del equipo

Dividimos el análisis en cinco etapas, una por integrante, y editamos el notebook por turnos para no pisar el trabajo del otro. Cada integrante trabajó en su propia rama y los cambios se integraron a `main`. Hicimos una reunión semanal después de la clase de los martes.

| Etapa | Integrante | Qué incluye |
|---|---|---|
| 1. Carga y exploración | @enedenao | Carga de los CSV, estructura, tipos de dato, nulos, duplicados y estadísticas descriptivas. Dataset subido a [/data](/data). |
| 2. Pregunta y transformaciones | @bauti0727 | Pregunta de investigación y las dos transformaciones justificadas. |
| 3. Resúmenes con groupby | @PAKETTE | Resúmenes agrupados con su interpretación. |
| 4. Gráficos | @dagut-rrd | Los tres gráficos, exportados a [/figuras](/figuras). |
| 5. Conclusiones e informe | @ggoldadler-blip | Conclusiones del notebook e informe en Overleaf. |

Al final, todos revisamos el informe y armamos la presentación juntos.

## Uso de inteligencia artificial

Usamos herramientas de IA como apoyo en distintas etapas:

- **Código y análisis:** para proponer y corregir código. En el notebook donde se usó IA lo indica.
- **Redacción:** para mejorar la claridad del informe y de los textos.
- **Web:** el código del sitio se generó con asistencia de IA (Claude).
- **Video:** las escenas se generaron con IA (Gemini) y se editaron en Filmora.

La ejecución, la revisión de los resultados y las decisiones del análisis fueron del grupo.

  
## Fechas clave

- ~~18/10/2026** — inscripción del grupo~~
- **06/11/2026** — entrega y defensa
