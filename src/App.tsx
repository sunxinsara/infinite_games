import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header2 from "./components/Header2.tsx";
import Home from "./components/pages/home/Home.tsx";
import Games from "./components/pages/games/Games.tsx";
import Buddy from "./components/pages/games/Buddy.tsx";
import Books from "./components/pages/books/Books.tsx";
import PayButton from "./components/PayButton.tsx";
import PayTest from "./components/PayTest.tsx";

const App: React.FC = () => {
  return (
    <Router basename = "/infinite_games/">
      
      <Routes>
        <Route path="/" element={<div><Header2/> <Home /></div>}  />
        <Route path="/games" element={<div><Header2/> <Games /></div>} />
        <Route path="/books" element={<div><Header2/> <Books /></div>} />
        <Route path="/buddy" element={<div><Header2/> <Buddy /></div>} />
        <Route path="/pay" element={<PayButton />} />
        <Route path="/paytest" element={<PayTest />} />
      </Routes>
    </Router>
  );
};

export default App;