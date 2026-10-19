const community2024Grade5 = Array.from({length:19},(_,i)=>({
  year:2024,
  grade:"5°",
  area:"Matemáticas · Secuencias didácticas",
  type:"PDF",
  title:`Secuencia Didáctica ${["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX"][i]}`,
  href:`../Sd%20-%20${i+1}.pdf`
}));

const community2024Grade7Titles = [
  ["My Wonderful Family","../1.%20My%20Wonderful%20Family.pdf"],
  ["My day","../2.%20My%20day.pdf"],
  ["My name is John","../3.%20My%20name%20is%20John.pdf"],
  ["A great summer vacation","../4.%20A%20great%20summer%20vacation.pdf"],
  ["At school","../5.%20At%20school.pdf"],
  ["My profesión","../6.%20My%20profesión.pdf"],
  ["Our vacation","../7.%20Our%20vacation.pdf"],
  ["Preparing food","../8.%20Preparing%20food.pdf"],
  ["The House","../9.%20The%20House.pdf"],
  ["Days of the week","../10.%20Days%20of%20the%20week.pdf"],
  ["Doctor","../11.%20Doctor.pdf"],
  ["Going to a restaurant","../12.%20Going%20to%20a%20restaurant.pdf"],
  ["Going to the Supermarket","../13.%20Going%20to%20the%20Supermarket.pdf"]
].map(([title,href])=>({year:2024,grade:"7°",area:"Inglés",type:"PDF",title,href}));

