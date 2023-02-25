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

