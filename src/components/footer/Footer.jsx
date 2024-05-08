import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
    return (
      <footer className="bg-dark text-light mt-5">
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <Row className="mb-3">
          <Col className="text-center">
            Bean bar
          </Col>
        </Row>
       <Row>
        <Col>
        <Navbar bg="dark" variant="dark">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar>
        </Col>
       </Row>
        <Row className="mb-3">
          <Col className="text-center">
            <i className="fab fa-facebook fa-2x mr-3"  style={{padding:"10px"}}></i>
            <i className="fab fa-twitter fa-2x mr-3" style={{padding:"10px"}}></i>
            <i className="fab fa-instagram fa-2x" style={{padding:"10px"}}></i>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>

    );
  
}
