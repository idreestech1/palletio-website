import React from 'react';
import { projectSlidesRow1, projectSlidesRow2 } from '../../data/siteData';

export default function WorkMarquee() {
  // Duplicate arrays to ensure seamless infinite looping without gaps
  const row1Duplicated = [...projectSlidesRow1, ...projectSlidesRow1];
  const row2Duplicated = [...projectSlidesRow2, ...projectSlidesRow2];

  return (
    <div className="work-area has_fade_anim my-5">
      <div className="container-hd">
        <div className="work-area-inner pt-0">
          <div className="works-wrapper-box">
            {/* Top Marquee Row (Scrolling Left) */}
            <div className="marquee-container mb-3">
              <div className="marquee-track marquee-left">
                {row1Duplicated.map((src, index) => (
                  <div className="work-box" key={`row1-${index}`}>
                    <div className="thumb">
                      <img
                        src={src}
                        alt={`Palletio Project Showcase ${index + 1}`}
                        loading="lazy"
                        width="380"
                        height="260"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Marquee Row (Scrolling Right) */}
            <div className="marquee-container">
              <div className="marquee-track marquee-right">
                {row2Duplicated.map((src, index) => (
                  <div className="work-box" key={`row2-${index}`}>
                    <div className="thumb">
                      <img
                        src={src}
                        alt={`Palletio Project Showcase ${index + 21}`}
                        loading="lazy"
                        width="380"
                        height="260"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
