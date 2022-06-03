import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Services from "./Components/Services";

export function RouterComponent() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
