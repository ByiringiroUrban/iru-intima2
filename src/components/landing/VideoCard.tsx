import React, { useState, useRef } from "react";
import { Play } from "lucide-react";
import { VideoContent } from "@/types/content";

interface VideoCardProps {
  video: VideoContent;
  onVideoClick: (video: VideoContent) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onVideoClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`;
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    hoverTimeoutRef.current = setTimeout(() => {
      setShowVideo(true);
    }, 800);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowVideo(false);
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleVideoClick = () => {
    onVideoClick(video);
  };

  return (
    <article
      className="card"
      onClick={handleVideoClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="thumb">
        {showVideo ? (
          <iframe
            src={getYouTubeEmbedUrl(video.videoUrl)}
            className="video-preview"
            allow="autoplay; encrypted-media"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
              objectFit: "cover",
            }}
          />
        ) : (
          <img
            src={video.thumbnail || getYouTubeThumbnail(video.videoUrl)}
            alt={video.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
        <div className="badge">{video.age}</div>
        <div className="play" style={{ opacity: showVideo ? 0 : 1, transition: "opacity 0.3s" }}>
          <Play size={16} fill="currentColor" />
        </div>
        <div className="duration">{video.time}</div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{video.title}</h3>
        <div className="card-meta">
          <span>{video.creator}</span>
          <span>{video.views} views</span>
        </div>
        <div className="row-badges">
          {video.badges.map((badge, i) => (
            <span key={i} className="tiny">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
