// Importing necessary libraries and components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

// Main MoviesDetails component
const MoviesDetails = () => {
  // Navigation and location hooks
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  // useEffect hook to load movie data on component mount and id change
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);

  // Render the component
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[160vh] px-[10%] py-10"
    >
      {/* Navigation bar */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line cursor-pointer"
        ></Link>
        <a target="_blank" href={info.detail.homepage} className="hover:text-[#6556CD]">
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          className="hover:text-[#6556CD]"
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          className="hover:text-[#6556CD]"
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}
        >
          IMDb
        </a>
      </nav>

      <div className="w-full flex flex-col md:flex-row mt-10">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[60vh] object-cover rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content ml-0 md:ml-[5%] text-white mt-5 md:mt-0">
          <h1 className="text-5xl font-black">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_path}
            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-3 mb-5 flex items-center gap-x-3">
            <span className="rounded-full text-sm font-semibold bg-yellow-600 text-white w-[5vh] h-[5vh] flex justify-center items-center">
              {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>{" "}
            </span>
            <h1 className="w-[60px] font-semibold text-2xl leading-6">
              User Score
            </h1>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(", ")}</h1>
            <h1>{info.detail.runtime} min</h1>
          </div>

          <h1 className="text-xl font-semibold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-2xl mb-3 mt-5">Overview</h1>
          <p className="mb-10">{info.detail.overview}</p>

          <Link
            className="p-3 bg-[#6556CD] rounded-lg hover:bg-[#5346bd] transition-colors"
            to={`${pathname}/trailer`}
          >
            <i className="text-xl ri-play-fill mr-3"></i>
            Play Trailer
          </Link>
        </div>
      </div>

      <div className="w-[80%] flex flex-col gap-y-3 mt-5">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-5 items-center text-white">
            <h1>Available on Platform</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-5 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-5 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-12 h-12 rounded-lg object-cover hover:scale-110 transition-transform"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className="text-3xl font-bold text-white">
        Recommendations & Similar Stuff
      </h1>
      <HorizontalCards
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />

      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default MoviesDetails;