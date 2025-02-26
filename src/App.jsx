// Importing necessary libraries and components
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
import Trailer from "./components/partials/Trailer";
import NotFound from "./components/NotFound";
import AboutTMDB from "./components/partials/AboutTMDB";
import Contact from "./components/partials/Contact";

// Main App component
const App = () => {
  return (
    <div className="bg-[#1F1E24] w-screen h-screen flex">
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Trending route */}
        <Route path="/trending" element={<Trending />} />

        {/* Popular route */}
        <Route path="/popular" element={<Popular />} />

        {/* Movies routes */}
        <Route path="/movie" element={<Movies />} />
        <Route path="/movie/details/:id" element={<MoviesDetails />}>
          <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        </Route>

        {/* TV Shows routes */}
        <Route path="/tv" element={<TVshows />} />
        <Route path="/tv/details/:id" element={<TvDetails />}>
          <Route path="/tv/details/:id/trailer" element={<Trailer />} />
        </Route>

        {/* People routes */}
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PeopleDetails />} />

        {/* About TMDB route */}
        <Route path="/about" element={<AboutTMDB />} />

        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* Fallback route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
