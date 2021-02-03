import runEngine from '../gameEngine.js';
import { getRandomInt } from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const roundsCount = 3;
const minNumberValue = 1;
const maxNumberValue = 100;

const getGcd = (num1, num2) => (
  num2 === 0 ? num1 : getGcd(num2, num1 % num2)
);

const isCorrectPlayerAnswer = (playerAnswer, correctAnswer) => (
  Number(playerAnswer) === correctAnswer
);

const getRoundData = () => {
  const num1 = getRandomInt(minNumberValue, maxNumberValue);
  const num2 = getRandomInt(minNumberValue, maxNumberValue);

  const gcd = getGcd(num1, num2);
  const questionText = `${num1} ${num2}`;
  const correctAnswer = gcd;
  return { questionText, correctAnswer };
};

export default () => {
  runEngine(gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer);
};
