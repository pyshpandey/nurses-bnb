import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LogoImage from '../../../assets/img/footer-logo.svg';
import CheckIcon from '../../../assets/img/check-ic.svg';
import LoginSidebar from "../login/login-sidebar";

const SuccessMessage = () => {
  return (
      <>
        <div className='login-wrapper'>
            <div className='left-side'>
                <div className='mobile-header'>
                    <img src={LogoImage} alt='Nurses bnb' />
                </div>
                <div className='form-wrp text-center'>
                    <div className='check-icon'>
                        <img src={CheckIcon} alt="Check Icon" />
                    </div>
                    <div className='headind-sec mr-b-50'>
                        <h2> Verification email sent </h2>
                        <p> A verification link has been sent to your email account. Please click on the link to verify your email account.  </p>
                    </div>
                    <Link className="next-btn-wid" to="/app/admin/dashboard/"> <Button className='button mr-b-20'> Proceed to dashboard  </Button> </Link>
                </div>
            </div>
            <LoginSidebar />
        </div>
      </>
  );
};

export default SuccessMessage;
