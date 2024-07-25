import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import { Link } from 'react-router-dom';
import PropImg from '../../../assets/img/prop-img.png';

const Booking = () =>{
    const [isActive, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
  return(
    <>
          <div className='dash-body'>
            <Container fluid>
                <div className='heading'>
                <Row>
                        <Col md={4}>
                            <h2> Bookings </h2>
                            <p> Here’s the list of your bookings </p>
                        </Col>
                        <Col md={8}>
                            <div className='user-mang-filter'>
                                <div className='align-center'>
                                    <Form.Control className='search-list' type="text" name="title"  placeholder="Search user by name and phone number" />
                                </div>
                                <div className='align-right'>
                                    <span className='filter-list'>
                                        <i onClick={handleToggle}> Filter User </i>
                                        <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                            <div  className={'filter-dropdown right' + ' ' + (isActive ? "active" : null)}>
                                            <ul>
                                                <li> 
                                                    <Form.Group controlId="check1">
                                                        <Form.Check type="checkbox" label="Upcoming" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="check2">
                                                        <Form.Check type="checkbox" label="In-queue" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="check3">
                                                        <Form.Check type="checkbox" label="Ongoing" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="check4">
                                                        <Form.Check type="checkbox" label="Cancelled" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="check5">
                                                        <Form.Check type="checkbox" label="Rejected" />
                                                    </Form.Group> 
                                                </li>
                                            </ul>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-head'>
                        <Row className='gx-0'>
                            <Col md={4}>
                                <div className='table-col fisrt'>
                                    <span> Property Information   <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Check-In & Check-out Date   <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Renter Information <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Status <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <Link to="/app/admin/booking/detail">
                                <div className='table-col'>
                                    <div className='prop-img'>
                                        <img src={PropImg} alt='Profile Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Large 1920s home</h4>
                                        <p> 11311 19th Ave  </p>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Nov 25, 2021 to Dec 11, 2021 </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> On-Going </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home</h4>
                                    <p> 11311 19th Ave  </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Nov 25, 2021 to Dec 11, 2021 </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn published'> Completed </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home</h4>
                                    <p> 11311 19th Ave  </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Nov 25, 2021 to Dec 11, 2021 </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn featured'> Upcoming </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home</h4>
                                    <p> 11311 19th Ave  </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Nov 25, 2021 to Dec 11, 2021 </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn'> In-queue </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                 
                

                <div className='pagination-wrp'>
                    <Pagination>
                        <Pagination.Prev> Prev </Pagination.Prev>
                            <div className='item-count'>
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Item>{6}</Pagination.Item>
                            </div>
                        <Pagination.Next> Next </Pagination.Next>
                    </Pagination>
                </div>
            </Container>
        </div>
    </>
  )
}

export default Booking;