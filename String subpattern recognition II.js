// Description:
// Similarly to the previous kata, you will need to return a boolean value if the base string can be expressed as the repetition of one subpattern.

// This time there are two small changes:

// if a subpattern has been used, it will be present at least twice, meaning the subpattern has to be shorter than the original string;
// the strings you will be given might or might not be created repeating a given subpattern, then shuffling the result.
// For example:

// "a"    --> false //no repeated shorter sub-pattern, just one character
// "aaaa" --> true  //just one character repeated
// "abcd" --> false //no repetitions
// "babababababababa" --> true //repeated "ba"
// "bbabbaaabbaaaabb" --> true //same as above, just shuffled
// Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

// My solution

function hasSubpattern(string){
  function gcd(a, b){
    while(b !== 0){
      [a, b] = [b, a % b];
    }
    return a;
  }
  let count = {};
  for(let char of string){
    count[char] = (count[char] || 0) + 1;
  }
  let frequencies = Object.values(count);
  let cd = frequencies.reduce((a, b) => gcd(a, b));
  return cd > 1;
}