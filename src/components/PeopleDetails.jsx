// filepath: /C:/Users/ASUS/Desktop/SCSDB-Project/src/components/PeopleDetails.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadperson, removeperson } from "../store/actions/personActions";
import Loading from "./Loading";
import HorizontalCards from "./partials/HorizontalCards";

const PeopleDetails = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people); // Ensure this matches the state structure
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson());
    };
  }, [id, dispatch]);

  return info ? (
    <div className="text-white">PeopleDetails</div>
  ) : (
    <Loading />
  );
};

export default PeopleDetails;