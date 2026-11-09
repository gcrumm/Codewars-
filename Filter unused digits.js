// Description:
// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

// My solution

function unusedDigits(...numbers) {
  let results ='';
  let digits = numbers.join('')
  for(let i = 0; i <= 9; i++){
    if(!digits.includes(String(i))){
      results += i;
    }
  }
  return results;
}