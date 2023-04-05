import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import yellowBlue_parasute from "../assets/img/png/yellowBlue_parasute.png";
const FAQs = () => {
  return (
    <div className="bg-black position-relative">
      <div className="blur_background d-none d-lg-block  position-absolute end-0 top-0"></div>
      <img
        className="d-none d-xl-block  position-absolute start-0 top_25 animation_move"
        src={yellowBlue_parasute}
        width={180}
        alt="yellowBlue_parasute"
      />
      <h2 className="text-white text-center pt-3 pt-lg-5 ff_lato fw-bolder mb-0 fs_3xl">
        <span className="text_ecru"> FAQ</span>’s
      </h2>
      <Container>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          <Accordion.Item
            eventKey="0"
            className=" px-lg-4 mw_967 mx-auto mt-4 mt-lg-5 rounded-2"
          >
            <Accordion.Header>
              <p className="  ff_lato fw-medium fs_md mb-0">
                Egestas scelerisque duis quis aliquet. Consectetur?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="   ff_lato fw-normal fs_xsm mb-0">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className=" px-lg-4 mw_967 mx-auto my-4 rounded-2"
          >
            <Accordion.Header>
              <p className="  ff_lato fw-medium fs_md mb-0">
                Ac nec enim amet, leo lorem quis neque vitae aliquet?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="   ff_lato fw-normal fs_xsm mb-0">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className=" px-lg-4 mw_967 mx-auto my-4 rounded-2"
          >
            <Accordion.Header>
              <p className="  ff_lato fw-medium fs_md mb-0">
                Sit laoreet nibh sit hac potenti. Non ullamcorper fames nibh
                donec?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="   ff_lato fw-normal fs_xsm mb-0">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className=" px-lg-4 mw_967 mx-auto my-4 rounded-2"
          >
            <Accordion.Header>
              <p className="  ff_lato fw-medium fs_md mb-0">
                Porta amet tortor nec pulvinar urna. Et blandit sit id?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="   ff_lato fw-normal fs_xsm mb-0">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="4"
            className=" px-lg-4 mw_967 mx-auto my-4 rounded-2"
          >
            <Accordion.Header>
              <p className="  ff_lato fw-medium fs_md mb-0">
                Tellus hendrerit fermentum ut hendrerit ac vestibulum?
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <p className="   ff_lato fw-normal fs_xsm mb-0">
                Viverra metus viverra rhoncus eget quam suspendisse diam amet,
                nisl. Mattis maecenas libero lacinia accumsan amet. Quam quam
                egestas feugiat amet. Ut nibh vulputate.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQs;
