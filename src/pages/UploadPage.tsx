import React, { useState } from "react";
import IruSidebar from "@/components/IruSidebar";
import IruDrawer from "@/components/IruDrawer";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "➕", label: "Upload Page", path: "/upload" },
  { icon: "🎬", label: "Content", path: "/video" },
  { icon: "🌍", label: "Profile", path: "/profile" },
  { icon: "🧾", label: "Refund Policy", path: "/refund-policy" },
  { icon: "🆘", label: "Support", path: "/support" },
];

const UploadPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="iru-app">
      <IruSidebar subtitle="Upload Studio" menuItems={menuItems}>
        <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "flex", alignItems: "center", gap: 10 }}>
          <div className="iru-avatar">C</div>
          <div><h4 style={{ margin: 0, fontSize: ".88rem" }}>Creator Studio</h4><p style={{ margin: "2px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".75rem" }}>Content Manager</p></div>
        </div>
      </IruSidebar>
      <IruDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} subtitle="Upload Studio" menuItems={menuItems} />
      <main className="iru-main">
        <header className="iru-topbar">
          <button className="iru-menu-btn" onClick={() => setDrawerOpen(true)}>☰</button>
          <div className="iru-crumbs"><span>Creator Dashboard</span><span>›</span><span>Uploads</span><span>›</span><b className="ellipsis">New Video Upload</b></div>
          <div className="iru-top-actions">
            <button className="iru-btn iru-btn-primary">Publish</button>
          </div>
        </header>
        <section className="iru-content">
          <div className="iru-layout" style={{ gridTemplateColumns: "minmax(0,1.15fr) minmax(320px,.85fr)" }}>
            <div className="iru-panel">
              <div className="iru-panel-head"><h3>🎬 Advanced Upload Form</h3></div>
              <div className="iru-panel-body">
                <div style={{ display: "grid", gap: 12 }}>
                  {/* Basic Info */}
                  <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.015)", overflow: "hidden" }}>
                    <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.01)", display: "flex", justifyContent: "space-between" }}><h4 style={{ margin: 0, fontSize: ".84rem" }}>1) Basic Information</h4><small className="iru-muted">Required</small></div>
                    <div style={{ padding: 12, display: "grid", gap: 10 }}>
                      <div className="iru-field"><label>Video Title *</label><input type="text" maxLength={120} placeholder="Enter a strong, clear title" value={title} onChange={e => setTitle(e.target.value)} /><div className="iru-muted" style={{ fontSize: ".72rem" }}>{title.length}/120 characters</div></div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                        <div className="iru-field"><label>Category *</label><select value={category} onChange={e => setCategory(e.target.value)}><option value="">Select category</option><option>Premium Collection</option><option>Members Vault</option><option>Creator Update</option><option>Highlights</option></select></div>
                        <div className="iru-field"><label>Visibility</label><select><option>Premium Members</option><option>Subscribers Only</option><option>Public Preview</option></select></div>
                      </div>
                      <div className="iru-field"><label>Description *</label><textarea maxLength={500} placeholder="Describe the video..." value={description} onChange={e => setDescription(e.target.value)} /><div className="iru-muted" style={{ fontSize: ".72rem" }}>{description.length}/500 characters</div></div>
                    </div>
                  </div>

                  {/* Media */}
                  <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.015)", overflow: "hidden" }}>
                    <div style={{ padding: "10px 12px", borderBottom: "1px solid rgba(255,255,255,.08)", background: "rgba(255,255,255,.01)" }}><h4 style={{ margin: 0, fontSize: ".84rem" }}>2) Media Files</h4></div>
                    <div style={{ padding: 12, display: "grid", gap: 10 }}>
                      <div style={{ border: "1px dashed rgba(255,255,255,.16)", borderRadius: 12, minHeight: 110, display: "grid", placeItems: "center", textAlign: "center", color: "hsl(var(--muted-foreground))", padding: 10, cursor: "pointer", background: "linear-gradient(180deg,rgba(255,255,255,.015),rgba(255,255,255,.005))" }}>
                        <div><strong style={{ display: "block", color: "hsl(var(--foreground))", fontSize: ".84rem" }}>Click to select video</strong><small style={{ display: "block", marginTop: 4, fontSize: ".72rem" }}>MP4 / MOV / WEBM • Max 2GB</small></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div style={{ position: "sticky", top: 72, display: "grid", gap: 12 }}>
              <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: ".78rem" }}><span className="iru-muted">Upload Readiness</span><b>{title && category && description ? "60%" : title ? "20%" : "0%"}</b></div>
                <div style={{ marginTop: 8, height: 8, borderRadius: 999, background: "rgba(255,255,255,.07)", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: title && category && description ? "60%" : title ? "20%" : "0%", background: "linear-gradient(135deg, hsl(27 100% 50%), hsl(27 100% 61%))", transition: "width .2s ease" }} />
                </div>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "grid", gap: 8 }}>
                <strong style={{ fontSize: ".82rem" }}>📋 Publish Summary</strong>
                {[["Status","Draft"],["Title", title || "Untitled"],["Category", category || "Not set"]].map(([k,v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, color: "hsl(var(--muted-foreground))", fontSize: ".74rem" }}><span>{k}</span><b style={{ color: "hsl(var(--foreground))" }}>{v}</b></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UploadPage;
