import React from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import iruLogo from "@/assets/IRU_Intima_Logo.png";

interface HeaderProps {
  theme: string;
  onToggleTheme: () => void;
  searchFilter: string;
  searchTerm: string;
  filterDropdownOpen: boolean;
  onSearchFilterChange: (filter: string) => void;
  onSearchTermChange: (term: string) => void;
  onToggleFilterDropdown: () => void;
  onOpenDrawer: () => void;
}

const searchFilters = ["all", "featured", "latest", "country", "creators", "trending"];

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  searchFilter,
  searchTerm,
  filterDropdownOpen,
  onSearchFilterChange,
  onSearchTermChange,
  onToggleFilterDropdown,
  onOpenDrawer,
}) => {
  return (
    <header className="topbar-landing">
      <div className="iru-container topbar-inner">
        <button className="menu-toggle" onClick={onOpenDrawer} aria-label="Open menu">
          <Menu size={20} />
        </button>

        <Link to="/" className="iru-brand">
          <div className="iru-brand-badge">
            <img src={iruLogo} alt="IRU Intima" />
          </div>
          <div>IRU Intima</div>
        </Link>

        <nav className="nav-landing"></nav>

        <div className="search-wrap">
          <div className="search-filter-dropdown">
            <button className="search-filter-toggle" onClick={onToggleFilterDropdown}>
              {searchFilter === "all" ? "Filter" : searchFilter.charAt(0).toUpperCase() + searchFilter.slice(1)}
              <span className="filter-arrow">▾</span>
            </button>
            {filterDropdownOpen && (
              <>
                <div className="filter-dropdown-backdrop" onClick={onToggleFilterDropdown} />
                <div className="filter-dropdown-menu">
                  {searchFilters.map((f) => (
                    <button
                      key={f}
                      className={`filter-dropdown-item ${searchFilter === f ? "active" : ""}`}
                      onClick={() => onSearchFilterChange(f)}
                    >
                      {f.charAt(0).toUpperCase() + f.slice(1)}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          <input
            type="text"
            placeholder={`Search ${searchFilter === "all" ? "videos, creators, tags" : searchFilter}...`}
            value={searchTerm}
            onChange={(e) => onSearchTermChange(e.target.value)}
          />
        </div>

        <div className="actions-landing">
          <button className="iru-btn iru-btn-ghost" onClick={onToggleTheme} title="Toggle theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/login" className="iru-btn iru-btn-ghost">
            Login
          </Link>
          <Link to="/login" className="iru-btn iru-btn-accent">
            Creator
          </Link>
        </div>
      </div>
    </header>
  );
};
