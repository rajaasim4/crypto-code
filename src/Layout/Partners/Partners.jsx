import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Partner_img1 from "../../assets/Images/Partners_icon1.png";
import Partner_img2 from "../../assets/Images/Partners_icon2.png";
import Partner_img3 from "../../assets/Images/Partners_icon3.png";
import Partner_img4 from "../../assets/Images/Partners_icon4.png";
import Partner_img5 from "../../assets/Images/Partners_icon5.png";
import "./Partners.css";

const Partners = () => {
  return (
    <section className="Partners">
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className="Slider">
              <div className="Slide_track">
                <div className="Slide">
                  <img src={Partner_img1} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img2} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img3} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img4} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img5} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img1} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img2} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img3} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img4} alt="" />
                </div>
                <div className="Slide">
                  <img src={Partner_img5} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
