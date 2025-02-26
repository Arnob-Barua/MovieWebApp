// Exporting the removetv action from the tvSlice reducer
export { removetv } from "../reducers/tvSlice";

// Importing necessary libraries and components
import axios from "../../utils/axios";
import { loadtv } from "../reducers/tvSlice";

// Async action to load TV show details
export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    // Fetching TV show details
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

    // Combining all fetched data into a single object
    let theultimatedetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t) => t.english_name),
      videos: videos.data.results.find((m) => m.type === "Trailer"),
      watchproviders: watchproviders.data.results.US,
    };

    // Dispatching the loadtv action with the combined data
    dispatch(loadtv(theultimatedetails));
  } catch (error) {
    // Logging any errors that occur during the fetch
    console.log("Error:", error);
  }
};