import {$,$$} from './dom.js';

/* 3D tilt + glare */
function attachTilt(root){
  [...(root||document).querySelectorAll('.tilt')].forEach(el=>{
    if(el._tilt)return;el._tilt=true;
    const gl=el.querySelector('.glare');
    el.addEventListener('mousemove',e=>{
      const r=el.getBoundingClientRect();
      const px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
      const rx=(.5-py)*7,ry=(px-.5)*7;
      el.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      if(gl){gl.style.setProperty('--mx',(px*100)+'%');gl.style.setProperty('--my',(py*100)+'%');}
    });
    el.addEventListener('mouseleave',()=>{el.style.transform='';});
  });
}
attachTilt(document);

/* cursor glow hero */
const hero=$('#home'),glow=$('#heroGlow');
hero.addEventListener('mousemove',e=>{const r=hero.getBoundingClientRect();glow.style.left=(e.clientX-r.left)+'px';glow.style.top=(e.clientY-r.top)+'px';});

/* magnetic buttons */
$$('[data-magnetic]').forEach(b=>{
  b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)*.25,y=(e.clientY-r.top-r.height/2)*.35;b.style.transform=`translate(${x}px,${y-3}px)`;});
  b.addEventListener('mouseleave',()=>b.style.transform='');
});

/* ripple on buttons */
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const r=b.getBoundingClientRect();const s=document.createElement('span');s.className='ripple';const sz=Math.max(r.width,r.height);s.style.width=s.style.height=sz+'px';s.style.left=(e.clientX-r.left-sz/2)+'px';s.style.top=(e.clientY-r.top-sz/2)+'px';b.appendChild(s);setTimeout(()=>s.remove(),600);});

/* bubbles */
function makeBubbles(id,n){const c=$(id);if(!c)return;for(let i=0;i<n;i++){const b=document.createElement('div');b.className='bubble';const sz=4+Math.random()*16;b.style.width=b.style.height=sz+'px';b.style.left=Math.random()*100+'%';b.style.animationDuration=(7+Math.random()*10)+'s';b.style.animationDelay=(Math.random()*8)+'s';c.appendChild(b);}}
makeBubbles('#bubbles1',16);makeBubbles('#bubbles3',14);
