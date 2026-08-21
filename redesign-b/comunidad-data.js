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
  {year:2023,grade:"10°",area:"Educación para la sexualidad",type:"PDF",title:"Proyecto de Educación Sexual 2023",href:"../Proyecto%20de%20Educación%20Sexual%202023.pdf"}
];
