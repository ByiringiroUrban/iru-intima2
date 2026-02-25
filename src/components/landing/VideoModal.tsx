import React, { useState } from "react";
import { X, Play, Pause, Volume2, Maximize, ThumbsUp, Share2, Bookmark, Flag, MessageCircle, TrendingUp, Clock, Eye } from "lucide-react";
import { VideoContent } from "@/types/content";
import "./VideoModal.css";

interface VideoModalProps {
  video: VideoContent | null;
  isOpen: boolean;
  onClose: () => void;
}

const comments = [
  { id: 1, user: "Sarah M.", avatar: "S", text: "Amazing content! Love the quality and production value.", time: "2 hours ago", likes: 24 },
  { id: 2, user: "Mike R.", avatar: "M", text: "This creator never disappoints. Premium quality every time!", time: "5 hours ago", likes: 18 },
  { id: 3, user: "Emma L.", avatar: "E", text: "Subscribed! Can't wait for more content like this.", time: "1 day ago", likes: 42 },
  { id: 4, user: "David K.", avatar: "D", text: "The editing is top-notch. Well done!", time: "2 days ago", likes: 15 },
];

const relatedVideos = [
  { id: 1, title: "Exclusive Behind the Scenes • Premium Access", creator: "Velvet Studio", views: "450K", time: "08:24" },
  { id: 2, title: "Top Creator Highlights • Weekly Collection", creator: "Noir Club", views: "320K", time: "12:15" },
  { id: 3, title: "New Upload • Midnight Sessions", creator: "Luna Private", views: "280K", time: "06:45" },
  { id: 4, title: "Members Only • VIP Content Drop", creator: "Aura House", views: "510K", time: "10:30" },
  { id: 5, title: "Trending Now • Popular Picks", creator: "Studio N", views: "680K", time: "09:12" },
];

export const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"comments" | "related" | "stats">("comments");

  if (!isOpen || !video) return null;

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
  };

  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-grid">
          <div className="modal-main">
            <div className="video-shell">
              <div className="video-stage">
                <iframe
                  src={getYouTubeEmbedUrl(video.videoUrl)}
                  className="video-iframe"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="video-meta">
              <div className="title-row">
                <div>
                  <h1>{video.title}</h1>
                  <div className="video-sub">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.time}</span>
                  </div>
                </div>
              </div>

              <div className="tag-row">
                {video.badges.map((badge, i) => (
                  <span key={i} className="tag">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="creator-strip">
                <div className="creator-left">
                  <div className="iru-avatar">{video.creator[0]}</div>
                  <div className="creator-meta">
                    <h4>{video.creator}</h4>
                    <p>Premium Creator • 240 uploads</p>
                  </div>
                </div>
                <button className="iru-btn iru-btn-primary">Subscribe</button>
              </div>

              <div className="action-row">
                <div className="user-actions">
                  <button
                    className={`ua-btn ${liked ? "active" : ""}`}
                    onClick={() => setLiked(!liked)}
                  >
                    <ThumbsUp size={16} />
                    {liked ? "Liked" : "Like"}
                  </button>
                  <button className="ua-btn">
                    <Share2 size={16} />
                    Share
                  </button>
                  <button
                    className={`ua-btn ${saved ? "active" : ""}`}
                    onClick={() => setSaved(!saved)}
                  >
                    <Bookmark size={16} />
                    {saved ? "Saved" : "Save"}
                  </button>
                  <button className="ua-btn">
                    <Flag size={16} />
                    Report
                  </button>
                </div>
              </div>

              <div className="desc-box">
                <p>
                  Premium private content featuring exclusive creator collections. High-quality production with
                  professional editing and premium access features. This video showcases the best of our creator's
                  work with stunning visuals and engaging storytelling.
                </p>
              </div>

              <div className="stats-row">
                <div className="stat-item">
                  <Eye size={18} />
                  <div>
                    <strong>{video.views}</strong>
                    <span>Views</span>
                  </div>
                </div>
                <div className="stat-item">
                  <ThumbsUp size={18} />
                  <div>
                    <strong>12.5K</strong>
                    <span>Likes</span>
                  </div>
                </div>
                <div className="stat-item">
                  <MessageCircle size={18} />
                  <div>
                    <strong>{comments.length}</strong>
                    <span>Comments</span>
                  </div>
                </div>
                <div className="stat-item">
                  <Clock size={18} />
                  <div>
                    <strong>{video.time}</strong>
                    <span>Duration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-sidebar">
            <div className="tabs">
              <button
                className={`tab-btn ${activeTab === "comments" ? "active" : ""}`}
                onClick={() => setActiveTab("comments")}
              >
                <MessageCircle size={16} />
                Comments
              </button>
              <button
                className={`tab-btn ${activeTab === "related" ? "active" : ""}`}
                onClick={() => setActiveTab("related")}
              >
                <Play size={16} />
                Related
              </button>
              <button
                className={`tab-btn ${activeTab === "stats" ? "active" : ""}`}
                onClick={() => setActiveTab("stats")}
              >
                <TrendingUp size={16} />
                Stats
              </button>
            </div>

            {activeTab === "comments" && (
              <div className="panel">
                <div className="panel-head">
                  <h3>{comments.length} Comments</h3>
                </div>
                <div className="panel-body">
                  <div className="comment-input">
                    <div className="iru-avatar">U</div>
                    <input type="text" placeholder="Add a comment..." />
                  </div>
                  <div className="comments-list">
                    {comments.map((comment) => (
                      <div key={comment.id} className="comment-item">
                        <div className="iru-avatar">{comment.avatar}</div>
                        <div className="comment-content">
                          <div className="comment-header">
                            <strong>{comment.user}</strong>
                            <span>{comment.time}</span>
                          </div>
                          <p>{comment.text}</p>
                          <div className="comment-actions">
                            <button className="comment-action">
                              <ThumbsUp size={14} />
                              {comment.likes}
                            </button>
                            <button className="comment-action">Reply</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "related" && (
              <div className="panel">
                <div className="panel-head">
                  <h3>Related Videos</h3>
                </div>
                <div className="panel-body">
                  <div className="related-list">
                    {relatedVideos.map((item) => (
                      <div key={item.id} className="related-item">
                        <div className="related-thumb">
                          <div className="related-play">
                            <Play size={14} fill="currentColor" />
                          </div>
                          <div className="related-duration">{item.time}</div>
                        </div>
                        <div className="related-meta">
                          <h4>{item.title}</h4>
                          <p>
                            {item.creator} • {item.views} views
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "stats" && (
              <div className="panel">
                <div className="panel-head">
                  <h3>Video Statistics</h3>
                </div>
                <div className="panel-body">
                  <div className="stats-list">
                    <div className="stats-item">
                      <span>Total Views</span>
                      <strong>{video.views}</strong>
                    </div>
                    <div className="stats-item">
                      <span>Likes</span>
                      <strong>12.5K</strong>
                    </div>
                    <div className="stats-item">
                      <span>Comments</span>
                      <strong>{comments.length}</strong>
                    </div>
                    <div className="stats-item">
                      <span>Shares</span>
                      <strong>2.3K</strong>
                    </div>
                    <div className="stats-item">
                      <span>Saves</span>
                      <strong>5.8K</strong>
                    </div>
                    <div className="stats-item">
                      <span>Upload Date</span>
                      <strong>2 days ago</strong>
                    </div>
                    <div className="stats-item">
                      <span>Category</span>
                      <strong>{video.tag}</strong>
                    </div>
                    <div className="stats-item">
                      <span>Quality</span>
                      <strong>4K HDR</strong>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
