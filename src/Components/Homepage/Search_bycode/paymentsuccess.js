import React from 'react';
import { Modal, Button, Form, InputGroup } from 'react-bootstrap';
import { CheckCircle } from 'react-bootstrap-icons';

const PaymentSuccess = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <CheckCircle color="green" size={50} />
                <h4>Payment successful</h4>
                <p>
                    Congratulations! Enjoy the creative freedom while avoiding the copyright violation.
                </p>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Integer auctor cum urna malesuada."
                        aria-label="Payment Link"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Copy Link</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Modal.Body>
        </Modal>
    );
};

export default PaymentSuccess;
