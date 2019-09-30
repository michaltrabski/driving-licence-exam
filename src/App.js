import React, { Component, useState, useEffect } from "react";
import Exam from "./containers/Exam";
import { questionsList } from "./assets/kat_b_pl";

class App extends Component {
  state = {
    questionsList: []
  };

  componentDidMount() {
    console.log("App componentDidMount", this.state.questionsList.length);

    // symulate ajax call
    setTimeout(() => this.setState({ questionsList }), 1100);
  }

  render() {
    console.log("App Render", this.state.questionsList.length);
    return <Exam questionsList={this.state.questionsList} />;
  }
}

export default App;
