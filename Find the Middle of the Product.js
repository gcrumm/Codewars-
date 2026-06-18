// Description:
// Given a string of characters, create a function returning the middle digit in the product of each digit in the string. If the product has an even number of digits, return the middle two digits.

// You must return an integer, not a string, so if the product is e.g. 2016, return 1, not '01'.

// Not all strings will contain digits and not all inputs will be string. In those cases, return -1.

// Examples:

// 's7d8jd9' -> 7, 8, 9 -> 7 * 8 * 9 = 504 --> 0

// '8888' -> 8, 8, 8, 8, -> 8 * 8 * 8 * 8 = 4096 --> 09 --> 9

// 'abc' --> -1

// My solution

function findMiddle(str){
  if(typeof str !== 'string') return - 1;
  let numsOnly = [];
  for(let i = 0; i < str.length; i++){
    const charCode = str.charCodeAt(i);
    if(charCode >= 48 && charCode <= 57){
      numsOnly.push(str[i]);
    }
  }
  if(numsOnly.length === 0) return - 1;
  let p = numsOnly.reduce((a,b) => a * b);
  let strP = Math.abs(p).toString();
  let midP = Math.floor(strP.length / 2);
  if(strP.length % 2 === 0){
    return Number(strP.slice(midP - 1, midP + 1));
  }else{
    return Number(strP.charAt(midP));
  }
}