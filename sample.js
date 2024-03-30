const myArr= [10,20,30,40]
myArr.push(50)

console.log(myArr)

console.log(myArr.reverse())


console.log("-----------------------------------------------")

const firstVar=20
console.log("first var:",firstVar)

console.log("-----------------------------------------------")

const v1= "Learning to code"

const v2={firstProperty:"hello world"};
console.log(v1)
console.log(v2)

console.log("-----------------------------------------------")

const v3= 'helloworld';
let v4;
v4=20;
console.log(v4)
console.log("-----------------------------------------------")

const var1= 10;
let var2= 10;
var var3= 10;
var var3= 20;
var2+=1
console.log(var2)
console.log("-----------------------------------------------")

const a=10,b=20;
console.log(a+b)

const var4= {
    varType:'object',
    varValue: "some value"
}
console.log(var4)
console.log(typeof var4);
console.log("-----------------------------------------------")
// dtypes in js
var sname='salaha'
console.log(typeof sname)
console.log(sname+b)
console.log(sname,b)
console.log("-----------------------------------------------")
const arr1=[10,20,30]
const arr2=[10,'string',{fname:'kdeejath'},[1,2]];
console.log(typeof arr1)
console.log(typeof arr2)
console.log(arr1[2])
console.log(arr2[2])
console.log(arr2[3])
console.log(arr2[3][0])
console.log(arr2[2].fname)
console.log("-----------------------------------------------")
// object var
const obj1= {rno:21, fname:'kadee',class:'mca'}
console.log(obj1.class)

const nestedobj= {
    layer1:{
        layer2:{
            layer3:{
                targetValue:20
            }
        }
    }
}
console.log(nestedobj)
console.log(nestedobj.layer1.layer2.layer3.targetValue)
console.log(typeof nestedobj.layer1.layer2.layer3.targetValue)

console.log("-----------------------------------------------")

// functions
var add= function(){
    return 10+20;
}
console.log(add())

console.log("-----------------------------------------------")
// js opearator

const var5= 20
const var6= 30
console.log(var5+var6/2)
console.log(100%50)
console.log(8**2)


// Increment
let var7=0
console.log(var7)
console.log(var7++)
console.log(var7)
console.log(++var7)
console.log(var7)
console.log(var7--)
console.log(var7)
console.log(--var7)
console.log(var7)

// Assignment

let x= 10
console.log(x= x+5)
console.log(x+=5)
console.log(x-=5)
console.log(x*=5)

// comparison operator
console.log(20>15)
console.log(20===20)
console.log(20!==20)
console.log(20==='20')
console.log(20=='20')
console.log(typeof('20'))

var strVar= '20'
console.log(typeof(strVar))
var strNum= Number('20')
console.log(typeof(strNum))
console.log(strNum==strVar)
console.log(strNum===strVar)
console.log(strNum!=strVar)
console.log(strNum!==strVar)
console.log(strNum===Number(strVar))

console.log("-----------------")

// comparison operation on object
const obj2={
    property1:'some value',
    property2: 20
};

const arr3=[1,2,3,4,5]
console.log(arr3==arr3)
const arr4=[1,2,3,4,5]
console.log(arr3===arr4)


const obj3={
    property1:'some value',
    property2: 20
};

console.log(obj2===obj3)
console.log(obj2==obj3)

// turnary operator
console.log("-----------------")
const result= 20===20?'value match':'value donot match';
console.log(result)

let resultVar;
if(20===20){
    resultVar= 'value match'
}else{
    resultVar= 'vale not match'
}
console.log(resultVar)

// logicl operator
console.log(20===20 && 10===12)
console.log(20===20 || 10===12)
console.log(20===20 != 10===12)
console.log(20===20 == 10===12)
console.log(!(20===20 == 10===12))

console.log("------------")
// combination of all operator
const result2= (((40/20)===2 && true))
console.log(result2)
const result3= !(((40/20)===2 && true))
console.log(result3)
const result4= !(((40/20)===2 && true) || ('yes'=== 'no'));
console.log(result4)

// -------------
const fun= (()=>{
    return 20;
});
console.log(fun())