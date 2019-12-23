import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  // get id and key from api
  const APP_ID = "0e9797a8";
  const APP_KEY = "0724a07225075007c2a1b68e7701cd4e";

  // state hook
  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState("");

  const [query, setQuery] = useState("chicken");

  // call get recipes function when the browser loads
  useEffect(() => {
    getRecipes();
  }, [query]);

  // fetch recipes from api
  const getRecipes = async () => {
    // wait for information to load
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // set data from the response and turn into into a JSON object
    const data = await response.json();
    // set state of recipes = the array of recipes
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" action="">
        <input
          value={search}
          onChange={updateSearch}
          className="search-bar"
          type="text"
        />

        <button className="search-button" type="submit"></button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  );
};

export default App;
