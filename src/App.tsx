import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header2 from "./components/Header2.tsx";
import Home from "./components/pages/home/Home.tsx";
import Games from "./components/pages/games/Games.tsx";
import Buddy from "./components/pages/games/Buddy.tsx";
import Books from "./components/pages/books/Books.tsx";


const App: React.FC = () => {
  return (
    <Router>
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/books" element={<Books />} />
        <Route path="/buddy" element={<Buddy />} />
      </Routes>
    </Router>
  );
};

export default App;