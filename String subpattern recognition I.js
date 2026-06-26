// Description:
// In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

// For example:

// hasSubpattern("a") === false; //no repeated pattern
// hasSubpattern("aaaa") === true; //created repeating "a"
// hasSubpattern("abcd") === false; //no repeated pattern
// hasSubpattern("abababab") === true; //created repeating "ab"
// hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
// Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

// If you liked it, go for the next kata of the series!

// My solution

function hasSubpattern(str){
  let count = 0;
  for(let i = 1; i < str.length; i++){
    if(str.length % i !== 0){
      continue;
    }
    let pattern = str.slice(0, i);
    let repeatNum = str.length / pattern.length;
    if(pattern.repeat(repeatNum) === str) count += 1;
    }
    return count > 0 ? true : false;
  }