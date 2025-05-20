  import React from "react";
  import ReactDOM from "react-dom/client";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import RestoContainer from "./components/RestoContainer";
  import { restaurantsMock } from "./utils/mockData";
  import { useState } from "react";

  import "./app.css";


  const App = () => {

    return (
      <>
          <Header/>
          <RestoContainer />
          <Footer/>
      </>
    )
  }


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App/>);
