(function(){
  const KEY='mg-theme';
  function injectCSS(){
    if(document.getElementById('themeCSS'))return;
    const s=document.createElement('style');s.id='themeCSS';
    s.textContent=`
html.light body{background:#f0eeff!important;color:#1a1530!important;}
html.light #mainNav{background:rgba(235,232,255,0.95)!important;border-bottom-color:rgba(120,40,255,0.2)!important;}
html.light #mainNav .nav-links a{color:rgba(60,50,120,0.65)!important;}
html.light #mainNav .nav-links a:hover,html.light #mainNav .nav-links a.active{color:#5015cc!important;background:rgba(120,40,255,0.08)!important;}
html.light .nav-mobile{background:rgba(235,232,255,0.98)!important;}
html.light .nav-mobile a{color:rgba(60,50,120,0.6)!important;}
html.light .nav-mobile a:hover,html.light .nav-mobile a.active{color:#5015cc!important;}
html.light #galaxyWavesBg{opacity:0.35!important;}
html.light h1,html.light h2,html.light h3{color:#1a1530!important;}
html.light p,html.light li,html.light label{color:rgba(26,21,48,0.72)!important;}
html.light .section,.html.light section{background:transparent!important;}
html.light footer{background:rgba(220,215,255,0.9)!important;border-top-color:rgba(120,40,255,0.15)!important;}
html.light footer *{color:rgba(26,21,48,0.6)!important;}
html.light input,html.light textarea,html.light select{background:rgba(255,255,255,0.9)!important;color:#1a1530!important;border-color:rgba(120,40,255,0.3)!important;}
html.light input::placeholder,html.light textarea::placeholder{color:rgba(60,50,120,0.4)!important;}
html.light .chip{background:rgba(120,40,255,0.08)!important;color:#5015cc!important;border-color:rgba(120,40,255,0.25)!important;}
html.light [class*="card"],[class*="-card"]{background:rgba(255,255,255,0.82)!important;border-color:rgba(120,40,255,0.15)!important;}
html.light .cert-card,.html.light .domain-card,.html.light .project-card{background:rgba(255,255,255,0.85)!important;border-color:rgba(120,40,255,0.15)!important;}
html.light .glass{background:rgba(255,255,255,0.82)!important;border-color:rgba(120,40,255,0.18)!important;}
html.light .metric{background:rgba(120,40,255,0.06)!important;}
html.light .forecast-card{background:rgba(255,255,255,0.78)!important;}
html.light .stat-item{background:rgba(240,238,255,0.5)!important;}
html.light blockquote{color:rgba(26,21,48,0.65)!important;}
html.light #themeToggleBtn{background:rgba(120,40,255,0.1)!important;color:#5015cc!important;border-color:rgba(120,40,255,0.3)!important;}
body,body *{transition:background-color .35s ease,color .35s ease,border-color .35s ease,box-shadow .35s ease!important;}
    `;
    document.head.appendChild(s);
  }
  function applyTheme(mode){
    const root=document.documentElement;
    const icon=document.getElementById('themeIcon');
    if(mode==='light'){root.classList.add('light');root.classList.remove('dark');}
    else{root.classList.add('dark');root.classList.remove('light');}
    if(icon)icon.className=mode==='light'?'ti ti-sun':'ti ti-moon';
    try{localStorage.setItem(KEY,mode);}catch(e){}
  }
  function injectBtn(){
    const nav=document.getElementById('mainNav');
    if(!nav||document.getElementById('themeToggleBtn'))return;
    const btn=document.createElement('button');
    btn.id='themeToggleBtn';
    btn.setAttribute('aria-label','Toggle dark/light mode');
    btn.title='Toggle dark / light mode';
    btn.innerHTML='<i class="ti ti-moon" id="themeIcon"></i>';
    btn.style.cssText='background:rgba(120,40,255,0.12);border:1px solid rgba(120,40,255,0.35);color:#b878ff;width:36px;height:36px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;margin-left:0.5rem;transition:all .25s';
    btn.onmouseenter=()=>{btn.style.background='rgba(120,40,255,0.25)';btn.style.boxShadow='0 0 12px rgba(120,40,255,0.4)';};
    btn.onmouseleave=()=>{btn.style.background='rgba(120,40,255,0.12)';btn.style.boxShadow='none';};
    btn.onclick=()=>{const isLight=document.documentElement.classList.contains('light');applyTheme(isLight?'dark':'light');};
    const ham=nav.querySelector('.hamburger');
    ham?nav.insertBefore(btn,ham):nav.appendChild(btn);
  }
  injectCSS();
  let saved;try{saved=localStorage.getItem(KEY);}catch(e){}
  const prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved||(prefersDark?'dark':'light'));
  document.addEventListener('DOMContentLoaded',injectBtn);
  window.addEventListener('DOMContentLoaded',injectBtn);
})();
