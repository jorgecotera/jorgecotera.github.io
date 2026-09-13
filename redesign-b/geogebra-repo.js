const geogebraMaterials=[
  ['Álgebra','Cubo de la suma','tBbsGFAY'],
  ['Geometría analítica','Parábola','CTeGmn3U'],
  ['Geometría analítica','Elipse','CnHD2aQQ'],
  ['Funciones','Función exponencial','HeXp9tpJ'],
  ['Coordenadas','Polares','UcA4K8QT'],
  ['Cálculo','Límites laterales','mjR93d2r'],
  ['Cálculo','Continuidad de una función','e7fJXPQ2'],
  ['Funciones','Varias funciones','fuzhuhgc'],
  ['Funciones','Más funciones','QbaDXWnm'],
  ['Funciones','Nuevas funciones','GfBD9WbN'],
  ['Estadística','Distribución normal','DtnPtDnr'],
  ['Modelación','Crecimiento de los pollos','vphffern'],
  ['Modelación','Construcción de viviendas','cxCdQpc4'],
  ['Geometría','Pitágoras 1','2332523'],
  ['Geometría','Pitágoras 2','58839'],
  ['Geometría','Pitágoras 3','1163593'],
  ['Geometría','Pitágoras 4','1164031']
];

if(/didactica\.html$/i.test(location.pathname)&&!document.querySelector('#repositorio-geogebra')){
  const anchor=document.querySelector('.section-strip');
  if(anchor){
    const section=document.createElement('section');
    section.className='section-body';
    section.id='repositorio-geogebra';
    const cards=geogebraMaterials.map(([category,title,id])=>{
      const href=`geogebra-material.html?id=${encodeURIComponent(id)}&title=${encodeURIComponent(title)}&category=${encodeURIComponent(category)}`;
      return `<a class="resource-card" href="${href}"><span class="resource-type">${category}</span><h3>${title}</h3><p>Material publicado en el repositorio GeoGebra de Jorge Cotera.</p><span>Cargar material →</span></a>`;
    }).join('');
    section.innerHTML=`<header class="section-heading"><div><p class="eyebrow">REPOSITORIO GEOGEBRA</p><h2>Materiales publicados en GeoGebra.</h2></div><p>Los materiales se cargan dentro del mismo escenario didáctico y cada visor conserva un acceso directo a la publicación original.</p></header><div class="resource-grid">${cards}</div><p style="margin:24px 0 0"><a class="resource-primary" href="https://www.geogebra.org/u/jorge+cotera" target="_blank" rel="noopener noreferrer">Ver perfil completo de Jorge Cotera en GeoGebra ↗</a></p>`;
    anchor.before(section);
  }
}
