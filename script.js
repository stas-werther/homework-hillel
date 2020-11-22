let rand = Math.floor(Math.random() * 10);
let answer;

do {
    answer = prompt('Gess a number!');
} while(answer !== null && Number(answer) !== rand);

console.log('Random number was', rand);
