// Importing necessary libraries and components
import { Link } from "react-router-dom";

// Main Sidenav component
const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 p-6 bg-[#1F1E24]">
      {/* Logo and title */}
      <h1 className="font-bold text-white text-2xl mb-6">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>TMDB.</span>
      </h1>

      {/* Navigation links for new feeds */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-6 mb-3">New Feeds</h1>
        <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-fire-fill"></i> Trending
        </Link>
        <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-bar-chart-fill"></i> Popular
        </Link>
        <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-movie-2-fill"></i> Movies
        </Link>
        <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-tv-2-fill"></i> TV Shows
        </Link>
        <Link to="/person" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-team-fill"></i> People
        </Link>
      </nav>

      {/* Divider */}
      <hr className="border-none h-[1px] bg-zinc-400 mt-6" />

      {/* Navigation links for website information */}
      <nav className="flex flex-col text-zinc-400 text-xl gap-3 mt-6">
        <h1 className="text-white font-semibold mb-3">Website Information</h1>
        <Link to="/about" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-information-fill"></i> About TMDB
        </Link>
        <Link to="/contact" className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          <i className="mr-2 ri-phone-fill"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;