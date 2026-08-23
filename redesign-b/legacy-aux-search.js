const legacyAuxSearchItems=[
  {type:"Recurso",title:"Día E e Índice Sintético de Calidad Educativa",description:"Página histórica sobre política educativa, evaluación externa e Índice Sintético de Calidad Educativa.",href:"../E.htm",keywords:"archivo histórico Día E ISCE índice sintético calidad educativa evaluación política educativa"},
  {type:"Recurso",title:"Pica-Pica Nuevo",description:"Archivo histórico de la I.E. José María Córdoba de Pica-Pica Nuevo, Montelíbano: Ruta de la Calidad, caracterización y pruebas.",href:"../Pica%20Pica.htm",keywords:"Pica Pica José María Córdoba Montelíbano Ruta de la Calidad caracterización Fundación San Isidro"},
  {type:"Recurso",title:"Matemáticas 2020 · avances y documentos de consulta",description:"Página histórica con números reales, documentos de consulta, taller y videos de apoyo.",href:"../Matematicas%202.htm",keywords:"Matemáticas 2020 avances números reales Reales taller videos consulta"},
  {type:"Recurso",title:"Exposiciones P.E.I.",description:"Página auxiliar histórica sobre P.E.I., pensamiento crítico latinoamericano, bases epistemológicas y modelos pedagógicos.",href:"../Porta1%20Exposiciones.htm",keywords:"PEI exposiciones pensamiento crítico latinoamericano bases epistemológicas modelos estilos tendencias pedagógicas"},
  {type:"Recurso",title:"Acompañamiento de evaluación",description:"Página auxiliar histórica con sistema institucional de evaluación, diseño de pruebas e información de Wayra System.",href:"../Porta3%20Acompa%C3%B1amiento.htm",keywords:"evaluación acompañamiento SIEE diseño pruebas instrumentos Wayra System"},
  {type:"Recurso",title:"Exposiciones sobre evaluación",description:"Página auxiliar histórica con El Cuerpo de la Evaluación, evaluación por competencia y exposiciones.",href:"../Porta3%20Exposiciones.htm",keywords:"evaluación exposiciones cuerpo evaluación competencia panóptico"},
  {type:"Recurso",title:"Instrucciones de pruebas · 2021",description:"Página histórica con instrucciones y láminas de los tipos de pruebas aplicadas en abril de 2021.",href:"../Instruciones.htm",keywords:"instrucciones pruebas 2021 abril tipos prueba imágenes"},
  {type:"Recurso",title:"Saber 11 · respaldo histórico",description:"Versión de respaldo de la antigua página de orientación Saber 11 con clases, actividades y documentos.",href:"../Saber11%20-%20Respaldo.htm",keywords:"Saber 11 respaldo orientación clases actividades documentos ICFES histórico"}
];
if(Array.isArray(window.siteSearchStatic)){
  const existing=new Set(window.siteSearchStatic.map(item=>`${item.title}|${item.href}`));
  legacyAuxSearchItems.forEach(item=>{
    const key=`${item.title}|${item.href}`;
    if(!existing.has(key)){
      window.siteSearchStatic.push(item);
      existing.add(key);
    }
  });
}
