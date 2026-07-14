import Reveal from "./Reveal";
import { shopData, shopLabel } from "../data/shops";

export default function ShopDirectory({ onEnquire }) {
  const ordered = [...shopData].sort((a, b) => a.n - b.n);

  return (
    <section className="shops section-pad" id="shops">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Seven units, one address
        </Reveal>
        <Reveal as="h2" className="section-title">
          Pick a shutter.
          <br />
          Roll it up.
        </Reveal>
        <Reveal as="p" className="section-lede">
          All seven ground-floor units share the same corridor, finish and frontage. Hover or tap a shutter to see it
          lifted.
        </Reveal>

        <Reveal as="div" className="shop-row">
          {ordered.map((s) => {
            const label = shopLabel(s.n);
            const n = String(s.n).padStart(2, "0");
            return (
              <div className="shutter" tabIndex={0} key={s.n}>
                <div className="shutter-inside">
                  <span className="status">Available</span>
                  <h4>Shop {n}</h4>
                  <p>
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: 2,
                        background: s.color,
                        marginRight: 6,
                      }}
                    />
                    {s.zone} zone
                  </p>
                  <button type="button" onClick={() => onEnquire(label)}>
                    Enquire &rarr;
                  </button>
                </div>
                <div className="shutter-face">
                  <div className="num">{n}</div>
                  <div className="tag">{s.zone} zone</div>
                </div>
                <div className="shutter-rail" />
              </div>
            );
          })}
        </Reveal>
        <Reveal as="p" className="shop-hint">
          &#8593; Hover or tap any shutter to preview the unit, then send an enquiry straight from the card.
        </Reveal>
      </div>
    </section>
  );
}
