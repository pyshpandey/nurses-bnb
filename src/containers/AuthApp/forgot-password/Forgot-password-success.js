import React from "react";
import Button from 'react-bootstrap/Button';
import LogoImage from '../../../assets/img/footer-logo.svg';
import CheckIcon from '../../../assets/img/check-ic.svg';
import LoginSidebar from "../login/login-sidebar";

const ForgotPasswordSuccess = () => {
  return (
      <>
        <div className='login-wrapper'>
            <div className='left-side'>
                <div className='mobile-header'>
                    <img src={LogoImage} alt='Nurses bnb' />
                </div>
                <div className='form-wrp text-center'>
                    <div className='check-icon'>
                        <img src={CheckIcon} alt="Check icon" />
                    </div>
                    <div className='headind-sec mr-b-50'>
                        <h2> Password changed! </h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.   </p>
                    </div>
                    <Button className='button mr-b-20'> Proceed to dashboard  </Button>
                </div>
            </div>
            <LoginSidebar />
        </div>
      </>
  );
};

export default ForgotPasswordSuccess;
