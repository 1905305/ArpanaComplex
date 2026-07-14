import Reveal from "./Reveal";

const ROUTE = [
  ["7.8", "KM", "Birsa Munda Airport", "Regional and long-distance footfall within easy reach"],
  ["4.4", "KM", "Sadabahar Chowk", "The nearest major junction into the complex"],
  ["900", "M", "Mazzarelio Convent School", "Steady daily footfall from parents and staff"],
  ["\u221E", "LINK", "Ranchi\u2013Tata Road", "Well-connected arterial frontage"],
  ["\u2191", "Growth", "Kutiyatu, Namkum", "An expanding residential and commercial pocket"],
];

export default function Location() {
  return (
    <section className="route section-pad" id="location">
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
          <div className="quick-actions" style={{ margin: 0 }}>
            <a className="btn btn-primary" href="tel:+916294382553">
              Call 62943 82553
            </a>
            <a className="btn btn-ghost" href="tel:+919934102334">
              Call 99341 02334
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
