import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

interface HeroSectionProps {
  filters: string[];
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ filters, currentFilter, onFilterChange }) => {
  const miniCards = [
    {
      title: "Featured Creator Spotlight",
      description: "Top-performing premium channel • Updated today",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    },
    {
      title: "New Uploads & Collections",
      description: "Fresh private content organized by tags and themes",
      videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
      thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    },
    {
      title: "Mobile-Ready Experience",
      description: "Fast cards, responsive grid, and simple filters",
      videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
      thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    },
  ];

  const handleMiniCardClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <section className="hero-section">
      <div className="hero-card">
        <div>
          <div className="eyebrow">
            <Sparkles size={16} /> Trending private experiences
          </div>
          <h1>Discover premium private content on a sleek, modern platform</h1>
          <p>
            IRU Intima is designed for smooth browsing, creator discovery, and fast mobile access — with privacy-first UX, clean navigation, and a premium media experience.
          </p>

          <div className="hero-cta">
            <button className="iru-btn iru-btn-accent">Explore Trending</button>
            <Link to="/login" className="iru-btn iru-btn-ghost">
              Become a Creator
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>12k+</strong>
              <span>Content items</span>
            </div>
            <div className="stat">
              <strong>1.9k+</strong>
              <span>Verified creators</span>
            </div>
            <div className="stat">
              <strong>24/7</strong>
              <span>Secure access</span>
            </div>
          </div>
        </div>

        <div className="hero-side">
          {miniCards.map((card, i) => (
            <div
              className="mini-card"
              key={i}
              onClick={() => handleMiniCardClick(card.videoUrl)}
              style={{ cursor: "pointer" }}
            >
              <div className="mini-thumb">
                <img
                  src={card.thumbnail}
                  alt={card.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="mini-meta">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chips">
        {filters.map((f) => (
          <button
            key={f}
            className={`iru-chip ${currentFilter === f ? "active" : ""}`}
            onClick={() => onFilterChange(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </section>
  );
};
