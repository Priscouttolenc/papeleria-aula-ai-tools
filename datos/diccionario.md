# Diccionario de datos

caso_id: string AULA-update_id, trazabilidad del caso. usuario_id: string privado del propietario. estado: pendiente_aprobacion, aprobado_simulado, rechazado o vencido. version: número entero de propuesta. total_mxn: importe ficticio propuesto. vence_en: fecha de caducidad de la decisión. detalle_json: contratos y trazas privados serializados. evento_id: update_id original convertido a string.

web/datos.json publica solamente caso_id, estado, version y total_mxn. La fecha actualizado describe la exportación, no una consulta en vivo. No publicar usuario_id, mensajes ni detalle_json.

