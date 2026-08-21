const staticItems=[...(window.siteSearchStatic||[])];
const ownArticles=[...(window.siteContent?.articles||[]),...(window.archiveLegacy||[])].map(item=>({
  type:"Publicación",
  title:item.title,
  description:item.subtitle||item.excerpt||item.displayDate||"Publicación del archivo",
  href:item.href,
  keywords:`${item.category||''} ${item.displayDate||''}`
}));
const libraryItems=[...(window.libraryContent||[])].map(item=>({
  type:"Biblioteca",
  title:item.title,
  description:item.category,
  href:item.href,
  keywords:`${item.category} ${item.type}`
}));
const radarItems=[...(window.radarContent||[])].map(item=>({
  type:"Radar",
  title:item.title,
  description:`${item.source} · ${item.excerpt}`,
  href:item.href,
  keywords:`${item.category} ${item.source} ${item.displayDate}`,
  external:true
}));

const allItems=[...staticItems,...ownArticles,...libraryItems,...radarItems];
const form=document.querySelector('#site-search-form');
const input=document.querySelector('#site-search-input');
const typeSelect=document.querySelector('#site-search-type');
const results=document.querySelector('#site-search-results');
const count=document.querySelector('#site-search-count');
const empty=document.querySelector('#site-search-empty');

const typeOrder=['Sección','Publicación','Biblioteca','Recurso','Radar'];
const availableTypes=[...new Set(allItems.map(item=>item.type))].sort((a,b)=>typeOrder.indexOf(a)-typeOrder.indexOf(b));
availableTypes.forEach(type=>typeSelect?.insertAdjacentHTML('beforeend',`<option value="${type}">${type}</option>`));

function normalize(value=''){
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function score(item,q){
  if(!q)return item.type==='Sección'?20:0;
  const title=normalize(item.title);
  const description=normalize(item.description||'');
  const keywords=normalize(item.keywords||'');
  let value=0;
  if(title===q)value+=100;
  if(title.startsWith(q))value+=60;
  if(title.includes(q))value+=40;
  if(description.includes(q))value+=18;
  if(keywords.includes(q))value+=14;
  return value;
}

function render(){
  const q=normalize(input?.value.trim()||'');
  const selectedType=typeSelect?.value||'all';
  let filtered=allItems
    .map(item=>({...item,_score:score(item,q)}))
    .filter(item=>{
      const matchesType=selectedType==='all'||item.type===selectedType;
      const matchesQuery=q?item._score>0:(selectedType==='all'?item.type==='Sección':true);
      return matchesType&&matchesQuery;
    })
    .sort((a,b)=>b._score-a._score||typeOrder.indexOf(a.type)-typeOrder.indexOf(b.type)||a.title.localeCompare(b.title,'es'));

  if(count){
    count.textContent=q||selectedType!=='all'
      ?`${filtered.length} ${filtered.length===1?'resultado':'resultados'}`
      :`${filtered.length} secciones principales`;
  }
  if(empty)empty.hidden=filtered.length!==0;
  if(!results)return;

  results.innerHTML=filtered.map(item=>{
    const external=item.external||/^https?:\/\//i.test(item.href);
    return `<a class="search-result" href="${item.href}" ${external?'target="_blank" rel="noopener noreferrer"':''}>
      <span class="search-type">${item.type}</span>
      <span class="search-main"><strong>${item.title}</strong><small>${item.description||''}</small></span>
      <b aria-hidden="true">${external?'↗':'→'}</b>
    </a>`;
  }).join('');
}

form?.addEventListener('submit',event=>{event.preventDefault();render();});
input?.addEventListener('input',render);
typeSelect?.addEventListener('change',render);
render();
