import React, { useState } from 'react';
import { Row,Container,Col,Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {GoBackIcon, UserThumb} from '../../../assets/img/imagesh';

const ListingRequestDetail = () =>{
    return(
      <>
          <>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col> 
                                <h2> <i className='go-back'> <Link to='/app/admin/listing/listing-requests'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i> Listing Request Detail </h2>
                            </Col>
                        </Row>
                    </div>
                    <div className='user-detail'> 
                        <Row className='w-100'>
                            <Col md={12}>
                                <div className='heading'>
                                    <h5 className='mr-b-30 mob-mr-b-30'> Renter Details </h5>
                                </div>
                            </Col>
                            <Col md={6}> 
                                <div className='user-info'>
                                    <div className='img'>
                                        <img src={UserThumb} alt='User Picture' />
                                    </div>
                                    <div className='info'>
                                        <h5>  Jose Simmons  </h5>
                                        <p>   989 852 3231  </p>
                                        <p> jose.simmons@gmail.com </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='address-detail'>
                                    <p> Address </p>
                                    <h5> 575 Ileho Drive, New York, USA </h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='user-detail'>
                        <div className='w-100'>
                            <Row>
                                <Col>
                                    <div className='heading'>
                                        <h5 className='mr-b-30 mob-mr-b-30'> Request Details </h5>
                                    </div>
                                </Col>
                            </Row>
                            <div className='des-block'>
                                <div className='mr-b-20'>
                                    <Row>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Going To </h5>
                                                <p> Atlanta </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Check-In Date </h5>
                                                <p> December 11, 2021 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Check-Out Date </h5>
                                                <p> January 10, 2022 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Number of Guests </h5>
                                                <p> 2 </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                               <div className='mr-b-20'>
                                <Row>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Bedrooms </h5>
                                                <p> 2 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Bathrooms </h5>
                                                <p> 2 </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Rental Period </h5>
                                                <p> 1-3 months </p>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-item'>
                                                <h5> Place of interest </h5>
                                                <p> Hospital, Nursing </p>
                                            </div>
                                        </Col>
                                    </Row>
                               </div>
                                <div className='des'>
                                    <Row>
                                        <Col>
                                            <div className='table-item'>
                                                <h5> Description </h5>
                                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris at tincidunt aliquet. Morbi magna purus, imperdiet id bibendum eget, sagittis vel mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce dignissim vehicula viverra. Cras aliquam tempus facilisis. Donec volutpat, felis nec ornare sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='button-2'>
                        <Button className='btn-danger signin-btn'>  Delete Request  </Button>
                        <Button className='magnta-btn signin-btn'>  Email Request   </Button> 
                    </div>
                </Container>
                 
            </div>
        </>
      </>
    )
  }
  export default ListingRequestDetail;
  

