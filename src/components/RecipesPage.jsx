import React, { useState, useEffect } from "react";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  });
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", image: null });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRecipe((prevRecipe) => ({ ...prevRecipe, image: reader.result }));
        e.target.value = "";
      };
      reader.readAsDataURL(file);
    }
  };

  const addRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    const updatedRecipes = [...recipes, recipe];
    setRecipes(updatedRecipes);
    setRecipe({ name: "", ingredients: "", image: null });
    setIsFormVisible(false);
  };

  const editRecipe = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setRecipe(recipes[index]);
    setIsFormVisible(true);
  };

  const updateRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    const updatedRecipes = recipes.map((r, index) => (index === editIndex ? recipe : r));
    setRecipes(updatedRecipes);
    setIsEditing(false);
    setRecipe({ name: "", ingredients: "", image: null });
    setEditIndex(null);
    setIsFormVisible(false);
  };

  const deleteRecipe = (index) => {
    const filteredRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(filteredRecipes);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-teal-200 to-blue-300 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">Recipe Manager</h1>

        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white py-2 px-6 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
        >
          {isFormVisible ? "Close Form" : isEditing ? "Edit Recipe" : "Add Recipe"}
        </button>

        {/* Form for adding/editing recipes */}
        {isFormVisible && (
          <form onSubmit={isEditing ? updateRecipe : addRecipe} className="mt-6 space-y-6">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Recipe Name</label>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter recipe name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ingredients</label>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter ingredients"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image</label>
              <input
                type="file"
                onChange={handleImageUpload}
                className="w-full p-3 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 via-teal-400 to-blue-500 text-white py-3 rounded-xl shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300"
            >
              {isEditing ? "Update Recipe" : "Add Recipe"}
            </button>
          </form>
        )}

        <h2 className="text-2xl font-semibold text-center text-gray-800 mt-10 mb-6">Recipe List</h2>
        {recipes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((r, index) => (
              <li key={index} className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 truncate">{r.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{r.ingredients}</p>
                  {r.image && <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded-lg mb-3" />}
                </div>
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => editRecipe(index)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 text-sm transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteRecipe(index)}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 text-sm transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center mt-10">
            <p className="text-gray-500 text-lg">No recipes added yet.</p>
            <p className="text-gray-400 text-sm">Start by adding a recipe!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;
