import "remixicon/fonts/remixicon.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movies from "./components/Movies";
import TVshows from "./components/TVshows";
import People from "./components/People";
import PeopleDetails from "./components/PeopleDetails";
import TvDetails from "./components/TvDetails";
import MoviesDetails from "./components/MoviesDetails";

const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MoviesDetails />} />
        <Route path="/tv" element={<TVshows />} />{" "}
        <Route path="/tv/details/:id" element={<TvDetails />} />{" "}
        <Route path="/person" element={<People />} />{" "}
        <Route path="/person/details/:id" element={<PeopleDetails />} />{" "}
      </Routes>
    </div>
  );
};

export default App;
