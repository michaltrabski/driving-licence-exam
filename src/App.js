import React, { useState, useEffect, createContext } from "react";
import ExamWrapper from "./components/ExamWrapper";
import { questionsList as questionsListFromAssets } from "./assets/kat_b_pl";
import "./App.css";
import { modeType } from "./functions/functions";
import AppWrapper from "./components/AppWrapper";

export const QuestionsContext = createContext();
const App = () => {
  const [questions, setQuestions] = useState([]);
  const [mode, setMode] = useState(modeType.modeExam);

  useEffect(() => {
    setTimeout(() => {
      setQuestions(questionsListFromAssets);
    }, 1);
  }, [questions]);

  return (
    <AppWrapper>
      <QuestionsContext.Provider
        value={{ questions: [...questions], setQuestions }}
      >
        {mode === modeType.modeExam && <ExamWrapper />}
        {mode === modeType.modeRevievExam && "przeglądamy wyniki egzaminów"}
        {mode === modeType.modeLearnQuestions && "uczymy sie testow"}
      </QuestionsContext.Provider>
    </AppWrapper>
  );
};

export default App;
