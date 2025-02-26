// Importing necessary libraries and components
import React from "react";
import { Link } from "react-router-dom";

// Main Header component
const Header = ({ data }) => {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "75% 25%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%] bg-cover bg-center bg-no-repeat"
    >
      {/* Title */}
      <h1 className="w-[70%] text-white font-black text-5xl drop-shadow-lg">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>

      {/* Overview */}
      <p className="w-[70%] mt-3 mb-3 text-white text-lg drop-shadow-md">
        {data.overview.slice(0, 200)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400 hover:underline">
          more
        </Link>
      </p>

      {/* Release date and media type */}
      <p className="text-white mb-3 flex items-center gap-3">
        <i className="text-yellow-500 ri-megaphone-fill">
          {data.release_date || "Trending"}
        </i>
        <i className="text-yellow-500 ri-album-fill">
          {data.media_type.toUpperCase()}
        </i>
      </p>

      {/* Watch Trailer button */}
      <Link
        to={`/${data.media_type}/details/${data.id}/trailer`}
        className="bg-[#6556CD] p-3 rounded-md text-white font-semibold hover:bg-[#5346bd] transition-colors"
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;