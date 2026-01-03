// Description:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution

function findShort(s){
  let words = s.split(' ')
  let shortest = words[0]
  for(let i = 1; i < words.length; i++){
    let currentWord = words[i]
    if(currentWord.length < shortest.length){
      shortest = currentWord
    }
    }
  return shortest.length
}