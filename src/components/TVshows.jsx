import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const TVshows = () => {
    const nevigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshow, settvshow] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "SCSDB | Tv Shows " + category.toUpperCase();
  
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
  
    const refershHandler = async () => {
      if (tvshow.length === 0) {
        GetTvshow();
      } else {
        setpage(1);
        settvshow([]);
        GetTvshow();
      }
    };
  
    useEffect(() => {
      refershHandler();
    }, [category]);
    return tvshow.length > 0 ? (
        <div className="w-screen h-sceen">
          <div className="px-[5%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => {
                  nevigate(-1);
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
        </div>
      ) : (
        <Loading />
      );
}

export default TVshows