import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap/";
import _ from "lodash";
import Exam from "./Exam";
import MasterContainer from "./spinners/MasterContainer";
import { arrWithPktToEgzam } from "../functions/functions";
import { QuestionsContext } from "../App";

const ExamWrapper = () => {
  const [examQuestionsList, setExamQuestionsList] = useState([]);
  const { questions } = useContext(QuestionsContext);

  const getRandom32Questions = questionsList => {
    let questionsListShuffled = _.shuffle(questionsList);
    let examQuestionsList = [];

    for (let i = 0; i < arrWithPktToEgzam.length; i++) {
      let findQuestion = questionsListShuffled.findIndex(
        item =>
          (i < 20 &&
            (item.pkt == arrWithPktToEgzam[i] &&
              (item.r.toLowerCase() === "t" ||
                item.r.toLowerCase() === "n"))) ||
          (i >= 20 &&
            (item.pkt == arrWithPktToEgzam[i] &&
              (item.r.toLowerCase() === "a" ||
                item.r.toLowerCase() === "b" ||
                item.r.toLowerCase() === "c")))
      );
      questionsListShuffled[findQuestion].nr = i + 1;
      examQuestionsList = [
        ...examQuestionsList,
        questionsListShuffled[findQuestion]
      ];
      questionsListShuffled = _.slice(questionsListShuffled, findQuestion + 1);
    }
    setExamQuestionsList(examQuestionsList);
  };

  return (
    <MasterContainer>
      {examQuestionsList.length === 32 ? (
        <Exam questions={examQuestionsList} />
      ) : (
        <>
          <Button
            variant="primary"
            onClick={() => getRandom32Questions(questions)}
          >
            Rozpoczniej egzamin
          </Button>
          <p>Opis zasad egzaminu</p>
        </>
      )}
    </MasterContainer>
  );
};

export default ExamWrapper;
