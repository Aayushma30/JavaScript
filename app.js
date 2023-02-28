 //Creating variable
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






















//Spread Operator
// arrayAdd(...other)

//short circuiting
// || -> Logical OR
// && -> Logical AND
