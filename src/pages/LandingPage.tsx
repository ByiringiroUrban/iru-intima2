import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iruLogo from "@/assets/IRU_Intima_Logo.png";
import "./LandingPage.css";

const featuredData = [
  { title: "Private Room Highlights • Creator Collection", creator: "Alina Studio", views: "1.2M", time: "12:34", tag: "trending", badges: ["Premium","HD"], age: "18+" },
  { title: "Night Sessions • Exclusive Members Clip", creator: "Velvet Motion", views: "980K", time: "08:42", tag: "premium", badges: ["Members","4K"], age: "18+" },
  { title: "Top Creator Mix • Weekly Popular Picks", creator: "Noir Club", views: "742K", time: "15:19", tag: "popular", badges: ["Popular","Fast"], age: "18+" },
  { title: "Fresh Uploads • Curated New Discoveries", creator: "Midnight Room", views: "420K", time: "06:58", tag: "new", badges: ["New","HD"], age: "18+" },
  { title: "Creator Spotlight • Premium Vault Access", creator: "Aura House", views: "512K", time: "11:05", tag: "creators", badges: ["Creator","VIP"], age: "18+" },
  { title: "Trending Collection • Weekly Editor Picks", creator: "Luna Private", views: "660K", time: "10:12", tag: "trending", badges: ["Trending","HD"], age: "18+" },
  { title: "Members-Only Reels • Exclusive Updates", creator: "Studio N", views: "350K", time: "09:23", tag: "premium", badges: ["Premium","New"], age: "18+" },
  { title: "Most Watched This Week • Popular Showcase", creator: "Vibe Room", views: "1.8M", time: "14:10", tag: "popular", badges: ["Popular","Top"], age: "18+" }
];

const latestData = [
  { title: "New Upload • Midnight Collection Drop", creator: "Lina", views: "120K", time: "07:14", tag: "new", badges: ["New"], age: "18+" },
  { title: "Fresh Creator Intro • Premium Channel", creator: "V-House", views: "85K", time: "05:48", tag: "creators", badges: ["Creator"], age: "18+" },
  { title: "Top Clips Recap • Daily Watchlist", creator: "Noir", views: "201K", time: "09:11", tag: "popular", badges: ["Popular"], age: "18+" },
  { title: "Members Collection • Limited Access", creator: "Aura", views: "77K", time: "10:06", tag: "premium", badges: ["VIP"], age: "18+" },
  { title: "Trending Reels • Fast Picks", creator: "M.Room", views: "149K", time: "04:55", tag: "trending", badges: ["Trending"], age: "18+" },
  { title: "Exclusive Vault • New Additions", creator: "Velvet", views: "91K", time: "13:02", tag: "premium", badges: ["Premium"], age: "18+" },
  { title: "Community Choice • Daily Winner", creator: "Club N", views: "110K", time: "08:17", tag: "popular", badges: ["Top"], age: "18+" },
  { title: "Creator Updates • Behind the Scenes", creator: "Alina", views: "132K", time: "06:40", tag: "creators", badges: ["Creator","New"], age: "18+" }
];

const creators = [
  { initial: "A", name: "Alina Studio", info: "Premium • 240 uploads" },
  { initial: "M", name: "Midnight Room", info: "Trending • 180 uploads" },
  { initial: "V", name: "Velvet Motion", info: "Creator • 320 uploads" },
  { initial: "N", name: "Noir Club", info: "Popular • 95 uploads" },
];

const filters = ["all", "trending", "new", "premium", "popular", "creators"];

