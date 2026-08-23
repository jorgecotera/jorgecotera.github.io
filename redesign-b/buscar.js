const staticItems=[...(window.siteSearchStatic||[])];
const articleSources=[...(window.siteContent?.articles||[]),...(window.archiveLegacy||[])];
const ownArticles=articleSources.map(item=>({
  type:"Publicación",
  title:item.title,
  description:item.subtitle||item.excerpt||item.displayDate||"Publicación del archivo",
  href:item.href,
  keywords:`${item.category||''} ${item.displayDate||''}`
}));
const relatedArticleItems=articleSources.flatMap(article=>(article.related||[]).map(resource=>({
  type:"Recurso",
  title:resource.label||`Recurso asociado · ${article.title}`,
  description:`Recurso asociado a «${article.title}»`,
  href:resource.href,
  keywords:`${article.title} ${article.category||''} ${article.displayDate||''} recurso asociado plegable Calaméo`,
  external:/^https?:\/\//i.test(resource.href||'')
})));
const libraryItems=[...(window.libraryContent||[])].map(item=>({
  type:"Biblioteca",
  title:item.title,
  description:item.category,
  href:item.href,
  keywords:`${item.category} ${item.type}`
}));
const communityItems=[...(window.communityContent||[])].map(item=>({
  type:"Comunidad",
  title:item.title,
  description:`${item.year} · ${item.grade} · ${item.area}`,
  href:item.href,
  keywords:`${item.year} ${item.grade} ${item.area} ${item.type} ${item.description||''}`,
  external:item.external===true
}));
const radarItems=[...(window.radarContent||[])].map(item=>({
  type:"Radar",
  title:item.title,
  description:`${item.source} · ${item.excerpt}`,
  href:item.href,
  keywords:`${item.category} ${item.source} ${item.displayDate}`,
  external:true
}));

function normalize(value=''){
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function queryTerms(value=''){
  return normalize(value).split(/[^a-z0-9]+/).filter(Boolean);
}

// El índice reúne varias fuentes. Solo se elimina una coincidencia cuando título y ruta son iguales,
// de modo que un mismo documento pueda conservar contextos distintos si aparece con otro título.
const rawItems=[...staticItems,...ownArticles,...relatedArticleItems,...libraryItems,...communityItems,...radarItems];
const seenItems=new Set();
const allItems=rawItems.filter(item=>{
  const key=`${String(item.href||'').toLocaleLowerCase('es')}|${normalize(item.title||'')}`;
  if(seenItems.has(key))return false;
  seenItems.add(key);
  return true;
});

const form=document.querySelector('#site-search-form');
const input=document.querySelector('#site-search-input');
const typeSelect=document.querySelector('#site-search-type');
const results=document.querySelector('#site-search-results');
const count=document.querySelector('#site-search-count');
const empty=document.querySelector('#site-search-empty');

const typeOrder=['Sección','Publicación','Biblioteca','Comunidad','Recurso','Radar'];
const typeRank=type=>{
  const index=typeOrder.indexOf(type);
  return index===-1?typeOrder.length:index;
};
const availableTypes=[...new Set(allItems.map(item=>item.type))].sort((a,b)=>typeRank(a)-typeRank(b)||a.localeCompare(b,'es'));
availableTypes.forEach(type=>typeSelect?.insertAdjacentHTML('beforeend',`<option value="${type}">${type}</option>`));

// Recupera una búsqueda compartida o previamente copiada desde la barra de direcciones.
const initialParams=new URLSearchParams(location.search);
const initialQuery=initialParams.get('q')||'';
const initialType=initialParams.get('type')||'all';
if(input)input.value=initialQuery;
if(typeSelect&&availableTypes.includes(initialType))typeSelect.value=initialType;

function score(item,q){
  if(!q)return item.type==='Sección'?20:0;
  const title=normalize(item.title);
  const description=normalize(item.description||'');
  const keywords=normalize(item.keywords||'');
  const haystack=`${title} ${description} ${keywords}`;
  const terms=queryTerms(q);
  if(!terms.length)return item.type==='Sección'?20:0;
  if(!terms.every(term=>haystack.includes(term)))return 0;

  let value=terms.length*8;
  if(title===q)value+=120;
  if(title.startsWith(q))value+=65;
  if(title.includes(q))value+=42;
  if(description.includes(q))value+=20;
  if(keywords.includes(q))value+=16;

  terms.forEach(term=>{
    if(title.startsWith(term))value+=14;
    else if(title.includes(term))value+=10;
    if(description.includes(term))value+=5;
    if(keywords.includes(term))value+=4;
  });
  return value;
}

function syncUrl(){
  const params=new URLSearchParams();
  const rawQuery=input?.value.trim()||'';
  const selectedType=typeSelect?.value||'all';
  if(rawQuery)params.set('q',rawQuery);
  if(selectedType!=='all')params.set('type',selectedType);
  const next=`${location.pathname}${params.size?`?${params}`:''}`;
  history.replaceState(null,'',next);
}

function render(updateUrl=false){
  const q=normalize(input?.value.trim()||'');
  const selectedType=typeSelect?.value||'all';
  const filtered=allItems
    .map(item=>({...item,_score:score(item,q)}))
    .filter(item=>{
      const matchesType=selectedType==='all'||item.type===selectedType;
      const matchesQuery=q?item._score>0:(selectedType==='all'?item.type==='Sección':true);
      return matchesType&&matchesQuery;
    })
    .sort((a,b)=>b._score-a._score||typeRank(a.type)-typeRank(b.type)||a.title.localeCompare(b.title,'es'));

  if(count){
    count.textContent=q||selectedType!=='all'
      ?`${filtered.length} ${filtered.length===1?'resultado':'resultados'}`
      :`${filtered.length} secciones principales`;
  }
  if(empty)empty.hidden=filtered.length!==0;
  if(results){
    results.innerHTML=filtered.map(item=>{
      const external=item.external||/^https?:\/\//i.test(item.href);
      return `<a class="search-result" href="${item.href}" ${external?'target="_blank" rel="noopener noreferrer"':''}>
        <span class="search-type">${item.type}</span>
        <span class="search-main"><strong>${item.title}</strong><small>${item.description||''}</small></span>
        <b aria-hidden="true">${external?'↗':'→'}</b>
      </a>`;
    }).join('');
  }
  if(updateUrl)syncUrl();
}

form?.addEventListener('submit',event=>{event.preventDefault();render(true);});
input?.addEventListener('input',()=>render(true));
typeSelect?.addEventListener('change',()=>render(true));
render(false);
if(initialQuery)input?.focus();
