// Description:
// For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

// If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

// You can assume that you will receive a valid array of numbers.

// My solution

function maxedOut(arr) {
  let sum = arr.reduce((a, b) => a + b ** 3, 0);
  return  sum <= Number.MAX_SAFE_INTEGER ? sum : "You've pushed me to the max!";
}