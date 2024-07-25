import React, { useState } from "react";
import {
  Row,
  Col,
  Container,
  Form,
  Button,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import SaveFormIcon from "../../assets/img/save-form-ic.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import CreateBankDetails from "../../components/create-new-list/bank-info/CreateBankDetails";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";
const BankAccountDetails = () => {
  const navigate = useNavigate();
  let { property_id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <CreateBankDetails show={show} handleClose={handleClose} />
      <div className="form-container gray-bg">
        <Container fluid>
          <div className="mr-b-36">
            <Row>
              <Col>
                <div className="heading">
                  <h1> Bank Account Information </h1>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    sem nisl, fermentum ut nunc non, blandit volutpat mi.{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div className="lease-signor-block white-bg mr-b-30">
            <div className="header-block">
              <Row>
                <Col>
                  <div className="heading">
                    <div className="user-thumb">
                      <img src={SaveFormIcon} />
                    </div>
                    <div className="title">
                      <h4> Saved payment methods </h4>
                      <p>
                        {" "}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="flex-end">
                  <Button className="sync-btn" onClick={handleShow}>
                    {" "}
                    Add New Bank Account{" "}
                  </Button>
                </Col>
              </Row>
            </div>
            <div className="add-pad mr-b-50 pad-btm-50">
              <div className="border-tp">
                <Row>
                  <Col md="1" xs="6"></Col>
                  <Col md="3" xs="6">
                    <div className="table-item">
                      <h5> Company Name </h5>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <h5> Name </h5>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <h5> Account Number </h5>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <h5> Routing Number </h5>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <h5> Bank Name </h5>
                    </div>
                  </Col>
                </Row>
              </div>

              <div className="border-btm">
                <h3 className="text-center">In Progress...</h3>
                {/* <Row>
                  <Col md="1" xs="6">
                    <div className="radio-btn">
                      <Form.Check type="radio" aria-label="radio 1" />
                    </div>
                  </Col>
                  <Col md="3" xs="6">
                    <div className="table-item">
                      <p> Chevron Industries LLC </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> Steven Garrett </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 000123456789 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 8599663203875 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> Bank of America </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="border-btm">
                <Row>
                  <Col md="1" xs="6">
                    <div className="radio-btn">
                      <Form.Check type="radio" aria-label="radio 1" />
                    </div>
                  </Col>
                  <Col md="3" xs="6">
                    <div className="table-item">
                      <p> Chevron Industries LLC </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> Steven Garrett </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 000123456789 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 8599663203875 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> City Bank </p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="border-btm">
                <Row>
                  <Col md="1" xs="6">
                    <div className="radio-btn">
                      <Form.Check type="radio" aria-label="radio 1" />
                    </div>
                  </Col>
                  <Col md="3" xs="6">
                    <div className="table-item">
                      <p> Chevron Industries LLC </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> Landon Curry </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 000123456789 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> 8599663203875 </p>
                    </div>
                  </Col>
                  <Col md="2" xs="6">
                    <div className="table-item">
                      <p> Bank of America </p>
                    </div>
                  </Col>
                </Row>*/}
              </div>
            </div>
          </div>
          <div className="button-wrp">
            <Row>
              <Col>
                <Link to={() => navigate(-1)}>
                  <Button variant="secondary" className="sm-btn">
                    Cancel
                  </Button>
                </Link>
                <Link
                  to={`${CREATE_NEW_LIST_PATHS.LAYOUT_PATH}${CREATE_NEW_LIST_PATHS.REVIEW_DETAILS_ONLY}${property_id}`}
                >
                  <Button variant="primary" className="sm-btn">
                    Proceed
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default BankAccountDetails;
