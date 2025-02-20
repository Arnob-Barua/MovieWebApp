import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-2 border-zinc-400 p-6">
      <h1 className="font-bold text-white text-2xl">
        {" "}
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span>SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-6 mb-3">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-fire-fill"></i> Trending{" "}
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-bard-fill"></i> Popular{" "}
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-movie-2-fill"></i> Movies{" "}
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-tv-2-fill"></i> Tv Shows{" "}
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-team-fill"></i> People{" "}
        </Link>
      </nav>

      <hr className="border-none h-[1px] bg-zinc-400 mt-1" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold mt-6 mb-3">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-information-2-fill"></i> About SCSDB{" "}
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white p-3 rounded-lg duration-300">
          {" "}
          <i className="mr-2 ri-phone-fill"></i> Contact Us{" "}
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
