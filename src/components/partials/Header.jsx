import React from "react";
import { Link } from "react-router-dom";

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
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      {" "}
      <h1 className="w-[70%] text-white font-black text-5xl">
        {" "}
        {data.name || data.title || data.orginal_name || data.orginal_title}
      </h1>
      <p className="w-[70%] mt-3 mb-3 text-white">
        {data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-400">more</Link>
      </p>
      <p className="text-white mb-3">
        <i className="text-yellow-500 ri-megaphone-fill">{data.release_date  || " Comming Soon"}</i>
        <i className="ml-3 text-yellow-500 ri-album-fill">{data.media_type.toUpperCase()}</i>
      </p>
      <Link className="bg-[#6556CD] p-2 rounded-md text-white font-semibold">Watch Trailer</Link>
    </div>
  );
};

export default Header;
