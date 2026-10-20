import React, { useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [dashOffset, setDashOffset] = useState(307.919);

  const pathLength = 307.919; // 2 * PI * 49

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const progress = pathLength - (scrollY * pathLength) / totalHeight;
        setDashOffset(Math.max(0, Math.min(pathLength, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
      onClick={scrollToTop}
      role="button"
      aria-label="Scroll to top"
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: `${pathLength}px, ${pathLength}px`,
            strokeDashoffset: `${dashOffset}px`,
            transition: 'stroke-dashoffset 10ms linear'
          }}
        ></path>
      </svg>
    </div>
  );
}