const community2022 = [
  {year:2022,grade:"General",area:"Archivo de aula",type:"VIDEO",title:"Video de interés",href:"https://www.youtube.com/watch?v=hWeOPQ2Mc3g",external:true},
  {year:2022,grade:"7°",area:"Recuperación",type:"PDF",title:"Examen Oral 7°",href:"../d/examen-oral-7"},
  {year:2022,grade:"8°",area:"Recuperación",type:"PDF",title:"Examen Oral 8°",href:"../d/examen-oral-8"},
  {year:2022,grade:"9°",area:"Recuperación",type:"PDF",title:"Examen Oral 9°",href:"../d/examen-oral-9"},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Prehistoria",href:"https://www.youtube.com/watch?v=3eKBaFpzRcE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Antigua",href:"https://www.youtube.com/watch?v=j8JJ7AfDL24",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Media",href:"https://www.youtube.com/watch?v=BrlM9-ZRkFA",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Renacimiento",href:"https://m.youtube.com/watch?v=hJcvoDRdbJo",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Moderna",href:"https://www.youtube.com/watch?v=6E2gGlK08JE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Contemporánea",href:"https://www.youtube.com/watch?v=FH1jNVFwfA0",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Geometría",type:"PDF",title:"Por qué enseñar pensamiento espacial",href:"../d/por-que-ensenar-pensamiento-espacial"},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 6 · Diferencia de Cubos",href:"../d/taller-6-diferencia-de-cubos"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cuadrados",href:"https://acortar.link/1rKOmi",external:true},
  {year:2022,grade:"General",area:"Filosofía",type:"VIDEO",title:"La Caverna de Platón",href:"https://www.youtube.com/watch?v=-1Y9OqSJKCc&t=177s",external:true},
  {year:2022,grade:"General",area:"Ciencia",type:"PDF",title:"Laboratorio",href:"../d/laboratorio"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"PDF",title:"Educación para la Sexualidad · Guía",href:"../d/educacion-para-la-sexualidad-guia"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cubos",href:"https://acortar.link/0yvvcu",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 3 · Generalización",href:"../d/taller-3-generalizacion"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"VIDEO",title:"Educación para la Sexualidad · Video",href:"https://www.youtube.com/watch?v=RUVuPmSGVWs",external:true},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Transformaciones",href:"https://www.geogebra.org/m/z5brhejb",external:true},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"Dos poemas de Rubén Darío",href:"https://www.google.com/url?sa=t&source=web&rct=j&url=https://revistas.ucm.es/index.php/ALHI/article/download/37351/36152/",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 5 · Diferencia de Cuadrados",href:"../d/taller-5-diferencia-de-cuadrados"},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"En primera persona · Mario Benedetti",href:"http://www.poetaspoemas.com/mario-benedetti/en-primera-persona",external:true},
  {year:2022,grade:"General",area:"Lectura · Sociedad",type:"LECTURA",title:"Documento de lectura",href:"http://www.scielo.org.mx/pdf/liminar/v18n1/1665-8027-liminar-18-01-00082.pdf",external:true}
];

const community2021 = [
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1JhFUDxhuVtJBIIYvXufJS3T_xIkzCYSj/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1",href:"https://drive.google.com/file/d/1HwWPkvGnumGMGKA6O9Ei5tzk31P0Ze5M/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../d/guia-2"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../d/guia-3-periodo-3"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../d/guia-4-periodo-4"},
  {year:2021,grade:"6°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../d/guia-numeros-racionales-q"},
  {year:2021,grade:"6°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../d/educacion-publica"},
  {year:2021,grade:"6°",area:"Ciencia · Sociedad",type:"PDF",title:"El Coronavirus",href:"../d/el-coronavirus"},

  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1l9F1_VW9OqVxTGV1k5r5X_wwT_Bd35-w/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Completa · Otras áreas",description:"Referencia histórica conservada; el enlace externo original ya no está disponible.",href:"",unavailable:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Material complementario",href:"https://drive.google.com/file/d/1TKnPaMSzATRcRMvhwiinTqKDvpIi9v-s/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../d/guia-2-2"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../d/guia-3-periodo-3-2"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../d/guia-4-periodo-4-2"},
  {year:2021,grade:"7°",area:"Ética",type:"GUÍA",title:"Guía 1 · Ética",href:"https://drive.google.com/file/d/1HxJ3mI8rIWbvc-tdpYytrxDEqCRSUgTz/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Historia · Sociedad",type:"PDF",title:"El Papel de la Historia",href:"../d/el-papel-de-la-historia"},
  {year:2021,grade:"7°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../d/guia-numeros-racionales-q"},
  {year:2021,grade:"7°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../d/educacion-publica"},
  {year:2021,grade:"7°",area:"Matemáticas · Período 4",type:"PDF",title:"7ºC P4 · Matemáticas",href:"../d/7oc-p4-matematicas"},
  {year:2021,grade:"7°",area:"Educación artística · Período 4",type:"PDF",title:"7ºC P4 · Educación Artística",href:"../d/7oc-p4-educacion-artistica"},
  {year:2021,grade:"7°",area:"Ética · Período 4",type:"PDF",title:"7ºC P4 · Educación Ética",href:"../d/7oc-p4-educacion-etica"},
  {year:2021,grade:"7°",area:"Educación física · Período 4",type:"PDF",title:"7ºC P4 · Educación Física",href:"../d/7oc-p4-educacion-fisica"},
  {year:2021,grade:"7°",area:"Educación religiosa · Período 4",type:"PDF",title:"7ºC P4 · Educación Religiosa",href:"../d/7oc-p4-educacion-religiosa"},
  {year:2021,grade:"7°",area:"Inglés · Período 4",type:"PDF",title:"7ºC P4 · Inglés",href:"../d/7oc-p4-ingles"},
  {year:2021,grade:"7°",area:"Lenguaje · Período 4",type:"PDF",title:"7ºC P4 · Lenguaje",href:"../d/7oc-p4-lenguaje"},
  {year:2021,grade:"7°",area:"Ciencias naturales · Período 4",type:"PDF",title:"7ºC P4 · Naturales",href:"../d/7oc-p4-naturales"},
  {year:2021,grade:"7°",area:"Ciencias sociales · Período 4",type:"PDF",title:"7ºC P4 · Sociales",href:"../d/7oc-p4-sociales"},
  {year:2021,grade:"7°",area:"Tecnología · Período 4",type:"PDF",title:"7ºC P4 · Tecnología",href:"../d/7oc-p4-tecnologia"},

  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Apoyo · Geometría",href:"../d/apoyo-geometria"},
  {year:2021,grade:"8°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../d/educacion-publica"},
  {year:2021,grade:"8°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../d/guia-numeros-racionales-q"},
  {year:2021,grade:"8°",area:"Álgebra",type:"PDF",title:"Taller 1 · Álgebra",href:"../d/taller-1-algebra"},
  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Taller Pitágoras",href:"../d/taller-pitagoras"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 1",href:"../Pitagoras%201.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 2",href:"../Pitagoras%202.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 3",href:"../Pitagoras%203.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 4",href:"../Pitagoras%204.htm"},
  {year:2021,grade:"8°",area:"Matemáticas · GeoGebra",type:"WEB",title:"Grupo de GeoGebra",description:"Referencia histórica conservada; la ruta externa original ya no está disponible.",href:"",unavailable:true}
];

