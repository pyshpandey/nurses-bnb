import React from "react";
import { Col, Row } from "react-bootstrap";
import RowCol from "../../common/Row-Col";

const BlockOutDates = ({ data }) => {
  return (
    <div className="block-out mr-b-50">
      <RowCol>
        <h3> Block-Out Dates </h3>
      </RowCol>
      <Row>
        {data?.map((date, ind) => (
          <Col md="3" xs="6" key={ind}>
            <div className="table-item">
              <h5> {date.title} </h5>
              <p> {date.date} </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlockOutDates;
