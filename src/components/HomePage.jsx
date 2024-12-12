import React from "react";

function HomePage() {
  const recipes = [
    {
      title: "Pizza",
      description: "A delicious and easy-to-make pasta dish perfect for any occasion.",
      image:
        "https://imgs.search.brave.com/ild7m0464EarDAuB-CwrV8FMmMNK19JIYjp227f8wkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ",
      link: "#",
    },
    {
      title: "Pasta",
      description: "A hearty and healthy salad packed with fresh ingredients.",
      image: "https://imgs.search.brave.com/2o78IVNxaRLGF4L2Upfas1TmnvUmsY3QIJd8k4AiI9g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg4/OTYwOTA4L3Bob3Rv/L2hvbWVtYWRlLXBh/c3RhLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1QSFl5c2pE/U3V3aDlEMEtZTlRx/YW9BZEJEOWhvN2tz/Qzcyb3dlSWpUMGRF/PQ",
      link: "#",
    },
    {
      title: "Sushi",
      description: "A classic dessert that is both creamy and rich in flavor.",
      image: "https://imgs.search.brave.com/aZ8TdcNLE4ntxaOpizrVzAHwr1nVIi46cAYg4ii14P4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzM1LzIzLzcx/LzM2MF9GXzEzNTIz/NzE4NF92Wm5OVlJ1/YUhRWmNsWGp4Sjdm/dEVhM0l5ZXJoREYy/eS5qcGc",
      link: "#",
    },
    {
      title: "Noddles",
      description: "An easy stir-fry recipe with vibrant vegetables and savory sauce.",
      image: "https://imgs.search.brave.com/_rOeJepzm9CBR3PJWk1neDD3k7yQ-l1DA1fk0QUyjos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjE0/NDA3NDk2L3Bob3Rv/L3RoYWktbm9vZGxl/cy13aXRoLXBvcmst/YW5kLXZlZ2V0YWJs/ZXMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXdLR0lxdFpy/MUpibWVlaFdIZGFW/eUgxN1Y4X3FRWWZ2/cTNKazd5U185eVE9",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-600 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white">Welcome to Our Recipe App</h1>
        <p className="text-lg text-white mt-4">Discover delicious recipes and share your culinary creations!</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 bg-white"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-xl text-blue-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.description}</p>
              <a
                href={recipe.link}
                className="mt-4 inline-block bg-pink-500 text-white text-lg px-6 py-2 rounded-full hover:bg-pink-600 transition-all duration-200"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center mt-12 py-4 text-black">
        <p className="text-black">© 2023 Recipe App. All rights reserved by 🤍 Dhvani.</p>
      </footer>
    </div>
  );
}

export default HomePage;
