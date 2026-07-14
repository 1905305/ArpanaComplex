import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const LINKS = [
  ["#location", "Location"],
  ["#gallery", "Gallery"],
  ["#floorplan", "Floor Plan"],
  ["#shops", "Shops"],
  ["#amenities", "Amenities"],
  ["#contact", "Contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-brand">
        <img src={logo} alt="Arpana Complex logo" />
        <div className="name">
          Arpana
          <span>Kutiyatu &middot; Namkum &middot; Ranchi</span>
        </div>
      </div>

      <div className={`nav-links ${open ? "open" : ""}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>

      <a className="nav-call" href="tel:+916294382553">
        Call 62943 82553
      </a>
      <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
        &#9776;
      </button>
    </nav>
  );
}
