// Description:
// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces
// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

// My solution

function decipherThis(str) {
  let result = [];
  let arr = str.split(' ');
  
  for(let word of arr){
    let nums = '';
    let letterStart = 0;
    
    for(let i = 0; i < word.length; i++){
      if(!isNaN(word[i])){
        nums += word[i];
        letterStart = i + 1
      }else{
        break;
      }
    }
    
    nums = String.fromCharCode(Number(nums));
    let letters = word.slice(letterStart);
    letters = letters.split('');
    
    [letters[0], letters[letters.length - 1]] = 
      [letters[letters.length - 1], letters[0]];
    
    result.push(nums + letters.join(''));
     
    }
      return result.join(' ');
  };