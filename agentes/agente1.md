# Agente de Recepción

Función: Identifica cantidades explícitas. No calcula precios ni inventa faltantes.

Entrada: Texto del pedido y caso_id.

Salida: JSON con productos, cantidades, faltantes, advertencias y estado; conserva caso_id y modo SIMULADO.

Modelo observado: gpt-5-mini-2025-08-07 mediante n8n Gateway. Evidencia: ejecuciones 33 a 36, con tokenUsage separado por modelo en costos/costos.csv. Los validadores posteriores comprueban el contrato y detienen salidas inválidas.

