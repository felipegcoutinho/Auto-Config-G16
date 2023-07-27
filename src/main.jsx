import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Global/Header/Header";
import AppServices from "./Components/Serviços/AppServices";

ReactDOM.createRoot(document.getElementById("main")).render(
  <HashRouter>
    <React.StrictMode>
      <Header />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/8820i" element={<App />} />
        <Route exact path="/G16" element={<App />} />
        <Route exact path="/G08" element={<App />} />
        <Route exact path="/provisionamentomanual" element={<AppServices />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);
