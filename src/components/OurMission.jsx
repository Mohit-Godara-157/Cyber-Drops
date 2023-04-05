import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import umberelaImage from "../assets/img/png/umbrelaImage.png";
const OurMission = () => {
  return (
    <div className="bg-black position-relative">
      <div className="blur_background d-none d-lg-block  position-absolute start-0 top-0"></div>
      <div className="blur_background d-none d-lg-block  position-absolute end-0 "></div>
      <Container>
        <Row className="py-4  py-lg-5  align-items-center">
          <Col className="my-2 " lg={6}>
            <div className="justify-content-lg-start justify-content-center d-flex">
              <img
                className="w_lg_75  hw_image"
                src={umberelaImage}
                alt="umberelaImage"
              />
            </div>
          </Col>
          <Col className="my-2 " lg={6}>
            <h2 className="text-white ff_lato fw-bolder mb-0 fs_3xl">
              Our <span className="text_ecru">Mission</span>
            </h2>
            <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-4">
              We understand that one of the biggest concerns for early-stage
              investors is that it can quickly become stressful, overwhelming,
              and especially extremely time consuming. It isn’t easy to balance
              a full time job, family, and an active investment portfolio,
              especially when just starting out.
            </p>
            <div className="d-flex mt-4 pt-3">
              <a
                className="text-white fs_md ff_lato fw-semibold heroBtn"
                href="#"
              >
                Read More
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurMission;
