import React, { useState } from "react";
import IruSidebar from "@/components/IruSidebar";
import IruDrawer from "@/components/IruDrawer";

const menuItems = [
  { icon: "🏠", label: "Home", path: "/" },
  { icon: "🎬", label: "Explore", path: "/video" },
  { icon: "👤", label: "Login / Register", path: "/login" },
  { icon: "🧾", label: "Refund & Disputes", path: "/refund-policy" },
  { icon: "🆘", label: "Support", path: "/support" },
];

const policySections = [
  { id: "1", title: "1. Purpose and Scope", content: "This Refund and Disputes Policy explains how IRU Intima reviews and resolves payment concerns, including refund requests, transaction disputes, duplicate charges, unauthorized charge reports, and chargeback-related actions." },
  { id: "2", title: "2. Key Definitions", content: "Refund: Return of all or part of a payment. Dispute: A complaint about a transaction. Chargeback: A payment reversal initiated through a bank. Unauthorized Charge: A transaction claimed to have been made without permission." },
  { id: "3", title: "3. General Refund Principles", content: "Refund decisions are based on transaction details, service delivery status, platform records, the reason for request, applicable laws, and payment processor requirements." },
  { id: "4", title: "4. Eligible Transactions", content: "Examples: duplicate charges, unauthorized charges, billing errors, subscription billing after timely cancellation, failed purchase delivery due to platform error." },
  { id: "5", title: "5. Non-Refundable Transactions", content: "Charges after voluntary use, preference changes after delivery, claims outside review period, purchases via abuse/fraud, chargeback claims already resolved." },
  { id: "6", title: "6. Subscription Billing", content: "Subscription plans may renew automatically unless canceled before the renewal date. Refund review depends on cancellation timing, access logs, and applicable law." },
  { id: "7", title: "7. Unauthorized Charges", content: "Contact support immediately. Change your password, review login history, submit transaction ID and reason." },
  { id: "8", title: "8. Creator Payout Disputes", content: "Creators may submit disputes about payout calculations, withheld balances, chargeback deductions, or delayed payouts." },
  { id: "9", title: "9. Chargebacks", content: "If a user initiates a chargeback, IRU Intima may provide transaction evidence and may limit account features until resolved." },
];

const RefundPolicyPage: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = policySections.filter(s => !searchTerm || s.title.toLowerCase().includes(searchTerm.toLowerCase()) || s.content.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="iru-app">
      <IruSidebar subtitle="Legal Center" menuItems={menuItems} footer={<button className="iru-btn iru-btn-primary" onClick={() => window.print()}>Print / PDF</button>} />
      <IruDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} subtitle="Legal Center" menuItems={menuItems} />
      <main className="iru-main">
        <header className="iru-topbar">
          <button className="iru-menu-btn" onClick={() => setDrawerOpen(true)}>☰</button>
          <div className="iru-crumbs"><span>Legal</span><span>›</span><b className="ellipsis">Refund and Disputes Policy</b></div>
          <div className="iru-top-actions">
            <div className="iru-searchbox"><span>🔎</span><input placeholder="Search policy..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} /></div>
          </div>
        </header>
        <section className="iru-content">
          <div className="iru-panel" style={{ overflow: "hidden", background: "linear-gradient(180deg,rgba(255,255,255,.02),rgba(255,255,255,.01)), radial-gradient(700px 240px at 10% 0%, rgba(255,122,0,.12), transparent 60%)" }}>
            <div style={{ padding: 14, display: "grid", gridTemplateColumns: "1.2fr .8fr", gap: 12, alignItems: "start" }}>
              <div>
                <h1 style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.2 }}>Refund and Disputes Policy</h1>
                <p className="iru-muted" style={{ margin: "8px 0 0", fontSize: ".9rem", lineHeight: 1.5 }}>This policy explains how IRU Intima handles refund requests, billing disputes, and payment-related investigations.</p>
                <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <span className="iru-tag ok">✅ Clear workflow</span>
                  <span className="iru-tag info">🧾 Refund + dispute guidance</span>
                  <span className="iru-tag warn">⚖️ Compliance template</span>
                </div>
              </div>
              <div style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.02)", padding: 10, display: "grid", gap: 8 }}>
                <h4 style={{ margin: 0, fontSize: ".85rem" }}>Policy Summary</h4>
                {[["Version","v1.0"],["Applies to","Users + Creators"],["Flow","Request → Review → Decision"]].map(([k,v]) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: ".75rem", color: "hsl(var(--muted-foreground))" }}><span>{k}</span><b style={{ color: "hsl(var(--foreground))" }}>{v}</b></div>
                ))}
              </div>
            </div>
          </div>

          <div className="iru-layout" style={{ gridTemplateColumns: "minmax(0,1fr) 340px" }}>
            <div style={{ display: "grid", gap: 10 }}>
              {filteredSections.map(s => (
                <div key={s.id} style={{ border: "1px solid rgba(255,255,255,.08)", borderRadius: 14, background: "rgba(255,255,255,.015)", padding: 12, scrollMarginTop: 92 }}>
                  <h2 style={{ margin: 0, fontSize: ".95rem" }}>{s.title}</h2>
                  <p style={{ margin: "8px 0 0", color: "hsl(var(--foreground))", fontSize: ".9rem", lineHeight: 1.55 }}>{s.content}</p>
                </div>
              ))}
            </div>
            <div style={{ position: "sticky", top: 84 }}>
              <div className="iru-panel">
                <div className="iru-panel-head"><h3>📚 Contents</h3></div>
                <div className="iru-panel-body">
                  <div style={{ display: "grid", gap: 6 }}>
                    {policySections.map(s => (
                      <a key={s.id} href={`#section-${s.id}`} style={{ border: "1px solid transparent", borderRadius: 10, padding: "8px 10px", color: "hsl(var(--muted-foreground))", fontSize: ".78rem", lineHeight: 1.3, display: "block" }}>{s.title}</a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RefundPolicyPage;
