import React from "react";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import LogoImage from '../../../assets/img/footer-logo.svg';
import ShowPassword from '../../../assets/img/show-password.svg';
import LoginSidebar from "../login/login-sidebar";
import { Link } from "react-router-dom";

const CreateNewPassword = () => {
  return (
        <>
          <div className='login-wrapper'>
              <div className='left-side'>
                  <div className='mobile-header'>
                      <img src={LogoImage} alt='Nurses bnb' />
                  </div>
                  <div className='form-wrp'>
                      <div className='headind-sec mr-b-40'>
                          <h2> Create new password </h2>
                          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed sem nisl, fermentum ut nunc non, blandit volutpat mi. </p>
                      </div>
                      <div className='pos-rel mr-b-20'>
                          <FloatingLabel controlId="floatingInputGrid" label="New Password">
                              <Form.Control type="password" placeholder="Enter value" />
                          </FloatingLabel>
                          <img src={ShowPassword} alt='Show Password' />
                      </div>
                      <div className='pos-rel mr-b-50'>
                          <FloatingLabel controlId="floatingInputGrid" label="Confirm New Password">
                              <Form.Control type="password" placeholder="Enter value" />
                          </FloatingLabel>
                          <img src={ShowPassword} alt='Show Password' />
                      </div>
                      <Button className='button mr-b-20'> Set Password  </Button>
                      <div className='no-account'>
                          Back to  <Link to="/login"> Sign In </Link>
                      </div>
                  </div>
              </div>
              <LoginSidebar />
          </div>
      </>
  );
};

export default CreateNewPassword;
