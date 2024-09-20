// Install Tailwind CSS if you haven't yet
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init
// Add Tailwind to your CSS file in the project

import React, { useState } from "react";

const WatermarkUploader = () => {
  const [file, setFile] = useState(null);
  const [watermarkText, setWatermarkText] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    const preview = URL.createObjectURL(uploadedFile);
    setPreviewUrl(preview);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Handle file upload logic here, such as sending to the backend server
    console.log("File:", file);
    console.log("Watermark Text:", watermarkText);
    alert("File uploaded successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Watermark Uploader</h1>

        <form onSubmit={handleUpload}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fileInput">
              Upload Video or Image:
            </label>
            <input
              type="file"
              id="fileInput"
              accept="image/*,video/*"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              onChange={handleFileChange}
            />
          </div>

          {previewUrl && (
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Preview:</label>
              {file && file.type.startsWith("video/") ? (
                <video controls className="w-full">
                  <source src={previewUrl} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img src={previewUrl} alt="Preview" className="w-full rounded" />
              )}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="watermarkText">
              Watermark Text:
            </label>
            <input
              type="text"
              id="watermarkText"
              value={watermarkText}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Enter watermark text"
              onChange={(e) => setWatermarkText(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Upload & Watermark
          </button>
        </form>
      </div>
    </div>
  );
};

export default WatermarkUploader;
