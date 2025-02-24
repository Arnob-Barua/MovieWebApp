import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-3 p-5 ">
      {data.length > 0 ? data.map((d, i) => (
        <Link  to={`/${d.media_type}/details/${d.id}`} key={i} className="h-[40vh] min-w-[16%] bg-zinc-900 mr-2 mb-2 ">
          <img
            className="w-full h-[40%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`}
            alt=""
          />
          <div className="text-white p-3 overflow-y-auto">
            <h1 className="text-lg font-semibold text-white">
              {d.name || d.title || d.orginal_name || d.orginal_title}
            </h1>
            <p className="mb-1 ">
              {d.overview.slice(0, 40)}...
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </Link>
      )) : <h1 className="text-3xl mt-5 text-white font-black text-center">Nothing to Show</h1>}
    </div>
  );
};

export default HorizontalCards;
