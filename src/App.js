import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [perPage, setPerPage] = useState(20);
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    ) {
      return;
    }

    setPerPage(perPage + 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [perPage]);
  return (
    <div className="App">
      {Array.from({ length: perPage }).map((_, index) => (
        <h2 key={index}>Lorem Ipsum</h2>
      ))}
    </div>
  );
}

export default App;
