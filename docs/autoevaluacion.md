# Autoevaluación técnica de procedimientos y loops

Escala 0–4: 0 ausente, 1 descrito, 2 implementado sin prueba suficiente, 3 implementado y probado con límites declarados, 4 probado de forma repetida con trazas. Criterio de aceptación: 16/20 y ningún rubro menor que 3. Esta es una evaluación técnica de la implementación, no la calificación de la docente.

| Elemento | Propósito y entradas | Procedimiento y herramientas | Salida y criterio | Controles y límites | Evidencia y reutilización | Total |
|---|---:|---:|---:|---:|---:|---:|
| Skill cotización |4|4|4|3|4|19|
| Skill revisión |4|4|4|3|4|19|
| Loop calidad |4|4|4|3|3|18|
| Loop consumo V10 |4|3|3|3|3|16|

Skills: archivos SKILL.md incorporados al construir los prompts y reutilizados en casos041 y044; la ejecución corregida AULA-990100101 volvió a pasar por ambos. No se leen desde GitHub en cada petición. Calidad: caso045 con error controlado de diez pesos y corrección; no implica que un modelo haya cometido espontáneamente ese error. Consumo: prueba de bloqueo en ejecución44 y cuatro reservas/cierres en la ejecución corregida; estimación automática, no facturación.

Para elevar el loop de consumo a 4: recuperar tokenUsage de forma fiable, conciliar Gateway, medir el contexto completo con el tokenizador y probar concurrencia. Los límites declarados justifican una evaluación mínima, no una garantía de cumplimiento de toda la categoría de la rúbrica.
