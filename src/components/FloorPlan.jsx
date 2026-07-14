import { useState } from "react";
import Reveal from "./Reveal";
import { shopData, shopLabel } from "../data/shops";

const FACTS = [
  ["186'", "Total plot depth"],
  ["44' 6\"", "Total frontage width"],
  ["14' 0\"", "Driveway width, full length"],
  ["4' 0\"", "Corridor width, each side"],
];

function PlanShop({ shop, revealed, onSelect }) {
  const label = shopLabel(shop.n);
  return (
    <div
      className={`plan-shop ${revealed ? "revealed" : ""}`}
      style={{ background: shop.color, flex: shop.flex ?? 1 }}
      tabIndex={0}
      onMouseEnter={() => onSelect(shop)}
      onFocus={() => onSelect(shop)}
      onClick={() => onSelect(shop, true)}
    >
      <div className="zone">
        <span className="n">{String(shop.n).padStart(2, "0")}</span>
        <span className="z">{shop.zone}</span>
      </div>
      <div className="shutter-cover" />
    </div>
  );
}

export default function FloorPlan({ onEnquire }) {
  const [revealCount, setRevealCount] = useState(0);
  const [tooltipShop, setTooltipShop] = useState(null);

  const left = shopData.filter((s) => s.column === "left").sort((a, b) => a.order - b.order);
  const right = shopData.filter((s) => s.column === "right").sort((a, b) => a.order - b.order);
  const ordered = [...left, ...right];

  function startReveal() {
    ordered.forEach((_, i) => {
      setTimeout(() => setRevealCount((c) => Math.max(c, i + 1)), 300 + i * 160);
    });
  }

  function handleSelect(shop, enquire = false) {
    setTooltipShop(shop);
    if (enquire) onEnquire(shopLabel(shop.n));
  }

  return (
    <section className="floorplan section-pad" id="floorplan">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Extracted from the site plan
        </Reveal>
        <Reveal as="h2" className="section-title">
          One entrance.
          <br />
          Two corridors.
          <br />
          Seven shops.
        </Reveal>
        <Reveal as="p" className="section-lede">
          The schematic below is redrawn from the approved layout — three units down the left, four down the right, a
          driveway alongside and a washroom, cabin toilet and stairs across the top. Scroll down and each shutter
          lifts on its own; hover or tap any unit for details.
        </Reveal>

        <Reveal as="div" className="plan-layout" onIn={startReveal}>
          <div className="plan-outer">
            <div className="plan-driveway">14&#39; wide driveway</div>
            <div className="plan-building">
              <div className="plan-facilities">
                <div className="plan-fac-cell">
                  Common
                  <br />
                  Washroom
                </div>
                <div className="plan-fac-cell">Cabin</div>
                <div className="plan-fac-cell">
                  Stairs /
                  <br />
                  Stage
                </div>
              </div>
              <div className="plan-shops">
                <div className="plan-col">
                  {left.map((s, i) => (
                    <PlanShop key={s.n} shop={s} revealed={i < revealCount} onSelect={handleSelect} />
                  ))}
                </div>
                <div className="plan-corridor">
                  <div className="flow" />
                </div>
                <div className="plan-col">
                  {right.map((s, i) => (
                    <PlanShop key={s.n} shop={s} revealed={left.length + i < revealCount} onSelect={handleSelect} />
                  ))}
                </div>
              </div>
              <div className="plan-entrance">
                <span className="arrow">&#8593;</span> Entrance
              </div>
            </div>
          </div>

          <div className="plan-notes">
            <div className="plan-facts">
              {FACTS.map(([v, l]) => (
                <div className="plan-fact" key={l}>
                  <div className="v">{v}</div>
                  <div className="l">{l}</div>
                </div>
              ))}
            </div>
            <div className="plan-tooltip">
              {tooltipShop ? (
                <>
                  <h4>
                    <span className="swatch" style={{ background: tooltipShop.color }} />
                    {shopLabel(tooltipShop.n)}
                  </h4>
                  <p>{tooltipShop.note}</p>
                  <button type="button" onClick={() => onEnquire(shopLabel(tooltipShop.n))}>
                    Enquire about this shop &rarr;
                  </button>
                </>
              ) : (
                <p className="ph">Hover or tap a shop on the plan to see it here.</p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
