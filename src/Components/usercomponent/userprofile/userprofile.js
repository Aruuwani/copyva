import React from 'react'
import './userprofile.css'
import ProfileImg from '../../../assets/profile_img.png'

import { Form, Row, Col } from 'react-bootstrap';

const UserProfile = () => {
    return (
        <div className="purchases-list">
        <Form className='profile_setting'>
        <h1 className='text-start mb-3 d-none d-md-block'>Bank account</h1>
         <div className='profile_Div'>
            <img src={ProfileImg} alt='ProfileImg' />
<div className='Profile_content'>
    <h5>User info</h5>
<p>Recommended memory size is less then 12MB </p>
<button>Upload</button>
</div>
         </div>


            <Row className="mt-3">
                <Col md={6}>
                    <Form.Group controlId="name">
                        <Form.Label className="statement_form">Name</Form.Label>
                        <Form.Control name="name" placeholder='Enter name' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="emailaddress">
                        <Form.Label className="statement_form">Email address</Form.Label>
                        <Form.Control name="emailaddress" placeholder='Enter email address' type="text" />
                    </Form.Group>
                </Col>
            </Row>

            <h1 className='text-start'>Change Password</h1>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Old Password</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="otherLink">
                        <Form.Label className="statement_form">New Password</Form.Label>
                        <Form.Control name="otherLink" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Confirm password</Form.Label>
                        <Form.Control name="Confirmpassword" placeholder='Enter password' type="text" />
                    </Form.Group>
                </Col>

            </Row>


            <h1 className='text-start'>Bank account</h1>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">Account number</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter account' type="text" />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="otherLink">
                        <Form.Label className="Confirm_account">Confirm account no</Form.Label>
                        <Form.Control name="otherLink" placeholder='Confirm account  no' type="text" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="appleLink">
                        <Form.Label className="statement_form">IFSC Code</Form.Label>
                        <Form.Control name="appleLink" placeholder='Enter IFSC number' type="text" />
                    </Form.Group>
                </Col>

            </Row>
            <span className='btn_udate'><button  className='form_btn mt-2'>Update</button></span>
        </Form>
        </div>
    )
}

export default UserProfile