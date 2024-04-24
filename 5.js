// Regular exp

const emailValidator= new RegExp('^.+@#$%*!')
const uinput= 'invalidemail@g'
const isValid= emailValidator.test(uinput)
console.log(isValid)

console.log("--------------")
// Identifier, Quantifier
const regex= new RegExp('g')
const str1= 'my favorite food is spicy'
const str2= 'my favoritE thing to do is coding'
console.log(regex.test(str1))
console.log(regex.test(str2))
console.log("--------------")

const regex2= new RegExp('favoritE')
console.log(regex2.test(str1))
console.log(regex2.test(str2))
console.log("--------------")
const regex3= /[A-Za-z0-9 ]/ 
const regex4= /[0-9]/
const regex5= /[a-z ]*/
const regex6= /[a-z ]*/g

console.log(regex3.test(str1))
console.log(regex4.test(str1))
console.log(regex5.test(str1))
console.log(regex5.exec(str1))
console.log(regex5.exec(str2))
console.log(regex6.exec(str1))
console.log(regex6.test(str1))
console.log("--------------")

const str3='hello world, 2021 @ more of a string'
const regex7=/[a-z ]+,[0-9 ]+@/
console.log(regex7.exec(str3))
console.log("--------------")
const str4= 'Dog is jumped on the bed. My Dog is a bad Dog'
const regex8=/[A-Za-z .]*/
const regex9=/[A-Za-z .]+/
console.log(regex8.exec(str4))
console.log(regex9.exec(str4))

console.log("-----------------")

const newstr= str4.replace(/Dog/g,'Adeena')
console.log(newstr)
console.log("-----------------")
//7:39

