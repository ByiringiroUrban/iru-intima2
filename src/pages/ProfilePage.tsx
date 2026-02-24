import React, { useState } from "react";
import { Link } from "react-router-dom";
import IruSidebar from "@/components/IruSidebar";
import IruDrawer from "@/components/IruDrawer";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🌍", label: "Public Profile", path: "/profile" },
  { icon: "🎬", label: "Explore", path: "/video" },
  { icon: "➕", label: "Upload", path: "/upload" },
  { icon: "🧾", label: "Refund Policy", path: "/refund-policy" },
  { icon: "🆘", label: "Support", path: "/support" },
];

const ProfilePage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="iru-app">
      <IruSidebar subtitle="Public Profile" menuItems={menuItems} footer={<><button className="iru-btn iru-btn-primary">Follow Creator</button></>} />
      <IruDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} subtitle="Public Profile" menuItems={menuItems} />
      <main className="iru-main">
        <header className="iru-topbar">
          <button className="iru-menu-btn" onClick={() => setDrawerOpen(true)}>☰</button>
          <div className="iru-crumbs"><span>Creators</span><span>›</span><b className="ellipsis">@intima.muse</b></div>
          <div className="iru-top-actions">
            <button className="iru-btn iru-btn-ghost">Share</button>
            <button className="iru-btn iru-btn-ghost">Copy Link</button>
          </div>
        </header>
        <section className="iru-content">
          {/* Profile Hero */}
          <div className="iru-panel" style={{ overflow: "hidden" }}>
            <div style={{ height: 180, borderBottom: "1px solid rgba(255,255,255,.08)", background: "linear-gradient(120deg, rgba(255,122,0,.18), rgba(255,157,59,.08)), radial-gradient(500px 180px at 20% 30%, rgba(255,255,255,.10), transparent 60%), linear-gradient(135deg,#1a1f2b,#12151d)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 60%, rgba(15,16,20,.85))" }} />
            </div>
            <div style={{ padding: 14, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 12, marginTop: -56, alignItems: "end" }}>
              <div style={{ width: 112, height: 112, borderRadius: 18, border: "2px solid rgba(255,255,255,.12)", background: "radial-gradient(120px 120px at 30% 20%, rgba(255,122,0,.25), transparent 60%), linear-gradient(135deg,#202535,#161a24)", display: "grid", placeItems: "center", fontSize: "1.5rem", fontWeight: 900, color: "#ffd7b0", boxShadow: "0 12px 28px rgba(0,0,0,.28)" }}>IM</div>
              <div>
                <h1 style={{ margin: 0, fontSize: "1.05rem", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>Intima Muse <span className="iru-pill ok">VERIFIED</span></h1>
                <div className="iru-muted" style={{ marginTop: 4, fontSize: ".84rem" }}>@intima.muse · Kigali, Rwanda</div>
                <p style={{ marginTop: 8, color: "#dfe4ee", fontSize: ".85rem", lineHeight: 1.45, maxWidth: "72ch" }}>Creative lifestyle creator sharing premium visual stories, behind-the-scenes moments, and exclusive members-only drops. New content every week 💫</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
                  <span className="iru-pill info">🌍 Public Profile</span>
                  <span className="iru-pill ok">✅ Identity Verified</span>
                  <span className="iru-pill warn">⭐ 4.8 Rating</span>
                </div>
              </div>
              <div style={{ display: "grid", gap: 8, minWidth: 220 }}>
                <button className="iru-btn iru-btn-primary">Follow</button>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <button className="iru-btn iru-btn-ghost">Subscribe</button>
                  <button className="iru-btn iru-btn-ghost">Message</button>
                </div>
              </div>
            </div>
            <div style={{ padding: "0 14px 14px", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 8 }}>
              {[["Followers","12.4K"],["Content Posts","248"],["Subscribers","1,320"],["Joined","2025"]].map(([k,v]) => (
                <div key={k} style={{ border: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.02)", borderRadius: 12, padding: 10 }}>
                  <div className="iru-muted" style={{ fontSize: ".72rem" }}>{k}</div>
                  <div style={{ marginTop: 4, fontWeight: 800, fontSize: ".95rem" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="iru-panel">
            <div className="iru-panel-head"><h3>🌍 Creator Public Profile</h3></div>
            <div className="iru-panel-body">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                {["overview","content","plans","reviews"].map(t => (
                  <button key={t} className={`iru-chip ${activeTab === t ? "active" : ""}`} onClick={() => setActiveTab(t)} style={{ padding: "8px 10px", fontSize: ".78rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
                ))}
              </div>
              {activeTab === "overview" && (
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, background: "rgba(255,255,255,.02)", padding: 10 }}>
                    <h4 style={{ margin: 0, fontSize: ".84rem" }}>About the Creator</h4>
                    <p style={{ margin: "5px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".76rem", lineHeight: 1.4 }}>Intima Muse focuses on lifestyle visuals, exclusive posts, premium drops, and curated personal storytelling.</p>
                  </div>
                  <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, background: "rgba(255,255,255,.02)", padding: 10 }}>
                    <h4 style={{ margin: 0, fontSize: ".84rem" }}>Creator Policies</h4>
                    <ul style={{ margin: "5px 0 0 18px", padding: 0, color: "#e9edf5", fontSize: ".78rem", lineHeight: 1.5 }}>
                      <li>Respectful messaging required</li>
                      <li>No harassment or spam</li>
                      <li>Refunds follow platform policy</li>
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === "plans" && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
                  {[["Starter Access","$4.99"],["Creator Club","$9.99"],["VIP Circle","$24.99"]].map(([name,price]) => (
                    <div key={name} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 12, display: "grid", gap: 8 }}>
                      <h4 style={{ margin: 0, fontSize: ".88rem" }}>{name}</h4>
                      <div style={{ fontSize: "1.15rem", fontWeight: 900 }}>{price} <small style={{ fontSize: ".76rem", color: "hsl(var(--muted-foreground))", fontWeight: 600 }}>/ month</small></div>
                      <button className="iru-btn iru-btn-primary" style={{ width: "100%" }}>Subscribe</button>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "content" && <p className="iru-muted">Content grid with video and photo previews would appear here.</p>}
              {activeTab === "reviews" && <p className="iru-muted">User reviews and ratings would appear here.</p>}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
