// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

// Main TVshows component
const TVshows = () => {
  // Navigation hook
  const navigate = useNavigate();

  // State variables
  const [category, setcategory] = useState("airing_today");
  const [tvshow, settvshow] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const [showScroll, setShowScroll] = useState(false);

  // Set document title
  document.title = "TMDB | TV Shows " + category.toUpperCase();

  // Function to get TV shows data
  const GetTvshow = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);

      if (data.results.length > 0) {
        settvshow((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Function to refresh TV shows data
  const refershHandler = async () => {
    if (tvshow.length === 0) {
      GetTvshow();
    } else {
      setpage(1);
      settvshow([]);
      GetTvshow();
    }
  };

  // useEffect hook to fetch data on category change
  useEffect(() => {
    refershHandler();
  }, [category]);

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
  return tvshow.length > 0 ? (
    <div className="w-screen h-screen bg-[#1F1E24]">
      <div className="px-[5%] w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-400">
          <i
            onClick={() => {
              navigate(-1);
            }}
            className="ri-arrow-left-line hover:text-[#6556CD]"
          ></i>
          TV Shows{" "}
          <small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>

        <div className="flex items-center w-[80%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
            value={category}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={tvshow.length}
        next={GetTvshow}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <Cards data={tvshow} title="tv" />
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

export default TVshows;