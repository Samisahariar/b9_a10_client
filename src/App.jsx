import { useState } from "react";
import "./App.css"
import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

const App = () => {

  return (
    <div /* className={`${dark && "dark"}`} */>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
