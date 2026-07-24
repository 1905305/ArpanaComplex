import { useEffect, useState } from "react";
import Reveal from "./Reveal";

// ---------------------------------------------------------------------
// Images live in /public/shops/<key>/ and are referenced by plain URL
// paths.
// ---------------------------------------------------------------------
const GALLERY_IMAGES = {
  corridor: ["/shops/corridor/corridor.jpg"],
  shop1: ["/shops/shop1/shop1.jpg"],
  shop2: ["/shops/shop2/shop2.jpg"],
  shop3: ["/shops/shop3/shop3.jpg"],
  shop4: ["/shops/shop4/shop4.jpg"],
  shop5: ["/shops/shop5/shop5.jpg"],
  shop6: ["/shops/shop6/shop6.jpg"],
  shop7: ["/shops/shop7/shop7.jpg"],
};

const TABS = [
  { key: "corridor", label: "Corridor" },
  { key: "shop1", label: "Shop 1" },
  { key: "shop2", label: "Shop 2" },
  { key: "shop3", label: "Shop 3" },
  { key: "shop4", label: "Shop 4" },
  { key: "shop5", label: "Shop 5" },
  { key: "shop6", label: "Shop 6" },
  { key: "shop7", label: "Shop 7" },
];

const CAPTIONS = {
  corridor: {
    title: "Common Corridor",
    text: `Width: 4 ft

The spacious common corridor provides convenient access to all commercial units. The complex also includes separate washrooms, staircase access and ample circulation space for customers.`,
  },

  shop1: {
    title: "Shop 1",
    text: `Configuration: Combined Shop 1 + Shop 2

Dimensions
• Width : 28 ft
• Depth : 12 ft

Built-up Area
336 sq ft

Recommended for:
Supermarket • Restaurant • Pharmacy • Bank • Furniture Store • Large Showroom`,
  },

  shop2: {
    title: "Shop 2",
    text: `Configuration: Combined Shop 3 + Shop 4

Dimensions
• Width : 28 ft
• Depth : 12 ft

Built-up Area
336 sq ft

Recommended for:
Clinic • Coaching Centre • Retail Outlet • Restaurant • Corporate Office`,
  },

  shop3: {
    title: "Shop 3",
    text: `Dimensions
• Width : 14 ft
• Depth : 12 ft

Built-up Area
168 sq ft

Recommended for:
Boutique • Salon • Mobile Store • Bakery • Gift Shop`,
  },

  shop4: {
    title: "Shop 4",
    text: `Dimensions
• Width : 14 ft
• Depth : 12 ft

Built-up Area
168 sq ft

Recommended for:
Medical Store • Grocery • Electronics • Office • Service Centre`,
  },

  shop5: {
    title: "Shop 5",
    text: `Dimensions
• Width : 14 ft
• Depth : 12 ft

Built-up Area
168 sq ft

Recommended for:
Clothing Store • Cosmetics • Startup Office • Consultancy`,
  },

  shop6: {
    title: "Shop 6",
    text: `Dimensions
• Width : 14 ft
• Depth : 12 ft

Built-up Area
168 sq ft

Recommended for:
Repair Centre • Stationery • Footwear • Fashion Store • Office`,
  },

  shop7: {
    title: "Shop 7",
    text: `Dimensions
• Width : 14 ft
• Depth : 12 ft

Built-up Area
168 sq ft

Recommended for:
Retail Outlet • Boutique • Service Business • Office • Gift Shop`,
  },
};

const DEFAULT_CAPTION = {
  title: "",
  text: "Photos for this unit are coming soon.",
};

