import React, { useState } from 'react';
import { Row, Container, Col, Button, Form } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import PropImg from '../../../assets/img/prop-img.png';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import CheckIcon from '../../../assets/img/colored-check.svg';
import { Link } from 'react-router-dom';

const OwnerListing = () => {
    const [isActive, setActive] = useState(false);
    const [isActiveList, showList] = useState(false);

    const handleToggle = () => {
        setActive(!isActive);
    };
    const showListToggle = () => {
        showList(!isActiveList);
    };
    return (
        <>
            <Container fluid>
                <div className='heading'>
                    <Row>
                        <Col md={3}>
                            <h2> Listings </h2>
                            <p> Here’s the list of your listings </p>
                        </Col>

                        <Col md={4}>
                            <div className='align-center'>
                                <Form.Control className='search-list' type="text" name="title" placeholder="Search listings…" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div className='align-right'>
                                <span className='filter-list'>
                                    <i onClick={showListToggle}> Filter listings </i>
                                    <div onClick={showListToggle} className={'overlay' + ' ' + (isActiveList ? "active" : null)}> </div>
                                    <div className={'filter-dropdown' + ' ' + (isActiveList ? "active" : null)}>
                                        <ul>
                                            <li>
                                                <Form.Group controlId="publishedCheckbox">
                                                    <Form.Check type="checkbox" label="Published" />
                                                </Form.Group>
                                            </li>
                                            <li>
                                                <Form.Group controlId="pendingCheckbox">
                                                    <Form.Check type="checkbox" label="Pending" />
                                                </Form.Group>
                                            </li>
                                            <li>
                                                <Form.Group controlId="rejectedCheckbox">
                                                    <Form.Check type="checkbox" label="Rejected" />
                                                </Form.Group>
                                            </li>
                                            <li>
                                                <Form.Group controlId="featuredCheckbox">
                                                    <Form.Check type="checkbox" label="Featured" />
                                                </Form.Group>
                                            </li>
                                        </ul>
                                    </div>
                                </span>

                                <Link to="/app/create-new-list"> <Button className='view-list' type="submit"> Create new listing </Button> </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-head'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <span> Listing Information <img src={ShortIcon} alt='Shorting Icon' /> </span>
                            </div>
                        </Col>
                        <Col md={3}>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <span> Price <img src={ShortIcon} alt='Shorting Icon' /> </span>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <span> Status <img src={ShortIcon} alt='Shorting Icon' /> </span>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className='table-col align-right'>
                                <span> Actions  </span>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Property Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home W/Parking | 25 mins… </h4>
                                    <p> 11311 19th Ave SE, everett, 98208, US </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <ul className='room-detail'>
                                    <li> 1+ Beds </li>
                                    <li> 1+ Beds </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <Button className='price-btn'> <b>$160 </b>/week </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <Button className='status-btn'> Pending </Button>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i onClick={handleToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                    <div className={'filter-dropdown' + ' ' + (isActive ? "active" : null)}>
                                        <ul>
                                            <li>
                                                <img src={CheckIcon} /> Approve Request
                                            </li>
                                            <li className='red-color'>
                                                <img src={RedCross} /> Reject Request
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className='table-body'>
                    <Row className='gx-0'>
                        <Col md={4}>
                            <div className='table-col'>
                                <div className='prop-img'>
                                    <img src={PropImg} alt='Property Image' />
                                </div>
                                <div className='prop-detail'>
                                    <h4> Large 1920s home W/Parking | 25 mins… </h4>
                                    <p> 11311 19th Ave SE, everett, 98208, US </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='table-col'>
                                <ul className='room-detail'>
                                    <li> 1+ Beds </li>
                                    <li> 1+ Beds </li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <Button className='price-btn'> <b>$160 </b>/week </Button>
                            </div>
                        </Col>
                        <Col md={2}>
                            <div className='table-col'>
                                <Button className='status-btn published'>  Published  </Button>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className='table-col align-right'>
                                <div className='list-action'> <img src={DropIcon} alt='' />  </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default OwnerListing;