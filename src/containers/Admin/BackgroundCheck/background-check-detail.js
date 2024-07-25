import { Row, Col, Container, Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoBackIcon } from '../../../assets/img/imagesh';


const BackgroundCheckDetail = () => {
    return (
        <>
            <div className='form-container dash-body for-admin'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col>
                                <h2> <i className='go-back'> <Link to='/app/admin/backgroun-check/'>  <img src={GoBackIcon} alt='Go Back Icon' /> </Link>  </i> Background Check Detail </h2>
                            </Col>
                            <Col>
                                <div className='align-right'>
                                    <Button className='status-btn featured'> Pending </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='lease-signor-block white-bg mr-b-30'>

                        <div className='add-pad mr-b-30 mob-mr-b-30'>
                            <div className="mr-b-30">
                                <Row>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Issue Country</h5>
                                            <p> United States </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> SSN or National ID </h5>
                                            <p> 896 899 856985 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Date of Birth </h5>
                                            <p> Nov 29, 1985 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Current DL Number </h5>
                                            <p> TXCSDF35646 </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mr-b-30">
                                <Row>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> DL Expiration Date</h5>
                                            <p> Nov 20, 2025 </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> State/Provinence/Country </h5>
                                            <p> California, USA </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Current Address </h5>
                                            <p> 127 Park Avenue, New York, US </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Crime Status </h5>
                                            <p className="red-color"> Felony </p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='button-2'>
                        <Button className='btn-danger signin-btn'>  Reject Request </Button>
                        <Button className='magnta-btn signin-btn'>  Approve Request   </Button>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default BackgroundCheckDetail;