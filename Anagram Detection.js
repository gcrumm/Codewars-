// Description:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// My solution

var isAnagram = function(test, original) {
  if(test.length !== original.length) return false
  let testCount = {}
  let originalCount = {}
  
  for(let char of test.toLowerCase()){
    testCount[char] = (testCount[char] || 0) + 1
  }
  
  for (let char of original.toLowerCase()){
    originalCount[char] = (originalCount[char] || 0) + 1
  }
  
  for(let char in testCount){
    if (testCount[char] !== originalCount[char]){
        return false
    }
  }
  return true
};