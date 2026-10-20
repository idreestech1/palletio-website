import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursor1Ref = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    const cursor1 = cursor1Ref.current;
    const cursor2 = cursor2Ref.current;
    if (!cursor1 || !cursor2) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let c1X = mouseX;
    let c1Y = mouseY;
    let c2X = mouseX;
    let c2Y = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      // Smooth interpolation for the outer ring
      c1X += (mouseX - c1X) * 0.18;
      c1Y += (mouseY - c1Y) * 0.18;

      // Faster response for inner dot
      c2X += (mouseX - c2X) * 0.45;
      c2Y += (mouseY - c2Y) * 0.45;

      cursor1.style.left = `${c1X}px`;
      cursor1.style.top = `${c1Y}px`;

      cursor2.style.left = `${c2X}px`;
      cursor2.style.top = `${c2Y}px`;

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animId = requestAnimationFrame(render);

    const addHover = () => {
      cursor1.style.transform = 'translate(-50%, -50%) scale(1.6)';
      cursor1.style.borderColor = '#ffcd4d';
    };

    const removeHover = () => {
      cursor1.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor1.style.borderColor = 'var(--primary)';
    };

    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursor1Ref} className="cursor1"></div>
      <div ref={cursor2Ref} className="cursor2"></div>
    </>
  );
}
