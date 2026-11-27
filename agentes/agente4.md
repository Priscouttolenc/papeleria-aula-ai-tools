# Agente de Revisión

Función: Usa skill aula-revision. No sustituye la aprobación humana.

Entrada: Catálogo, cálculo y cotización.

Salida: JSON con apto_para_aprobacion_humana o devuelto con correcciones; conserva caso_id y modo SIMULADO.

Modelo observado: gpt-5-mini-2025-08-07 mediante n8n Gateway. Evidencia: ejecuciones 33 a 36, con tokenUsage separado por modelo en costos/costos.csv. Los validadores posteriores comprueban el contrato y detienen salidas inválidas.

