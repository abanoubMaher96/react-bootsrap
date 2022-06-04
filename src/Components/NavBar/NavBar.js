import React from "react";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import websiteLogo from "../../assets/logo.png";
import "./style.scss";
import { FaBars, FaSearch } from "react-icons/fa";
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link as ReactScrollLink } from "react-scroll";
const NavBar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="navBar_container p-0"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={ReactScrollLink} to="Home">
          <img src={websiteLogo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars style={{ color: "#fff" }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto py-lg-3 "
            // activeKey={location.pathname}
            variant="light"
          >
            <Nav.Link
              as={ReactScrollLink}
              activeClass="active"
              to="Home"
              spy
              offset={-75}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={ReactScrollLink}
              activeClass="active"
              to="Services"
              spy
              offset={-75}
              duration={2000}
            >
              Services
            </Nav.Link>
            <Nav.Link
              as={ReactScrollLink}
              activeClass="active"
              to="Portofolio"
              spy
              offset={-75}
              duration={2000}
            >
              Portofolio
            </Nav.Link>
            <Nav.Link
              as={ReactScrollLink}
              activeClass="active"
              to="About"
              spy
              offset={-75}
              duration={2000}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={ReactScrollLink}
              activeClass="active"
              to="Contact"
              spy
              offset={-75}
              duration={2000}
            >
              Contact
            </Nav.Link>
            <div
              className="vr me-2 d-none d-lg-block"
              style={{ color: "#33d1cc", opacity: 1 }}
            />
            <FaSearch
              style={{ color: "#33d1cc" }}
              className="align-self-center d-none d-lg-block"
            />
            <Button
              variant="danger"
              className="ms-lg-2 rounded-pill loginBtn"
              onClick={() => console.log("Danger")}
            >
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
