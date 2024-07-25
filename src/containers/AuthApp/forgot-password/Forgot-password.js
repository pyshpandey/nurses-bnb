import React from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import LogoImage from '../../../assets/img/footer-logo.svg';
import LoginSidebar from "../login/login-sidebar";

const ForgotPassword = () => {
  return (
    <>
          <div className='login-wrapper'>
              <div className='left-side'>
                  <div className='mobile-header'>
                      <img src={LogoImage} alt='Nurses bnb' />
                  </div>
                  <div className='form-wrp'>
                      <div className='headind-sec mr-b-40'>
                          <h2> Request password reset </h2>
                          <p> Please provide your email address or phone number and <br />  we’ll send reset password instructions.</p>
                      </div>
                      <div className='mr-b-50'>
                          <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                              <Form.Control type="text" placeholder="Enter value" />
                          </FloatingLabel>
                      </div>
                      <Link to='/otp' > <Button className='button mr-b-20'> Send OTP  </Button> </Link>
                      <div className='no-account'>
                          Back to <Link to="/login"> Sign In </Link>
                      </div>
                  </div>
              </div>
              <LoginSidebar />
          </div>
      </>
  );
};

export default ForgotPassword;
