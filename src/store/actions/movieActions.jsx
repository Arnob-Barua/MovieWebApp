// Exporting the removemovie action from the movieSlice reducer
export { removemovie } from "../reducers/movieSlice";

// Importing necessary libraries and components
import axios from "../../utils/axios";
import { loadmovie } from "../reducers/movieSlice";

// Async action to load movie details
export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    // Fetching movie details
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

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

    // Dispatching the loadmovie action with the combined data
    dispatch(loadmovie(theultimatedetails));
  } catch (error) {
    // Logging any errors that occur during the fetch
    console.log("Error:", error);
  }
};