import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let animId;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = `${mouseX}px`;
        dot.style.top = `${mouseY}px`;
      }
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;
      }
      animId = requestAnimationFrame(animateRing);
    };

    const addHover = () => {
      dot?.classList.add('hovering');
      ring?.classList.add('hovering');
    };

    const removeHover = () => {
      dot?.classList.remove('hovering');
      ring?.classList.remove('hovering');
    };

    document.addEventListener('mousemove', moveCursor);
    animateRing();

    const interactables = document.querySelectorAll('a, button, [data-hover]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden sm:block" />
      <div ref={ringRef} className="cursor-ring hidden sm:block" />
    </>
  );
};

export default CustomCursor;
