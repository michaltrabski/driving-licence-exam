export const modeType = {
  modeNotSelected: "modeNotSelected",
  modeExam: "modeExam",
  modeRevievExam: "modeRevievExam",
  modeLearnQuestions: "modeLearnQuestions"
};

export const getQuestionType = question => {
  // return "abc" or "yesno"
  let { r: rightAnswer } = question;
  rightAnswer = rightAnswer.toLowerCase();

  let questionType =
    rightAnswer === "t" || rightAnswer === "n" ? "yesno" : "abc";

  return questionType;
};

export const arrWithPktToEgzam = [
  // sum must be equal 74
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  3,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  1,
  1,
  1,
  3,
  3,
  3,
  3,
  3,
  3,
  2,
  2,
  2,
  2,
  1,
  1
];
