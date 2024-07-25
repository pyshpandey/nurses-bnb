import React from "react";
import { Col, Row } from "react-bootstrap";
import { CheckIcon } from "../../../assets/img/imagesh";
import { constantTexts } from "../../../constants/utils";
import { SmallHeader } from "../../common/header";

const ChildInfant = ({ data }) => {
  return (
    <div className="mr-b-20 switch-block">
      <Row>
        <SmallHeader
          h={constantTexts.SAFE_AND_SUITABLE_CHILDREN}
          p={constantTexts.ONELINE_SUB_HEAD}
        />
        <Col md="3" xs="3" className="flex-end">
          {data ? <img src={CheckIcon} /> : null}
        </Col>
      </Row>
    </div>
  );
};

export default ChildInfant;
