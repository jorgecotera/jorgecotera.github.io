const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.top nav');
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
}));

const content=window.siteContent||{slides:[],articles:[]};

// Galería de bienvenida: se alimenta desde content.js para poder actualizar fotos sin tocar la estructura.
const slidesRoot=document.querySelector('#welcome-slides');
const dotsRoot=document.querySelector('#slide-dots');
const caption=document.querySelector('#slide-caption');
let slideIndex=0;
let slideTimer=null;

if(slidesRoot&&content.slides.length){
  content.slides.forEach((item,index)=>{
    const slide=document.createElement('figure');
    slide.className=`slide${index===0?' active':''}`;
    slide.innerHTML=`<img src="${item.src}" alt="${item.alt}" loading="${index===0?'eager':'lazy'}">`;
    slidesRoot.appendChild(slide);
    const dot=document.createElement('button');
    dot.className=`slide-dot${index===0?' active':''}`;
    dot.setAttribute('aria-label',`Ver fotografía ${index+1}`);
    dot.addEventListener('click',()=>showSlide(index,true));
    dotsRoot.appendChild(dot);
  });
  startSlides();
}

function showSlide(index,restart=false){
  const allSlides=[...document.querySelectorAll('.slide')];
  const allDots=[...document.querySelectorAll('.slide-dot')];
  if(!allSlides.length)return;
  slideIndex=(index+allSlides.length)%allSlides.length;
  allSlides.forEach((el,i)=>el.classList.toggle('active',i===slideIndex));
  allDots.forEach((el,i)=>el.classList.toggle('active',i===slideIndex));
  if(caption)caption.textContent=content.slides[slideIndex]?.caption||'';
  if(restart)startSlides();
}
function startSlides(){
  clearInterval(slideTimer);
  if(content.slides.length>1)slideTimer=setInterval(()=>showSlide(slideIndex+1),5500);
}
document.querySelector('#prev-slide')?.addEventListener('click',()=>showSlide(slideIndex-1,true));
document.querySelector('#next-slide')?.addEventListener('click',()=>showSlide(slideIndex+1,true));
document.querySelector('.photo-stage')?.addEventListener('mouseenter',()=>clearInterval(slideTimer));
document.querySelector('.photo-stage')?.addEventListener('mouseleave',startSlides);

// Publicaciones: el orden depende de la fecha, no de la posición escrita en el HTML.
const articles=[...content.articles].sort((a,b)=>new Date(b.date)-new Date(a.date));
const latest=articles[0];
const latestRoot=document.querySelector('#latest-article');
if(latestRoot&&latest){
  latestRoot.innerHTML=`
    <div class="latest-image"><img src="${latest.image}" alt="Imagen de portada de ${latest.title}"><span class="latest-badge">ÚLTIMA PUBLICACIÓN</span></div>
    <div class="latest-copy">
      <div class="article-meta">${latest.displayDate} · ${latest.category}</div>
      <h3>${latest.title}</h3>
      <p class="subtitle">${latest.subtitle}</p>
      <p class="excerpt">${latest.excerpt}</p>
      <a class="read-link" href="${latest.href}">Leer artículo completo ↗</a>
    </div>`;
}

const recentRoot=document.querySelector('#recent-articles');
if(recentRoot){
  articles.slice(1,4).forEach((article,index)=>{
    const card=document.createElement('article');
    card.className='recent-card';
    card.innerHTML=`
      <span class="article-number">0${index+2}</span>
      <div class="article-meta">${article.displayDate}</div>
      <h4>${article.title}</h4>
      <p>${article.subtitle}</p>
      <a class="read-link" href="${article.href}">Leer →</a>`;
    recentRoot.appendChild(card);
  });
}