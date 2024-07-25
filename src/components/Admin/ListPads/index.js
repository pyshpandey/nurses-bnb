import React, { useState } from 'react';
import { Row,Container,Col,Button,FloatingLabel,Pagination } from 'react-bootstrap';
import ShortIcon from '../../../assets/img/shorting-icon.svg';
import PropImg from '../../../assets/img/prop-img.png';
import DropIcon from '../../../assets/img/dropdown-icon.svg';
import RedCross from '../../../assets/img/red-cross.svg';
import CheckIcon from '../../../assets/img/colored-check.svg';
import Filter from './FormFilter';
import { Link } from 'react-router-dom';

const ListPads = () =>{
const [isActive, setActive] = useState(false);

const handleToggle = () => {
    setActive(!isActive);
};
  return(
    <>
    <div className='dash-body'>
        <Container fluid>
            <div className='heading'>
             <Filter/>
            </div>
            <div className='table-head'>
                    <Row>
                        <Col md={6}>
                            <div className='table-col'>
                                <span> Listing Information <img src={ShortIcon} alt='Shorting Icon' /> </span>
                            </div>
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
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <span> Actions  </span>
                            </div>
                        </Col>
                    </Row>
            </div>
            <div className='table-body'>
                    <Row>
                        <Col md={6}>
                            <Link to='/app/admin/listing/detail'>
                                <div className='table-col'>
                                    <div className='prop-img'>
                                        <img src={PropImg} alt='Property Image' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Large 1920s home W/Parking | 25 mins… </h4>
                                        <p> 11311 19th Ave SE, everett, 98208, US </p>
                                    </div>
                                </div>
                            </Link>
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
                        <Col md={2}>
                            <div className='table-col align-right'>
                                <div className='list-action'>
                                    <i onClick={handleToggle}> <img src={DropIcon} alt='' />  </i>
                                    <div onClick={handleToggle} className={'overlay' + ' ' + (isActive ? "active" : null)}> </div>
                                    <div  className={'filter-dropdown' + ' ' + (isActive ? "active" : null)}>
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
                    <Row>
                        <Col md={6}>
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
                        <Col md={2}>
                            <div className='table-col'>
                            <Button className='price-btn'> <b>$160 </b>/week </Button>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className='table-col'>
                                <Button className='status-btn published'> Published </Button>
                                <Button className='status-btn featured mr-l-15'> Featured </Button>
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

export default ListPads;
