import Reveal from "./Reveal";
import { shopData, shopLabel } from "../data/shops";

export default function ShopDirectory({ onEnquire }) {
  const ordered = [...shopData].sort((a, b) => a.n - b.n);

  // Function to determine if a shop is booked
  const isBooked = (shopNumber) => {
    return shopNumber === 1 || shopNumber === 2;
  };

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
          All seven ground-floor units share the same corridor, finish and frontage.
          Hover or tap a shutter to see it lifted.
        </Reveal>

        <Reveal as="div" className="shop-row">
          {ordered.map((s) => {
            const label = shopLabel(s.n);
            const n = String(s.n).padStart(2, "0");
            const booked = isBooked(s.n);

            return (
              <div className="shutter" tabIndex={0} key={s.n}>

                <div className="shutter-inside">

                  <span
                    className="status"
                    style={{
                      color: booked ? "#e74c3c" : "#2ecc71",
                      fontWeight: "bold",
                    }}
                  >
                    {booked ? "Booked" : "Available"}
                  </span>

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

                  <button
                    type="button"
                    onClick={() => onEnquire(label)}
                    style={{
                      opacity: booked ? 0.5 : 1,
                      cursor: booked ? "not-allowed" : "pointer",
                    }}
                    disabled={booked}
                  >
                    {booked ? "Booked" : "Enquire →"}
                  </button>

                </div>

                <div className="shutter-face">

                  <div className="num">{n}</div>

                  <div className="tag">
                    {s.zone} zone
                  </div>

                  {booked && (
                    <div
                      className="booked-badge"
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "#e74c3c",
                        color: "white",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      BOOKED
                    </div>
                  )}

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