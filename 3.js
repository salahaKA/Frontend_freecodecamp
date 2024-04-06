// summation
class sample {
    findSum(n) {
        let sum = 0;
        if (n > 0) {
            for (let i = 0; i < n + 1; i++) {
                sum = sum + i;
            }
        }
        return sum;
    }
}

const s1 = new sample();
console.log(s1.findSum(6))

console.log('-----------------------')
//Rock, Paper, Sciessor game
const RPS = (p1, p2) => {
    if (p1 == 'rock') {
        if (p2 == 'rock') {
            return 'draw!';
        }
        if (p2 == 'paper') {
            return 'Player2 Won!'
        }
        if (p2 == 'scissors') {
            return 'Player1 Won!'
        }
    }
    if (p1 == 'paper') {
        if (p2 == 'rock') {
            return 'Player1 won';
        }
        if (p2 == 'paper') {
            return 'draw!'
        }
        if (p2 == 'scissors') {
            return 'Player2 Won!'
        }
    }
    if (p1 == 'scissors') {
        if (p2 == 'rock') {
            return 'Player2 won';
        }
        if (p2 == 'paper') {
            return 'Player1 won'
        }
        if (p2 == 'scissors') {
            return 'draw!'
        }
    }
}
const round1 = RPS('scissors', 'paper')
const round2 = RPS('rock', 'paper')
const round3 = RPS('scissors', 'scissors')
console.log(round1)
console.log(round2)
console.log(round3)

console.log('-------------------------------')
// OR

const rps = (p1, p2) => {
    if (p1 == p2) return 'draw';
    var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' }
    if (p2 == rules[p1]) {
        return 'Player 1 won'
    } else {
        return 'Player 2 won'
    }
}
const result1 = rps('scissors', 'paper')
const result2 = rps('rock', 'paper')
const result3 = rps('scissors', 'scissors')
console.log(result1)
console.log(result2)
console.log(result3)

console.log('-------------------------------')
//OR
const RockPaperScissors = (p1, p2) => {
    if (p1 == p2) return 'draw';

    if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!'
    else if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!'
    else return 'Player 2 won!'
}
const r1 = RockPaperScissors('scissors', 'paper')
const r2 = RockPaperScissors('rock', 'paper')
const r3 = RockPaperScissors('scissors', 'scissors')
console.log(r1)
console.log(r2)
console.log(r3)

console.log('-----------------------------')
// Create function that remove first and last chars of a string. You don't have worry with string with less than two chars.