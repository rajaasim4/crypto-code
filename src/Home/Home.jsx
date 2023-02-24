import React from "react";
import { Container } from "react-bootstrap";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import Currency from "../Layout/Currency/Currency";
import Deposit from "../Layout/Deposit/Deposit";
import Hero from "../Layout/Hero/Hero";
import Info from "../Layout/Info/Info";
import NewsLetter from "../Layout/NewsLetter/NewsLetter";
import Partners from "../Layout/Partners/Partners";
const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Container fluid style={{ background: "#1B1B1B" }}>
        <Partners />
        <Currency />
        <Info />
        <Deposit/>
        <NewsLetter />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
