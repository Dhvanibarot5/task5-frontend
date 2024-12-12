import React from "react";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Recipe App</h1>
        <p className="text-lg text-gray-700 mt-2">Discover delicious recipes and share your culinary creations!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="font-semibold text-xl">Featured Recipe 1</h2>
          <p className="text-gray-600">A brief description of the featured recipe.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Recipe</button>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="font-semibold text-xl">Featured Recipe 2</h2>
          <p className="text-gray-600">A brief description of the featured recipe.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Recipe</button>
        </div>
        <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
          <h2 className="font-semibold text-xl">Featured Recipe 3</h2>
          <p className="text-gray-600">A brief description of the featured recipe.</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">View Recipe</button>
        </div>
      </section>

      <footer className="text-center mt-8">
        <p className="text-gray-600">© 2023 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
