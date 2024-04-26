import { useState } from "react";
import "./App.css"

const App = () => {
  const [dark, setDark] = useState(false)

  const handledark = () =>{
    setDark(!dark)
  }

  return (
    <div className={`${dark && "dark"}`}>

      <button className="p-2 rounded-full absolute bottom-10 right-10 z-10 text-white bg-black dark:bg-white dark:text-black" onClick={handledark}>{dark ? "LIGHT" : "DARK"}</button>
    </div>
  );
};

export default App;
