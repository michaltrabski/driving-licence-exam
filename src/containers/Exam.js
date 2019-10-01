import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap/";
import Media from "../components/Media";

const Exam = props => {
  const [currentNr, setCurrentNr] = useState(1);

  const nextQuestion = () => {
    setCurrentNr(currentNr + 1);
  };

  const { questions } = props;
  const question = questions[currentNr];
  const { m, q } = question;

  return (
    <>
      <Row>
        <Col md={6}>
          <Media m={m} />
        </Col>
        <Col md={6}>
          <div className="d-flex flex-column h-100">
            <div>asd</div>
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
