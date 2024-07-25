import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import LogoImage from '../../../assets/img/footer-logo.svg';
import GoogleIcon from '../../../assets/img/google-icon.svg';
import FacebookIcon from '../../../assets/img/facebook-icon.svg';
import LinkedinIcon from '../../../assets/img/linkedin-icon.svg';
import CreateUserDetails from '../../../components/AuthApp/signup/CreateUserDetails';
import LoginSidebar from "../login/login-sidebar";


const UserDetails = () => {
  return (
    <>
    <div className='login-wrapper'>
        <div className='left-side'>
            <div className='mobile-header'>
                <img src={LogoImage} alt='Nurses bnb' />
            </div>
            <div className='form-wrp'>
                <div className='headind-sec mr-b-30 mob-mr-b-30'>
                    <h2> Homeowner details </h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed sem nisl, fermentum ut nunc non, blandit volutpat mi.   </p>
                </div>
                <div className='choose-item continue-with-us mr-b-15'>
                    <div className='img'>
                        <img src={GoogleIcon} alt="Google Icon" />
                    </div>
                    <div className='txt'>
                        <h5> Continue with Google </h5>
                    </div>
                </div>
                <div className='choose-item continue-with-us mr-b-15'>
                    <div className='img'>
                        <img src={FacebookIcon} alt="Facebook Icon" />
                    </div>
                    <div className='txt'>
                        <h5> Continue with Facebook </h5>
                    </div>
                </div>
                <div className='choose-item continue-with-us mr-b-50'>
                    <div className='img'>
                        <img src={LinkedinIcon} alt="Linkedin Icon" />
                    </div>
                    <div className='txt'>
                        <h5> Continue with LinkedIn </h5>
                    </div>
                </div>
                <CreateUserDetails />
                <div className="no-account">
                     Already have an account? <Link to="/login"> Sign In </Link>
                </div>
            </div>
        </div>
        <LoginSidebar />
    </div>
</>
  );
};

export default UserDetails;
