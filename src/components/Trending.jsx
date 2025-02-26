// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

// Main Trending component
const Trending = () => {
  // Navigation hook
  const nevigate = useNavigate();

  // State variables
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  // Set document title
  document.title = "TMDB | Trending " + category.toUpperCase();

  // Function to get trending data
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Function to refresh trending data
  const refershHandler = async () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  // useEffect hook to fetch data on category or duration change
  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  // Function to check scroll position
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  // Function to scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect hook to add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  // Render the component
  return trending.length > 0 ? (
    <div className="w-screen h-screen bg-[#1F1E24]">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => {
              nevigate(-1);
            }}
            className="ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
          Trending
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
            value={category}
          />

          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
            value={duration}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>

      <button
        onClick={scrollTop}
        className={`fixed bottom-10 right-10 p-3 bg-[#6556CD] hover:bg-[#5346bd] transition-colors text-white rounded-full shadow-lg transition-opacity duration-300 ${
          showScroll ? "opacity-100" : "opacity-0"
        }`}
      >
        <i className="ri-arrow-up-line text-2xl"></i>
      </button>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;