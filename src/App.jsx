import React from "react";
import { Route, Routes } from "react-router-dom";
import DesktopNav from "./components/DesktopNav";
import RecipesPage from "./components/RecipesPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  const menuItems = ["home", "about", "recipes"];

  return (
    <>
      <DesktopNav menuItems={menuItems} Logo="path/to/logo.png" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
