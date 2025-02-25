// filepath: /c:/Users/ASUS/Desktop/SCSDB-Project/src/store/actions/personActions.jsx
export { removeperson } from "../reducers/peopleSlice";
import axios from "../../utils/axios";
import { loadperson } from "../reducers/peopleSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`); // Corrected endpoint
    const movieCredits = await axios.get(`/person/${id}/movie_credits`); // Corrected endpoint

    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };
    dispatch(loadperson(theultimatedetails));
  } catch (error) {
    console.log("Error:", error);
  }
};