import { Row, Container, Col, Button, Form, Tabs, Tab, Modal, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { ProfilePic, RightArrow, NotificationListIcon } from '../../../assets/img/imagesh';



const NotificationList = () => {
    const [showPopRej, setRejectOpen] = useState(false);
    const handleCloseRej = () => setRejectOpen(false);
    const handleOpenRej = () => setRejectOpen(true);
    return (
        <>
            <>
            {/* Rating  Modale */}
            <Modal className="reject--list-pop gray-bg w-450" show={showPopRej} onHide={handleCloseRej}>
            <div className="modal-box">
                <div className="header">
                <h3> Select user </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="body">
                    <div className='mr-b-40'>
                        <FloatingLabel className='gray-bg' controlId="floatingSelectGrid" label="Subject">
                            <Form.Select aria-label="Floating label select example">
                            <option value="1"> Apartment </option>
                            <option value="2"> Residential </option>
                            <option value="3"> Commercial </option>
                            </Form.Select>
                        </FloatingLabel>
                    </div>
                    <div className='gray-input mr-b-30'>
                        <Form.Control className='gray-bg' type="text" placeholder="Enter email" />
                    </div>

                    <div className='table-body notification white-bg'>
                        <Row>
                            <Col md={9}>
                                <div className='table-col'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='List Icon' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd </h4>
                                        <p> Renter </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <div className='arrow-img'>
                                        <img src={RightArrow} alt='Right Arrow Icon' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body notification white-bg'>
                        <Row>
                            <Col md={9}>
                                <div className='table-col'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='List Icon' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd </h4>
                                        <p> Renter </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <div className='arrow-img'>
                                        <img src={RightArrow} alt='Right Arrow Icon' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='table-body notification white-bg'>
                        <Row>
                            <Col md={9}>
                                <div className='table-col'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={ProfilePic} alt='List Icon' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Lloyd </h4>
                                        <p> Renter </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <div className='arrow-img'>
                                        <img src={RightArrow} alt='Right Arrow Icon' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                <div className="button-wrp">
                    <Button className="price-btn w-100"> Cancel </Button>
                </div>
                </div>
            </div>
            </Modal>

                <div className='dash-body'>
                    <Container fluid>
                        <div className='heading'>
                            <Row>
                                <Col md={4}>
                                    <h2> Messages </h2>
                                    <p> Here’s the list of your notifications </p>
                                </Col>
                                <Col md={8}>
                                    <div className='user-mang-filter'>
                                        <div className='align-center'>
                                            <Form.Control className='search-list' type="text" name="title"  placeholder="Search by name…" />
                                        </div>
                                        <div className='align-right'>
                                            <Button className='view-list' type="submit" onClick={handleOpenRej}> New Message </Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    <div className='message-tabs'>
                        <Tabs defaultActiveKey="ReviewProcess" className='active'>
                            <Tab eventKey="ReviewProcess" title="Review Process Messaging">
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <Link to="/app/admin/messages/detail">
                                                <div className='table-col'>
                                                    <div className='prop-img mr-r-20'>
                                                        <img src={ProfilePic} alt='Profile Image' />
                                                    </div>
                                                    <div className='prop-detail'>
                                                        <h4> Lloyd <i> Listing Details </i> </h4>
                                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                            <Tab eventKey="GeneralMessaging" title="General Messaging">
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div className='table-body'>
                                    <Row>
                                        <Col md={9}>
                                            <div className='table-col'>
                                                <div className='prop-img mr-r-20'>
                                                    <img src={ProfilePic} alt='Profile Image' />
                                                </div>
                                                <div className='prop-detail'>
                                                    <h4> Lloyd <i> Listing Details </i> </h4>
                                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales leo nec risus. </p>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={3}>
                                            <div className='table-col align-right'>
                                            <Button className='status-btn active'> Homeowner </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </>
        </>
    )
}
export default NotificationList;