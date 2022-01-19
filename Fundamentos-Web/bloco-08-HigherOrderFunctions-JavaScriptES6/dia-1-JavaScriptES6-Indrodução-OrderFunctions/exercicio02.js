const lottery = (num, callback) => {  
  return callback(num, Math.floor(Math.random() * 5) + 1) ? 'Lucky day, you won!' : 'Try Again!';
};
const checkResult = (num1, randomNumber) => num1 === randomNumber;

console.log(lottery(2, checkResult));
