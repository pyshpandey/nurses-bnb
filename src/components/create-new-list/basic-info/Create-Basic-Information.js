import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import FormikController from "../../formik/FormikController";
import {
  cannadaStates,
  countries,
  loadPropertyItems,
  usaStates,
} from "../../../constants/utils";
import { SmallHeader } from "../../common/header";
import { useNavigate, Link } from "react-router-dom";
import { basicInfo_initialValues } from "../../../constants/form-initial-values";
import { basicInfo_validationSchema } from "../../../constants/form-validation-schemas";
import RowCol from "../../common/Row-Col";
import { OWNER_PATHS } from "../../../config/Owner-And-NewList_Paths";

const CreateBasicInformation = ({
  propertyInfo,
  showingError,
  images,
  basicInfoApi,
}) => {
  const navigate = useNavigate();

  const onSubmit = (values) => {
    if (images.length) {
      values.file = images;
      basicInfoApi(values, navigate);
    } else showingError(true);
  };

  return (
    <Formik
      initialValues={basicInfo_initialValues}
      validationSchema={basicInfo_validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="mr-b-30">
            <RowCol>
              <FormikController
                control="input"
                type="text"
                name="basicInformation.property_title"
                label="Listing Title"
                className="form-control"
              />
            </RowCol>
          </div>
          <div className="mr-b-30">
            <Row>
              <Col md>
                <FormikController
                  control="select"
                  name="basicInformation.property_type"
                  className="form-control form-select"
                  options={loadPropertyItems(
                    propertyInfo?.loadPropertyInfo?.property_type
                  )}
                  label="Property Type"
                />
              </Col>
              <Col md>
                <FormikController
                  control="input"
                  type="text"
                  name="basicInformation.no_of_guest"
                  className="form-control "
                  label="Number of Guests"
                />
              </Col>
            </Row>
          </div>
          <div className="mr-b-30">
            <Row>
              <Col md>
                <FormikController
                  control="textArea"
                  type="textarea"
                  name="basicInformation.fulladdress.address1"
                  label="Address Lane 1"
                  className="form-control"
                />
              </Col>
              <Col md>
                <FormikController
                  control="textArea"
                  type="textarea"
                  name="basicInformation.fulladdress.address2"
                  label="Address Lane 2"
                  className="form-control"
                />
              </Col>
            </Row>
          </div>
          <div className="mr-b-30">
            <Row>
              <Col md>
                <FormikController
                  control="select"
                  type="text"
                  name="basicInformation.fulladdress.country"
                  className="form-control form-select"
                  label="Country"
                  options={countries}
                />
              </Col>
              <Col md>
                <FormikController
                  control="select"
                  type="text"
                  name="basicInformation.fulladdress.state"
                  className="form-control form-select"
                  label="State/Province"
                  options={
                    values?.basicInformation?.fulladdress?.country === "usa"
                      ? usaStates
                      : cannadaStates
                  }
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
                  name="basicInformation.fulladdress.city"
                  label="City"
                  className="form-control"
                />
              </Col>
              <Col md>
                <FormikController
                  control="input"
                  type="text"
                  name="basicInformation.fulladdress.postal_code"
                  label="Postal Code"
                  className="form-control"
                />
              </Col>
            </Row>
          </div>
          <div className="mr-b-30">
            <RowCol>
              <FormikController
                control="textArea"
                type="textarea"
                name="basicInformation.property_description"
                label="Listing Description"
                className="form-control"
              />
            </RowCol>
          </div>
          <div className="mr-b-20 switch-block">
            <Row>
              <SmallHeader
                h="Allow Instant Booking"
                p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              />
              <Col md="3" xs="3" className="flex-end">
                <FormikController
                  control="switchToggle"
                  name="basicInformation.instant_booking"
                />
              </Col>
            </Row>
          </div>
          <div className="mr-b-20 switch-block">
            <Row>
              <SmallHeader
                h="Safe/Suitable for children"
                p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              />
              <Col md="3" xs="3" className="flex-end">
                <FormikController
                  control="switchToggle"
                  name="basicInformation.safe_for_child"
                />
              </Col>
            </Row>
          </div>
          <div className="mr-b-50 switch-block">
            <Row>
              <SmallHeader
                h="Safe/Suitable for infants"
                p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
              />
              <Col md="3" xs="3" className="flex-end">
                <FormikController
                  control="switchToggle"
                  name="basicInformation.safe_for_infants"
                />
              </Col>
            </Row>
          </div>
          <div className="button-wrp">
            <Row>
              <Col>
                <Link to={OWNER_PATHS.REDIRECT}>
                  <Button variant="secondary">Cancel</Button>
                </Link>
                <Button type="submit" variant="primary">
                  Proceed
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateBasicInformation;
