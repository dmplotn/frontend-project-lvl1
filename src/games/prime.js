import runEngine from '../gameEngine.js';
import { getRandomInt } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const roundsCount = 3;
const minNumberValue = 1;
const maxNumberValue = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const isCorrectPlayerAnswer = (playerAnswer, correctAnswer) => playerAnswer === correctAnswer;

const getRoundData = () => {
  const num = getRandomInt(minNumberValue, maxNumberValue);

  const questionText = num;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  return { questionText, correctAnswer };
};

export default () => {
  runEngine(gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer);
};
