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
    if(item?.title==='En primera persona · Mario Benedetti'){
      return {...item,href:'https://www.poetaspoemas.com/mario-benedetti/en-primera-persona'};
    }
    if(item?.year===2022&&item?.title==='Documento de lectura'&&item?.href?.includes('scielo.org.mx/pdf/liminar/')){
      return {...item,href:'https://www.scielo.org.mx/pdf/liminar/v18n1/1665-8027-liminar-18-01-00082.pdf'};
    }
    return item;
  });
}
