import Reveal from "./Reveal";

const ITEMS = [
  {
    title: "Washroom on site",
    body: "A dedicated washroom serves the complex, so staff are covered without sending anyone off-premises.",
    icon: (
      <>
        <path d="M6 21V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12" />
        <path d="M9 21v-6h6v6" />
        <circle cx="16" cy="9" r="1" />
      </>
    ),
  },
  {
    title: "Open parking space",
    body: "Forecourt parking in front of the complex for customers who drive and vendors who need to load and unload.",
    icon: (
      <>
        <rect x="3" y="7" width="18" height="12" rx="1.5" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 13h18" />
      </>
    ),
  },
  {
    title: "Roller shutter security",
    body: "Every unit closes behind its own steel shutter, allowing you to lock up and leave safely.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 9h18M3 14h18M8 4v16M14 4v16" />
      </>
    ),
  },
  {
    title: "Wide shared corridor",
    body: "A spacious internal walkway connects all seven units, allowing customers to browse comfortably.",
    icon: (
      <>
        <path d="M4 10h16v9H4z" />
        <path d="M4 10l8-6 8 6" />
      </>
    ),
  },
  {
    title: "Recessed lighting",
    body: "Ceiling lighting runs through the corridor and shop spaces, ready for your business setup.",
    icon: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
  },
  {
    title: "Ground-floor frontage",
    body: "Every shop opens directly onto the forecourt with clear visibility from the road.",
    icon: (
      <>
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
      </>
    ),
  },
];

export default function Amenities() {
  return (
    <section className="amenities section-pad" id="amenities">
      <div className="wrap">

        <Reveal as="p" className="eyebrow">
          Built in, not promised
        </Reveal>

        <Reveal as="h2" className="section-title">
          What comes with
          <br />
          every shop.
        </Reveal>

        <Reveal as="p" className="section-lede">
          Everything that is already built into every shop.
        </Reveal>

        <Reveal as="div" className="amen-grid">
          {ITEMS.map((item) => (
            <div className="amen-card" key={item.title}>

              <svg
                className="icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {item.icon}
              </svg>

              <h4>{item.title}</h4>

              <p>{item.body}</p>

            </div>
          ))}
        </Reveal>

      </div>
    </section>
  );
}