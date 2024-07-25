import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { SmallHeader } from "../../common/header";
import FormikController from "../../formik/FormikController";
import { Formik, Form, FieldArray } from "formik";
import { propertyInfo_initialValues } from "../../../constants/form-initial-values";
import { propertyInfo_validationSchema } from "../../../constants/form-validation-schemas";
import { loadPropertyItems, roomsTypes } from "../../../constants/utils";
import { Link, useNavigate } from "react-router-dom";
import RowCol from "../../common/Row-Col";
import { CREATE_NEW_LIST_PATHS } from "../../../config/Owner-And-NewList_Paths";

const CreatePropertyInformation = ({
  propertyInfoApi,
  proeprtyItems,
  propertyId,
}) => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
    values.property_id = propertyId;
    propertyInfoApi(values, navigate);
  };

  return (
    <>
      <Formik
        initialValues={propertyInfo_initialValues}
        validationSchema={propertyInfo_validationSchema}
        onSubmit={onSubmit}
      >
        {({
          errors,
          values,
          setFieldValue,
          setFieldTouched,
          touched,
          isSubmitting,
        }) => (
          <Form>
            <div className="mr-b-30">
              <Row>
                <Col md="6" xs="12">
                  <FormikController
                    control="input"
                    type="text"
                    name="propertyInformation.weeklyrent"
                    label="Weekly Rent"
                    className="form-control"
                  />
                </Col>
                <Col md="6" xs="12">
                  <FormikController
                    control="input"
                    type="text"
                    name="propertyInformation.montlyrate"
                    label="Monthly Rent"
                    className="form-control"
                  />
                </Col>
              </Row>
            </div>
            <div className="mr-b-30">
              <Row>
                <Col md>
                  <FormikController
                    control="date"
                    name="propertyInformation.check_in_time"
                    className="form-control form-select"
                    label="Check-In Time"
                  />
                </Col>
                <Col md>
                  <FormikController
                    control="date"
                    name="propertyInformation.check_out_time"
                    className="form-control form-select"
                    label="Check-Out Time"
                    style={{ border: "none" }}
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
                    name="propertyInformation.rentel_space"
                    label="Rental space (in Sq. Ft.)"
                    className="form-control"
                  />
                </Col>
                <Col md>
                  <FormikController
                    control="input"
                    type="text"
                    name="propertyInformation.propety_space"
                    label="Property space (in Sq. Ft.)"
                    className="form-control"
                  />
                </Col>
              </Row>
            </div>
            <div className="mr-b-20">
              <RowCol>
                <FormikController
                  control="textArea"
                  type="textarea"
                  name="propertyInformation.house_rules"
                  label="House Rules"
                  className="form-control"
                  style={{ height: "160px" }}
                />
                <p className="word-limt"> Character limit: 500 </p>
              </RowCol>
            </div>
            <div className="form-block switch-block mr-b-30 mob-mr-b-30">
              <Row>
                <SmallHeader
                  h="Block-Out Dates"
                  p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
                <Col md="3" className="flex-end">
                  <Button className="sync-btn"> Sync iCalendar </Button>
                </Col>
              </Row>
            </div>
            <div className="form-block switch-block mr-b-30 mob-mr-b-30">
              <Row>
                <SmallHeader
                  h="Pets"
                  p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />
                <Col md="3" xs="3" className="flex-end">
                  <FormikController
                    control="switchToggle"
                    name="propertyInformation.is_pet_allowed"
                  />
                </Col>
              </Row>
              {values.propertyInformation.is_pet_allowed && (
                <div className="auto-w-box">
                  <RowCol>
                    <FormikController
                      control="checkbox"
                      type="checkbox"
                      disabled={!values.propertyInformation.is_pet_allowed}
                      name="propertyInformation.pets"
                      options={loadPropertyItems(
                        proeprtyItems?.loadPropertyInfo?.pet
                      )}
                      className="white-block"
                    />
                  </RowCol>
                </div>
              )}
            </div>
            <div className="form-block switch-block mr-b-30 mob-mr-b-30">
              <RowCol>
                <h6> Rooms </h6>
              </RowCol>
              <div className="white-block less-mr">
                <Row>
                  <Col md="8" xs="5">
                    <strong> Bedroom(s) </strong>
                  </Col>
                  <Col md="2" xs="2">
                    <FormikController
                      control="input"
                      size="sm"
                      type="text"
                      name="propertyInformation.bedroom.no_of_room"
                      placeholder="No. of Room"
                      className="form-control simple-input"
                    />
                  </Col>
                  <Col md="2" xs="5">
                    <FormikController
                      control="select"
                      name="propertyInformation.bedroom.privacy"
                      options={roomsTypes}
                      className="form-control form-select simple-input"
                    />
                  </Col>
                </Row>
              </div>
              <div className="white-block less-mr">
                <Row>
                  <Col md="8" xs="5">
                    <strong> Bathroom(s) </strong>
                  </Col>
                  <Col md="2" xs="2">
                    <FormikController
                      control="input"
                      size="sm"
                      type="text"
                      name="propertyInformation.bathroom.no_of_room"
                      placeholder="No. of Room"
                      className="form-control simple-input"
                    />
                  </Col>
                  <Col md="2" xs="5">
                    <FormikController
                      control="select"
                      name="propertyInformation.bathroom.privacy"
                      options={roomsTypes}
                      className="form-control form-select simple-input"
                    />
                  </Col>
                </Row>
              </div>
              <div className="white-block less-mr">
                <Row>
                  <Col md="8" xs="5">
                    <strong> Kitchen(s) </strong>
                  </Col>
                  <Col md="2" xs="2">
                    <FormikController
                      control="input"
                      size="sm"
                      type="text"
                      name="propertyInformation.kitchen.no_of_room"
                      className="form-control simple-input"
                    />
                  </Col>
                  <Col md="2" xs="5">
                    <FormikController
                      control="select"
                      name="propertyInformation.kitchen.privacy"
                      options={roomsTypes}
                      className="form-control form-select simple-input"
                    />
                  </Col>
                </Row>
              </div>
              <div className="white-block less-mr">
                <Row>
                  <Col md="8" xs="5">
                    <strong> Closet(s) </strong>
                  </Col>
                  <Col md="2" xs="2">
                    <FormikController
                      control="input"
                      size="sm"
                      type="text"
                      name="propertyInformation.closet.no_of_room"
                      className="form-control simple-input"
                    />
                  </Col>
                  <Col md="2" xs="5">
                    <FormikController
                      control="select"
                      name="propertyInformation.closet.privacy"
                      options={roomsTypes}
                      className="form-control form-select simple-input"
                    />
                  </Col>
                </Row>
              </div>
              <div className="white-block less-mr">
                <Row>
                  <Col md="10" xs="6">
                    <strong> Entrance </strong>
                  </Col>
                  <Col md="2" xs="6">
                    <FormikController
                      control="select"
                      name="propertyInformation.entrance"
                      options={roomsTypes}
                      className="form-control form-select simple-input"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="form-block switch-block mr-b-30 mob-mr-b-30">
              <Row>
                <SmallHeader
                  h="Utilities Included"
                  p=" Select all that applies "
                />
              </Row>
              <div className="auto-w-box">
                <Row>
                  <Col>
                    <FormikController
                      control="checkbox"
                      name="propertyInformation.utilites"
                      options={loadPropertyItems(
                        proeprtyItems?.loadPropertyInfo?.utilites
                      )}
                      className="white-block"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="form-block switch-block mr-b-30 mob-mr-b-30">
              <Row>
                <SmallHeader h="Rental Period" p=" Select all that applies " />
              </Row>
              <div className="auto-w-box bx-w-sm">
                <Row>
                  <Col>
                    <FormikController
                      control="checkbox"
                      name="propertyInformation.rental_period"
                      options={loadPropertyItems(
                        proeprtyItems?.loadPropertyInfo?.rental_period
                      )}
                      className="white-block"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="mr-b-50">
              <Row>
                <Col md>
                  <FormikController
                    control="input"
                    type="text"
                    name="propertyInformation.security_fee"
                    label="Security Deposit Amount (Optional)"
                    className="form-control"
                  />
                </Col>
                <Col md>
                  <FormikController
                    control="input"
                    type="text"
                    name="propertyInformation.cleaning_fee"
                    label="Cleaning Fee (Weekly)"
                    className="form-control"
                  />
                </Col>
              </Row>
            </div>
            <div className="form-block switch-block strach-checkbox mr-b-50">
              <Row>
                <SmallHeader
                  h="Parking Type (Paid)"
                  p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
                />

                <Col md="3" xs="3" className="flex-end">
                  <FormikController
                    control="switchToggle"
                    name="propertyInformation.is_parking_allowed"
                  />
                </Col>
              </Row>
              {values.propertyInformation.is_parking_allowed && (
                <div className="auto-w-box ">
                  <Row>
                    <Col md="4">
                      <FormikController
                        control="input"
                        type="text"
                        name="propertyInformation.parking_type.parking_fee"
                        label="Parking Fee (Weekly)"
                        className="form-control mt-4 bg-white"
                        disabled={
                          !values.propertyInformation.is_parking_allowed
                        }
                        labelClassName="white-b"
                      />
                    </Col>
                    <Col md="8">
                      <FormikController
                        control="checkbox"
                        name="propertyInformation.parking_type.parking_type"
                        disabled={
                          !values.propertyInformation.is_parking_allowed
                        }
                        options={loadPropertyItems(
                          proeprtyItems?.loadPropertyInfo?.parking_type
                        )}
                        className="white-block"
                      />
                    </Col>
                  </Row>
                </div>
              )}
            </div>{" "}
            <div className="button-wrp">
              <RowCol>
                <Link to={CREATE_NEW_LIST_PATHS.BASIC_INFO}>
                  <Button variant="secondary">Cancel</Button>
                </Link>
                <Button type="submit" variant="primary">
                  Proceed
                </Button>
              </RowCol>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreatePropertyInformation;
