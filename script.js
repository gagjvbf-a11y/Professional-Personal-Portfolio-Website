const menuButton=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');if(menuButton&&navLinks){menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuButton.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';if(window.lucide)lucide.createIcons()});navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');menuButton.innerHTML='<i data-lucide="menu"></i>';if(window.lucide)lucide.createIcons()}))}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));const filterButtons=document.querySelectorAll('.filter-button');const projects=document.querySelectorAll('.project-card');filterButtons.forEach(button=>button.addEventListener('click',()=>{filterButtons.forEach(item=>item.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;projects.forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));const form=document.querySelector('#contact-form');if(form){form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const data=new FormData(form);const subject=encodeURIComponent('Portfolio enquiry from '+data.get('name'));const body=encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message'));document.querySelector('#form-note').textContent='Your email app should open with this message ready. Please review and send it there.';window.location.href='mailto:ajaydevarayapalli@gmail.com?subject='+subject+'&body='+body})}document.querySelector('#year').textContent=new Date().getFullYear();if(window.lucide)lucide.createIcons();const glow=document.querySelector('.cursor-glow');if(glow&&window.matchMedia('(pointer:fine)').matches){window.addEventListener('pointermove',event=>{glow.style.left=event.clientX+'px';glow.style.top=event.clientY+'px'},{passive:true})}
// Accessible typewriter effect for the hero role
const typedRole=document.querySelector('.typed-role');
if(typedRole){
  const roles=['UI/UX Designer','Creative Thinker','AI Enthusiast','Future Innovator'];
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reducedMotion){typedRole.textContent=roles[0];}
  else{
    let roleIndex=0,charIndex=roles[0].length,deleting=true;
    const typeNext=()=>{
      const current=roles[roleIndex];
      if(deleting){charIndex--;typedRole.textContent=current.slice(0,charIndex);}
      else{charIndex++;typedRole.textContent=current.slice(0,charIndex);}
      let delay=deleting?48:85;
      if(!deleting&&charIndex===current.length){deleting=true;delay=1250;}
      else if(deleting&&charIndex===0){deleting=false;roleIndex=(roleIndex+1)%roles.length;delay=280;}
      window.setTimeout(typeNext,delay);
    };
    window.setTimeout(typeNext,1300);
  }
}
