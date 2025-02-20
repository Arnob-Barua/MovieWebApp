import React from "react";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex overflow-y-hidden mb-3 p-5 ">
      {data.map((d, i) => (
        <div key={i} className="min-w-[16%] bg-zinc-900 mr-2 mb-2 ">
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              d.backdrop_path || d.profile_path
            }`}
            alt=""
          />
          <div className="text-white p-3">
            <h1 className="text-lg font-semibold text-white">
              {d.name || d.title || d.orginal_name || d.orginal_title}
            </h1>
            <p className="mb-1 ">
              {d.overview.slice(0, 40)}...
              <span className="text-zinc-500">more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
