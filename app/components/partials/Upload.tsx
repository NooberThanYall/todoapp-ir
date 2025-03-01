"use client";

import React, { useState } from "react";







// ----------------------

// Fucked Up functionality

// ----------------------






const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
       };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">آپلود عکس</h1>
      <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button
        // onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        type={'submit'}
      >
        Upload
      </button>
      </form>

    </div>
  );
};

export default UploadPage;
