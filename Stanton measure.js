// Description:
// The Stanton measure of an array is defined as follows:
// Let n be the number of times the value 1 appears in the array.
// The Stanton measure is then the number of times n appears in the array.

// Task
// Write a function that takes an integer array and returns its Stanton measure.

// Examples
// For [1, 4, 3, 2, 1, 2, 3, 2]:
// 1 appears 2 times → 2 appears 3 times → Stanton measure = 3.

// For [1, 4, 1, 2, 11, 2, 3, 1]:
// 1 appears 3 times → 3 appears 1 time → Stanton measure = 1.

// My solution

function stantonMeasure(a){
  if(a.length === 0) return 0;
  let count = {};
  for(let num of a){
    count[num] = (count[num] || 0) + 1;
  }
   let n = count[1];
   return count[n];
}