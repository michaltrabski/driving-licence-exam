import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap/";
import _ from "lodash";

class Exam extends Component {
  state = {
    examQuestions: []
  };
  componentDidMount() {
    console.log("Exam componentDidMount", this.props.questionsList.length);
  }

  getRandom32Questions = questionsList => {
    const examQuestions = _.shuffle(questionsList);
    console.log("getRandom32Questions", questionsList.length, examQuestions);
    return examQuestions;
  };

  render() {
    console.log("Exam Render", this.props.questionsList.length);
    const { questionsList } = this.props;

    const x =
      questionsList.length > 0
        ? this.getRandom32Questions(questionsList)
        : null;

    return questionsList.length > 0 ? (
      <Container fluid>
        <Row>
          <Col>ile pytań2 : {questionsList.length}</Col>
        </Row>
      </Container>
    ) : (
      <Container fluid>
        <Row>
          <Col>
            <Spinner
              className="text-center"
              animation="border"
              variant="secondary"
            />
            Losujemy egzamin, chwilowo pytań popbranych z bazy jest ={" "}
            {questionsList.length}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Exam;
