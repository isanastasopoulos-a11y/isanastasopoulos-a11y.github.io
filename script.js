(() => {
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}))}
 const targets=document.querySelectorAll('.section-kicker,.profile-grid,.fact-strip,.expertise-grid article,.process-step,.timeline-item,.tool-group,.background-grid,.contact-content');
 targets.forEach(el=>el.classList.add('reveal'));
 if('IntersectionObserver'in window){const observer=new IntersectionObserver((entries,obs)=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');obs.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -25px 0px'});targets.forEach(el=>observer.observe(el))}else targets.forEach(el=>el.classList.add('is-visible'));
})();
