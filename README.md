# Papelería Aula

Proyecto académico de cotizaciones con empresa, productos y precios ficticios. Telegram recibe pedidos; n8n coordina cuatro especialistas, calcula y valida importes, guarda casos y solicita una decisión humana. No se realizan compras, pagos ni envíos.

- [Sitio publicado](https://priscouttolenc.github.io/papeleria-aula-ai-tools/)
- [Arquitectura](docs/arquitectura.md) y [contratos comunes](docs/contratos_agentes.md)
- [Reproducción, inicio, parada y diagnóstico](docs/reproduccion.md)
- [Pruebas](tests/matriz_pruebas.csv) y [evidencias](evidencias/INDICE.md)
- [Costos por llamada](costos/costos.csv), [tres casos cerrados](costos/casos_cerrados.csv) y [optimización](docs/optimizacion.md)
- [Configuración de voz](docs/elevenlabs_configuracion.md) y [errores y recuperación](docs/pruebas_voz_recuperacion.md)
- [Pendientes explícitos](docs/pendientes.md) y [guion de video](docs/guion_demo.md)

## Estado comprobado

V11 — Contratos y trazas publicada; V10 y versiones anteriores despublicadas. API de voz publicada por separado. Solo un receptor de Telegram. [Integración V11 y replay](docs/verificacion_v11.md).

Cuatro agentes con objetivos, datos y resultados distintos; contratos comunes efectivos en prompts y trazas. Dos SKILL.md incorporados al construir los prompts. Loop de corrección V1→V2 y control de consumo con cuatro pasos, USD0.04 por caso y reserva conservadora. Si no se exponen tokens al código, se utiliza una cota y no se afirma facturación exacta.

Comandos: `/nuevo Necesito 10 cuadernos y 5 plumas`, `/estado AULA-FOLIO`, `/aprobar AULA-FOLIO 1`, `/rechazar AULA-FOLIO 1`. Sustituir el folio por el devuelto. Propietario, versión, vigencia y cierre previo se validan.

El panel usa una exportación estática sanitizada de siete casos, con fecha y fuente; no es un registro en vivo. El asistente sí consulta la herramienta autenticada en n8n. Hay evidencia previa de dos consultas por voz y pruebas adicionales por texto de folio faltante, inexistente, error404 inducido y recuperación. Se verificaron vistas390/1366 y estados controlados de interfaz. El rechazo de micrófono y otra cuenta real de Telegram siguen sin acreditarse.

Tokens de tres casos cerrados y otras pruebas recuperados de logs. Costos equivalentes calculados con tarifa pública; plataforma y facturación Gateway no conciliadas. La optimización medida del agente de cotización es una muestra de tres pares, no ahorro garantizado del sistema completo.

## Validaciones antes de publicar

Con Node.js22, desde la raíz del repositorio:

```sh
node tests/validar_web.cjs
node tests/probar_guardrails.cjs
node tests/verificar_proyecto.cjs
node tests/contratos_agentes.cjs
```

Actions exige estas verificaciones antes de desplegar Pages. Existen ejecuciones de éxito, falla deliberada que bloqueó el despliegue y recuperación. Las pruebas locales usan datos sintéticos y no sustituyen una cuenta real adicional ni prueban concurrencia.

## Entrega y límites

La exportación n8n/workflow.json está inactiva, sin credenciales ni identificadores privados. Configurar usuario autorizado, tabla y credenciales personales al importar. No publicar archivos privados Papeleria_Aula_*.json de construcción. Los PDF y ZIP previos son cortes documentales; consultar las actualizaciones de docs/ y la matriz. Video y defensa individual pendientes. No se certifica una calificación.
