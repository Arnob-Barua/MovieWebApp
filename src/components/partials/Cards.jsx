import React from "react";
import { Link } from "react-router-dom";
import noimage from "/no_image.png";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full px-[5%] bg-[#1F1E24]">
      {data.map((c, i) => (
        <Link
          to={`/${c.media_type || title}/details/${c.id}`}
          key={i}
          className="relative w-[25vh] mr-[5%] mb-[5%] transform transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              className="shadow-lg rounded-lg h-[40vh] object-cover"
              src={
                c.poster_path || c.backdrop_path || c.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      c.poster_path || c.backdrop_path || c.profile_path
                    }`
                  : noimage
              }
              alt={c.name || c.title || c.original_name || c.original_title}
            />
            {c.vote_average && (
              <div className="absolute top-2 right-2 bg-yellow-600 text-white text-sm font-semibold rounded-full w-10 h-10 flex items-center justify-center">
                {(c.vote_average * 10).toFixed()}%
              </div>
            )}
          </div>
          <h1 className="text-xl text-zinc-300 mt-3 font-semibold truncate">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;