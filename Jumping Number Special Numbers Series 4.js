// Description:
// Definition
// Jumping number is a number such that all adjacent digits in it differ by 1.

// Task
// Given a number, return "Jumping!!" if it is a jumping number, otherwise return "Not!!".

// Notes
// Number passed is always a positive integer.

// Return the result as a string.

// The difference between digit 9 and 0 is not considered as 1.

// All single digit numbers are considered jumping numbers.

// Examples
// n	Expected	Explanation
// 9	"Jumping!!"	It's a single-digit number
// 79	"Not!!"	Adjacent digits don't differ by 1
// 23	"Jumping!!"	Adjacent digits differ by 1
// 556847	"Not!!"	Adjacent digits don't differ by 1
// 4343456	"Jumping!!"	Adjacent digits differ by 1
// 89098	"Not!!"	Adjacent digits don't differ by 1
// 32	"Jumping!!"	Adjacent digits differ by 1

// My solution

function jumpingNumber(n){
 let arr = String(n).split('').map(Number);
 if(arr.length === 1) return "Jumping!!";
 for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not!!";
    }
  }
  return "Jumping!!";
}