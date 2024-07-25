 import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import {ProfilePic } from '../../../assets/img/imagesh';
import { Link } from 'react-router-dom';

const UserManagement = () =>{
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
                            <h2> User Management </h2>
                            <p> Here’s the list of your User </p>
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
                                                    <Form.Group controlId="renterCheckbox">
                                                        <Form.Check type="checkbox" label="Renter" />
                                                    </Form.Group> 
                                                </li>
                                                <li> 
                                                    <Form.Group controlId="homeownerCheckbox">
                                                        <Form.Check type="checkbox" label="Homeowner" />
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
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> User Information  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Email Address  </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Role  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Status <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col align-right'>
                                    <span> Actions  </span>
                                </div>
                            </Col>
                        </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <Link to="/app/admin/user-management/detail">
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
                                <p> jose.simmons@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role'> Renter </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i onClick={handleActionToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleActionToggle} className={'overlay' + ' ' + (isActionActive ? "active" : null)}> </div>
                                    <div  className={'filter-dropdown' + ' ' + (isActionActive ? "active" : null)}>
                                        <ul>
                                            <li className='red-color'>
                                                <img src={RedCross} /> Mark as Inactive
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Shawn Sherman </h4>
                                    <p> 201 20122 365 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> shawn.sherman@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role homeowner'> Homeowner </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Linnie Foster </h4>
                                    <p> 9025 654 3258 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> linnie.foster@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role both'> Both </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Shawn Sherman </h4>
                                    <p> 201 20122 365 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> shawn.sherman@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role homeowner'> Homeowner </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Linnie Foster </h4>
                                    <p> 9025 654 3258 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> linnie.foster@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role both'> Both </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Shawn Sherman </h4>
                                    <p> 201 20122 365 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> shawn.sherman@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role homeowner'> Homeowner </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row>
                        <Col md={3}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={ProfilePic} alt='Profile Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Linnie Foster </h4>
                                    <p> 9025 654 3258 </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <p> linnie.foster@gmail.com </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <p className='role both'> Both </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='status-btn active'> Active </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i> <img src={DropIcon} alt='' />  </i>
                                </div>
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
export default UserManagement;
