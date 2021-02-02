import runEngine from '../gameEngine.js';
import { getRandomInt, getRandomItemFromArray } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const roundsCount = 3;
const minNumberValue = 1;
const maxNumberValue = 100;

const calc = (operation, operand1, operand2) => {
  let result;
  switch (operation) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
  return result;
};

const isCorrectPlayerAnswer = (playerAnswer, correctAnswer) => (
  Number(playerAnswer) === correctAnswer
);

const getRoundData = () => {
  const num1 = getRandomInt(minNumberValue, maxNumberValue);
  const num2 = getRandomInt(minNumberValue, maxNumberValue);
  const operations = ['+', '-', '*'];
  const operation = getRandomItemFromArray(operations);

  const result = calc(operation, num1, num2);
  const questionText = `${num1} ${operation} ${num2}`;
  const correctAnswer = result;

  return { questionText, correctAnswer };
};

export default () => {
  runEngine(gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer);
};
