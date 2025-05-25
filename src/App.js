import React, { use } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestoContainer from "./components/RestoContainer";
import { restaurantsMock } from "./utils/mockData";
import { useState, useEffect } from "react";
import "./app.css";
import Main from "./components/Main";
import About from "./components/About";
import ErrorPage from "./components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import SignUpForm from "./components/SignUpForm";
import Carousel from "./components/Carousel";
import MenuCard from "./components/MenuCard";
import MenuCardContainer from "./components/MenuCardContainer";

const App = () => {

  return (
    <>
      <Header />
      <div className="main">
          <Outlet/>
      </div>
      <Footer />
    </>
  );
};

const routeConfig = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
     errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<RestoContainer/>
      },
      {
        path:'/about',
        element:<About/>,
        children:[
          {
            path:'signup',
            element:<SignUpForm/>
          },
          {
            path: 'carousel',
            element:<Carousel/>
          }
        ]
      },
      {
        path:'/restmenu/:id',
        element:<MenuCardContainer/>
      },
    ],
  }
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeConfig}/>);
