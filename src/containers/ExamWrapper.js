import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap/";
import _ from "lodash";
import SpinnerToLosExam from "../components/spinners/SpinnerToLosExam";
import Exam from "./Exam";

class ExamWrapper extends Component {
  state = {
    examQuestionsList: [],
    examReady: false
  };

  getRandom32Questions = questionsList => {
    let questionsListShuffled = _.shuffle(questionsList);
    let examQuestionsList = [];
    const arr = [
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      2,
      2,
      1,
      1,
      1,
      1,
      3,
      3,
      3,
      3,
      3,
      3,
      2,
      2,
      2,
      2,
      1,
      1
    ];

    for (let i = 0; i < arr.length; i++) {
      let findQuestion = questionsListShuffled.findIndex(
        item =>
          (i < 20 &&
            (item.pkt == arr[i] &&
              (item.r.toLowerCase() === "t" ||
                item.r.toLowerCase() === "n"))) ||
          (i >= 20 &&
            (item.pkt == arr[i] &&
              (item.r.toLowerCase() === "a" ||
                item.r.toLowerCase() === "b" ||
                item.r.toLowerCase() === "c")))
      );

      examQuestionsList = [
        ...examQuestionsList,
        questionsListShuffled[findQuestion]
      ];
      questionsListShuffled = _.slice(questionsListShuffled, findQuestion + 1);
    }
    this.setState({ examQuestionsList, examReady: true });
  };

  render() {
    const { questionsList } = this.props;

    return questionsList.length > 0 ? (
      <Container fluid>
        <Row>
          <Col>
            {this.state.examReady ? (
              <Exam examQuestionsList={this.state.examQuestionsList} />
            ) : (
              <>
                <Button
                  variant="primary"
                  onClick={() => this.getRandom32Questions(questionsList)}
                >
                  Rozpoczniej egzamin
                </Button>
                <p>Tu jest info o zasadach egzaminu.</p>
              </>
            )}
          </Col>
        </Row>
      </Container>
    ) : (
      <SpinnerToLosExam />
    );
  }
}

export default ExamWrapper;
