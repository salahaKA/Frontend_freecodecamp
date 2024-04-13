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
const str2= 'hello'
console.log(str2.substring(1,str2.length-2))
console.log('-----------------------------')
positiveCount=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum+=1
        }
    }
    return sum;
}
console.log(positiveCount([1,2,-3,4]))
console.log('-----------------------------')
CalcOp=(operation,value1,value2)=>{
    let result7;
    switch(operation){
        case '+':
            result7= value1+value2;
            break;
        case '-':
            result7= value1-value2;
            break;
        case '*':
            result7= value1*value2;
            break;
        case '/':
            result7= value1/value2;
            break;
        default:
            result7=console.log('Invalid')
            break;

    }
    return result7
}
console.log(CalcOp('/',4,2))
console.log(CalcOp('*',4,2))
console.log(CalcOp('+',4,2))
console.log(CalcOp('-',4,2))
console.log(CalcOp('$',4,2))

console.log('-----------------------------')
repeatStr=(str,n)=>{
    let startStr= '';
    for(let i=0;i<str.length;i++){
        startStr+=str
    }
    return startStr;
}

console.log(repeatStr('Hii',3))

console.log('-----------------------------')
let str= 'Hiiiiii'
console.log(str.repeat(3))
console.log('-----------------------------')
// function to split a string and convert it into an array of words.
//eg: "I love arrays" => ["I", "love","arrays"]

strToArr= (str)=>{
    return str.split(" ");
}
console.log(strToArr("I love my India"))
console.log('-----------------------------')
//Remove the spaces from the string then return the result string
remvSpace=(str)=>{
    const arr= str.split(" ")
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        const trimmedStr= arr[i].trim();
        newArr.push(trimmedStr)
    }

    return newArr.join("");
}
console.log(remvSpace("I love my India"))
console.log('-----------------------------')
maps=(arr)=>{
    const resArr=arr.map((arrItem)=>{
        return arrItem*2;
    })
    return resArr;
}
console.log(maps([1,2,3,4,5]))
console.log('-----------------------------')
// Dragon quiz
hero=(bullets,dragon)=>{
    const result8= bullets/ dragon>= 2? true: false;
    return result8
}
console.log(hero(8,4))
console.log('-----------------------------')

century=(year)=>{
    if(year%100==0) return Number(year.toString().substr(0,2))
    else return eval(Number(year.toString().substr(0,2))+1)

}
console.log(century(1900))
console.log('-----------------------------')