const LandingPage: React.FC = () => {
  const [ageVerified, setAgeVerified] = useState(() => localStorage.getItem("iru_age_verified") === "1");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("all");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("iru_theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("iru_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  const searchFilters = ["all", "featured", "latest", "country", "creators", "trending"];

  const filterCards = (data: typeof featuredData) => {
    return data.filter(item => {
      const matchesFilter = currentFilter === "all" || item.tag === currentFilter;
      const matchesSearch = !searchTerm || (item.title + " " + item.creator + " " + item.badges.join(" ")).toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filteredFeatured = filterCards(featuredData);

  const handleAgeVerify = () => {
    localStorage.setItem("iru_age_verified", "1");
    setAgeVerified(true);
  };

  return (
    <>
      {/* Age Gate */}
      {!ageVerified && (
        <div className="age-modal show">
          <div className="age-card">
            <div className="eyebrow">🔒 Privacy & Age Check</div>
            <h3>Welcome to IRU Intima</h3>
            <p>This platform is intended for adults only. By continuing, you confirm you are 18+ and agree to follow local laws and the platform terms.</p>
            <div className="age-actions">
              <button className="iru-btn iru-btn-accent" onClick={handleAgeVerify}>I am 18+ — Enter</button>
              <button className="iru-btn iru-btn-ghost" onClick={() => window.history.back()}>Leave</button>
            </div>
          </div>
        </div>
      )}

      {/* Drawer */}
      <div className={`drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-backdrop" onClick={() => setDrawerOpen(false)} />
        <div className="drawer-panel">
          <Link to="/" className="iru-brand">
            <div className="iru-brand-badge"><img src={iruLogo} alt="IRU Intima" /></div>
            <div>IRU Intima</div>
          </Link>
          <div className="drawer-links">
            <a href="#featured">Featured</a>
            <a href="#latest">Latest</a>
            <a href="#creators">Creators</a>
            <a href="#join">Join</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="topbar-landing">
        <div className="iru-container topbar-inner">
          <button className="menu-toggle" onClick={() => setDrawerOpen(true)} aria-label="Open menu">☰</button>

          <Link to="/" className="iru-brand">
            <div className="iru-brand-badge"><img src={iruLogo} alt="IRU Intima" /></div>
            <div>IRU Intima</div>
          </Link>

          <nav className="nav-landing">
            {/* <a href="#featured">Featured</a>
            <a href="#latest">Latest</a>
            <a href="#creators">Creators</a> */}
          </nav>

          <div className="search-wrap">
            <div className="search-filter-dropdown">
              <button className="search-filter-toggle" onClick={() => setFilterDropdownOpen(p => !p)}>
                {searchFilter === "all" ? "Filter" : searchFilter.charAt(0).toUpperCase() + searchFilter.slice(1)}
                <span className="filter-arrow">▾</span>
              </button>
              {filterDropdownOpen && (
                <>
                  <div className="filter-dropdown-backdrop" onClick={() => setFilterDropdownOpen(false)} />
                  <div className="filter-dropdown-menu">
                    {searchFilters.map(f => (
                      <button key={f} className={`filter-dropdown-item ${searchFilter === f ? "active" : ""}`} onClick={() => { setSearchFilter(f); setFilterDropdownOpen(false); }}>
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <input type="text" placeholder={`Search ${searchFilter === "all" ? "videos, creators, tags" : searchFilter}...`} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
          </div>

          <div className="actions-landing">
            <button className="iru-btn iru-btn-ghost" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <Link to="/login" className="iru-btn iru-btn-ghost">Login</Link>
            <Link to="/login" className="iru-btn iru-btn-accent">Creator</Link>
          </div>
        </div>
      </header>

      <main className="iru-container">
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-card">
            <div>
              <div className="eyebrow">✨ Trending private experiences</div>
              <h1>Discover premium private content on a sleek, modern platform</h1>
              <p>IRU Intima is designed for smooth browsing, creator discovery, and fast mobile access — with privacy-first UX, clean navigation, and a premium media experience.</p>

              <div className="hero-cta">
                <button className="iru-btn iru-btn-accent">Explore Trending</button>
                <Link to="/login" className="iru-btn iru-btn-ghost">Become a Creator</Link>
              </div>

              <div className="hero-stats">
                <div className="stat"><strong>12k+</strong><span>Content items</span></div>
                <div className="stat"><strong>1.9k+</strong><span>Verified creators</span></div>
                <div className="stat"><strong>24/7</strong><span>Secure access</span></div>
              </div>
            </div>

            <div className="hero-side">
              {["Featured Creator Spotlight", "New Uploads & Collections", "Mobile-Ready Experience"].map((title, i) => (
                <div className="mini-card" key={i}>
                  <div className="mini-thumb" />
                  <div className="mini-meta">
                    <h4>{title}</h4>
                    <p>{["Top-performing premium channel • Updated today", "Fresh private content organized by tags and themes", "Fast cards, responsive grid, and simple filters"][i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chips">
            {filters.map(f => (
              <button key={f} className={`iru-chip ${currentFilter === f ? "active" : ""}`} onClick={() => setCurrentFilter(f)}>
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </section>

        {/* Featured */}
        <section id="featured">
          <div className="section-head"><h2>🔥 Featured Picks</h2><a href="#">View all</a></div>
          <div className="content-grid">
            {filteredFeatured.length === 0 ? (
              <div className="empty-state show">No matching content found. Try another keyword or filter.</div>
            ) : (
              filteredFeatured.map((item, i) => (
                <ContentCard key={i} item={item} />
              ))
            )}
          </div>
        </section>

        {/* Latest */}
        <section id="latest">
          <div className="section-head"><h2>🆕 Latest Uploads</h2><a href="#">Browse latest</a></div>
          <div className="content-grid">
            {latestData.map((item, i) => <ContentCard key={i} item={item} />)}
          </div>
        </section>


        {/* Join CTA */}
        <section id="join">
          <div className="cta-section">
            <div>
              <h3>Launch IRU Intima with premium UX 🚀</h3>
              <p>Ready for monetization modules, auth pages, creator dashboards, and payment integration screens.</p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <button className="iru-btn iru-btn-accent">Start Building</button>
              <button className="iru-btn iru-btn-ghost">See Creator Plans</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <div className="iru-container footer-grid">
          <div>© {new Date().getFullYear()} IRU Intima • Privacy-first media platform</div>
          <div className="footer-links">
            <Link to="/refund-policy">Terms</Link>
            <Link to="/refund-policy">Privacy</Link>
            <a href="#">DMCA</a>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

const ContentCard: React.FC<{ item: typeof featuredData[0] }> = ({ item }) => (
  <article className="card">
    <div className="thumb">
      <div className="badge">{item.age}</div>
      <div className="play">▶</div>
      <div className="duration">{item.time}</div>
    </div>
    <div className="card-body">
      <h3 className="card-title">{item.title}</h3>
      <div className="card-meta">
        <span>{item.creator}</span>
        <span>{item.views} views</span>
      </div>
      <div className="row-badges">
        {item.badges.map((b, i) => <span key={i} className="tiny">{b}</span>)}
      </div>
    </div>
  </article>
);

export default LandingPage;
