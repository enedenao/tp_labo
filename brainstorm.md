# Brainstorm de temas — TP Grupal LMC 2C 2026

- **Plazo para cargar ideas:** viernes 16/10
- **Debate y elección:** sábado 17/10
- **Formulario de inscripción:** antes del domingo 18/10

> **Actualización:** el dataset de delitos fue reemplazado por uno sobre *Los Simpson*.

## CAMBIO DEL DATASET

Después de la inscripción, el grupo decidió reemplazar el dataset de delitos de CABA por uno sobre *Los Simpson*. Los motivos fueron:

- **Originalidad:** la cátedra valora especialmente la originalidad en la elección del tema. Un análisis de la serie es menos habitual y permite una presentación más atractiva.
- **Evitar datos sensibles:** el dataset de delitos involucra hechos que afectan a personas reales, y exige mucho cuidado para no estigmatizar barrios. Preferimos un tema donde ese riesgo no existe.

**Sobre la fuente:** en la primera elección habíamos priorizado fuentes oficiales. El nuevo dataset no es oficial: fue recopilado por Todd Schneider y publicado en Kaggle. Lo aceptamos porque el tema no involucra datos sensibles, el dataset está bien documentado y es ampliamente utilizado, y priorizamos la originalidad que valora la cátedra. 

Se evaluaron dos versiones del dataset de Los Simpson. Se descartó la de TidyTuesday porque estaba recortada a 2010–2016 y se eligió la versión completa.

**Pregunta acordada:** ¿Qué personajes concentran el diálogo en *Los Simpson*, y existe una asociación entre el protagonismo de los personajes principales y la valoración de los episodios en IMDb que se mantenga a lo largo de las décadas?


---
### ~~Tema elegido y proceso de decisión~~

**Dataset elegido:** Delitos en la Ciudad de Buenos Aires — 2023 (CSV)
**Fuente:** Buenos Aires Data (Gobierno de la Ciudad) — https://data.buenosaires.gob.ar/dataset/delitos/resource/dbec0c29-1ada-40df-b13c-75cf3013ca42
**Pregunta de investigación (versión inicial):** ¿Qué barrio o comuna de la Ciudad de Buenos Aires es más segura en cuanto a los delitos?

Cómo llegamos a esta elección

1. **Brainstorm individual:** se generaron diferentes ideas, indicando tema, dataset, pregunta posible, por qué era interesante y si los datos se podían descargar fácilmente.
2. **Debate en el grupo de WhatsApp:** pusimos en común todas las propuestas y discutimos ventajas y desventajas de cada una: calidad de la fuente, facilidad de descarga, volumen de datos y si permitían cumplir con los requisitos del enunciado.
3. **Elección:**  el grupo eligió el dataset de delitos de CABA propuesto por José.
4. **Inscripción:** se completó el formulario de inscripción antes del domingo 18/10.

Por qué elegimos esta opción

- **Fuente oficial y confiable:** datos publicados por el Gobierno de la Ciudad, con un diccionario de variables documentado. Como grupo preferimos fuentes oficiales antes que datasets de Kaggle y las otras opciones nos parecian más complejas para el análisis en relación al tiempo de entrega.
- **Descarga directa en CSV:** no requiere API ni scraping, se carga en pandas sin complicaciones.
- **Cubre los tres tipos de gráfico que pide la cátedra:**
- **Pregunta clara y respondible** con los datos disponibles.


### Opciones descartadas:
---

## BAUTI

### Idea 1 Creativa
- **Tema:** Videojuegos
- **Dataset y fuente (link):** https://www.kaggle.com/datasets/gregorut/videogamesales
- **Pregunta posible:**¿Cual es el genero que mas consume la gente y en que plataforma?
- **¿Por qué es interesante?:** porque permite a las empresas ver que genero se vende mas y en que plataforma
- **¿Los datos se pueden descargar fácil?** (CSV, API, Kaggle...) si, se puede descargar un CSV desde KAGGLE

### Idea 2 Estructurada
- **Tema:** Peliculas
- **Dataset y fuente (link):** https://www.kaggle.com/datasets/rounakbanik/the-movies-dataset
- **Pregunta posible:** ¿Que peliculas fueron las mas taquilleras y a que genero pertenecen?
- **¿Por qué es interesante?:** es interesante ya que se puede ver que pelicula es,en que año se lanzo,género,director,etc
- **¿Los datos se pueden descargar fácil?**si,desde kaggle

---

## JOSÉ

### Idea 1 - Creativa
- **Tema:** Juegos: Preferencias y hábitos de juego
- **Dataset y fuente (link):** https://www.kaggle.com/datasets/pranshudev/gaming-preferences-and-habits-player-survey-2024/data
- **Pregunta posible:** ¿Qué lleva a una persona a elegir entre un tipo de juego y otro?
- **¿Por qué es interesante?:** Proporciona información valiosa sobre el panorama de los videojuegos, ayudando a desarrolladores, profesionales del marketing e investigadores a identificar tendencias y preferencias en la comunidad de jugadores.
- **¿Los datos se pueden descargar fácil?** (CSV, API, Kaggle...) Sí, CSV en Kaggle con los datos de la encuentra realizada a 500 personas.

