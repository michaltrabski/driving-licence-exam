import React, { Component } from "react";
import { Button } from "react-bootstrap/";
import Media from "../components/Media";

class Exam extends Component {
  state = { currentNr: 1 };

  nextQuestion = () => {
    this.setState({
      currentNr: this.state.currentNr + 1
    });
  };
  render() {
    const { examQuestionsList } = this.props;
    const question = examQuestionsList[this.state.currentNr];
    const { m, q } = question;

    return (
      <div>
        <Media m={m} />
        <p>{q}</p>
        <Button variant="primary" onClick={this.nextQuestion}>
          Następne
        </Button>
      </div>
    );
  }
}

export default Exam;
