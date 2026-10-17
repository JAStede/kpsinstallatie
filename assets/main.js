document.querySelector('.menu')?.addEventListener('click',function(){const n=document.querySelector('.links');const open=n.classList.toggle('open');this.setAttribute('aria-expanded',String(open));this.setAttribute('aria-label',open?'Menu sluiten':'Menu openen')});document.getElementById('year').textContent=new Date().getFullYear();
(function(){
const current=(location.pathname.split('/').pop()||'index.html');
document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===current)a.setAttribute('aria-current','page')});
const menu=document.querySelector('.menu'),nav=document.querySelector('.links');
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Menu openen');menu?.focus()}});
document.addEventListener('click',e=>{if(nav?.classList.contains('open')&&!e.target.closest('.nav')){nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}});
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduce&&'IntersectionObserver'in window){
const items=document.querySelectorAll('.section h2,.section .lead,.section .card,.section .split>*,.steps .step,.cta h2,.faq-list details');
items.forEach(el=>el.classList.add('reveal-ready'));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.07,rootMargin:'0px 0px -30px 0px'});
items.forEach(el=>observer.observe(el));
}
})();
