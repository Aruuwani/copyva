import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import Frame from "../../../assets/Frame 22.png";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { IoIosLink } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import "./searchcode.css";
import Buylicenceform from "./buylicenceform";

const Music = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container className="mt-4">
            <div className="purchases-list1">
                <div>
                    <div className="Top_header" style={{ borderBottom: "none" }}>
                        <h2>List of Content</h2>
                        <div className="input_search">
                            <input type="text" placeholder="Search by genre, mood, artist" />
                            <span className="search_icon">
                                <button>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.0004 21.0004L16.6504 16.6504" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>

                <Row className="g-0">
                    <Col md={4}>
                        <img src={Frame} alt="Track image" className="search_img" />
                    </Col>
                    <Col md={8}>
                        <Card.Body style={{ textAlign: "start" }}>
                            <Card.Title>Lorem ipsum dolor sit</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">by Lorem</Card.Subtitle>
                            <Card.Text>
                                Bright and pulsing, featuring string arrangement, mallets, and synthesizer that creates a driving and discovering mood.
                            </Card.Text>
                            <Button variant="warning" className="text-white" onClick={toggleMenu}>Buy licence</Button>
                        </Card.Body>
                        {isMenuOpen && (
                            <div className="side-menu">
                                <div className="side-menu-header">

                                    <button className="close-button" onClick={toggleMenu}><IoClose /></button>
                                </div>
                                <div className="side-menu-content">
                                    <Buylicenceform />
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>

                <div className="icon_section">
                    <div className="col">
                        <div>2:35</div>
                        <small className="text-muted">Minute</small>
                    </div>
                    <div className="col">
                        <div><MdOutlineFavoriteBorder /></div>
                        <small className="text-muted">Favorite</small>
                    </div>
                    <div className="col">
                        <div><IoIosLink /></div>
                        <small className="text-muted">Link</small>
                    </div>
                    <div className="col">
                        <div><GoPerson /></div>
                        <small className="text-muted">Lorum</small>
                    </div>
                </div>

                <h5 className="mt-4">More track details</h5>
                <Row>
                    <Col>
                        <h6 style={{ textAlign: "start" }}>Genres</h6>
                        <div className="d-flex flex-wrap">
                            {['Jazz', 'Pop', 'Rock', 'Hip hop'].map((genre, index) => (
                                <Badge key={index} bg="light" text="dark" className="me-4 mb-3 p-3 border rounded-pill">{genre}</Badge>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <h6 style={{ textAlign: "start" }}>Tags</h6>
                        <div className="d-flex flex-wrap">
                            {['Adventure', 'Adventure', 'Adventure'].map((tag, index) => (
                                <Badge key={index} bg="light" text="dark" className="me-2 mb-2 p-2 border rounded-pill">{tag}</Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 style={{ textAlign: "start" }}>Moods</h6>
                        <div className="d-flex flex-wrap">
                            {['Adventure', 'Romance', 'Comedy', 'Sad'].map((mood, index) => (
                                <Badge key={index} bg="light" text="dark" className="me-2 mb-2 p-2 border rounded-pill">{mood}</Badge>
                            ))}
                        </div>
                    </Col>
                    <Col>
                        <h6 style={{ textAlign: "start" }}>Instruments</h6>
                        <div className="d-flex flex-wrap">
                            {['Adventure', 'Adventure', 'Adventure'].map((instrument, index) => (
                                <Badge key={index} bg="light" text="dark" className="me-2 mb-2 p-2 border rounded-pill">{instrument}</Badge>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Music;





