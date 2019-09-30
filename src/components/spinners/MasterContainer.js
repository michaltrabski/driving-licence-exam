import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1180px;
  margin: auto;
`;
const MasterContainer = props => {
  return (
    <section className="bg-light py-5">
      <Wrapper className="bg-white">
        <Container fluid className="border rounded shadow-sm">
          <Row>
            <Col>{props.children}</Col>
          </Row>
        </Container>
      </Wrapper>
    </section>
  );
};

export default MasterContainer;
