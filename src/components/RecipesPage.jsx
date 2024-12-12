import React, { useState, useEffect } from "react";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState(() => {
    const savedRecipes = localStorage.getItem("recipes");
    return savedRecipes ? JSON.parse(savedRecipes) : [];
  }); // State to store recipes
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", image: null }); // State for form inputs
  const [isEditing, setIsEditing] = useState(false); // Editing state
  const [editIndex, setEditIndex] = useState(null); // Index of the recipe being edited
  const [img, setImg] = useState("");
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
        // setRecipe({ ...recipe, image: reader.result });
        setRecipe((prevRecipe) => ({ ...prevRecipe, image: reader.result }));
        e.target.value = "";
        // e.target.value = "";
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new recipe
  // const addRecipe = (e) => {
  //   e.preventDefault();
  //   if (!recipe.name || !recipe.ingredients) return;
  //   setRecipes([...recipes, recipe]);
  //   setRecipe({ name: "", ingredients: "", image: null }); // Clear form after adding
  // };
  const addRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    try {
      const updatedRecipes = [...recipes, recipe];
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
      setRecipes(updatedRecipes);
      setRecipe({ name: "", ingredients: "", image: null });
    } catch (error) {
      console.error("Failed to add recipe:", error);
    }
  };

  // Edit a recipe
  const editRecipe = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setRecipe(recipes[index]);
  };

  // Update a recipe
  const updateRecipe = (e) => {
    e.preventDefault();
    if (!recipe.name || !recipe.ingredients) return;
    const updatedRecipes = recipes.map((r, index) => (index === editIndex ? recipe : r));
    setRecipes(updatedRecipes);
    setIsEditing(false);
    setRecipe({ name: "", ingredients: "", image: null }); // Clear form after update
    setEditIndex(null);
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

        {/* Form */}
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
            className={`w-full bg-${isEditing ? "yellow" : "blue"}-500 text-white py-2 px-4 rounded-lg hover:bg-${isEditing ? "yellow" : "blue"}-600`}
          >
            {isEditing ? "Update Recipe" : "Add Recipe"}
          </button>
        </form>

        {/* Recipes List */}
        <h2 className="text-xl font-semibold mb-4">Recipe List</h2>
        {recipes.length > 0 ? (
          <ul className="space-y-4 max-h-[80vh] overflow-auto">
            {recipes.map((r, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{r.name}</h3>
                  <p className="text-sm">{r.ingredients}</p>
                  {r.image && <img src={r.image} alt={r.name} className="mt-2 w-24 h-24 object-cover rounded-lg" />}
                </div>
                <div className="space-x-2">
                  <button onClick={() => editRecipe(index)} className="bg-yellow-500 text-white py-1 px-3 rounded-lg hover:bg-yellow-600">
                    Edit
                  </button>
                  <button onClick={() => deleteRecipe(index)} className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recipes added yet.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeApp;
