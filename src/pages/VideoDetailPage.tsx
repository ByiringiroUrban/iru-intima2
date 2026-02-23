import React, { useState } from "react";
import IruSidebar from "@/components/IruSidebar";
import IruDrawer from "@/components/IruDrawer";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🌍", label: "Public Profile", path: "/profile" },
  { icon: "🎬", label: "Video Detail", path: "/video" },
  { icon: "➕", label: "Upload", path: "/upload" },
  { icon: "🧾", label: "Refund Policy", path: "/refund-policy" },
  { icon: "🆘", label: "Support", path: "/support" },
];

const chapters = [
  { t: "00:00", title: "Intro & overview", note: "Quick welcome and release summary" },
  { t: "01:42", title: "Main sequence", note: "Core highlights begin" },
  { t: "04:36", title: "Editor picks", note: "Top curated moments" },
  { t: "07:58", title: "Behind the scenes", note: "Creator notes and process" },
  { t: "10:20", title: "Closing + next release", note: "What comes next" },
];

const VideoDetailPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState<"user"|"creator">("user");
  const [activeChapter, setActiveChapter] = useState(2);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="iru-app">
      <IruSidebar subtitle="Video Page" menuItems={menuItems}>
        <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "flex", alignItems: "center", gap: 10 }}>
          <div className="iru-avatar">AU</div>
          <div><h4 style={{ margin: 0, fontSize: ".88rem" }}>Augustin</h4><p style={{ margin: "2px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".75rem" }}>{mode === "creator" ? "Creator Studio" : "Premium Member"}</p></div>
        </div>
      </IruSidebar>
      <IruDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} subtitle="Video Page" menuItems={menuItems} />
      <main className="iru-main">
        <header className="iru-topbar">
          <button className="iru-menu-btn" onClick={() => setDrawerOpen(true)}>☰</button>
          <div className="iru-crumbs"><span>Dashboard</span><span>›</span><span>Videos</span><span>›</span><b className="ellipsis">Premium Collection • Weekly Release</b></div>
          <div className="iru-spacer" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 6, background: "rgba(255,255,255,.02)", minWidth: 220 }}>
            <button className={`iru-chip ${mode === "user" ? "active" : ""}`} style={{ padding: "8px 10px", fontSize: ".82rem", borderRadius: 9 }} onClick={() => setMode("user")}>👤 User View</button>
            <button className={`iru-chip ${mode === "creator" ? "active" : ""}`} style={{ padding: "8px 10px", fontSize: ".82rem", borderRadius: 9 }} onClick={() => setMode("creator")}>🎬 Creator View</button>
          </div>
        </header>
        <section className="iru-content">
          <div className="iru-layout" style={{ gridTemplateColumns: "1.18fr .82fr" }}>
            <div style={{ display: "grid", gap: 12 }}>
              {/* Video Player */}
              <div className="iru-panel">
                <div className="iru-panel-body">
                  <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 16, background: "rgba(255,255,255,.01)", overflow: "hidden" }}>
                    <div style={{ position: "relative", aspectRatio: "16/9", background: "radial-gradient(circle at 75% 20%, rgba(255,122,0,.22), transparent 35%), radial-gradient(circle at 15% 80%, rgba(255,157,59,.10), transparent 45%), linear-gradient(135deg,#232838,#12151d)", display: "grid", placeItems: "center", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                      <div style={{ position: "absolute", top: 10, left: 10, border: "1px solid rgba(255,255,255,.16)", background: "rgba(0,0,0,.35)", borderRadius: 999, padding: "6px 9px", fontSize: ".72rem", color: "hsl(var(--muted-foreground))", backdropFilter: "blur(6px)" }}>{mode === "creator" ? "Creator View • Video Manager" : "User View • HD"}</div>
                      <button style={{ width: 72, height: 72, borderRadius: 999, border: "1px solid rgba(255,255,255,.18)", background: "rgba(0,0,0,.32)", color: "hsl(var(--foreground))", display: "grid", placeItems: "center", cursor: "pointer", fontSize: "1.2rem" }}>▶</button>
                    </div>
                    <div style={{ padding: 12 }}>
                      <h1 style={{ margin: 0, fontSize: "1.05rem" }}>Premium Collection • Weekly Release</h1>
                      <div className="iru-muted" style={{ marginTop: 4, fontSize: ".82rem", display: "flex", gap: 10, flexWrap: "wrap" }}>
                        <span>38.2K views</span><span>•</span><span>Published Feb 16, 2026</span><span>•</span><span>12:34</span>
                      </div>
                      <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {["Premium","Members","HD"].map(t => <span key={t} className="iru-tag">{t}</span>)}
                      </div>

                      <div style={{ marginTop: 10, border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <div className="iru-avatar" style={{ width: 38, height: 38 }}>AS</div>
                          <div><h4 style={{ margin: 0, fontSize: ".86rem" }}>Alina Studio</h4><p style={{ margin: "2px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".73rem" }}>124K subscribers • Verified creator</p></div>
                        </div>
                        {mode === "user" ? (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            <button className={`iru-btn iru-btn-ghost ${liked ? "active" : ""}`} onClick={() => setLiked(!liked)}>👍 {liked ? "2.5K" : "2.4K"}</button>
                            <button className={`iru-btn iru-btn-ghost ${saved ? "active" : ""}`} onClick={() => setSaved(!saved)}>💾 {saved ? "Saved" : "Save"}</button>
                            <button className="iru-btn iru-btn-ghost">📤 Share</button>
                            <button className="iru-btn iru-btn-primary" onClick={() => setSubscribed(!subscribed)}>{subscribed ? "✅ Subscribed" : "⭐ Subscribe"}</button>
                          </div>
                        ) : (
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            <button className="iru-btn iru-btn-primary">✏️ Edit Video</button>
                            <button className="iru-btn iru-btn-ghost">📈 Analytics</button>
                            <button className="iru-btn iru-btn-ghost">🔗 Copy Link</button>
                          </div>
                        )}
                      </div>

                      <div style={{ marginTop: 10, border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.015)", padding: 10 }}>
                        <p className="iru-muted" style={{ margin: 0, fontSize: ".82rem", lineHeight: 1.5 }}>Weekly premium release with curated segments, chapter markers, and member-only access.</p>
                      </div>

                      {/* Chapters */}
                      <div style={{ marginTop: 10, border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, overflow: "hidden", background: "rgba(255,255,255,.01)" }}>
                        {chapters.map((c, i) => (
                          <div key={i} onClick={() => setActiveChapter(i)} style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 10, alignItems: "center", padding: "9px 10px", borderTop: i > 0 ? "1px solid rgba(255,255,255,.08)" : "none", cursor: "pointer", background: i === activeChapter ? "rgba(255,122,0,.07)" : "transparent" }}>
                            <div style={{ width: 22, height: 22, borderRadius: 8, display: "grid", placeItems: "center", border: "1px solid rgba(255,255,255,.08)", color: "hsl(var(--muted-foreground))", fontSize: ".7rem" }}>{i + 1}</div>
                            <div><h5 style={{ margin: 0, fontSize: ".78rem" }}>{c.title}</h5><p style={{ margin: "2px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".7rem" }}>{c.note}</p></div>
                            <div className="iru-muted" style={{ fontSize: ".72rem" }}>{c.t}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ display: "grid", gap: 12 }}>
              <div className="iru-panel">
                <div className="iru-panel-head"><h3>🎯 Related Videos</h3></div>
                <div className="iru-panel-body">
                  {[
                    { title: "Members Vault • Exclusive Drop", creator: "Alina Studio", views: "51.6K" },
                    { title: "Creator Highlights • Weekend Mix", creator: "Velvet Motion", views: "22.1K" },
                    { title: "New Weekly Curated Set", creator: "Noir Club", views: "31.8K" },
                  ].map((item, i) => (
                    <div key={i} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "grid", gridTemplateColumns: "120px 1fr", gap: 10, cursor: "pointer", marginBottom: 8 }}>
                      <div style={{ height: 72, borderRadius: 10, background: "radial-gradient(circle at 72% 20%, rgba(255,122,0,.25), transparent 35%), linear-gradient(135deg,#2a2e3b,#1b1f2a)", border: "1px solid rgba(255,255,255,.05)" }} />
                      <div><h4 style={{ margin: 0, fontSize: ".8rem", lineHeight: 1.3 }}>{item.title}</h4><p style={{ margin: "4px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".72rem" }}>{item.creator} • {item.views} views</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VideoDetailPage;
