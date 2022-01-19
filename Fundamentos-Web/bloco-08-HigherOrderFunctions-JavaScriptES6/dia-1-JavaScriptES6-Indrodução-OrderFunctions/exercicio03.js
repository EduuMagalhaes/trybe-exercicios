const countPoints = (correctArray, answers, callback) => {
  let result = 0;
  for (const index in answers) {
    if (answers[index] !== 'N.A') {
      result += callback(answers[index], correctArray[index]);
    }
  }
  return result;
 };
const checkQuestions = (a, b) => a === b ? 1 : -0.5;

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, checkQuestions));