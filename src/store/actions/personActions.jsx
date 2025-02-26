// Exporting the removeperson action from the peopleSlice reducer
export { removeperson } from "../reducers/peopleSlice";

// Importing necessary libraries and components
import axios from "../../utils/axios";
import { loadperson } from "../reducers/peopleSlice";

// Async action to load person details
export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    // Fetching person details
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`); // Corrected endpoint
    const movieCredits = await axios.get(`/person/${id}/movie_credits`); // Corrected endpoint

    // Combining all fetched data into a single object
    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      tvCredits: tvCredits.data,
      movieCredits: movieCredits.data,
    };

    // Dispatching the loadperson action with the combined data
    dispatch(loadperson(theultimatedetails));
  } catch (error) {
    // Logging any errors that occur during the fetch
    console.log("Error:", error);
  }
};