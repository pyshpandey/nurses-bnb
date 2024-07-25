import React from "react";
import { Formik, Form } from "formik";
import { Row, Col, Button, Modal } from "react-bootstrap";
import { bankInfo_initialValues } from "../../../constants/form-initial-values";
import { bankInfo_validationSchema } from "../../../constants/form-validation-schemas";
import FormikController from "../../formik/FormikController";
import { create_bank_info } from "../../../actions/bank-info";
import { connect } from "react-redux";

const CreateBankDetails = ({
  create_bank_info,
  show,
  handleClose,
  bank_info,
}) => {
  const onSubmit = (values) => {
    create_bank_info(values);
  };

  return (
    <Modal className="bank-accont-modal" show={show} onHide={handleClose}>
      <div className="modal-box">
        <div className="header">
          <h3> Bank account </h3>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="body">
          <Formik
            initialValues={bankInfo_initialValues}
            validationSchema={bankInfo_validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="mr-b-30">
                <Row>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.company_name"
                      label="Company Name (Optional)"
                      className="form-control"
                    />
                  </Col>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.account_number"
                      label="Account Number"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mr-b-30">
                <Row>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.routing_number"
                      label="Routing Number"
                      className="form-control"
                    />
                  </Col>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.bank_name"
                      label="Bank Name"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </div>
              <div className="mr-b-30">
                <Row>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.first_name"
                      label="Bank Account First Name"
                      className="form-control"
                    />
                  </Col>
                  <Col md>
                    <FormikController
                      control="input"
                      type="text"
                      name="bankInfo.last_name"
                      label="Bank Account Last Name"
                      className="form-control"
                    />
                  </Col>
                </Row>
              </div>
              <div className="button-wrp">
                <Row>
                  <Col>
                    <Button
                      variant="secondary"
                      className="sm-btn"
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button type="submit" variant="primary" className="sm-btn">
                      Proceed
                    </Button>
                  </Col>
                </Row>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export const mapStateToProps = ({ bank_info }) => {
  return { bank_info };
};

export default connect(mapStateToProps, {
  create_bank_info,
})(CreateBankDetails);
