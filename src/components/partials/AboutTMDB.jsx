// Importing necessary libraries and components
import React from "react";
import { useNavigate } from "react-router-dom";

// Main AboutTMDB component
const AboutTMDB = () => {
  // Navigation hook
  const navigate = useNavigate();

  return (
    <div className="px-8 py-12 bg-[#1F1E24] text-white">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-zinc-400">
        <i
          onClick={() => {
            navigate(-1);
          }}
          className="ri-arrow-left-line hover:text-[#6556CD]"
        ></i>
        About TMDB
      </h1>

      {/* Description */}
      <p className="text-lg mb-4">
        The Movie Database (TMDB) is a community-built movie and TV database.
        Every piece of data has been added by the community dating back to 2008.
        TMDB's strong international focus and breadth of data is largely
        unmatched and something we're incredibly proud of. Put simply, we live
        and breathe community and that's precisely what makes us different.
      </p>
      <p className="text-lg mb-4">
        TMDB is used by millions of people every month and is a popular source
        for movie and TV information. The TMDB API is used by thousands of
        developers and companies to power their applications, websites, and
        services.
      </p>
      <p className="text-lg mb-4">
        TMDB offers a wide range of features, including:
      </p>

      {/* Features list */}
      <ul className="list-disc list-inside mb-4">
        <li>Comprehensive movie and TV show information</li>
        <li>Detailed cast and crew information</li>
        <li>High-quality images and posters</li>
        <li>Community-driven ratings and reviews</li>
        <li>Personalized user accounts and watchlists</li>
      </ul>

      {/* More information */}
      <p className="text-lg mb-4">
        For more information, visit the official TMDB website:{" "}
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#6556CD] hover:underline"
        >
          TMDB
        </a>
      </p>
    </div>
  );
};

export default AboutTMDB;
