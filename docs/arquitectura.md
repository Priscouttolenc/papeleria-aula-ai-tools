# Arquitectura y alcance comprobado

Telegram → leer casos → router → recepción → validar → catálogo → validar → cálculo determinista → skill cotización → propuesta → loop de calidad → skill revisión → revisión → validar → guardar → respuesta.

Consulta y decisión humana utilizan la tabla existente y un camino separado del de generación. La API de voz usa POST con Header Auth, lee el mismo registro y devuelve solo folio, estado, versión y total. Una segunda acción devuelve el catálogo ficticio. La voz no cambia estados ni crea pedidos en esta versión.

Los skills se leen durante la construcción del workflow y su contenido se incorpora al prompt con versión y huella. No se leen archivos del repositorio en cada ejecución de n8n. El loop de calidad corrige por reglas un total contra el cálculo autorizado; la prueba controlada introduce +10 en V1 y corrige V2 con el mismo folio, sin nueva llamada LLM.

El catálogo es ficticio e incluido en el prompt del agente 2. No representa inventario en tiempo real. Los precios son finales de prueba: cuaderno35, pluma8, lápiz6, borrador5 y carpeta20 MXN por pieza.

KPIs del panel: folios únicos, aprobados dividido entre aprobados más rechazados, e importe medio propuesto. Los pendientes y vencidos no entran en el denominador de aprobación. Estos indicadores no son ventas ni prueban mejoras de productividad frente a una línea base.

Usuario objetivo: responsable de recepción y revisión de solicitudes de una papelería. Problema: transformar pedidos en texto libre en propuestas trazables con precios autorizados y decisión humana. Inicio: solicitud en Telegram. Fin: propuesta guardada y decisión o vencimiento registrado.

