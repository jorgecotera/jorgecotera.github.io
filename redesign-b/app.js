const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.top nav');
const topBar=document.querySelector('.top');

function closeMenu({restoreFocus=false}={}){
  if(!nav)return;
  const wasOpen=nav.classList.contains('open');
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
  if(restoreFocus&&wasOpen)menuButton?.focus();
}

if(menuButton&&nav){
  if(!nav.id)nav.id='site-navigation';
  menuButton.setAttribute('aria-controls',nav.id);
  menuButton.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>closeMenu()));

  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&nav.classList.contains('open')){
      event.preventDefault();
      closeMenu({restoreFocus:true});
    }
  });

  document.addEventListener('pointerdown',event=>{
    if(!nav.classList.contains('open'))return;
    if(topBar?.contains(event.target))return;
    closeMenu();
  });

  window.addEventListener('resize',()=>{
    if(window.innerWidth>800)closeMenu();
  });
}

// Acceso global al buscador sin recargar ni duplicar la navegación de cada sección.
const onSearchPage=/buscar\.html$/i.test(location.pathname);
if(topBar&&!onSearchPage&&!topBar.querySelector('.header-search')){
  const searchLink=document.createElement('a');
  searchLink.className='header-search';
  searchLink.href='buscar.html';
  searchLink.textContent='Buscar';
  searchLink.setAttribute('aria-label','Buscar en todo el sitio');
  searchLink.title='Buscar en todo el sitio (/ o Ctrl+K)';
  topBar.classList.add('has-search');
  if(menuButton)topBar.insertBefore(searchLink,menuButton);
  else if(nav)topBar.insertBefore(searchLink,nav);
  else topBar.appendChild(searchLink);
}

// Atajo de teclado: / o Ctrl/Cmd + K abre la búsqueda. En la propia página, enfoca el campo.
document.addEventListener('keydown',event=>{
  const target=event.target;
  const typing=target instanceof HTMLInputElement||target instanceof HTMLTextAreaElement||target instanceof HTMLSelectElement||target?.isContentEditable;
  const shortcut=(!typing&&!event.altKey&&!event.ctrlKey&&!event.metaKey&&event.key==='/')||((event.ctrlKey||event.metaKey)&&!event.altKey&&event.key.toLowerCase()==='k');
  if(!shortcut)return;
  event.preventDefault();
  if(onSearchPage)document.querySelector('#site-search-input')?.focus();
  else location.href='buscar.html';
});

const content=window.siteContent||{slides:[],articles:[]};

// Galería de bienvenida: se alimenta desde content.js para actualizar fotos sin tocar la estructura.
const slidesRoot=document.querySelector('#welcome-slides');
const dotsRoot=document.querySelector('#slide-dots');
const caption=document.querySelector('#slide-caption');
const photoStage=document.querySelector('.photo-stage');
const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches===true;
let slideIndex=0;
let slideTimer=null;
let touchStartX=null;
let touchStartY=null;

if(caption)caption.setAttribute('aria-live','polite');

if(slidesRoot&&content.slides.length){
  content.slides.forEach((item,index)=>{
    const slide=document.createElement('figure');
    slide.className=`slide${index===0?' active':''}`;
    slide.setAttribute('aria-hidden',String(index!==0));
    slide.innerHTML=`<img src="${item.src}" alt="${item.alt}" loading="${index===0?'eager':'lazy'}">`;
    slidesRoot.appendChild(slide);

    const dot=document.createElement('button');
    dot.type='button';
    dot.className=`slide-dot${index===0?' active':''}`;
    dot.setAttribute('aria-label',`Ver fotografía ${index+1} de ${content.slides.length}`);
    dot.setAttribute('aria-current',index===0?'true':'false');
    dot.addEventListener('click',()=>showSlide(index,true));
    dotsRoot?.appendChild(dot);
  });
  showSlide(0);
  startSlides();
}

function showSlide(index,restart=false){
  const allSlides=[...document.querySelectorAll('.slide')];
  const allDots=[...document.querySelectorAll('.slide-dot')];
  if(!allSlides.length)return;
  slideIndex=(index+allSlides.length)%allSlides.length;
  allSlides.forEach((el,i)=>{
    const active=i===slideIndex;
    el.classList.toggle('active',active);
    el.setAttribute('aria-hidden',String(!active));
  });
  allDots.forEach((el,i)=>{
    const active=i===slideIndex;
    el.classList.toggle('active',active);
    el.setAttribute('aria-current',active?'true':'false');
  });
  if(caption)caption.textContent=content.slides[slideIndex]?.caption||'';
  if(restart)startSlides();
}

function stopSlides(){
  clearInterval(slideTimer);
  slideTimer=null;
}

function startSlides(){
  stopSlides();
  if(document.hidden)return;
  if(!reducedMotion&&content.slides.length>1){
    slideTimer=setInterval(()=>showSlide(slideIndex+1),5500);
  }
}

document.querySelector('#prev-slide')?.addEventListener('click',()=>showSlide(slideIndex-1,true));
document.querySelector('#next-slide')?.addEventListener('click',()=>showSlide(slideIndex+1,true));
photoStage?.addEventListener('mouseenter',stopSlides);
photoStage?.addEventListener('mouseleave',startSlides);
photoStage?.addEventListener('focusin',stopSlides);
photoStage?.addEventListener('focusout',event=>{
  if(!photoStage.contains(event.relatedTarget))startSlides();
});

// Deslizamiento táctil horizontal sin interferir con el desplazamiento vertical de la página.
photoStage?.addEventListener('touchstart',event=>{
  const point=event.touches[0];
  if(!point)return;
  touchStartX=point.clientX;
  touchStartY=point.clientY;
  stopSlides();
},{passive:true});
photoStage?.addEventListener('touchend',event=>{
  if(touchStartX===null||touchStartY===null)return;
  const point=event.changedTouches[0];
  const dx=point.clientX-touchStartX;
  const dy=point.clientY-touchStartY;
  touchStartX=null;
  touchStartY=null;
  if(Math.abs(dx)>=45&&Math.abs(dx)>Math.abs(dy)*1.2){
    showSlide(slideIndex+(dx<0?1:-1),true);
  }else{
    startSlides();
  }
},{passive:true});

document.addEventListener('visibilitychange',()=>{
  if(document.hidden)stopSlides();
  else startSlides();
});

// Publicaciones: el orden utiliza la precisión real disponible en la fuente.
function compareArticles(a,b){
  const keyA=a.sortKey||a.date||'0000';
  const keyB=b.sortKey||b.date||'0000';
  const byKey=keyB.localeCompare(keyA,'en');
  return byKey||((b.sourceOrder||0)-(a.sourceOrder||0));
}

const articles=[...content.articles].sort(compareArticles);
const latest=articles[0];
const latestRoot=document.querySelector('#latest-article');
if(latestRoot&&latest){
  latestRoot.innerHTML=`
    <div class="latest-image"><img src="${latest.image}" alt="Imagen asociada a ${latest.title}"><span class="latest-badge">ÚLTIMA PUBLICACIÓN</span></div>
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
