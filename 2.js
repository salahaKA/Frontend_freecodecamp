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