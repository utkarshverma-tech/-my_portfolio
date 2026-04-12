import { useEffect, useRef } from 'react';

const NeuralNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Nodes
    const nodeCount = Math.min(60, Math.floor(window.innerWidth / 20));
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1,
      pulse: Math.random() * Math.PI * 2,
    }));

    let mouse = { x: -1000, y: -1000 };
    const handleMouse = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const threshold = 120;

          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.4;
            // Alternate cyan/purple
            const color = (i + j) % 2 === 0
              ? `rgba(0,245,255,${alpha})`
              : `rgba(168,85,247,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Mouse interaction
        const mdx = mouse.x - nodes[i].x;
        const mdy = mouse.y - nodes[i].y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 150) {
          const alpha = (1 - mdist / 150) * 0.7;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0,245,255,${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Draw nodes
      nodes.forEach(n => {
        const pulse = (Math.sin(n.pulse) + 1) / 2;
        const r = n.radius + pulse * 1.5;

        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${0.4 + pulse * 0.3})`;
        ctx.fill();

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,245,255,${0.05 + pulse * 0.08})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="neural-canvas"
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default NeuralNetwork;
