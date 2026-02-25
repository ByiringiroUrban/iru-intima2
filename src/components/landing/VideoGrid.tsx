import React from "react";
import { VideoContent } from "@/types/content";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  title: string | React.ReactNode;
  videos: VideoContent[];
  sectionId?: string;
  showViewAll?: boolean;
  onVideoClick: (video: VideoContent) => void;
}

export const VideoGrid: React.FC<VideoGridProps> = ({ title, videos, sectionId, showViewAll = true, onVideoClick }) => {
  return (
    <section id={sectionId} className="mt-10">
      <div className="section-head">
        <h2>{title}</h2>
        {showViewAll && <a href="#">View all</a>}
      </div>
      <div className="content-grid">
        {videos.length === 0 ? (
          <div className="empty-state show">No matching content found. Try another keyword or filter.</div>
        ) : (
          videos.map((video) => <VideoCard key={video.id} video={video} onVideoClick={onVideoClick} />)
        )}
      </div>
    </section>
  );
};
