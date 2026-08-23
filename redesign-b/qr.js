const form=document.querySelector('#qr-form');
const input=document.querySelector('#qr-url');
const sizeSelect=document.querySelector('#qr-size');
const output=document.querySelector('#qr-output');
const status=document.querySelector('#qr-status');
const downloadButton=document.querySelector('#qr-download');
const clearButton=document.querySelector('#qr-clear');
let qr=null;

function normalizeAddress(value){
  const text=value.trim();
  if(!text)return '';
  if(/^[a-z][a-z0-9+.-]*:/i.test(text))return text;
  if(/^([\w-]+\.)+[a-z]{2,}(\/|$)/i.test(text))return `https://${text}`;
  return text;
}

function generateQr(){
  const value=normalizeAddress(input.value);
  if(!value){
    status.textContent='Escribe una dirección o un texto para generar el código.';
    input.focus();
    return;
  }
  const size=Number(sizeSelect.value)||384;
  output.innerHTML='';
  qr=new QRCode(output,{text:value,width:size,height:size,colorDark:'#171717',colorLight:'#ffffff',correctLevel:QRCode.CorrectLevel.M});
  status.textContent='Código QR generado en este dispositivo.';
  downloadButton.disabled=false;
}

function downloadQr(){
  const canvas=output.querySelector('canvas');
  const image=output.querySelector('img');
  const href=canvas?.toDataURL('image/png')||image?.src;
  if(!href)return;
  const link=document.createElement('a');
  link.href=href;
  link.download='codigo-qr.png';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function clearQr(){
  input.value='';
  output.innerHTML='';
  status.textContent='';
  downloadButton.disabled=true;
  qr=null;
  input.focus();
}

form?.addEventListener('submit',event=>{event.preventDefault();generateQr();});
downloadButton?.addEventListener('click',downloadQr);
clearButton?.addEventListener('click',clearQr);
input?.addEventListener('input',()=>{if(status.textContent)status.textContent='';});
