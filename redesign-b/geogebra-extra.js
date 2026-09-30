const geogebraExtraGrid=document.querySelector('#geogebra-extra-grid');
if(geogebraExtraGrid&&Array.isArray(window.geogebraExtraMaterials)){
  geogebraExtraGrid.innerHTML=window.geogebraExtraMaterials.map(item=>{
    const query=new URLSearchParams({id:item.id,title:item.title,category:item.category});
    return `<a class="resource-card" href="geogebra-material.html?${query.toString()}">
      <span class="resource-type">${item.category}</span>
      <h3>${item.title}</h3>
      <p>Material adicional del repositorio público de GeoGebra que no estaba publicado en esta página.</p>
      <span>Abrir recurso →</span>
    </a>`;
  }).join('');
}
