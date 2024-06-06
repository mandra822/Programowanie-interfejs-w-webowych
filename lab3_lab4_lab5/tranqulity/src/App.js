
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import EntrySection from "./EntrySection";
import BrowseSection from "./BrowseSection";
import HotelCard from "./HotelCard";
import HotelPage from "./HotelPage";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navigation />
                <EntrySection />
                <BrowseSection />
              </div>
            }
          />
          <Route path="/hotel/:id" element={<HotelPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
