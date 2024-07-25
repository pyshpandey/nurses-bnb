import { Row,Container,Col,Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {NotificationListIcon, RightArrow, CanadaFlagIcon, UsaFlagIcon} from '../../../assets/img/imagesh';


const ManageDoc = () => {
    return (
       <>
         
         <>
            <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col md={12}>
                                <h2> Manage Documents </h2>
                                <p> Here’s the list of your manage documents </p>
                            </Col>
                        </Row>
                    </div>
                   
                    <>
                        <div className='table-body notification'>
                            <Row>
                                <Col md={11}>
                                    <div className='table-col'>
                                        <div className='prop-img mr-r-20'>
                                            <img src={UsaFlagIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> USA </h4>
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
                                            <img src={CanadaFlagIcon} alt='List Icon' />
                                        </div>
                                        <div className='prop-detail'>
                                            <h4> Canada </h4>
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
export default ManageDoc;