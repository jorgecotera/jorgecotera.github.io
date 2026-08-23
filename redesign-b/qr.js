const form=document.querySelector('#qr-form');
const input=document.querySelector('#qr-url');
const sizeSelect=document.querySelector('#qr-size');
const output=document.querySelector('#qr-output');
const status=document.querySelector('#qr-status');
const downloadButton=document.querySelector('#qr-download');
const clearButton=document.querySelector('#qr-clear');
let qr=null;
let qrLibraryPromise=null;

if(downloadButton)downloadButton.textContent='Descargar JPG';
document.querySelectorAll('#generador-qr .radar-note,.qr-page .lead,.qr-note').forEach(el=>{
  el.innerHTML=el.innerHTML.replace(/PNG/g,'JPG');
});

function normalizeAddress(value){
  const text=value.trim();
  if(!text)return '';
  if(/^[a-z][a-z0-9+.-]*:/i.test(text))return text;
  if(/^([\w-]+\.)+[a-z]{2,}(\/|$)/i.test(text))return `https://${text}`;
  return text;
}

function loadScript(url){
  return new Promise((resolve,reject)=>{
    const script=document.createElement('script');
    script.src=url;
    script.async=true;
    script.onload=()=>resolve();
    script.onerror=()=>{
      script.remove();
      reject(new Error(`No fue posible cargar ${url}`));
    };
    document.head.appendChild(script);
  });
}

async function ensureQrLibrary(){
  if(typeof window.QRCode==='function')return;
  if(qrLibraryPromise)return qrLibraryPromise;

  qrLibraryPromise=(async()=>{
    const sources=[
      'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js'
    ];

    let lastError=null;
    for(const source of sources){
      try{
        await loadScript(source);
        if(typeof window.QRCode==='function')return;
      }catch(error){
        lastError=error;
      }
    }
    throw lastError||new Error('QRCode no disponible');
  })().catch(error=>{
    qrLibraryPromise=null;
    throw error;
  });

  return qrLibraryPromise;
}

async function generateQr(){
  const value=normalizeAddress(input?.value||'');
  if(!value){
    if(status)status.textContent='Escribe una dirección o un texto para generar el código.';
    input?.focus();
    return;
  }

  if(status)status.textContent='Generando código QR…';
  if(downloadButton)downloadButton.disabled=true;

  try{
    await ensureQrLibrary();
    const size=Number(sizeSelect?.value)||384;
    output.innerHTML='';
    qr=new window.QRCode(output,{
      text:value,
      width:size,
      height:size,
      colorDark:'#171717',
      colorLight:'#ffffff',
      correctLevel:window.QRCode.CorrectLevel.M
    });

    await new Promise(resolve=>setTimeout(resolve,60));
    if(!output.querySelector('canvas,img'))throw new Error('La librería no produjo una imagen QR');

    if(status)status.textContent=`Código QR generado para: ${value}`;
    if(downloadButton)downloadButton.disabled=false;
  }catch(error){
    console.error('Error al generar QR:',error);
    if(status)status.textContent='No fue posible generar el QR. Comprueba tu conexión y vuelve a intentarlo.';
  }
}

function canvasToJpeg(sourceCanvas,size){
  const exportCanvas=document.createElement('canvas');
  exportCanvas.width=size;
  exportCanvas.height=size;
  const ctx=exportCanvas.getContext('2d');
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,size,size);
  ctx.imageSmoothingEnabled=false;
  ctx.drawImage(sourceCanvas,0,0,size,size);
  return exportCanvas.toDataURL('image/jpeg',0.96);
}

async function getJpegDataUrl(){
  const size=Number(sizeSelect?.value)||384;
  const canvas=output.querySelector('canvas');
  if(canvas)return canvasToJpeg(canvas,size);

  const image=output.querySelector('img');
  if(!image)return null;

  if(!image.complete)await new Promise((resolve,reject)=>{
    image.addEventListener('load',resolve,{once:true});
    image.addEventListener('error',reject,{once:true});
  });

  const exportCanvas=document.createElement('canvas');
  exportCanvas.width=size;
  exportCanvas.height=size;
  const ctx=exportCanvas.getContext('2d');
  ctx.fillStyle='#ffffff';
  ctx.fillRect(0,0,size,size);
  ctx.imageSmoothingEnabled=false;
  ctx.drawImage(image,0,0,size,size);
  return exportCanvas.toDataURL('image/jpeg',0.96);
}

async function downloadQr(){
  try{
    const href=await getJpegDataUrl();
    if(!href){
      if(status)status.textContent='Primero genera un código QR.';
      return;
    }
    const link=document.createElement('a');
    link.href=href;
    link.download='codigo-qr.jpg';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }catch(error){
    console.error('Error al descargar QR:',error);
    if(status)status.textContent='No fue posible preparar la imagen JPG.';
  }
}

function clearQr(){
  if(input)input.value='';
  if(output)output.innerHTML='';
  if(status)status.textContent='';
  if(downloadButton)downloadButton.disabled=true;
  qr=null;
  input?.focus();
}

form?.addEventListener('submit',event=>{
  event.preventDefault();
  generateQr();
});
downloadButton?.addEventListener('click',downloadQr);
clearButton?.addEventListener('click',clearQr);
input?.addEventListener('input',()=>{
  if(status?.textContent)status.textContent='';
});
