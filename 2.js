// JS Functions, condetions and Loops
if('some str'=='another str'){
    console.log('String are equal')
}else{
    console.log('Strings are not equal')
}


console.log("--------------------------")
var ch=3
switch(ch){
    case 1:
        console.log("value 1");
        break;
    case 2:
        console.log("value 2");
        break;
    case 3:
        console.log("value 3");
        break;
    default:
        console.log("invlid");
}
console.log("--------------------------") 
//objects in js
const posts=[{
    title:'Summer vacation with homies',
    auther:'kadeejasalaha',
    publiser:'March 12 2024',
    content:'Happy time'
},
{
    title:'Python',
    auther:'Brototype',
    publiser:'12 Dec 2023',
    content:'Python Django web dev'
},
{
    title:'C++',
    auther:'nareshit',
    publiser:'27 July 2020',
    content:'Introduction to C++'
}]
console.log(posts)
console.log(posts[2])
for(let i=0;i<posts.length;i++){
    const postTitle= posts[i].title;
    const postAuther= posts[i].auther;
}
console.log("--------------------------") 
// functioms

function myfun(){
    console.log('hii')
}
myfun()
console.log(typeof myfun)

//args function

function fun1(a,b){
    console.log(a)
    console.log(b)
}
fun1(5,2)

console.log("--------------------------")
//Arrow function
const arrowFunction=()=>{
    console.log('Iam a arrow function')
}
arrowFunction()


// Return value in python

const fun2=()=>{
    const b=20
    return b<30;
}
const result6= fun2()
console.log(result6)

const result5= fun2();
console.log("--------------------------")
function fun3(){
    console.log("hey function")
}
const obj4={
    property1: 50,
    property2: fun3
}
console.log(obj4.property2)

console.log("--------------------------")
const str1= 'zach'
str1.replace('h','y')
console.log(str1)
const newstr= str1.replace('h','y')
console.log(newstr)
console.log(str1.toUpperCase())
console.log(str1.toLowerCase())
console.log(str1.toLocaleUpperCase())

//3:55:09
console.log("--------------------------")
function multiply(a,b){
    if (!a||!b || typeof(a)!= "number"||typeof(b)!="number"){
        return 0;
    }
    return a*b
}

console.log(multiply(2,3))

console.log("--------------------------")
multiply1=(a,b)=> a*b;
console.log(multiply1(2,3))

console.log("--------------------------")
function getPlanetname(id){
    var name;
    switch(id){
        case 1:
            name= 'Mercury'
            break;
        case 2:
            name= 'Venus'
            break
        case 3:
            name= 'Earth'
            break
        case 4:
            name= 'Jupiter'
            break
        case 5:
            name= 'Uranus'
            break
        case 6:
            name= 'Saturn'
            break;
        case 7:
            name= 'Uranus'
            break
        case 8:
            name= 'Neptune'
            break
        default:
            name= 'Invalid'
            break;
    }
    return name;
}
console.log(getPlanetname(3))

console.log("--------------------------")
//Reverse string
function reverse1(s){
    return s.split("").reverse().join("");
}
console.log(reverse1("helooguys"))

// Reverse array
const arr= [1,2,3,4,5]
console.log(arr.reverse())

console.log("--------------------------")
//String concatenation
function strConcate(name){
    
    if(name=='Salaha'){
        return "Hello user!"
    }else{
        return "Hii,"+name+"!";
    }
}
console.log(strConcate("Salaha"))
console.log(strConcate("Kadeeja"))

console.log("--------------------------")
// class

class Sample{
    findSmallInt(arr){
         var sno=0;
         for(let i=0;i<arr.length;i++){
            if(i==0){
                sno=arr[i]
            }
            if(arr[i]<sno){
                sno= arr[i]
            }
         }
         return sno;
    }
}
const S1= new Sample();
const numbers = '1,2,3,4,5'.split(',').map(Number); // Convert string to array of integers
console.log(S1.findSmallInt(numbers));

console.log("--------------------------")
