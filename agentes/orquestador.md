# Orquestador

n8n coordina identidad, enrutamiento, estados, reserva persistente del evento, cuatro especialistas, validación, persistencia y cierre por decisión humana. No requiere una quinta llamada LLM. Conserva caso_id y referencias de consumo; bloquea solicitudes no autorizadas, duplicadas, vencidas o de versión incorrecta. No aprueba operaciones por sí mismo.

V11: contrato común enviado a cada modelo, adaptador de salida con duración y consumo_ref. Máximo4llamadas y cero reintentos del modelo;45segundos por llamada y300por caso; presupuestoUSD0.04 con cota conservadora declarada. Los costos facturados no están conciliados. Errores de agentes y validadores se canalizan a respuesta segura; no se garantiza recuperación de cualquier falla de tabla ni exclusión concurrente.

Ver docs/contratos_agentes.md, docs/verificacion_v11.md y loops/descripcion.md.
