import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Images/Logo.png";
const NavBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "#151515" }}
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link href="#features" className="fs-6 lato-font">
                PRODUCT
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 lato-font">
                COMPANY
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 lato-font">
                PRICING
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 lato-font">
                BLOG
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Log In</Nav.Link>
              <button className="Main-btn ms-md-4">Register</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
