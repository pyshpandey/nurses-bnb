import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import LogoImage from "../../../assets/img/footer-logo.svg";
import ShowPassword from "../../../assets/img/show-password.svg";
import { useSelector, useDispatch } from "react-redux";
import { create_user_details } from "../../../actions/create-user-details";
import { Formik, Form } from "formik";
import FormikController from "../../../components/formik/FormikController";
import { otp_initialValues } from "../../../constants/form-initial-values";
import { otp_validationSchema } from "../../../constants/form-validation-schemas";
import { request_loader } from "../../../actions/loader";
import { check_otp } from "../../../actions/create-user-details";
import LoginSidebar from "../login/login-sidebar";

const Otp = () => {
  const data = useSelector((state) => state?.user_details);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  otp_initialValues.mobile = data?.user?.user?.mobile;

  return (
    <>
      <div className="login-wrapper">
        <div className="left-side">
          <div className="mobile-header">
            <img src={LogoImage} alt="Nurses bnb" />
          </div>
          <div className="form-wrp">
            <div className="headind-sec mr-b-30 mob-mr-b-30">
              <h2> Verify phone number </h2>
              <p>
                {" "}
                A verification OTP has been sent to your phone number. <br />{" "}
                Please enter 6-digit verification OTP below.{" "}
              </p>
            </div>
            <Formik
              initialValues={otp_initialValues}
              validationSchema={otp_validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const otp_data = {
                  code:
                    values.otp.one +
                    values.otp.two +
                    values.otp.three +
                    values.otp.four,
                  user_id: data?.user?.user?._id,
                  phone: values.mobile,
                };
                dispatch(request_loader({ load: true }));
                dispatch(check_otp({ request: otp_data, navigate: navigate }));
              }}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <div className="mr-b-40">
                    <div className="edit">
                      {/* <Form.Control value={mobile} type="text" placeholder="Phone Number" /> */}
                      <FormikController
                        control="input"
                        type="text"
                        name="mobile"
                        disabled
                        className="form-control"
                      />
                      <Link to="/signup-user-details"> Edit </Link>
                    </div>
                    <Button className="status-btn published"> Resend </Button>
                  </div>
                  <div className="map-input mr-b-50">
                    {/* <Form.Control className='input-gray-bg' type="text" placeholder=" " maxLength="1" />
                    <Form.Control className='input-gray-bg' type="text" placeholder=" " maxLength="1" />
                    <Form.Control className='input-gray-bg' type="text" placeholder=" " maxLength="1" />
                    <Form.Control className='input-gray-bg' type="text" placeholder=" " maxLength="1" /> */}
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.one"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.two"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.three"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.four"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.five"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                    <div className="column-1">
                      <FormikController
                        control="input"
                        type="text"
                        name="otp.six"
                        className="input-gray-bg"
                        maxLength="1"
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="button mr-b-20"
                  >
                    {" "}
                    Verify Now{" "}
                  </Button>
                </Form>
              )}
            </Formik>
            <div className="no-account">
              Back to <Link to="/login"> Sign In </Link>
            </div>
          </div>
        </div>
        <LoginSidebar />
      </div>
    </>
  );
};

export default Otp;
