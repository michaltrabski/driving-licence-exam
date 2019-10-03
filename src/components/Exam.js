import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap/";
import Media from "./Media";
import Timer from "./Timer";
import { getQuestionType } from "../functions/functions";

const Exam = props => {
  const [currentQuestion, setcurrentQuestion] = useState(1);
  const [timer, setTimer] = useState({
    ready: false,
    time: 0,
    duration: 15,
    ended: false,
    color: "success"
  });

  let [d15, d20, d50] = [15, 20, 50];

  const { questions } = props;
  const question = questions[currentQuestion];
  let { q, m, pkt } = question;

  useEffect(() => {
    let interval = null;
    let { ready, time, duration, ended } = timer;

    if (ready && !ended) {
      interval = setInterval(() => {
        if (time < duration) {
          time = time + 1;
        } else {
          if (duration === d15) {
            time = 0;
            duration = d20;
          } else {
            ended = true;
          }
        }
        setTimer({
          ...timer,
          time,
          duration,
          ended
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleMediaReady = () => {
    setTimer({ ...timer, ready: true });
  };

  useEffect(() => {
    let ready = false;
    let duration = getQuestionType(question) === "yesno" ? d15 : d50;
    setTimer({
      ...timer,
      ready,
      time: 0,
      duration,
      ended: false
    });
  }, [currentQuestion]);

  return (
    <>
      <Row className="mt-3">
        <Col>
          <div className="d-flex justify-content-between align-items-center">
            <span>
              Wartość punktowa 3 <Badge variant="light">{pkt}</Badge>
            </span>
            <span>
              Kategoria <Badge variant="light">B</Badge>
            </span>
            <Badge variant="light">21:32</Badge>
            <Button variant="light" size="sm">
              Zakończ egzamin
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={6}>
          <Media m={m} handleMediaReady={handleMediaReady} />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column h-100">
            <Container fluid>
              <Row className="text-center">
                <Col xs={6}>Pytania podstawowe</Col>
                <Col xs={6}>Pytania specjalistyczne</Col>
              </Row>
              <Row className="text-center">
                <Col xs={6} className="bg-light">
                  {currentQuestion} / 20
                </Col>
                <Col xs={6} className="bg-light">
                  0/20
                </Col>
              </Row>
            </Container>

            <div className="mt-auto">
              <Timer
                duration={timer.duration}
                time={timer.time}
                color={timer.color}
              />
            </div>

            <div className="text-right mt-3">
              <Button
                variant="primary"
                onClick={() => setcurrentQuestion(currentQuestion + 1)}
              >
                Następne
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center bg-light mt-3">
          <h5 className="my-2">{q}</h5>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">Tak NIE</Col>
      </Row>
    </>
  );
};

export default Exam;
