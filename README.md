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
- `figuras/` — gráficos exportados
- `informe/` — informe académico en PDF
- [/presentación](/presentación) — presentación de la defensa
- [/bibliografía](/bibliografía) — bibliografía
  
## Fechas clave

- ~~18/10/2026** — inscripción del grupo~~
- **06/11/2026** — entrega y defensa
