// Importing necessary libraries and components
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";

// Creating the root element and rendering the App component
createRoot(document.getElementById("root")).render(
  // Providing the Redux store to the application
  <Provider store={store}>
    {/* Wrapping the App component with BrowserRouter for routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);