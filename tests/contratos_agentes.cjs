const fs=require('node:fs'),assert=require('node:assert/strict');
const w=JSON.parse(fs.readFileSync(process.argv[2]||'n8n/workflow.json','utf8'));const get=n=>w.nodes.find(x=>x.name===n);
const allowed=get('Telegram Trigger').parameters.additionalFields.userIds.split(',')[0];
const b={caso_id:'AULA-123',modo:'SIMULADO',solicitud:'2 cuadernos',recepcion:{productos:[{producto:'cuaderno',cantidad:2}]},catalogo:{estado:'validado'},calculo:{total_mxn:70,version:1,moneda:'MXN'},cotizacion:{total_mxn:70}};
const state={'Telegram Trigger':{message:{from:{id:allowed},text:'/nuevo 2 cuadernos'}},'Edit Fields':b};const roles=['recepcion','catalogo','cotizacion','revision'];const models=['OpenAI Chat Model','Modelo Catalogo','Modelo Agente 3 - Cotizacion','Modelo Agente 4 - Revision'];
const lookup=n=>({first:()=>({json:state[n]})});
for(let i=1;i<=4;i++){
 const ctl=new Function('$','$input','$execution',get('Control llamada '+i).parameters.jsCode);
 const c=ctl(lookup,{first:()=>({json:b})},{id:'prueba-local'})[0].json;state['Control llamada '+i]=c;
 for(const k of ['caso_id','canal','usuario_alias','objetivo','datos','modo','limite_costo'])assert(k in c.contrato_entrada,'Falta entrada '+k);
 assert.equal(c.contrato_entrada.caso_id,b.caso_id);assert.equal(get(['AI Agent','Agente 2 - Catalogo','Agente 3 - Cotizacion','Agente 4 - Revision'][i-1]).parameters.text,'={{ JSON.stringify($json.contrato_entrada) }}');
 // Fixed synthetic usage exercises the adapter; it is not a provider measurement.
 state[models[i-1]]={tokenUsage:{promptTokens:100,completionTokens:50}};
 const post=new Function('$','$input',get('Registrar consumo '+i).parameters.jsCode);
 const modelResult={caso_id:b.caso_id,agente:roles[i-1],estado:'validado'};
 const r=post(lookup,{first:()=>({json:{output:JSON.stringify(modelResult)}})})[0].json;state['Registrar consumo '+i]=r;
 for(const k of ['caso_id','agente','estado','resultado','fuentes','advertencias','duracion_ms','consumo_ref'])assert(k in r.contrato_salida,'Falta salida '+k);
 assert.equal(r.contrato_salida.caso_id,b.caso_id);assert.equal(r.contrato_salida.consumo_ref,'prueba-local-'+i);assert(r.contrato_salida.duracion_ms>=0);assert.equal(r.control_consumo.traza.length,i);
 assert.throws(()=>post(lookup,{first:()=>({json:{output:JSON.stringify({...modelResult,caso_id:'AULA-OTRO'})}})}),/IDENTIDAD_INVALIDA/);
}
assert.equal(state['Registrar consumo 4'].control_consumo.traza.length,4);
assert(state['Registrar consumo 4'].control_consumo.traza.every(x=>x.contrato_entrada&&x.contrato_salida));
console.log('Cuatro contratos completos y referencias persistidas: PASS. Folio ajeno rechazado en cuatro roles. Datos sintéticos, sin llamadas a proveedores.');
