import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Form, FieldArray } from "formik";
import FormikController from "../../formik/FormikController";
import { Link, useNavigate, useParams } from "react-router-dom";
import { leaseSignor_initialValues } from "../../../constants/form-initial-values";
import { leaseSignor_validationSchema } from "../../../constants/form-validation-schemas";
import { SmallHeader } from "../../common/header";
import { DeleteIcon } from "../../../assets/img/imagesh";

const CreateLeaseSignor = ({ leaseSignorApi, leaseSignorData }) => {
  const navigate = useNavigate();
  let { property_id } = useParams();

  const onSubmit = (values) => {
    values.property_id = property_id;
    leaseSignorApi(values, navigate);
  };

  return (
    <Formik
      initialValues={leaseSignor_initialValues}
      validationSchema={leaseSignor_validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <FieldArray name="leasesignors">
            {({ push, remove }) => (
              <>
                {values.leasesignors.map((_, index) => (
                  <React.Fragment key={index}>
                    <div className="white-block-l lease-signor mr-b-40">
                      <div className="mr-b-30">
                        <div className="mr-b-30">
                          <Row>
                            <SmallHeader
                              h="Lease Signor"
                              p="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                              xs="8"
                            />
                            <Col md="3" xs="4" className="align-right">
                              {values.leasesignors.length <= 1 && (
                                <Button
                                  className="delete-btn"
                                  variant="light"
                                  onClick={() => remove(index)}
                                  disabled={values.leasesignors.length <= 1}
                                >
                                  {" "}
                                  <img src={DeleteIcon} />{" "}
                                </Button>
                              )}
                            </Col>
                          </Row>
                        </div>
                        <div className="mr-b-30">
                          <Row>
                            <Col md>
                              <FormikController
                                control="input"
                                name={`leasesignors.${index}.first_name`}
                                label="First Name"
                                className="form-control"
                              />
                            </Col>
                            <Col md>
                              <FormikController
                                control="input"
                                name={`leasesignors.${index}.last_name`}
                                label="Last Name"
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
                                type="number"
                                name={`leasesignors.${index}.mobile_number`}
                                label="Phone Number"
                                className="form-control"
                              />
                            </Col>
                            <Col md>
                              <FormikController
                                control="input"
                                type="email"
                                name={`leasesignors.${index}.email`}
                                label="Email Address"
                                className="form-control"
                              />
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                <div className="mr-b-50">
                  <Row>
                    <Col>
                      <Button
                        variant="secondary"
                        className="full-width"
                        onClick={() => {
                          push({
                            first_name: "",
                            last_name: "",
                            mobile_number: "",
                            email: "",
                          });
                        }}
                      >
                        Add More Signor
                      </Button>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </FieldArray>

          <div className="button-wrp">
            <Row>
              <Col>
                <Link to={() => navigate(-1)}>
                  <Button variant="secondary">Cancel</Button>
                </Link>
                <Button type="submit" variant="primary">
                  Proceed
                </Button>
              </Col>
            </Row>
          </div>
          {/* <pre>{JSON.stringify(values, null, 10)}</pre> */}
        </Form>
      )}
    </Formik>
  );
};

export default CreateLeaseSignor;
