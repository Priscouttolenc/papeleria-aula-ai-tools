# Integración V11 y protección frente a repetición

El27/11/2026 se ejecutó una prueba sintética con evento990300001 y pedido de dos cuadernos y tres plumas. La ejecución49 completó los cuatro agentes, calculó94MXN, guardó el caso y devolvió la respuesta en Telegram. El nodo Verificar cuatro contratos comprobó: contratos_verificados=4, entradas_completas=true, salidas_completas=true y referencias_coinciden=true. n8n mostró4803 tokens totales y36.926 segundos. Es una cotización pendiente, no una aprobación humana.

Cada contrato de entrada viajó efectivamente en el prompt. Las salidas normalizadas incorporan caso_id, agente, estado, resultado, fuentes, advertencias, duración y consumo_ref. La traza completa se conserva en detalle_json. Los datos de contexto son distintos por rol. No se envió el número personal de Telegram al modelo: se utilizó un alias de usuario autorizado.

Después se volvió a ejecutar el mismo evento, sin cambiar su identificador. El router devolvió nuevo=false, actualizar=false y “Evento ya registrado; no se crea otra cotización.” Solo se ejecutaron entrada, lectura, router, condiciones y respuesta; no aparecieron modelos en esa traza. La ejecución terminó en7.246 segundos. Esta prueba acredita repetición secuencial del mismo evento contra la tabla real, no exclusión de ejecuciones concurrentes.

Tras la verificación se publicó Papelería Aula — Contratos y trazas V11 y se despublicó V10. La API de voz permanece publicada por separado. La exportación pública se entrega inactiva y sin credenciales ni identificadores privados. Nunca publicar la prueba manual como otro receptor de Telegram.

El control acumulado imputó USD0.036384 como cota conservadora, frente al presupuesto de USD0.04. No fue posible recuperar tokenUsage desde los nodos de código y no se atribuye facturación exacta a esa cota. La duración del contrato mide cada paso entre reserva y registro, no únicamente el trabajo interno del modelo.


Actualización documental del 27/11/2026: se recuperó manualmente tokenUsage de los cuatro modelos de la ejecución49. Recepción:349 entrada/414 salida; catálogo:555/626; cotización:786/583; revisión:1055/435. Total:2745 entrada y2058 salida,4803 tokens. Equivalente estimado USD0.00480225 a tarifa pública sin caché. costos.csv conserva por separado costo_imputado_control_usd=0.009096 por llamada. La recuperación manual no modifica la cota del control ni acredita una factura Gateway.
