import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
// import DeleteIcon from "../../assets/img/delete-red-ic.svg";
// import AddIcon from "../../assets/img/add-ic.svg";
import Header, { SmallHeader } from "../../components/common/header";
import FormikController from "../../components/formik/FormikController";
import { Formik, Form, FieldArray } from "formik";
import { connect } from "react-redux";
import { propertyInfo_initialValues } from "../../constants/form-initial-values";
import { propertyInfo_validationSchema } from "../../constants/form-validation-schemas";
import {
  checkinTimes,
  constantTexts,
  loadPropertyItems,
  roomsTypes,
  stringToInteger,
} from "../../constants/utils";
import {
  create_property_info,
  load_property_info,
} from "../../actions/create-new-list";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/common/Loading";
import { loadPropertyInfo } from "../../actionTypes";
import { CREATE_NEW_LIST_PATHS } from "../../config/Owner-And-NewList_Paths";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import CreatePropertyInformation from "../../components/create-new-list/property-info/Create-Property-Information";
const PropertyInformation = ({
  property_info,
  create_property_info,
  load_property_info,
}) => {
  const navigate = useNavigate();
  let { property_id } = useParams();
  useEffect(() => {
    load_property_info();
  }, [load_property_info]);

  return (
    <>
      {property_info?.loading ? (
        <Loading />
      ) : (
        <div className="form-container">
          <Container fluid>
            <Header
              head={constantTexts.PROPERTY_INFO}
              body={constantTexts.SUB_HEAD}
            />

            <CreatePropertyInformation
              proeprtyItems={property_info}
              propertyInfoApi={create_property_info}
              propertyId={property_id}
            />
          </Container>
        </div>
      )}
    </>
  );
};

export const mapStateToProps = ({ property_info }) => {
  return { property_info };
};

export default connect(mapStateToProps, {
  load_property_info,
  create_property_info,
})(PropertyInformation);
