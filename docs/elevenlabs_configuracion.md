# Configuración reproducible de ElevenLabs

Agente público: Papelería Aula — Asistente de voz. Idioma español, voz Eric observada en la configuración, propósito consulta académica de casos y catálogo ficticio. Mostrar aviso de IA y consentimiento antes de iniciar; permitir cancelar y alternativa de texto. No aprobar, rechazar, cobrar ni solicitar datos personales por voz.

Herramienta del servidor consultar_papeleria_aula: POST al webhook de producción de la API de voz; Header Auth X-Aula-Key guardado como secreto en ElevenLabs y credencial en n8n. Nunca colocarlo en HTML o GitHub. Acciones consultar_estado con caso_id, o consultar_catalogo. Responder solo con los campos devueltos; solicitar el folio cuando falte. Sin resultado o servicio indisponible: aclarar el límite y derivar a Telegram /estado. Catálogo y registro son las fuentes autorizadas; no se atribuye una base vectorial inexistente.

Widget en Pages, agente público. Lista de hosts: priscouttolenc.github.io; exigir Origin. Veinte llamadas diarias, una simultánea, ráfagas desactivadas. Estos límites protegen el proyecto académico y pueden agotarse; no representan disponibilidad garantizada para tráfico comercial.

Recreación: importar n8n/voz_workflow.json, elegir la tabla privada y configurar Header Auth personalmente; publicar y copiar URL de producción; crear herramienta de servidor con el mismo secreto; incorporar instrucciones de alcance, IA, consentimiento y derivación; seleccionar español y voz Eric; insertar el agent-id público en web/index.html; añadir host autorizado y publicar. Comprobar consulta de un folio ficticio y de un precio. La clave debe introducirla la titular; este documento no contiene su valor.
