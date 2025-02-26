// Importing necessary libraries and components
import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./reducers/movieSlice"
import tvReducer from "./reducers/tvSlice"
import peopleReducer from "./reducers/peopleSlice"

// Configuring the Redux store
export default configureStore({
  reducer: {
    // Adding the movie reducer to the store
    movie: movieReducer,
    // Adding the TV reducer to the store
    tv: tvReducer,
    // Adding the people reducer to the store
    people: peopleReducer,
  }
})