import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Hero_img from "../../assets//Images/Hero-mobile.png";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="Hero" style={{ background: "#151515" }}>
      <Container>
        <Row className="py-5">
          <Col lg="6">
            <img src={Hero_img} alt="" className="w-100" />
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <div className="Hero-content d-flex flex-column justify-content-lg-evenly">
              <h1 className=" text-light font-inter  ">
                Make easier your <br /> crypto transactions.
              </h1>
              <p className="primary-text-color my-4">
                Our cryptocurrency offers a fast, secure, and affordable
                alternative for all of your financial needs. Join the
                cryptocurrency revolution today and take control of your
                financial future. Sign up now to start using our platform for
                yourself.
              </p>
              <button className="Main-btn">Try For Free</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
