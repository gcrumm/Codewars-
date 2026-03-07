// Description:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// My solution

function high(x){
   const letterPoints = {}
   for (let i = 0; i < 26; i++){
     const letter = String.fromCharCode(97 + i)
     letterPoints[letter] = i + 1
   }
  
  let words = x.split(' ')
  let highestScore = 0
  let bestWord = ''
  
  for(let i = 0; i < words.length; i++){
    const word = words[i]
    
    let score = 0
    
    for(let letter of word){
      score += letterPoints[letter]
    }
    
     if(score > highestScore){
    highestScore = score
    bestWord = word
  }
  }
  return bestWord
}