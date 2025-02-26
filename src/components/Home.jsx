// Importing necessary libraries and components
import { useEffect, useState } from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";

// Main Home component
const Home = () => {
  // Setting the document title
  document.title = "TMDB | Homepage";

  // State variables
  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState(null);
  const [category, setCategory] = useState("all");

  // Function to get header wallpaper
  const GetHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // Function to get trending data
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  // useEffect hook to fetch data on component mount and category change
  useEffect(() => {
    GetTrending();
    !wallpaper && GetHeaderWallpaper();
  }, [category]);

  // Render the component
  return trending && wallpaper ? (
    <>
      {/* Sidebar navigation */}
      <Sidenav />

      {/* Main content area */}
      <div className="w-[80%] h-screen overflow-auto overflow-x-hidden">
        {/* Top navigation */}
        <Topnav />

        {/* Header section */}
        <Header data={wallpaper} />

        {/* Trending section */}
        <div className="flex justify-between p-5">
          <h1 className="text-2xl font-semibold text-zinc-400">Trending</h1>

          {/* Dropdown filter */}
          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        {/* Horizontal cards for trending data */}
        <HorizontalCards data={trending} category_func={setCategory} />
      </div>
    </>
  ) : (
    // Loading component while data is being fetched
    <Loading />
  );
};

export default Home;
