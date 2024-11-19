import React, { useState, useEffect } from "react";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  // Load image from local storage on component mount
  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageData = reader.result;
        setImage(imageData);
        localStorage.setItem("uploadedImage", imageData); // Save to local storage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImage(null);
    localStorage.removeItem("uploadedImage"); // Clear image from local storage
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <label
        htmlFor="image-upload"
        style={{
          display: "inline-block",
          width: "200px",
          height: "200px",
          border: "2px dashed #ccc",
          borderRadius: "10px",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          backgroundColor: image ? "transparent" : "#f9f9f9",
        }}
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#aaa",
            }}
          >
            Click to Upload
          </span>
        )}
      </label>
      <input
        id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleReset} style={{ marginRight: "10px" }}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default ImageUploader;
