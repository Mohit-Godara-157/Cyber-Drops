import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../assets/img/png/heroImage.png";

const HeroSection = () => {
  return (
    <div className="bg-black flex-grow-1 d-flex flex-column align-items-center justify-content-center">
      <Container>
        <Row className="py-2 py-sm-3 py-md-4 py-lg-5 flex-column-reverse flex-lg-row align-items-center ">
          <Col className="my-2 my-lg-0" lg={6}>
            <h2 className="text-white ff_lato fw-bolder mb-0 fs_4xl">
              Welcome to <span className="text_ecru">Cyber Drops</span>
            </h2>
            <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-4">
              Viverra felis, dui adipiscing ipsum pharetra donec. Pretium,
              tempus, enim tincidunt at nibh duis iaculis in mauris. Id elit nec
              curabitur purus. Ullamcorper mattis risus suspendisse pretium
              tristique.
            </p>
            <div className="d-flex mt-4 pt-3">
              <a
                className="text-white fs_md ff_lato fw-semibold heroBtn"
                href="#"
              >
                Explore Now
              </a>
            </div>
          </Col>
          <Col className="my-2 my-lg-0" lg={6}>
            <div className="d-flex flex-column align-items-lg-end align-items-center">
              <img
                className="w-75 animation_move"
                src={heroImage}
                alt="heroImage"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
