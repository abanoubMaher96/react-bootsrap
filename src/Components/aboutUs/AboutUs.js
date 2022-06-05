import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Element } from "react-scroll/modules";
import title from "../../assets/title.png";
import mac_book from "../../assets/laptop.png";
import "./style.scss";
const AboutUs = () => {
  return (
    <Element name="About" className="pt-5 about_container">
      <Container>
        <section className="d-flex flex-column align-items-center mb-5 pt-5">
          <img src={title} alt="title" className="mb-4" />
          <h2 className="fw-bold text-capitalize">Some Stuff About Us</h2>
          <p className="text-black-50 text-uppercase">THE GREAT TEAM</p>
          <div className="horizontal-line mb-4"></div>
          <p className="text-black-50 w-50 text-center">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Donec sollicitudin molestie
            malesuada.
          </p>
        </section>
        <Row className="align-items-center">
          <Col md={4} sm={12}>
            <h5>Retina Design</h5>
            <p className="text-black-50">
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            </p>
            <p className="text-black-50">
              Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
              elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id
              orci porta dapibus. Proin eget tortor risus. Donec sollicitudin
              molestie malesuada.
            </p>
            <Button variant="danger" className="rounded-pill text-uppercase">
              order me now
            </Button>
          </Col>
          <Col md={4} sm={12}>
            <img src={mac_book} alt="mac_book" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default AboutUs;
