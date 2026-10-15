// Description:
// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

// Words will be separated by exactly one space and there will be no leading or trailing spaces.

// My solution

function insideOut(x){
  let arr = x.split(' ');
  let result = [];
 
  for(let word of arr){
    if(word.length < 4){
      result.push(word);
      
    }else{
      if(word.length % 2 === 0){
        let half = word.length / 2;
        let firstHalf = word.slice(0, half);
        let secondHalf = word.slice(half);
        let reverse = firstHalf.split('').reverse().join('') + 
            secondHalf.split('').reverse().join('');
         result.push(reverse);
        
      }else{
        let middle = Math.floor(word.length / 2);
        let firstHalf = word.slice(0, middle);
        let secondHalf = word.slice(middle + 1);
        let reverse = firstHalf.split('').reverse().join('') + word[middle] + 
            secondHalf.split('').reverse().join('');
        result.push(reverse);
      }
    }
  }
  
  return result.join(' ');
}