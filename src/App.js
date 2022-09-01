import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Quran from "./components/Quran/Quran";
import Azkar from "./components/Azkar/Azkar";
import { Routes, Route } from "react-router-dom";
import Azan from "./components/Azan/Azan";
import "./assets/styles/style.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Quran />} />
          <Route path="/azkar" element={<Azkar />} />
          <Route path="/azan" element={<Azan />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
