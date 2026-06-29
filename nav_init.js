(function(){
  var page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('[data-page]').forEach(function(a){if(a.getAttribute('data-page')===page)a.classList.add('active');});
  var ham=document.getElementById('hamburger'),mob=document.getElementById('mobileNav');
  if(ham&&mob){
    ham.addEventListener('click',function(){var open=mob.classList.toggle('open');ham.setAttribute('aria-expanded',open);});
    mob.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mob.classList.remove('open');});});
  }
  var revs=document.querySelectorAll('.reveal');
  if(revs.length){new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting)en.target.classList.add('visible');});},{threshold:.1}).observe?
    (function(){var io=new IntersectionObserver(function(e){e.forEach(function(en){if(en.isIntersecting)en.target.classList.add('visible');});},{threshold:.1});revs.forEach(function(r){io.observe(r);});})():'';}
})();
