const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.top nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

const structured=[...(window.siteContent?.articles||[])];
const historical=[...(window.archiveLegacy||[])];
const allArticles=[...structured,...historical]
  .map(item=>({...item,year:new Date(item.date).getFullYear()}))
  .sort((a,b)=>new Date(b.date)-new Date(a.date));

const list=document.querySelector('#archive-list');
const search=document.querySelector('#archive-search');
const yearSelect=document.querySelector('#archive-year');
const categorySelect=document.querySelector('#archive-category');
const empty=document.querySelector('#archive-empty');
const count=document.querySelector('#archive-count');

const years=[...new Set(allArticles.map(a=>a.year))].sort((a,b)=>b-a);
years.forEach(year=>yearSelect?.insertAdjacentHTML('beforeend',`<option value="${year}">${year}</option>`));

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
    const matchesYear=year==='all'||String(article.year)===year;
    const matchesCategory=category==='all'||article.category.split('·').map(v=>v.trim()).includes(category);
    return matchesText&&matchesYear&&matchesCategory;
  });

  if(count)count.textContent=`${filtered.length} ${filtered.length===1?'publicación':'publicaciones'}`;
  if(empty)empty.hidden=filtered.length!==0;
  if(!list)return;
  list.innerHTML=filtered.map(article=>`
    <article class="archive-item">
      <div class="archive-date">${article.displayDate}</div>
      <div class="archive-main">
        <div class="archive-category">${article.category}</div>
        <h2>${article.title}</h2>
        <p>${article.subtitle||article.excerpt||''}</p>
      </div>
      <a class="archive-action" href="${article.href}">Leer documento ↗</a>
    </article>`).join('');
}

search?.addEventListener('input',render);
yearSelect?.addEventListener('change',render);
categorySelect?.addEventListener('change',render);
render();