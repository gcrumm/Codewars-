// Description:
// I would like to be able to pass an array with two elements to my function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

// My solution

function swapValues(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
}