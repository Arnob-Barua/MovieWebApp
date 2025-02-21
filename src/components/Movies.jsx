import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = () => {
    const nevigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "SCSDB | Popular " + category.toUpperCase();
  
    const GetPopular = async () => {
      try {
        const { data } = await axios.get(
          `${category}/popular?page=${page}`
        );
  
        if (data.results.length > 0) {
          setpopular((prevState) => [...prevState, ...data.results]);
          setpage(page + 1);
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    };
  
    const refershHandler = async () => {
      if (popular.length === 0) {
        GetPopular();
      } else {
        setpage(1);
        setpopular([]);
        GetPopular();
      }
    };
  
    useEffect(() => {
      refershHandler();
    }, [category]);
    return popular.length > 0 ? (
        <div className="w-screen h-sceen">
          <div className="px-[5%] w-full flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-zinc-400">
              <i
                onClick={() => {
                  nevigate(-1);
                }}
                className="ri-arrow-left-line hover:text-[#6556CD]"
              ></i>
              Popular
            </h1>
    
            <div className="flex items-center w-[80%]">
              <Topnav />
              <Dropdown
                title="Category"
                options={["movie", "tv"]}
                func={(e) => setcategory(e.target.value)}
                value={category}
              />
    
            </div>
          </div>
    
          <InfiniteScroll
            dataLength={popular.length}
            next={GetPopular}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Cards data={popular} title={category} />
          </InfiniteScroll>
        </div>
      ) : (
        <Loading />
      );
    };
    

export default Movies