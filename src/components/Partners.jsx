import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playbit from "../assets/img/svg/playBit.svg";
import IMage24 from "../assets/img/svg/24.svg";
import trading from "../assets/img/svg/trading.svg";
import focusGroup from "../assets/img/svg/focusGroup.svg";
const Partners = () => {
  return (
    <div className="bg-black">
      <h2 className="text-white text-center fw-bold ff_lato fs_3xl pt-3 pb-2 pb-xl-0 pt-lg-5">
        Part<span className="text_ecru">ners</span>
      </h2>
      <div className="bgImage py-4 py-lg-5 d-flex flex-column align-items-center justify-content-center">
        <Container className="py-lg-4">
          <Row className="py-md-5 justify-content-around">
            <Col className="my-2 my-lg-0" xs={12} md={6} lg={4}>
              <div className="h-100 py-3 py-lg-0 ">
                <div className="partner_images_Border d-flex justify-content-center align-items-center py-3 py-md-0 h-100 ">
                  <img className="w_lg_75 image1" src={playbit} alt="playbit" />
                </div>
                <p className="text-center fw-bold ff_lato fs_md mb-0 mt-2">
                  Playbit
                </p>
              </div>
            </Col>
            <Col className="my-2 my-lg-0" xs={6} md={6} lg={2}>
              <div className="h-100 py-3 py-lg-0 ">
                <div className="partner_images_Border d-flex justify-content-center align-items-center h-100 ">
                  <img className="w_lg_75 image2" src={IMage24} alt="IMage24" />
                </div>
                <p className="text-center fw-bold ff_lato fs_md mb-0  mt-2">
                  24 Capital
                </p>
              </div>
            </Col>
            <Col className="my-2 my-lg-0" xs={6} md={6} lg={2}>
              <div className="h-100 py-3 py-lg-0 ">
                <div className="partner_images_Border d-flex justify-content-center align-items-center h-100">
                  <img className="w_lg_75 image2" src={trading} alt="trading" />
                </div>
                <p className="text-center fw-bold ff_lato fs_md mb-0  mt-2">
                  TradingHive
                </p>
              </div>
            </Col>
            <Col className="my-2 my-lg-0" xs={6} md={6} lg={2}>
              <div className="h-100 py-3 py-lg-0 ">
                <div className="partner_images_Border d-flex justify-content-center align-items-center  h-100">
                  <img
                    className="w_lg_75 image2"
                    src={focusGroup}
                    alt="focusGroup"
                  />
                </div>
                <p className="text-center fw-bold ff_lato fs_md mb-0  mt-2">
                  Focus Group Equities
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <h5 className="text-center text_ecru fs_sm fw-bold pt-2 pt-xl-0 ff_lato mb-0 ">
        For business and collaborations, contact us team@cyberdrops.finance
      </h5>
    </div>
  );
};

export default Partners;
