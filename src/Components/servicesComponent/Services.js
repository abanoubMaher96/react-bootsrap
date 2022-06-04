import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Element } from "react-scroll";
import title from "../../assets/title.png";
import "./style.scss";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { BsFillPencilFill } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { FaPlug } from "react-icons/fa";

const Services = () => {
  return (
    <Element name="Services" className="services_container">
      <Container className="mt-5">
        <section className="d-flex flex-column align-items-center mb-5">
          <img src={title} alt="title" className="mb-4" />
          <h2 className="fw-bold">We are Good at</h2>
          <p className="text-black-50">SOME OF THESE STUFF UNDER</p>
          <div className="horizontal-line"></div>
        </section>
        <Row className="text-center">
          <Col md={6} sm={12} lg={4}>
            <div className="position-relative icon_holder">
              <RiNumber1 className="position-absolute bottom-0 start-50 translate-middle-x number" />
              <BsFillPencilFill className="position-absolute bottom-0 start-50 translate-middle-x icon" />
            </div>
            <h3 className="text-warning text-uppercase fw-bold mt-3">
              graphic design
            </h3>
            <p className="text-black-50 lh-lg">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="position-relative icon_holder">
              <RiNumber2 className="position-absolute bottom-0 start-50 translate-middle-x number" />
              <CgScreen className="position-absolute bottom-0 start-50 translate-middle-x icon" />
            </div>
            <h3 className="text-warning text-uppercase fw-bold mt-3">
              graphic design
            </h3>
            <p className="text-black-50 lh-lg">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </Col>
          <Col md={6} sm={12} lg={4}>
            <div className="position-relative icon_holder">
              <RiNumber3 className="position-absolute bottom-0 start-50 translate-middle-x number" />
              <FaPlug className="position-absolute bottom-0 start-50 translate-middle-x icon" />
            </div>
            <h3 className="text-warning text-uppercase fw-bold mt-3">
              graphic design
            </h3>
            <p className="text-black-50 lh-lg">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Services;
