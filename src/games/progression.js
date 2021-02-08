import runEngine from '../gameEngine.js';
import { getRandomInt } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const roundsCount = 3;
const progressionLength = 10;
const minStartValue = 1;
const maxStartValue = 100;
const minStepValue = 2;
const maxStepValue = 10;

const getProgression = (start, step, length) => (
  Array.from({ length }, (value, index) => start + index * step)
);

const getProgressionWithSecretAsStr = (progression, secretIndex) => {
  if (secretIndex < 0 || secretIndex > progression.length - 1) {
    throw new Error(`Unknown index: ${secretIndex}`);
  }

  return progression
    .map((value, index) => (index === secretIndex ? '..' : value))
    .join(' ');
};

const isCorrectPlayerAnswer = (playerAnswer, correctAnswer) => (
  Number(playerAnswer) === correctAnswer
);

const getRoundData = () => {
  const start = getRandomInt(minStartValue, maxStartValue);
  const step = getRandomInt(minStepValue, maxStepValue);
  const progression = getProgression(start, step, progressionLength);
  const secretIndex = getRandomInt(0, progression.length - 1);

  const questionText = getProgressionWithSecretAsStr(progression, secretIndex);
  const correctAnswer = progression[secretIndex];
  return { questionText, correctAnswer };
};

export default () => {
  runEngine(gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer);
};
