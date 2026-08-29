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
})();