const community2020Grade6 = [
  ["Sistema Numérico Posicional","../1%20-%20Sistema%20Numérico%20Posicional%20-%206.pdf"],
  ["Relaciones","../2%20-%20Relaciones%20-%206.pdf"],
  ["Interpretación de las Fracciones","../3%20-%20Interpretación%20de%20las%20Fracciones%20-%206.pdf"],
  ["Proporcionalidad","../4%20-%20Proporcionalidad%20-%206.pdf"],
  ["Cuerpos Geométricos","../5%20-%20Cuerpos%20Geométricos%20-%206.pdf"],
  ["Figuras Geométricas","../6%20-%20Figuras%20Geométricas%20-%206.pdf"],
  ["Proyecto 1 · Modelación de planos y cuerpos","../7%20-%20Proyecto%201%20-%20Modelación%20de%20planos%20y%20cuerpos%20-%206.pdf"],
  ["Proyecto 2 · Construcción y modelación","../8%20-%20Proyecto%202%20-%20Construcción%20y%20modelación%20-%206.pdf"],
  ["Ver y ser con los otros","../Ver%20y%20ser%20con%20los%20otros%20-%20Yuliana.pdf"]
].map(([title,href])=>({year:2020,grade:"6°",area:"Matemáticas · Acompañamiento en pandemia",type:"PDF",title,href}));

const community2020Grade7 = [
  ["Sistema Numérico Posicional","../1%20-%20Sistema%20Numerico%20Posicional.pdf"],
  ["Interpretación de las Fracciones","../2%20-%20Interpretacion%20de%20las%20Fracciones.pdf"],
  ["Ecuaciones","../3%20-%20Ecuaciones.pdf"],
  ["Más ecuaciones","../4%20-%20Mas%20ecuaciones.pdf"],
  ["Proporcionalidad y aplicación","../5%20-%20Proporcionalidad%20y%20aplicacion.pdf"],
  ["Enteros","../6%20-%20%20Enteros.pdf"],
  ["Proyecto 1 · Modelación de planos y cuerpos","../7%20-%20Proyecto%201%20-%20Modelacion%20de%20planos%20y%20cuerpos%20-.pdf"],
  ["Proyecto 2 · Construcción y modelación","../8%20-%20Proyecto%202%20-%20Construccion%20y%20modelacion%20-.pdf"]
].map(([title,href])=>({year:2020,grade:"7°",area:"Matemáticas · Acompañamiento en pandemia",type:"PDF",title,href}));

