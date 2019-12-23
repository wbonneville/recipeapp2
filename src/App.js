import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "0e9797a8";
  const APP_KEY = "0724a07225075007c2a1b68e7701cd4e";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {});

  return (
    <div className="App">
      <form className="search-form" action="">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit"></button>
      </form>
    </div>
  );
};

export default App;
