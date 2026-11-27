# Contrato común de agentes, versión1.0

La V11 utiliza un adaptador de entrada y salida para los cuatro especialistas. No se basa únicamente en cambiar sus nombres: cada rol recibe datos y objetivo propios. El contrato de entrada se envía efectivamente al modelo como JSON. El contrato de salida envuelve el resultado del modelo con metadatos comprobados del servidor.

| Entrada común | Contenido |
|---|---|
| caso_id | Folio que debe conservarse en toda la ejecución |
| canal | telegram |
| usuario_alias | usuario_autorizado; no se envía el identificador personal al modelo |
| objetivo | Función específica del especialista |
| datos | Datos autorizados específicos de su etapa |
| modo | SIMULADO |
| limite_costo | MonedaUSD, máximo por caso y saldo estimado después de la reserva |

| Salida común | Contenido |
|---|---|
| caso_id y agente | Identidad contrastada con la etapa y el folio originales |
| estado | Estado declarado en el resultado; los validadores específicos lo comprueban |
| resultado | Objeto JSON del modelo, sin razonamiento privado |
| fuentes | Referencias autorizadas del proceso; no se inventa navegación externa |
| advertencias | Alertas del resultado y aviso si el consumo utiliza una cota |
| duracion_ms | Tiempo del paso entre reserva y registro; no equivale solo al tiempo interno del modelo |
| consumo_ref | llamada_id que vincula resultado y registro de consumo |

Los campos se conservan en control_consumo.traza: contrato_entrada antes de la llamada y contrato_salida después. El registro final guarda esa traza dentro de detalle_json. Los validadores de negocio permanecen separados: normalizar metadatos no sustituye verificar precios, cantidades, estado, versión ni aprobación humana.

Datos por rol: recepción recibe solicitud; catálogo recibe recepción y referencia al catálogo autorizado de su prompt; cotización recibe cálculo autorizado; revisión recibe catálogo, cálculo y propuesta. La cotización omite el catálogo duplicado, conservando sus fuentes y el skill completo. La comparación de costo anterior no se extrapola a la V11: añadir los metadatos comunes cambia el contexto y requiere medición propia.

Prueba local: node tests/contratos_agentes.cjs. Comprueba los campos de entrada y salida, referencias y preservación del folio; intenta además un folio ajeno en cada rol. Es una prueba con datos sintéticos, sin consumo de proveedores. La prueba de integración en n8n se registra por separado y no se acredita por la mera existencia de este documento.

Integración comprobada: ver docs/verificacion_v11.md y evidencias/contratos_cuatro_agentes.jpg.