export default function Gallery() {
  const [activeTab, setActiveTab] = useState(TABS[0].key);
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const images = GALLERY_IMAGES[activeTab] || [];
  const caption = CAPTIONS[activeTab] || DEFAULT_CAPTION;
  const activeLabel =
    TABS.find((t) => t.key === activeTab)?.label || "Gallery";

  useEffect(() => {
    setIndex(0);
  }, [activeTab]);

  useEffect(() => {
    setImgError(false);
  }, [activeTab, index]);

  const goPrev = () =>
    setIndex((i) =>
      images.length ? (i - 1 + images.length) % images.length : 0
    );

  const goNext = () =>
    setIndex((i) =>
      images.length ? (i + 1) % images.length : 0
    );
  
  const showPlaceholder = images.length === 0 || imgError;

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">
          Inside the complex
        </Reveal>

        <Reveal as="h2" className="section-title">
          Explore every commercial space.
          <br />
          Find the perfect shop for your business.
        </Reveal>

        <Reveal as="div" className="gallery-frame">
          {!showPlaceholder ? (
            <img
              src={images[index]}
              alt={`${activeLabel} photo ${index + 1}`}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="gallery-placeholder">
              <span>Photo coming soon</span>
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                className="carousel-btn carousel-btn-prev"
                onClick={goPrev}
                aria-label="Previous photo"
              >
                &#8249;
              </button>

              <button
                type="button"
                className="carousel-btn carousel-btn-next"
                onClick={goNext}
                aria-label="Next photo"
              >
                &#8250;
              </button>

              <div className="carousel-dots">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`dot${i === index ? " dot-active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to photo ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </Reveal>

        <Reveal as="div" className="gallery-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`gallery-tab${
                tab.key === activeTab ? " gallery-tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <Reveal as="div" className="gallery-caption">
          {caption.title && (
            <h3 className="caption-title">
              {caption.title}
            </h3>
          )}

          <p className="caption-text">
            {caption.text}
          </p>
        </Reveal>
      </div>

      <style>{`
        .gallery-frame {
          position: relative;
          overflow: hidden;
          border-radius: 18px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }

        .gallery-frame img {
          width: 100%;
          display: block;
          border-radius: 18px;
          object-fit: cover;
          aspect-ratio: 16/9;
        }

        .gallery-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 360px;
          border-radius: 18px;
          background: linear-gradient(135deg, #f8f6f0 0%, #f0ede4 100%);
          color: #b8a98c;
          font-size: 1rem;
          aspect-ratio: 16/9;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 50%;
          background: rgba(255,215,0,0.85);
          color: #1a1a1a;
          cursor: pointer;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(255,215,0,0.3);
          backdrop-filter: blur(4px);
        }

        .carousel-btn:hover {
          background: #ffd700;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 6px 20px rgba(255,215,0,0.4);
        }

        .carousel-btn:active {
          transform: translateY(-50%) scale(0.95);
        }

        .carousel-btn-prev {
          left: 16px;
        }

        .carousel-btn-next {
          right: 16px;
        }

        .carousel-dots {
          position: absolute;
          left: 50%;
          bottom: 18px;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.8);
          cursor: pointer;
          background: rgba(255,255,255,0.3);
          transition: all 0.3s ease;
          padding: 0;
          backdrop-filter: blur(2px);
        }

        .dot:hover {
          background: rgba(255,255,255,0.6);
          transform: scale(1.2);
        }

        .dot-active {
          background: #ffd700;
          border-color: #ffd700;
          transform: scale(1.15);
        }

        .gallery-tabs {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }

        .gallery-tab {
          padding: 12px 24px;
          border-radius: 999px;
          border: 2px solid #e8e0d4;
          background: transparent;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.95rem;
          color: #5a4f3e;
          letter-spacing: 0.3px;
        }

        .gallery-tab:hover {
          border-color: #c9a84c;
          color: #c9a84c;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(201,168,76,0.15);
        }

        .gallery-tab-active {
          background: linear-gradient(135deg, #c9a84c 0%, #b8963a 100%);
          color: white;
          border-color: #c9a84c;
          box-shadow: 0 4px 16px rgba(201,168,76,0.3);
        }

        .gallery-tab-active:hover {
          background: linear-gradient(135deg, #d4b85a 0%, #c9a84c 100%);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(201,168,76,0.4);
        }

        .gallery-caption {
          margin-top: 34px;
          padding: 32px 36px;
          border-radius: 18px;
          background: linear-gradient(135deg, #fcf9f4 0%, #f8f4eb 100%);
          border: 1px solid rgba(201,168,76,0.15);
          box-shadow: 0 4px 20px rgba(201,168,76,0.08);
          position: relative;
          overflow: hidden;
        }

        .gallery-caption::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c9a84c, #ffd700, #c9a84c);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .caption-title {
          margin-bottom: 16px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #2c241a;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }

        .caption-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #c9a84c, #ffd700);
          border-radius: 2px;
        }

        .caption-text {
          white-space: pre-line;
          line-height: 1.9;
          font-size: 1rem;
          color: #4a4033;
          margin-top: 8px;
          font-weight: 400;
        }

        .caption-text strong {
          color: #c9a84c;
          font-weight: 600;
        }

        .section-pad {
          padding: 60px 0;
          background: #ffffff;
        }

        .wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .eyebrow {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #c9a84c;
          font-weight: 700;
          margin-bottom: 12px;
          position: relative;
          display: inline-block;
        }

        .eyebrow::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 30px;
          height: 2px;
          background: #c9a84c;
          border-radius: 1px;
        }

        .section-title {
          font-size: 2.4rem;
          font-weight: 800;
          color: #1a1510;
          margin-bottom: 32px;
          line-height: 1.2;
          letter-spacing: -0.5px;
        }

        .section-title br {
          display: block;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 1.7rem;
          }
          
          .carousel-btn {
            width: 34px;
            height: 34px;
            font-size: 1.2rem;
          }
          
          .carousel-btn-prev {
            left: 10px;
          }
          
          .carousel-btn-next {
            right: 10px;
          }
          
          .gallery-caption {
            padding: 24px 20px;
          }
          
          .gallery-tab {
            padding: 10px 18px;
            font-size: 0.85rem;
          }

          .caption-title {
            font-size: 1.3rem;
          }

          .caption-title::after {
            width: 30px;
          }
        }

        @media (max-width: 480px) {
          .gallery-tabs {
            gap: 8px;
          }

          .gallery-tab {
            padding: 8px 14px;
            font-size: 0.8rem;
          }

          .gallery-caption {
            padding: 20px 16px;
          }

          .caption-title {
            font-size: 1.1rem;
          }

          .caption-text {
            font-size: 0.9rem;
            line-height: 1.7;
          }
        }
      `}</style>
    </section>
  );
}