import logo from "../assets/logo.jpg";

const LINKS = [
  ["#location", "Location"],
  ["#gallery", "Gallery"],
  ["#floorplan", "Floor Plan"],
  ["#shops", "Shops"],
  ["#amenities", "Amenities"],
  ["#contact", "Contact"],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="Arpana Complex logo" />
            <div className="name">
              Arpana Complex
              <small>Your Business Destination</small>
            </div>
          </div>
          <div className="foot-links">
            {LINKS.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Arpana Complex, Kutiyatu, Namkum, Jharkhand — 834010</span>
          <span>62943 82553 &nbsp;|&nbsp; 99341 02334</span>
        </div>
      </div>
    </footer>
  );
}
