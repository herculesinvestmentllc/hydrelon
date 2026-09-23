import {$,$$} from './dom.js';

/* nav + progress */
const nav=$('#nav'),prog=$('#progress'),totop=$('#totop');
addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',scrollY>30);
  const h=document.documentElement.scrollHeight-innerHeight;
  prog.style.width=(scrollY/h*100)+'%';
  totop.classList.toggle('show',scrollY>700);
});
totop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

/* drawer */
const hamb=$('#hamb'),drawer=$('#drawer');
hamb.addEventListener('click',()=>{hamb.classList.toggle('open');drawer.classList.toggle('open');});
drawer.addEventListener('click',e=>{if(e.target===drawer||e.target.tagName==='A'){hamb.classList.remove('open');drawer.classList.remove('open');}});
addEventListener('keydown',e=>{if(e.key==='Escape'){hamb.classList.remove('open');drawer.classList.remove('open');}});
