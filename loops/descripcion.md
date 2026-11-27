# Loops implementados

Calidad: propuesta V1 → validar contrato y cifras → corregir total desde cálculo autorizado → validar V2. Acotado a tres iteraciones y un segundo. Prueba controlada PRUEBA_LOOP con +10 en V1 y mismo caso_id. No corrige folio ni contrato arbitrariamente.

Consumo: verificar límite antes de cada especialista → reservar llamada → ejecutar especialista → propagar contador → verificar siguiente límite. Máximo cuatro llamadas, cuatro etapas diferentes. PRUEBA_LIMITE fija cero y bloquea antes del primer agente. No constituye aún medición y cierre automático por dólares consumidos.

