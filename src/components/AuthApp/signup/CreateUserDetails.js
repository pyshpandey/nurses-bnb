import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";
import FormikController from "../../formik/FormikController";
import { userDetails_validationSchema } from "../../../constants/form-validation-schemas";
import { userDetails_initialValues } from "../../../constants/form-initial-values";
import { create_user_details } from "../../../actions/create-user-details";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ToastMessage from "../../common/ToastMessage";
import error_messages from "../../../constants/error-messages";
import { loadPropertyItems } from "../../../constants/utils";

const CreateUserDetails = ({ state, create_user_details, user_details }) => {
  const navigate = useNavigate();
  const onSubmit = (values) => {
    values.user.role = localStorage.getItem("role");
    create_user_details(values, navigate);
  };

  const error_check = useSelector((state) => state.message);
  const [isDisabled, setIsDisabled] = useState(true);
  const handleToggle = () => {
    setIsDisabled(!isDisabled);
  };
  // const { first_name, last_name, mobile } = response.user_details.user.user;
  return (
    <>
      {error_check?.error_code && (
        <ToastMessage
          error={error_messages[error_check.error_code]}
          bg={error_check.code}
          head={error_check.heading}
        />
      )}
      <Formik
        initialValues={userDetails_initialValues}
        validationSchema={userDetails_validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="input-2 mr-b-20">
            <div className="column-1">
              <FormikController
                control="input"
                type="text"
                name="user.first_name"
                label="First Name"
                className="form-control"
              />
            </div>
            <div className="column-1">
              <FormikController
                control="input"
                type="text"
                name="user.last_name"
                label="Last Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="mr-b-20">
            <FormikController
              control="input"
              type="text"
              name="user.mobile"
              label="Phone Number"
              className="form-control"
            />
          </div>
          <div className="check-box" onClick={handleToggle}>
            <FormikController
              control="singleCheckbox"
              type="checkbox"
              name="toc_accepted"
              options={[{ key: "", value: "toc" }]}
              className="white-block"
            />
            <label htmlFor="toc">
              {" "}
              By continuing, I agree to the{" "}
              <Link to=""> Terms & Conditions </Link> <br /> and{" "}
              <Link to=""> Privacy Policy</Link>{" "}
            </label>
          </div>
          <div className="button-2 mr-b-20">
            <Button variant="secondary" className="button">
              <Link to="/signup">
                {" "}
                Back{" "}
              </Link>{" "}
            </Button>
            <Button type="submit" variant="primary" className="button">
              {" "}
              Next{" "}
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export const mapStateToProps = ({ user_details }) => {
  return { user_details };
};

export default connect(mapStateToProps, {
  create_user_details,
})(CreateUserDetails);
