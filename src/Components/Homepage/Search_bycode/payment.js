import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
// import PaymentSuccess from './paymentsuccess';

const Payment = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const successHandler = () => {
        navigate('/paymentsuccess');
    }

    return (
        <Container>
            <div className="mt-3">
                <h6 className="d-flex align-items-center">
                    <FaArrowLeft /> Payment options
                </h6>
            </div>
            <Row className="mt-3">
                <Col xs={12} md={7}>
                    <Card>
                        <Card.Body>
                            <h6>Credit | Debit | ATM Card</h6>
                            <p className="text-muted mb-3">
                                We accept <img src="path-to-rupay-logo" alt="RuPay" className="mx-2" />
                                <img src="path-to-mastercard-logo" alt="MasterCard" className="mx-2" />
                                <img src="path-to-visa-logo" alt="Visa" className="mx-2" />
                            </p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formNameOnCard">
                                    <Form.Label>Name on card</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" />
                                </Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formExpiry">
                                            <Form.Label>Expiry (Month/Year)</Form.Label>
                                            <Form.Control type="text" placeholder="MM/YY" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formCVV">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control type="text" placeholder="Enter CVV" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button variant="warning" className="w-100" onClick={() => setShow(true)}>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={5}>
                    <Card>
                        <Card.Body>
                            <h6>Order summary</h6>
                            <div className="d-flex align-items-center mt-3">
                                <p className="mb-0">Lorem ipsum dolor sit</p>
                                <Form.Control as="select" className="ml-2" defaultValue="1500">
                                    <option value="1500">₹1500 per Year</option>
                                    <option value="2500">₹2500 per Year</option>
                                </Form.Control>
                            </div>
                            <h6 className="mt-3">Total ₹1500</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <PaymentSuccess show={show} handleClose={() => setShow(false)} /> */}
        </Container>
    );
};

export default Payment;
