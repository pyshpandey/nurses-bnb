import React from "react";
import { Col, Row } from "react-bootstrap";

const RowCol = ({ md, children }) => {
  return <Row>{md ? <Col md>{children}</Col> : <Col>{children}</Col>}</Row>;
};

export default RowCol;
