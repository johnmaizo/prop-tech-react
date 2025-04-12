import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import "./index.css";

import App from "./App.tsx";

// import "@fontsource/geist"; // Defaults to weight 400
import "@fontsource/geist/400.css"; // Specify weight
// import "@fontsource/geist/400-italic.css"; // Specify weight and style

// import "@fontsource/comfortaa"; // Defaults to weight 400
import "@fontsource/comfortaa/400.css"; // Specify weight
// import "@fontsource/comfortaa/400-italic.css"; // Specify weight and style

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
