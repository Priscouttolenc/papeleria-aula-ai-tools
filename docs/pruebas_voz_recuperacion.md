# Pruebas de errores y recuperación del asistente

Fecha:27/11/2026. Canal de esta prueba: chat de texto del widget de ElevenLabs en GitHub Pages. Las pruebas de audio de consulta de folio y catálogo fueron realizadas previamente por la estudiante. No se presenta esta sesión como audio.

1. Sin folio: el agente solicitó el identificador exacto y no atribuyó un estado al caso.
2. AULA-99999999999999999999: la herramienta se ejecutó y devolvió caso no encontrado; el agente lo comunicó sin inventar un resultado.
3. API controladamente despublicada: la llamada de consultar_papeleria_aula falló con404. El agente indicó que la herramienta no estaba disponible y derivó a Telegram, sin afirmar un estado. Se desactivó únicamente la API de consulta; el receptor de Telegram permaneció publicado.
4. API restaurada: la herramienta recuperó AULA-136595025 como aprobado_simulado, versión1, total390MXN. La API quedó publicada al finalizar.

Historial de ElevenLabs: conv_2601m8dtx3f2ekxbxp1q0zjb9tfz. El resumen confirma el error404 y la recuperación; la transcripción muestra herramienta exitosa, fallida y exitosa. n8n: ejecución47 para el folio inexistente y48 para la recuperación. Una solicitud a un webhook despublicado no genera una ejecución del workflow: su fallo se conserva en ElevenLabs.

Consumo medido:279 créditos=120 plataforma+159 LLM;7turnos facturados; componente LLMUSD0.0159. Sesión de texto274 segundos, no minutos de audio. No convertir los créditos aUSD sin tarifa conciliada ni sumarlos de nuevo al componente LLM.

Se intentó iniciar una llamada para comprobar la negativa de micrófono, pero el entorno de control quedó en Conectando y no expuso un rechazo comprobable. Se cerró el intento recargando la página y se verificó que no quedara una llamada activa. Por tanto, micrófono denegado permanece pendiente; una conexión sin completar no se registra como prueba aprobada.
