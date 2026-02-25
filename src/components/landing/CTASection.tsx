import React from "react";
import { Rocket } from "lucide-react";

export const CTASection: React.FC = () => {
  return (
    <section id="join">
      <div className="cta-section">
        <div>
          <h3>
            Launch IRU Intima with premium UX <Rocket size={20} style={{ display: "inline", verticalAlign: "middle" }} />
          </h3>
          <p>Ready for monetization modules, auth pages, creator dashboards, and payment integration screens.</p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="iru-btn iru-btn-accent">Start Building</button>
          <button className="iru-btn iru-btn-ghost">See Creator Plans</button>
        </div>
      </div>
    </section>
  );
};
