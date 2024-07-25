import { Row,Container,Col,Button,FloatingLabel,Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GoBackIcon, ProfilePic, WatchIcon, SentMail, } from '../../../assets/img/imagesh';

const Detail = () => {
    return(
        <>
         <div className='dash-body'>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col>
                                <h2> <i className='go-back'> <Link to='/app/admin/messages'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i> <span> Messages  <p> Listing Details </p></span>  </h2>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body gray-bg'>
                        <Row>
                            <Col md={10}>
                                <div className='table-col flex-start'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='Profile Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd   </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus viverra, ut interdum tellus cursus. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right mx-h-80'>
                                    <p className=''> <img src={WatchIcon} /> 2:52 PM  </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body gray-bg'>
                        <Row>
                            <Col md={10}>
                                <div className='table-col flex-start'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='Profile Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Barret   </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus viverra, ut interdum tellus cursus. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right mx-h-80'>
                                    <p className=''> <img src={WatchIcon} /> 2:52 PM  </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body gray-bg'>
                        <Row>
                            <Col md={10}>
                                <div className='table-col flex-start'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='Profile Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd   </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus viverra, ut interdum tellus cursus. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right mx-h-80'>
                                    <p className=''> <img src={WatchIcon} /> 2:52 PM  </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body gray-bg mr-b-30'>
                        <Row>
                            <Col md={10}>
                                <div className='table-col flex-start'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='Profile Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd   </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit ligula quis ultrices mollis. Donec consequat turpis vestibulum metus iaculis, id fringilla nulla laoreet. Curabitur quis posuere libero. Proin eu faucibus ante, et interdum metus. Cras eros nunc, euismod vel semper at, tincidunt a nunc. Nunc blandit, massa vitae pretium commodo, est magna volutpat tortor, et euismod sem turpis vitae velit. Vestibulum non suscipit lacus. Sed mollis egestas mi id dapibus. </p>
                                        <p> Maecenas pulvinar consectetur elit, ac vehicula leo aliquam id. Pellentesque elementum, lacus eu hendrerit egestas, augue ipsum bibendum tortor, quis ultrices ipsum neque cursus nisl. Quisque dignissim eget nunc id mattis. Aliquam scelerisque ipsum non diam congue semper. Integer dignissim ut nisi quis vulputate. Fusce mollis, magna id eleifend scelerisque, nulla eros luctus nunc, quis maximus quam elit eu enim. Duis volutpat porta neque, rhoncus finibus ante. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right mx-h-80'>
                                    <p className=''> <img src={WatchIcon} /> 2:52 PM  </p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='send-sms'>
                        <FloatingLabel className='white-bg'  controlId="floatingTextarea2"  label="Send a message" >
                            <Form.Control as="textarea"  placeholder="Leave a comment here" style={{ height: "80px" }}  />
                        </FloatingLabel>
                        <Button className='send-mail'> <img src={SentMail} /> </Button>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Detail;