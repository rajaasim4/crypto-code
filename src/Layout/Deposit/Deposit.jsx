import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Deposit = () => {
  return (
    <div className="Deposit">
      <Container>
        <Row>
          <Col lg="6">
            <h1 className="text-light ">
              Trust us due to our safe and convenient deposit
            </h1>
            <p className="primary-text-color my-4">
              Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam
              ligula dignissim tellus semper lorem facilisis ut. Amet tincidunt
              adipiscing varius maecenas adipiscing.
            </p>
            <button className="Main-btn">Know More</button>
          </Col>
          <Col lg="6"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Deposit;
