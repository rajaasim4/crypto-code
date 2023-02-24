import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <section className="NewsLetter mt-5 py-5">
      <Container>
        <Row>
          <Col lg="12">
            <h1 className="fs-1 inter-font text-light text-center">
              Subscribe & get news updates
            </h1>
            <p className="lato-font primary-text-color text-center">
              Duis massa posuere commodo sed tortor ultrices accumsan augue.
              Aliquet bibendum placerat vivamus diam <br /> ullamcorper vitae
              sapien auctor ut. Suspendisse donec id aenean diam dolor nec vitae
              massa id. Velit nullam <br /> consequat orci amet fames sed. Amet
              tincidunt adipiscing varius maecenas adipiscing.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg="6" className="mx-auto mt-5">
            <div className="NewsLetter-input d-flex justify-content-between">
              <input
                type="text"
                placeholder="Write Your Email Here"
                className="ps-3 "
              />
              <button className="Main-btn">Subscribe Now</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
