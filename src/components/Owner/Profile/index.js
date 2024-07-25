import React, { useState } from 'react';
import { Row, Container, Col, Button, Pagination, Form, FloatingLabel, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { UserThumb, BankIcon, DeleteIcon, PaymentIcon, UserThumbIcon, GreenCheckIcon, PenddingIcon, RightArrow, LockIcon, ShowPassword } from '../../../assets/img/imagesh';
import UserDetails from "./user-details";

const ProfilePage = () => {
    const [show, setShow] = useState(false);
    const AddBankClose = () => setShow(false);
    const AddBankShow = () => setShow(true);

    const [showPay, setPayShow] = useState(false);
    const AddPayClose = () => setPayShow(false);
    const AddPayShow = () => setPayShow(true);

    const [showDeletePay, setDeletePayShow] = useState(false);
    const DeletePayClose = () => setDeletePayShow(false);
    const DeletePayShow = () => setDeletePayShow(true);

    const [showPass, setShowPass] = useState(false);
    const PassClose = () => setShowPass(false);
    const PassShow = () => setShowPass(true);
    return (
        <>
            {/* Add Bank Account Detail  */}
            <Modal className="bank-accont-modal" show={show} onHide={AddBankClose}>
                <div className="modal-box">
                    <div className="header">
                        <h3> Bank account </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="body">
                        <div className="mr-b-30">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Company Name (Optional)"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Account Number"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="mr-b-30">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Routing Number"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Bank Name"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="mr-b-30">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Bank Account First Name"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Bank Account Last Name"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="button-wrp">
                            <Row>
                                <Col>
                                    <Button
                                        variant="secondary"
                                        className="sm-btn"
                                        onClick={AddBankClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="primary" className="sm-btn">
                                        Proceed
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Add Payment Method Dialog */}
            <Modal className="bank-accont-modal w-450" show={showPay} onHide={AddPayClose}>
                <div className="modal-box">
                    <div className="header">
                        <h3> Payment Method </h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="body">
                        <div className="mr-b-25">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Cardholder Name"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="mr-b-25">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Credit Card Number"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="mr-b-25">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Billing address (USA or Canada only)"
                                    >
                                        <Form.Control type="text" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="mr-b-40">
                            <Row>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="Expiry Date"
                                    >
                                        <Form.Control type="date" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel
                                        controlId="floatingInputGrid"
                                        label="CVV Code"
                                    >
                                        <Form.Control type="password" placeholder="Enter value" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                        </div>
                        <div className="button-wrp">
                            <Row>
                                <Col>
                                    <Button
                                        variant="secondary"
                                        className="sm-btn"
                                        onClick={AddPayClose}
                                    >
                                        Cancel
                                    </Button>
                                    <Button variant="primary" className="sm-btn">
                                        Add Payment Method
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Delete back Account Popup  */}
            <Modal className="reject--list-pop" show={showDeletePay} onHide={DeletePayClose}>
                <div className="modal-box">
                    <div className="header">
                        <h3 className='mr-b-20'> Delete bank account </h3>
                        <p className='mr-b-10'>  Are you sure you want to delete the <b> bank account </b> from the system? </p>
                    </div>
                    <div className="body">
                        <div className="button-wrp">
                            <Button className="price-btn"> Cancel </Button>
                            <Button className="btn-danger w-280 mr-l-15" onClick={DeletePayClose}> Delete Bank Account </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Change password Popup  */}
            <Modal className="reject--list-pop w-450" show={showPass} onHide={PassClose}>
                <div className="modal-box">
                    <div className="header">
                        <h3 className='mr-b-20'> Change password </h3>
                        <p className='mr-b-10'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                    </div>
                    <div className="body">
                        <div className='pos-rel mr-b-25'>
                            <FloatingLabel controlId="floatingInputGrid" label="New Password">
                                <Form.Control type="password" placeholder="Enter value" />
                            </FloatingLabel>
                            <img src={ShowPassword} alt='Show Password' />
                        </div>
                        <div className='pos-rel mr-b-40'>
                            <FloatingLabel controlId="floatingInputGrid" label="Confirm New Password">
                                <Form.Control type="password" placeholder="Enter value" />
                            </FloatingLabel>
                            <img src={ShowPassword} alt='Show Password' />
                        </div>
                        <div className="button-wrp">
                            <Button className="price-btn"> Cancel </Button>
                            <Button className="magnta-btn w-280 mr-l-15" onClick={PassClose}> Change Password </Button>
                        </div>
                    </div>
                </div>
            </Modal>
            <>
                <Container fluid>
                    <div className='heading'>
                        <Row>
                            <Col md="6" xs="12">
                                <h2>  Profile </h2>
                                <p> Here’s the detail of your profile </p>
                            </Col>
                            <Col md="6" xs="12">
                                <div className='align-right'>
                                    <Button className='status-btn featured'> Homeowner </Button>
                                    <Button className='status-btn mr-l-15'> Switch to renter </Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <UserDetails/>
                    <div className='lease-signor-block white-bg mr-b-30'>
                        <div className='heading mr-b-0'>
                            <Row className='w-100 gx-0'>
                                <Col md="6" xs="12">
                                    <div className='d-flex'>
                                        <div className='user-thumb'>
                                            <img src={BankIcon} alt='Bank Icon' />
                                        </div>
                                        <div className='title'>
                                            <h4> Bank account </h4>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className='align-right'>
                                        <Button className='status-btn published' onClick={AddBankShow}> Add New Bank </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='bank-table add-pad mr-b-30 mob-mr-b-30'>
                            <div >
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> S. No. </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Company Name </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> First Name </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Last Name </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Account Number </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Routing Number </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Bank Name </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Action </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 1 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Chevron Industries LLC </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Eddie </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> McGuire</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********8992 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********0000 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Bank of America </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn' onClick={DeletePayShow}> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 2 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Chevron Industries LLC </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Garrett </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Gonzalez </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********8992 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********0000 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> City Bank </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 3 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Chevron Industries LLC </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Peter </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Sims </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********8992 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********0000 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> City Bank </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 4 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Chevron Industries LLC </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Glenn </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Coleman </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********8992 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********0000 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Bank of Canada </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 5 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Chevron Industries LLC </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Anthony </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Rogers </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********8992 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> **********0000 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Bank of Canada </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='pagination-wrp align-right'>
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
                        </div>
                    </div>
                    <div className='lease-signor-block white-bg mr-b-30'>
                        <div className='heading mr-b-0'>
                            <Row className='w-100 gx-0'>
                                <Col md="6" xs="12">
                                    <div className='d-flex'>
                                        <div className='user-thumb'>
                                            <img src={PaymentIcon} alt='Payment Icon' />
                                        </div>
                                        <div className='title'>
                                            <h4> Saved payment methods </h4>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col md="6" xs="12">
                                    <div className='align-right'>
                                        <Button className='status-btn published' onClick={AddPayShow}>Add New Payment Method </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='bank-table add-pad mr-b-30 mob-mr-b-30'>
                            <div >
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> S. No. </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Card Number </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Cardholder Name</h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Expired On </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Status </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Action </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 1 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 54 ● ●   ● ● ● ●   ● ● ● ● 69 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Mason Berry </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Nov, 2025 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Default </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 2 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 54 ● ●   ● ● ● ●   ● ● ● ● 69 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Mason Berry </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Nov, 2025 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p className='status make-default'> Make Default </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 3 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> 54 ● ●   ● ● ● ●   ● ● ● ● 69 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Mason Berry </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p> Nov, 2025 </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <p className='status make-default'> Make Default </p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <Button className='delete-btn'> <img src={DeleteIcon} alt='Delete Icon' /> </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                    <div className='lease-signor-block white-bg mr-b-30'>
                        <div className='heading mr-b-0'>
                            <Row className='w-100 gx-0'>
                                <Col>
                                    <div className='d-flex'>
                                        <div className='user-thumb'>
                                            <img src={UserThumbIcon} alt='User Icon' />
                                        </div>
                                        <div className='title'>
                                            <h4> Lease Signor </h4>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='add-pad mr-b-30 mob-mr-b-30'>
                            <div >
                                <Row className='gx-0'>
                                    <Col md={1}>
                                        <div className='table-item'>
                                            <h5> S. No. </h5>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <h5> Full Name </h5>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <h5> Email Address </h5>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <h5> Mobile Number </h5>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <h5> Status </h5>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='table-item'>
                                            <h5> Action </h5>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col md={1}>
                                        <div className='table-item'>
                                            <p> 1 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> Chevron Anderson </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <p> chevron.anderson@gmail.com </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> 989 669 6699 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p className='status verified'> <img src={GreenCheckIcon} alt='Check Icon' /> Verified </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>

                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col md={1}>
                                        <div className='table-item'>
                                            <p> 2 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> Michael Jennings </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <p> michael.jennings@gmail.com </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> 989 669 6699 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p className='status pendding'> <img src={PenddingIcon} alt='Check Icon' /> Pendding  </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <Button className='status-btn published'> Send Invite Again </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='border-btm pad-22-tb'>
                                <Row className='gx-0'>
                                    <Col md={1}>
                                        <div className='table-item'>
                                            <p> 3 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> Michael Jennings </p>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className='table-item'>
                                            <p> michael.jennings@gmail.com </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p> 989 669 6699 </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <p className='status pendding'> <img src={PenddingIcon} alt='Check Icon' /> Pendding  </p>
                                        </div>
                                    </Col>
                                    <Col md={2}>
                                        <div className='table-item'>
                                            <Button className='status-btn published'> Send Invite Again </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    </div>
                    <div className='table-body notification' onClick={PassShow}>
                        <Row>
                            <Col md="11" xs="10">
                                <div className='table-col'>
                                    <div className='prop-img mr-r-20'>
                                        <img src={LockIcon} alt='Lock Icon' />
                                    </div>
                                    <div className='prop-detail'>
                                        <h4> Change password </h4>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="1" xs="2">
                                <div className='table-col'>
                                    <div className='arrow-img'>
                                        <img src={RightArrow} alt='Right Arrow Icon' />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        </>
    )
}

export default ProfilePage;
