import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // get id and key from api
  const APP_ID = "0e9797a8";
  const APP_KEY = "0724a07225075007c2a1b68e7701cd4e";

  // state hook
  const [recipes, setRecipes] = useState([]);

  // call get recipes function when the browser loads
  useEffect(() => {
    getRecipes();
  });

  // fetch recipes from api
  const getRecipes = async () => {
    // wait for information to load
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // set data from the response and turn into into a JSON object
    const data = await response.json();
    // set state of recipes = the array of recipes
    // setRecipes(data.hits);
  };

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
