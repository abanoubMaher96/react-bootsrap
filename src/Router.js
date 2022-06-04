import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Portofolio from "./Components/Portofolio/Portofolio";
import Services from "./Components/servicesComponent/Services";

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
                <Portofolio />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
