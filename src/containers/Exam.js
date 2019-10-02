import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Media from "../components/Media";
import Timer from "../components/Timer";
import { getQuestionType } from "../functions/functions";

const Exam = ({ questions }) => {
  const [currentQuestion, setcurrentQuestion] = useState(1);
  const [timer, setTimer] = useState({
    ready: false,
    time: 0,
    duration: 15,
    ended: false,
    color: "success"
  });

  let [d15, d20, d50] = [2, 3, 50];

  const question = questions[currentQuestion];
  let { m, q, r } = question;

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

  const nextQuestion = () => {
    setcurrentQuestion(currentQuestion + 1);
  };

  const handleMediaReady = () => {
    setTimer({ ...timer, ready: true });
  };

  useEffect(() => {
    console.log(timer);

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
      <Row>
        <Col md={6}>
          <Media m={m} handleMediaReady={handleMediaReady} />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column h-100">
            <Timer
              duration={timer.duration}
              time={timer.time}
              color={timer.color}
            />
            {getQuestionType(question)}
            {timer.duration}
            <div className="mt-auto text-right">
              <Button variant="primary" onClick={nextQuestion}>
                Następne
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <p>{q}</p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center"></Col>
      </Row>
    </>
  );
};

export default Exam;

// import React, { Component } from "react";
// import { Button } from "react-bootstrap/";
// import Media from "../components/Media";

// class Exam extends Component {
//   state = { currentQuestion: 1 };

//   nextQuestion = () => {
//     this.setState({
//       currentQuestion: this.state.currentQuestion + 1
//     });
//   };
//   render() {
//     const { examQuestionsList } = this.props;
//     const question = examQuestionsList[this.state.currentQuestion];
//     const { m, q } = question;

//     return (
//       <div>
//         <Media m={m} />
//         <p>{q}</p>
//         <Button variant="primary" onClick={this.nextQuestion}>
//           Następne
//         </Button>
//       </div>
//     );
//   }
// }

// export default Exam;
