import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Element } from "react-scroll/modules";
import title from "../../assets/title.png";
import "./style.scss";
import photo_1 from "../../assets/work-01.jpg";
import photo_2 from "../../assets/work-02.jpg";
import photo_3 from "../../assets/work-03.jpg";
import photo_4 from "../../assets/work-04.jpg";
import photo_5 from "../../assets/work-05.jpg";
import photo_6 from "../../assets/work-06.jpg";
import photo_7 from "../../assets/work-07.jpg";
import photo_8 from "../../assets/work-08.jpg";

const Portofolio = () => {
  return (
    <Element name="Portofolio" className="portofolio_container">
      <Container>
        <section className="d-flex flex-column align-items-center mb-5 pt-5">
          <img src={title} alt="title" className="mb-4" />
          <h2 className="fw-bold text-capitalize">We make this</h2>
          <p className="text-black-50 text-uppercase">prepare to be amazed</p>
          <div className="horizontal-line"></div>
        </section>
        <ListGroup horizontal className="d-flex justify-content-center mb-5">
          <ListGroup.Item active action className="rounded-pill">
            All
          </ListGroup.Item>
          <ListGroup.Item action className="list_item">
            Design
          </ListGroup.Item>
          <ListGroup.Item action className="list_item">
            Code
          </ListGroup.Item>
          <ListGroup.Item action className="list_item">
            Photo
          </ListGroup.Item>
          <ListGroup.Item action className="list_item">
            App
          </ListGroup.Item>
        </ListGroup>
        <Row className="row_wrapper ">
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4  image_wrapper bg-white"
            data-work="Application"
          >
            <img src={photo_1} alt="photo_1" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4  image_wrapper"
            data-work="Application"
          >
            <img src={photo_2} alt="photo_2" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_3} alt="photo_3" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_4} alt="photo_4" className="img-fluid" />
          </Col>
        </Row>
        <Row className="row_wrapper">
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_5} alt="photo_5" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_6} alt="photo_6" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_7} alt="photo_7" className="img-fluid" />
          </Col>
          <Col
            lg={3}
            md={6}
            sm={12}
            className="mb-4 image_wrapper"
            data-work="Application"
          >
            <img src={photo_8} alt="photo_8" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </Element>
  );
};

export default Portofolio;
