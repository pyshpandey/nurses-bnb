import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import {ProfilePic } from '../../../assets/img/imagesh';
import { Link } from 'react-router-dom';

const EvictionRequest = () =>{
    const [isActive, setActive] = useState(false);
    const [isActionActive, setActionActive] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleActionToggle = () => {
        setActionActive(!isActionActive);
    };
  return(
    <>
          <div className='dash-body'>
            <Container fluid>
                <div className='heading'>
                <Row>
                        <Col md={4}>
                            <h2> Eviction Requests </h2>
                            <p> Here’s the list of your Eviction Requests </p>
                        </Col>
                        <Col md={8}>
                            <div className='user-mang-filter'>
                                <div className='align-center'>
                                    <Form.Control className='search-list' type="text" name="title"  placeholder="Search eviction requests...." />
                                </div>
                                <div className='align-right'>
                                    <span className='filter-list'>
                                        <i onClick={handleToggle}> Filter by Status </i>
                                        <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                            <div  className={'filter-dropdown right' + ' ' + (isActive ? "active" : null)}>
                                            <ul>
                                                <li> 
                                                    <Form.Group controlId="OngoingCheckbox">
                                                        <Form.Check type="checkbox" label="Ongoing" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="CompletedCheckbox">
                                                        <Form.Check type="checkbox" label="Completed" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="CancelledCheckbox">
                                                        <Form.Check type="checkbox" label="Cancelled" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="RejectedCheckbox">
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
                        <Row>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> Listing Information   <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Homeowner Information <img src={ShortIcon} alt='Shorting Icon' />  </span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Renter Information  <img src={ShortIcon} alt='Shorting Icon' /> </span>
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
                    <Row>
                        <Col md={4}>
                            <Link to="/app/admin/eviction-request/detail">
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                    <p> 989 852 3231 </p>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Jeremy Mason </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <Link to="/app/admin/eviction-request/detail">
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                    <p> 989 852 3231 </p>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Jeremy Mason </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <Link to="/app/admin/eviction-request/detail">
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                    <p> 989 852 3231 </p>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Jeremy Mason </p>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Richard Griffith </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={4}>
                            <Link to="/app/admin/eviction-request/detail">
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                    <p> 989 852 3231 </p>
                                </div>
                            </div>
                            </Link>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> Jeremy Mason </p>
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
export default EvictionRequest;
