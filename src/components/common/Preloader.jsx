import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader" className={!loading ? 'preloader-hidden' : ''}>
      <div id="container" className="container-preloader">
        <div className="animation-preloader">
          <div className="txt-loading">
            <img src="/assets/imgs/logo/loader.png" alt="Palletio Loader" />
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
}
