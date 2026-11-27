# Reproducción del proyecto

1. Crear un bot de Telegram y guardar su token únicamente en una credencial de n8n. Identificar privadamente al usuario permitido.
2. Crear tabla aula_casos con caso_id, usuario_id, estado, detalle_json y evento_id como string; version y total_mxn como number; vence_en como date.
3. Importar n8n/workflow.json en una instancia compatible. Reemplazar USUARIO_AUTORIZADO en Telegram Trigger, router y controles por el mismo identificador. Seleccionar la tabla real en todos los nodos de datos. Configurar la credencial Telegram y modelos con acceso disponible. Los nombres de nodos deben conservarse porque se referencian por nombre.
4. Verificar primero un pedido de prueba y los cuatro contratos. No publicar simultáneamente otro Telegram Trigger para el mismo bot. Esta exportación está inactiva y sin credenciales.
5. Publicar un único receptor; enviar /nuevo con cantidades y consultar el folio que devuelve. Aprobar y rechazar deben probarse en casos separados, con la versión vigente.
6. Importar n8n/voz_workflow.json. Seleccionar la tabla real y crear Header Auth con X-Aula-Key y un secreto privado. Confirmar que el path del webhook sea aula-voz-consulta-v1 tras importar. Publicar y copiar su URL de producción.
7. En ElevenLabs configurar agente en español, aviso de IA y consentimiento. Crear herramienta POST a la URL anterior con encabezado secreto X-Aula-Key. Cuerpo JSON: accion consultar_estado o consultar_catalogo; caso_id requerido para estado. Publicar el agente y sustituir agent-id en web/index.html. Nunca incluir el secreto en HTML ni GitHub.
8. Configurar GitHub Pages con Source GitHub Actions. El workflow valida web/datos.json antes del despliegue. Para nueva exportación conservar únicamente caso_id, estado, version y total_mxn por caso y actualizar fecha/fuente. No subir tabla privada completa.
9. Ejecutar pruebas locales indicadas en README. Verificar en los logs de n8n que cada conversación de voz invoque la API real. Hablar desde Pages para la evidencia de voz, no usar solo chat.

Los archivos .env.example son una referencia, no un cargador automático de n8n Cloud. Las versiones importadas pueden requerir ajustar opciones en la interfaz. Las credenciales y servicios de prueba tienen límites y pueden vencer.

