// Description:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My solution

function sumMix(x){
  let numX = x.map(Number)
  return numX.reduce((a,b) => a + b, 0)
}