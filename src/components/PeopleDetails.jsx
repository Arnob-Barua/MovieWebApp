// Importing necessary libraries and components
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";

// Main PeopleDetails component
const PeopleDetails = () => {
  // Navigation hook
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people); // Ensure this matches the state structure
  const dispatch = useDispatch();
  const [category, setcategory] = useState("movie");

  // useEffect hook to load person data on component mount and id change
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  // Render the component
  return info ? (
    <div className="px-[8%] min-h-[170vh] w-screen bg-[#1F1E24]">
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></Link>
      </nav>
      <div className="w-full flex">
        {/* Left section */}
        <div className="w-[18%]">
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover rounded-md"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />

          {/* Social Links */}
          <div className="text-2xl text-white flex gap-x-5">
            <a
              target="_blank"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-earth-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              target="_blank"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
              className="hover:text-[#6556CD]"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>

          {/* Personal Information */}
          <h1 className="text-2xl text-zinc-400 font-semibold my-5">Person Info</h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">{info.detail.known_for_department}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">{info.detail.gender === 2 ? "Male" : "Female"}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-zinc-400">{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Place of Birth</h1>
          <h1 className="text-zinc-400">{info.detail.place_of_birth}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Also Known As</h1>
          <h1 className="text-zinc-400">{info.detail.also_known_as.join(", ")}</h1>
        </div>

        {/* Right section */}
        <div className="w-[82%] ml-[5%]">
          <h1 className="text-6xl text-zinc-400 font-black my-5">{info.detail.name}</h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <h1 className="text-zinc-400 mt-3">{info.detail.biography}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-5">Known For</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between mt-5">
            <h1 className="text-xl text-zinc-600 font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
              value={category}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 mb-7 overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <li
                key={i}
                className="hover:text-white p-5 rounded hover:bg-[#6556CD] duration-300 cursor-pointer"
              >
                <Link to={`/${category}/details/${c.id}`} className="">
                  <span>{c.title || c.original_name || c.original_title}</span>
                  <span className="block ml-5">
                    {c.character && `Character Name: ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;