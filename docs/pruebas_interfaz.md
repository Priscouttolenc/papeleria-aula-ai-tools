# Pruebas controladas de interfaz

El27/11/2026 se verificaron en el navegador cinco estados del código de la página: carga, vacío, error de datos, desactualización y filtro sin coincidencias. Los archivos web/pruebas/ sustituyen únicamente fetch por una respuesta de prueba y omiten el widget de voz para aislar la interfaz. No son fallas reales de producción ni prueban micrófono o disponibilidad de ElevenLabs. Se rotulan como pruebas controladas; la página principal no usa estos datos.

| Escenario | Resultado observado | Evidencia |
|---|---|---|
|cargando|Cargando datos.|evidencias/interfaz_cargando.jpg|
|vacio|Sin datos: falta importar la exportación sanitizada del registro privado.|evidencias/interfaz_vacia.jpg|
|error|No se pudieron cargar los datos. Intenta recargar o consulta el folio por Telegram.|evidencias/interfaz_error.jpg|
|desactualizado|Datos desactualizados: exportación de hace más de 24 horas.|evidencias/interfaz_desactualizada.jpg|
|sin_resultados|Sin resultados para este filtro.|evidencias/interfaz_sin_resultados.jpg|

Vacío y filtro sin coincidencias mostraron cero casos y cero filas, sin inventar indicadores. Error ofreció recargar o consultar Telegram. La fuente conserva el texto de carga en ese escenario de error: mejora visual identificada que no impide mostrar el aviso de error. La prueba de desactualización utiliza una fecha deliberadamente antigua. Los estados de carga y error se inducen, no se atribuyen a interrupciones observadas de proveedores.
