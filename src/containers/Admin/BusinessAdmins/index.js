import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination, Form, Modal } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import {ProfilePic } from '../../../assets/img/imagesh';
import { Link } from 'react-router-dom';

const BusinessAdmin = () =>{
    const [isActive, setActive] = useState(false);
    const [isActionActive, setActionActive] = useState(false);
    const [showPopRej, setRejectOpen] = useState(false);
    const handleCloseRej = () => setRejectOpen(false);
    const handleOpenRej = () => setRejectOpen(true);


    const handleToggle = () => {
        setActive(!isActive);
    };

    const handleActionToggle = () => {
        setActionActive(!isActionActive);
    };
  return(
    <>
         {/* Rating  Modale */}
         <Modal className="reject--list-pop w-450" show={showPopRej} onHide={handleCloseRej}>
          <div className="modal-box">
            <div className="header">
              <h3> Add business admin </h3>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="body">
                <div className='mr-b-25'>
                    <FloatingLabel controlId="floatingInputGrid" label="First Name">
                        <Form.Control type="text" placeholder="Enter value" />
                    </FloatingLabel>
                </div>
                <div className='mr-b-25'>
                    <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                        <Form.Control type="text" placeholder="Enter value" />
                    </FloatingLabel>
                </div>
                <div className='mr-b-50'>
                    <FloatingLabel controlId="floatingInputGrid" label="Email Address">
                        <Form.Control type="email" placeholder="Enter value" />
                    </FloatingLabel>
                </div>
              <div className="button-wrp">
                  <Button className="price-btn"> Cancel </Button>
                  <Button className="magnta-btn mr-l-15" onClick={handleCloseRej}> Add business admin </Button>
              </div>
            </div>
          </div>
        </Modal>
          <div className='dash-body'>
            <Container fluid>
                <div className='heading'>
                <Row>
                        <Col md={4}>
                            <h2> Business Admins </h2>
                            <p> Here’s the list of your business admins </p>
                        </Col>
                        <Col md={8}>
                            <div className='user-mang-filter'>
                                <div className='align-center'>
                                    <Form.Control className='search-list' type="text" name="title"  placeholder="Search user by name and phone number" />
                                </div>
                                <div className='align-right'>
                                    <Button className='view-list' type="submit" onClick={handleOpenRej}> Add New Business Admin </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-head'>
                        <Row>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> User Information  <img src={ShortIcon} alt='Shorting Icon' /> </span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='table-col'>
                                    <span> Email Address  <img src={ShortIcon} alt='Shorting Icon' /> </span>
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
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-detail'>
                                    <h4> Jose Simmons </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> jose.simmons@gmail.com </p>
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
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-detail'>
                                    <h4> Shawn Sherman </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> shawn.sherman@nursesbnb.com </p>
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
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-detail'>
                                    <h4> Linnie Foster </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> linnie.foster@nursesbnb.com </p>
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
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-detail'>
                                    <h4> Franklin Medina </h4>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <p> franklin.medina@nursesbnb.com </p>
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

export default BusinessAdmin;


