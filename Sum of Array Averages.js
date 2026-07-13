// Description:
// Program a function that takes in an array of arrays of numbers and returns the sum of the averages of the arrays.

// Example
// [
//   [3, 4, 1, 3, 5, 1, 4], #  (3 + 4 + 1 + 3 + 5 + 1 + 4) / 7 =  3
//   [21, 54, 33, 21, 77]   # (21 + 54 + 33 + 21 + 77)     / 5 = 41.2
// ]
// result: 3 + 41.2 = 44.2

// My solution

function sumAverage(arrays) {
  let averages = [];
    for(let arr of arrays){
      averages.push(arr.reduce((a, b) => a + b) / arr.length);
    }
  return averages.reduce((a, b) => a + b);
}