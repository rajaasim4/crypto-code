import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Chart from "chart.js/auto";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
const Info = () => {
  const ShowData = () => {
    console.log("Mouse Over");
  };
  return (
    <>
      <Container className="my-5 py-5"></Container>
      <section className="Info py-5 my-5">
        <Container>
          <Row>
            <Col lg="6">
              <Line
                datasetIdKey="id"
                data={{
                  labels: ["", "", "", "", "", ""],
                  datasets: [
                    {
                      id: 1,
                      label: "",
                      data: [10, 30, 15, 25, 30, 20, 5],
                      borderColor: "#42DDA7",
                      tension: 0.9,
                    },
                  ],
                }}
                onMouseOver={ShowData}
              />
            </Col>
            <Col lg="6">
              <h1 className="text-light ">
                Track your earnings and cryptocode made it easy
              </h1>
              <p className="primary-text-color my-4">
                Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper
                lorem facilisis ut amet tincidunt adipiscing maecenas.
              </p>
              <button className="Main-btn">Get Started</button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Info;
