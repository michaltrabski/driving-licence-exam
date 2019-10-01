export const getQuestionType = question => {
  // return "abc" or "yesno"
  let { r: rightAnswer } = question;
  rightAnswer = rightAnswer.toLowerCase();

  let questionType =
    rightAnswer === "t" || rightAnswer === "n" ? "yesno" : "abc";

  return questionType;
};
