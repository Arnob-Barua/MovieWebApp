// Importing necessary libraries and components
import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import no_image from "/no_image.png";

// Main Topnav component
const Topnav = () => {
  // State variables
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  // Function to get search results
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // useEffect hook to fetch search results on query change
  useEffect(() => {
    if (query.length > 0) {
      GetSearches();
    } else {
      setSearches([]);
    }
  }, [query]);

  return (
    <div className="w-full h-[8vh] relative flex justify-start items-center px-[20%] bg-[#1F1E24]">
      {/* Search icon */}
      <i className="text-zinc-400 text-2xl ri-search-line"></i>

      {/* Search input */}
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-3 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />

      {/* Clear search icon */}
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="text-zinc-400 text-2xl ri-close-fill cursor-pointer"
        ></i>
      )}

      {/* Search results dropdown */}
      {searches.length > 0 && (
        <div className="absolute z-[999] w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[25%] overflow-auto rounded-md shadow-lg">
          {searches.map((s, i) => (
            <Link
              to={`/${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-600 w-[100%] p-6 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[8vh] h-[8vh] object-cover rounded mr-10 shadow-lg"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`
                    : no_image
                }
                alt={s.name || s.title || s.original_name || s.original_title}
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Topnav;