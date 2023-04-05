import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import polygon1 from "../assets/img/png/Polygon1.png";
import polygon2 from "../assets/img/png/Polygon2.png";
import polygon3 from "../assets/img/png/Polygon3.png";
import umebrelaAbsolute from "../assets/img/png/umebrelaAbsolute.png";

const WhatWedo = () => {
  return (
    <div className="bg-black position-relative ">
      <div className="blur_background d-none d-lg-block   position-absolute start-0 top-50"></div>
      <img
        className="d-none d-lg-block  position-absolute animation_move_x end-0 bottom_17  bottom_xl_37"
        src={umebrelaAbsolute} width={201}
        alt="umebrelaAbsolute"
      />

      <Container>
        <Row className="pt-lg-4 pb-4 pb-lg-5 justify-content-between align-items-center">
          <Col className="my-2 my-lg-0" lg={6}>
            <Row>
              <Col className="my-2 my-lg-0 p-0" sm={5}>
                <img className="w-100" src={polygon1} alt="polygon1" />
              </Col>
              <Col className="my-2 my-lg-0 p-0" sm={5}>
                <img className="w-100" src={polygon2} alt="polygon2" />
              </Col>
            </Row>
            <Row className="justify-content-end">
              <Col className="my-2 my-lg-0 p-0" sm={5}>
                <img className="w-100" src={polygon3} alt="polygon3" />
              </Col>
              <Col className="my-2 my-lg-0 p-0" sm={5}>
                <img className="w-100" src={polygon3} alt="polygon3" />
              </Col>
            </Row>
          </Col>
          <Col className="my-2 my-lg-0 " lg={5}>
            <h2 className="text-white ff_lato fw-bolder mb-0 fs_3xl">
              What <span className="text_ecru">we do</span>
            </h2>
            <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-4">
              1000 Cyber Drops will be dropping on Ethereum in March 2022. Each
              and every Cyber Drop is uniquely hand crafted. This is just the
              beginning of our journey. Owning a Cyber Drop will unlock monthly
              airdrops and future governance rights in addition to our
              revolutionary algorithm. We strive to always bring innovation and
              keep BUILDing. Cyber Drops is a community driven project and
              always will be that way. That’s our promise.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatWedo;
