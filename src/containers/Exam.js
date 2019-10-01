import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Media from "../components/Media";
import Timer from "../components/Timer";
import { getQuestionType } from "../functions/functions";

const Exam = props => {
  const [currentNr, setCurrentNr] = useState(18);
  const [timerReady, setTimerReady] = useState(true);
  const [time, setTime] = useState(0);
  const [timerType, setTimerType] = useState("type15");
  const [questionType, setQuestionType] = useState("yesno");

  const { questions } = props;
  const question = questions[currentNr];
  let { m, q, r } = question;

  useEffect(() => {
    setQuestionType(getQuestionType(question));
  }, [currentNr]);

  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/

  useEffect(() => {
    // console.log("Exam start timer");
    let interval = null;

    if (timerReady) {
      interval = setInterval(() => {
        if (timerType === "type15" && time === 2) {
          console.log("jest");
          setTimerType("type20");
          setTimerReady(false);
        }
        setTime(time => time + 1);

        console.log(time, timerType, questionType);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  const nextQuestion = () => {
    setCurrentNr(currentNr + 1);
    setTime(0);
  };

  return (
    <>
      <Row>
        <Col md={6}>
          <Media m={m} />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column h-100">
            <Timer duration={15} time={time} color="success" />
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
        <Col className="text-center">tak nie a b c</Col>
      </Row>
    </>
  );
};

export default Exam;

// import React, { Component } from "react";
// import { Button } from "react-bootstrap/";
// import Media from "../components/Media";

// class Exam extends Component {
//   state = { currentNr: 1 };

//   nextQuestion = () => {
//     this.setState({
//       currentNr: this.state.currentNr + 1
//     });
//   };
//   render() {
//     const { examQuestionsList } = this.props;
//     const question = examQuestionsList[this.state.currentNr];
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
