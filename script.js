const toggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
function closeMenu(){navLinks.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}
toggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'✕':'☰';});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.querySelector('#year').textContent=new Date().getFullYear();
const items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:0.1});items.forEach(el=>observer.observe(el));}else{items.forEach(el=>el.classList.add('visible'));}
document.querySelector('#contactForm').addEventListener('submit',function(event){event.preventDefault();if(!this.reportValidity())return;const data=new FormData(this);const subject=encodeURIComponent(data.get('subject'));const body=encodeURIComponent(`الاسم: ${data.get('name')}\nالبريد: ${data.get('email')}\n\n${data.get('message')}`);window.location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`;document.querySelector('#formMessage').textContent='سيُفتح برنامج البريد إن كان مُعدًا على جهازك. استبدلي البريد التجريبي قبل النشر.';});
