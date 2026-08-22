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
  {year:2022,grade:"7°",area:"Recuperación",type:"PDF",title:"Examen Oral 7°",href:"../EXAMEN%20ORAL%207°.pdf"},
  {year:2022,grade:"8°",area:"Recuperación",type:"PDF",title:"Examen Oral 8°",href:"../EXAMEN%20ORAL%208°.pdf"},
  {year:2022,grade:"9°",area:"Recuperación",type:"PDF",title:"Examen Oral 9°",href:"../EXAMEN%20ORAL%209°.pdf"},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Prehistoria",href:"https://www.youtube.com/watch?v=3eKBaFpzRcE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Antigua",href:"https://www.youtube.com/watch?v=j8JJ7AfDL24",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Media",href:"https://www.youtube.com/watch?v=BrlM9-ZRkFA",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Renacimiento",href:"https://m.youtube.com/watch?v=hJcvoDRdbJo",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Moderna",href:"https://www.youtube.com/watch?v=6E2gGlK08JE",external:true},
  {year:2022,grade:"General",area:"Educación artística",type:"VIDEO",title:"Arte · Edad Contemporánea",href:"https://www.youtube.com/watch?v=FH1jNVFwfA0",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Geometría",type:"PDF",title:"Enseñanza y Pensamiento Espacial",href:"../Ensenanza%20y%20pensamiento.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 6 · Diferencia de Cubos",href:"../TALLER%206.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cuadrados",href:"https://acortar.link/1rKOmi",external:true},
  {year:2022,grade:"General",area:"Filosofía",type:"VIDEO",title:"La Caverna de Platón",href:"https://www.youtube.com/watch?v=-1Y9OqSJKCc&t=177s",external:true},
  {year:2022,grade:"General",area:"Ciencia",type:"PDF",title:"Laboratorio",href:"../Laboratorio.pdf"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"PDF",title:"Educación para la Sexualidad · Guía",href:"../Educación%20para%20la%20Sexualidad.pdf"},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Diferencia de Cubos",href:"https://acortar.link/0yvvcu",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 3 · Generalización",href:"../TALLER%203.pdf"},
  {year:2022,grade:"General",area:"Educación para la sexualidad",type:"VIDEO",title:"Educación para la Sexualidad · Video",href:"https://www.youtube.com/watch?v=RUVuPmSGVWs",external:true},
  {year:2022,grade:"General",area:"Matemáticas · GeoGebra",type:"WEB",title:"Herramienta GeoGebra · Transformaciones",href:"https://www.geogebra.org/m/z5brhejb",external:true},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"Dos poemas de Rubén Darío",href:"https://www.google.com/url?sa=t&source=web&rct=j&url=https://revistas.ucm.es/index.php/ALHI/article/download/37351/36152/",external:true},
  {year:2022,grade:"General",area:"Matemáticas · Álgebra",type:"PDF",title:"Taller 5 · Diferencia de Cuadrados",href:"../TALLER%205.pdf"},
  {year:2022,grade:"General",area:"Lengua y literatura",type:"LECTURA",title:"En primera persona · Mario Benedetti",href:"http://www.poetaspoemas.com/mario-benedetti/en-primera-persona",external:true},
  {year:2022,grade:"General",area:"Lectura · Sociedad",type:"LECTURA",title:"Documento de lectura",href:"http://www.scielo.org.mx/pdf/liminar/v18n1/1665-8027-liminar-18-01-00082.pdf",external:true}
];

