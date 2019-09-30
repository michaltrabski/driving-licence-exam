import React, { Component, useState, useEffect } from "react";
import ExamWrapper from "./containers/ExamWrapper";
import { questionsList } from "./assets/kat_b_pl";

class App extends Component {
  state = {
    questionsList: [],
    examMode: true
  };

  componentDidMount() {
    console.log("App componentDidMount", this.state.questionsList.length);

    // symulate ajax call
    setTimeout(() => this.setState({ questionsList }), 1);
  }

  render() {
    console.log("App Render", this.state.questionsList.length);
    return this.state.examMode ? (
      <ExamWrapper questionsList={this.state.questionsList} />
    ) : (
      "learning mode"
    );
  }
}

export default App;
