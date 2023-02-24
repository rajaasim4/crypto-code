import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FiInstagram,
  ImFacebook,
} from "react-icons/all";
import Logo from "../../assets/Images/Logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="pt-5">
        <Container>
          <Row className="flex-wrap">
            <Col lg="3">
              <img src={Logo} alt="" />
              <p className="primary-text-color">
                Posuere ac in in nisl sed augue. Ultrices eget pretium sit
                euismod mi id posuere ac in in nisl sed augue.
              </p>
            </Col>
            <Col
              lg="2"
              className="d-flex justify-content-start flex-column align-items-center"
            >
              <h3 className="mb-3">About</h3>
              <a href="" className="nav-link">
                About Us
              </a>
              <a href="" className="nav-link">
                Features
              </a>
              <a href="" className="nav-link">
                News
              </a>
            </Col>
            <Col
              lg="2"
              className="d-flex justify-content-start flex-column align-items-center"
            >
              <h3 className="mb-3">Company</h3>
              <a href="" className="nav-link">
                Cryptocode
              </a>
              <a href="" className="nav-link">
                Security
              </a>
              <a href="" className="nav-link">
                Ranking
              </a>
            </Col>
            <Col
              lg="2"
              className="d-flex justify-content-start flex-column align-items-center"
            >
              <h3 className="mb-3">Support</h3>
              <a href="" className="nav-link">
                FAQ
              </a>
              <a href="" className="nav-link">
                Support
              </a>
              <a href="" className="nav-link">
                Contact Us
              </a>
            </Col>
            <Col lg="3" className="mx-auto" md="12">
              <h3 className="mb-3 text-center">Social</h3>
              <div className="footer-social d-flex gap-3 justify-content-center">
                <a
                  href=""
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <ImFacebook />
                </a>
                <a
                  href=""
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <FiInstagram />
                </a>
                <a
                  href=""
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <FaTwitter />
                </a>
                <a
                  href=""
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href=""
                  className="nav-link d-flex justify-content-center align-items-center"
                >
                  <FaYoutube />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="py-3 Copyright">
          <Row>
            <Col lg="12">
              <p className="text-center primary-text-color ">
                &copy; {new Date().getFullYear()} .All rigths are reserved by
                CryptoCode
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
