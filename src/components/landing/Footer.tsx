import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
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
  );
};
