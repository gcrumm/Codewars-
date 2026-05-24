// Description:
// Complete the function that counts the number of unique consonants in a string (made up of printable ascii characters).

// Consonants are letters used in English other than "a", "e", "i", "o", "u".

// Remember, your function needs to return the number of unique consonants - disregarding duplicates. For example, if the string passed into the function reads "add", the function should return 1 rather than 2, since "d" is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases. For example, "Dad" passed into the function should return 1 as "d" and "D" are duplicates.

// Examples
// "add" ==> 1
// "Dad" ==> 1
// "aeiou" ==> 0
// "sillystring" ==> 7
// "abcdefghijklmnopqrstuvwxyz" ==> 21
// "Count my unique consonants!!" ==> 7

// My solution

function countConsonants(str) {
  let count = [];
  str = str.toLowerCase();
  let arr = str.split('');
  let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 
  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'
  ]
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for(let i = 0; i < arr.length; i++){
    if(!vowels.includes(arr[i]) && consonants.includes(arr[i])){
      count.unshift(arr[i]);
    }
  }
   return new Set(count).size;
}