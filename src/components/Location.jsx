import Reveal from "./Reveal";

const ROUTE = [
  ["7.8", "KM", "Birsa Munda Airport", "Regional and long-distance footfall within easy reach"],
  ["4.4", "KM", "Sadabahar Chowk", "The nearest major junction into the complex"],
  ["900", "M", "Mazzarelio Convent School", "Steady daily footfall from parents and staff"],
  ["\u221E", "LINK", "Ranchi–Tata Road", "Well-connected arterial frontage"],
  ["\u2191", "Growth", "Kutiyatu, Namkum", "An expanding residential and commercial pocket"],
];

export default function Location() {
  return (
    <section className="location section-pad" id="location">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Where you'll be trading
        </Reveal>
        <Reveal as="h2" className="section-title">
          The road decides
          <br />
          your footfall.
        </Reveal>
        <Reveal as="p" className="section-lede">
          Arpana Complex sits directly on a growing stretch between Ranchi and Tata — close enough to the airport and
          the main chowk to matter, close enough to home and school to stay busy on ordinary days too.
        </Reveal>

        <div className="route-list">
          {ROUTE.map(([dist, unit, label, sub]) => (
            <Reveal as="div" className="route-item" key={label}>
              <div className="route-dist">
                {dist}
                <span>{unit}</span>
              </div>
              <div className="route-label">
                {label} <small>{sub}</small>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" className="address-card">
          <div className="addr-text">
            <strong>Arpana Complex</strong>
            Kutiyatu, Namkom, Jharkhand — PIN Code 834010
          </div>
          <div className="quick-actions">
            <a className="btn btn-primary" href="tel:+916294382553">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call 62943 82553
            </a>
            <a className="btn btn-ghost" href="tel:+919934102334">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call 99341 02334
            </a>
          </div>
        </Reveal>
      </div>

      <style>{`
        .location {
          background: #0a0a0a;
          position: relative;
          overflow: hidden;
        }

        .location::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .location::after {
          content: '';
          position: absolute;
          bottom: -40%;
          left: -20%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .section-pad {
          padding: 80px 0;
        }

        .eyebrow {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #c9a84c;
          font-weight: 700;
          margin-bottom: 16px;
          position: relative;
          display: inline-block;
        }

        .eyebrow::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #c9a84c, transparent);
          border-radius: 1px;
        }

        .section-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 20px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .section-title br {
          display: block;
        }

        .section-lede {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #b0a8a0;
          max-width: 700px;
          margin-bottom: 48px;
          font-weight: 400;
        }

        .route-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-bottom: 48px;
        }

        .route-item {
          background: linear-gradient(145deg, #141414, #1a1a1a);
          border: 1px solid rgba(201,168,76,0.1);
          border-radius: 16px;
          padding: 24px 20px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .route-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a84c, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .route-item:hover {
          transform: translateY(-4px);
          border-color: rgba(201,168,76,0.3);
          box-shadow: 0 8px 32px rgba(201,168,76,0.08);
          background: linear-gradient(145deg, #181818, #1f1f1f);
        }

        .route-item:hover::before {
          opacity: 1;
        }

        .route-dist {
          font-size: 2.2rem;
          font-weight: 800;
          color: #c9a84c;
          line-height: 1;
          margin-bottom: 8px;
          display: flex;
          align-items: baseline;
          gap: 4px;
        }

        .route-dist span {
          font-size: 0.9rem;
          font-weight: 600;
          color: #8a7e6a;
          letter-spacing: 1px;
        }

        .route-label {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }

        .route-label small {
          display: block;
          font-size: 0.8rem;
          font-weight: 400;
          color: #8a7e6a;
          margin-top: 4px;
          line-height: 1.5;
        }

        .address-card {
          background: linear-gradient(145deg, #141414, #1a1a1a);
          border: 1px solid rgba(201,168,76,0.15);
          border-radius: 20px;
          padding: 36px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .address-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .address-card:hover {
          border-color: rgba(201,168,76,0.3);
          box-shadow: 0 8px 40px rgba(201,168,76,0.06);
        }

        .addr-text {
          font-size: 1.05rem;
          color: #d0c8c0;
          line-height: 1.6;
          position: relative;
          z-index: 1;
        }

        .addr-text strong {
          display: block;
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }

        .quick-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          cursor: pointer;
          letter-spacing: 0.3px;
        }

        .btn-primary {
          background: linear-gradient(135deg, #c9a84c 0%, #b8963a 100%);
          color: #0a0a0a;
          border-color: #c9a84c;
          box-shadow: 0 4px 20px rgba(201,168,76,0.25);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(201,168,76,0.35);
          background: linear-gradient(135deg, #d4b85a 0%, #c9a84c 100%);
        }

        .btn-primary:active {
          transform: translateY(0px);
        }

        .btn-ghost {
          background: transparent;
          color: #c9a84c;
          border-color: rgba(201,168,76,0.3);
        }

        .btn-ghost:hover {
          background: rgba(201,168,76,0.08);
          border-color: #c9a84c;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(201,168,76,0.1);
        }

        .btn svg {
          flex-shrink: 0;
        }

        @media (max-width: 968px) {
          .address-card {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
            padding: 30px 24px;
          }

          .addr-text strong {
            font-size: 1.2rem;
          }

          .quick-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .section-pad {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-lede {
            font-size: 1rem;
            margin-bottom: 32px;
          }

          .route-list {
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }

          .route-item {
            padding: 20px 16px;
          }

          .route-dist {
            font-size: 1.8rem;
          }

          .address-card {
            padding: 24px 20px;
          }

          .btn {
            padding: 12px 20px;
            font-size: 0.85rem;
          }

          .quick-actions {
            flex-direction: column;
            width: 100%;
          }

          .quick-actions .btn {
            justify-content: center;
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .route-list {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.7rem;
          }

          .addr-text {
            font-size: 0.95rem;
          }

          .addr-text strong {
            font-size: 1.1rem;
          }

          .btn {
            font-size: 0.8rem;
            padding: 10px 16px;
          }
        }
      `}</style>
    </section>
  );
}