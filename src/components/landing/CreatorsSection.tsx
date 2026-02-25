import React from "react";
import { Users } from "lucide-react";
import { Creator } from "@/types/content";

interface CreatorsSectionProps {
  creators: Creator[];
}

export const CreatorsSection: React.FC<CreatorsSectionProps> = ({ creators }) => {
  const handleCreatorClick = (profileUrl: string) => {
    window.open(profileUrl, "_blank");
  };

  return (
    <section id="creators">
      <div className="section-head">
        <h2>
          <Users size={20} style={{ display: "inline", verticalAlign: "middle", marginRight: 6 }} /> Top Creators
        </h2>
        <a href="#">Browse all</a>
      </div>
      <div className="creator-strip">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="creator-card"
            onClick={() => handleCreatorClick(creator.profileUrl)}
            style={{ cursor: "pointer" }}
          >
            <div className="iru-avatar">{creator.initial}</div>
            <div>
              <h4>{creator.name}</h4>
              <p>{creator.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
