import React from "react";

function RecipesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Delicious Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example recipe cards */}
        <div className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold">Recipe Title 1</h2>
          <p className="text-gray-600">Description of the recipe.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Recipe</button>
        </div>
        <div className="border rounded-lg p-4 shadow">
          <h2 className="font-semibold">Recipe Title 2</h2>
          <p className="text-gray-600">Description of the recipe.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Recipe</button>
        </div>
        {/* Add more recipe cards as needed */}
      </div>
    </div>
  );
}

export default RecipesPage;
