import LoginSidebar from "../login/login-sidebar";
import LogoImage from '../../../assets/img/footer-logo.svg';
import { Link } from "react-router-dom";
import {FloatingLabel, Form, Button, Row, Col} from 'react-bootstrap';
import PropImg from '../../../assets/img/prop-img.png';

const VerifyLeaseSignor = () => {
  return (
    <>
    <div className='login-wrapper'>
        <div className='left-side'>
            <div className='mobile-header'>
                <img src={LogoImage} alt='Nurses bnb' />
            </div>
            <div className='form-wrp'>
                <div className='headind-sec mr-b-30 mob-mr-b-30'>
                    <h2> Verify Lease Signor Details </h2>
                    <p> <strong> Micheal clarke </strong> has been added you as a lease signor for the below property. Please verify your email and phone number to complete the process.  </p>
                </div>
                <div className='table-body gray-bg mr-b-30'>
                    <Row>
                        <Col>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Property Thumbnail' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home W/Parking | 25 mins… </h4>
                                    <p> 11311 19th Ave SE, everett, 98208, US </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
            </div>
                <div className='input-2 mr-b-20'>
                  <div className="column-1">
                    <FloatingLabel controlId="floatingInputGrid" label="First Name">
                        <Form.Control type="text" placeholder="Enter value" />
                    </FloatingLabel>
                  </div>
                  <div className="column-1">
                    <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                        <Form.Control type="text" placeholder="Enter value" />
                    </FloatingLabel>
                  </div>
                </div>
                <div className='mr-b-20'>
                    <FloatingLabel controlId="floatingInputGrid" label="Email Address">
                        <Form.Control type="email" placeholder="Enter value" />
                    </FloatingLabel>
                </div>
                <div className='mr-b-20'>
                    <FloatingLabel controlId="floatingInputGrid" label="Phone Number">
                        <Form.Control type="text" placeholder="Enter value" />
                    </FloatingLabel>
                </div>
                <div className='check-box'>
                    <Form.Group controlId="termsCondition">
                        <Form.Check.Input className='pos-rel' type='checkbox' />
                        <Form.Check.Label> By continuing, I agree to the <a> Terms & Conditions </a> <br /> and <a> Privacy Policy</a> </Form.Check.Label>
                    </Form.Group>
                </div>
                <div className='button-2 mr-b-20'>
                        <Button className='magnta-btn signin-btn'>  Proceed to verify phone   </Button> 
                </div>
            </div>
        </div>
        <LoginSidebar />
    </div>
    </>
  )
}

export default VerifyLeaseSignor;
