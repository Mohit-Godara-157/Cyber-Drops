import React from "react";
import { Col, Container, Row } from "react-bootstrap";


const HowItworks = () => {
  return (
    <div className="bg-black ">
  
      <Container>
        <h2 className="text-white text-center pt-3 pt-lg-5 ff_lato fw-bolder mb-0 fs_3xl">
          How it <span className="text_ecru"> works</span>
        </h2>
        <Row className="py-4 py-lg-5 justify-content-center">
          <Col className="my-2" sm={6} md={4} lg={3}>
            <div className="p-4 card_Border h-100">
              <div className="d-flex justify-content-center ">
                <div className="cardCircle d-flex justify-content-center text-white ff_lato fw-bold fs_xl align-items-center">
                  01
                </div>
              </div>
              <h5 className="text-center text-white mb-0 pt-4 ff_lato fw-bold fs_md">
                Mint NFT
              </h5>
              <p className="text-center mb-0 text-white pt-3 ff_lato fw-bold fs_xsm">
                You must own our NFT to connect to direct management or
                participate in governance
              </p>
            </div>
          </Col>
          <Col className="my-2" sm={6} md={4} lg={3}>
            <div className="p-4 card_Border h-100">
              <div className="d-flex justify-content-center ">
                <div className="cardCircle d-flex justify-content-center text-white ff_lato fw-bold fs_xl align-items-center">
                  02
                </div>
              </div>
              <h5 className="text-center text-white mb-0 pt-4 ff_lato fw-bold fs_md">
                Verify NFT Ownership
              </h5>
              <p className="text-center text-white pt-3 mb-0 ff_lato fw-bold fs_xsm">
                Only Cyber Drops that are have verified are eligible to be
                connected under direct management
              </p>
            </div>
          </Col>
          <Col className="my-2" sm={6} md={4} lg={3}>
            <div className="p-4 card_second_Border h-100">
              <div className="d-flex justify-content-center ">
                <div className="cardCircle d-flex justify-content-center text-white ff_lato fw-bold fs_xl align-items-center">
                  03
                </div>
              </div>
              <h5 className="text-center text-white mb-0 pt-4 ff_lato fw-bold fs_md">
                Link API to your account
              </h5>
              <p className="text-center text-white pt-3 ff_lato fw-bold fs_xsm">
                Only HODLers that submit their API key and secret will be under
                direct management
              </p>
            </div>
          </Col>
          <Col className="my-2" sm={6} md={4} lg={3}>
            <div className="p-4 card_second_Border h-100">
              <div className="d-flex justify-content-center ">
                <div className="cardCircle d-flex justify-content-center text-white ff_lato fw-bold fs_xl align-items-center">
                  04
                </div>
              </div>
              <h5 className="text-center text-white mb-0 pt-4 ff_lato fw-bold fs_md">
                Passive Income for life
              </h5>
              <p className="text-center text-white pt-3 ff_lato fw-bold fs_xsm">
                As long as your HODL your Cyber Drop, you will be connected
                under direct management
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItworks;
