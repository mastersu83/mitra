import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/appHooks";
import { fetchPhotoAction } from "./redux/actions/dalleryAction";
import Details from "./pages/Details";

function App() {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(fetchPhotoAction(categories));
  }, []);

  return (
    <div className="App">
      <Header />
      <Dropdown.Divider />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
