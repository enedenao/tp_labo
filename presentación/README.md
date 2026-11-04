# Presentación de Springfield

#  Análisis del Protagonismo de Personajes y Valoración en Los Simpson (1989–2016)

Este repositorio contiene la presentación y documentación analítica sobre el impacto del volumen de diálogo de los personajes principales en las calificaciones del público (IMDb) a lo me largo de 28 temporadas de *Los Simpson*.

---

##  Resumen del Proyecto

El objetivo principal es resolver la pregunta:  
> **¿Existe una relación directa entre el protagonismo de la familia Simpson y la calidad percibida de los episodios a lo largo del tiempo?**

Mediante el procesamiento de más de 158.000 líneas de diálogo en 600 episodios, se evalúa la distribución del peso conversacional del elenco y se contrasta empíricamente con la recepción crítica en IMDb.

---

##  Datos y Metodología

- **Alcance:** 600 episodios (Temporadas 1 a 28, 1989–2016).
- **Métrica de Protagonismo:** Porcentaje de palabras habladas por episodio (`pct_principales`) asignado a los identificadores de personaje (`character_id`).
- **Técnicas de Análisis:** Correlaciones de Pearson y Spearman, controles temporales por temporada/década y segmentación por cuartiles de protagonismo.

---

##  Estrutura de la Presentación (PPT / Deck)

| Diapositiva | Título | Contenido Clave |
| :--- | :--- | :--- |
| **01** | **¿Quién habla en Springfield?** | Portada y presentación general del trabajo. |
| **02** | **Introducción** | Pregunta de investigación, dataset y objetivo del estudio. |
| **03** | **Metodología** | Pasos del pipeline: Limpieza de acotaciones, métrica de volumen de palabras y herramientas estadísticas. |
| **04** | **Protagonismo I** | Concentración del 46.8% de diálogos en la familia nuclear (Homer 21.0%, Marge 9.6%, Bart 8.5%, Lisa 7.7%). |
| **05** | **Protagonismo II** | Hegemonía interna de Homer (43-45%) y evolución en el tiempo (crecimiento progresivo de Lisa). |
| **06** | **Valoración I** | Análisis del quiebre histórico en IMDb: Caída concentrada del 57% de los puntos entre las temporadas 9 y 11. |
| **07** | **Valoración II** | Correlación nula ($r = 0.01$) entre el volumen de diálogo familiar y las notas en IMDb. Desagregación por décadas y personajes. |
| **08** | **Discusión y Conclusiones** | Hallazgos principales, limitaciones de la medición por palabras y preguntas abiertas para debate. |

---

##  Hallazgos Clave

1. **Concentración Excesiva:** De más de 6,000 nombres en el guion, solo 4 personajes concentran casi la mitad (46.8%) de todas las palabras habladas de la serie.
2. **Independencia del Protagonismo:** La caída histórica en las notas de IMDb (de 8.07 en la primera década a 6.79 en la tercera) **no estuvo causada** por un aumento o disminución en el diálogo de los personajes principales.
3. **Efectos Cruzados:** Marge muestra una leve correlación negativa en las primeras décadas, mientras que Homer muestra una leve relación positiva al controlar por temporada; ambos efectos se cancelan al evaluar la familia en conjunto.



- **Python:** `pandas`, `matplotlib`, `seaborn`, `statsmodels`.
- **Diseño de Diapositivas:** Plantilla en Canva / HTML-CSS.
