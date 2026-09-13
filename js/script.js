(() => {
  const io = new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(el=>{
    io.observe(el);
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { el.classList.add('in'); io.unobserve(el); }
  });

  const nav = document.querySelector('.nav');
  const onScroll = ()=> nav && nav.classList.toggle('scrolled', window.scrollY>12);
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();

  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');
  const close = ()=> document.body.classList.remove('menu-open');
  burger?.addEventListener('click', ()=> document.body.classList.toggle('menu-open'));
  menu?.querySelectorAll('a').forEach(a=> a.addEventListener('click', close));
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') close(); });

  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length<2) return;
      const el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({top, behavior:'smooth'});
    });
  });

  const contactForm = document.getElementById('contactForm');
  const contactMsg = document.getElementById('contactFormMsg');
  contactForm?.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(contactForm);
    contactMsg.textContent = '';
    contactMsg.classList.remove('is-success','is-error');
    fetch('/', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams(data).toString()
    })
      .then((res)=>{
        if(!res.ok) throw new Error('network');
        contactMsg.textContent = 'Votre message a bien été envoyé.';
        contactMsg.classList.add('is-success');
        contactForm.reset();
      })
      .catch(()=>{
        contactMsg.textContent = "Une erreur est survenue, merci de réessayer ou de nous écrire directement par email.";
        contactMsg.classList.add('is-error');
      });
  });
})();
