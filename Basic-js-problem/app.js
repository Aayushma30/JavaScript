// 1. Angry Professor
function angryProfessor(threshold, arrivalTimeArray) {
    let numberOfStudentsInClass = 0
  
    for (let i = 0; i < arrivalTimeArray.length; i++) {
      if (arrivalTimeArray[i] <= 0) {
        numberOfStudentsInClass++
      }
    }
  
    if (numberOfStudentsInClass >= threshold) {
      return 'Yes'
    } else {
      return 'No'
    }
  }
  
  const firstClassStatus = angryProfessor(3, [-2, -1, 0, 1, 2])
  const secondClassStatus = angryProfessor(5, [-2, -1, 1, 2, -3, 7, -10, 0, 0])
  
  console.log(firstClassStatus)
  console.log(secondClassStatus)
/*
Function takes two arguments 'threshold', which is the minimum of students required for the class to be not cancelled and 
'arrivalTimeArray' which is an array of integers representing the arrval times of the students


*/