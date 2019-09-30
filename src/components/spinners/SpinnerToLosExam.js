import React from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap/";

const SpinnerToLosExam = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Spinner
            className="text-center"
            animation="border"
            variant="secondary"
          />
          Losujemy egzamin, chwilowo pytań popbranych z bazy jest
        </Col>
      </Row>
    </Container>
  );
};

export default SpinnerToLosExam;
