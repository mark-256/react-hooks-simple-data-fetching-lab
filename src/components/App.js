// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching dog image:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <img src={imageUrl} alt="A Random Dog" />;
}

export default App;
