const radarRoot=document.querySelector('#radar-grid');
const radarItems=[...(window.radarContent||[])].sort((a,b)=>new Date(b.date)-new Date(a.date));

if(radarRoot){
  radarItems.forEach(item=>{
    const article=document.createElement('article');
    article.className='radar-card';
    article.innerHTML=`
      <a class="radar-image" href="${item.href}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${item.title} en el sitio original">
        <img src="${item.image}" alt="Imagen de apoyo para ${item.title}" loading="lazy">
        <span class="radar-source">${item.source}</span>
      </a>
      <div class="radar-copy">
        <div class="radar-meta">${item.displayDate} · ${item.category}</div>
        <h3>${item.title}</h3>
        <p>${item.excerpt}</p>
        <a class="radar-link" href="${item.href}" target="_blank" rel="noopener noreferrer">Ir al contenido original ↗</a>
      </div>`;
    radarRoot.appendChild(article);
  });
}
