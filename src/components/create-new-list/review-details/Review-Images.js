import React from "react";
import { Col, Row } from "react-bootstrap";
import MainThumb from "../../../assets/img/prop-ic1.png";
import Thumb1 from "../../../assets/img/prop-pic2.png";
import Thumb2 from "../../../assets/img/prop-pic3.png";
const ReviewImages = ({ images }) => {
  return (
    <div className="mr-b-30 mob-mr-b-30">
      <Row>
        <Col md="8" xs="8">
          <div className="thumb-item">
            <img src={images && images[0] ? images[0] : null} />
          </div>
        </Col>
        <Col md="4" xs="4">
          <div className="thumb-item mr-b-20">
            <img src={images && images[1] ? images[1] : null} />
          </div>
          <div className="thumb-item">
            <img src={images && images[2] ? images[2] : null} />
            {/* <div className="black-overlay">
              {" "}
              <a> View more </a>{" "}
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ReviewImages;
