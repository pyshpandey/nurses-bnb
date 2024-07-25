import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import {ProfilePic, GoBackIcon, DeleteIcon, MailRequestIcon } from '../../../assets/img/imagesh';
import { Link } from 'react-router-dom';

const ListingRequest = () =>{
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
                        <Col> 
                            <h2> <i className='go-back'> <Link to='/app/admin/dashboard'>  <img src={GoBackIcon}  alt='Go Back Icon' /> </Link>  </i>Listing Requests </h2>
                        </Col>
                        <Col>
                            <div className='user-mang-filter'>
                                <div className='align-center mr-r-0'>
                                    <Form.Control className='search-list' type="text" name="title"  placeholder="Search listings…" />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-head'>
                        <Row>
                            <Col md={3}>
                                <div className='table-col'>
                                    <span> Renter Information  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={2}>
                                <div className='table-col'>
                                    <span> Date  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className='table-col'>
                                    <span> Description  </span>
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
                            <Link to="/app/admin/listing/listing-requests/detail">
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
                        <Col md={2}>
                            <div className='table-col'>
                                <p> Nov 22, 2021 </p>
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className='table-col'>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing… </p>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i onClick={handleToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                    <div  className={'filter-dropdown' + ' ' + (isActive ? "active" : null)}>
                                        <ul>
                                            <li>
                                                <img src={MailRequestIcon} alt='Delete Icon' />  Email Request
                                            </li>
                                            <li className='red-color'>
                                                <img src={DeleteIcon} alt='Delete Icon' /> Delete Request
                                            </li>
                                        </ul>
                                    </div>
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
export default ListingRequest;
