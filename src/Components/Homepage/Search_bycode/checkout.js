import React from 'react';
import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
// import { ArrowLeft, Trash } from 'react-bootstrap-icons';
import { FaArrowLeft } from "react-icons/fa6";
import { CiTrash } from "react-icons/ci";
const Checkout = () => {
    return (
        <Container>
            <div className="mt-3">
                <h6 className="d-flex align-items-center">
                    <FaArrowLeft className="mr-2" /> Checkout page
                </h6>
            </div>
            <Row className="mt-3">
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Body>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Licence</th>
                                        <th>Package</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                                src="path-to-image"
                                                alt="Product"
                                                style={{ width: '50px', marginRight: '10px' }}
                                            />
                                            <span>Lorem ipsum dolor sit<br /><small>by Lorem</small></span>
                                        </td>
                                        <td>Promotional, Branded, Advert</td>
                                        <td>Standard<br />Web, Social Media & Internal<br />1 Edits</td>
                                        <td>₹1500 per Year</td>
                                        <td>
                                            <Button variant="link" className="text-danger">
                                                <CiTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                src="path-to-image"
                                                alt="Product"
                                                style={{ width: '50px', marginRight: '10px' }}
                                            />
                                            <span>Lorem ipsum dolor sit<br /><small>by Lorem</small></span>
                                        </td>
                                        <td>Promotional, Branded, Advert</td>
                                        <td>Standard<br />Web, Social Media & Internal<br />1 Edits</td>
                                        <td>₹1500 per Year</td>
                                        <td>
                                            <Button variant="link" className="text-danger">
                                                <CiTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button variant="warning" className="w-100">
                                Buy license
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card>
                        <Card.Body>
                            <h6>Summary</h6>
                            <p>Subtotal: ₹3000</p>
                            <p>Discount: <span className="text-success">-₹100</span></p>
                            <h6>Total: ₹3000</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default Checkout;