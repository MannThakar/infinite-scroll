import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [perPage, setPerPage] = useState(20);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight - 300
    ) {
      // Use a functional update to avoid stale state
      setPerPage((prevPerPage) => prevPerPage + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      {Array.from({ length: perPage }).map((_, index) => (
        <h2 key={index}>I Love you bachu ❤️</h2>
      ))}
    </div>
  );
}

export default App;
