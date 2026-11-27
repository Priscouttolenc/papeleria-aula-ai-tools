# Orquestador en n8n

El router verifica usuario, comando, propiedad del caso, versión, vigencia y eventos ya guardados. Enruta pedidos nuevos a los cuatro especialistas y comandos a consulta o actualización de decisión. El caso_id deriva del update_id de Telegram y viaja por los contratos.

Los nodos de control V9 limitan a cuatro llamadas de especialistas, deshabilitan reintentos del modelo y aplican límites de tiempo y longitud. Se comprobó bloqueo con presupuesto de llamadas cero. No existe aún presupuesto monetario automático reconciliado con uso real. Las excepciones de código pueden detener la ejecución sin respuesta amistosa en Telegram.

Estados observados: pendiente_aprobacion, aprobado_simulado, rechazado y vencido. Una actualización condicional exige propietario, versión y estado pendiente antes de registrar la decisión. La deduplicación contra registros completados no garantiza exclusión mutua de dos ejecuciones concurrentes.

