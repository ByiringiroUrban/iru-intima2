import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  subtitle?: string;
  menuItems: { icon: string; label: string; path: string }[];
  extra?: React.ReactNode;
}

const IruDrawer: React.FC<DrawerProps> = ({ open, onClose, subtitle = "Private Content Hub", menuItems, extra }) => {
  const location = useLocation();

  return (
    <div className={`iru-drawer ${open ? "show" : ""}`}>
      <div className="iru-drawer-backdrop" onClick={onClose} />
      <div className="iru-drawer-panel">
        <Link to="/" className="iru-brand" onClick={onClose}>
          <div className="iru-brand-badge">IR</div>
          <div>
            IRU Intima
            <small>{subtitle}</small>
          </div>
        </Link>

        <nav className="iru-menu">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
              onClick={onClose}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </nav>

        {extra}
      </div>
    </div>
  );
};

export default IruDrawer;
