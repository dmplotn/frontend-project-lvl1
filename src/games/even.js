import runEngine from '../gameEngine.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const roundsCount = 3;
const minNumberValue = 1;
const maxNumberValue = 100;

const isEven = (num) => num % 2 === 0;

const isCorrectPlayerAnswer = (playerAnswer, correctAnswer) => playerAnswer === correctAnswer;

const getRoundData = () => {
  const num = getRandomInt(minNumberValue, maxNumberValue);
  const questionText = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';
  return { questionText, correctAnswer };
};

export default () => {
  runEngine(gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer);
};
