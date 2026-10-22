# Datos

**Dataset:** The Simpsons by the Data* (Todd Schneider, publicado en Kaggle)
**Link original/Fuente:** https://github.com/sujanjoejacob/Text-mining-with-Simpsons-Data



## Archivo incluido


- `simpsons_episodes.csv`: una fila por episodio (temporada, fecha de emisión, rating de IMDb, votos y audiencia en EE.UU.). Sin modificaciones.
- `simpsons_script_lines.csv.zip`: una fila por línea de guion (episodio, personaje que habla y cantidad de palabras). Es el CSV original comprimido en ZIP, porque pesa 35 MB y supera el límite de subida web de GitHub. No se modificó su contenido. Mismo ZIP del repo.


## Por qué se incluye una copia

El portal oficial, tiene errores de carga y bloquea las descargas automatizadas (por ejemplo, desde Google Colab), por lo que el notebook no puede leer el archivo directamente desde la fuente. Para garantizar la reproducibilidad, se incluye una copia comprimida en este repositorio. El notebook intenta primero cargar los datos desde la fuente oficial y, si falla, usa esta copia.

## Cómo obtenerlo manualmente

1. Ingresar al link original desde un navegador.
2. Descargar ambos archivos desde el repositorio fuente (el de guiones ya viene comprimido).
