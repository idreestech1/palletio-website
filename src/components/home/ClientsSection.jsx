import React from 'react';
import { clientLogos } from '../../data/siteData';

export default function ClientsSection() {
  return (
    <section className="palletio-clients-section">
      <div className="container">
        {/* Dedicated Logo Grid Layout */}
        <div className="palletio-clients-grid">
          {/* Row 1: Logo 1 (RNP Trading) in Col 2 */}
          <div className="palletio-client-box client-pos-rnp">
            <img
              src={clientLogos[0]}
              alt="RNP Trading Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>

          {/* Row 1: Section Title in Col 3-5 */}
          <div className="palletio-client-title-cell">
            <h2 className="palletio-client-main-title">
              Trusted by Bold<br />Brands Worldwide
            </h2>
          </div>

          {/* Row 2: 5 Client Logos */}
          <div className="palletio-client-box client-pos-nostalgia">
            <img
              src={clientLogos[1]}
              alt="Nostalgia Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-genie">
            <img
              src={clientLogos[2]}
              alt="Global Genie Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-kabadi">
            <img
              src={clientLogos[3]}
              alt="Kabadi At Home Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-flowmark">
            <img
              src={clientLogos[4]}
              alt="Flowmark Inc Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-caindia">
            <img
              src={clientLogos[5]}
              alt="CA India Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>

          {/* Row 3: 5 Client Logos */}
          <div className="palletio-client-box client-pos-nextag">
            <img
              src={clientLogos[6]}
              alt="Nextag Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-ark">
            <img
              src={clientLogos[7]}
              alt="Ark Advisory Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-payrupya">
            <img
              src={clientLogos[8]}
              alt="Payrupya Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-edwins">
            <img
              src={clientLogos[9]}
              alt="Edwins Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
          <div className="palletio-client-box client-pos-papertowns">
            <img
              src={clientLogos[10]}
              alt="Paper Towns Publishers Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>

          {/* Row 4: Sleepfree in Col 4 */}
          <div className="palletio-client-box client-pos-sleepfree">
            <img
              src={clientLogos[11]}
              alt="Sleepfree Logo"
              loading="lazy"
              width="140"
              height="60"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
