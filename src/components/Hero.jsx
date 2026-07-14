import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <header className="hero">
      <img className="hero-img" src={heroImg} alt="Arpana Complex ground floor shop units with open shutters" />
      <div className="hero-content">
        <div className="hero-badge">&#128205; Kutiyatu, Namkum &mdash; PIN 834010</div>
        <h1>
          Arpana
          <br />
          <em>Complex</em>
        </h1>
        <p className="tagline">
          Your Business Destination — 7 ground-floor shops ready to open, on the road that connects Ranchi to Tata.
        </p>
        <div className="hero-cta">
          <a href="#shops" className="btn btn-primary">
            View the 7 shop units
          </a>
          <a href="#contact" className="btn btn-ghost">
            Enquire about renting
          </a>
        </div>
      </div>
    </header>
  );
}
