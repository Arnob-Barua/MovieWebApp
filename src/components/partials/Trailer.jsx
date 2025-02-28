// Importing necessary libraries and components
import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

// Main Trailer component
const Trailer = () => {
  // Navigation and location hooks
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Determine category based on pathname
  const category = pathname.includes("movie") ? "movie" : "tv";

  // Get YouTube video key from Redux state
  const ytvideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="absolute bg-[rgba(0,0,0,.9)] z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center">
      {/* Close button */}
      <Link
        onClick={() => navigate(-1)}
        className="absolute text-white hover:text-[#6556CD] ri-close-fill text-3xl right-[5%] top-[5%]"
      ></Link>

      {/* Render YouTube video or NotFound component */}
      {ytvideo ? (
        <ReactPlayer
          controls
          height={500}
          width={1100}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;