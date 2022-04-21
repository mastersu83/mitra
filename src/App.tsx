import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import Details from "./pages/Details";

function App() {
  const { fetchPhotos } = useAppDispatch();
  const { categories } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    fetchPhotos(categories);
  }, []);

  return (
    <div className="App">
      <Header />
      <Dropdown.Divider />
      <Routes>
        <Route path="/mitra" element={<Gallery />} />
        <Route path="/mitra/about" element={<About />} />
        <Route path="/mitra/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