### Idea 2 - Estructurada/Formal
- **Tema:** Seguridad: Delitos en la ciudad de Bs As.
- **Dataset y fuente (link):** https://data.buenosaires.gob.ar/dataset/delitos/resource/dbec0c29-1ada-40df-b13c-75cf3013ca42
- **Pregunta posible:** ¿Qué barrio o Comuna de la ciudad de Buenos Aires es más segura en cuanto a los Delitos?
- **¿Por qué es interesante?:** Permite identificar los barrios más peligrosos y de esta manera aplicar nuevas políticas en cuanto a seguridad y también es de mucha información para el mercado Inmobiliario.
- **¿Los datos se pueden descargar fácil?** Sí, CSV y también hay (2025 Mapa del Delito - Resumen ejecutivo (PDF))
 
---

## dagut-rrd

### Idea 1 — Estructurada
- **Tema:** Bitcoin y política monetaria de EE.UU.
- **Dataset y fuente (link):**
  - Cotización histórica BTC-USD (Yahoo Finance): https://finance.yahoo.com/quote/BTC-USD/history/ (se descarga con `yfinance` en Python)
  - Tasa de fondos federales de la Fed (FRED, serie FEDFUNDS): https://fred.stlouisfed.org/series/FEDFUNDS
- **Pregunta posible:** ¿Cómo se comportó el precio de Bitcoin en los ciclos de suba y baja de tasas de la Fed?
- **¿Por qué es interesante?:** Permite ver si un activo "alternativo" reacciona a la política monetaria como un activo de riesgo tradicional.
- **¿Los datos se pueden descargar fácil?** Sí: `yfinance` en Python y CSV directo desde FRED.

### Idea 2 — Creativa
- **Tema:** Aeropuertos y turismo: ¿a dónde vuela Argentina y cuándo?
- **Dataset y fuente (link):** Conectividad Aérea (ANAC / Ministerio de Turismo): https://datos.gob.ar/dataset/turismo-conectividad-aerea
- **Pregunta posible:** ¿Qué aeropuertos y rutas concentran más pasajeros, y cómo cambia según la temporada (verano vs. invierno)? ¿Qué rutas tienen el mayor factor de ocupación?
- **¿Por qué es interesante?:** Muestra la estacionalidad del turismo interno (por ejemplo, destinos de nieve vs. de playa) y sirve para pensar dónde agregar frecuencias o asientos.
- **¿Los datos se pueden descargar fácil?** Sí, CSV oficiales con datos diarios y mensuales desde 2017. Ojo: 2020–2021 están afectados por la pandemia.

---


## NAO

### Idea 1 - Creativa
- **Tema:** Friends: qué hace a un episodio exitoso
- **Dataset y fuente (link):** https://www.kaggle.com/datasets/rezaghari/friends-series-dataset
- **Pregunta posible:** ¿Qué se asocia con los episodios mejor valorados: la temporada, el director o el personaje en el que se centra la trama?
- **¿Por qué es interesante?:** Permite analizar con datos el peso de la época, el equipo creativo y los personajes en el éxito de una serie muy popular.
- **¿Los datos se pueden descargar fácil?** Sí, CSV en Kaggle con los 236 episodios. Los personajes se detectan a partir del resumen de cada episodio.

### Idea 2 — Estructurada
- **Tema:** Siniestros viales en la Ciudad de Buenos Aires
- **Dataset y fuente (link):** [Víctimas de siniestros viales — data.buenosaires.gob.ar](https://data.buenosaires.gob.ar/dataset/victimas-siniestros-viales)
- **Pregunta posible:** ¿En qué horarios, días y comunas se concentran los siniestros viales, y qué tipos de vehículos están más involucrados?
- **¿Por qué es interesante?:** Permite identificar patrones útiles para orientar políticas de prevención en seguridad vial.
- **¿Los datos se pueden descargar fácil?** Sí, CSV oficial con notas metodológicas. Ojo: el año 2020 está afectado por la pandemia.

## ggoldadler-blip
  
### Idea 1 - Creativa
- **Tema:** Peliculas (opera prima vs. segunda pelicula)
- **Dataset y fuente (link):** https://datasets.imdbws.com/
- **Pregunta posible:** ¿Las películas de un director mejoran o empeoran con la experiencia? ¿La segunda obra se valora peor que la ópera prima? 
- **¿Por qué es interesante?:** Analizar si la segunda película de un director se valora peor que su ópera prima permite poner a prueba una creencia popular con datos.
- **¿Los datos se pueden descargar fácil?** No necesitás cuenta ni API, a diferencia de TMDB. El formato es simple.

### Idea 2 — Estructurada
- **Tema:** Salud (Evolucion de muertes por HIV)
- **Dataset y fuente (link):** https://www.argentina.gob.ar/salud/vih-its
https://www.argentina.gob.ar/salud/deis/datos/defunciones 
- **Pregunta posible:** ¿Cómo evolucionaron el número y la tasa de muertes por sida en Argentina entre 2005 y 2024, por sexo, y en qué momento cambió la tendencia?
- **¿Por qué es interesante?:** Es un indicador de qué tan bien funciona el sistema de salud. Con tratamiento antirretroviral sostenido, el VIH pasó de ser una enfermedad mortal a una condición crónica. 
- **¿Los datos se pueden descargar fácil?** Si, son CSV con link directo.
