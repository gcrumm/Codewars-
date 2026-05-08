// Description:
// Sum and Length
// In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.

// Knowing that the first 0 is negative, the second is positive, the third is negative, and so on...

// Examples
// [-1,2,3,4,0,1,0,-2,0,-3]

// ==> '10 5'

// sum of positives: 10 = 2 + 3 + 4 + 0 (second) + 1
// count of negatives: 5 ( -1, 0 (first), -2, 0 (third), -3 )

// My solution

function sumLength(array) {
  let posSum = array.reduce((a,b) => b > 0 ? a + b : a, 0);
  let zeros = [];
  let negCount = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] == 0){
      zeros.push(0);
    }else if(array[i] < 0){
      negCount += 1;
    }
  }
    for(let i = 0; i < zeros.length; i++){
      if(i % 2 == 0){
        negCount += 1;
      }
    }
      return `${posSum} ${negCount}`;
}