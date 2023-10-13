import React, { useState } from 'react';
import YouTube from 'react-youtube';
import preview from '../../assets/watch-250/preview.png';
import playIcon from '../../assets/play-icon.svg';
import { useMediaQuery } from 'react-responsive';

// TODO: use this video: "https://www.mtv.com/episodes/hakkis/love-hip-hop-atlanta-run-it-back-the-a-list-season-1-ep-1"

const Watch250Video = ({ videoId }) => {
  const isMobile = useMediaQuery({ minWidth: 576 });
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="video-container rounded-[28px]">
      {showVideo ? (
        <YouTube
          videoId={videoId}
          opts={{
            width: '100%',
            height: isMobile ? 189 : 290,
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      ) : (
        <div className="rounded-[28px] relative">
          <img src={preview} alt="Video Thumbnail" className="rounded-[28px]" />
          <button
            onClick={handleVideoClick}
            className="absolute m-auto flex items-center justify-center left-0 right-0 top-0 bottom-0 w-[50px] h-[50px] cursor-pointer"
          >
            <img src={playIcon} alt="icon-play w-[50px] h-[50px]" />
          </button>
        </div>
      )}
    </div>
  );
};
export default Watch250Video;
