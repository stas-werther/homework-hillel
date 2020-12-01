let rand = Math.floor(Math.random() * 10);
let answer;

const askNum = function() {
    answer = prompt('Gess a number!');
}
const checkNum = function() {
    return answer !== null && Number(answer) !== rand;
}
console.log(rand);

const loopNum = function() {
    while(checkNum()){
        askNum();
    }
}

loopNum();

