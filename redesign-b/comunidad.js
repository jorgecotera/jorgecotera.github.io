const communityItems=[...(window.communityContent||[])];
const search=document.querySelector('#community-search');
const year=document.querySelector('#community-year');
const grade=document.querySelector('#community-grade');
const count=document.querySelector('#community-count');
const root=document.querySelector('#community-groups');
const empty=document.querySelector('#community-empty');

const years=[...new Set(communityItems.map(item=>item.year))].sort((a,b)=>b-a);
years.forEach(value=>year?.insertAdjacentHTML('beforeend',`<option value="${value}">${value}</option>`));
const grades=[...new Set(communityItems.map(item=>item.grade))].sort((a,b)=>a.localeCompare(b,'es',{numeric:true}));
grades.forEach(value=>grade?.insertAdjacentHTML('beforeend',`<option value="${value}">${value}</option>`));

function normalize(value=''){
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

function renderCommunity(){
  const q=normalize(search?.value||'');
  const selectedYear=year?.value||'all';
  const selectedGrade=grade?.value||'all';
  const filtered=communityItems.filter(item=>{
    const haystack=normalize(`${item.title} ${item.description||''} ${item.area} ${item.grade} ${item.year}`);
    return (!q||haystack.includes(q))
      &&(selectedYear==='all'||String(item.year)===selectedYear)
      &&(selectedGrade==='all'||item.grade===selectedGrade);
  }).sort((a,b)=>b.year-a.year||a.grade.localeCompare(b.grade,'es',{numeric:true})||a.title.localeCompare(b.title,'es'));

  if(count)count.textContent=`${filtered.length} ${filtered.length===1?'recurso':'recursos'}`;
  if(empty)empty.hidden=filtered.length!==0;
  if(!root)return;

  const byYear=new Map();
  filtered.forEach(item=>{
    if(!byYear.has(item.year))byYear.set(item.year,[]);
    byYear.get(item.year).push(item);
  });

  root.innerHTML=[...byYear.entries()].map(([groupYear,items])=>`
    <section class="community-group">
      <h2>${groupYear}</h2>
      <div class="community-list">
        ${items.map(item=>{
          const external=item.external||/^https?:\/\//i.test(item.href);
          return `<a class="community-item" href="${item.href}" ${external?'target="_blank" rel="noopener noreferrer"':''}>
            <span class="community-type">${item.type}</span>
            <span class="community-copy">
              <small>${item.grade} · ${item.area}</small>
              <strong>${item.title}</strong>
              ${item.description?`<span>${item.description}</span>`:''}
            </span>
            <b aria-hidden="true">${external?'↗':'→'}</b>
          </a>`;
        }).join('')}
      </div>
    </section>`).join('');
}

search?.addEventListener('input',renderCommunity);
year?.addEventListener('change',renderCommunity);
grade?.addEventListener('change',renderCommunity);
renderCommunity();
