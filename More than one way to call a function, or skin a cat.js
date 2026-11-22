// Description:
// Write a single function that can be invoked by either

// sum(2, 3); // 5
// // or
// sum(2)(3); // 5
// Both of these examples should return the sum of the 2 numbers.

// My solution

function sum (a,b) {
  if(b !== undefined){
    return a + b;
  }else{
    return function(b){
      return a + b;
    }
  }
}