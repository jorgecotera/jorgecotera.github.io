// Correcciones de fidelidad documental aplicadas después de cargar el archivo histórico.
// Mantienen intacta la fuente original y ajustan únicamente la capa moderna.
if(Array.isArray(window.communityContent)){
  window.communityContent=window.communityContent.map(item=>{
    if(item?.title==='Dos poemas de Rubén Darío'){
      return {...item,href:'https://revistas.ucm.es/index.php/ALHI/article/download/37351/36152/'};
    }
    if(item?.year===2021&&item?.grade==='7°'&&item?.href==='https://drive.google.com/file/d/1TKnPaMSzATRcRMvhwiinTqKDvpIi9v-s/view?usp=sharing'){
      return {...item,title:'Guía 1'};
    }
    return item;
  });
}
