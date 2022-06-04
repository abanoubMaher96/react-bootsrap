import React from "react";
import { Button } from "react-bootstrap";
import "./home.scss";
import { Element } from "react-scroll";
const Home = () => {
  return (
    <Element>
      <main className="home_container" id="Home">
        <div className="d-flex flex-column align-items-center pt-5 justify-content-center h-75">
          {/* <div className="text-center"> */}
          <h1>Taste the Creativity</h1>
          <p className="text-white-50 mb-5">
            We make awesome graphic and web design
          </p>
          <Button
            variant="danger"
            className="rounded-pill"
            onClick={() => console.log("Danger")}
          >
            Get Started
          </Button>
        </div>
      </main>
    </Element>
  );
};

export default Home;
