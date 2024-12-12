import React from "react";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-black">About Our Recipe App</h1>
        <p className="text-lg text-gray-700 mt-2">Your go-to place for discovering and sharing delicious recipes!</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          At Recipe App, we believe that cooking should be fun and accessible to everyone. Our mission is to provide a platform where food enthusiasts can discover new recipes, share their culinary creations, and connect with others who share their passion for cooking.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Thousands of recipes from various cuisines.</li>
          <li>User-friendly interface for easy navigation.</li>
          <li>Community features to share and rate recipes.</li>
          <li>Regular updates with new recipes and cooking tips.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-700">
          Whether you're a seasoned chef or just starting out, we invite you to join our community. Share your favorite recipes, explore new dishes, and connect with fellow food lovers!
        </p>
      </section>

      <footer className="text-center mt-8">
        <p className="text-black font-semibold">© 2023 Recipe App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;