const community2021 = [
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1JhFUDxhuVtJBIIYvXufJS3T_xIkzCYSj/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1",href:"https://drive.google.com/file/d/1HwWPkvGnumGMGKA6O9Ei5tzk31P0Ze5M/view?usp=sharing",external:true},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../Guía%206%20-%20II.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../6ºA%20P3%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../6º%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"6°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"6°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"6°",area:"Ciencia · Sociedad",type:"PDF",title:"El Coronavirus",href:"../LCE.pdf"},

  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 0",href:"https://drive.google.com/file/d/1l9F1_VW9OqVxTGV1k5r5X_wwT_Bd35-w/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Completa · Otras áreas",href:"https://drive.google.com/file/d/10f8Tn4n5mK2LOrh7IEosXICzPtxPDI74/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Acompañamiento en pandemia",type:"GUÍA",title:"Guía 1 · Material complementario",href:"https://drive.google.com/file/d/1TKnPaMSzATRcRMvhwiinTqKDvpIi9v-s/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 2",href:"../Guía%207%20-%20II.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 3 · Período 3",href:"../7ºC%20P3%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas",type:"PDF",title:"Guía 4 · Período 4",href:"../7ºC%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Ética",type:"GUÍA",title:"Guía 1 · Ética",href:"https://drive.google.com/file/d/1HxJ3mI8rIWbvc-tdpYytrxDEqCRSUgTz/view?usp=sharing",external:true},
  {year:2021,grade:"7°",area:"Historia · Sociedad",type:"PDF",title:"El Papel de la Historia",href:"../El%20Papel%20de%20la%20Historia.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"7°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"7°",area:"Matemáticas · Período 4",type:"PDF",title:"7ºC P4 · Matemáticas",href:"../1.%207ºC%20P4%20Matemáticas%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Educación artística · Período 4",type:"PDF",title:"7ºC P4 · Educación Artística",href:"../2.%207ºC%20P4%20Ed.%20Artística%20-%20Merqui.pdf"},
  {year:2021,grade:"7°",area:"Ética · Período 4",type:"PDF",title:"7ºC P4 · Educación Ética",href:"../3.%207ºC%20P4%20Ed.%20Ética%20-%20Jorge.pdf"},
  {year:2021,grade:"7°",area:"Educación física · Período 4",type:"PDF",title:"7ºC P4 · Educación Física",href:"../4.%207ºC%20P4%20Ed.%20Física%20-%20Lindomar.pdf"},
  {year:2021,grade:"7°",area:"Educación religiosa · Período 4",type:"PDF",title:"7ºC P4 · Educación Religiosa",href:"../5.%207ºC%20P4%20Ed.%20Religiosa%20-%20Moisés.pdf"},
  {year:2021,grade:"7°",area:"Inglés · Período 4",type:"PDF",title:"7ºC P4 · Inglés",href:"../6.%207ºC%20P4%20Inglés%20-%20Eisner.pdf"},
  {year:2021,grade:"7°",area:"Lenguaje · Período 4",type:"PDF",title:"7ºC P4 · Lenguaje",href:"../7.%207ºC%20P4%20Lenguaje%20-%20Felicia.pdf"},
  {year:2021,grade:"7°",area:"Ciencias naturales · Período 4",type:"PDF",title:"7ºC P4 · Naturales",href:"../8.%207ºC%20P4%20Naturales%20-%20Diana%20Torres.pdf"},
  {year:2021,grade:"7°",area:"Ciencias sociales · Período 4",type:"PDF",title:"7ºC P4 · Sociales",href:"../9.%207ºC%20P4%20Sociales%20-%20Esther.pdf"},
  {year:2021,grade:"7°",area:"Tecnología · Período 4",type:"PDF",title:"7ºC P4 · Tecnología",href:"../10.%207ºC%20P4%20Tecnología%20-%20Didier.pdf"},

  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Apoyo · Geometría",href:"../Apoyo.pdf"},
  {year:2021,grade:"8°",area:"Educación · Sociedad",type:"PDF",title:"Educación Pública",href:"../Después%20de%20leer%20la%20publicación%20de%20la%20revista%20Educación%20y%20Cultura%20de%20Fecode-.pdf"},
  {year:2021,grade:"8°",area:"Matemáticas · Números racionales",type:"PDF",title:"Guía Números Racionales · Q",href:"../Guía%20Numeros%20Racionales%20-%20para%20Celular.pdf"},
  {year:2021,grade:"8°",area:"Álgebra",type:"PDF",title:"Taller 1 · Álgebra",href:"../Taller%201.pdf"},
  {year:2021,grade:"8°",area:"Geometría",type:"PDF",title:"Taller Pitágoras",href:"../Pitagoras-cuadernillo.pdf"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 1",href:"../Pitagoras%201.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 2",href:"../Pitagoras%202.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 3",href:"../Pitagoras%203.htm"},
  {year:2021,grade:"8°",area:"Geometría · Interactivo",type:"HTML",title:"Pitágoras · Actividad 4",href:"../Pitagoras%204.htm"},
  {year:2021,grade:"8°",area:"Matemáticas · GeoGebra",type:"WEB",title:"Grupo de GeoGebra",href:"https://www.geogebra.org/groups",external:true}
];

window.communityContent = [
  {year:2026,grade:"General",area:"Comunidad · Blog",type:"WEB",title:"Aula Mat Bio",description:"Blog enlazado desde la Comunidad de aprendizaje.",href:"https://aulamatbio.blogspot.com/",external:true},
  {year:2026,grade:"General",area:"Educación · Sociedad",type:"PDF",title:"La escuela de Gustavo Petro",href:"../La%20escuela%20de%20Gustavo%20Petro.pdf"},

  {year:2025,grade:"8°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../Planeación%20Guía%201%20-%208°.pdf"},
  {year:2025,grade:"9°",area:"Planeación",type:"PDF",title:"Planeación · Guía 1",href:"../Planeación%20Guía%201%20-%209°.pdf"},

  ...community2024Grade5,
  {year:2024,grade:"5°",area:"Geometría",type:"PDF",title:"Material para Sólidos Platónicos",href:"../Solidos%20Platonico.pdf"},
  {year:2024,grade:"5°",area:"Aritmética",type:"PDF",title:"Taller de Mínimo Común Múltiplo",href:"../Sd%20-%208-a.pdf"},
  ...community2024Grade7Titles,
  {year:2024,grade:"8°",area:"Matemáticas",type:"PDF",title:"Taller · La relación",href:"../Taller%20Fracciones.pdf"},

  {year:2023,grade:"8°",area:"Matemáticas",type:"PDF",title:"Los números racionales · Taller 1",href:"../Los%20números%20racionales%20-%20Q.pdf"},

  {year:2023,grade:"9°",area:"Matemáticas",type:"PDF",title:"Los números irracionales · Taller 1",href:"../Los%20números%20irracionales%20-%20I.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"El Concepto de Ciencia",href:"../El%20Concepto%20de%20Ciencia.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"VIDEO",title:"El Concepto de Ciencia · Audio",href:"https://www.youtube.com/watch?v=be5m3cfGz1c",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Ciencia Física y Método Científico",href:"../Ciencia%20Física%20y%20método%20científico.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"PDF",title:"Medida y Método Científico",href:"../Medida%20y%20Metodo%20Cientifico.pdf"},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"Ciencia, política y cientificismo",href:"http://docs.politicascti.net/documents/Teoricos/Varsavsky_CPC.pdf",external:true},
  {year:2023,grade:"9°",area:"Ciencia",type:"LECTURA",title:"La ciencia, su método y filosofía",href:"https://users.dcc.uchile.cl/~cgutierr/cursos/INV/bunge_ciencia.pdf",external:true},
  {year:2023,grade:"9°",area:"Física",type:"PDF",title:"Vectores",href:"../Vectores.pdf"},

  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Qué es el movimiento",href:"../Qué%20el%20movimiento.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento y sistemas de referencia",href:"../Movimiento%20y%20sistemas%20de%20referencia.pdf"},
  {year:2023,grade:"10°",area:"Ciencia",type:"LECTURA",title:"La historia del tiempo",href:"https://antroposmoderno.com/word/Stephen_Hawking_Historia_del_Tiempo.pdf",external:true},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme I",href:"../Ejercicios%20MAS%20-%20I.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme II",href:"../Ejercicios%20MAS%20-%20II.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Movimiento Rectilíneo Uniforme III",href:"../Ejercicios%20MAS%20-%20III.pdf"},
  {year:2023,grade:"10°",area:"Física",type:"PDF",title:"Conceptos Básicos MRU-MUA-CL",href:"../Conceptos%20Básicos.pdf"},
  {year:2023,grade:"10°",area:"Educación para la sexualidad",type:"PDF",title:"Proyecto de Educación Sexual 2023",href:"../Proyecto%20de%20Educación%20Sexual%202023.pdf"},

  ...community2022,
  ...community2021
];
