// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
import "@fortawesome/fontawesome-free";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Auth from "./pages/auth";
// import LandingPage from "./pages/landing";

import "./assets/css/main.css";
import Routing from "./config/routing.config";
// import Component from "./pages/auth/RegisterPage/registerPage";

// import 'flowbite';
// let realDomElem = document.getElementById('root')

// let reactDOmElem = createRoot(realDomElem)

// reactDOmElem.render('Hello world')

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Auth.App/> */}
    <Routing />

    {/* <Auth.LoginPage /> */}
    {/* <Component/>  */}
  </StrictMode>
);
