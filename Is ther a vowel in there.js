// Description:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// My solution

function isVow(a){
 for(let i = 0; i < a.length; i++){
   if(a[i] === 97) a[i] = 'a';
   if(a[i] === 101) a[i] = 'e';
   if(a[i] === 105) a[i] = 'i';
   if(a[i] === 111) a[i] = 'o';
   if(a[i] === 117) a[i] = 'u';
 }
  return a;
}