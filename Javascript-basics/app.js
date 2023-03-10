
/*

// Creating variable
 //var, let, const, 
 // to create variable you need to use either 'let' or 'const'   Variable declaration list cannot be empty.


//Create variable
//storing string in variable: string
const myName = 'Aayushma Pal'
let myCountry = 'USA'
myCountry = 'Nepal'

console.log(myCountry)
//storing number in variable: Number
const myFavNum = 7
//  myFavNum = 7
console.log(myFavNum)
console.log ('Type of myFavNum variable: ', typeof myFavNum)
 
//storing multiple values in variable: Array
const countries = ['Nepal', 'USA', 'India']
console.log (countries[1])
console.log ('Type of myfavNum variable: ', typeof countries)

//storing multiple values (different type) in variable: Array
const aboutMe = ['Aayushma Pal' , 26 , ['JavaScript', 'Python']]
console.log(aboutMe)
console.log(aboutMe[2][1])

//storing multiple values in variable: object
 
const aboutMeObj = {
   fullName: "Aayushma Pal",
   yearsExperience: 5,
   favLanguage: ['JavaScript', 'Python']
}
console.log(aboutMeObj.favLanguage[1])

aboutMeObj.yearsExperience = 6
console.log(aboutMeObj)
aboutMeObj.country = 'Nepal'
console.log(aboutMeObj)

//Function
function sum(firstNumber, secondNumber) {
   return firstNumber + secondNumber
}
const result = sum(10, 20)
console.log (result)

const output = sum(1234, 5678)
console.log(output)

//print this line 10 times with for loop
console.log('Running 10 times')

const firstName = 'Aayushma'
//Template Literal
//without template literal
console.log('Hello ' + firstName + ' is my first name')

//with template literal
console.log(`Hello ${firstName} is my first name`)

const favProgrammingLanguages = ['Elixir', 'JavaScript', ' Python', 'Java' ]
//for loop and iteration
const arr = [0,1,2]
for(let i = 0; i < 4; i++){
   console.log(favProgrammingLanguages[i])
   arr.push(i)
}
console.log(arr) // creating side affect for a variable
// console.log('Running after loop')

//Condition
// const number = 10;
// if (number < 20) {
//    console.log('Your number is less than 20')
// } else {
//    console.log('Your number is greater than 20')
// }

// if else condition
const number = 'Hello';
if (number < 20) {
   console.log('Your number is less than 20')
} else if(number === 20){
   console.log('Your number is greater than 20')
} else if (number > 20) {
   console.log('Your number is greater than 20')
} else {
   console.log('Invalid number')
}

//Ternary operator
 // const nameResult = if(myName === 'Max') { return 'corrent'} else {return 'incorrect'}
const  nameResult = myName === 'Aayushma Pal' ? 'correct ' : 'incorrect'
console.log(nameResult)

*/

// const name = 'Languages'
// //Modern JavaScript Concepts 
// //Array Destructuring 
// const favLanguages = [{firstLang: 'Elixir'}, { secondLang: ['JavaScript', 'Python'] } , 'Java']
// // const backend = favLanguages[0]
// // const fullStack = favLanguages[1]
// // console.log(backend, fullStack)


// const [backend, secondObject] = favLanguages
// console.log(backend)


// //object destructuring
// const {firstLang} = backend
// console.log(firstLang)

// //consoling out python | regular way
// // const result = favLanguages[1].secondLang[1]
// // console.log(result)


// //Getting python as result using destructuring

// // const {secondLang} = secondObject
// // const [_, result] = secondLang
// // console.log(result)

// //Example: 
// const aboutMe = {
//    name: 'Aayu',
//    favLang: 'JavaScript',
//    secondLang: 'Python',
// }
// const {
//    name: myName,
//    favLang: {secondLang},
// } = aboutMe


// //Primitive Data Type
// // String, nuber, undefined, null, Nan, true, false

// // Non Primitive Data Type
// // function, object, array

// console.log(aboutMe)

// const fruits = ['orange', 'mango', 'banana']
// console.log(fruits)

// //callback function
// fruits.map(function (fruit) {
//    console.log(fruit)
// })

// //function declaration
// function add (a, b){
//    return a + b
// }
// // const addResult = add(10, 20)
// // console.log(addResult)

// //function Expression = treating a function like variable
// // const add = function (a, b) {
// //    return a + b
// // }

// //Arrow Function 
// // const add = (a, b) => a + b
// //    const addResult = add (10, 20)
// //    console.log (addResult)

// // const favNumbers = [1, 2, 3, 4]
// // const mappedNumbers = favNumbers.map((number) => number *10)
// // console.log(mappedNumbers)



// // //reverse 
// // const anotherFruits = fruits.map(function (fruit, index) {
// //    return index + 1
// // })


//spread operator

//  const durations = [-2, -1, 1, 2, -3, 7, -10, 0 , 0]
 
//rest parameter/operator
function test(...arrayNumbers) {

}

 function arrayAdd(a,b,c){
   console.log(a)

 }
 //rest parameter/operator
 const [firstElement, ...others] = [ 1,2,3,4]
 console.log(others)

 //spread operator syntax
//  arrayAdd (...others)

 //short circuiting
//  || -> logical OR 
//  && -> Logical AND
//   ! -> NOT

//falsy value 
//0, '' (empty String), undefined, null, NaN, false, 

// console.log( 0 || 1)
// console.log(1 || 2)
//  //short circuited at truthy value so outcome will be 2 
// console.log('' || 2 || false)
// //outcome will be a:2
// console.log({a:2} || [1,2,3] || 'hello' || a+2)

//Scope and Scope Chain

//Global Scope
const myCountry = 'Nepal'

// Introduced in modern javaScripe
//Block Level Scope
if(true) {
   const myCountry = 'Nepal'
   console.log(myCountry)
}

//Function Level Scope
function printountry() {
   const myCountry = 'Nepal'
   console.log(myCountry)
}

//Splice Method
// let arr = [5, 1, 8, 10, 12, 14, 16, 18]
// arr.splice(3, 4, 'tacos', 'Nepal')
// console.log(arr)

//Slice method 
//output will be new array won't affect the original array
let arr = [5, 1, 8]
let slicedArr = arr.slice(2)
console.log(arr)
console.log(slicedArr)

