function angryProfessor (threshold, arrivalTimeArray) {
  let numberOfStudentsInClass = 0;

  for(let i = 0; i < arrivalTimeArray.length; i++){
    if(arrivalTimeArray[i] <= 0) {
        numberOfStudentsInClass++
    }

    }


if(numberOfStudentsInClass >= threshold){
    return 'Yes'
} else {
    return 'NO'
}
}
const output = angryProfessor (3, [-2, -1, 0, 1, 2])

console.log(output)
/*
Function takes two arguments 'threshold', which is the minimum of students required for the class to be not cancelled and 
'arrivalTimeArray' which is an array of integers representing the arrval times of the students


*/