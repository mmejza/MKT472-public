/* MKT 472 — Canonical Slide Viewer JS */
(function(){
  let slides=[], current=0;

  async function init(){
    const r=await fetch('slides.json');
    slides=await r.json();
    buildList();
    go(0);
    document.addEventListener('keydown',onKey);
  }

  function buildList(){
    const list=document.getElementById('slide-list');
    const count=document.getElementById('sl-count-val');
    if(count) count.textContent=slides.length;
    list.innerHTML='';
    slides.forEach((s,i)=>{
      const el=document.createElement('div');
      el.className='sl-thumb';
      el.dataset.i=i;
      const tagHtml=s.tag?`<span class="sl-tag ${s.tagClass||'tlo1'}">${s.tag}</span>`:'';
      el.innerHTML=`<span class="sn">${String(i+1).padStart(2,'0')}</span><span class="st">${s.title}${tagHtml?'<br>'+tagHtml:''}</span>`;
      el.onclick=()=>go(i);
      list.appendChild(el);
    });
  }

  function go(i){
    if(i<0||i>=slides.length) return;
    current=i;
    document.querySelectorAll('.sl-thumb').forEach((el,j)=>el.classList.toggle('active',j===i));
    document.getElementById('slide-frame').querySelector('iframe').src='slides/'+slides[i].file;
    document.getElementById('sl-ind').textContent=(i+1)+' / '+slides.length;
    document.getElementById('btn-prev').disabled=(i===0);
    document.getElementById('btn-next').disabled=(i===slides.length-1);
    // scroll thumb into view
    const thumb=document.querySelectorAll('.sl-thumb')[i];
    if(thumb) thumb.scrollIntoView({block:'nearest'});
  }

  function onKey(e){
    if(e.key==='ArrowRight'||e.key==='ArrowDown') go(current+1);
    if(e.key==='ArrowLeft'||e.key==='ArrowUp') go(current-1);
  }

  window.addEventListener('DOMContentLoaded',init);
  window.navPrev=()=>go(current-1);
  window.navNext=()=>go(current+1);
})();
