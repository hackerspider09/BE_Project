import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Watermark App</h1>
        <p className="mb-4">Upload and add watermark to your images or videos.</p>
        <Link
          to="/upload"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Go to Upload Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
