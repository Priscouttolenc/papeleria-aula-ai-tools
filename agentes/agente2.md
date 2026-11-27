# Agente de Catálogo

Función: Recupera coincidencias del catálogo autorizado incluido en el prompt. No consulta internet ni una base externa de catálogo.

Entrada: Recepción validada y catálogo ficticio v1.

Salida: JSON con SKU, nombre, cantidad, precio, fuente y no_encontrados; conserva caso_id y modo SIMULADO.

Modelo observado: gpt-5-mini-2025-08-07 mediante n8n Gateway. Evidencia: ejecuciones 33 a 36, con tokenUsage separado por modelo en costos/costos.csv. Los validadores posteriores comprueban el contrato y detienen salidas inválidas.

V11 utiliza el contrato común de docs/contratos_agentes.md. Los datos específicos permanecen separados por rol; duración y consumo_ref se agregan desde el servidor, no se inventan en la respuesta del modelo.
