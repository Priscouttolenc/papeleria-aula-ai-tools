# Revisión final del 26 de noviembre de 2026

V10 publicada en n8n; V9 despublicada. La API de voz permanece publicada por separado. No ejecutar manualmente un segundo Telegram Trigger mientras el receptor de producción esté activo.

## Pruebas realizadas

- Banco de integración con entradas sintéticas, ejecución 44: acceso ajeno bloqueado, pedido sin cantidades aclarado, presupuesto cero registrado como bloqueado_presupuesto y falla de servicio inducida registrada como error_servicio. La caída de servicio fue una prueba controlada, no una interrupción real del proveedor.
- En esa primera versión, tres pedidos válidos llegaron al modelo de recepción, pero fallaron en Registrar consumo: structuredClone no estaba disponible en el entorno de n8n. El error fue persistido; no se generaron cotizaciones válidas. Estos intentos son fallas reales de desarrollo, no éxitos de negocio.
- Se sustituyó esa dependencia por una copia JSON compatible. Repetición con nuevo evento AULA-990100101: cuatro agentes, 4,286 tokens totales mostrados en logs, 27.857 segundos, propuesta de 94 MXN guardada y respuesta Telegram con ok=true. Pedido: dos cuadernos y tres plumas. Es un caso de integración sintético y permanece pendiente de aprobación.
- Registro posterior al cuarto modelo: cuatro llamadas, reserva pendiente cero, consumo imputado estimado USD 0.036384 frente a presupuesto USD 0.04. Los subnodos no expusieron tokenUsage al código posterior; se utilizó la cota estimada de USD 0.009096 por llamada. No equivale al cargo de Gateway.
- Página a 390 y 1366 px: ancho del documento no superior al viewport. Filtro aprobado_simulado: un caso, importe 390, una fila. Tab llevó el foco a Restablecer, con contorno visible; Enter recuperó siete casos.
- ElevenLabs: dominio permitido priscouttolenc.github.io, Origin requerido, 20 llamadas diarias, una simultánea y ráfagas desactivadas; cambios publicados.

## Evidencia y límites

Las pruebas sintéticas no prueban que otra cuenta real de Telegram haya sido rechazada. La reserva previa reduce reejecuciones de eventos guardados, pero no garantiza exclusión de dos solicitudes concurrentes. La prueba de presupuesto controla una estimación; no concilia facturación. No se verificó micrófono denegado, recreación completa por un tercero ni ahorro antes/después con calidad equivalente.
