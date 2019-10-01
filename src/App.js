import React, { useState, useEffect, createContext } from "react";
import ExamWrapper from "./containers/ExamWrapper";
import { questionsList as questionsListFromAssets } from "./assets/kat_b_pl";

export const QuestionsContext = createContext();

const App = () => {
  console.log("App");

  const [questions, setQuestions] = useState([]);
  const [examMode, setexamMode] = useState(true);

  useEffect(() => {
    console.log("App useEffect");

    setTimeout(() => {
      const questions = questionsListFromAssets;
      setQuestions(questions);
    }, 1);
  }, [questions]);

  return (
    <QuestionsContext.Provider value={questions}>
      {examMode && <ExamWrapper questionsList={questions} />}
    </QuestionsContext.Provider>
  );
};

export default App;
