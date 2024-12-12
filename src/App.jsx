import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopNav from "./components/DesktopNav";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import RecipeApp from "./components/RecipesPage";
import RecipeList from "./components/HomePage";

function App() {
  const menuItems = ["home", "about", "recipes"];

  return (
    <>
      <DesktopNav menuItems={menuItems} Logo="path/to/logo.png" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<RecipeList />} />
        <Route path="/recipes" element={<RecipeApp />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
