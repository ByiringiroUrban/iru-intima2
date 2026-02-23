import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  subtitle?: string;
  menuItems: { icon: string; label: string; path: string }[];
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const IruSidebar: React.FC<SidebarProps> = ({ subtitle = "Private Content Hub", menuItems, footer, children }) => {
  const location = useLocation();

  return (
    <aside className="iru-sidebar">
      <Link to="/" className="iru-brand">
        <div className="iru-brand-badge">IR</div>
        <div>
          IRU Intima
          <small>{subtitle}</small>
        </div>
      </Link>

      {children}

      <nav className="iru-menu">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? "active" : ""}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </nav>

      {footer && <div className="iru-sidebar-footer">{footer}</div>}
    </aside>
  );
};

export default IruSidebar;
