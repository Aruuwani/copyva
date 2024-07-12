// import React from 'react';
// import { Container, Row, Col, Card, Table, Button } from 'react-bootstrap';
// // import { ArrowLeft, Trash } from 'react-bootstrap-icons';
// import { FaArrowLeft } from "react-icons/fa6";
// import { CiTrash } from "react-icons/ci";
// const Checkout = () => {
//     return (
//         <Container>
//             <div className="mt-3">
//                 <h6 className="d-flex align-items-center">
//                     <FaArrowLeft className="mr-2" /> Checkout page
//                 </h6>
//             </div>
//             <Row className="mt-3">
//                 <Col xs={12} md={8}>
//                     <Card>
//                         <Card.Body>
//                             <Table responsive>
//                                 <thead>
//                                     <tr>
//                                         <th>Title</th>
//                                         <th>Licence</th>
//                                         <th>Package</th>
//                                         <th>Price</th>
//                                         <th></th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>
//                                             <img
//                                                 src="path-to-image"
//                                                 alt="Product"
//                                                 style={{ width: '50px', marginRight: '10px' }}
//                                             />
//                                             <span>Lorem ipsum dolor sit<br /><small>by Lorem</small></span>
//                                         </td>
//                                         <td>Promotional, Branded, Advert</td>
//                                         <td>Standard<br />Web, Social Media & Internal<br />1 Edits</td>
//                                         <td>₹1500 per Year</td>
//                                         <td>
//                                             <Button variant="link" className="text-danger">
//                                                 <CiTrash />
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                     <tr>
//                                         <td>
//                                             <img
//                                                 src="path-to-image"
//                                                 alt="Product"
//                                                 style={{ width: '50px', marginRight: '10px' }}
//                                             />
//                                             <span>Lorem ipsum dolor sit<br /><small>by Lorem</small></span>
//                                         </td>
//                                         <td>Promotional, Branded, Advert</td>
//                                         <td>Standard<br />Web, Social Media & Internal<br />1 Edits</td>
//                                         <td>₹1500 per Year</td>
//                                         <td>
//                                             <Button variant="link" className="text-danger">
//                                                 <CiTrash />
//                                             </Button>
//                                         </td>
//                                     </tr>
//                                 </tbody>
//                             </Table>
//                             <Button variant="warning" className="w-100">
//                                 Buy license
//                             </Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col xs={12} md={4}>
//                     <Card>
//                         <Card.Body>
//                             <h6>Summary</h6>
//                             <p>Subtotal: ₹3000</p>
//                             <p>Discount: <span className="text-success">-₹100</span></p>
//                             <h6>Total: ₹3000</h6>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };
// export default Checkout;


import React, { } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

import { MdDeleteOutline } from "react-icons/md";
import Frame from "../../../../src/assets/Frame 22.png";
const Payment = () => {

    const musicItems = [
        {
            title: "Lorem ipsum dolor sit",
            licence: "permotional",
            package: "standard",
            price: "₹1500 per Year",


        },
        {
            title: "Lorem ipsum dolor sit",
            licence: "permotional",
            package: "standard",
            price: "₹1500 per Year",

        }
        // Add more items as needed
    ];

    return (
        <Container className='Payment_option' style={{ border: "none" }}>
            <div className="mt-3">
                <h2 className="d-flex align-items-center">
                    <MdOutlineKeyboardArrowLeft style={{ width: "20" }} />
                    Checkout page
                </h2>
            </div>
            <Row className="mt-3">
                <Col xs={12} md={7} style={{
                    padding: "30px",
                    background: "white",
                    border: "1px solid var(--Color-Black-10, #DFDFDF)",
                }}>
                    <table className="purchase_table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Licence</th>
                                <th>Package</th>
                                <th>Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {musicItems.map((purchase, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="music-item">
                                            <img
                                                src={Frame}
                                                alt="video"
                                                className="music-image"

                                            />

                                            <div>
                                                <p className="music-title">{purchase.title}</p>
                                                <p className="music-artist">by Lorem</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{purchase.licence}</td>
                                    <td>{purchase.package}</td>
                                    <td>{purchase.price}</td>

                                    <td><MdDeleteOutline style={{
                                        color: "red",
                                        fontSize: "25px",
                                        background: "#f0d9d9",
                                        borderRadius: "18px",
                                        padding: "5px",
                                    }} /></td>
                                </tr>
                            ))}
                        </tbody>
                        <div>


                            <Button variant="warning" className="w-50 btn_one" style={{ alignItems: "center" }} type="button" onClick={() => { window.location.href = "/payment"; }}>
                                Buy license
                            </Button>
                        </div>
                    </table>
                </Col>
                <Col xs={12} md={5}>
                    <Card>
                        <Card.Body>
                            <h6> summary</h6>
                            <div className="d-flex align-items-center mt-3 select_yearly " style={{ borderBottom: "none" }}>
                                <span className="mb-0 d-flex gap-2"> Subtotal</span>
                                <span className="mt-1 "> ₹3500</span>

                            </div>
                            <div className="d-flex align-items-center mt-3 select_yearly ">
                                <span className="mb-0 d-flex gap-2" style={{ color: "#52C41D" }}> Subtotal</span>
                                <span className="mt-1 " style={{ color: "#52C41D" }}> ₹3500</span>

                            </div>
                            <h6 className="mt-3 total_amount">Total ₹300</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};

export default Payment;


