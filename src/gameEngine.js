import readlineSync from 'readline-sync';

const runGameFlow = (gameDescription, roundsData, isCorrectPlayerAnswer) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundsData.length; i += 1) {
    const { questionText, correctAnswer } = roundsData[i];
    console.log(`Question: ${questionText}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (!isCorrectPlayerAnswer(playerAnswer, correctAnswer)) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

const getRoundsData = (getRoundData, roundsCount) => (
  Array.from({ length: roundsCount }).map(() => getRoundData())
);

export default (gameDescription, getRoundData, roundsCount, isCorrectPlayerAnswer) => {
  const roundsData = getRoundsData(getRoundData, roundsCount);
  runGameFlow(gameDescription, roundsData, isCorrectPlayerAnswer);
};
