const libraryItems=[...(window.libraryContent||[])];
const list=document.querySelector('#library-list');
const search=document.querySelector('#library-search');
const category=document.querySelector('#library-category');
const count=document.querySelector('#library-count');
const empty=document.querySelector('#library-empty');

const categories=[...new Set(libraryItems.map(item=>item.category))].sort((a,b)=>a.localeCompare(b,'es'));
categories.forEach(value=>category?.insertAdjacentHTML('beforeend',`<option value="${value}">${value}</option>`));

function normalize(value=''){
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function renderLibrary(){
  const q=normalize(search?.value||'');
  const selected=category?.value||'all';
  const filtered=libraryItems.filter(item=>{
    const matchesText=!q||normalize(`${item.title} ${item.category} ${item.type}`).includes(q);
    const matchesCategory=selected==='all'||item.category===selected;
    return matchesText&&matchesCategory;
  });

  if(count)count.textContent=`${filtered.length} ${filtered.length===1?'documento':'documentos'}`;
  if(empty)empty.hidden=filtered.length!==0;
  if(!list)return;
  list.innerHTML=filtered.map(item=>`
    <a class="library-item" href="${item.href}" target="_blank" rel="noopener">
      <span class="library-type">${item.type}</span>
      <span class="library-copy"><small>${item.category}</small><strong>${item.title}</strong></span>
      <b aria-hidden="true">↗</b>
    </a>`).join('');
}

search?.addEventListener('input',renderLibrary);
category?.addEventListener('change',renderLibrary);
renderLibrary();
