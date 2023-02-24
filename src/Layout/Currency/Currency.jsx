import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiBitcoin, FaEthereum, SiRipple } from "react-icons/all";
import CurrencyCard from "../../Components/CurrencyCard/CurrencyCard";
const Currency = () => {
  return (
    <section className="Currency mb-5">
      <Container>
        <Row className="p-0">
          <Col lg="4">
            <CurrencyCard
              currencyIcon={<BiBitcoin />}
              title={"Bitcoin"}
              price={"32,0202"}
            />
          </Col>
          <Col lg="4">
            <CurrencyCard
              currencyIcon={<FaEthereum />}
              title={"Ethereum"}
              price={"4,233"}
            />
          </Col>
          <Col lg="4">
            <CurrencyCard
              currencyIcon={<SiRipple />}
              title={"Ripple"}
              price={"0.4232"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Currency;
