import {$,$$} from './dom.js';

/* reveal */
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const d=e.target.dataset.delay;if(d)e.target.style.transitionDelay=d+'ms';e.target.classList.add('in');rio.unobserve(e.target);}}),{threshold:.13});
$$('.reveal').forEach((el,i)=>{if(!el.dataset.delay)el.dataset.delay=(i%4)*70;rio.observe(el);});
