import React from "react";
import { Container } from "react-bootstrap";
import umebrelaAbsolute1 from "../assets/img/png/umebrelaAbsolute1.png";
import umebrelaAbsolute from "../assets/img/png/umebrelaAbsolute.png";
import heroImage from "../assets/img/png/heroImage.png";

const RoadMap = () => {
  return (
    <>
      <h2 className="text-white text-center mt-1 pt-5  mt-lg-5 ff_lato fw-bolder mb-0 fs_3xl">
        Road<span className="text_ecru">Map</span>
      </h2>
      <div className="roadmapImage position-relative overflow-hidden">
     
        <img
          className="d-none d-lg-block animation_move_x position-absolute end-0 bottom-0"
          src={umebrelaAbsolute}
          width={200}
          alt="umebrelaAbsolute"
        />
        <img
          className="d-none d-lg-block animation_move position-absolute start-0 top-50 opacity_02"
          src={heroImage}
          width={200}
          alt="heroImage"
        />
        <Container>
          <div class="timeline">
            <div class="containe right">
              <div class="content">
                <h2 className="text-white fs_lato fw-semibold fs_lg">
                  March 2022
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="containe left ">
              <div class="content align-items-lg-end d-flex flex-column">
                <h2 className="text-white fs_lato fw-normal fs_lg">
                  March 2022
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  1000 Drops Launch on Ethereum
                </p>
              </div>
            </div>
            <div class="containe right">
              <div class="content">
                <h2 className="text-white fs_lato fw-semibold fs_lg">
                  March 2022
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  Creation of Treasury
                </p>
              </div>
            </div>
            <div class="containe left ">
              <div class="content align-items-lg-end d-flex flex-column">
                <h2 className="text-white fs_lato fw-normal fs_lg">
                  April 2022
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  Our First Airdrop
                </p>
              </div>
            </div>
            <div class="containe right">
              <div class="content">
                <h2 className="text-white fs_lato fw-normal fs_lg">
                  June 2022
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  Major Collabs
                </p>
              </div>
            </div>
            <div class="containe left ">
              <div class="content align-items-lg-end d-flex flex-column">
                <h2 className="text-white fs_lato fw-normal fs_lg">
                  Sometime in Q3
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  Cyber Celebs come on Ethereum
                </p>
              </div>
            </div>
            <div class="containe right">
              <div class="content">
                <h2 className="text-white fs_lato fw-normal fs_lg">
                  Sometime in Q3
                </h2>
                <p className="text-white fs_lato fw-normal fs_xsm">
                  Streetwear + Merch
                </p>
              </div>
            </div>
          </div>
          <div class="containe left ">
            <div class="content align-items-lg-end d-flex flex-column">
              <h2 className="text-white fs_lato fw-normal fs_lg">
                Sometime in Q4
              </h2>
              <p className="text-white fs_lato fw-normal fs_xsm">
                Enhanced Partnerships
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default RoadMap;