const community2020Media = [
  {year:2020,grade:"General",area:"Territorio · Ambiente",type:"VIDEO",title:"Día de la Madre Tierra · 22 de abril",href:"https://youtu.be/XGxhdTJwliE",external:true},
  {year:2020,grade:"General",area:"Matemáticas",type:"VIDEO",title:"Sistema Numérico Posicional",href:"https://www.youtube.com/watch?v=bTZuwjZlVjU",external:true},
  {year:2020,grade:"General",area:"Matemáticas",type:"VIDEO",title:"Más sobre potencias",href:"https://www.youtube.com/watch?v=vJTdcCnFVAM",external:true},
  {year:2020,grade:"General",area:"Pedagogía · Sociedad",type:"VIDEO",title:"Mensaje pedagógico · Sustantivamente político",href:"https://youtu.be/XBdPg9G5BB4",external:true},
  {year:2020,grade:"General",area:"Acompañamiento en pandemia",type:"VIDEO",title:"Mensaje complementario · Guías 7 y 8",href:"https://youtu.be/Y3N2R38QuGk",external:true},
  {year:2020,grade:"General",area:"Matemáticas · Probabilidad",type:"VIDEO",title:"Probabilidad · Guía 9",href:"https://youtu.be/W6tC4X5i5Is",external:true},
  {year:2020,grade:"General",area:"Comunidad · Encuentro",type:"VIDEO",title:"Encuentro Mat-Bio I",href:"https://www.youtube.com/watch?v=vgv1IbteH0U",external:true},
  {year:2020,grade:"General",area:"Comunidad · Encuentro",type:"VIDEO",title:"Encuentro Mat-Bio II",href:"https://www.youtube.com/watch?v=aLplCsV2cSs",external:true},
  {year:2020,grade:"General",area:"Ciencia · Sociedad",type:"PDF",title:"El Coronavirus",href:"../d/el-coronavirus"}
];

const community2016to2019 = [
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../d/plan-periodo-i-matematicas-9"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Evaluación",type:"PDF",title:"Rúbrica · Exposiciones",href:"../d/rubrica-exposiciones"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Cultura",type:"PDF",title:"Canción · El Retiro",href:"../d/cancion-el-retiro"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas · Cultura",type:"PDF",title:"Canción · Dios no me deja",href:"../d/cancion-dios-no-me-deja"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría",type:"VIDEO",title:"Relación Pitagórica",href:"https://www.youtube.com/watch?v=NxQuQqr0qG0",external:true},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Matemáticas",type:"PDF",title:"Taller en Casa",href:"../d/taller-en-casa"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica I",href:"../Pitagoras%201.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica II",href:"../Pitagoras%202.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica III",href:"../Pitagoras%203.htm"},
  {year:"2016–2019",sortYear:2019,grade:"9°",area:"Geometría · Interactivo",type:"HTML",title:"Solución Pitagórica IV",href:"../Pitagoras%204.htm"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"Plan · Período I",href:"../d/plan-periodo-i-fisica-9"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"El Concepto de Ciencia",href:"../d/el-concepto-de-ciencia"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"PDF",title:"Laboratorio",href:"../d/laboratorio"},
  {year:"2016–2019",sortYear:2019,grade:"Física",area:"Ciencia",type:"VIDEO",title:"El Concepto de Ciencia · Audio",href:"https://www.youtube.com/watch?v=be5m3cfGz1c",external:true},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../d/plan-periodo-i-matematicas-10"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Matemáticas",type:"PDF",title:"Proporción áurea",href:"../d/proporcion-aurea"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Universo a escala",href:"../d/universo-a-escala"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Universo a escala 2",href:"../d/universo-a-escala-2"},
  {year:"2016–2019",sortYear:2019,grade:"10°",area:"Modelación",type:"PDF",title:"Conversión Sistema Solar",href:"../d/conversion-sistema-solar"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Plan · Período I",href:"../d/plan-periodo-i-matematicas-11"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Axiomatización de los Reales",href:"../d/axiomatizacion-de-los-reales"},
  {year:"2016–2019",sortYear:2019,grade:"11°",area:"Matemáticas",type:"PDF",title:"Exposiciones sobre Axiomatización de Reales",href:"../d/exposiciones-sobre-axiomatizacion-de-reales"},
  {year:"2016–2019",sortYear:2019,grade:"General",area:"Evaluación",type:"PDF",title:"Resultados de la Evaluación I",href:"../d/resultados-de-la-evaluacion-i"}
];

