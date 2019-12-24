import React from "react";
import style from "./recipe.module.css";

// destructuring
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    // style with CSS module
    <div className={style.recipe}>
      <h1>{title}</h1>
      {/* map through ingredients */}
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      {/* display calories */}
      <p>{calories}</p>
      {/* style with CSS module */}
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
