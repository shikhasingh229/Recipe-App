import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("Sweet");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "0fd1d3e0";
  const APP_KEY = "de28e4162b5866e39d7372ea9bf5f47b";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <h1  className="head "><i class="material-icons brand-icon">dining</i>TechDudes' Food Court <h4>Owners: Aditi Sinha, Shikha Singh, Prince Pranav, Tarakant Suman </h4> </h1>
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
