const strArr= ['hello','world']
console.log(strArr.join(" "))
console.log(strArr.join(","))

console.log("---------------")

const arr=[2,4,6,8]
callback=(itemFromArr)=>{
    return itemFromArr*2
}
console.log(callback(6))

console.log("---------------")
const strArr1=["Hello","world","my","name","is","Salaha"]
console.log(strArr1)
console.log(strArr1.join())
console.log(strArr1.join(","))
strArr1.map((itemFromArr)=>{
    itemFromArr[0]
})
console.log(strArr1)

console.log("---------------")
const str1= new String('Hello,world')
const str2= 'Hello,world'
console.log(str1==str2)
console.log(str1===str2)

console.log("---------------")
const date= new Date()
console.log(date)
console.log(date.valueOf())
console.log(Date.now())

console.log(date.toString())
console.log(date.toISOString())
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log("---------------")

