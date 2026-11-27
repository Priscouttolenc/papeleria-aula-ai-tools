# Papelería Aula

Proyecto académico de cotizaciones con empresa y precios ficticios. Telegram recibe pedidos, n8n coordina cuatro agentes, valida cifras y guarda casos. Una persona aprueba o rechaza una versión; no se realizan compras, pagos ni envíos.

- [Sitio publicado](https://priscouttolenc.github.io/papeleria-aula-ai-tools/)
- [Reproducción](docs/reproduccion.md)
- [Arquitectura y límites](docs/arquitectura.md)
- [Matriz de pruebas](tests/matriz_pruebas.csv)
- [Tokens y costos](costos/costos.csv)
- [Guion de demostración](docs/guion_demo.md)
- [Pendientes de entrega](docs/pendientes.md)

## Estado comprobado

Pedidos y consultas de estado por Telegram, aprobación y rechazo simulados, bloqueo de versión incorrecta y vencimiento. Dos skills incorporados a los prompts. Corrección controlada de total V1 a V2 y límite de llamadas en la versión V9. Widget de ElevenLabs publicado en Pages con consultas autenticadas al mismo registro de casos y al catálogo. Actions registra éxito, falla deliberada que bloqueó el despliegue y recuperación.

El 26 de noviembre se despublicó V6 y se publicó V9 como único receptor de Telegram. La API de voz continúa publicada por separado. La prueba productiva posterior generó AULA-136595049 por $76 MXN y registró su aprobación simulada. La exportación workflow.json corresponde a V9 y se entrega inactiva por seguridad.

## Datos y costos

El panel utiliza una exportación estática sanitizada de siete casos, no una consulta en vivo. El asistente sí consulta n8n al usar su herramienta. Tokens de cuatro cotizaciones medidos desde logs; costos de modelo estimados con tarifa pública. Créditos de dos conversaciones de ElevenLabs medidos. La facturación exacta de Gateway no está reconciliada.

## Comandos

`/nuevo Necesito 10 cuadernos y 5 plumas`

`/estado AULA-FOLIO` · `/aprobar AULA-FOLIO 1` · `/rechazar AULA-FOLIO 1`

Sustituir AULA-FOLIO por el folio numérico devuelto. Las decisiones exigen propietario, versión y vigencia correctos.

## Pruebas reproducibles

Con Node.js instalado, desde la raíz del repositorio:

```sh
node tests/validar_web.cjs
node tests/probar_guardrails.cjs
```

Las pruebas de guardrails usan entradas sintéticas contra el router exportado. No sustituyen la prueba de otra cuenta real de Telegram ni una prueba de concurrencia. Consulta la matriz para ver qué se comprobó en cada entorno.

