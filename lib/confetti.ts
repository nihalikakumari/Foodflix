// Simple confetti animation for success page
export default function confetti() {
  const colors = ['#FF5252', '#5E35B1', '#43A047', '#FFB300', '#1E88E5'];
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1000';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d')!;
  const particles: any[] = [];

  // Create particles
  for (let i = 0; i < 150; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: -10,
      width: Math.random() * 10 + 3,
      height: Math.random() * 10 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 5 + 2,
      angle: Math.random() * 2 * Math.PI,
      spin: Math.random() * 0.2 - 0.1
    });
  }

  // Animation loop
  let animationId: number;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    let complete = true;
    
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      
      // Update position
      p.x += p.vx;
      p.y += p.vy;
      p.angle += p.spin;
      
      // Gravity effect
      p.vy += 0.1;
      
      // Draw particle
      ctx.save();
      ctx.translate(p.x + p.width / 2, p.y + p.height / 2);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
      ctx.restore();
      
      // Check if all particles have fallen off the screen
      if (p.y < canvas.height) {
        complete = false;
      }
    }
    
    if (!complete) {
      animationId = requestAnimationFrame(animate);
    } else {
      setTimeout(() => {
        document.body.removeChild(canvas);
      }, 1000);
    }
  }
  
  // Start animation
  animate();
  
  // Clean up if needed
  return () => {
    cancelAnimationFrame(animationId);
    if (document.body.contains(canvas)) {
      document.body.removeChild(canvas);
    }
  };
}