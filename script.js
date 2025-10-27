// Loader fade
window.addEventListener('load', function(){
    setTimeout(function(){
        document.getElementById('loader').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 2500);
});

// Simple glowing particle animation using canvas
const canvas = document.createElement('canvas');
canvas.id = 'particles-js';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for(let i=0;i<120;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x += p.dx;
    p.y += p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle='rgba(0,255,102,0.8)';
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

// Handle resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
