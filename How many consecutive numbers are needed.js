// Description:
// Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.

// Example
// [4, 8, 6] --> 2
// Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

// [-1, -5] --> 3
// Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

// [1] --> 0
// []  --> 0

// My solution

function consecutive(array) {
  let count = 0;
  array = array.sort((a, b) => a - b)
  for(let i = 1; i < array.length; i++){
    count += array[i] - array[i - 1] - 1;
  }
  return count;
}