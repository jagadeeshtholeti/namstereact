import React, { use } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestoContainer from "./components/RestoContainer";
import { restaurantsMock } from "./utils/mockData";
import { useState, useEffect } from "react";

import "./app.css";
import Main from "./components/Main";

const App = () => {

  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
