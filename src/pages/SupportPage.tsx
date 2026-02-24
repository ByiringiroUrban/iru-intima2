import React, { useState } from "react";
import IruSidebar from "@/components/IruSidebar";
import IruDrawer from "@/components/IruDrawer";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🎬", label: "Explore", path: "/video" },
  { icon: "👤", label: "Login / Register", path: "/login" },
  { icon: "🧾", label: "Refund Policy", path: "/refund-policy" },
  { icon: "🆘", label: "Support / Help Center", path: "/support" },
];

const faqs = [
  { cat: "account", q: "How do I reset my password if I can't log in?", a: "Use the 'Forgot Password' option on the login page. If the reset email does not arrive, check spam and submit a support ticket." },
  { cat: "account", q: "Why is my account asking for additional verification?", a: "Additional verification may be required for security or suspicious login activity." },
  { cat: "billing", q: "I was charged twice. What should I do?", a: "Open a billing ticket with the date, amount, and transaction references." },
  { cat: "billing", q: "How do I cancel or change my subscription plan?", a: "You can manage your plan in Billing & Transactions, or submit a ticket." },
  { cat: "creator", q: "My upload is stuck on processing. How can I fix it?", a: "Try re-uploading or submit a creator support ticket with file details." },
  { cat: "safety", q: "How do I report harassment or abuse?", a: "Mark the ticket as High or Urgent and provide all relevant URLs/usernames." },
  { cat: "legal", q: "How do I submit a copyright takedown request?", a: "Use the Copyright / Takedown page with the required information." },
];

const SupportPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(f => {
    const catOk = activeCat === "all" || f.cat === activeCat;
    const searchOk = !searchTerm || f.q.toLowerCase().includes(searchTerm.toLowerCase()) || f.a.toLowerCase().includes(searchTerm.toLowerCase());
    return catOk && searchOk;
  });

  return (
    <div className="iru-app">
      <IruSidebar subtitle="Help Center" menuItems={menuItems} footer={<button className="iru-btn iru-btn-primary" onClick={() => window.print()}>Print / PDF</button>} />
      <IruDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} subtitle="Help Center" menuItems={menuItems} />
      <main className="iru-main">
        <header className="iru-topbar">
          <button className="iru-menu-btn" onClick={() => setDrawerOpen(true)}>☰</button>
          <div className="iru-crumbs"><span>Support</span><span>›</span><b className="ellipsis">Help Center</b></div>
          <div className="iru-top-actions">
            <div className="iru-searchbox"><span>🔎</span><input placeholder="Search help articles..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
          </div>
        </header>
        <section className="iru-content">
          <div className="iru-panel" style={{ overflow: "hidden", background: "linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)), radial-gradient(700px 240px at 10% 0%, rgba(90,167,255,.10), transparent 60%)" }}>
            <div style={{ padding: 14 }}>
              <h1 style={{ margin: 0, fontSize: "1.2rem" }}>Support / Help Center</h1>
              <p className="iru-muted" style={{ margin: "8px 0 0", fontSize: ".9rem", lineHeight: 1.5 }}>Find answers quickly, submit support tickets, and reach the right team.</p>
              <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span className="iru-tag ok">✅ FAQ + Ticket Form</span>
                <span className="iru-tag info">🎫 Ticket Tracker</span>
                <span className="iru-tag warn">⚠️ Connect backend before launch</span>
              </div>
            </div>
          </div>

          {/* Get Help Fast */}
          <div className="iru-panel">
            <div className="iru-panel-head"><h3>🧭 Get Help Fast</h3></div>
            <div className="iru-panel-body">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { icon: "💳", title: "Billing & Subscriptions", desc: "Plan changes, charges, refunds" },
                  { icon: "🔐", title: "Login & Account Access", desc: "Password reset, email verification" },
                  { icon: "🎬", title: "Creator Support", desc: "Uploads, metadata, payouts" },
                  { icon: "🛡️", title: "Safety / Abuse / Legal", desc: "Harassment, copyright, urgent reports" },
                ].map((item, i) => (
                  <div key={i} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, background: "rgba(255,255,255,.02)", padding: 10 }}>
                    <h4 style={{ margin: 0, fontSize: ".8rem" }}>{item.icon} {item.title}</h4>
                    <p style={{ margin: "4px 0 0", color: "hsl(var(--muted-foreground))", fontSize: ".75rem", lineHeight: 1.35 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="iru-panel">
            <div className="iru-panel-head"><h3>❓ Frequently Asked Questions</h3><span className="iru-muted iru-small">{filteredFaqs.length} items</span></div>
            <div className="iru-panel-body">
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 10 }}>
                {["all","account","billing","creator","safety","legal"].map(cat => (
                  <button key={cat} className={`iru-chip ${activeCat === cat ? "active" : ""}`} style={{ padding: "7px 10px", fontSize: ".74rem" }} onClick={() => setActiveCat(cat)}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</button>
                ))}
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                {filteredFaqs.map((faq, i) => (
                  <div key={i} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, background: "rgba(255,255,255,.015)", overflow: "hidden" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", textAlign: "left", border: "none", background: "transparent", color: "hsl(var(--foreground))", padding: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, cursor: "pointer", fontWeight: 700 }}>
                      <span>{faq.q}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <small style={{ fontWeight: 700, color: "hsl(var(--muted-foreground))", border: "1px solid rgba(255,255,255,.08)", borderRadius: 999, padding: "3px 7px", fontSize: ".65rem" }}>{faq.cat.toUpperCase()}</small>
                        <span style={{ color: "hsl(var(--muted-foreground))", transition: ".2s", transform: openFaq === i ? "rotate(180deg)" : "none" }}>⌄</span>
                      </span>
                    </button>
                    {openFaq === i && (
                      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", padding: "10px 12px 12px" }}>
                        <p style={{ margin: 0, color: "hsl(var(--muted-foreground))", fontSize: ".82rem", lineHeight: 1.45 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SupportPage;
