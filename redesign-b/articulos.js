function compareChronology(a,b){
  const keyA=a.sortKey||a.date||'0000';
  const keyB=b.sortKey||b.date||'0000';
  const byKey=keyB.localeCompare(keyA,'en');
  return byKey||((b.sourceOrder||0)-(a.sourceOrder||0));
}

const structured=[...(window.siteContent?.articles||[])];
const historical=[...(window.archiveLegacy||[])];
const allArticles=[...structured,...historical]
  .map(item=>({...item,year:item.year??null}))
  .sort(compareChronology);

const list=document.querySelector('#archive-list');
const search=document.querySelector('#archive-search');
const yearSelect=document.querySelector('#archive-year');
const categorySelect=document.querySelector('#archive-category');
const empty=document.querySelector('#archive-empty');
const count=document.querySelector('#archive-count');

const years=[...new Set(allArticles.map(a=>a.year).filter(Boolean))].sort((a,b)=>b-a);
years.forEach(year=>yearSelect?.insertAdjacentHTML('beforeend',`<option value="${year}">${year}</option>`));
if(allArticles.some(a=>!a.year))yearSelect?.insertAdjacentHTML('beforeend','<option value="undated">Sin fecha indicada</option>');

const categories=[...new Set(allArticles.flatMap(a=>a.category.split('·').map(v=>v.trim())).filter(Boolean))]
  .sort((a,b)=>a.localeCompare(b,'es'));
categories.forEach(category=>categorySelect?.insertAdjacentHTML('beforeend',`<option value="${category}">${category}</option>`));

function normalize(value=''){
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function render(){
  const q=normalize(search?.value||'');
  const year=yearSelect?.value||'all';
  const category=categorySelect?.value||'all';

  const filtered=allArticles.filter(article=>{
    const haystack=normalize(`${article.title} ${article.subtitle||''} ${article.category} ${article.displayDate}`);
    const matchesText=!q||haystack.includes(q);
    const matchesYear=year==='all'||(year==='undated'?!article.year:String(article.year)===year);
    const matchesCategory=category==='all'||article.category.split('·').map(v=>v.trim()).includes(category);
    return matchesText&&matchesYear&&matchesCategory;
  });

  if(count){
    count.textContent=`${filtered.length} ${filtered.length===1?'publicación':'publicaciones'}`;
    count.setAttribute('aria-live','polite');
  }
  if(empty)empty.hidden=filtered.length!==0;
  if(!list)return;
  list.innerHTML=filtered.map(article=>{
    const external=/^https?:\/\//i.test(article.href);
    const detail=article.subtitle||article.excerpt||'';
    return `
    <article class="archive-item">
      <div class="archive-date">${article.displayDate}</div>
      <div class="archive-main">
        <div class="archive-category">${article.category}</div>
        <h2>${article.title}</h2>
        ${detail?`<p>${detail}</p>`:''}
      </div>
      <a class="archive-action" href="${article.href}" ${external?'target="_blank" rel="noopener noreferrer"':''}>${external?'Abrir referencia':'Leer documento'} ↗</a>
    </article>`;
  }).join('');
}

search?.addEventListener('input',render);
yearSelect?.addEventListener('change',render);
categorySelect?.addEventListener('change',render);
render();
