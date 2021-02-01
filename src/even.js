import readlineSync from 'readline-sync';

const roundsCount = 3;
const minValue = 1;
const maxValue = 100;

const getRandomInt = (min, max) => (
  Math.round(Math.random() * (max - min) + min)
);

const isEven = (num) => num % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < roundsCount; i += 1) {
    const num = getRandomInt(minValue, maxValue);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};
