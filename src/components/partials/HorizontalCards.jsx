import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image.png";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full flex overflow-x-auto mb-3 p-5 space-x-4">
      {data.length > 0 ? (
        data.map((d, i) => (
          <Link
            to={`/${d.media_type}/details/${d.id}`}
            key={i}
            className="h-[40vh] min-w-[16%] bg-zinc-900 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-full h-[60%] object-cover rounded-t-lg"
              src={
                d.backdrop_path || d.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      d.backdrop_path || d.profile_path
                    }`
                  : noimage
              }
              alt={d.name || d.title || d.original_name || d.original_title}
            />
            <div className="text-white p-3 overflow-y-auto h-[40%]">
              <h1 className="text-lg font-semibold text-white truncate">
                {d.name || d.title || d.original_name || d.original_title}
              </h1>
              <p className="mb-1 text-sm text-zinc-400">
                {d.overview.slice(0, 50)}...
                <span className="text-zinc-500">more</span>
              </p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl mt-5 text-white font-black text-center">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;