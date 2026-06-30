(function(){
  const canvas=document.createElement('canvas');
  canvas.id='galaxyWavesBg';
  canvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;pointer-events:none;display:block';
  document.body.prepend(canvas);
  const old=document.getElementById('bg');
  if(old&&old!==canvas)old.remove();
  const ctx=canvas.getContext('2d');
  let W,H,t=0;
  const WAVES=[
    {c:'120,40,255',a:.18,amp:90,freq:.0018,spd:.006,yb:.45,lw:2.5},
    {c:'0,120,255', a:.15,amp:70,freq:.0024,spd:.009,yb:.55,lw:2.0},
    {c:'80,0,220',  a:.22,amp:55,freq:.0030,spd:.007,yb:.50,lw:1.8},
    {c:'60,200,255',a:.12,amp:110,freq:.0014,spd:.005,yb:.60,lw:1.5},
    {c:'180,100,255',a:.10,amp:40,freq:.0040,spd:.012,yb:.42,lw:1.2},
    {c:'120,40,255',a:.07,amp:140,freq:.0010,spd:.003,yb:.70,lw:1.0},
    {c:'0,120,255', a:.06,amp:160,freq:.0008,spd:.004,yb:.30,lw:0.8},
  ];
  let stars=[];
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight;}
  function initStars(){const n=Math.floor(W*H/5500);stars=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.2+.2,a:Math.random()*.5+.05,da:(Math.random()-.5)*.008,c:['120,40,255','0,120,255','60,200,255','180,100,255'][Math.floor(Math.random()*4)]}));}
  resize();initStars();
  window.addEventListener('resize',()=>{resize();initStars();});
  const BLOBS=[{cx:.15,cy:.3,rx:.35,ry:.30,c:'rgba(80,0,220,.10)'},{cx:.75,cy:.6,rx:.40,ry:.35,c:'rgba(0,80,200,.09)'},{cx:.50,cy:.85,rx:.30,ry:.22,c:'rgba(120,40,255,.08)'}];
  function draw(){
    ctx.clearRect(0,0,W,H);
    const bg=ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#02010a');bg.addColorStop(.5,'#050318');bg.addColorStop(1,'#020210');
    ctx.fillStyle=bg;ctx.fillRect(0,0,W,H);
    BLOBS.forEach(b=>{ctx.save();ctx.filter='blur(80px)';const g=ctx.createRadialGradient(b.cx*W,b.cy*H,0,b.cx*W,b.cy*H,Math.max(b.rx*W,b.ry*H));g.addColorStop(0,b.c);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(b.cx*W,b.cy*H,b.rx*W,b.ry*H,0,0,Math.PI*2);ctx.fill();ctx.filter='none';ctx.restore();});
    stars.forEach(s=>{s.a+=s.da;if(s.a>.65||s.a<.03)s.da*=-1;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(${s.c},${s.a.toFixed(2)})`;ctx.fill();});
    WAVES.forEach((w,wi)=>{
      const phase=t*w.spd+wi*1.1;
      ctx.save();ctx.filter='blur(8px)';ctx.globalAlpha=w.a*.5;ctx.strokeStyle=`rgba(${w.c},1)`;ctx.lineWidth=w.lw*4;ctx.beginPath();
      for(let x=0;x<=W;x+=3){const y=H*w.yb+Math.sin(x*w.freq+phase)*w.amp+Math.sin(x*w.freq*1.7+phase*.8)*(w.amp*.3);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();ctx.filter='none';ctx.restore();
      ctx.save();ctx.globalAlpha=w.a*1.2;ctx.strokeStyle=`rgba(${w.c},1)`;ctx.lineWidth=w.lw;ctx.shadowColor=`rgba(${w.c},.9)`;ctx.shadowBlur=12;ctx.beginPath();
      for(let x=0;x<=W;x+=2){const y=H*w.yb+Math.sin(x*w.freq+phase)*w.amp+Math.sin(x*w.freq*1.7+phase*.8)*(w.amp*.3);x===0?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.stroke();ctx.restore();
    });
    t++;requestAnimationFrame(draw);
  }
  draw();
})();
