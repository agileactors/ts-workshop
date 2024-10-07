//use this enum
enum QuestionCategory {
  GeneralKnowledge = 'GeneralKnowledge',
  //... add some more
}

//create a type Question

//create the array of questions. Make it type safe
const questions = [
  //..
];

//use the checkAnswer function. Make it type safe
function checkAnswer(question, userAnswer) {
  return question.correctAnswer === userAnswer;
}

checkAnswer(questions[0], false);
