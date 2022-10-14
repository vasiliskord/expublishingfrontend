import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatPage from "./pages/CatPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cat" element={<CatPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
