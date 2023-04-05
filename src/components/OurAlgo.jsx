import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../assets/img/png/image1.png";
import image2 from "../assets/img/png/image2.png";
import image3 from "../assets/img/png/image3.png";
const OurAlgo = () => {
  return (
    <div className="bg-black position-relative py-5">
      <div className="blur_background d-none d-lg-block  position-absolute start-0 top-0"></div>
      <div className="blur_background d-none d-lg-block  position-absolute end-0 bottom-0"></div>
      <Container>
        <Row className="py-lg-5 flex-column-reverse flex-lg-row  align-items-center">
          <Col className="my-2 my-lg-0 " lg={7}>
            <h2 className="text-white ff_lato fw-bolder mb-0 fs_3xl">
              Our <span className="text_ecru">Algo</span>
            </h2>
            <p className="ff_lato fw-normal fs_sm text-white mb-0 mt-4">
              We have perfected our algorithm, which prioritizes a low risk and
              consistent profit stream without the need for daily
              micromanagement. While most trading algorithms can’t stand up
              against a volatile or risky market, our algorithm thrives in those
              conditions. Early-stage testers have seen a consistent flow of
              income with minimal ups and downs. Our algorithm has been in the
              works for YEARS. This has given us the time to rigorously backtest
              and release any needed hotfixes. As of early March 2022, we have
              close to a quarter of a million under direct management!
            </p>
          </Col>
          <Col className="my-2 my-lg-0" lg={5}>
            <Row className="align-items-center">
              <Col sm={6}>
                <Row className="align-items-center">
                  <Col className="my-2" lg={12}>
                    <div className="algo_images_Border p-2">
                      <img className="w-100" src={image1} alt="image1" />
                    </div>
                  </Col>
                  <Col className="my-2" lg={12}>
                    <div className="algo_images_Border p-2">
                      <img className="w-100" src={image2} alt="image2" />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm={6}>
                <div className="algo_images_Border p-2">
                  <img className="w-100" src={image3} alt="image3" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurAlgo;
