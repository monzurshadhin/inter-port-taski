import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../../images/logo 1.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
          <img className="header-logo" src={logo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto navbar-link">
          <Nav.Link className="me-md-5 ibm-font" href="/">Enroll For Course</Nav.Link>
          <Nav.Link href="/" className="ibm-font">Meet Your Trainers</Nav.Link>
          
        </Nav>
        <button className="navbar-button inter-font">LOG IN</button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;
