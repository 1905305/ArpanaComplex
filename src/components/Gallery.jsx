import hallwayImg from "../assets/hallway.jpg";
import Reveal from "./Reveal";

export default function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Inside the complex
        </Reveal>
        <Reveal as="h2" className="section-title">
          Wide corridor.
          <br />
          Finished, not fitted-out.
        </Reveal>
        <Reveal as="div" className="gallery-frame">
          <img src={hallwayImg} alt="Finished terrazzo-floored corridor connecting the shop units" />
        </Reveal>
        <Reveal as="div" className="gallery-caption">
          <h3>The shared corridor</h3>
          <p>
            Polished terrazzo flooring, even overhead lighting and full-height shutter frontages on every unit — the
            shell is complete, so you move in and fit out on your own timeline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
