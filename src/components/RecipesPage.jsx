import React, { useState, useEffect } from "react";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  }); // State to store recipes
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", image: null }); // State for form inputs
  const [isEditing, setIsEditing] = useState(false); // Editing state
  const [editIndex, setEditIndex] = useState(null); // Index of the recipe being edited
  const [isFormVisible, setIsFormVisible] = useState(false); // State for toggling form visibility

  // Persist recipes to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }, [recipes]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  // Handle image upload
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

  // Add a new recipe
  const addRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    try {
      const updatedRecipes = [...recipes, recipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      setRecipes(updatedRecipes);
      setRecipe({ name: "", ingredients: "", image: null });
      setIsFormVisible(false); // Hide the form after adding
    } catch (error) {
      console.error("Failed to add recipe:", error);
    }
  };

  // Edit a recipe
  const editRecipe = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setRecipe(recipes[index]);
    setIsFormVisible(true); // Show the form for editing
  };

  // Update a recipe
  const updateRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    const updatedRecipes = recipes.map((r, index) => (index === editIndex ? recipe : r));
    setRecipes(updatedRecipes);
    setIsEditing(false);
    setRecipe({ name: "", ingredients: "", image: null });
    setEditIndex(null);
    setIsFormVisible(false); // Hide the form after updating
  };

  // Delete a recipe
  const deleteRecipe = (index) => {
    const filteredRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(filteredRecipes);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Recipe Manager</h1>

        {/* Button to toggle form */}
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-6"
        >
          {isFormVisible ? "Close Form" : isEditing ? "Edit Recipe" : "Add Recipe"}
        </button>

        {/* Form */}
        {isFormVisible && (
          <form onSubmit={isEditing ? updateRecipe : addRecipe} className="mb-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Recipe Name</label>
              <input
                type="text"
                name="name"
                value={recipe.name}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter recipe name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Ingredients</label>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleInputChange}
                className="w-full border px-3 py-2 rounded-lg"
                placeholder="Enter ingredients"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Upload Image</label>
              <input type="file" onChange={handleImageUpload} className="w-full border px-3 py-2 rounded-lg" />
            </div>
            <button
              type="submit"
              className={`w-full bg-${isEditing ? "yellow" : "blue"}-500 text-white py-2 px-4 rounded-lg hover:bg-${
                isEditing ? "yellow" : "blue"
              }-600`}
            >
              {isEditing ? "Update Recipe" : "Add Recipe"}
            </button>
          </form>
        )}

        {/* Recipes List */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Recipe List</h2>
        {recipes.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((r, index) => (
              <li
                key={index}
                className="p-4 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{r.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{r.ingredients}</p>
                  {r.image && <img src={r.image} alt={r.name} className="w-full h-40 object-cover rounded-lg mb-3" />}
                </div>
                <div className="flex justify-between items-center mt-3">
                  <button onClick={() => editRecipe(index)} className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600 text-sm">
                    Edit
                  </button>
                  <button onClick={() => deleteRecipe(index)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 text-sm">
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
