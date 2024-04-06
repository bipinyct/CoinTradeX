import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContextProvider from "./CryptoContext"; // Renamed CryptoContext to CryptoContextProvider

ReactDOM.render(
  <React.StrictMode>
    <CryptoContextProvider> {/* Changed CryptoContext to CryptoContextProvider */}
      <App />
    </CryptoContextProvider> {/* Changed CryptoContext to CryptoContextProvider */}
  </React.StrictMode>,
  document.getElementById("root")
);
