import React from "react";
import { Link } from "react-router-dom";
import iruLogo from "@/assets/IRU_Intima_Logo.png";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? "open" : ""}`}>
      <div className="drawer-backdrop" onClick={onClose} />
      <div className="drawer-panel">
        <Link to="/" className="iru-brand">
          <div className="iru-brand-badge">
            <img src={iruLogo} alt="IRU Intima" />
          </div>
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
  );
};