window.communityContent = [
  {year:2026,grade:"General",area:"Comunidad · Blog",type:"WEB",title:"Aula Mat Bio",description:"Blog enlazado desde la Comunidad de aprendizaje.",href:"https://aulamatbio.blogspot.com/",external:true},
  {year:2026,grade:"General",area:"Educación · Sociedad",type:"PDF",title:"La escuela de Gustavo Petro",href:"../d/la-escuela-de-gustavo-petro"},

  {year:2025,grade:"8°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../d/planeacion-guia-1"},
  {year:2025,grade:"9°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../d/planeacion-guia-1-2"},

  ...community2024Grade5,
  {year:2024,grade:"5°",area:"Geometría",type:"PDF",title:"Material para Sólidos Platónicos",href:"../d/material-para-solidos-platonicos"},
  {year:2024,grade:"5°",area:"Aritmética",type:"PDF",title:"Taller de Mínimo Común Múltiplo",href:"../Sd%20-%208-a.pdf"},
  ...community2024Grade7Titles,
  {year:2024,grade:"8°",area:"Matemáticas",type:"PDF",title:"Taller · La relación",href:"../d/taller-la-relacion"},

  {year:2023,grade:"8°",area:"Matemáticas",type:"PDF",title:"Los números racionales · Taller 1",href:"../d/los-numeros-racionales-taller-1"},
  {year:2023,grade:"9°",area:"Matemáticas",type:"PDF",title:"Los números irracionales · Taller 1",href:"../d/los-numeros-irracionales-taller-1"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"El Concepto de Ciencia",href:"../d/el-concepto-de-ciencia"},
  {year:2023,grade:"9°",area:"Ciencia",type:"VIDEO",title:"El Concepto de Ciencia · Audio",href:"https://www.youtube.com/watch?v=be5m3cfGz1c",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Ciencia Física y Método Científico",href:"../d/ciencia-fisica-y-metodo-cientifico"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Medida y Método Científico",href:"../d/medida-y-metodo-cientifico"},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"Ciencia, política y cientificismo",href:"http://docs.politicascti.net/documents/Teoricos/Varsavsky_CPC.pdf",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"La ciencia, su método y filosofía",href:"https://users.dcc.uchile.cl/~cgutierr/cursos/INV/bunge_ciencia.pdf",external:true},
  {year:2023,grade:"9°",area:"Física",type:"PDF",title:"Vectores",href:"../d/vectores"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Qué es el movimiento",href:"../d/que-es-el-movimiento"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento y sistemas de referencia",href:"../d/movimiento-y-sistemas-de-referencia"},
  {year:2023,grade:"10°",area:"Ciencia",type:"LECTURA",title:"La historia del tiempo",description:"Referencia oficial del libro de Stephen Hawking en su editorial.",href:"https://www.penguinrandomhouse.com/books/77010/a-brief-history-of-time-by-stephen-hawking/",external:true},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme I",href:"../d/movimiento-rectilineo-uniforme-i"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme II",href:"../d/movimiento-rectilineo-uniforme-ii"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme III",href:"../d/movimiento-rectilineo-uniforme-iii"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Conceptos Básicos MRU-MUA-CL",href:"../d/conceptos-basicos-mru-mua-cl"},
  {year:2023,grade:"10°",area:"Educación para la sexualidad",type:"PDF",title:"Proyecto de Educación Sexual 2023",href:"../d/proyecto-de-educacion-sexual-2023"},

  ...community2022,
  ...community2021,
  ...community2020Grade6,
  ...community2020Grade7,
  ...community2020Media,
  ...community2016to2019
];
