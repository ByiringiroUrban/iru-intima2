import React, { useState, useEffect } from "react";
import { Flame, Sparkles } from "lucide-react";
import { VideoContent } from "@/types/content";
import { featuredVideos, latestVideos, topCreators } from "@/data/mockData";
import {
  AgeGate,
  Header,
  Drawer,
  HeroSection,
  VideoGrid,
  CreatorsSection,
  CTASection,
  Footer,
} from "@/components/landing";
import "./LandingPage.css";

const filters = ["all", "trending", "new", "premium", "popular", "creators"];

const LandingPage: React.FC = () => {
  const [ageVerified, setAgeVerified] = useState(() => localStorage.getItem("iru_age_verified") === "1");
  const [currentFilter, setCurrentFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFilter, setSearchFilter] = useState("all");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("iru_theme") || "dark");

  useEffect(() => {
    document.body.classList.toggle("light", theme === "light");
    localStorage.setItem("iru_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleAgeVerify = () => {
    localStorage.setItem("iru_age_verified", "1");
    setAgeVerified(true);
  };

  const handleSearchFilterChange = (filter: string) => {
    setSearchFilter(filter);
    setFilterDropdownOpen(false);
  };

  const filterVideos = (videos: VideoContent[]) => {
    return videos.filter((video) => {
      const matchesFilter = currentFilter === "all" || video.tag === currentFilter;
      const matchesSearch =
        !searchTerm ||
        (video.title + " " + video.creator + " " + video.badges.join(" "))
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

  const filteredFeatured = filterVideos(featuredVideos);
  const filteredLatest = filterVideos(latestVideos);

  return (
    <>
      {!ageVerified && <AgeGate onVerify={handleAgeVerify} />}

      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        searchFilter={searchFilter}
        searchTerm={searchTerm}
        filterDropdownOpen={filterDropdownOpen}
        onSearchFilterChange={handleSearchFilterChange}
        onSearchTermChange={setSearchTerm}
        onToggleFilterDropdown={() => setFilterDropdownOpen((p) => !p)}
        onOpenDrawer={() => setDrawerOpen(true)}
      />

      <main className="iru-container">
        <HeroSection filters={filters} currentFilter={currentFilter} onFilterChange={setCurrentFilter} />

        <VideoGrid
          title={
            <>
              <Flame size={20} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} /> Featured Picks
            </>
          }
          videos={filteredFeatured}
          sectionId="featured"
        />

        <VideoGrid
          title={
            <>
              <Sparkles size={20} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} /> Latest Uploads
            </>
          }
          videos={filteredLatest}
          sectionId="latest"
        />

        <CreatorsSection creators={topCreators} />

        <CTASection />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
