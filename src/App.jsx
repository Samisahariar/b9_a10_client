import { useState } from "react";
import "./App.css"
import NavBar from "./components/navbar/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  const [dark, setDark] = useState(false)

  const handledark = () => {
    setDark(!dark)
    const thewholehtml = document.getElementById("html")
    if (!dark) {
      thewholehtml.classList.add("dark")
    } else {
      thewholehtml.classList.remove("dark")
    }
  }

  return (
    <div /* className={`${dark && "dark"}`} */>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <button className="p-2 rounded-full fixed bottom-10 right-10 z-10 text-white bg-black dark:bg-white dark:text-black" onClick={handledark}>{dark ? "LIGHT" : "DARK"}</button>
    </div>
  );
};

export default App;
