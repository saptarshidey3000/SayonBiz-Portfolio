import React, { useEffect, useRef, useState } from "react";

const ScrollStack = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Infinite scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (!isHovered && !isDragging) {
        scrollContainer.scrollLeft += 2; // ⏩ faster speed
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth; // seamless reset
        }
      }
    };

    const intervalId = setInterval(scroll, 20);
    return () => clearInterval(intervalId);
  }, [isHovered, isDragging]);

  // Video data
  const videos = [
    { src: "/videos/demo1.mp4", link: "https://www.instagram.com/p/Cx0R-EYpkWu/" },
    // { src: "/videos/Video-387.mp4", link: "https://www.instagram.com/p/ChCv7T0ppnT/" },
    { src: "/videos/Video-660.mp4", link: "https://www.instagram.com/p/CqkyLTCJMTz/" },
    { src: "/videos/backgroundvideo1.mp4", link: "https://www.instagram.com/p/Cs8sEL9LydE/" },
    { src: "/videos/Video-140.mp4", link: "https://www.instagram.com/p/CyBUEuuhwzR/" },
  ];

  const VideoCard = ({ video }) => (
    <div
      className="flex-shrink-0 relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      onClick={() => window.open(video.link, "_blank")}
    >
      <video
        className="w-48 h-80 object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-12 h-12 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204...z" />
          </svg>
        </div>
      </div>
    </div>
  );

  // Mouse + Touch drag handlers
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMove = (clientX, e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // drag speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleEnd = () => setIsDragging(false);

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Infinite Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab"
          style={{
            scrollBehavior: "auto",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={(e) => handleStart(e.pageX)}
          onMouseMove={(e) => handleMove(e.pageX, e)}
          onMouseUp={handleEnd}
          onMouseLeaveCapture={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].pageX)}
          onTouchMove={(e) => handleMove(e.touches[0].pageX, e)}
          onTouchEnd={handleEnd}
        >
          {/* First set */}
          {videos.map((video, index) => (
            <VideoCard key={`first-${index}`} video={video} />
          ))}

          {/* Duplicate set */}
          {videos.map((video, index) => (
            <VideoCard key={`second-${index}`} video={video} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg">
            Click on any video to view on Instagram
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
