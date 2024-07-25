import { Row,Container,Col,Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {NotificationListIcon, RightArrow} from '../../../assets/img/imagesh';
import NoNotification from './no-notification';

const NotificationList = () => {
    const [showPopRej, setRejectOpen] = useState(false);

    const handleCloseRej = () => setRejectOpen(false);
    const handleOpenRej = () => setRejectOpen(true);
    return (
       <>
         
         <>
            <Modal className="reject--list-pop" show={showPopRej} onHide={handleCloseRej}>
                <div className="modal-box">
                    <div className="header">
                    <h3 className='mr-b-20'> Clear notifications </h3>
                    <p className='mr-b-10'>  Are you sure you want to clear all the notifications from the Nursesbnb? </p>
                    </div>
                    <div className="body">
                    
                    <div className="button-wrp">
                        <Button className="price-btn"> Cancel </Button>
                        <Button className="btn-danger mr-l-15" onClick={handleCloseRej}>  Clear Notifications </Button>
                    </div>
                    </div>
                </div>
            </Modal>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col md={6}>
                                <h2> Notifications </h2>
                                <p> Here’s the list of your notifications </p>
                            </Col>
                            <Col md={6}>
                                <div className='align-right'> 
                                <Button className='view-list' type="submit" onClick={handleOpenRej}> Clear all Notifications </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* <NoNotification /> */}
                    <>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={NotificationListIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> New booking request! Shawn Sherman has created a new listing, please review it. </h4>
                                            <p> September 15, 2021 </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={1}>
                                    <div className='table-col'>
                                        <div className='arrow-img'>
                                            <img src={RightArrow} alt='Right Arrow Icon' />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </>

                </Container>
            </div>
         </>
       </>
    )
}
export default NotificationList;