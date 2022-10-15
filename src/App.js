import React from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CatPage from "./pages/CatPage";
import Header from "./components/Header";
import Favourites from "./pages/Favourites";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cat" element={<CatPage />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
