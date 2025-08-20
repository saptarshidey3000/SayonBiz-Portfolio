import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";

const ScrollStack = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const scrollLeftRef = useRef(0); // ref instead of state for smooth dragging

  // Memoize video data
  const videos = useMemo(
    () => [
      { src: "/videos/demo1.mp4", link: "https://www.instagram.com/p/Cx0R-EYpkWu/" },
      { src: "/videos/Video-660.mp4", link: "https://www.instagram.com/p/CqkyLTCJMTz/" },
      { src: "/videos/backgroundvideo1.mp4", link: "https://www.instagram.com/p/Cs8sEL9LydE/" },
      { src: "/videos/Video-140.mp4", link: "https://www.instagram.com/p/CyBUEuuhwzR/" },
    ],
    []
  );

  // Infinite scroll with requestAnimationFrame
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const animate = () => {
      if (!isHovered && !isDragging && scrollContainer) {
        scrollContainer.scrollLeft += 1; // speed
        const halfWidth = scrollContainer.scrollWidth / 2;
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft -= halfWidth;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovered, isDragging]);

  // Ensure drag ends even outside container
  useEffect(() => {
    const handleEndGlobal = () => setIsDragging(false);
    window.addEventListener("mouseup", handleEndGlobal);
    window.addEventListener("touchend", handleEndGlobal);

    return () => {
      window.removeEventListener("mouseup", handleEndGlobal);
      window.removeEventListener("touchend", handleEndGlobal);
    };
  }, []);

  // Video card
  const VideoCard = React.memo(({ video }) => (
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
        preload="metadata"
        style={{ willChange: "transform" }}
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
            <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.259.149 4.771 1.686 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </div>
      </div>
    </div>
  ));

  // Drag handlers
  const handleStart = useCallback((clientX) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(clientX - scrollRef.current.offsetLeft);
    scrollLeftRef.current = scrollRef.current.scrollLeft;
  }, []);

  const handleMove = useCallback((clientX, e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  }, [isDragging, startX]);

  const handleEnd = useCallback(() => setIsDragging(false), []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsDragging(false);
  }, []);

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden cursor-grab"
          style={{
            scrollBehavior: "auto",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            willChange: "transform",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={(e) => handleStart(e.pageX)}
          onMouseMove={(e) => handleMove(e.pageX, e)}
          onMouseUp={handleEnd}
          onTouchStart={(e) => handleStart(e.touches[0].pageX)}
          onTouchMove={(e) => handleMove(e.touches[0].pageX, e)}
          onTouchEnd={handleEnd}
        >
          {/* Two sets for seamless loop */}
          {videos.map((video, index) => (
            <VideoCard key={`first-${index}`} video={video} />
          ))}
          {videos.map((video, index) => (
            <VideoCard key={`second-${index}`} video={video} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg mb-6">
            Click on any video to view on Instagram
          </p>
          <a
            href="https://www.instagram.com/sayonbiz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.259.149 4.771 1.686 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View All Works
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
