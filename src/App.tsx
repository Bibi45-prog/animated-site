import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./pages/components/navbar";

import Home from "./pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <main className="p-8">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
